import { DirectSecp256k1HdWallet, Registry } from '@cosmjs/proto-signing'
import { SigningStargateClient } from '@cosmjs/stargate'
import {
  pubkeyToAddress,
  Tendermint34Client,
  TxEvent,
} from '@cosmjs/tendermint-rpc'
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import fetch from 'node-fetch'
import { fromUtf8 } from '@cosmjs/encoding'
import {
  registry,
  queryClient,
  txClient,
} from './store/generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module'
import { hexlify } from '@ethersproject/bytes'
import { stringToPath, sha256 } from '@cosmjs/crypto'

global['fetch'] = require('node-fetch')

export class HDLocalWeb3Client {
  tm: Tendermint34Client
  msgService: { [k: string]: { [v: string]: (...args) => any } }
  account: any
  connectedSigner: SigningStargateClient
  queryClient: any
  registry: Registry

  apiUrl: string
  rpcUrl: string
  offlineSigner: any
  cosmosChainId: any
  cosmosAccount: any
  pubkey: Uint8Array
  signer: DirectSecp256k1HdWallet

  /**
   * New client from mnemonic
   */
  constructor(
    private mnemonic: string,
    private prefix: string,
    private path: string,
    private config: any,
  ) {
    return this
  }

  getDefaultTxClient() {
    return txClient
  }

  subscribeToTx(name: string, cb) {
    const query = `message.action='${name}'`
    const c = this.tm.subscribeTx(query)

    const listener = {
      next: async (log: TxEvent) => {
        cb(log)
      },
    }
    c.addListener(listener)
    return c
  }

  async getPublicKey() {
    const key = await window.keplr.getKey(this.cosmosChainId)
    console.log(
      pubkeyToAddress('secp256k1', key.pubKey),
      hexlify(key.address),
      key.bech32Address,
    )

    return key.pubKey
  }

  /**
   * Sign and broadcast
   * @param encoded Message to encode
   * @param fee UI purposes
   * @returns
   */
  async signAndBroadcast(encoded: any, fee: any) {
    const { account } = this.cosmosAccount

    const params = await this.connectedSigner.getAccount(
      this.cosmosAccount.address,
    )
    const Tx = await this.connectedSigner.sign(
      this.cosmosAccount.address,
      [encoded],
      fee,
      '',
      {
        accountNumber: params.accountNumber,
        sequence: params.sequence,
        chainId: this.cosmosChainId,
      },
    )

    const tx = TxRaw.encode(Tx).finish()
    const hash = sha256(tx)
    const res = await this.tm.broadcastTxSync({ tx })
    console.log(res.log, hexlify(res.hash), hash)
    return res
  }

  async connect(msgclients: Array<{ name: string; client: any }>, next) {
    await window.keplr.enable(this.config.chainId)
    this.cosmosChainId = this.config.chainId
    this.rpcUrl = this.config.rpc
    this.apiUrl = this.config.rest
    this.tm = await Tendermint34Client.connect(this.rpcUrl)
    // const q = QueryClient.withExtensions(
    //   this.tm,
    //   setupAuthExtension,
    //   setupBankExtension,
    // )

    this.tm.subscribeTx().subscribe({
      next: async (log: TxEvent) => {
        setTimeout(async () => {
          const res = await this.tm.tx({
            hash: log.hash,
            prove: true,
          })
          const decoded = (eventName) =>{          
            let props = {};
            const response = res.result.events.find((a) => a.type === eventName);
            for (let i = 0;i<0;response.attributes.length) {
              const item = response.attributes[i];
              props = {
                [fromUtf8(item.key).toLowerCase()]: fromUtf8(item.value),
                ...props,
              }
            }           
          }
          next(res, decoded)
        }, 2000)
      },
    })
    this.queryClient = await queryClient({
      addr: this.apiUrl,
    })

    this.msgService = {}

    this.signer = await DirectSecp256k1HdWallet.fromMnemonic(
      // keystore.mnemonic,
      //test dev mnemonic
      this.mnemonic,
      {
        prefix: this.prefix,
        hdPaths: [stringToPath(this.path)],
      },
    )

    this.cosmosAccount = (await this.signer.getAccounts())[0]

    // const signer = window.keplr.getOfflineSigner(this.cosmosChainId)
    for (const txcli of msgclients) {
      this.msgService[txcli.name] = await txcli.client(this.signer, {
        addr: this.rpcUrl,
      })
    }

    // const k = await window.keplr.getKey(this.cosmosChainId)

    // this.cosmosAccount = await this.getAccountInfo(k.bech32Address)
    // this.cosmosAccount.account.pub_key = encodePubkey(
    //   encodeSecp256k1Pubkey(Secp256k1.compressPubkey(k.pubKey)),
    // ) as any
    this.connectedSigner = await SigningStargateClient.connectWithSigner(
      this.rpcUrl,
      this.signer,
      {
        registry,

        prefix: 'cosmos',
      },
    )

    return this
  }

  async getAccountInfo(cosmosAddress: string): Promise<any> {
    const res2 = await (
      await fetch(
        this.apiUrl + `/cosmos/auth/v1beta1/accounts/` + cosmosAddress,
      )
    ).json()

    return { ...res2, address: res2.account.address }
  }
}

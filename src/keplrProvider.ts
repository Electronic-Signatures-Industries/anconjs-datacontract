import { fromBase64, fromUtf8 } from '@cosmjs/encoding'
import { encodeSecp256k1Pubkey } from '@cosmjs/amino'
import { Int53 } from '@cosmjs/math'
import { Secp256k1 } from '@cosmjs/crypto'
import {
  encodePubkey,
  makeAuthInfoBytes,
  Registry,
} from '@cosmjs/proto-signing'
import { SigningStargateClient } from '@cosmjs/stargate'
import { pubkeyToAddress, Tendermint34Client, TxEvent } from '@cosmjs/tendermint-rpc'
import { TxBody, TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import fetch from 'node-fetch'
import { txClient, registry, queryClient } from './store/generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module'
import { hexlify } from '@ethersproject/bytes'
import { BroadcastMode } from '@cosmjs/launchpad'

global['fetch'] = require('node-fetch')
import { Window as KeplrWindow } from '@keplr-wallet/types'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}
export class KeplrWeb3Client {
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
  signer: any
  /**
   * New client from mnemonic
   */
   constructor(
    private prefix: string,
    private path: string,
    private config: any,
  ) {
    return this
  }

  getTxClient(){
    return txClient as any;
  }

  subscribeToTx(name: string, cb) {
    const query = `message.action='${name}'`;
    const c = this.tm.subscribeTx(query);
    
    const listener = {
      next: async (log: any) => {
        cb(log);
      },
    };
    c.addListener(listener);
    return c;
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

    const pubkey = this.cosmosAccount.account.pub_key

    const txBodyEncodeObject = TxBody.fromPartial({
      memo: '',
      messages: [
        {
          typeUrl: '/cosmos.tx.v1beta1.TxBody',
          value: encoded,
        },
      ],
    })
    const gasLimit = Int53.fromString(fee.gas).toNumber()
    const authInfoBytes = makeAuthInfoBytes(
      [
        {
          pubkey,
          sequence: account.sequence,
        },
      ],
      fee.amount,
      gasLimit,
      1,
    )
    const { signature, signed } = await window.keplr.signDirect(
      this.cosmosChainId,
      this.cosmosAccount.bech32Address,
      {
        bodyBytes: TxBody.encode(txBodyEncodeObject).finish(),
        authInfoBytes,
        chainId: this.cosmosChainId,
        accountNumber: account.accountNumber,
      },
    )

    const tx = TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    })
    return window.keplr.sendTx(
      this.cosmosChainId,
      TxRaw.encode(tx).finish(),
      BroadcastMode.Sync,
    )
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

    this.queryClient = await queryClient({
      addr: this.apiUrl,
    })

    this.msgService = {}

    this.cosmosAccount = (await this.signer.getAccounts())[0]

    this.signer = window.keplr.getOfflineSigner(this.cosmosChainId)
    for (const txcli of msgclients) {
      this.msgService[txcli.name] = await txcli.client(this.signer, {
        addr: this.rpcUrl,
      })
    }

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

    this.signer = window.keplr.getOfflineSigner(this.cosmosChainId)
    this.connectedSigner = await SigningStargateClient.connectWithSigner(
      this.rpcUrl,
      this.signer,
      {
        registry,
        prefix: 'cosmos',
      },
    )

    const k = await window.keplr.getKey(this.cosmosChainId)

    this.cosmosAccount = await this.getAccountInfo(k.bech32Address)
    this.cosmosAccount.account.pub_key = encodePubkey(
      encodeSecp256k1Pubkey(Secp256k1.compressPubkey(k.pubKey)),
    ) as any

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
7
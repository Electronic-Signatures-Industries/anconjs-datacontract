import {
  AccountData,
  decodeTxRaw,
  DirectSecp256k1HdWallet,
  makeAuthInfoBytes,
  makeSignBytes,
  makeSignDoc,
  OfflineSigner,
  Registry,
} from '@cosmjs/proto-signing'
import { ethers, UnsignedTransaction } from 'ethers'
import { KeystoreDbModel, Wallet } from 'xdv-universal-wallet-core'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import { BroadcastTxResponse, SigningStargateClient } from '@cosmjs/stargate'
import {
  MsgFile,
  MsgFileResponse,
  MsgMetadata,
  MsgMetadataResponse,
} from './generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module/types/anconprotocol/tx'
import {
  txClient,
  queryClient,
  registry,
} from './generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module'
import { Subject, Subscription } from 'rxjs'
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import Web3 from 'web3'
import { makeStdTx } from '@cosmjs/launchpad'

export class AnconClient {
  wallet: Wallet
  tm: Tendermint34Client
  queryService: import('/home/rogelio/Code/xdv/xdv-node-provider/generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module/rest').Api<
    unknown
  >
  msgService: any
  account: any
  offlineSigner: SigningStargateClient
  ethersclient: ethers.Wallet
  /**
   * Register Msg imports
   */
  constructor(
    isWeb: boolean,
    private apiUrl: string,
    private rpcUrl: string,
    private signer?: OfflineSigner,
  ) {
    this.wallet = new Wallet({ isWeb })
  }

  /**
   * Creates a wallet account
   * @param accountName Account name
   * @param passphrase Passphrase
   */
  /**
   * Creates a wallet
   * @param accountName Account name
   * @param passphrase Passphrase
   * @returns
   */
  async createWallet(accountName: string, passphrase: string) {
    await this.wallet.open(accountName, passphrase)

    const acct = (await this.wallet.getAccount()) as any
    let walletId: string

    if (acct.keystores.length === 0) {
      walletId = await this.wallet.addWallet()
    } else {
      walletId = acct.keystores[0].walletId
    }

    const wallet = await this.wallet.createES256K({
      passphrase: passphrase,
      walletId: walletId,
    })

    return wallet as any
  }

  /**
   * Imports an existing seed phrase
   * @param accountName Account name
   * @param passphrase Passphrase
   * @param mnemonic Seed phrase
   * @returns
   */
  async importWallet(
    accountName: string,
    passphrase: string,
    mnemonic: string,
  ) {
    await this.wallet.open(accountName, passphrase)

    const acct = (await this.wallet.getAccount()) as any

    if (acct.keystores.length > 0) {
      // already imported
      return this.wallet
    }

    const walletId = await this.wallet.addWallet({
      mnemonic,
    })

    const wallet = await this.wallet.createES256K({
      passphrase: passphrase,
      walletId: walletId,
    })

    return wallet as any
  }

  async sign(
    accountNumber: any,
    address: string,
    chainId: string,
    sequence,
    fee: any,
    encoded,
    signer,
  ) {
    const txRaw = await signer.signDirect(address, [encoded], fee, '', {
      accountNumber,
      sequence,
      chainId,
    })
    
    const txRawBytes = Uint8Array.from(TxRaw.encode(txRaw).finish())
    return ethers.utils.hexlify(txRawBytes)
    // return ethers.utils.hexlify(txRawBytes)
  }

  async create(accountName: string, passphrase: string, mnemonic?: string) {
    let signer = this.signer as DirectSecp256k1HdWallet
    let rpc
    let eth: ethers.Wallet
    if (!this.signer) {
      const resp = await this.wallet.open(accountName, passphrase)
      const acct = (await this.wallet.getAccount(accountName)) as any
      let walletId = ''
      if (acct.keystores.length === 0) {
        walletId = await this.wallet.addWallet({
          mnemonic,
        })
      } else {
        walletId = acct.keystores[0].walletId
      }

      const keystore = await acct.keystores.find(
        (k: KeystoreDbModel) => k.walletId === walletId,
      )
      rpc = new ethers.providers.JsonRpcProvider('http://localhost:8545')
      eth = this.ethersclient = ethers.Wallet.fromMnemonic(keystore.mnemonic)
      this.ethersclient.connect(rpc)
      signer = await DirectSecp256k1HdWallet.fromMnemonic(keystore.mnemonic, {
        prefix: 'ethm',
      })
    }

    this.offlineSigner = await SigningStargateClient.offline(signer, {
      registry,
      prefix: 'ethm',
    })

    const offlineSig = this.offlineSigner
    this.account = await signer.getAccounts()
    console.log(this.account)
    const defaultAccount = this.account[0] as AccountData
    this.tm = await Tendermint34Client.connect(this.rpcUrl)
    const queryCli = await queryClient({
      addr: this.apiUrl,
    })
    this.queryService = queryCli
    const msgCli = await txClient(signer, {
      addr: this.rpcUrl,
    })
    const sign = this.sign
    this.msgService = msgCli
    const ancon = {
      query: queryCli,
      msg: msgCli,
      tendermint: this.tm,
      metadata: {
        add: async function (msg: MsgMetadata, fee: any): Promise<string> {
          const encoded = ancon.msg.msgMetadata(msg)

          // curl -X GET "http://localhost:1317/ethermint/evm/v1/cosmos_account/32A21C1BB6E7C20F547E930B53DAC57F42CD25F6" -H  "accept: application/json"
          const acct = 8
          const addr = defaultAccount.address
          const sequence = 0

          const txsignedhex = await sign(
            acct,
            addr,
            '9000',
            sequence,
            fee.fee,
            encoded,
            offlineSig,
          )

          // Set it to Data in a ethereum tx / SendTxArgs
          const tx: UnsignedTransaction = {
            data: txsignedhex,
            value: 0,
            chainId: 9000,
          }
          const params = [tx]
          const res = await rpc.send('ancon_SendSignedTx', params)

          return res
        },

        get: async function (cid: string, path: string): Promise<any> {
          const resp = await ancon.query.queryResource(cid, { path }, {})
          return resp.data
        },
      },
      file: {
        add: async function (
          msg: MsgFile,
          fee: any,
        ): Promise<BroadcastTxResponse> {
          const encoded = ancon.msg.msgFile(msg)

          // curl -X GET "http://localhost:1317/ethermint/evm/v1/cosmos_account/32A21C1BB6E7C20F547E930B53DAC57F42CD25F6" -H  "accept: application/json"
          const acct = 8
          const addr = defaultAccount.address
          const sequence = 0
          const signers = {
            pubkey: defaultAccount.pubkey,
            sequence,
          }
          const txsignedhex = await sign(
            acct,
            addr,
            '9000',
            sequence,
            fee.fee,
            encoded,
            offlineSig,
          )

          console.log(txsignedhex)
          // Set it to Data in a ethereum tx / SendTxArgs
          const tx = {
            data: txsignedhex,
            value: 0,
            chainId: 9000,
            // from: '0xB9F6914A7415F9AD867A9C537471A46DFA852BAE'
          }
          
          // const params = [txsignedhex]
          const raw = await eth.signTransaction({ ...tx })
          console.log(txsignedhex)
          const res = await rpc.send('ancon_sendRawTransaction', [raw])

          return res
        },
        get: async function (cid: string, path: string): Promise<any> {
          const resp = await ancon.query.queryResource(cid, { path }, {})
          return resp.data
        },
      },
    }

    return ancon
  }

  /**
   * Add Ancon Metadata
   * @param name Identifies the asset to which this token represents.
   * @param description Describes the asset to which this token represents.
   * @param image A URI pointing to a resource with mime type image/* representing the asset to which this token represents.
   * @param sources Current intellectual property.
   * @param owner The owner is a DID identifier.
   * @param parent Direct ascendant of the current intellectual property.
   * @param verifiedCredentialRef Is the verified credential for the metadata
   * @param links Sample of references included in the current intellectual property
   * @param creator
   * @param did
   * @param from
   */
  async executeMetadata({
    name,
    description,
    image,
    sources,
    owner,
    parent,
    verifiedCredentialRef,
    links,
    creator,
    did,
    from,
    fee,
  }) {
    const metadata = {
      name: name,
      description: description,
      image: image,
      sources: sources,
      owner: owner,
      parent: parent,
      verified_credential_ref: verifiedCredentialRef,
      links: links,
      creator: creator,
      did: did,
      from: from,
    }

    const sub = new Subject<string>()
    const query = `message.action='Metadata'`

    const subscription = this.tm.subscribeTx(query).subscribe({
      next: async (log: any) => {
        try {
          // Decode response
          const res = MsgMetadataResponse.decode(log.result.data)

          // Hack: Protobuf issue
          const cid = res.cid.substring(14)
          sub.next(cid)
          sub.complete()
        } catch (err) {
          sub.error(err)
        }
      },
    }) as Subscription

    try {
      const wait = new Promise((resolve, reject) => {
        sub.subscribe({ next: (i) => resolve(i), error: (e) => reject(e) })
      })
      const encoded = this.msgService.msgMetadata(metadata)
      // hack
      encoded.value.creator = creator
      encoded.value.sources = JSON.stringify(encoded.value.sources)
      encoded.value.links = JSON.stringify(encoded.value.links)
      const tx = await this.msgService.signAndBroadcast([encoded], {
        fee,
      })
      const cid = await wait
      return { transaction: tx, cid }
    } catch (e) {
      throw e
    } finally {
      subscription.unsubscribe()
    }
  }
  /**
   * Add Ancon File
   * @param
   */
  async addFile({ did, file, fee }) {
    const sub = new Subject<string>()
    ;(file as MsgFile).did = did
    const query = `message.action='File'`

    const subscription = this.tm.subscribeTx(query).subscribe({
      next: async (log: any) => {
        try {
          // Decode response
          const res = MsgFileResponse.decode(log.result.data)

          // Hack: Protobuf issue
          const cid = res.hash.substring(10)
          sub.next(cid)
          sub.complete()
        } catch (err) {
          sub.error(err)
        }
      },
    }) as Subscription

    try {
      const wait = new Promise((resolve, reject) => {
        sub.subscribe({ next: (i) => resolve(i), error: (e) => reject(e) })
      })
      const encoded = this.msgService.msgFile(file)
      const tx = await this.msgService.signAndBroadcast([encoded], {
        fee,
      })
      const cid = await wait
      return { transaction: tx, cid }
    } catch (e) {
      throw e
    } finally {
      subscription.unsubscribe()
    }
  }
}

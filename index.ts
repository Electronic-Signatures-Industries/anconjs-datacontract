import {
  DirectSecp256k1HdWallet,
  OfflineSigner,
  Registry,
} from '@cosmjs/proto-signing'

import { KeystoreDbModel, Wallet } from 'xdv-universal-wallet-core'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import { BroadcastTxResponse } from '@cosmjs/stargate'
import {
  MsgFile,
  MsgFileResponse,
  MsgMetadata,
  MsgMetadataResponse,
} from './generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module/types/anconprotocol/tx'
import {
  txClient,
  queryClient,
} from './generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module'

export class AnconClient {
  registry: Registry
  wallet: Wallet
  tm: Tendermint34Client
  queryService: import('/home/rogelio/Code/xdv/xdv-node-provider/generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module/rest').Api<
    unknown
  >
  msgService: any
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

  async create(accountName: string, passphrase: string, mnemonic?: string) {
    let signer = this.signer

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

      signer = await DirectSecp256k1HdWallet.fromMnemonic(keystore.mnemonic, {
        prefix: 'cosmos',
      })
    }
    this.tm = await Tendermint34Client.connect(this.rpcUrl)
    const queryCli = await queryClient({
      addr: this.apiUrl,
    })
    this.queryService = queryCli
    const msgCli = await txClient(signer, {
      addr: this.rpcUrl,
    })
    this.msgService = msgCli
    const ancon = {
      query: queryCli,
      msg: msgCli,
      tendermint: this.tm,
      metadata: {
        add: function (
          msg: MsgMetadata,
          fee: any,
        ): Promise<BroadcastTxResponse> {
          const encoded = ancon.msg.msgMetadata(msg)
          return ancon.msg.signAndBroadcast([encoded], fee)
        },
        get: async function (cid: string, path: string): Promise<any> {
          const resp = await ancon.query.queryResource(cid, path, {})
          return resp.data
        },
      },
      file: {
        add: function (msg: MsgFile, fee: any): Promise<BroadcastTxResponse> {
          const encoded = ancon.msg.msgFile(msg)
          return ancon.msg.signAndBroadcast([encoded], fee)
        },
        get: async function (cid: string, path: string): Promise<any> {
          const resp = await ancon.query.queryResource(cid, path, {})
          return resp.data
        },
      },
    }

    return ancon
  }

    /**
   * Executes a MsgMetadata transaction
   * @param msg MsgMetadata type
   * @param fee Fee type
   * @returns Promise<{wait, receipt}>
   */
  async executeMetadata(msg: MsgMetadata, fee) {
    const wait = new Promise(async (resolve, reject) => {
      const query = `message.action='Metadata'`
      this.tm.subscribeTx(query).addListener({
        next: async (log: any) => {
          // Decode response
          const res = MsgMetadataResponse.decode(log.result.data)

          // Hack: Protobuf issue
          const cid = res.cid.substring(10)

          // Get CID content from GET /ancon/{cid} or /ancon/{cid}/{path}
          resolve(cid)
        },
      })
    })

    const encoded = this.msgService.msgMetadata(msg)
    const receipt = this.msgService.signAndBroadcast([encoded], fee)

    return { wait, receipt }
  }

  /**
   * Executes a MsgFile transaction
   * @param msg MsgFile type
   * @param fee Fee type
   * @returns Promise<{wait, receipt}>
   */
  async executeFile(msg: MsgFile, fee) {
    const wait = new Promise(async (resolve, reject) => {
      const query = `message.action='File'`
      this.tm.subscribeTx(query).addListener({
        next: async (log: any) => {
          // Decode response
          const res = MsgFileResponse.decode(log.result.data)

          // Hack: Protobuf issue
          const cid = res.hash.substring(10)

          // Get CID content from GET /ancon/{cid} or /ancon/{cid}/{path}
          resolve(cid)
        },
      })
    })

    const encoded = this.msgService.msgFile(msg)
    const receipt = this.msgService.signAndBroadcast([encoded], fee)

    return { wait, receipt }
  }  
}

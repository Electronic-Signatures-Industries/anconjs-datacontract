import { DirectSecp256k1HdWallet, Registry } from '@cosmjs/proto-signing'

import { KeystoreDbModel, Wallet } from 'xdv-universal-wallet-core'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import { BroadcastTxResponse } from '@cosmjs/stargate'
import { MsgFile, MsgMetadata } from './generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module/types/anconprotocol/tx'
import { txClient, queryClient } from './generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module'

export class AnconClient {
  registry: Registry
  wallet: Wallet
  /**
   * Register Msg imports
   */
  constructor(isWeb: boolean, private apiUrl: string, private rpcUrl: string) {
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
    const acct = (await this.wallet.getAccount(accountName)) as any
    let walletId = ''
    if (acct.keystores.length === 0 && mnemonic) {
      walletId = await this.wallet.addWallet({
        mnemonic,
      })
    } else {
      walletId = acct.keystores[0].walletId
    }

    const keystore = await acct.keystores.find(
      (k: KeystoreDbModel) => k.walletId === walletId,
    )

    const signer = await DirectSecp256k1HdWallet.fromMnemonic(
      keystore.mnemonic,
      { prefix: 'cosmos' },
    )

    //     const msg = await txClient.msgCreateFile(value)
    //     const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee,
    // gas: "200000" }, memo})

    const tm = await Tendermint34Client.connect(this.rpcUrl)
    const queryCli = await queryClient({
      addr: this.apiUrl,
    })
    const msgCli = await txClient(signer, {
      addr: this.rpcUrl,
    })
    const ancon = {
      query: queryCli,
      msg: msgCli,
      tendermint: tm,
      metadata: {
        add: function (
          msg: MsgMetadata,
          fee: any,
        ): Promise<BroadcastTxResponse> {
          const encoded = ancon.msg.msgMetadata(msg)
          return ancon.msg.signAndBroadcast([encoded], fee)
        },
        get: async function (
          cid: string,
          path: string
        ): Promise<any> {
          const resp = await ancon.query.queryResource(cid, path, {})
          return resp.data
        },
      },
      file: {
        add: function (msg: MsgFile, fee: any): Promise<BroadcastTxResponse> {
          const encoded = ancon.msg.msgFile(msg)
          return ancon.msg.signAndBroadcast([encoded], fee)
        },
        get: async function (
          cid: string,
          path: string
        ): Promise<any> {
          const resp = await ancon.query.queryResource(cid, path, {})
          return resp.data
        },
      },
    }

    return ancon
  }
}


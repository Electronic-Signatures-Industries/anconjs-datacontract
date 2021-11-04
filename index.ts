import {
  ethermintToEth,
} from '@hanchon/ethermint-address-converter'
import { createKeplrWallet } from './KeplrWrapper'
import { fromBase64 } from '@cosmjs/encoding'
import { encodeSecp256k1Pubkey } from '@cosmjs/amino'
import { Int53 } from '@cosmjs/math'
import {
  encodePubkey,
  makeAuthInfoBytes,
  makeSignDoc,
  Registry,
} from '@cosmjs/proto-signing'
import {
  QueryClient,
  setupAuthExtension,
  setupBankExtension,
  SigningStargateClient,
} from '@cosmjs/stargate'
import {
  Tendermint34Client,
} from '@cosmjs/tendermint-rpc'
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import { ethers, Transaction } from 'ethers'
import fetch from 'node-fetch'
import { keccak256 } from 'ethers/lib/utils'
import { accountFromAny } from './accounts'
import { serialize } from '@ethersproject/transactions'

global['fetch'] = require('node-fetch')



/**
 * CosmJS Web3 Provider compatible with Keplr and Metamask
 */
export class CosmJSWeb3Provider {
  tm: Tendermint34Client
  public static HD_PATH = "m/44'/60'/0'/0/0"
  
  
  ethersclient: ethers.Wallet
  connectedSigner: SigningStargateClient
  
  queryClient: any
  registry: Registry

  apiUrl: string
  rpcUrl: string
  offlineSigner: any
  cosmosChainId: any
  provider: ethers.providers.Web3Provider
  cosmosAccount: any
  ethAccount: string
  pubkey: Uint8Array
  web3defaultAccount: string
  sender: ethers.providers.JsonRpcProvider
  evmChainId: number
  prefix: string
  /**
   * New client from mnemonic
   */
  constructor(
    url: string,
    prefix: string,
    chainId: string,
    evmChainId: number,
    wallet: ethers.providers.Web3Provider,
    _web3defaultAccount: string,
  ) {
    this.cosmosChainId = chainId;
    this.evmChainId = evmChainId;
    this.prefix = prefix;
    this.provider = wallet
    this.web3defaultAccount = _web3defaultAccount
    this.sender = new ethers.providers.JsonRpcProvider(url)

    return this
  }

  /**
   * Sign and broadcast dual chain (EVM / Cosmos), used only for Cosmos Msgs
   * @param methodName Msg name
   * @param msg Message to encode
   * @param fee Fee   
   * @returns
   */
  async signAndBroadcast(methodName: string, msg: any, fee: any) {
    const encoded = this.connectedSigner.registry.encode(msg)

    const pubkey = encodePubkey(encodeSecp256k1Pubkey(this.pubkey))
    const txBodyEncodeObject = {
      typeUrl: '/cosmos.tx.v1beta1.TxBody',
      value: {
        messages: [encoded],
        memo: '',
      },
    }

    
    const txBodyBytes = this.connectedSigner.registry.encode(txBodyEncodeObject)
    const gasLimit = Int53.fromString(fee.gas).toNumber()
    const authInfoBytes = makeAuthInfoBytes(
      [{ pubkey, sequence: this.cosmosAccount.sequence }],
      fee.amount,
      gasLimit,
    )
    const signDoc = makeSignDoc(
      txBodyBytes,
      authInfoBytes,
      this.cosmosChainId,
      this.cosmosAccount.accountNumber,
    )

  
    const { signature, signed } = await this.offlineSigner.signDirect(
      this.cosmosAccount.address,
      signDoc,
    )

    const txsignedhex = TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    })

    // Signs Ethereum TxData
    const tx = {
      data: TxRaw.encode(txsignedhex).finish(),
      value: 0,
      chainId: this.evmChainId,
    }

    let raw = await this.provider
      .getSigner(this.web3defaultAccount)
      .signMessage(keccak256(serialize(tx)))

    raw = serialize(tx, raw)

    const res = await this.sender.send('ancon_sendRawTransaction', [raw])

    return res
  }


  /**
   * Connects provider
   * @returns 
   */
  async connect(queryClientFromModule: any, registryFromModule: any) {
    const { config, accounts, offlineSigner } = await createKeplrWallet()
    this.cosmosChainId = config.chainId
    this.rpcUrl = config.rpc
    this.apiUrl = config.rest
    this.tm = await Tendermint34Client.connect(this.rpcUrl)
    const q = QueryClient.withExtensions(
      this.tm,
      setupAuthExtension,
      setupBankExtension,
    )

    this.ethAccount = ethermintToEth(accounts[0].address)
    this.queryClient = await queryClientFromModule({
      addr: this.apiUrl,
    })
    const anyAccount = await q.auth.account(accounts[0].address)
    this.cosmosAccount = accountFromAny(anyAccount)
    this.connectedSigner = await SigningStargateClient.connectWithSigner(
      this.rpcUrl,
      offlineSigner,
      { registry: registryFromModule, prefix: this.prefix },
    )

    //@ts-ignore
    this.offlineSigner = this.connectedSigner.signer    
    this.pubkey = accounts[0].pubkey
    return this
  }

  async getEthAccountInfo(defaultEthAddress: string): Promise<any> {
    const res = await (
      await fetch(
        this.apiUrl + `/ethermint/evm/v1/cosmos_account/` + defaultEthAddress,
      )
    ).json()

    return { ...res, address: res.cosmos_address }
  }
}

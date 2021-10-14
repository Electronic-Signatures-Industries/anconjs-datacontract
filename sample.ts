require('dotenv').config()
import { ethers, UnsignedTransaction } from 'ethers'
import { TxEvent } from '@cosmjs/tendermint-rpc/build/tendermint34'
import Web3 from 'web3'
import { AnconClient } from '.'
import {
  MsgFileResponse,
  MsgMetadata,
} from './generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module/types/anconprotocol/tx'
import { buildQuery } from '@cosmjs/tendermint-rpc/build/tendermint34/requests'

global['fetch'] = require('node-fetch')
export class Sample {
  static async addFile() {
    // Creates a new Ancon client instance
    // isWeb = rxdb for web or node
    // api url
    // rpc url
    const client = new AnconClient(
      false,
      'http://localhost:1317',
      'ws://localhost:26657',
      'http://localhost:8545',
      '',
      // If Kelpr Wallet, add signer here
    )

    // User creates new wallet / optional
    const ancon = await client.create(
      'walletcore',
      'abc123456789',
      'lend lock kit kiss walnut flower expect text upset nut arrive hub waste stairs climb neither must crowd harvest network wife lizard shiver obtain',
    )

    const address = 'ethm1x73r96c85nage2y05cpqlzth8ak2qg9p0vqc4d'

    // Create File message, add creator
    const msg = MsgMetadata.fromPartial({
      creator: address,
      name: 'tendermint',
      image: 'http://localhost:1317',
      sources: '["QmSnuWmxptJZdLJpKRarxBMS2Ju2oANVrgbr2xWbie9b2D"]',
      links: '["QmSnuWmxptJZdLJpKRarxBMS2Ju2oANVrgbr2xWbie9b2D"]',
      owner: 'did:key:z8mWaJHXieAVxxLagBpdaNWFEBKVWmMiE',
      description: 'tendermint',
      did: '',
      from: '',
    })

    // // Subscribe to Tendermint events
    // const query = `message.action='Metadata'`
    // ancon.tendermint.subscribeTx(query).addListener({
    //   next: async (log: TxEvent) => {

    //     // Decode response
    //     const res = MsgMetadataResponse.decode(log.result.data)

    //     // Hack: Protobuf issue
    //     const cid = res.hash.substring(10)

    //     // Get CID content from GET /ancon/{cid} or /ancon/{cid}/{path}
    //     const content = await ancon.metadata.get(cid, '')

    //     console.log(content)
    //   },
    // })

    // Create Metadata Message request
    // Add Cosmos uatom
    const receipt = await ancon.metadata.add(msg, {
      fee: {
        amount: [
          {
            denom: 'aphoton',
            amount: '4',
          },
        ],
        gas: '200000',
      },
    })
    console.log(receipt)


    setTimeout( async () => {

    
    const o = await ancon.tendermint.tx({
      hash: Uint8Array.from(Web3.utils.hexToBytes(`0x${receipt.txhash}`)),
      prove: true,
    })

    console.log(o)
  }, 5000)
  }
}

;(async function bootstrap() {
  await Sample.addFile()
})()

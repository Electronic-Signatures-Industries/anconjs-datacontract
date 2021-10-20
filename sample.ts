require('dotenv').config()
import { ics23 } from '@confio/ics23'
import { ethers, UnsignedTransaction } from 'ethers'
import { TxEvent } from '@cosmjs/tendermint-rpc/build/tendermint34'

import { AnconClient } from '.'
import {
  MsgMetadata,
  MsgMetadataResponse,
  MsgUpdateMetadataOwnership,
} from './store/generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module/types/anconprotocol/tx'
import Web3 from 'web3'

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
    let cid

    let msg = MsgMetadata.fromPartial({
      creator: address,
      name: 'tendermint',
      image: 'http://localhost:1317',
      additionalSources: [
        'bafyreia66w67tvsr5yiqagmxnklg3xdlxwroj2ho5sdzj45iydatgbbxci',
      ],
      links: ['bafyreia66w67tvsr5yiqagmxnklg3xdlxwroj2ho5sdzj45iydatgbbxci'],
      owner: 'did:key:z8mWaJHXieAVxxLagBpdaNWFEBKVWmMiE',
      description: 'tendermint',
      did: '',
      from: '',
    })

    // // Subscribe to Tendermint events
    let query = `message.action='Metadata'`
    ancon.tm.subscribeTx(query).addListener({
      next: async (log: TxEvent) => {
        // Decode response
        const res = MsgMetadataResponse.decode(log.result.data)
        console.log(res)
        // Hack: Protobuf issue
        cid = res.cid.split(';')[1]
        console.log(cid)

        // Get CID content from GET /ancon/{cid} or /ancon/{cid}/{path}
        const content = await ancon.queryClient.queryReadWithPath(cid, '/', {})

        console.log(content.data)
      },
    })

    query = `message.action='UpdateMetadataOwnership'`
    ancon.tm.subscribeTx(query).addListener({
      next: async (log: TxEvent) => {
        // Decode response
        const res = MsgUpdateMetadataOwnership.decode(log.result.data)
        console.log(res)
        // Hack: Protobuf issue
        cid = res.hash.split(';')[1]
        console.log(cid)

        // Get CID content from GET /ancon/{cid} or /ancon/{cid}/{path}
        const content = await ancon.queryClient.queryReadWithPath(cid, '/', {})

        console.log(content.data)

        let key = cid

        const proofs = await ancon.rpc.send('ancon_getProofs', [key])

        const root = proofs[0].events[0].attributes[0].value
        const exp = proofs[0].events[0].attributes[1].value
        const value = proofs[0].events[0].attributes[2].value
        //proofs[0].events[0].attributes[3].value

        console.log(root, key, value)
        const expobj = ics23.ExistenceProof.decode(ethers.utils.arrayify(exp))
        console.log('Existence Proof Object JSON', expobj.toJSON)

        console.log(expobj.toJSON())
      },
    })
    const chainId = 'anconprotocol_9000-1'
    const evmChainId = 9000

    const fee = {
        amount: [
          {
            denom: 'aphoton',
            amount: '4',
          },
        ],
        gas: '200000',
    }
    // Create Metadata Message request
    // Add Cosmos uatom
    const msgMetadataReceipt = await ancon.signAndBroadcast(
      chainId,
      evmChainId,
      'msgMetadata',
      msg,
      fee,
      '0x37A232EB07A4FA8CA88FA6020F89773F6CA020A1',
    )

    console.log(msgMetadataReceipt)
    // ancon.getTxProof(msgMetadataReceipt.txhash)
    setTimeout(async () => {
      let resp = await fetch(
        `http://localhost:26657/tx?hash=0x${msgMetadataReceipt.txhash}&prove=true`,
      )
      const o = await resp.json()
      console.log(o, msgMetadataReceipt)

      const msgupd = MsgUpdateMetadataOwnership.fromPartial({
        hash: cid,
        previousOwner: 'did:key:z8mWaJHXieAVxxLagBpdaNWFEBKVWmMiE',
        newOwner: 'did:ethr:0xeeC58E89996496640c8b5898A7e0218E9b6E90cB',
        currentChainId: '9000',
        recipientChainId: '3',
        sender: address,
      })

      // Change Metadata Message request
      // Add Cosmos uatom
      const msgUpdateMetadataReceipt = await ancon.signAndBroadcast(
        chainId,
        evmChainId,
        'msgUpdateMetadataOwnership',
        msgupd,
        fee, 
        '0x37A232EB07A4FA8CA88FA6020F89773F6CA020A1',
      )
    }, 5000)
  }
}

;(async function bootstrap() {
  await Sample.addFile()
})()

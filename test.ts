import { fromBase64, fromHex, Bech32 } from '@cosmjs/encoding'

import { assertIsBroadcastTxSuccess, logs } from '@cosmjs/stargate'
import {
  ABCIMessageLog,
  TxMsgData,
  TxResponse,
} from '@cosmjs/stargate/build/codec/cosmos/base/abci/v1beta1/abci'
import { hexlify } from 'ethers/lib/utils'
import { XDVNodeProvider } from '.'
import {
  MsgClientImpl,
  MsgCreateFile,
  MsgCreateFileResponse,
} from './types/xdvnode/tx'
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import { TxBody } from '@cosmjs/stargate/build/codec/cosmos/tx/v1beta1/tx'
import {
  AuthInfo,
  SignDoc,
  Tx,
} from '@cosmjs/proto-signing/build/codec/cosmos/tx/v1beta1/tx'
import { makeAuthInfoBytes, makeSignDoc } from '@cosmjs/proto-signing'
import { SignMode } from '@cosmjs/proto-signing/build/codec/cosmos/tx/signing/v1beta1/signing'
import { Any } from '@cosmjs/proto-signing/build/codec/google/protobuf/any'
import Long from 'long'

export class Test {
  static async uploadFile() {
    const client = new XDVNodeProvider()
    await client.createAccount('walletcore', 'abc123456789')
    const provider = await client.createXDVProvider(
      'walletcore',
      'abc123456789',
    )
    const address = 'xdv1fqc34u04rus0xrpmw2pr5w86e9xmdw7xeusw29'
    const msg = MsgCreateFile.fromPartial({
      creator: address,
      contentType: 'text/plain',
      data: Buffer.from('hello world!!!!!!!!!!'),
    })

    const s = await provider.bank.msgSend({
      fromAddress: address,
      toAddress: address,
      amount: [
        {
          denom: 'token',
          amount: '100',
        },
      ],
    })

    const fee = [
      {
        denom: 'token',
        amount: '100',
      },
    ]
    const decoder = new TextDecoder()
    const query = `message.action='CreateFile'`

    provider.tmclient.subscribeTx(query).addListener({
      next: async (log: any) => {
        const rd = new Reader(log.result.data)
        // rd.uint32()
        rd.string()
        const c = rd.skip(4)
        const resp = MsgCreateFileResponse.decode(c.bytes())
        try {
        const cid = await provider.query.queryFile(resp.cid)
        console.log(log.result, resp, await cid.text())
        } catch (err) {
          console.log(err)
        }
      },
    })

    const acct = await provider.stargate.getAccount(address)
    const body = TxBody.fromPartial({
      messages: [provider.xdvnode.msgCreateFile(msg)],
    })

    const ss = await provider.stargate.signAndBroadcast(
      address,
      body.messages,
      {
        amount: [
          {
            denom: 'token',
            amount: '4',
          },
        ],
        gas: '200000',
      },
    )

    console.log(ss)
    //    assertIsBroadcastTxSuccess(result)
    // const r = await provider.xdvnode..CreateFile({
    //   creator: 'xdv1fqc34u04rus0xrpmw2pr5w86e9xmdw7xeusw29',
    //   contentType: 'text/plain',
    //   data: Buffer.from('hello world!!!!!!!!!!'),
    // })
  }
}

;(async function bootstrap() {
  await Test.uploadFile()
})()

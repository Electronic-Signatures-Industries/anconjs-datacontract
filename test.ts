import { fromBase64, fromHex, Bech32 } from '@cosmjs/encoding'
import { decodeTxRaw } from '@cosmjs/proto-signing'
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

export class Test {
  static async uploadFile() {
    const client = new XDVNodeProvider()
    await client.createAccount('walletcore', 'abc123456789')
    const provider = await client.createXDVProvider(
      'walletcore',
      'abc123456789',
    )
    const msg = await provider.xdvnode.msgCreateFile({
      creator: 'xdv1fqc34u04rus0xrpmw2pr5w86e9xmdw7xeusw29',
      contentType: 'text/plain',
      data: Buffer.from('hello world!!!!!!!!!!'),
    })

    const s = await provider.bank.msgSend({
      fromAddress: 'xdv1fqc34u04rus0xrpmw2pr5w86e9xmdw7xeusw29',
      toAddress: 'xdv1fqc34u04rus0xrpmw2pr5w86e9xmdw7xeusw29',
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
        const rd = (new Reader(log.result.data))
        // rd.uint32()
        rd.string()
        console.log(
          rd.string()
          )
      },
    })

    const result = await provider.xdvnode.signAndBroadcast([msg], {
      fee: { amount: fee, gas: '200000' },
    })

    assertIsBroadcastTxSuccess(result)
    // const r = await provider.xdvnode..CreateFile({
    //   creator: 'xdv1fqc34u04rus0xrpmw2pr5w86e9xmdw7xeusw29',
    //   contentType: 'text/plain',
    //   data: Buffer.from('hello world!!!!!!!!!!'),
    // })

    // console.log(result)
  }
}

;(async function bootstrap() {
  await Test.uploadFile()
})()

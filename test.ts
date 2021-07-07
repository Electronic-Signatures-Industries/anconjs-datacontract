import { decodeTxRaw } from '@cosmjs/proto-signing'
import { XDVNodeProvider } from '.'
import {
  MsgClientImpl,
  MsgCreateFile,
  MsgCreateFileResponse,
} from './types/xdvnode/tx'

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
      data: Buffer.from('hello world'),
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
    const result = await provider.xdvnode.signAndBroadcast([msg], {
      fee: { amount: fee, gas: '200000' },
    })

    const hash = Buffer.from(`0x${result.transactionHash}`)
    console.log(hash)
    console.log(result)
    const query = `tx.height=${result.height}`
    // &prove=true&page=1&per_page=30&order_by=asc`
    const tx = await provider.tmclient.txSearch({
      query
    })

    console.log(tx)
    console.log(tx.totalCount, tx.txs[0].result)
    console.log(MsgCreateFileResponse.decode(tx.txs[0].result.data))
  }
}

;(async function bootstrap() {
  await Test.uploadFile()
})()

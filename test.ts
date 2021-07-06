import { XDVNodeProvider } from '.'

export class Test {
  static async uploadFile() {
    const client = new XDVNodeProvider()
    await client.createAccount('walletcore', 'abc123456789')
    const provider = await client.createXDVProvider(
      'walletcore',
      'abc123456789',
    )
    const msg = await provider.xdvnode.msgCreateFile({
      creator: 'xdv1hm9hcatmaat4dl6wv4303pflefzg9ep98qqej0',
      contentType: 'text/plain',
      data: Buffer.from('hello world'),
    })

  const s =  await provider.bank.msgSend({
      fromAddress: 'xdv1hm9hcatmaat4dl6wv4303pflefzg9ep98qqej0',
      toAddress: 'xdv1hm9hcatmaat4dl6wv4303pflefzg9ep98qqej0',
      amount: [
        {
          denom: 'token',
          amount: '100',
        },
      ],
    })

    const fee = [        {
          denom: 'token',
          amount: '100',
        },]
    const result = await provider.xdvnode.signAndBroadcast([s, msg], {
      fee: { amount: fee, gas: '200000' },
    })

    console.log(result)
  
    // provider.xdvnode.
  }
}

;(async function bootstrap() {
  await Test.uploadFile()
})()

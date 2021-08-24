
import { XDVNodeProvider } from '.'
import { MsgFile, MsgFileMetadataResponse } from './generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module/types/anconprotocol/tx'

export class Test {
  static async uploadFile() {
    const data = `{
		link: 'bafyreib77wpm5tvgkbr4t4aiiopjyispw76h2trd5yvpzmq6cejdjhcsie',
		payload: 'AXESID_9ns7OplBjyfAIQ56cIk-3_H1OI-4q_LIeERI0nFJB',
		signatures: [
		  {
			protected: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImRpZDprZXk6ekFIZDdoQ1dXcjgxUlZIZkxYMkNaRFladGNDR2lMQXc5czdyRzRWdjhlQ3g4RERkZiN6QUhkN2hDV1dyODFSVkhmTFgyQ1pEWVp0Y0NHaUxBdzlzN3JHNFZ2OGVDeDhERGRmIn0',
			signature: 'NiQ236iEKLjkJ7zqU4u1GIqsnV0fj9XU3fp8th8lLqCRstn-UtiL-CZE4-WQBPm_N_brRqyCdTiqRcMp3wAybve8MRFzY1d8DEnD8iyxY_ZJOeLr_d9hSKDqLCX80uuxjPk89MExrK19pC36k44kAO1wIYBwCn8iiiIHtkPrYnebJ1iWS5JTd_ZaHMitZ99QCNpmQG3-1BSNXucERr61Mn9VrLgwpQNlCfC_m_QXCsKYhgTo020fDK0aHuAgmMAGKW-s9F9BA-PGvNike_S3KjKiy0dmcWi-J07N7d5hgYXh8l0RChwz_yLFO8o6k0EgEZbFTZdLqeuYM6VHoGWpDQ'
		  }
		]
	  }`

    const client = new XDVNodeProvider()
    await client.createAccount('walletcore', 'abc123456789')
    const provider = await client.createXDVProvider(
      'walletcore',
      'abc123456789',
    )
    const address = process.env.ALICE;
    const msg = MsgFile.fromPartial({
      creator: address,
      contentType: 'application/json',
      content: 'hello',
      mode:"",
      path: 'index.html',
      time: new Date().getTime().toString(10),
    })

    const query = `message.action='File'`

    provider.tmclient.subscribeTx(query).addListener({
      next: async (log: any) => {
        console.log(log)
        const h = MsgFileMetadataResponse.decode(log.result.data)
        // const rd = new Reader(log.result.data)
        console.log(MsgFileMetadataResponse.toJSON(h))
        // rd.uint32()
        // rd.string()
        // const c = rd.skip(4)
        // const resp = MsgCreateFileResponse.decode(c.bytes())
        // try {
        //   const cid = await provider.query.queryFile(resp.cid)
        //   console.log(log.result, resp, await cid.text())
        // } catch (err) {
        //   console.log(err)
        // }
      },
    })

    const ss = await provider.ancon.signAndBroadcast(
      [provider.ancon.msgFile(msg)],
      {
        fee: {
          amount: [
            {
              denom: 'token',
              amount: '4',
            },
          ],
          gas: '200000',
        },
      },
    )

    console.log(ss)
  }
}

;(async function bootstrap() {
  await Test.uploadFile()
})()

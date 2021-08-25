
import { MsgData } from '@cosmjs/stargate/build/codec/cosmos/base/abci/v1beta1/abci'
import { TxEvent } from '@cosmjs/tendermint-rpc/build/tendermint34'
import { AnconClient } from '.'
import { MsgFileResponse } from './generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module/types/anconprotocol/tx'

global['fetch'] = require('node-fetch')
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

    const client = new AnconClient(
      false,
      'https://ancon.dao.pa/rest',
      'wss://ancon.dao.pa/rpc'
    );
    const ancon = await client.create(
      'walletcore',
      'abc123456789',
      process.env.ALICE_M,
    )

    const address = process.env.ALICE;
    const msg = {
      creator: address,
      contentType: 'application/json',
      content: 'hello',
      mode:"",
      path: 'index.html',
      time: new Date().getTime().toString(10),
      did: '',
      from: '',
    }

    const query = `message.action='File'`

    ancon.tendermint.subscribeTx(query).addListener({
      next: async  (log: TxEvent) => {        
        const d = MsgData.fromJSON(log.result)
        const res = MsgFileResponse.decode(d.data)

        const cid = res.hash.substring(10);        
        console.log(log, d, cid)

        const content = await ancon.file.get(
          cid,
          ''
        )

        console.log(content)

      },
    })

    const ss = await ancon.file.add(
      msg,
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

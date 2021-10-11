"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sample = void 0;
require('dotenv').config();
const _1 = require(".");
const tx_1 = require("./generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module/types/anconprotocol/tx");
global['fetch'] = require('node-fetch');
class Sample {
    static async addFile() {
        // Creates a new Ancon client instance
        // isWeb = rxdb for web or node
        // api url 
        // rpc url
        const client = new _1.AnconClient(false, 'http://localhost:1317', 'ws://localhost:26657');
        // User creates new wallet / optional
        const ancon = await client.create('walletcore', 'abc123456789', "lend lock kit kiss walnut flower expect text upset nut arrive hub waste stairs climb neither must crowd harvest network wife lizard shiver obtain");
        const address = 'ethmx23pcxakulpq74r7jv948kk90apv6f0k7s943z';
        // Create File message, add creator
        const msg = {
            creator: address,
            contentType: 'application/json',
            content: 'hello',
            mode: '',
            path: 'index.html',
            time: new Date().getTime().toString(10),
            did: '',
            from: '',
        };
        // Subscribe to Tendermint events
        const query = `message.action='File'`;
        ancon.tendermint.subscribeTx(query).addListener({
            next: async (log) => {
                // Decode response
                const res = tx_1.MsgFileResponse.decode(log.result.data);
                // Hack: Protobuf issue
                const cid = res.hash.substring(10);
                // Get CID content from GET /ancon/{cid} or /ancon/{cid}/{path}
                const content = await ancon.file.get(cid, '');
                console.log(content);
            },
        });
        // Create File Message request
        // Add Cosmos uatom 
        const receipt = await ancon.file.add(msg, {
            fee: {
                amount: [
                    {
                        denom: 'aphoton',
                        amount: '4',
                    },
                ],
                gas: '200000',
            },
        });
    }
}
exports.Sample = Sample;
;
(async function bootstrap() {
    await Sample.addFile();
})();
//# sourceMappingURL=sample.js.map
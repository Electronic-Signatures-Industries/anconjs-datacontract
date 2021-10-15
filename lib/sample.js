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
        const client = new _1.AnconClient(false, 'http://localhost:1317', 'ws://localhost:26657', 'http://localhost:8545', '');
        // User creates new wallet / optional
        const ancon = await client.create('walletcore', 'abc123456789', 'lend lock kit kiss walnut flower expect text upset nut arrive hub waste stairs climb neither must crowd harvest network wife lizard shiver obtain');
        const address = 'ethm1x73r96c85nage2y05cpqlzth8ak2qg9p0vqc4d';
        // Create File message, add creator
        const msg = tx_1.MsgMetadata.fromPartial({
            creator: address,
            name: 'tendermint',
            image: 'http://localhost:1317',
            sources: JSON.stringify([
                'bafyreia66w67tvsr5yiqagmxnklg3xdlxwroj2ho5sdzj45iydatgbbxci',
            ]),
            links: JSON.stringify([
                'bafyreia66w67tvsr5yiqagmxnklg3xdlxwroj2ho5sdzj45iydatgbbxci',
            ]),
            owner: 'did:key:z8mWaJHXieAVxxLagBpdaNWFEBKVWmMiE',
            description: 'tendermint',
            did: '',
            from: '',
        });
        // // Subscribe to Tendermint events
        const query = `message.action='Metadata'`;
        ancon.tendermint.subscribeTx(query).addListener({
            next: async (log) => {
                // Decode response
                const res = tx_1.MsgMetadataResponse.decode(log.result.data);
                console.log(res);
                // Hack: Protobuf issue
                const cid = res.cid.split(';')[1];
                console.log(cid);
                // Get CID content from GET /ancon/{cid} or /ancon/{cid}/{path}
                const content = await ancon.metadata.get(cid, '/');
                console.log(content);
            },
        });
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
        });
        console.log(receipt);
        // ancon.getTxProof(receipt.txhash)
        setTimeout(async () => {
            //const resp = await fetch(`http://localhost:26657/tx?hash=0x${receipt.txhash}&prove=true`)
            //  const o = await resp.json()
            const o = await ancon.rpc.send('ancon_getTransactionByHash', [
                `${receipt.txhash}`,
            ]);
            console.log(o, o.logs[0].events[0].attributes);
        }, 5000);
    }
}
exports.Sample = Sample;
;
(async function bootstrap() {
    await Sample.addFile();
})();
//# sourceMappingURL=sample.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sample = void 0;
const tslib_1 = require("tslib");
require('dotenv').config();
const web3_1 = (0, tslib_1.__importDefault)(require("web3"));
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
            sources: '["QmSnuWmxptJZdLJpKRarxBMS2Ju2oANVrgbr2xWbie9b2D"]',
            links: '["QmSnuWmxptJZdLJpKRarxBMS2Ju2oANVrgbr2xWbie9b2D"]',
            owner: 'did:key:z8mWaJHXieAVxxLagBpdaNWFEBKVWmMiE',
            description: 'tendermint',
            did: '',
            from: '',
        });
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
        });
        console.log(receipt);
        setTimeout(async () => {
            const o = await ancon.tendermint.tx({
                hash: Uint8Array.from(web3_1.default.utils.hexToBytes(`0x${receipt.txhash}`)),
                prove: true,
            });
            console.log(o);
        }, 5000);
    }
}
exports.Sample = Sample;
;
(async function bootstrap() {
    await Sample.addFile();
})();
//# sourceMappingURL=sample.js.map
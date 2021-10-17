"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sample = void 0;
const tslib_1 = require("tslib");
require('dotenv').config();
const ics23_1 = require("@confio/ics23");
const ethers_1 = require("ethers");
const _1 = require(".");
const tx_1 = require("./generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module/types/anconprotocol/tx");
const web3_1 = (0, tslib_1.__importDefault)(require("web3"));
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
            const resp = await fetch(`http://localhost:26657/tx?hash=0x${receipt.txhash}&prove=true`);
            const o = await resp.json();
            console.log(o, receipt);
            const proofs = await ancon.rpc.send('ancon_getProofs', [
                parseInt(o.result.height, 10),
            ]);
            const key = proofs[0].events[0].attributes[0].value;
            const value = proofs[0].events[0].attributes[1].value;
            const leaf = proofs[0].events[0].attributes[2].value;
            const proof = proofs[0].events[0].attributes[3].value;
            const root = proofs[0].events[0].attributes[4].value;
            const commmitment = proofs[0].events[0].attributes[5].value;
            console.log(root, key, value, proof, commmitment);
            //  app_hash=AD836E31D7336A76EF897A0C259D5026E7A78602D4FDB1CA31493456863C19FB
            const res = await ancon.rpc.send('ancon_verifyMembership', [
                '0x7d6330f43094805332c9bd13265c9cf7307c441e8f9f6d6ffa80ead843050357', '0x2f616e636f6e70726f746f636f6c2f62616679726569666372723576333462367977693279706d626f786b6e7970747a7a757a776e6964336c787472727134786e79756d68667a7975752f783a46453343323139463642343034454130433946343335394534313241354331363841393631354534353234423544413739433038313338433931314142383041', '0xFE3C219F6B404EA0C9F4359E412A5C168A9615E4524B5DA79C08138C911AB80A',
                '0x7b226578697374223a7b226b6579223a224c3246755932397563484a766447396a62327776596d466d65584a6c61575a6a636e4931646a4d30596a5a3564326b7965584274596d39346132353563485236656e5636643235705a444e7365485279636e4530654735356457316f5a6e7035645855766544704752544e444d6a4535526a5a434e44413052554577517a6c474e444d314f5555304d544a424e554d784e6a68424f5459784e5555304e544930516a564551546335517a41344d544d34517a6b784d5546434f444242222c2276616c7565223a222f6a77686e3274415471444a3944576551537063466f7157466552535331326e6e4167546a4a456175416f3d222c226c656166223a7b2268617368223a22534841323536222c22707265686173685f6b6579223a224e4f5f48415348222c22707265686173685f76616c7565223a22534841323536222c226c656e677468223a225641525f50524f544f222c22707265666978223a2241413d3d227d2c2270617468223a5b5d7d7d'
            ]);
            console.log(root, res[0].events[0].attributes[0].value);
            const exp = web3_1.default.utils.hexToBytes(proof);
            const expobj = ics23_1.ics23.ExistenceProof.decode(ethers_1.ethers.utils.arrayify(exp));
            const abiInnerOps = [];
            // InnerOp[]
            expobj.path.forEach(inner => {
                const abiLeadOp = ethers_1.ethers.utils.defaultAbiCoder.encode(['tuple(HashOp,bytes,bytes)'], [
                    inner.hash,
                    inner.prefix,
                    inner.suffix
                ]);
                abiInnerOps.push(abiLeadOp);
            });
            // LeafOp
            const abiLeadOp = ethers_1.ethers.utils.defaultAbiCoder.encode(['tuple(HashOp,HashOp,HashOp,LengthOp,bytes)'], [
                expobj.leaf.hash,
                expobj.leaf.prehashKey,
                expobj.leaf.prehashValue,
                expobj.leaf.length,
                expobj.leaf.prefix,
            ]);
            const abiExp = ethers_1.ethers.utils.defaultAbiCoder.encode(['tuple(bool, bytes,bytes,LeafOp,InnerOp[])'], [false, expobj.key, expobj.value, abiLeadOp, abiInnerOps]);
            // Send to bridge verifier
            // 1. Create / Instantiate ancon metadata own bridge verifier
            // 2. abiExp === ExistenceProof, root, path, value bytes
            // 3. Add missing boolean valid property
            // ancon.changeOwnerWithProof(
            //   abiExp,
            //   root,
            //   path,
            //   value,
            // )
        }, 5000);
    }
}
exports.Sample = Sample;
;
(async function bootstrap() {
    await Sample.addFile();
})();
//# sourceMappingURL=sample.js.map
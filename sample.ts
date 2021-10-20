require("dotenv").config();
import { ics23 } from "@confio/ics23";
import { ethers, UnsignedTransaction } from "ethers";
import { TxEvent } from "@cosmjs/tendermint-rpc/build/tendermint34";

import { AnconClient } from ".";
import {
  MsgFileResponse,
  MsgMetadata,
  MsgMetadataResponse,
} from "./generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module/types/anconprotocol/tx";
import Web3 from "web3";

global["fetch"] = require("node-fetch");
export class Sample {
  static async addFile() {
    // Creates a new Ancon client instance
    // isWeb = rxdb for web or node
    // api url
    // rpc url
    const client = new AnconClient(
      false,
      "http://localhost:1317",
      "ws://localhost:26657",
      "http://localhost:8545",
      ""
      // If Kelpr Wallet, add signer here
    );

    // User creates new wallet / optional
    const ancon = await client.create(
      "walletcore",
      "abc123456789",
      "lend lock kit kiss walnut flower expect text upset nut arrive hub waste stairs climb neither must crowd harvest network wife lizard shiver obtain"
    );

    const address = "ethm1x73r96c85nage2y05cpqlzth8ak2qg9p0vqc4d";
    let cid;
    // Create File message, add creator
    const msg = MsgMetadata.fromPartial({
      creator: address,
      name: "tendermint",
      image: "http://localhost:1317",
      sources: JSON.stringify([
        "bafyreia66w67tvsr5yiqagmxnklg3xdlxwroj2ho5sdzj45iydatgbbxci",
      ]),
      links: JSON.stringify([
        "bafyreia66w67tvsr5yiqagmxnklg3xdlxwroj2ho5sdzj45iydatgbbxci",
      ]),
      owner: "did:key:z8mWaJHXieAVxxLagBpdaNWFEBKVWmMiE",
      description: "tendermint",
      did: "",
      from: "",
    });

    // // Subscribe to Tendermint events
    const query = `message.action='Metadata'`;
    ancon.tendermint.subscribeTx(query).addListener({
      next: async (log: TxEvent) => {
        // Decode response
        const res = MsgMetadataResponse.decode(log.result.data);
        console.log(res);
        // Hack: Protobuf issue
        cid = res.cid.split(";")[1];
        console.log(cid);

        // Get CID content from GET /ancon/{cid} or /ancon/{cid}/{path}
        const content = await ancon.metadata.get(cid, "/");

        console.log(content);
      },
    });

    // Create Metadata Message request
    // Add Cosmos uatom
    const receipt = await ancon.metadata.add(msg, {
      fee: {
        amount: [
          {
            denom: "aphoton",
            amount: "4",
          },
        ],
        gas: "200000",
      },
    });

    console.log(receipt);
    // ancon.getTxProof(receipt.txhash)
    setTimeout(async () => {
      let resp = await fetch(
        `http://localhost:26657/tx?hash=0x${receipt.txhash}&prove=true`
      );
      const o = await resp.json();
      console.log(o, receipt);

      let key =
        "bafyreiapkje327erp4u736b7juu27jd3isuizupma775cpw6p4yvg7plyi";

      const proofs = await ancon.rpc.send("ancon_getProofs", [
        key,
      ]);

      const root = proofs[0].events[0].attributes[0].value;
      const exp = proofs[0].events[0].attributes[1].value;
      const value = proofs[0].events[0].attributes[2].value;
      //proofs[0].events[0].attributes[3].value

      console.log(root, key, value);
      //  app_hash=AD836E31D7336A76EF897A0C259D5026E7A78602D4FDB1CA31493456863C19FB
      // const res = await ancon.rpc.send("ancon_verifyMembership", [
      //   root,
      //   key,
      //   value,
      //   commmitment,
      // ]);

      // console.log(root, res[0].events[0].attributes[0].value);

      const expobj = ics23.ExistenceProof.decode(ethers.utils.arrayify(exp));
      console.log("Existence Proof Object JSON", expobj.toJSON);

      console.log(expobj.toJSON())
      const abiInnerOps = [];
      // InnerOp[]
      expobj.path.forEach((inner) => {
        const abiLeadOp = ethers.utils.defaultAbiCoder.encode(
          ["tuple(HashOp,bytes,bytes)"],
          [inner.hash, inner.prefix, inner.suffix]
        );
        abiInnerOps.push(abiLeadOp);
      });

      // LeafOp
      const abiLeadOp = ethers.utils.defaultAbiCoder.encode(
        ["tuple(HashOp,HashOp,HashOp,LengthOp,bytes)"],
        [
          expobj.leaf.hash,
          expobj.leaf.prehashKey,
          expobj.leaf.prehashValue,
          expobj.leaf.length,
          expobj.leaf.prefix,
        ]
      );

      const abiExp = ethers.utils.defaultAbiCoder.encode(
        ["tuple(bool, bytes,bytes,LeafOp,InnerOp[])"],
        [false, expobj.key, expobj.value, abiLeadOp, abiInnerOps]
      );

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


(async function bootstrap() {
  await Sample.addFile();
})();

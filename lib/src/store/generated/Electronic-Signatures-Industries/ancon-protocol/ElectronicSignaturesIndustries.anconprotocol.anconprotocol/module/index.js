"use strict";
// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
Object.defineProperty(exports, "__esModule", { value: true });
exports.registry = exports.queryClient = exports.txClient = exports.MissingWalletError = void 0;
const stargate_1 = require("@cosmjs/stargate");
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
const tx_1 = require("./types/anconprotocol/tx");
const tx_2 = require("./types/anconprotocol/tx");
const tx_3 = require("./types/anconprotocol/tx");
const tx_4 = require("./types/anconprotocol/tx");
const tx_5 = require("./types/anconprotocol/tx");
const tx_6 = require("./types/anconprotocol/tx");
const tx_7 = require("./types/anconprotocol/tx");
const tx_8 = require("./types/anconprotocol/tx");
const data_union_1 = require("./types/anconprotocol/data_union");
const tx_9 = require("./types/anconprotocol/tx");
const tx_10 = require("./types/anconprotocol/tx");
const tx_11 = require("./types/anconprotocol/tx");
const tx_12 = require("./types/anconprotocol/tx");
const data_union_2 = require("./types/anconprotocol/data_union");
const tx_13 = require("./types/anconprotocol/tx");
const tx_14 = require("./types/anconprotocol/tx");
const tx_15 = require("./types/anconprotocol/tx");
const tx_16 = require("./types/anconprotocol/tx");
const tx_17 = require("./types/anconprotocol/tx");
const tx_18 = require("./types/anconprotocol/tx");
const tx_19 = require("./types/anconprotocol/tx");
const tx_20 = require("./types/anconprotocol/tx");
const tx_21 = require("./types/anconprotocol/tx");
const tx_22 = require("./types/anconprotocol/tx");
const data_union_3 = require("./types/anconprotocol/data_union");
const data_union_4 = require("./types/anconprotocol/data_union");
const tx_23 = require("./types/anconprotocol/tx");
const data_union_5 = require("./types/anconprotocol/data_union");
const tx_24 = require("./types/anconprotocol/tx");
const tx_25 = require("./types/anconprotocol/tx");
const data_union_6 = require("./types/anconprotocol/data_union");
const tx_26 = require("./types/anconprotocol/tx");
const types = [
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgCreateDid", tx_1.MsgCreateDid],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgUpdateMetadataOwnership", tx_2.MsgUpdateMetadataOwnership],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRevokeDelegate", tx_3.MsgRevokeDelegate],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgUpdateDid", tx_4.MsgUpdateDid],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgAnchorCid", tx_5.MsgAnchorCid],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgChangeOwner", tx_6.MsgChangeOwner],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgEditNFT", tx_7.MsgEditNFT],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMintNFT", tx_8.MsgMintNFT],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgUpdateDataSource", data_union_1.MsgUpdateDataSource],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMintTrustedResource", tx_9.MsgMintTrustedResource],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRevokeAttribute", tx_10.MsgRevokeAttribute],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgSetAttribute", tx_11.MsgSetAttribute],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgFile", tx_12.MsgFile],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRemoveDataSource", data_union_2.MsgRemoveDataSource],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgTransferDenom", tx_13.MsgTransferDenom],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgAddDataContract", tx_14.MsgAddDataContract],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgTransferNFT", tx_15.MsgTransferNFT],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgGrantDelegate", tx_16.MsgGrantDelegate],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgAddSchema", tx_17.MsgAddSchema],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgComputeDataContract", tx_18.MsgComputeDataContract],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRoyaltyInfo", tx_19.MsgRoyaltyInfo],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMintTrustedContent", tx_20.MsgMintTrustedContent],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMetadata", tx_21.MsgMetadata],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgIssueDenom", tx_22.MsgIssueDenom],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRemoveDataUnion", data_union_3.MsgRemoveDataUnion],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgUpdateDataUnion", data_union_4.MsgUpdateDataUnion],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgBurnNFT", tx_23.MsgBurnNFT],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgAddDataSource", data_union_5.MsgAddDataSource],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgSendMetadataOwnership", tx_24.MsgSendMetadataOwnership],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRevokeDid", tx_25.MsgRevokeDid],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgAddDataUnion", data_union_6.MsgAddDataUnion],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgAnchorCidWithProof", tx_26.MsgAnchorCidWithProof],
];
exports.MissingWalletError = new Error("wallet is required");
const registry = new proto_signing_1.Registry(types);
exports.registry = registry;
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw exports.MissingWalletError;
    const client = await stargate_1.SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateDid: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgCreateDid", value: data }),
        msgUpdateMetadataOwnership: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgUpdateMetadataOwnership", value: data }),
        msgRevokeDelegate: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRevokeDelegate", value: data }),
        msgUpdateDid: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgUpdateDid", value: data }),
        msgAnchorCid: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgAnchorCid", value: data }),
        msgChangeOwner: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgChangeOwner", value: data }),
        msgEditNFT: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgEditNFT", value: data }),
        msgMintNFT: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMintNFT", value: data }),
        msgUpdateDataSource: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgUpdateDataSource", value: data }),
        msgMintTrustedResource: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMintTrustedResource", value: data }),
        msgRevokeAttribute: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRevokeAttribute", value: data }),
        msgSetAttribute: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgSetAttribute", value: data }),
        msgFile: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgFile", value: data }),
        msgRemoveDataSource: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRemoveDataSource", value: data }),
        msgTransferDenom: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgTransferDenom", value: data }),
        msgAddDataContract: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgAddDataContract", value: data }),
        msgTransferNFT: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgTransferNFT", value: data }),
        msgGrantDelegate: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgGrantDelegate", value: data }),
        msgAddSchema: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgAddSchema", value: data }),
        msgComputeDataContract: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgComputeDataContract", value: data }),
        msgRoyaltyInfo: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRoyaltyInfo", value: data }),
        msgMintTrustedContent: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMintTrustedContent", value: data }),
        msgMetadata: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMetadata", value: data }),
        msgIssueDenom: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgIssueDenom", value: data }),
        msgRemoveDataUnion: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRemoveDataUnion", value: data }),
        msgUpdateDataUnion: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgUpdateDataUnion", value: data }),
        msgBurnNFT: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgBurnNFT", value: data }),
        msgAddDataSource: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgAddDataSource", value: data }),
        msgSendMetadataOwnership: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgSendMetadataOwnership", value: data }),
        msgRevokeDid: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRevokeDid", value: data }),
        msgAddDataUnion: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgAddDataUnion", value: data }),
        msgAnchorCidWithProof: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgAnchorCidWithProof", value: data }),
    };
};
exports.txClient = txClient;
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new rest_1.Api({ baseUrl: addr });
};
exports.queryClient = queryClient;
//# sourceMappingURL=index.js.map
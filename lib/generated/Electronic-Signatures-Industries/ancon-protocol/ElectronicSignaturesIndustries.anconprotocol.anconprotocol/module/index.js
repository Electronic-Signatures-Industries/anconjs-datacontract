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
const tx_9 = require("./types/anconprotocol/tx");
const tx_10 = require("./types/anconprotocol/tx");
const tx_11 = require("./types/anconprotocol/tx");
const tx_12 = require("./types/anconprotocol/tx");
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
const tx_23 = require("./types/anconprotocol/tx");
const types = [
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgInitiateSwap", tx_1.MsgInitiateSwap],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgUpdateDid", tx_2.MsgUpdateDid],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMintSwap", tx_3.MsgMintSwap],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgFile", tx_4.MsgFile],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgEditNFT", tx_5.MsgEditNFT],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRoyaltyInfo", tx_6.MsgRoyaltyInfo],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRevokeDelegate", tx_7.MsgRevokeDelegate],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgClaimSwap", tx_8.MsgClaimSwap],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRevokeAttribute", tx_9.MsgRevokeAttribute],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMintNFT", tx_10.MsgMintNFT],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgTransferNFT", tx_11.MsgTransferNFT],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgBurnNFT", tx_12.MsgBurnNFT],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgCreateDid", tx_13.MsgCreateDid],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMintTrustedContent", tx_14.MsgMintTrustedContent],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRevokeDid", tx_15.MsgRevokeDid],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMetadata", tx_16.MsgMetadata],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgGrantDelegate", tx_17.MsgGrantDelegate],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgTransferDenom", tx_18.MsgTransferDenom],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgGrantAttribute", tx_19.MsgGrantAttribute],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMintTrustedResource", tx_20.MsgMintTrustedResource],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRegisterRelay", tx_21.MsgRegisterRelay],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgChangeOwner", tx_22.MsgChangeOwner],
    ["/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgIssueDenom", tx_23.MsgIssueDenom],
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
        msgInitiateSwap: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgInitiateSwap", value: data }),
        msgUpdateDid: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgUpdateDid", value: data }),
        msgMintSwap: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMintSwap", value: data }),
        msgFile: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgFile", value: data }),
        msgEditNFT: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgEditNFT", value: data }),
        msgRoyaltyInfo: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRoyaltyInfo", value: data }),
        msgRevokeDelegate: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRevokeDelegate", value: data }),
        msgClaimSwap: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgClaimSwap", value: data }),
        msgRevokeAttribute: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRevokeAttribute", value: data }),
        msgMintNFT: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMintNFT", value: data }),
        msgTransferNFT: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgTransferNFT", value: data }),
        msgBurnNFT: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgBurnNFT", value: data }),
        msgCreateDid: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgCreateDid", value: data }),
        msgMintTrustedContent: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMintTrustedContent", value: data }),
        msgRevokeDid: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRevokeDid", value: data }),
        msgMetadata: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMetadata", value: data }),
        msgGrantDelegate: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgGrantDelegate", value: data }),
        msgTransferDenom: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgTransferDenom", value: data }),
        msgGrantAttribute: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgGrantAttribute", value: data }),
        msgMintTrustedResource: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgMintTrustedResource", value: data }),
        msgRegisterRelay: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgRegisterRelay", value: data }),
        msgChangeOwner: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgChangeOwner", value: data }),
        msgIssueDenom: (data) => ({ typeUrl: "/ElectronicSignaturesIndustries.anconprotocol.anconprotocol.MsgIssueDenom", value: data }),
    };
};
exports.txClient = txClient;
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new rest_1.Api({ baseUrl: addr });
};
exports.queryClient = queryClient;
//# sourceMappingURL=index.js.map
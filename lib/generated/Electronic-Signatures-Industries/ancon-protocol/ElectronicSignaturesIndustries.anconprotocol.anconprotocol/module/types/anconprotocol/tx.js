"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgMetadataResponse = exports.MsgMetadata = exports.MsgFileMetadataResponse = exports.MsgTransferDenomResponse = exports.MsgTransferDenom = exports.MsgBurnNFTResponse = exports.MsgBurnNFT = exports.MsgMintNFTResponse = exports.MsgMintNFT = exports.MsgEditNFTResponse = exports.MsgEditNFT = exports.MsgTransferNFTResponse = exports.MsgRevokeAttributeResponse = exports.MsgRevokeAttribute = exports.MsgGrantAttributeResponse = exports.MsgGrantAttribute = exports.MsgSetAttributeResponse = exports.MsgSetAttribute = exports.MsgRevokeDelegateResponse = exports.MsgRevokeDelegate = exports.MsgGrantDelegateResponse = exports.MsgGrantDelegate = exports.MsgChangeOwner = exports.MsgCreateDIDOwnerResponse = exports.MsgCreateDIDOwner = exports.MsgChangeOwnerResponse = exports.MsgTransferNFT = exports.MsgIssueDenomResponse = exports.MsgIssueDenom = exports.MsgRoyaltyInfoResponse = exports.MsgRoyaltyInfo = exports.MsgMintTrustedResourceResponse = exports.MsgMintTrustedResource = exports.MsgClaimSwapResponse = exports.MsgClaimSwap = exports.MsgInitiateSwapResponse = exports.MsgInitiateSwap = exports.MsgMintSwap = exports.MsgMintSwapResponse = exports.MsgMintTrustedContentResponse = exports.MsgMintTrustedContent = exports.MsgRevokeDidResponse = exports.MsgRevokeDid = exports.MsgUpdateDidResponse = exports.MsgUpdateDid = exports.MsgCreateDidResponse = exports.MsgCreateDid = exports.MsgRegisterRelayResponse = exports.MsgRegisterRelay = exports.protobufPackage = void 0;
exports.MsgClientImpl = exports.MsgFileResponse = exports.MsgFile = void 0;
const tslib_1 = require("tslib");
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const Long = (0, tslib_1.__importStar)(require("long"));
exports.protobufPackage = 'ElectronicSignaturesIndustries.anconprotocol.anconprotocol';
const baseMsgRegisterRelay = { sender: '', chain: '', alg: '', pub: '' };
exports.MsgRegisterRelay = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.chain !== '') {
            writer.uint32(18).string(message.chain);
        }
        if (message.alg !== '') {
            writer.uint32(26).string(message.alg);
        }
        if (message.pub !== '') {
            writer.uint32(34).string(message.pub);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRegisterRelay);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.alg = reader.string();
                    break;
                case 4:
                    message.pub = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgRegisterRelay);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = String(object.chain);
        }
        else {
            message.chain = '';
        }
        if (object.alg !== undefined && object.alg !== null) {
            message.alg = String(object.alg);
        }
        else {
            message.alg = '';
        }
        if (object.pub !== undefined && object.pub !== null) {
            message.pub = String(object.pub);
        }
        else {
            message.pub = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.chain !== undefined && (obj.chain = message.chain);
        message.alg !== undefined && (obj.alg = message.alg);
        message.pub !== undefined && (obj.pub = message.pub);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgRegisterRelay);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        else {
            message.chain = '';
        }
        if (object.alg !== undefined && object.alg !== null) {
            message.alg = object.alg;
        }
        else {
            message.alg = '';
        }
        if (object.pub !== undefined && object.pub !== null) {
            message.pub = object.pub;
        }
        else {
            message.pub = '';
        }
        return message;
    }
};
const baseMsgRegisterRelayResponse = { id: '' };
exports.MsgRegisterRelayResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRegisterRelayResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgRegisterRelayResponse);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgRegisterRelayResponse);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        return message;
    }
};
const baseMsgCreateDid = { creator: '', vanityName: '', didType: '' };
exports.MsgCreateDid = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.vanityName !== '') {
            writer.uint32(18).string(message.vanityName);
        }
        if (message.didType !== '') {
            writer.uint32(26).string(message.didType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateDid);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.vanityName = reader.string();
                    break;
                case 3:
                    message.didType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateDid);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.vanityName !== undefined && object.vanityName !== null) {
            message.vanityName = String(object.vanityName);
        }
        else {
            message.vanityName = '';
        }
        if (object.didType !== undefined && object.didType !== null) {
            message.didType = String(object.didType);
        }
        else {
            message.didType = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.vanityName !== undefined && (obj.vanityName = message.vanityName);
        message.didType !== undefined && (obj.didType = message.didType);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateDid);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.vanityName !== undefined && object.vanityName !== null) {
            message.vanityName = object.vanityName;
        }
        else {
            message.vanityName = '';
        }
        if (object.didType !== undefined && object.didType !== null) {
            message.didType = object.didType;
        }
        else {
            message.didType = '';
        }
        return message;
    }
};
const baseMsgCreateDidResponse = { cid: '', did: '' };
exports.MsgCreateDidResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.cid !== '') {
            writer.uint32(10).string(message.cid);
        }
        if (message.did !== '') {
            writer.uint32(18).string(message.did);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateDidResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                case 2:
                    message.did = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateDidResponse);
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = String(object.cid);
        }
        else {
            message.cid = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cid !== undefined && (obj.cid = message.cid);
        message.did !== undefined && (obj.did = message.did);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateDidResponse);
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = object.cid;
        }
        else {
            message.cid = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = '';
        }
        return message;
    }
};
const baseMsgUpdateDid = { creator: '', did: '', metadata: '', cid: '' };
exports.MsgUpdateDid = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.did !== '') {
            writer.uint32(18).string(message.did);
        }
        if (message.metadata !== '') {
            writer.uint32(26).string(message.metadata);
        }
        if (message.cid !== '') {
            writer.uint32(34).string(message.cid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateDid);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.did = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.cid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgUpdateDid);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = '';
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = String(object.metadata);
        }
        else {
            message.metadata = '';
        }
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = String(object.cid);
        }
        else {
            message.cid = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.did !== undefined && (obj.did = message.did);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.cid !== undefined && (obj.cid = message.cid);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgUpdateDid);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = '';
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        else {
            message.metadata = '';
        }
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = object.cid;
        }
        else {
            message.cid = '';
        }
        return message;
    }
};
const baseMsgUpdateDidResponse = {};
exports.MsgUpdateDidResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateDidResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgUpdateDidResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgUpdateDidResponse);
        return message;
    }
};
const baseMsgRevokeDid = { creator: '', did: '', metadata: '', cid: '' };
exports.MsgRevokeDid = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.did !== '') {
            writer.uint32(18).string(message.did);
        }
        if (message.metadata !== '') {
            writer.uint32(26).string(message.metadata);
        }
        if (message.cid !== '') {
            writer.uint32(34).string(message.cid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRevokeDid);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.did = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.cid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgRevokeDid);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = '';
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = String(object.metadata);
        }
        else {
            message.metadata = '';
        }
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = String(object.cid);
        }
        else {
            message.cid = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.did !== undefined && (obj.did = message.did);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.cid !== undefined && (obj.cid = message.cid);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgRevokeDid);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = '';
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        else {
            message.metadata = '';
        }
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = object.cid;
        }
        else {
            message.cid = '';
        }
        return message;
    }
};
const baseMsgRevokeDidResponse = { id: 0 };
exports.MsgRevokeDidResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRevokeDidResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgRevokeDidResponse);
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgRevokeDidResponse);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgMintTrustedContent = {
    creator: '',
    metadataRef: '',
    denomId: '',
    name: '',
    recipient: '',
    didOwner: '',
    lazyMint: false,
    price: 0,
    r: '',
    s: '',
    v: 0
};
exports.MsgMintTrustedContent = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.metadataRef !== '') {
            writer.uint32(18).string(message.metadataRef);
        }
        if (message.denomId !== '') {
            writer.uint32(26).string(message.denomId);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.recipient !== '') {
            writer.uint32(42).string(message.recipient);
        }
        if (message.didOwner !== '') {
            writer.uint32(50).string(message.didOwner);
        }
        if (message.lazyMint === true) {
            writer.uint32(56).bool(message.lazyMint);
        }
        if (message.price !== 0) {
            writer.uint32(64).uint64(message.price);
        }
        if (message.r !== '') {
            writer.uint32(74).string(message.r);
        }
        if (message.s !== '') {
            writer.uint32(82).string(message.s);
        }
        if (message.v !== 0) {
            writer.uint32(88).uint64(message.v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgMintTrustedContent);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.metadataRef = reader.string();
                    break;
                case 3:
                    message.denomId = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.recipient = reader.string();
                    break;
                case 6:
                    message.didOwner = reader.string();
                    break;
                case 7:
                    message.lazyMint = reader.bool();
                    break;
                case 8:
                    message.price = longToNumber(reader.uint64());
                    break;
                case 9:
                    message.r = reader.string();
                    break;
                case 10:
                    message.s = reader.string();
                    break;
                case 11:
                    message.v = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgMintTrustedContent);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.metadataRef !== undefined && object.metadataRef !== null) {
            message.metadataRef = String(object.metadataRef);
        }
        else {
            message.metadataRef = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = String(object.recipient);
        }
        else {
            message.recipient = '';
        }
        if (object.didOwner !== undefined && object.didOwner !== null) {
            message.didOwner = String(object.didOwner);
        }
        else {
            message.didOwner = '';
        }
        if (object.lazyMint !== undefined && object.lazyMint !== null) {
            message.lazyMint = Boolean(object.lazyMint);
        }
        else {
            message.lazyMint = false;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Number(object.price);
        }
        else {
            message.price = 0;
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = String(object.r);
        }
        else {
            message.r = '';
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = String(object.s);
        }
        else {
            message.s = '';
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = Number(object.v);
        }
        else {
            message.v = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.metadataRef !== undefined && (obj.metadataRef = message.metadataRef);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.name !== undefined && (obj.name = message.name);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.didOwner !== undefined && (obj.didOwner = message.didOwner);
        message.lazyMint !== undefined && (obj.lazyMint = message.lazyMint);
        message.price !== undefined && (obj.price = message.price);
        message.r !== undefined && (obj.r = message.r);
        message.s !== undefined && (obj.s = message.s);
        message.v !== undefined && (obj.v = message.v);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgMintTrustedContent);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.metadataRef !== undefined && object.metadataRef !== null) {
            message.metadataRef = object.metadataRef;
        }
        else {
            message.metadataRef = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        else {
            message.recipient = '';
        }
        if (object.didOwner !== undefined && object.didOwner !== null) {
            message.didOwner = object.didOwner;
        }
        else {
            message.didOwner = '';
        }
        if (object.lazyMint !== undefined && object.lazyMint !== null) {
            message.lazyMint = object.lazyMint;
        }
        else {
            message.lazyMint = false;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = 0;
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = object.r;
        }
        else {
            message.r = '';
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = object.s;
        }
        else {
            message.s = '';
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = object.v;
        }
        else {
            message.v = 0;
        }
        return message;
    }
};
const baseMsgMintTrustedContentResponse = { id: 0 };
exports.MsgMintTrustedContentResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgMintTrustedContentResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgMintTrustedContentResponse);
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgMintTrustedContentResponse);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgMintSwapResponse = { id: 0 };
exports.MsgMintSwapResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgMintSwapResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgMintSwapResponse);
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgMintSwapResponse);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgMintSwap = {
    creator: '',
    metadataRef: '',
    denomId: '',
    name: '',
    recipient: '',
    didOwner: '',
    destinationDenomId: '',
    price: 0,
    r: '',
    s: '',
    v: 0
};
exports.MsgMintSwap = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.metadataRef !== '') {
            writer.uint32(18).string(message.metadataRef);
        }
        if (message.denomId !== '') {
            writer.uint32(26).string(message.denomId);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.recipient !== '') {
            writer.uint32(42).string(message.recipient);
        }
        if (message.didOwner !== '') {
            writer.uint32(50).string(message.didOwner);
        }
        if (message.destinationDenomId !== '') {
            writer.uint32(58).string(message.destinationDenomId);
        }
        if (message.price !== 0) {
            writer.uint32(64).uint64(message.price);
        }
        if (message.r !== '') {
            writer.uint32(74).string(message.r);
        }
        if (message.s !== '') {
            writer.uint32(82).string(message.s);
        }
        if (message.v !== 0) {
            writer.uint32(88).uint64(message.v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgMintSwap);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.metadataRef = reader.string();
                    break;
                case 3:
                    message.denomId = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.recipient = reader.string();
                    break;
                case 6:
                    message.didOwner = reader.string();
                    break;
                case 7:
                    message.destinationDenomId = reader.string();
                    break;
                case 8:
                    message.price = longToNumber(reader.uint64());
                    break;
                case 9:
                    message.r = reader.string();
                    break;
                case 10:
                    message.s = reader.string();
                    break;
                case 11:
                    message.v = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgMintSwap);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.metadataRef !== undefined && object.metadataRef !== null) {
            message.metadataRef = String(object.metadataRef);
        }
        else {
            message.metadataRef = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = String(object.recipient);
        }
        else {
            message.recipient = '';
        }
        if (object.didOwner !== undefined && object.didOwner !== null) {
            message.didOwner = String(object.didOwner);
        }
        else {
            message.didOwner = '';
        }
        if (object.destinationDenomId !== undefined && object.destinationDenomId !== null) {
            message.destinationDenomId = String(object.destinationDenomId);
        }
        else {
            message.destinationDenomId = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Number(object.price);
        }
        else {
            message.price = 0;
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = String(object.r);
        }
        else {
            message.r = '';
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = String(object.s);
        }
        else {
            message.s = '';
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = Number(object.v);
        }
        else {
            message.v = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.metadataRef !== undefined && (obj.metadataRef = message.metadataRef);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.name !== undefined && (obj.name = message.name);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.didOwner !== undefined && (obj.didOwner = message.didOwner);
        message.destinationDenomId !== undefined && (obj.destinationDenomId = message.destinationDenomId);
        message.price !== undefined && (obj.price = message.price);
        message.r !== undefined && (obj.r = message.r);
        message.s !== undefined && (obj.s = message.s);
        message.v !== undefined && (obj.v = message.v);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgMintSwap);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.metadataRef !== undefined && object.metadataRef !== null) {
            message.metadataRef = object.metadataRef;
        }
        else {
            message.metadataRef = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        else {
            message.recipient = '';
        }
        if (object.didOwner !== undefined && object.didOwner !== null) {
            message.didOwner = object.didOwner;
        }
        else {
            message.didOwner = '';
        }
        if (object.destinationDenomId !== undefined && object.destinationDenomId !== null) {
            message.destinationDenomId = object.destinationDenomId;
        }
        else {
            message.destinationDenomId = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = 0;
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = object.r;
        }
        else {
            message.r = '';
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = object.s;
        }
        else {
            message.s = '';
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = object.v;
        }
        else {
            message.v = 0;
        }
        return message;
    }
};
const baseMsgInitiateSwap = { creator: '' };
exports.MsgInitiateSwap = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgInitiateSwap);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgInitiateSwap);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgInitiateSwap);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        return message;
    }
};
const baseMsgInitiateSwapResponse = { relayTo: 0, voucher: '', key: '' };
exports.MsgInitiateSwapResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.relayTo !== 0) {
            writer.uint32(8).uint64(message.relayTo);
        }
        if (message.voucher !== '') {
            writer.uint32(18).string(message.voucher);
        }
        if (message.key !== '') {
            writer.uint32(26).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgInitiateSwapResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.relayTo = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.voucher = reader.string();
                    break;
                case 3:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgInitiateSwapResponse);
        if (object.relayTo !== undefined && object.relayTo !== null) {
            message.relayTo = Number(object.relayTo);
        }
        else {
            message.relayTo = 0;
        }
        if (object.voucher !== undefined && object.voucher !== null) {
            message.voucher = String(object.voucher);
        }
        else {
            message.voucher = '';
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.relayTo !== undefined && (obj.relayTo = message.relayTo);
        message.voucher !== undefined && (obj.voucher = message.voucher);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgInitiateSwapResponse);
        if (object.relayTo !== undefined && object.relayTo !== null) {
            message.relayTo = object.relayTo;
        }
        else {
            message.relayTo = 0;
        }
        if (object.voucher !== undefined && object.voucher !== null) {
            message.voucher = object.voucher;
        }
        else {
            message.voucher = '';
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        return message;
    }
};
const baseMsgClaimSwap = { creator: '', did: '', metadata: '', cid: '' };
exports.MsgClaimSwap = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.did !== '') {
            writer.uint32(18).string(message.did);
        }
        if (message.metadata !== '') {
            writer.uint32(26).string(message.metadata);
        }
        if (message.cid !== '') {
            writer.uint32(34).string(message.cid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgClaimSwap);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.did = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.cid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgClaimSwap);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = '';
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = String(object.metadata);
        }
        else {
            message.metadata = '';
        }
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = String(object.cid);
        }
        else {
            message.cid = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.did !== undefined && (obj.did = message.did);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.cid !== undefined && (obj.cid = message.cid);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgClaimSwap);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = '';
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        else {
            message.metadata = '';
        }
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = object.cid;
        }
        else {
            message.cid = '';
        }
        return message;
    }
};
const baseMsgClaimSwapResponse = { id: 0 };
exports.MsgClaimSwapResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgClaimSwapResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgClaimSwapResponse);
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgClaimSwapResponse);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgMintTrustedResource = {
    creator: '',
    metadataRef: '',
    didOwner: '',
    denomId: '',
    name: '',
    recipient: '',
    resourceWhitelistAccess: '',
    resourceLocation: '',
    lazyMint: false,
    price: 0,
    r: '',
    s: '',
    v: 0
};
exports.MsgMintTrustedResource = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.metadataRef !== '') {
            writer.uint32(18).string(message.metadataRef);
        }
        if (message.didOwner !== '') {
            writer.uint32(26).string(message.didOwner);
        }
        if (message.denomId !== '') {
            writer.uint32(34).string(message.denomId);
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.recipient !== '') {
            writer.uint32(50).string(message.recipient);
        }
        for (const v of message.resourceWhitelistAccess) {
            writer.uint32(58).string(v);
        }
        if (message.resourceLocation !== '') {
            writer.uint32(66).string(message.resourceLocation);
        }
        if (message.lazyMint === true) {
            writer.uint32(72).bool(message.lazyMint);
        }
        if (message.price !== 0) {
            writer.uint32(80).uint64(message.price);
        }
        if (message.r !== '') {
            writer.uint32(90).string(message.r);
        }
        if (message.s !== '') {
            writer.uint32(98).string(message.s);
        }
        if (message.v !== 0) {
            writer.uint32(104).uint64(message.v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgMintTrustedResource);
        message.resourceWhitelistAccess = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.metadataRef = reader.string();
                    break;
                case 3:
                    message.didOwner = reader.string();
                    break;
                case 4:
                    message.denomId = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.recipient = reader.string();
                    break;
                case 7:
                    message.resourceWhitelistAccess.push(reader.string());
                    break;
                case 8:
                    message.resourceLocation = reader.string();
                    break;
                case 9:
                    message.lazyMint = reader.bool();
                    break;
                case 10:
                    message.price = longToNumber(reader.uint64());
                    break;
                case 11:
                    message.r = reader.string();
                    break;
                case 12:
                    message.s = reader.string();
                    break;
                case 13:
                    message.v = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgMintTrustedResource);
        message.resourceWhitelistAccess = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.metadataRef !== undefined && object.metadataRef !== null) {
            message.metadataRef = String(object.metadataRef);
        }
        else {
            message.metadataRef = '';
        }
        if (object.didOwner !== undefined && object.didOwner !== null) {
            message.didOwner = String(object.didOwner);
        }
        else {
            message.didOwner = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = String(object.recipient);
        }
        else {
            message.recipient = '';
        }
        if (object.resourceWhitelistAccess !== undefined && object.resourceWhitelistAccess !== null) {
            for (const e of object.resourceWhitelistAccess) {
                message.resourceWhitelistAccess.push(String(e));
            }
        }
        if (object.resourceLocation !== undefined && object.resourceLocation !== null) {
            message.resourceLocation = String(object.resourceLocation);
        }
        else {
            message.resourceLocation = '';
        }
        if (object.lazyMint !== undefined && object.lazyMint !== null) {
            message.lazyMint = Boolean(object.lazyMint);
        }
        else {
            message.lazyMint = false;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Number(object.price);
        }
        else {
            message.price = 0;
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = String(object.r);
        }
        else {
            message.r = '';
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = String(object.s);
        }
        else {
            message.s = '';
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = Number(object.v);
        }
        else {
            message.v = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.metadataRef !== undefined && (obj.metadataRef = message.metadataRef);
        message.didOwner !== undefined && (obj.didOwner = message.didOwner);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.name !== undefined && (obj.name = message.name);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        if (message.resourceWhitelistAccess) {
            obj.resourceWhitelistAccess = message.resourceWhitelistAccess.map((e) => e);
        }
        else {
            obj.resourceWhitelistAccess = [];
        }
        message.resourceLocation !== undefined && (obj.resourceLocation = message.resourceLocation);
        message.lazyMint !== undefined && (obj.lazyMint = message.lazyMint);
        message.price !== undefined && (obj.price = message.price);
        message.r !== undefined && (obj.r = message.r);
        message.s !== undefined && (obj.s = message.s);
        message.v !== undefined && (obj.v = message.v);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgMintTrustedResource);
        message.resourceWhitelistAccess = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.metadataRef !== undefined && object.metadataRef !== null) {
            message.metadataRef = object.metadataRef;
        }
        else {
            message.metadataRef = '';
        }
        if (object.didOwner !== undefined && object.didOwner !== null) {
            message.didOwner = object.didOwner;
        }
        else {
            message.didOwner = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        else {
            message.recipient = '';
        }
        if (object.resourceWhitelistAccess !== undefined && object.resourceWhitelistAccess !== null) {
            for (const e of object.resourceWhitelistAccess) {
                message.resourceWhitelistAccess.push(e);
            }
        }
        if (object.resourceLocation !== undefined && object.resourceLocation !== null) {
            message.resourceLocation = object.resourceLocation;
        }
        else {
            message.resourceLocation = '';
        }
        if (object.lazyMint !== undefined && object.lazyMint !== null) {
            message.lazyMint = object.lazyMint;
        }
        else {
            message.lazyMint = false;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = 0;
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = object.r;
        }
        else {
            message.r = '';
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = object.s;
        }
        else {
            message.s = '';
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = object.v;
        }
        else {
            message.v = 0;
        }
        return message;
    }
};
const baseMsgMintTrustedResourceResponse = { id: 0 };
exports.MsgMintTrustedResourceResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgMintTrustedResourceResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgMintTrustedResourceResponse);
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgMintTrustedResourceResponse);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgRoyaltyInfo = { creator: '', receiver: '', royaltyFeePercentage: 0, metadataRef: '', denomId: '' };
exports.MsgRoyaltyInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.receiver !== '') {
            writer.uint32(18).string(message.receiver);
        }
        if (message.royaltyFeePercentage !== 0) {
            writer.uint32(24).uint64(message.royaltyFeePercentage);
        }
        if (message.metadataRef !== '') {
            writer.uint32(34).string(message.metadataRef);
        }
        if (message.denomId !== '') {
            writer.uint32(42).string(message.denomId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRoyaltyInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.royaltyFeePercentage = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.metadataRef = reader.string();
                    break;
                case 5:
                    message.denomId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgRoyaltyInfo);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = '';
        }
        if (object.royaltyFeePercentage !== undefined && object.royaltyFeePercentage !== null) {
            message.royaltyFeePercentage = Number(object.royaltyFeePercentage);
        }
        else {
            message.royaltyFeePercentage = 0;
        }
        if (object.metadataRef !== undefined && object.metadataRef !== null) {
            message.metadataRef = String(object.metadataRef);
        }
        else {
            message.metadataRef = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.royaltyFeePercentage !== undefined && (obj.royaltyFeePercentage = message.royaltyFeePercentage);
        message.metadataRef !== undefined && (obj.metadataRef = message.metadataRef);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgRoyaltyInfo);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = '';
        }
        if (object.royaltyFeePercentage !== undefined && object.royaltyFeePercentage !== null) {
            message.royaltyFeePercentage = object.royaltyFeePercentage;
        }
        else {
            message.royaltyFeePercentage = 0;
        }
        if (object.metadataRef !== undefined && object.metadataRef !== null) {
            message.metadataRef = object.metadataRef;
        }
        else {
            message.metadataRef = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = '';
        }
        return message;
    }
};
const baseMsgRoyaltyInfoResponse = { receiver: '', royaltyFeePercentage: 0, metadataRef: '' };
exports.MsgRoyaltyInfoResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.receiver !== '') {
            writer.uint32(10).string(message.receiver);
        }
        if (message.royaltyFeePercentage !== 0) {
            writer.uint32(16).uint64(message.royaltyFeePercentage);
        }
        if (message.metadataRef !== '') {
            writer.uint32(26).string(message.metadataRef);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRoyaltyInfoResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receiver = reader.string();
                    break;
                case 2:
                    message.royaltyFeePercentage = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.metadataRef = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgRoyaltyInfoResponse);
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = '';
        }
        if (object.royaltyFeePercentage !== undefined && object.royaltyFeePercentage !== null) {
            message.royaltyFeePercentage = Number(object.royaltyFeePercentage);
        }
        else {
            message.royaltyFeePercentage = 0;
        }
        if (object.metadataRef !== undefined && object.metadataRef !== null) {
            message.metadataRef = String(object.metadataRef);
        }
        else {
            message.metadataRef = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.royaltyFeePercentage !== undefined && (obj.royaltyFeePercentage = message.royaltyFeePercentage);
        message.metadataRef !== undefined && (obj.metadataRef = message.metadataRef);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgRoyaltyInfoResponse);
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = '';
        }
        if (object.royaltyFeePercentage !== undefined && object.royaltyFeePercentage !== null) {
            message.royaltyFeePercentage = object.royaltyFeePercentage;
        }
        else {
            message.royaltyFeePercentage = 0;
        }
        if (object.metadataRef !== undefined && object.metadataRef !== null) {
            message.metadataRef = object.metadataRef;
        }
        else {
            message.metadataRef = '';
        }
        return message;
    }
};
const baseMsgIssueDenom = { id: '', name: '', schema: '', sender: '', symbol: '', mintRestricted: false, updateRestricted: false };
exports.MsgIssueDenom = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.schema !== '') {
            writer.uint32(26).string(message.schema);
        }
        if (message.sender !== '') {
            writer.uint32(34).string(message.sender);
        }
        if (message.symbol !== '') {
            writer.uint32(42).string(message.symbol);
        }
        if (message.mintRestricted === true) {
            writer.uint32(48).bool(message.mintRestricted);
        }
        if (message.updateRestricted === true) {
            writer.uint32(56).bool(message.updateRestricted);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgIssueDenom);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.schema = reader.string();
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                case 5:
                    message.symbol = reader.string();
                    break;
                case 6:
                    message.mintRestricted = reader.bool();
                    break;
                case 7:
                    message.updateRestricted = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgIssueDenom);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = String(object.schema);
        }
        else {
            message.schema = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = String(object.symbol);
        }
        else {
            message.symbol = '';
        }
        if (object.mintRestricted !== undefined && object.mintRestricted !== null) {
            message.mintRestricted = Boolean(object.mintRestricted);
        }
        else {
            message.mintRestricted = false;
        }
        if (object.updateRestricted !== undefined && object.updateRestricted !== null) {
            message.updateRestricted = Boolean(object.updateRestricted);
        }
        else {
            message.updateRestricted = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.schema !== undefined && (obj.schema = message.schema);
        message.sender !== undefined && (obj.sender = message.sender);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.mintRestricted !== undefined && (obj.mintRestricted = message.mintRestricted);
        message.updateRestricted !== undefined && (obj.updateRestricted = message.updateRestricted);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgIssueDenom);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = object.schema;
        }
        else {
            message.schema = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        else {
            message.symbol = '';
        }
        if (object.mintRestricted !== undefined && object.mintRestricted !== null) {
            message.mintRestricted = object.mintRestricted;
        }
        else {
            message.mintRestricted = false;
        }
        if (object.updateRestricted !== undefined && object.updateRestricted !== null) {
            message.updateRestricted = object.updateRestricted;
        }
        else {
            message.updateRestricted = false;
        }
        return message;
    }
};
const baseMsgIssueDenomResponse = {};
exports.MsgIssueDenomResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgIssueDenomResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgIssueDenomResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgIssueDenomResponse);
        return message;
    }
};
const baseMsgTransferNFT = { id: '', denomId: '', name: '', uri: '', data: '', sender: '', recipient: '' };
exports.MsgTransferNFT = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.denomId !== '') {
            writer.uint32(18).string(message.denomId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        if (message.data !== '') {
            writer.uint32(42).string(message.data);
        }
        if (message.sender !== '') {
            writer.uint32(50).string(message.sender);
        }
        if (message.recipient !== '') {
            writer.uint32(58).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgTransferNFT);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.sender = reader.string();
                    break;
                case 7:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgTransferNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        }
        else {
            message.uri = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        }
        else {
            message.data = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = String(object.recipient);
        }
        else {
            message.recipient = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.name !== undefined && (obj.name = message.name);
        message.uri !== undefined && (obj.uri = message.uri);
        message.data !== undefined && (obj.data = message.data);
        message.sender !== undefined && (obj.sender = message.sender);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgTransferNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        else {
            message.uri = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        else {
            message.recipient = '';
        }
        return message;
    }
};
const baseMsgChangeOwnerResponse = { identity: '', owner: '', previousChange: 0 };
exports.MsgChangeOwnerResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.identity !== '') {
            writer.uint32(10).string(message.identity);
        }
        if (message.owner !== '') {
            writer.uint32(18).string(message.owner);
        }
        if (message.previousChange !== 0) {
            writer.uint32(24).uint64(message.previousChange);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgChangeOwnerResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identity = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.previousChange = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgChangeOwnerResponse);
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = String(object.identity);
        }
        else {
            message.identity = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.previousChange !== undefined && object.previousChange !== null) {
            message.previousChange = Number(object.previousChange);
        }
        else {
            message.previousChange = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.identity !== undefined && (obj.identity = message.identity);
        message.owner !== undefined && (obj.owner = message.owner);
        message.previousChange !== undefined && (obj.previousChange = message.previousChange);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgChangeOwnerResponse);
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = object.identity;
        }
        else {
            message.identity = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.previousChange !== undefined && object.previousChange !== null) {
            message.previousChange = object.previousChange;
        }
        else {
            message.previousChange = 0;
        }
        return message;
    }
};
const baseMsgCreateDIDOwner = { creator: '', owner: '', didKey: '', didWeb: '' };
exports.MsgCreateDIDOwner = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.owner !== '') {
            writer.uint32(18).string(message.owner);
        }
        if (message.didKey !== '') {
            writer.uint32(26).string(message.didKey);
        }
        if (message.didWeb !== '') {
            writer.uint32(34).string(message.didWeb);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateDIDOwner);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.didKey = reader.string();
                    break;
                case 4:
                    message.didWeb = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateDIDOwner);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.didKey !== undefined && object.didKey !== null) {
            message.didKey = String(object.didKey);
        }
        else {
            message.didKey = '';
        }
        if (object.didWeb !== undefined && object.didWeb !== null) {
            message.didWeb = String(object.didWeb);
        }
        else {
            message.didWeb = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.owner !== undefined && (obj.owner = message.owner);
        message.didKey !== undefined && (obj.didKey = message.didKey);
        message.didWeb !== undefined && (obj.didWeb = message.didWeb);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateDIDOwner);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.didKey !== undefined && object.didKey !== null) {
            message.didKey = object.didKey;
        }
        else {
            message.didKey = '';
        }
        if (object.didWeb !== undefined && object.didWeb !== null) {
            message.didWeb = object.didWeb;
        }
        else {
            message.didWeb = '';
        }
        return message;
    }
};
const baseMsgCreateDIDOwnerResponse = {};
exports.MsgCreateDIDOwnerResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateDIDOwnerResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgCreateDIDOwnerResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCreateDIDOwnerResponse);
        return message;
    }
};
const baseMsgChangeOwner = { creator: '', identity: '', newOwner: '' };
exports.MsgChangeOwner = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.identity !== '') {
            writer.uint32(18).string(message.identity);
        }
        if (message.newOwner !== '') {
            writer.uint32(26).string(message.newOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgChangeOwner);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.newOwner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgChangeOwner);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = String(object.identity);
        }
        else {
            message.identity = '';
        }
        if (object.newOwner !== undefined && object.newOwner !== null) {
            message.newOwner = String(object.newOwner);
        }
        else {
            message.newOwner = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.identity !== undefined && (obj.identity = message.identity);
        message.newOwner !== undefined && (obj.newOwner = message.newOwner);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgChangeOwner);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = object.identity;
        }
        else {
            message.identity = '';
        }
        if (object.newOwner !== undefined && object.newOwner !== null) {
            message.newOwner = object.newOwner;
        }
        else {
            message.newOwner = '';
        }
        return message;
    }
};
const baseMsgGrantDelegate = { delegate: '', delegateType: '', validity: 0, creator: '', identity: '' };
exports.MsgGrantDelegate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegate !== '') {
            writer.uint32(10).string(message.delegate);
        }
        if (message.delegateType !== '') {
            writer.uint32(18).string(message.delegateType);
        }
        if (message.validity !== 0) {
            writer.uint32(24).uint64(message.validity);
        }
        if (message.creator !== '') {
            writer.uint32(34).string(message.creator);
        }
        if (message.identity !== '') {
            writer.uint32(42).string(message.identity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgGrantDelegate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegate = reader.string();
                    break;
                case 2:
                    message.delegateType = reader.string();
                    break;
                case 3:
                    message.validity = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.creator = reader.string();
                    break;
                case 5:
                    message.identity = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgGrantDelegate);
        if (object.delegate !== undefined && object.delegate !== null) {
            message.delegate = String(object.delegate);
        }
        else {
            message.delegate = '';
        }
        if (object.delegateType !== undefined && object.delegateType !== null) {
            message.delegateType = String(object.delegateType);
        }
        else {
            message.delegateType = '';
        }
        if (object.validity !== undefined && object.validity !== null) {
            message.validity = Number(object.validity);
        }
        else {
            message.validity = 0;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = String(object.identity);
        }
        else {
            message.identity = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegate !== undefined && (obj.delegate = message.delegate);
        message.delegateType !== undefined && (obj.delegateType = message.delegateType);
        message.validity !== undefined && (obj.validity = message.validity);
        message.creator !== undefined && (obj.creator = message.creator);
        message.identity !== undefined && (obj.identity = message.identity);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgGrantDelegate);
        if (object.delegate !== undefined && object.delegate !== null) {
            message.delegate = object.delegate;
        }
        else {
            message.delegate = '';
        }
        if (object.delegateType !== undefined && object.delegateType !== null) {
            message.delegateType = object.delegateType;
        }
        else {
            message.delegateType = '';
        }
        if (object.validity !== undefined && object.validity !== null) {
            message.validity = object.validity;
        }
        else {
            message.validity = 0;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = object.identity;
        }
        else {
            message.identity = '';
        }
        return message;
    }
};
const baseMsgGrantDelegateResponse = {};
exports.MsgGrantDelegateResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgGrantDelegateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgGrantDelegateResponse);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgGrantDelegateResponse);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = new Uint8Array();
        }
        return message;
    }
};
const baseMsgRevokeDelegate = { delegate: '', delegateType: '', validity: 0, creator: '', identity: '' };
exports.MsgRevokeDelegate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegate !== '') {
            writer.uint32(10).string(message.delegate);
        }
        if (message.delegateType !== '') {
            writer.uint32(18).string(message.delegateType);
        }
        if (message.validity !== 0) {
            writer.uint32(24).uint64(message.validity);
        }
        if (message.creator !== '') {
            writer.uint32(34).string(message.creator);
        }
        if (message.identity !== '') {
            writer.uint32(42).string(message.identity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRevokeDelegate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegate = reader.string();
                    break;
                case 2:
                    message.delegateType = reader.string();
                    break;
                case 3:
                    message.validity = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.creator = reader.string();
                    break;
                case 5:
                    message.identity = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgRevokeDelegate);
        if (object.delegate !== undefined && object.delegate !== null) {
            message.delegate = String(object.delegate);
        }
        else {
            message.delegate = '';
        }
        if (object.delegateType !== undefined && object.delegateType !== null) {
            message.delegateType = String(object.delegateType);
        }
        else {
            message.delegateType = '';
        }
        if (object.validity !== undefined && object.validity !== null) {
            message.validity = Number(object.validity);
        }
        else {
            message.validity = 0;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = String(object.identity);
        }
        else {
            message.identity = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegate !== undefined && (obj.delegate = message.delegate);
        message.delegateType !== undefined && (obj.delegateType = message.delegateType);
        message.validity !== undefined && (obj.validity = message.validity);
        message.creator !== undefined && (obj.creator = message.creator);
        message.identity !== undefined && (obj.identity = message.identity);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgRevokeDelegate);
        if (object.delegate !== undefined && object.delegate !== null) {
            message.delegate = object.delegate;
        }
        else {
            message.delegate = '';
        }
        if (object.delegateType !== undefined && object.delegateType !== null) {
            message.delegateType = object.delegateType;
        }
        else {
            message.delegateType = '';
        }
        if (object.validity !== undefined && object.validity !== null) {
            message.validity = object.validity;
        }
        else {
            message.validity = 0;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = object.identity;
        }
        else {
            message.identity = '';
        }
        return message;
    }
};
const baseMsgRevokeDelegateResponse = {};
exports.MsgRevokeDelegateResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRevokeDelegateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgRevokeDelegateResponse);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgRevokeDelegateResponse);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = new Uint8Array();
        }
        return message;
    }
};
const baseMsgSetAttribute = { identity: '', actor: '', creator: '' };
exports.MsgSetAttribute = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.identity !== '') {
            writer.uint32(10).string(message.identity);
        }
        if (message.actor !== '') {
            writer.uint32(18).string(message.actor);
        }
        if (message.creator !== '') {
            writer.uint32(26).string(message.creator);
        }
        if (message.name.length !== 0) {
            writer.uint32(34).bytes(message.name);
        }
        if (message.value.length !== 0) {
            writer.uint32(42).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgSetAttribute);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identity = reader.string();
                    break;
                case 2:
                    message.actor = reader.string();
                    break;
                case 3:
                    message.creator = reader.string();
                    break;
                case 4:
                    message.name = reader.bytes();
                    break;
                case 5:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgSetAttribute);
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = String(object.identity);
        }
        else {
            message.identity = '';
        }
        if (object.actor !== undefined && object.actor !== null) {
            message.actor = String(object.actor);
        }
        else {
            message.actor = '';
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = bytesFromBase64(object.name);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.identity !== undefined && (obj.identity = message.identity);
        message.actor !== undefined && (obj.actor = message.actor);
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = base64FromBytes(message.name !== undefined ? message.name : new Uint8Array()));
        message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgSetAttribute);
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = object.identity;
        }
        else {
            message.identity = '';
        }
        if (object.actor !== undefined && object.actor !== null) {
            message.actor = object.actor;
        }
        else {
            message.actor = '';
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = new Uint8Array();
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = new Uint8Array();
        }
        return message;
    }
};
const baseMsgSetAttributeResponse = {};
exports.MsgSetAttributeResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgSetAttributeResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgSetAttributeResponse);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgSetAttributeResponse);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = new Uint8Array();
        }
        return message;
    }
};
const baseMsgGrantAttribute = { identity: '', actor: '', creator: '', validity: 0 };
exports.MsgGrantAttribute = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.identity !== '') {
            writer.uint32(10).string(message.identity);
        }
        if (message.actor !== '') {
            writer.uint32(18).string(message.actor);
        }
        if (message.name.length !== 0) {
            writer.uint32(26).bytes(message.name);
        }
        if (message.value.length !== 0) {
            writer.uint32(34).bytes(message.value);
        }
        if (message.creator !== '') {
            writer.uint32(42).string(message.creator);
        }
        if (message.validity !== 0) {
            writer.uint32(48).uint64(message.validity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgGrantAttribute);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identity = reader.string();
                    break;
                case 2:
                    message.actor = reader.string();
                    break;
                case 3:
                    message.name = reader.bytes();
                    break;
                case 4:
                    message.value = reader.bytes();
                    break;
                case 5:
                    message.creator = reader.string();
                    break;
                case 6:
                    message.validity = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgGrantAttribute);
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = String(object.identity);
        }
        else {
            message.identity = '';
        }
        if (object.actor !== undefined && object.actor !== null) {
            message.actor = String(object.actor);
        }
        else {
            message.actor = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = bytesFromBase64(object.name);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.validity !== undefined && object.validity !== null) {
            message.validity = Number(object.validity);
        }
        else {
            message.validity = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.identity !== undefined && (obj.identity = message.identity);
        message.actor !== undefined && (obj.actor = message.actor);
        message.name !== undefined && (obj.name = base64FromBytes(message.name !== undefined ? message.name : new Uint8Array()));
        message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.creator !== undefined && (obj.creator = message.creator);
        message.validity !== undefined && (obj.validity = message.validity);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgGrantAttribute);
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = object.identity;
        }
        else {
            message.identity = '';
        }
        if (object.actor !== undefined && object.actor !== null) {
            message.actor = object.actor;
        }
        else {
            message.actor = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = new Uint8Array();
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = new Uint8Array();
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.validity !== undefined && object.validity !== null) {
            message.validity = object.validity;
        }
        else {
            message.validity = 0;
        }
        return message;
    }
};
const baseMsgGrantAttributeResponse = { ok: false };
exports.MsgGrantAttributeResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.ok === true) {
            writer.uint32(8).bool(message.ok);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgGrantAttributeResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgGrantAttributeResponse);
        if (object.ok !== undefined && object.ok !== null) {
            message.ok = Boolean(object.ok);
        }
        else {
            message.ok = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ok !== undefined && (obj.ok = message.ok);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgGrantAttributeResponse);
        if (object.ok !== undefined && object.ok !== null) {
            message.ok = object.ok;
        }
        else {
            message.ok = false;
        }
        return message;
    }
};
const baseMsgRevokeAttribute = { identity: '', actor: '', creator: '' };
exports.MsgRevokeAttribute = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.identity !== '') {
            writer.uint32(10).string(message.identity);
        }
        if (message.actor !== '') {
            writer.uint32(18).string(message.actor);
        }
        if (message.name.length !== 0) {
            writer.uint32(26).bytes(message.name);
        }
        if (message.value.length !== 0) {
            writer.uint32(34).bytes(message.value);
        }
        if (message.creator !== '') {
            writer.uint32(42).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRevokeAttribute);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identity = reader.string();
                    break;
                case 2:
                    message.actor = reader.string();
                    break;
                case 3:
                    message.name = reader.bytes();
                    break;
                case 4:
                    message.value = reader.bytes();
                    break;
                case 5:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgRevokeAttribute);
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = String(object.identity);
        }
        else {
            message.identity = '';
        }
        if (object.actor !== undefined && object.actor !== null) {
            message.actor = String(object.actor);
        }
        else {
            message.actor = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = bytesFromBase64(object.name);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.identity !== undefined && (obj.identity = message.identity);
        message.actor !== undefined && (obj.actor = message.actor);
        message.name !== undefined && (obj.name = base64FromBytes(message.name !== undefined ? message.name : new Uint8Array()));
        message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgRevokeAttribute);
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = object.identity;
        }
        else {
            message.identity = '';
        }
        if (object.actor !== undefined && object.actor !== null) {
            message.actor = object.actor;
        }
        else {
            message.actor = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = new Uint8Array();
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = new Uint8Array();
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        return message;
    }
};
const baseMsgRevokeAttributeResponse = {};
exports.MsgRevokeAttributeResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRevokeAttributeResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgRevokeAttributeResponse);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgRevokeAttributeResponse);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = new Uint8Array();
        }
        return message;
    }
};
const baseMsgTransferNFTResponse = {};
exports.MsgTransferNFTResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgTransferNFTResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgTransferNFTResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgTransferNFTResponse);
        return message;
    }
};
const baseMsgEditNFT = { id: '', denomId: '', name: '', uri: '', data: '', sender: '' };
exports.MsgEditNFT = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.denomId !== '') {
            writer.uint32(18).string(message.denomId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        if (message.data !== '') {
            writer.uint32(42).string(message.data);
        }
        if (message.sender !== '') {
            writer.uint32(50).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgEditNFT);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgEditNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        }
        else {
            message.uri = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        }
        else {
            message.data = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.name !== undefined && (obj.name = message.name);
        message.uri !== undefined && (obj.uri = message.uri);
        message.data !== undefined && (obj.data = message.data);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgEditNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        else {
            message.uri = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        return message;
    }
};
const baseMsgEditNFTResponse = {};
exports.MsgEditNFTResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgEditNFTResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgEditNFTResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgEditNFTResponse);
        return message;
    }
};
const baseMsgMintNFT = { id: '', denomId: '', name: '', uri: '', data: '', sender: '', recipient: '' };
exports.MsgMintNFT = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.denomId !== '') {
            writer.uint32(18).string(message.denomId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        if (message.data !== '') {
            writer.uint32(42).string(message.data);
        }
        if (message.sender !== '') {
            writer.uint32(50).string(message.sender);
        }
        if (message.recipient !== '') {
            writer.uint32(58).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgMintNFT);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.sender = reader.string();
                    break;
                case 7:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgMintNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        }
        else {
            message.uri = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        }
        else {
            message.data = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = String(object.recipient);
        }
        else {
            message.recipient = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.name !== undefined && (obj.name = message.name);
        message.uri !== undefined && (obj.uri = message.uri);
        message.data !== undefined && (obj.data = message.data);
        message.sender !== undefined && (obj.sender = message.sender);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgMintNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        else {
            message.uri = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        else {
            message.recipient = '';
        }
        return message;
    }
};
const baseMsgMintNFTResponse = {};
exports.MsgMintNFTResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgMintNFTResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgMintNFTResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgMintNFTResponse);
        return message;
    }
};
const baseMsgBurnNFT = { id: '', denomId: '', sender: '' };
exports.MsgBurnNFT = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.denomId !== '') {
            writer.uint32(18).string(message.denomId);
        }
        if (message.sender !== '') {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgBurnNFT);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgBurnNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgBurnNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        return message;
    }
};
const baseMsgBurnNFTResponse = {};
exports.MsgBurnNFTResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgBurnNFTResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgBurnNFTResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgBurnNFTResponse);
        return message;
    }
};
const baseMsgTransferDenom = { id: '', sender: '', recipient: '' };
exports.MsgTransferDenom = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.sender !== '') {
            writer.uint32(18).string(message.sender);
        }
        if (message.recipient !== '') {
            writer.uint32(26).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgTransferDenom);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgTransferDenom);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = String(object.recipient);
        }
        else {
            message.recipient = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.sender !== undefined && (obj.sender = message.sender);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgTransferDenom);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        else {
            message.recipient = '';
        }
        return message;
    }
};
const baseMsgTransferDenomResponse = {};
exports.MsgTransferDenomResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgTransferDenomResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgTransferDenomResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgTransferDenomResponse);
        return message;
    }
};
const baseMsgFileMetadataResponse = {};
exports.MsgFileMetadataResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgFileMetadataResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgFileMetadataResponse);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgFileMetadataResponse);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = new Uint8Array();
        }
        return message;
    }
};
const baseMsgMetadata = {
    creator: '',
    name: '',
    description: '',
    image: '',
    owner: '',
    parent: '',
    sources: '',
    links: '',
    verifiedCredentialRef: '',
    did: '',
    from: '',
    enableIpldForestAccess: false,
    factRef: ''
};
exports.MsgMetadata = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.image !== '') {
            writer.uint32(34).string(message.image);
        }
        if (message.owner !== '') {
            writer.uint32(42).string(message.owner);
        }
        if (message.parent !== '') {
            writer.uint32(50).string(message.parent);
        }
        if (message.sources !== '') {
            writer.uint32(58).string(message.sources);
        }
        if (message.links !== '') {
            writer.uint32(66).string(message.links);
        }
        if (message.verifiedCredentialRef !== '') {
            writer.uint32(74).string(message.verifiedCredentialRef);
        }
        if (message.did !== '') {
            writer.uint32(82).string(message.did);
        }
        if (message.from !== '') {
            writer.uint32(90).string(message.from);
        }
        if (message.enableIpldForestAccess === true) {
            writer.uint32(96).bool(message.enableIpldForestAccess);
        }
        if (message.factRef !== '') {
            writer.uint32(106).string(message.factRef);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.image = reader.string();
                    break;
                case 5:
                    message.owner = reader.string();
                    break;
                case 6:
                    message.parent = reader.string();
                    break;
                case 7:
                    message.sources = reader.string();
                    break;
                case 8:
                    message.links = reader.string();
                    break;
                case 9:
                    message.verifiedCredentialRef = reader.string();
                    break;
                case 10:
                    message.did = reader.string();
                    break;
                case 11:
                    message.from = reader.string();
                    break;
                case 12:
                    message.enableIpldForestAccess = reader.bool();
                    break;
                case 13:
                    message.factRef = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgMetadata);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.image !== undefined && object.image !== null) {
            message.image = String(object.image);
        }
        else {
            message.image = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.parent !== undefined && object.parent !== null) {
            message.parent = String(object.parent);
        }
        else {
            message.parent = '';
        }
        if (object.sources !== undefined && object.sources !== null) {
            message.sources = String(object.sources);
        }
        else {
            message.sources = '';
        }
        if (object.links !== undefined && object.links !== null) {
            message.links = String(object.links);
        }
        else {
            message.links = '';
        }
        if (object.verifiedCredentialRef !== undefined && object.verifiedCredentialRef !== null) {
            message.verifiedCredentialRef = String(object.verifiedCredentialRef);
        }
        else {
            message.verifiedCredentialRef = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = '';
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = String(object.from);
        }
        else {
            message.from = '';
        }
        if (object.enableIpldForestAccess !== undefined && object.enableIpldForestAccess !== null) {
            message.enableIpldForestAccess = Boolean(object.enableIpldForestAccess);
        }
        else {
            message.enableIpldForestAccess = false;
        }
        if (object.factRef !== undefined && object.factRef !== null) {
            message.factRef = String(object.factRef);
        }
        else {
            message.factRef = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.image !== undefined && (obj.image = message.image);
        message.owner !== undefined && (obj.owner = message.owner);
        message.parent !== undefined && (obj.parent = message.parent);
        message.sources !== undefined && (obj.sources = message.sources);
        message.links !== undefined && (obj.links = message.links);
        message.verifiedCredentialRef !== undefined && (obj.verifiedCredentialRef = message.verifiedCredentialRef);
        message.did !== undefined && (obj.did = message.did);
        message.from !== undefined && (obj.from = message.from);
        message.enableIpldForestAccess !== undefined && (obj.enableIpldForestAccess = message.enableIpldForestAccess);
        message.factRef !== undefined && (obj.factRef = message.factRef);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgMetadata);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.image !== undefined && object.image !== null) {
            message.image = object.image;
        }
        else {
            message.image = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.parent !== undefined && object.parent !== null) {
            message.parent = object.parent;
        }
        else {
            message.parent = '';
        }
        if (object.sources !== undefined && object.sources !== null) {
            message.sources = object.sources;
        }
        else {
            message.sources = '';
        }
        if (object.links !== undefined && object.links !== null) {
            message.links = object.links;
        }
        else {
            message.links = '';
        }
        if (object.verifiedCredentialRef !== undefined && object.verifiedCredentialRef !== null) {
            message.verifiedCredentialRef = object.verifiedCredentialRef;
        }
        else {
            message.verifiedCredentialRef = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = '';
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        else {
            message.from = '';
        }
        if (object.enableIpldForestAccess !== undefined && object.enableIpldForestAccess !== null) {
            message.enableIpldForestAccess = object.enableIpldForestAccess;
        }
        else {
            message.enableIpldForestAccess = false;
        }
        if (object.factRef !== undefined && object.factRef !== null) {
            message.factRef = object.factRef;
        }
        else {
            message.factRef = '';
        }
        return message;
    }
};
const baseMsgMetadataResponse = { cid: '' };
exports.MsgMetadataResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.cid !== '') {
            writer.uint32(10).string(message.cid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgMetadataResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgMetadataResponse);
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = String(object.cid);
        }
        else {
            message.cid = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cid !== undefined && (obj.cid = message.cid);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgMetadataResponse);
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = object.cid;
        }
        else {
            message.cid = '';
        }
        return message;
    }
};
const baseMsgFile = { creator: '', path: '', content: '', mode: '', time: '', contentType: '', did: '', from: '' };
exports.MsgFile = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        if (message.content !== '') {
            writer.uint32(26).string(message.content);
        }
        if (message.mode !== '') {
            writer.uint32(34).string(message.mode);
        }
        if (message.time !== '') {
            writer.uint32(42).string(message.time);
        }
        if (message.contentType !== '') {
            writer.uint32(50).string(message.contentType);
        }
        if (message.did !== '') {
            writer.uint32(58).string(message.did);
        }
        if (message.from !== '') {
            writer.uint32(66).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgFile);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.content = reader.string();
                    break;
                case 4:
                    message.mode = reader.string();
                    break;
                case 5:
                    message.time = reader.string();
                    break;
                case 6:
                    message.contentType = reader.string();
                    break;
                case 7:
                    message.did = reader.string();
                    break;
                case 8:
                    message.from = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgFile);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = String(object.path);
        }
        else {
            message.path = '';
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = String(object.content);
        }
        else {
            message.content = '';
        }
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = String(object.mode);
        }
        else {
            message.mode = '';
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = String(object.time);
        }
        else {
            message.time = '';
        }
        if (object.contentType !== undefined && object.contentType !== null) {
            message.contentType = String(object.contentType);
        }
        else {
            message.contentType = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = '';
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = String(object.from);
        }
        else {
            message.from = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.path !== undefined && (obj.path = message.path);
        message.content !== undefined && (obj.content = message.content);
        message.mode !== undefined && (obj.mode = message.mode);
        message.time !== undefined && (obj.time = message.time);
        message.contentType !== undefined && (obj.contentType = message.contentType);
        message.did !== undefined && (obj.did = message.did);
        message.from !== undefined && (obj.from = message.from);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgFile);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        else {
            message.path = '';
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        }
        else {
            message.content = '';
        }
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        }
        else {
            message.mode = '';
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = object.time;
        }
        else {
            message.time = '';
        }
        if (object.contentType !== undefined && object.contentType !== null) {
            message.contentType = object.contentType;
        }
        else {
            message.contentType = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = '';
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        else {
            message.from = '';
        }
        return message;
    }
};
const baseMsgFileResponse = { hash: '' };
exports.MsgFileResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.hash !== '') {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgFileResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgFileResponse);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgFileResponse);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = '';
        }
        return message;
    }
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateDid(request) {
        const data = exports.MsgCreateDid.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'CreateDid', data);
        return promise.then((data) => exports.MsgCreateDidResponse.decode(new minimal_1.Reader(data)));
    }
    UpdateDid(request) {
        const data = exports.MsgUpdateDid.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'UpdateDid', data);
        return promise.then((data) => exports.MsgUpdateDidResponse.decode(new minimal_1.Reader(data)));
    }
    RevokeDid(request) {
        const data = exports.MsgRevokeDid.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'RevokeDid', data);
        return promise.then((data) => exports.MsgRevokeDidResponse.decode(new minimal_1.Reader(data)));
    }
    RoyaltyInfo(request) {
        const data = exports.MsgRoyaltyInfo.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'RoyaltyInfo', data);
        return promise.then((data) => exports.MsgRoyaltyInfoResponse.decode(new minimal_1.Reader(data)));
    }
    ChangeOwner(request) {
        const data = exports.MsgChangeOwner.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'ChangeOwner', data);
        return promise.then((data) => exports.MsgChangeOwnerResponse.decode(new minimal_1.Reader(data)));
    }
    RevokeDelegate(request) {
        const data = exports.MsgRevokeDelegate.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'RevokeDelegate', data);
        return promise.then((data) => exports.MsgRevokeDelegateResponse.decode(new minimal_1.Reader(data)));
    }
    GrantDelegate(request) {
        const data = exports.MsgGrantDelegate.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'GrantDelegate', data);
        return promise.then((data) => exports.MsgGrantDelegateResponse.decode(new minimal_1.Reader(data)));
    }
    GrantAttribute(request) {
        const data = exports.MsgGrantAttribute.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'GrantAttribute', data);
        return promise.then((data) => exports.MsgGrantAttributeResponse.decode(new minimal_1.Reader(data)));
    }
    RevokeAttribute(request) {
        const data = exports.MsgRevokeAttribute.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'RevokeAttribute', data);
        return promise.then((data) => exports.MsgRevokeAttributeResponse.decode(new minimal_1.Reader(data)));
    }
    Metadata(request) {
        const data = exports.MsgMetadata.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'Metadata', data);
        return promise.then((data) => exports.MsgMetadataResponse.decode(new minimal_1.Reader(data)));
    }
    IssueDenom(request) {
        const data = exports.MsgIssueDenom.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'IssueDenom', data);
        return promise.then((data) => exports.MsgIssueDenomResponse.decode(new minimal_1.Reader(data)));
    }
    MintNFT(request) {
        const data = exports.MsgMintNFT.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'MintNFT', data);
        return promise.then((data) => exports.MsgMintNFTResponse.decode(new minimal_1.Reader(data)));
    }
    EditNFT(request) {
        const data = exports.MsgEditNFT.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'EditNFT', data);
        return promise.then((data) => exports.MsgEditNFTResponse.decode(new minimal_1.Reader(data)));
    }
    TransferNFT(request) {
        const data = exports.MsgTransferNFT.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'TransferNFT', data);
        return promise.then((data) => exports.MsgTransferNFTResponse.decode(new minimal_1.Reader(data)));
    }
    BurnNFT(request) {
        const data = exports.MsgBurnNFT.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'BurnNFT', data);
        return promise.then((data) => exports.MsgBurnNFTResponse.decode(new minimal_1.Reader(data)));
    }
    TransferDenom(request) {
        const data = exports.MsgTransferDenom.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'TransferDenom', data);
        return promise.then((data) => exports.MsgTransferDenomResponse.decode(new minimal_1.Reader(data)));
    }
    MintTrustedContent(request) {
        const data = exports.MsgMintTrustedContent.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'MintTrustedContent', data);
        return promise.then((data) => exports.MsgMintTrustedContentResponse.decode(new minimal_1.Reader(data)));
    }
    MintTrustedResource(request) {
        const data = exports.MsgMintTrustedResource.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'MintTrustedResource', data);
        return promise.then((data) => exports.MsgMintTrustedResourceResponse.decode(new minimal_1.Reader(data)));
    }
    RegisterRelay(request) {
        const data = exports.MsgRegisterRelay.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'RegisterRelay', data);
        return promise.then((data) => exports.MsgRegisterRelayResponse.decode(new minimal_1.Reader(data)));
    }
    MintSwap(request) {
        const data = exports.MsgMintSwap.encode(request).finish();
        const promise = this.rpc.request('ElectronicSignaturesIndustries.anconprotocol.anconprotocol.Msg', 'MintSwap', data);
        return promise.then((data) => exports.MsgMintSwapResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
const atob = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(''));
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (minimal_1.util.Long !== Long) {
    minimal_1.util.Long = Long;
    (0, minimal_1.configure)();
}
//# sourceMappingURL=tx.js.map
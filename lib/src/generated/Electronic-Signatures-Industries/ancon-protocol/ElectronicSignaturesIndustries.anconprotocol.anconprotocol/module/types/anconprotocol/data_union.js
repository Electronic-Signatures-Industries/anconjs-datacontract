"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateDataUnionResponse = exports.MsgUpdateDataUnion = exports.MsgRemoveDataUnionResponse = exports.MsgRemoveDataUnion = exports.MsgAddDataUnionResponse = exports.MsgAddDataUnion = exports.MsgUpdateDataSourceResponse = exports.MsgUpdateDataSource = exports.MsgRemoveDataSourceResponse = exports.MsgRemoveDataSource = exports.MsgAddDataSourceResponse = exports.MsgAddDataSource = exports.Pricing = exports.Anchor = exports.DataUnion = exports.DataSource = exports.protobufPackage = void 0;
const tslib_1 = require("tslib");
/* eslint-disable */
const Long = (0, tslib_1.__importStar)(require("long"));
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = 'ElectronicSignaturesIndustries.anconprotocol.anconprotocol';
const baseDataSource = { parentCid: '', didOwner: '', anchors: '', name: '', description: '', creator: '' };
exports.DataSource = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.parentCid !== '') {
            writer.uint32(10).string(message.parentCid);
        }
        if (message.didOwner !== '') {
            writer.uint32(18).string(message.didOwner);
        }
        for (const v of message.anchors) {
            writer.uint32(26).string(v);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.creator !== '') {
            writer.uint32(50).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDataSource);
        message.anchors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.parentCid = reader.string();
                    break;
                case 2:
                    message.didOwner = reader.string();
                    break;
                case 3:
                    message.anchors.push(reader.string());
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
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
        const message = Object.assign({}, baseDataSource);
        message.anchors = [];
        if (object.parentCid !== undefined && object.parentCid !== null) {
            message.parentCid = String(object.parentCid);
        }
        else {
            message.parentCid = '';
        }
        if (object.didOwner !== undefined && object.didOwner !== null) {
            message.didOwner = String(object.didOwner);
        }
        else {
            message.didOwner = '';
        }
        if (object.anchors !== undefined && object.anchors !== null) {
            for (const e of object.anchors) {
                message.anchors.push(String(e));
            }
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
        message.parentCid !== undefined && (obj.parentCid = message.parentCid);
        message.didOwner !== undefined && (obj.didOwner = message.didOwner);
        if (message.anchors) {
            obj.anchors = message.anchors.map((e) => e);
        }
        else {
            obj.anchors = [];
        }
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDataSource);
        message.anchors = [];
        if (object.parentCid !== undefined && object.parentCid !== null) {
            message.parentCid = object.parentCid;
        }
        else {
            message.parentCid = '';
        }
        if (object.didOwner !== undefined && object.didOwner !== null) {
            message.didOwner = object.didOwner;
        }
        else {
            message.didOwner = '';
        }
        if (object.anchors !== undefined && object.anchors !== null) {
            for (const e of object.anchors) {
                message.anchors.push(e);
            }
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
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        return message;
    }
};
const baseDataUnion = { name: '', did: '', active: false, creator: '' };
exports.DataUnion = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.did !== '') {
            writer.uint32(18).string(message.did);
        }
        if (message.active === true) {
            writer.uint32(24).bool(message.active);
        }
        if (message.creator !== '') {
            writer.uint32(34).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDataUnion);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.did = reader.string();
                    break;
                case 3:
                    message.active = reader.bool();
                    break;
                case 4:
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
        const message = Object.assign({}, baseDataUnion);
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = '';
        }
        if (object.active !== undefined && object.active !== null) {
            message.active = Boolean(object.active);
        }
        else {
            message.active = false;
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
        message.name !== undefined && (obj.name = message.name);
        message.did !== undefined && (obj.did = message.did);
        message.active !== undefined && (obj.active = message.active);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDataUnion);
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = '';
        }
        if (object.active !== undefined && object.active !== null) {
            message.active = object.active;
        }
        else {
            message.active = false;
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
const baseAnchor = { didOwner: '', link: '', parentCid: '', creator: '' };
exports.Anchor = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.didOwner !== '') {
            writer.uint32(10).string(message.didOwner);
        }
        if (message.link !== '') {
            writer.uint32(18).string(message.link);
        }
        if (message.parentCid !== '') {
            writer.uint32(26).string(message.parentCid);
        }
        if (message.creator !== '') {
            writer.uint32(34).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAnchor);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.didOwner = reader.string();
                    break;
                case 2:
                    message.link = reader.string();
                    break;
                case 3:
                    message.parentCid = reader.string();
                    break;
                case 4:
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
        const message = Object.assign({}, baseAnchor);
        if (object.didOwner !== undefined && object.didOwner !== null) {
            message.didOwner = String(object.didOwner);
        }
        else {
            message.didOwner = '';
        }
        if (object.link !== undefined && object.link !== null) {
            message.link = String(object.link);
        }
        else {
            message.link = '';
        }
        if (object.parentCid !== undefined && object.parentCid !== null) {
            message.parentCid = String(object.parentCid);
        }
        else {
            message.parentCid = '';
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
        message.didOwner !== undefined && (obj.didOwner = message.didOwner);
        message.link !== undefined && (obj.link = message.link);
        message.parentCid !== undefined && (obj.parentCid = message.parentCid);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAnchor);
        if (object.didOwner !== undefined && object.didOwner !== null) {
            message.didOwner = object.didOwner;
        }
        else {
            message.didOwner = '';
        }
        if (object.link !== undefined && object.link !== null) {
            message.link = object.link;
        }
        else {
            message.link = '';
        }
        if (object.parentCid !== undefined && object.parentCid !== null) {
            message.parentCid = object.parentCid;
        }
        else {
            message.parentCid = '';
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
const basePricing = { didOwner: '', price: 0, dataSourceRef: 0, creator: '' };
exports.Pricing = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.didOwner !== '') {
            writer.uint32(10).string(message.didOwner);
        }
        if (message.price !== 0) {
            writer.uint32(16).uint64(message.price);
        }
        if (message.dataSourceRef !== 0) {
            writer.uint32(24).uint64(message.dataSourceRef);
        }
        if (message.creator !== '') {
            writer.uint32(34).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePricing);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.didOwner = reader.string();
                    break;
                case 2:
                    message.price = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.dataSourceRef = longToNumber(reader.uint64());
                    break;
                case 4:
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
        const message = Object.assign({}, basePricing);
        if (object.didOwner !== undefined && object.didOwner !== null) {
            message.didOwner = String(object.didOwner);
        }
        else {
            message.didOwner = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Number(object.price);
        }
        else {
            message.price = 0;
        }
        if (object.dataSourceRef !== undefined && object.dataSourceRef !== null) {
            message.dataSourceRef = Number(object.dataSourceRef);
        }
        else {
            message.dataSourceRef = 0;
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
        message.didOwner !== undefined && (obj.didOwner = message.didOwner);
        message.price !== undefined && (obj.price = message.price);
        message.dataSourceRef !== undefined && (obj.dataSourceRef = message.dataSourceRef);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePricing);
        if (object.didOwner !== undefined && object.didOwner !== null) {
            message.didOwner = object.didOwner;
        }
        else {
            message.didOwner = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = 0;
        }
        if (object.dataSourceRef !== undefined && object.dataSourceRef !== null) {
            message.dataSourceRef = object.dataSourceRef;
        }
        else {
            message.dataSourceRef = 0;
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
const baseMsgAddDataSource = { creator: '' };
exports.MsgAddDataSource = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.dataSource !== undefined) {
            exports.DataSource.encode(message.dataSource, writer.uint32(10).fork()).ldelim();
        }
        if (message.creator !== '') {
            writer.uint32(18).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgAddDataSource);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataSource = exports.DataSource.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = Object.assign({}, baseMsgAddDataSource);
        if (object.dataSource !== undefined && object.dataSource !== null) {
            message.dataSource = exports.DataSource.fromJSON(object.dataSource);
        }
        else {
            message.dataSource = undefined;
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
        message.dataSource !== undefined && (obj.dataSource = message.dataSource ? exports.DataSource.toJSON(message.dataSource) : undefined);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgAddDataSource);
        if (object.dataSource !== undefined && object.dataSource !== null) {
            message.dataSource = exports.DataSource.fromPartial(object.dataSource);
        }
        else {
            message.dataSource = undefined;
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
const baseMsgAddDataSourceResponse = { ok: false, cid: '' };
exports.MsgAddDataSourceResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.ok === true) {
            writer.uint32(8).bool(message.ok);
        }
        if (message.cid !== '') {
            writer.uint32(18).string(message.cid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgAddDataSourceResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ok = reader.bool();
                    break;
                case 2:
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
        const message = Object.assign({}, baseMsgAddDataSourceResponse);
        if (object.ok !== undefined && object.ok !== null) {
            message.ok = Boolean(object.ok);
        }
        else {
            message.ok = false;
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
        message.ok !== undefined && (obj.ok = message.ok);
        message.cid !== undefined && (obj.cid = message.cid);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgAddDataSourceResponse);
        if (object.ok !== undefined && object.ok !== null) {
            message.ok = object.ok;
        }
        else {
            message.ok = false;
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
const baseMsgRemoveDataSource = { creator: '', cid: '' };
exports.MsgRemoveDataSource = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.cid !== '') {
            writer.uint32(18).string(message.cid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRemoveDataSource);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseMsgRemoveDataSource);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
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
        message.cid !== undefined && (obj.cid = message.cid);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgRemoveDataSource);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
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
const baseMsgRemoveDataSourceResponse = { ok: false };
exports.MsgRemoveDataSourceResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.ok === true) {
            writer.uint32(8).bool(message.ok);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRemoveDataSourceResponse);
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
        const message = Object.assign({}, baseMsgRemoveDataSourceResponse);
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
        const message = Object.assign({}, baseMsgRemoveDataSourceResponse);
        if (object.ok !== undefined && object.ok !== null) {
            message.ok = object.ok;
        }
        else {
            message.ok = false;
        }
        return message;
    }
};
const baseMsgUpdateDataSource = { creator: '', cid: '', name: '', description: '', anchors: 0 };
exports.MsgUpdateDataSource = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.cid !== '') {
            writer.uint32(18).string(message.cid);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        writer.uint32(42).fork();
        for (const v of message.anchors) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateDataSource);
        message.anchors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.cid = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.anchors.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.anchors.push(longToNumber(reader.uint64()));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgUpdateDataSource);
        message.anchors = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = String(object.cid);
        }
        else {
            message.cid = '';
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
        if (object.anchors !== undefined && object.anchors !== null) {
            for (const e of object.anchors) {
                message.anchors.push(Number(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cid !== undefined && (obj.cid = message.cid);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        if (message.anchors) {
            obj.anchors = message.anchors.map((e) => e);
        }
        else {
            obj.anchors = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgUpdateDataSource);
        message.anchors = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = object.cid;
        }
        else {
            message.cid = '';
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
        if (object.anchors !== undefined && object.anchors !== null) {
            for (const e of object.anchors) {
                message.anchors.push(e);
            }
        }
        return message;
    }
};
const baseMsgUpdateDataSourceResponse = { ok: false, cid: '' };
exports.MsgUpdateDataSourceResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.ok === true) {
            writer.uint32(8).bool(message.ok);
        }
        if (message.cid !== '') {
            writer.uint32(18).string(message.cid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateDataSourceResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ok = reader.bool();
                    break;
                case 2:
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
        const message = Object.assign({}, baseMsgUpdateDataSourceResponse);
        if (object.ok !== undefined && object.ok !== null) {
            message.ok = Boolean(object.ok);
        }
        else {
            message.ok = false;
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
        message.ok !== undefined && (obj.ok = message.ok);
        message.cid !== undefined && (obj.cid = message.cid);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgUpdateDataSourceResponse);
        if (object.ok !== undefined && object.ok !== null) {
            message.ok = object.ok;
        }
        else {
            message.ok = false;
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
const baseMsgAddDataUnion = { creator: '' };
exports.MsgAddDataUnion = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.dataUnion !== undefined) {
            exports.DataUnion.encode(message.dataUnion, writer.uint32(10).fork()).ldelim();
        }
        if (message.creator !== '') {
            writer.uint32(18).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgAddDataUnion);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataUnion = exports.DataUnion.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = Object.assign({}, baseMsgAddDataUnion);
        if (object.dataUnion !== undefined && object.dataUnion !== null) {
            message.dataUnion = exports.DataUnion.fromJSON(object.dataUnion);
        }
        else {
            message.dataUnion = undefined;
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
        message.dataUnion !== undefined && (obj.dataUnion = message.dataUnion ? exports.DataUnion.toJSON(message.dataUnion) : undefined);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgAddDataUnion);
        if (object.dataUnion !== undefined && object.dataUnion !== null) {
            message.dataUnion = exports.DataUnion.fromPartial(object.dataUnion);
        }
        else {
            message.dataUnion = undefined;
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
const baseMsgAddDataUnionResponse = {};
exports.MsgAddDataUnionResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgAddDataUnionResponse);
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
        const message = Object.assign({}, baseMsgAddDataUnionResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgAddDataUnionResponse);
        return message;
    }
};
const baseMsgRemoveDataUnion = { creator: '', cid: '' };
exports.MsgRemoveDataUnion = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.cid !== '') {
            writer.uint32(18).string(message.cid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRemoveDataUnion);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseMsgRemoveDataUnion);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
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
        message.cid !== undefined && (obj.cid = message.cid);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgRemoveDataUnion);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
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
const baseMsgRemoveDataUnionResponse = {};
exports.MsgRemoveDataUnionResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRemoveDataUnionResponse);
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
        const message = Object.assign({}, baseMsgRemoveDataUnionResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgRemoveDataUnionResponse);
        return message;
    }
};
const baseMsgUpdateDataUnion = { creator: '', cid: '', name: '' };
exports.MsgUpdateDataUnion = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.cid !== '') {
            writer.uint32(18).string(message.cid);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateDataUnion);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.cid = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgUpdateDataUnion);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = String(object.cid);
        }
        else {
            message.cid = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cid !== undefined && (obj.cid = message.cid);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgUpdateDataUnion);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = object.cid;
        }
        else {
            message.cid = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        return message;
    }
};
const baseMsgUpdateDataUnionResponse = {};
exports.MsgUpdateDataUnionResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateDataUnionResponse);
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
        const message = Object.assign({}, baseMsgUpdateDataUnionResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgUpdateDataUnionResponse);
        return message;
    }
};
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
//# sourceMappingURL=data_union.js.map
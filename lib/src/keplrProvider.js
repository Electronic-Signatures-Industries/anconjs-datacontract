"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeplrWeb3Client = void 0;
const tslib_1 = require("tslib");
const KeplrWrapper_1 = require("./KeplrWrapper");
const encoding_1 = require("@cosmjs/encoding");
const amino_1 = require("@cosmjs/amino");
const math_1 = require("@cosmjs/math");
const crypto_1 = require("@cosmjs/crypto");
const proto_signing_1 = require("@cosmjs/proto-signing");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const tx_1 = require("cosmjs-types/cosmos/tx/v1beta1/tx");
const node_fetch_1 = (0, tslib_1.__importDefault)(require("node-fetch"));
const module_1 = require("./generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module");
const bytes_1 = require("@ethersproject/bytes");
const launchpad_1 = require("@cosmjs/launchpad");
const anconConfig_1 = (0, tslib_1.__importDefault)(require("./anconConfig"));
global['fetch'] = require('node-fetch');
class KeplrWeb3Client {
    /**
     * New client from mnemonic
     */
    constructor() {
        return this;
    }
    getTxClient() {
        return module_1.txClient;
    }
    subscribeToTx(name, cb) {
        const query = `message.action='${name}'`;
        const c = this.tm.subscribeTx(query);
        const listener = {
            next: async (log) => {
                cb(log);
            },
        };
        c.addListener(listener);
        return c;
    }
    async getPublicKey() {
        const key = await window.keplr.getKey(this.cosmosChainId);
        console.log((0, tendermint_rpc_1.pubkeyToAddress)('secp256k1', key.pubKey), (0, bytes_1.hexlify)(key.address), key.bech32Address);
        return key.pubKey;
    }
    /**
     * Sign and broadcast
     * @param encoded Message to encode
     * @param fee UI purposes
     * @returns
     */
    async signAndBroadcast(encoded, fee) {
        const { account } = this.cosmosAccount;
        const pubkey = this.cosmosAccount.account.pub_key;
        const txBodyEncodeObject = tx_1.TxBody.fromPartial({
            memo: '',
            messages: [
                {
                    typeUrl: '/cosmos.tx.v1beta1.TxBody',
                    value: encoded,
                },
            ],
        });
        const gasLimit = math_1.Int53.fromString(fee.gas).toNumber();
        const authInfoBytes = (0, proto_signing_1.makeAuthInfoBytes)([
            {
                pubkey,
                sequence: account.sequence,
            },
        ], fee.amount, gasLimit, 1);
        const { signature, signed } = await window.keplr.signDirect(this.cosmosChainId, this.cosmosAccount.bech32Address, {
            bodyBytes: tx_1.TxBody.encode(txBodyEncodeObject).finish(),
            authInfoBytes,
            chainId: this.cosmosChainId,
            accountNumber: account.accountNumber,
        });
        const tx = tx_1.TxRaw.fromPartial({
            bodyBytes: signed.bodyBytes,
            authInfoBytes: signed.authInfoBytes,
            signatures: [(0, encoding_1.fromBase64)(signature.signature)],
        });
        return window.keplr.sendTx(this.cosmosChainId, tx_1.TxRaw.encode(tx).finish(), launchpad_1.BroadcastMode.Sync);
    }
    async connect(msgclients) {
        await (0, KeplrWrapper_1.createKeplrWallet)();
        await window.keplr.enable(anconConfig_1.default.chainId);
        this.cosmosChainId = anconConfig_1.default.chainId;
        this.rpcUrl = anconConfig_1.default.rpc;
        this.apiUrl = anconConfig_1.default.rest;
        this.tm = await tendermint_rpc_1.Tendermint34Client.connect(this.rpcUrl);
        // const q = QueryClient.withExtensions(
        //   this.tm,
        //   setupAuthExtension,
        //   setupBankExtension,
        // )
        this.queryClient = await (0, module_1.queryClient)({
            addr: this.apiUrl,
        });
        this.msgService = {};
        this.cosmosAccount = (await this.signer.getAccounts())[0];
        this.signer = window.keplr.getOfflineSigner(this.cosmosChainId);
        for (const txcli of msgclients) {
            this.msgService[txcli.name] = await txcli.client(this.signer, {
                addr: this.rpcUrl,
            });
        }
        const k = await window.keplr.getKey(this.cosmosChainId);
        this.cosmosAccount = await this.getAccountInfo(k.bech32Address);
        this.cosmosAccount.account.pub_key = (0, proto_signing_1.encodePubkey)((0, amino_1.encodeSecp256k1Pubkey)(crypto_1.Secp256k1.compressPubkey(k.pubKey)));
        return this;
    }
    async getAccountInfo(cosmosAddress) {
        const res2 = await (await (0, node_fetch_1.default)(this.apiUrl + `/cosmos/auth/v1beta1/accounts/` + cosmosAddress)).json();
        return Object.assign(Object.assign({}, res2), { address: res2.account.address });
    }
}
exports.KeplrWeb3Client = KeplrWeb3Client;
//# sourceMappingURL=keplrProvider.js.map
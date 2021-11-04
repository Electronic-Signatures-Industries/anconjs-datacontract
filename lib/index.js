"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmJSWeb3Provider = void 0;
const tslib_1 = require("tslib");
const ethermint_address_converter_1 = require("@hanchon/ethermint-address-converter");
const KeplrWrapper_1 = require("./KeplrWrapper");
const encoding_1 = require("@cosmjs/encoding");
const amino_1 = require("@cosmjs/amino");
const math_1 = require("@cosmjs/math");
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const tx_1 = require("cosmjs-types/cosmos/tx/v1beta1/tx");
const ethers_1 = require("ethers");
const node_fetch_1 = (0, tslib_1.__importDefault)(require("node-fetch"));
const utils_1 = require("ethers/lib/utils");
const accounts_1 = require("./accounts");
const transactions_1 = require("@ethersproject/transactions");
global['fetch'] = require('node-fetch');
/**
 * CosmJS Web3 Provider compatible with Keplr and Metamask
 */
class CosmJSWeb3Provider {
    /**
     * New client from mnemonic
     */
    constructor(url, prefix, chainId, evmChainId, wallet, _web3defaultAccount) {
        this.cosmosChainId = chainId;
        this.evmChainId = evmChainId;
        this.prefix = prefix;
        this.provider = wallet;
        this.web3defaultAccount = _web3defaultAccount;
        this.sender = new ethers_1.ethers.providers.JsonRpcProvider(url);
        return this;
    }
    /**
     * Sign and broadcast dual chain (EVM / Cosmos), used only for Cosmos Msgs
     * @param methodName Msg name
     * @param msg Message to encode
     * @param fee Fee
     * @returns
     */
    async signAndBroadcast(methodName, msg, fee) {
        const encoded = this.connectedSigner.registry.encode(msg);
        const pubkey = (0, proto_signing_1.encodePubkey)((0, amino_1.encodeSecp256k1Pubkey)(this.pubkey));
        const txBodyEncodeObject = {
            typeUrl: '/cosmos.tx.v1beta1.TxBody',
            value: {
                messages: [encoded],
                memo: '',
            },
        };
        const txBodyBytes = this.connectedSigner.registry.encode(txBodyEncodeObject);
        const gasLimit = math_1.Int53.fromString(fee.gas).toNumber();
        const authInfoBytes = (0, proto_signing_1.makeAuthInfoBytes)([{ pubkey, sequence: this.cosmosAccount.sequence }], fee.amount, gasLimit);
        const signDoc = (0, proto_signing_1.makeSignDoc)(txBodyBytes, authInfoBytes, this.cosmosChainId, this.cosmosAccount.accountNumber);
        const { signature, signed } = await this.offlineSigner.signDirect(this.cosmosAccount.address, signDoc);
        const txsignedhex = tx_1.TxRaw.fromPartial({
            bodyBytes: signed.bodyBytes,
            authInfoBytes: signed.authInfoBytes,
            signatures: [(0, encoding_1.fromBase64)(signature.signature)],
        });
        // Signs Ethereum TxData
        const tx = {
            data: tx_1.TxRaw.encode(txsignedhex).finish(),
            value: 0,
            chainId: this.evmChainId,
        };
        let raw = await this.provider
            .getSigner(this.web3defaultAccount)
            .signMessage((0, utils_1.keccak256)((0, transactions_1.serialize)(tx)));
        raw = (0, transactions_1.serialize)(tx, raw);
        const res = await this.sender.send('ancon_sendRawTransaction', [raw]);
        return res;
    }
    /**
     * Connects provider
     * @returns
     */
    async connect(queryClientFromModule, registryFromModule) {
        const { config, accounts, offlineSigner } = await (0, KeplrWrapper_1.createKeplrWallet)();
        this.cosmosChainId = config.chainId;
        this.rpcUrl = config.rpc;
        this.apiUrl = config.rest;
        this.tm = await tendermint_rpc_1.Tendermint34Client.connect(this.rpcUrl);
        const q = stargate_1.QueryClient.withExtensions(this.tm, stargate_1.setupAuthExtension, stargate_1.setupBankExtension);
        this.ethAccount = (0, ethermint_address_converter_1.ethermintToEth)(accounts[0].address);
        this.queryClient = await queryClientFromModule({
            addr: this.apiUrl,
        });
        const anyAccount = await q.auth.account(accounts[0].address);
        this.cosmosAccount = (0, accounts_1.accountFromAny)(anyAccount);
        this.connectedSigner = await stargate_1.SigningStargateClient.connectWithSigner(this.rpcUrl, offlineSigner, { registry: registryFromModule, prefix: this.prefix });
        //@ts-ignore
        this.offlineSigner = this.connectedSigner.signer;
        this.pubkey = accounts[0].pubkey;
        return this;
    }
    async getEthAccountInfo(defaultEthAddress) {
        const res = await (await (0, node_fetch_1.default)(this.apiUrl + `/ethermint/evm/v1/cosmos_account/` + defaultEthAddress)).json();
        return Object.assign(Object.assign({}, res), { address: res.cosmos_address });
    }
}
exports.CosmJSWeb3Provider = CosmJSWeb3Provider;
CosmJSWeb3Provider.HD_PATH = "m/44'/60'/0'/0/0";
//# sourceMappingURL=index.js.map
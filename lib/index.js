"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnconClient = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const xdv_universal_wallet_core_1 = require("xdv-universal-wallet-core");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const tx_1 = require("./generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module/types/anconprotocol/tx");
const module_1 = require("./generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module");
class AnconClient {
    /**
     * Register Msg imports
     */
    constructor(isWeb, apiUrl, rpcUrl, signer) {
        this.apiUrl = apiUrl;
        this.rpcUrl = rpcUrl;
        this.signer = signer;
        this.wallet = new xdv_universal_wallet_core_1.Wallet({ isWeb });
    }
    /**
     * Creates a wallet account
     * @param accountName Account name
     * @param passphrase Passphrase
     */
    /**
     * Creates a wallet
     * @param accountName Account name
     * @param passphrase Passphrase
     * @returns
     */
    async createWallet(accountName, passphrase) {
        await this.wallet.open(accountName, passphrase);
        const acct = (await this.wallet.getAccount());
        let walletId;
        if (acct.keystores.length === 0) {
            walletId = await this.wallet.addWallet();
        }
        else {
            walletId = acct.keystores[0].walletId;
        }
        const wallet = await this.wallet.createES256K({
            passphrase: passphrase,
            walletId: walletId,
        });
        return wallet;
    }
    /**
     * Imports an existing seed phrase
     * @param accountName Account name
     * @param passphrase Passphrase
     * @param mnemonic Seed phrase
     * @returns
     */
    async importWallet(accountName, passphrase, mnemonic) {
        await this.wallet.open(accountName, passphrase);
        const acct = (await this.wallet.getAccount());
        if (acct.keystores.length > 0) {
            // already imported
            return this.wallet;
        }
        const walletId = await this.wallet.addWallet({
            mnemonic,
        });
        const wallet = await this.wallet.createES256K({
            passphrase: passphrase,
            walletId: walletId,
        });
        return wallet;
    }
    async create(accountName, passphrase, mnemonic) {
        let signer = this.signer;
        if (!this.signer) {
            const resp = await this.wallet.open(accountName, passphrase);
            const acct = (await this.wallet.getAccount(accountName));
            let walletId = '';
            if (acct.keystores.length === 0) {
                walletId = await this.wallet.addWallet({
                    mnemonic,
                });
            }
            else {
                walletId = acct.keystores[0].walletId;
            }
            const keystore = await acct.keystores.find((k) => k.walletId === walletId);
            signer = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(keystore.mnemonic, {
                prefix: 'cosmos',
            });
        }
        this.tm = await tendermint_rpc_1.Tendermint34Client.connect(this.rpcUrl);
        const queryCli = await module_1.queryClient({
            addr: this.apiUrl,
        });
        this.queryService = queryCli;
        const msgCli = await module_1.txClient(signer, {
            addr: this.rpcUrl,
        });
        this.msgService = msgCli;
        const ancon = {
            query: queryCli,
            msg: msgCli,
            tendermint: this.tm,
            metadata: {
                add: function (msg, fee) {
                    const encoded = ancon.msg.msgMetadata(msg);
                    return ancon.msg.signAndBroadcast([encoded], fee);
                },
                get: async function (cid, path) {
                    const resp = await ancon.query.queryResource(cid, path, {});
                    return resp.data;
                },
            },
            file: {
                add: function (msg, fee) {
                    const encoded = ancon.msg.msgFile(msg);
                    return ancon.msg.signAndBroadcast([encoded], fee);
                },
                get: async function (cid, path) {
                    const resp = await ancon.query.queryResource(cid, path, {});
                    return resp.data;
                },
            },
        };
        return ancon;
    }
    /**
   * Executes a MsgMetadata transaction
   * @param msg MsgMetadata type
   * @param fee Fee type
   * @returns Promise<{wait, receipt}>
   */
    async executeMetadata(msg, fee) {
        const wait = new Promise(async (resolve, reject) => {
            const query = `message.action='Metadata'`;
            this.tm.subscribeTx(query).addListener({
                next: async (log) => {
                    // Decode response
                    const res = tx_1.MsgMetadataResponse.decode(log.result.data);
                    // Hack: Protobuf issue
                    const cid = res.cid.substring(10);
                    // Get CID content from GET /ancon/{cid} or /ancon/{cid}/{path}
                    resolve(cid);
                },
            });
        });
        const encoded = this.msgService.msgMetadata(msg);
        const receipt = this.msgService.signAndBroadcast([encoded], fee);
        return { wait, receipt };
    }
    /**
     * Executes a MsgFile transaction
     * @param msg MsgFile type
     * @param fee Fee type
     * @returns Promise<{wait, receipt}>
     */
    async executeFile(msg, fee) {
        const wait = new Promise(async (resolve, reject) => {
            const query = `message.action='File'`;
            this.tm.subscribeTx(query).addListener({
                next: async (log) => {
                    // Decode response
                    const res = tx_1.MsgFileResponse.decode(log.result.data);
                    // Hack: Protobuf issue
                    const cid = res.hash.substring(10);
                    // Get CID content from GET /ancon/{cid} or /ancon/{cid}/{path}
                    resolve(cid);
                },
            });
        });
        const encoded = this.msgService.msgFile(msg);
        const receipt = this.msgService.signAndBroadcast([encoded], fee);
        return { wait, receipt };
    }
}
exports.AnconClient = AnconClient;
//# sourceMappingURL=index.js.map
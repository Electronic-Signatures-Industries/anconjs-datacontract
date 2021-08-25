"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnconClient = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const xdv_universal_wallet_core_1 = require("xdv-universal-wallet-core");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
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
        if (!signer) {
            const acct = (await this.wallet.getAccount(accountName));
            let walletId = '';
            if (acct.keystores.length === 0 && mnemonic) {
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
        const tm = await tendermint_rpc_1.Tendermint34Client.connect(this.rpcUrl);
        const queryCli = await module_1.queryClient({
            addr: this.apiUrl,
        });
        const msgCli = await module_1.txClient(signer, {
            addr: this.rpcUrl,
        });
        const ancon = {
            query: queryCli,
            msg: msgCli,
            tendermint: tm,
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
}
exports.AnconClient = AnconClient;
//# sourceMappingURL=index.js.map
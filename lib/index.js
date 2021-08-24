"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnconClient = void 0;
require('dotenv').config();
const proto_signing_1 = require("@cosmjs/proto-signing");
const xdv_universal_wallet_core_1 = require("xdv-universal-wallet-core");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const module_1 = require("./generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module");
class AnconClient {
    /**
     * Register Msg imports
     */
    constructor() {
        this.wallet = new xdv_universal_wallet_core_1.Wallet({ isWeb: false });
    }
    /**
     * Creates a wallet account
     * @param accountName Account name
     * @param passphrase Passphrase
     */
    async createAccount(accountName, passphrase) {
        await this.wallet.open(accountName, passphrase);
        await this.wallet.enrollAccount({
            accountName,
        });
    }
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
            //  TODO: Mnemonic must come from XDV Node Provider because it is using a custom chain
            walletId = await this.wallet.addWallet();
        }
        else {
            walletId = acct.keystores[0].walletId;
        }
        const wallet = await this.wallet.createEd25519({
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
        const wallet = await this.wallet.createEd25519({
            passphrase: passphrase,
            walletId: walletId,
        });
        return wallet;
    }
    async create(accountName, passphrase) {
        const acct = (await this.wallet.getAccount());
        let walletId = '';
        if (acct.keystores.length === 0) {
            //  TODO: Mnemonic must come from XDV Node Provider because it is using a custom chain
            walletId = await this.wallet.addWallet({
                mnemonic: process.env.ALICE_M,
            });
        }
        else {
            walletId = acct.keystores[0].walletId;
        }
        const keystore = await acct.keystores.find((k) => k.walletId === walletId);
        console.log(keystore);
        const signer = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(keystore.mnemonic, { prefix: 'cosmos' });
        //     const msg = await txClient.msgCreateFile(value)
        //     const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee,
        // gas: "200000" }, memo})
        const tm = await tendermint_rpc_1.Tendermint34Client.connect('ws://localhost:26657/');
        const queryCli = await module_1.queryClient({
            addr: 'http://localhost:1317',
        });
        const msgCli = await module_1.txClient(signer, {
            addr: 'ws://localhost:26657',
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
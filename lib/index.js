"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnconClient = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const ethers_1 = require("ethers");
const xdv_universal_wallet_core_1 = require("xdv-universal-wallet-core");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const stargate_1 = require("@cosmjs/stargate");
const tx_1 = require("./generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module/types/anconprotocol/tx");
const module_1 = require("./generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module");
const rxjs_1 = require("rxjs");
const tx_2 = require("cosmjs-types/cosmos/tx/v1beta1/tx");
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
    async sign(accountNumber, address, chainId, sequence, fee, encoded, signer) {
        const txRaw = await signer.signDirect(address, [encoded], fee, '', {
            accountNumber,
            sequence,
            chainId,
        });
        return tx_2.TxRaw.encode(txRaw).finish();
    }
    async create(accountName, passphrase, mnemonic) {
        let signer = this.signer;
        let rpc;
        let eth;
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
            rpc = new ethers_1.ethers.providers.JsonRpcProvider('http://localhost:8545');
            eth = this.ethersclient = ethers_1.ethers.Wallet.fromMnemonic(keystore.mnemonic);
            this.ethersclient.connect(rpc);
            signer = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(keystore.mnemonic, {
                prefix: 'ethm',
            });
        }
        this.offlineSigner = await stargate_1.SigningStargateClient.connectWithSigner(this.rpcUrl, signer, {
            registry: module_1.registry,
            prefix: 'ethm',
        });
        const offlineSig = this.offlineSigner;
        this.account = await offlineSig.getAccount('ethm1x23pcxakulpq74r7jv948kk90apv6f0k7s943z');
        console.log(this.account);
        const defaultAccount = this.account;
        this.tm = await tendermint_rpc_1.Tendermint34Client.connect(this.rpcUrl);
        const queryCli = await (0, module_1.queryClient)({
            addr: this.apiUrl,
        });
        this.queryService = queryCli;
        const msgCli = await (0, module_1.txClient)(signer, {
            addr: this.rpcUrl,
        });
        const sign = this.sign;
        this.msgService = msgCli;
        const ancon = {
            query: queryCli,
            msg: msgCli,
            tendermint: this.tm,
            metadata: {
                add: async function (msg, fee) {
                    const encoded = ancon.msg.msgMetadata(msg);
                    // curl -X GET "http://localhost:1317/ethermint/evm/v1/cosmos_account/32A21C1BB6E7C20F547E930B53DAC57F42CD25F6" -H  "accept: application/json"
                    const acct = 8;
                    const addr = defaultAccount.address;
                    const sequence = 0;
                    const txsignedhex = await sign(acct, addr, '9000', sequence, fee.fee, encoded, offlineSig);
                    // Set it to Data in a ethereum tx / SendTxArgs
                    const tx = {
                        data: txsignedhex,
                        value: 0,
                        chainId: 9000,
                        // from: '0xB9F6914A7415F9AD867A9C537471A46DFA852BAE'
                    };
                    // const params = [txsignedhex]
                    const raw = await eth.signTransaction(Object.assign({}, tx));
                    const res = await rpc.send('ancon_sendRawTransaction', [raw]);
                    return res;
                },
                get: async function (cid, path) {
                    const resp = await ancon.query.queryResource(cid, { path }, {});
                    return resp.data;
                },
            },
            file: {
                add: async function (msg, fee) {
                    const encoded = ancon.msg.msgFile(msg);
                    // curl -X GET "http://localhost:1317/ethermint/evm/v1/cosmos_account/32A21C1BB6E7C20F547E930B53DAC57F42CD25F6" -H  "accept: application/json"
                    const acct = 8;
                    const addr = defaultAccount.address;
                    const sequence = 0;
                    const signers = {
                        pubkey: defaultAccount.pubkey,
                        sequence,
                    };
                    const data = await sign(acct, addr, '9000', sequence, fee.fee, encoded, offlineSig);
                    const tx = {
                        data,
                        value: 0,
                        chainId: 9000,
                        // from: '0xB9F6914A7415F9AD867A9C537471A46DFA852BAE'
                    };
                    // const params = [txsignedhex]
                    const raw = await eth.signTransaction(Object.assign({}, tx));
                    console.log(raw);
                    const res = await rpc.send('ancon_sendRawTransaction', [raw]);
                    return res;
                },
                get: async function (cid, path) {
                    const resp = await ancon.query.queryResource(cid, { path }, {});
                    return resp.data;
                },
            },
        };
        return ancon;
    }
    /**
     * Add Ancon Metadata
     * @param name Identifies the asset to which this token represents.
     * @param description Describes the asset to which this token represents.
     * @param image A URI pointing to a resource with mime type image/* representing the asset to which this token represents.
     * @param sources Current intellectual property.
     * @param owner The owner is a DID identifier.
     * @param parent Direct ascendant of the current intellectual property.
     * @param verifiedCredentialRef Is the verified credential for the metadata
     * @param links Sample of references included in the current intellectual property
     * @param creator
     * @param did
     * @param from
     */
    async executeMetadata({ name, description, image, sources, owner, parent, verifiedCredentialRef, links, creator, did, from, fee, }) {
        const metadata = {
            name: name,
            description: description,
            image: image,
            sources: sources,
            owner: owner,
            parent: parent,
            verified_credential_ref: verifiedCredentialRef,
            links: links,
            creator: creator,
            did: did,
            from: from,
        };
        const sub = new rxjs_1.Subject();
        const query = `message.action='Metadata'`;
        const subscription = this.tm.subscribeTx(query).subscribe({
            next: async (log) => {
                try {
                    // Decode response
                    const res = tx_1.MsgMetadataResponse.decode(log.result.data);
                    // Hack: Protobuf issue
                    const cid = res.cid.substring(14);
                    sub.next(cid);
                    sub.complete();
                }
                catch (err) {
                    sub.error(err);
                }
            },
        });
        try {
            const wait = new Promise((resolve, reject) => {
                sub.subscribe({ next: (i) => resolve(i), error: (e) => reject(e) });
            });
            const encoded = this.msgService.msgMetadata(metadata);
            // hack
            encoded.value.creator = creator;
            encoded.value.sources = JSON.stringify(encoded.value.sources);
            encoded.value.links = JSON.stringify(encoded.value.links);
            const tx = await this.msgService.signAndBroadcast([encoded], {
                fee,
            });
            const cid = await wait;
            return { transaction: tx, cid };
        }
        catch (e) {
            throw e;
        }
        finally {
            subscription.unsubscribe();
        }
    }
    /**
     * Add Ancon File
     * @param
     */
    async addFile({ did, file, fee }) {
        const sub = new rxjs_1.Subject();
        file.did = did;
        const query = `message.action='File'`;
        const subscription = this.tm.subscribeTx(query).subscribe({
            next: async (log) => {
                try {
                    // Decode response
                    const res = tx_1.MsgFileResponse.decode(log.result.data);
                    // Hack: Protobuf issue
                    const cid = res.hash.substring(10);
                    sub.next(cid);
                    sub.complete();
                }
                catch (err) {
                    sub.error(err);
                }
            },
        });
        try {
            const wait = new Promise((resolve, reject) => {
                sub.subscribe({ next: (i) => resolve(i), error: (e) => reject(e) });
            });
            const encoded = this.msgService.msgFile(file);
            const tx = await this.msgService.signAndBroadcast([encoded], {
                fee,
            });
            const cid = await wait;
            return { transaction: tx, cid };
        }
        catch (e) {
            throw e;
        }
        finally {
            subscription.unsubscribe();
        }
    }
}
exports.AnconClient = AnconClient;
//# sourceMappingURL=index.js.map
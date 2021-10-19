"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnconClient = void 0;
const tslib_1 = require("tslib");
const crypto_1 = require("@cosmjs/crypto");
const proto_signing_1 = require("@cosmjs/proto-signing");
const ethers_1 = require("ethers");
const xdv_universal_wallet_core_1 = require("xdv-universal-wallet-core");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const stargate_1 = require("@cosmjs/stargate");
const tx_1 = require("./generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module/types/anconprotocol/tx");
const module_1 = require("./generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module");
const rxjs_1 = require("rxjs");
const tx_2 = require("cosmjs-types/cosmos/tx/v1beta1/tx");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
global['fetch'] = require('node-fetch');
class AnconClient {
    /**
     * Register Msg imports
     */
    constructor(isWeb, apiUrl, rpcUrl, ethereumUrl, defaultEthAddress, signer) {
        this.apiUrl = apiUrl;
        this.rpcUrl = rpcUrl;
        this.ethereumUrl = ethereumUrl;
        this.defaultEthAddress = defaultEthAddress;
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
    async sign(accountNumber, address, chainId, sequence, fee, encoded, signer, keyringAccount) {
        const s = await stargate_1.SigningStargateClient.connectWithSigner(`ws://localhost:26657`, signer, {
            registry: module_1.registry,
            prefix: 'ethm',
        });
        const raw = await s.sign(address, [encoded], fee, '', {
            accountNumber,
            sequence,
            chainId,
        });
        return tx_2.TxRaw.encode(raw).finish();
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
            rpc = new ethers_1.ethers.providers.JsonRpcProvider(this.ethereumUrl);
            eth = this.ethersclient = ethers_1.ethers.Wallet.fromMnemonic(keystore.mnemonic, `m/44'/60'/0'/0`);
            this.ethersclient.connect(rpc);
            signer = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(keystore.mnemonic, {
                prefix: 'ethm',
                hdPaths: [crypto_1.stringToPath(`m/44'/60'/0'/0`)],
            });
        }
        const accounts = await signer.getAccounts();
        console.log(accounts);
        const keyringAccount = Object.assign({}, accounts[0]);
        // keyringAccount.address = "ethm1x73r96c85nage2y05cpqlzth8ak2qg9p0vqc4d";
        const cosmosAccount = await this.getEthAccountInfo('0x37A232EB07A4FA8CA88FA6020F89773F6CA020A1');
        if (keyringAccount.address !== cosmosAccount.address) {
            throw new Error('keyring: ' +
                keyringAccount.address +
                ' cosmos: ' +
                cosmosAccount.address);
        }
        this.tm = await tendermint_rpc_1.Tendermint34Client.connect(this.rpcUrl);
        const queryCli = await module_1.queryClient({
            addr: this.apiUrl,
        });
        const msgCli = await module_1.txClient(signer, {
            addr: this.rpcUrl,
        });
        const sign = this.sign;
        this.msgService = msgCli;
        const ancon = {
            rpc,
            changeOwnerWithProof: null,
            query: queryCli,
            msg: msgCli,
            tendermint: this.tm,
            registry: module_1.registry,
            metadata: {
                add: async function (msg, fee) {
                    const encoded = ancon.msg.msgMetadata(msg);
                    // curl -X GET "http://localhost:1317/ethermint/evm/v1/cosmos_account/32A21C1BB6E7C20F547E930B53DAC57F42CD25F6" -H  "accept: application/json"
                    const acct = cosmosAccount.account_number;
                    const addr = cosmosAccount.address;
                    const sequence = cosmosAccount.sequence;
                    const txsignedhex = await sign(acct, addr, 'anconprotocol_9000-1', sequence, fee.fee, encoded, signer, keyringAccount);
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
                    const resp = await ancon.query.queryReadWithPath(cid, path, {});
                    return resp.data;
                },
            },
            file: {
                add: async function (msg, fee) {
                    const encoded = ancon.msg.msgFile(msg);
                    // curl -X GET "http://localhost:1317/ethermint/evm/v1/cosmos_account/32A21C1BB6E7C20F547E930B53DAC57F42CD25F6" -H  "accept: application/json"
                    const acct = cosmosAccount.account_number;
                    const addr = cosmosAccount.address;
                    const sequence = cosmosAccount.sequence;
                    const signers = {
                        pubkey: keyringAccount.pubkey,
                        sequence,
                    };
                    const data = await sign(acct, addr, 'anconprotocol_9000-1', sequence, fee.fee, encoded, signer, keyringAccount);
                    const tx = {
                        data,
                        value: 0,
                        gasLimit: 2000,
                        gasPrice: 20000,
                        chainId: 9000,
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
    async getEthAccountInfo(defaultEthAddress) {
        const res = await (await node_fetch_1.default(this.apiUrl + `/ethermint/evm/v1/cosmos_account/` + defaultEthAddress)).json();
        console.log('RES JSON ', res);
        //const temp = res[0]
        return Object.assign(Object.assign({}, res), { address: res.cosmos_address });
    }
}
exports.AnconClient = AnconClient;
//# sourceMappingURL=index.js.map
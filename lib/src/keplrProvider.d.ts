import { Registry } from '@cosmjs/proto-signing';
import { SigningStargateClient } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { Window as KeplrWindow } from '@keplr-wallet/types';
declare global {
    interface Window extends KeplrWindow {
    }
}
export declare class KeplrWeb3Client {
    tm: Tendermint34Client;
    msgService: {
        [k: string]: {
            [v: string]: (...args: any[]) => any;
        };
    };
    account: any;
    connectedSigner: SigningStargateClient;
    queryClient: any;
    registry: Registry;
    apiUrl: string;
    rpcUrl: string;
    offlineSigner: any;
    cosmosChainId: any;
    cosmosAccount: any;
    pubkey: Uint8Array;
    signer: any;
    /**
     * New client from mnemonic
     */
    constructor();
    getTxClient(): any;
    subscribeToTx(name: string, cb: any): import("xstream").Stream<import("@cosmjs/tendermint-rpc/build/tendermint34").TxEvent>;
    getPublicKey(): Promise<Uint8Array>;
    /**
     * Sign and broadcast
     * @param encoded Message to encode
     * @param fee UI purposes
     * @returns
     */
    signAndBroadcast(encoded: any, fee: any): Promise<Uint8Array>;
    connect(msgclients: Array<{
        name: string;
        client: any;
    }>, next: any): Promise<this>;
    getAccountInfo(cosmosAddress: string): Promise<any>;
}

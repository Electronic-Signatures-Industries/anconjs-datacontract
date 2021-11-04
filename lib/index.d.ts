import { Registry } from '@cosmjs/proto-signing';
import { SigningStargateClient } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { ethers } from 'ethers';
/**
 * CosmJS Web3 Provider compatible with Keplr and Metamask
 */
export declare class CosmJSWeb3Provider {
    tm: Tendermint34Client;
    static HD_PATH: string;
    ethersclient: ethers.Wallet;
    connectedSigner: SigningStargateClient;
    queryClient: any;
    registry: Registry;
    apiUrl: string;
    rpcUrl: string;
    offlineSigner: any;
    cosmosChainId: any;
    provider: ethers.providers.Web3Provider;
    cosmosAccount: any;
    ethAccount: string;
    pubkey: Uint8Array;
    web3defaultAccount: string;
    sender: ethers.providers.JsonRpcProvider;
    evmChainId: number;
    prefix: string;
    /**
     * New client from mnemonic
     */
    constructor(url: string, prefix: string, chainId: string, evmChainId: number, wallet: ethers.providers.Web3Provider, _web3defaultAccount: string);
    /**
     * Sign and broadcast dual chain (EVM / Cosmos), used only for Cosmos Msgs
     * @param methodName Msg name
     * @param msg Message to encode
     * @param fee Fee
     * @returns
     */
    signAndBroadcast(methodName: string, msg: any, fee: any): Promise<any>;
    /**
     * Connects provider
     * @returns
     */
    connect(queryClientFromModule: any, registryFromModule: any): Promise<this>;
    getEthAccountInfo(defaultEthAddress: string): Promise<any>;
}

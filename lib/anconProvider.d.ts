import { Web3Provider } from '@ethersproject/providers';
import { CosmJSWeb3Provider } from '.';
export declare class AnconWeb3Provider extends CosmJSWeb3Provider {
    constructor(evmRpc: string, prefix: string, cosmosChainId: string, evmChainId: number, provider: Web3Provider, defaultAccount: string);
    connectProvider(): Promise<this>;
}

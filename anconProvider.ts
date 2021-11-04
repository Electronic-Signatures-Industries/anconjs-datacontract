import { Web3Provider } from '@ethersproject/providers'
import { CosmJSWeb3Provider } from '.'
import {
  queryClient,
  registry,
} from './store/generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module'

export class AnconWeb3Provider extends CosmJSWeb3Provider {
  constructor(
    evmRpc: string,
    prefix: string,
    cosmosChainId: string,
    evmChainId: number,
    provider: Web3Provider,
    defaultAccount: string,
  ) {
    super(evmRpc, prefix, cosmosChainId, evmChainId, provider, defaultAccount)
  }

  connectProvider(): Promise<this>{
      return super.connect(queryClient, registry)
  }
}

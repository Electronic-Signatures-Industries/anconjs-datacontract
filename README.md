# CosmJS Web3Provider


## Install

`npm install cosmjs-web3provider -S`


## Usage

You need to subclass `CosmJSWeb3Provider` to use a Cosmos SDK module. Query feature can be extended to support any module using *WithExtension.

```typescript
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

const accounts = await window.ethereum.enable();
this.anconWeb3client = new AnconWeb3Provider(
  'https://ancon.did.pa/evm',
  'ancon',
  'anconprotocol_9000-1',
  9000,
  new ethers.providers.Web3Provider(window.ethereum),
  accounts[0] as string
);

await this.anconWeb3client.connectProvider();

// Subscribe to messages
const query = `message.action='Metadata'`;
const c = this.anconWeb3client.tm.subscribeTx(query);
const listener = {
  next: async (log: TxEvent) => {
    // Decode response
    const res = MsgMetadataResponse.decode(log.result.data);
    console.log(res);
  }
}

// Sign and broadcast Cosmos enveloped tx (Keplr) in MsgEthereumTx (uses ancon_sendRawTransaction)
const msg = MsgMetadata.fromPartial({
  creator: this.anconWeb3client.cosmosAccount.address,
  name,
  image: 'http://localhost:8081/someimg.png',
  additionalSources: [],
  links: [],
  owner: `did:ether:9000:${accounts[0]}`,
  description,
});


await this.anconWeb3client.signAndBroadcast(
  msg,
  fee: {
    amount: [
      {
        denom: "aancon",
        amount: "2000",
      },
    ],
    gas: "5000000",
  },
);


// Sign and broadcast Metamask - tx sent directly to Ethermint
const approveTx = await this.daiWeb3contract.methods
  .approve(this.nftWeb3Contract._address, "1000000000000000000")
  .send({
    gasPrice: gasPrice,
    gas: gasLimit,
    from: this.currentAccount,
  });

// TODO: wait 5 s

const mintnft = await this.nftWeb3Contract.methods
  .mint(this.currentAccount, uri)
  .send({
    gasPrice: gasPrice,
    gas: gasLimit,
    from: this.currentAccount,
  });
```

### @molekilla for
#### IFESA 2021

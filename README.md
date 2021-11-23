# AnconJS Data Contract client


## Install

`npm install anconjs-datacontract -S`


## Usage



```typescript
connect() {
   // Testnet HD Client
    this.client = new HDLocalWeb3Client(
      process.env.MNEMONIC,
      proces.env.PREFIX,
      `m/44'/118'/0'/0`, // HD Path
      config             // Configuration filse
    );

    // Connect
    await this.client.connect(
      [
        {
          name: "ancon",
          client: txClient,
        },
      ],
      // Callback to handle events
      this.transactionCompleted
    );

}

   // Manage events
  async transactionCompleted(tx: TxResponse, decoded: any) {
    if (tx.result.events.length === 0) {
      console.log(tx.result.log);
      this.alertMessage = `An error has occurred`;
      this.loading = false;
      return;
    }

    const hasCreateDid = tx.result.events.find((a) => a.type === "DidCreated");
    const hasExecuteCompute = tx.result.events.find((a) => a.type === "ExecuteCompute");
    if (hasCreateDid) {
      this.alertMessage = `DID created <a href="${decoded.url}">${decoded.did}</a> stored as CID ${decoded.cid}`;
      this.loading = false;
    }
  }

```

### @molekilla for
#### IFESA 2021

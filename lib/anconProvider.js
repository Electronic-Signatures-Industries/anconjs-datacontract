"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnconWeb3Provider = void 0;
const _1 = require(".");
const module_1 = require("./store/generated/Electronic-Signatures-Industries/ancon-protocol/ElectronicSignaturesIndustries.anconprotocol.anconprotocol/module");
class AnconWeb3Provider extends _1.CosmJSWeb3Provider {
    constructor(evmRpc, prefix, cosmosChainId, evmChainId, provider, defaultAccount) {
        super(evmRpc, prefix, cosmosChainId, evmChainId, provider, defaultAccount);
    }
    connectProvider() {
        return super.connect(module_1.queryClient, module_1.registry);
    }
}
exports.AnconWeb3Provider = AnconWeb3Provider;
//# sourceMappingURL=anconProvider.js.map
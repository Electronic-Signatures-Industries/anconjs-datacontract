/**
 * Takes an `Any` encoded account from the chain and extracts some common
 * `Account` information from it. This is supposed to support the most relevant
 * common Cosmos SDK account types. If you need support for exotic account types,
 * you'll need to write your own account decoder.
 */
export declare function accountFromAny(input: any): {
    address: any;
    pubkey: import("@cosmjs/amino").Pubkey;
    accountNumber: number;
    sequence: number;
};

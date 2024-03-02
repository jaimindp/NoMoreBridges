import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Lockable, LockableInterface } from "../../contracts/Lockable";
declare type LockableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Lockable__factory extends ContractFactory {
    constructor(...args: LockableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<Lockable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Lockable;
    connect(signer: Signer): Lockable__factory;
    static readonly bytecode = "0x60808060405234601e57600160ff195f5416175f556039908160238239f35b5f80fdfe5f80fdfea2646970667358221220e99d64915a39383bd7b9c400f4f015b28ed6eb7a4eb9141d3183fd9f467408e164736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }];
    static createInterface(): LockableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Lockable;
}
export {};

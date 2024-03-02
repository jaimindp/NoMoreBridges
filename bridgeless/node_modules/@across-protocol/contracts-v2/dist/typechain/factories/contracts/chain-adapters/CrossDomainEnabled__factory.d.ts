import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CrossDomainEnabled, CrossDomainEnabledInterface } from "../../../contracts/chain-adapters/CrossDomainEnabled";
declare type CrossDomainEnabledConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CrossDomainEnabled__factory extends ContractFactory {
    constructor(...args: CrossDomainEnabledConstructorParams);
    deploy(_messenger: string, overrides?: Overrides & {
        from?: string;
    }): Promise<CrossDomainEnabled>;
    getDeployTransaction(_messenger: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): CrossDomainEnabled;
    connect(signer: Signer): CrossDomainEnabled__factory;
    static readonly bytecode = "0x60a03461006857601f61014838819003918201601f19168301916001600160401b0383118484101761006c5780849260209460405283398101031261006857516001600160a01b03811681036100685760805260405160c7908161008182396080518160690152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe60808060405260043610156011575f80fd5b5f3560e01c63927ede2d146023575f80fd5b34608d575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112608d5760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5f80fdfea26469706673582212205e1d8f8949d029632dd083fde4c90f2f55b3dac815f1f77fced2f79c87b45fd464736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_messenger";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "MESSENGER";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): CrossDomainEnabledInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CrossDomainEnabled;
}
export {};

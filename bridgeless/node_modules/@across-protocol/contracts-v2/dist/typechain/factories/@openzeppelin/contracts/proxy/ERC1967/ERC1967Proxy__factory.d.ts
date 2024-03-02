import { Signer, ContractFactory, PayableOverrides, BytesLike } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1967Proxy, ERC1967ProxyInterface } from "../../../../../@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy";
declare type ERC1967ProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC1967Proxy__factory extends ContractFactory {
    constructor(...args: ERC1967ProxyConstructorParams);
    deploy(_logic: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ERC1967Proxy>;
    getDeployTransaction(_logic: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): ERC1967Proxy;
    connect(signer: Signer): ERC1967Proxy__factory;
    static readonly bytecode = "0x6040608081526104078038038061001581610211565b928339810190828183031261020d5780516001600160a01b0381169081810361020d576020838101516001600160401b039491939185821161020d57019085601f8301121561020d5781519161007261006d84610236565b610211565b928084528584019786828401011161020d5787866100909301610251565b823b156101b3577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b031916821790557fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b5f80a28051158015906101ac575b610109575b855160e190816103268239f35b8551936060850190811185821017610198578652602784527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c83850152660819985a5b195960ca1b8487015251610184945f918291845af4903d1561018f573d61017561006d82610236565b9081525f81943d92013e610272565b505f808080806100fc565b60609250610272565b634e487b7160e01b5f52604160045260245ffd5b505f6100f7565b865162461bcd60e51b815260048101859052602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b5f80fd5b6040519190601f01601f191682016001600160401b0381118382101761019857604052565b6001600160401b03811161019857601f01601f191660200190565b5f5b8381106102625750505f910152565b8181015183820152602001610253565b919290156102d45750815115610286575090565b3b1561028f5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156102e75750805190602001fd5b6044604051809262461bcd60e51b8252602060048301526103178151809281602486015260208686019101610251565b601f01601f19168101030190fdfe60806040523615605c575f8073ffffffffffffffffffffffffffffffffffffffff7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5416368280378136915af43d5f803e156058573d5ff35b3d5ffd5b5f8073ffffffffffffffffffffffffffffffffffffffff7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5416368280378136915af43d5f803e156058573d5ff3fea26469706673582212202a2f6f73fa2a79e1059174bc3ac7985dbe19a67752800d08d57ec156d07fc6f564736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_logic";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly stateMutability: "payable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "previousAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "AdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "beacon";
            readonly type: "address";
        }];
        readonly name: "BeaconUpgraded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): ERC1967ProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1967Proxy;
}
export {};

import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Succinct_Adapter, Succinct_AdapterInterface } from "../../../contracts/chain-adapters/Succinct_Adapter";
declare type Succinct_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Succinct_Adapter__factory extends ContractFactory {
    constructor(...args: Succinct_AdapterConstructorParams);
    deploy(_succinctSourceAmb: string, _destinationChainId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<Succinct_Adapter>;
    getDeployTransaction(_succinctSourceAmb: string, _destinationChainId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Succinct_Adapter;
    connect(signer: Signer): Succinct_Adapter__factory;
    static readonly bytecode = "0x60c03461009457601f61051338819003918201601f19168301916001600160401b03831184841017610098578084926040948552833981010312610094578051906001600160a01b038216820361009457602001519061ffff821682036100945760805260a05260405161046690816100ad8239608051818181610148015261034b015260a05181818160f801526102df0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe60806040908082526004361015610014575f80fd5b5f3560e01c90816352c8c75c1461036f578163a3b2bb171461030357508063b0750611146102a75763e6eb8ade1461004a575f80fd5b807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102645761007b6103cf565b67ffffffffffffffff602435818111610264573660238201121561026457806004013582811161026457602482019160248236920101116102645773ffffffffffffffffffffffffffffffffffffffff8551947fb1d995dd000000000000000000000000000000000000000000000000000000008652858261ffff7f000000000000000000000000000000000000000000000000000000000000000016928360048401521692836024830152606060448301526020978891815f81610144606482018b8d6103f2565b03927f0000000000000000000000000000000000000000000000000000000000000000165af195861561029d575f96610202575b505090866101fd9493927f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac47f8087fb1204c4894caf9b9afa31c9f4c4e6a29f573eb42a6337784fa837266b489951848152838a820152806101dc858201888a6103f2565b0390a1815197889788528701528501526080606085015260808401916103f2565b0390a1005b9094939291955086903d8811610295575b601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01686019081118682101761026857879186918a52810103126102645792519391929091866101fd610178565b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b3d9150610213565b88513d5f823e3d90fd5b5034610264575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610264576020905161ffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b34610264575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102645760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b60807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610264576103a16103cf565b5073ffffffffffffffffffffffffffffffffffffffff60243581811603610264576064359081160361026457005b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361026457565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f858286010152011601019056fea2646970667358221220314288bc5ab3719d1386b61b149c838a7d60f8795e46b4bcd42ad81b886fc9be64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ITelepathyBroadcaster";
            readonly name: "_succinctSourceAmb";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_destinationChainId";
            readonly type: "uint16";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "MessageRelayed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "messageRoot";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "destinationChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "SuccinctMessageRelayed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "l1Token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "l2Token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "TokensRelayed";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "destinationChainId";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "relayMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "relayTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "succinctSourceAmb";
        readonly outputs: readonly [{
            readonly internalType: "contract ITelepathyBroadcaster";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): Succinct_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Succinct_Adapter;
}
export {};

import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OracleInterfaces, OracleInterfacesInterface } from "../../../../../../../@uma/core/contracts/data-verification-mechanism/implementation/Constants.sol/OracleInterfaces";
declare type OracleInterfacesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OracleInterfaces__factory extends ContractFactory {
    constructor(...args: OracleInterfacesConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<OracleInterfaces>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): OracleInterfaces;
    connect(signer: Signer): OracleInterfaces__factory;
    static readonly bytecode = "0x6080806040523461001a576105d7908161001f823930815050f35b5f80fdfe60806040908082526004361015610014575f80fd5b5f3560e01c908163079b6c6314610550575080631a0fbfb3146104fd5780631a4dbd1c146104aa5780632a71e5b31461045757806342e90c33146104045780634596ac9b146103b1578063473e7ccd1461035e5780634f4a180b1461030b578063598dd097146102b85780635fa2ef10146102655780637608ea2f146102125780637db9743b146101bf5780638adca47f1461016c578063f02f8e83146101195763f24a534e146100c3575f80fd5b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4f7261636c6500000000000000000000000000000000000000000000000000008152f35b5f80fd5b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4f7074696d69737469634f7261636c65563300000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4f7261636c6553706f6b650000000000000000000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f52656769737472790000000000000000000000000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4f7261636c6548756200000000000000000000000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f42726964676500000000000000000000000000000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f436f6c6c61746572616c57686974656c697374000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4964656e74696669657257686974656c697374000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4f7074696d69737469634f7261636c65563200000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f536b696e6e794f7074696d69737469634f7261636c65000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f53746f72650000000000000000000000000000000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f46696e616e6369616c436f6e74726163747341646d696e0000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4f7074696d69737469634f7261636c65000000000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4368696c644d657373656e6765720000000000000000000000000000000000008152f35b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557807f47656e6572696348616e646c657200000000000000000000000000000000000060209252f3fea2646970667358221220879a4c8fafb6d4d2ec1e3559d309096b48462a03daf70fb3a081f3b85dce52f764736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "Bridge";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ChildMessenger";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CollateralWhitelist";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "FinancialContractsAdmin";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "GenericHandler";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "IdentifierWhitelist";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "OptimisticOracle";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "OptimisticOracleV2";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "OptimisticOracleV3";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "Oracle";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "OracleHub";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "OracleSpoke";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "Registry";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SkinnyOptimisticOracle";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "Store";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): OracleInterfacesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OracleInterfaces;
}
export {};

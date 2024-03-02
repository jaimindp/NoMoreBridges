import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OptimisticOracleConstraints, OptimisticOracleConstraintsInterface } from "../../../../../../../@uma/core/contracts/data-verification-mechanism/implementation/Constants.sol/OptimisticOracleConstraints";
declare type OptimisticOracleConstraintsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OptimisticOracleConstraints__factory extends ContractFactory {
    constructor(...args: OptimisticOracleConstraintsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<OptimisticOracleConstraints>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): OptimisticOracleConstraints;
    connect(signer: Signer): OptimisticOracleConstraints__factory;
    static readonly bytecode = "0x60808060405234601857608f908161001d823930815050f35b5f80fdfe60808060405260043610156011575f80fd5b5f3560e01c63c371dda7146023575f80fd5b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126055578061200060209252f35b5f80fdfea264697066735822122077f8468f1c9ca07a2dcf0d9344bbf2ae0c9b4ddfcb818b95b54dc660dde58e0864736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ancillaryBytesLimit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): OptimisticOracleConstraintsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OptimisticOracleConstraints;
}
export {};

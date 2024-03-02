import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Timer, TimerInterface } from "../../../../../../@uma/core/contracts/common/implementation/Timer";
declare type TimerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Timer__factory extends ContractFactory {
    constructor(...args: TimerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<Timer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Timer;
    connect(signer: Signer): Timer__factory;
    static readonly bytecode = "0x60808060405234601757425f5560d0908161001c8239f35b5f80fdfe60808060405260043610156011575f80fd5b5f3560e01c806322f8e566146066576329cb924d14602d575f80fd5b346062575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126062576020905f548152f35b5f80fd5b3460625760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126062576004355f5500fea264697066735822122046cf1f280de2c02a68d3cab98cf8e794d47c37e9e9db6b987606a60fde15edbc64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCurrentTime";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "time";
            readonly type: "uint256";
        }];
        readonly name: "setCurrentTime";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TimerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Timer;
}
export {};

import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ArbitrumL1InboxLike, ArbitrumL1InboxLikeInterface } from "../../../../contracts/chain-adapters/Arbitrum_Adapter.sol/ArbitrumL1InboxLike";
export declare class ArbitrumL1InboxLike__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "l2CallValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxSubmissionCost";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "excessFeeRefundAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "callValueRefundAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxFeePerGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "createRetryableTicket";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "l2CallValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxSubmissionCost";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "excessFeeRefundAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "callValueRefundAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxFeePerGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "unsafeCreateRetryableTicket";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): ArbitrumL1InboxLikeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ArbitrumL1InboxLike;
}

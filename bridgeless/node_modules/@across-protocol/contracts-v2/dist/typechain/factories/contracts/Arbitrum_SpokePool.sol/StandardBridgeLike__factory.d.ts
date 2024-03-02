import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { StandardBridgeLike, StandardBridgeLikeInterface } from "../../../contracts/Arbitrum_SpokePool.sol/StandardBridgeLike";
export declare class StandardBridgeLike__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_l1Token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "outboundTransfer";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): StandardBridgeLikeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StandardBridgeLike;
}

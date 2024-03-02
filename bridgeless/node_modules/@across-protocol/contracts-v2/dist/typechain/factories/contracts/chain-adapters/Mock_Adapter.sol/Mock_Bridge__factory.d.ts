import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Mock_Bridge, Mock_BridgeInterface } from "../../../../contracts/chain-adapters/Mock_Adapter.sol/Mock_Bridge";
declare type Mock_BridgeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Mock_Bridge__factory extends ContractFactory {
    constructor(...args: Mock_BridgeConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<Mock_Bridge>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Mock_Bridge;
    connect(signer: Signer): Mock_Bridge__factory;
    static readonly bytecode = "0x60808060405234610016576103a5908161001b8239f35b5f80fdfe60806040908082526004361015610014575f80fd5b5f3560e01c908163297d04641461025557508063d411325b146100a35763fc7e286d1461003f575f80fd5b3461009f5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009f5760209073ffffffffffffffffffffffffffffffffffffffff61008e61034c565b165f525f8252805f20549051908152f35b5f80fd5b503461009f57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009f576100da61034c565b9073ffffffffffffffffffffffffffffffffffffffff60243592168151927f23b872dd00000000000000000000000000000000000000000000000000000000845233600485015230602485015280604485015260209384816064815f875af1801561024b576101b6575b50815f525f8452825f20938454828101809111610189577f1da67e78d7a059d567d755dcffcfeefb8bc6967dbed9f631c088b729098a612e95558351928352820152a1005b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b843d8611610244575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f820116820182811067ffffffffffffffff821117610217578691839187528101031261009f57518015150361009f575f610144565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b503d6101bf565b84513d5f823e3d90fd5b90503461009f57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009f5761028d61034c565b916024359267ffffffffffffffff9182851161009f573660238601121561009f57846004013592831161009f57366024848701011161009f57601f838060247f5bd2d0850f0cb81f5796e2b5d3a09cb16e35c4d616a6ae0189d2b93ec13bce2b986060977fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09673ffffffffffffffffffffffffffffffffffffffff8b991689528060208a015288015201868601375f85828601015201168101030190a1005b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361009f5756fea2646970667358221220d31581b3be0ed7b9743ea37ed57db079d4290b135f13adb028d20295df0bfbe364736f6c63430008170033";
    static readonly abi: readonly [{
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
        readonly name: "BridgedMessage";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "BridgedTokens";
        readonly type: "event";
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
        readonly name: "bridgeMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "bridgeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "deposits";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): Mock_BridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Mock_Bridge;
}
export {};

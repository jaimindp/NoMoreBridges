import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TelepathyBroadcasterMock, TelepathyBroadcasterMockInterface } from "../../../../contracts/test/SuccinctMocks.sol/TelepathyBroadcasterMock";
declare type TelepathyBroadcasterMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TelepathyBroadcasterMock__factory extends ContractFactory {
    constructor(...args: TelepathyBroadcasterMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<TelepathyBroadcasterMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): TelepathyBroadcasterMock;
    connect(signer: Signer): TelepathyBroadcasterMock__factory;
    static readonly bytecode = "0x608080604052346100155760ed908161001a8239f35b5f80fdfe60808060405260043610156011575f80fd5b5f3560e01c63b1d995dd146023575f80fd5b3460b35760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011260b35760043561ffff81160360b35760243573ffffffffffffffffffffffffffffffffffffffff81160360b35760443567ffffffffffffffff80821160b3573660238301121560b357816004013590811160b3573691016024011160b357805f60209252f35b5f80fdfea26469706673582212200204a226565eff7b829cd6132352a93463db60e58026171ae50f42003630afb964736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "send";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): TelepathyBroadcasterMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TelepathyBroadcasterMock;
}
export {};

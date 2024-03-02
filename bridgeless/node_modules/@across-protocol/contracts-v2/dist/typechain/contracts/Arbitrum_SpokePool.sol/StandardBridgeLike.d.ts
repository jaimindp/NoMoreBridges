import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface StandardBridgeLikeInterface extends utils.Interface {
    functions: {
        "outboundTransfer(address,address,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "outboundTransfer"): FunctionFragment;
    encodeFunctionData(functionFragment: "outboundTransfer", values: [string, string, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "outboundTransfer", data: BytesLike): Result;
    events: {};
}
export interface StandardBridgeLike extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StandardBridgeLikeInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        outboundTransfer(_l1Token: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    outboundTransfer(_l1Token: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        outboundTransfer(_l1Token: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        outboundTransfer(_l1Token: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        outboundTransfer(_l1Token: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}

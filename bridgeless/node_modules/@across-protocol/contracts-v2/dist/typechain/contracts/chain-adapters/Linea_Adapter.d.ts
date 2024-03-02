import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface Linea_AdapterInterface extends utils.Interface {
    functions: {
        "L1_MESSAGE_SERVICE()": FunctionFragment;
        "L1_TOKEN_BRIDGE()": FunctionFragment;
        "L1_USDC_BRIDGE()": FunctionFragment;
        "L1_WETH()": FunctionFragment;
        "relayMessage(address,bytes)": FunctionFragment;
        "relayTokens(address,address,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "L1_MESSAGE_SERVICE" | "L1_TOKEN_BRIDGE" | "L1_USDC_BRIDGE" | "L1_WETH" | "relayMessage" | "relayTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "L1_MESSAGE_SERVICE", values?: undefined): string;
    encodeFunctionData(functionFragment: "L1_TOKEN_BRIDGE", values?: undefined): string;
    encodeFunctionData(functionFragment: "L1_USDC_BRIDGE", values?: undefined): string;
    encodeFunctionData(functionFragment: "L1_WETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayMessage", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "relayTokens", values: [string, string, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "L1_MESSAGE_SERVICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L1_TOKEN_BRIDGE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L1_USDC_BRIDGE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L1_WETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayTokens", data: BytesLike): Result;
    events: {
        "MessageRelayed(address,bytes)": EventFragment;
        "TokensRelayed(address,address,uint256,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MessageRelayed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensRelayed"): EventFragment;
}
export interface MessageRelayedEventObject {
    target: string;
    message: string;
}
export declare type MessageRelayedEvent = TypedEvent<[
    string,
    string
], MessageRelayedEventObject>;
export declare type MessageRelayedEventFilter = TypedEventFilter<MessageRelayedEvent>;
export interface TokensRelayedEventObject {
    l1Token: string;
    l2Token: string;
    amount: BigNumber;
    to: string;
}
export declare type TokensRelayedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], TokensRelayedEventObject>;
export declare type TokensRelayedEventFilter = TypedEventFilter<TokensRelayedEvent>;
export interface Linea_Adapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Linea_AdapterInterface;
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
        L1_MESSAGE_SERVICE(overrides?: CallOverrides): Promise<[string]>;
        L1_TOKEN_BRIDGE(overrides?: CallOverrides): Promise<[string]>;
        L1_USDC_BRIDGE(overrides?: CallOverrides): Promise<[string]>;
        L1_WETH(overrides?: CallOverrides): Promise<[string]>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    L1_MESSAGE_SERVICE(overrides?: CallOverrides): Promise<string>;
    L1_TOKEN_BRIDGE(overrides?: CallOverrides): Promise<string>;
    L1_USDC_BRIDGE(overrides?: CallOverrides): Promise<string>;
    L1_WETH(overrides?: CallOverrides): Promise<string>;
    relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        L1_MESSAGE_SERVICE(overrides?: CallOverrides): Promise<string>;
        L1_TOKEN_BRIDGE(overrides?: CallOverrides): Promise<string>;
        L1_USDC_BRIDGE(overrides?: CallOverrides): Promise<string>;
        L1_WETH(overrides?: CallOverrides): Promise<string>;
        relayMessage(target: string, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "MessageRelayed(address,bytes)"(target?: null, message?: null): MessageRelayedEventFilter;
        MessageRelayed(target?: null, message?: null): MessageRelayedEventFilter;
        "TokensRelayed(address,address,uint256,address)"(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
        TokensRelayed(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
    };
    estimateGas: {
        L1_MESSAGE_SERVICE(overrides?: CallOverrides): Promise<BigNumber>;
        L1_TOKEN_BRIDGE(overrides?: CallOverrides): Promise<BigNumber>;
        L1_USDC_BRIDGE(overrides?: CallOverrides): Promise<BigNumber>;
        L1_WETH(overrides?: CallOverrides): Promise<BigNumber>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        L1_MESSAGE_SERVICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L1_TOKEN_BRIDGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L1_USDC_BRIDGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L1_WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}

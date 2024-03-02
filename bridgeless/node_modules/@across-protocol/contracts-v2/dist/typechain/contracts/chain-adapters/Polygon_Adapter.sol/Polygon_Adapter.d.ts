import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface Polygon_AdapterInterface extends utils.Interface {
    functions: {
        "DEPOSIT_MANAGER()": FunctionFragment;
        "ERC20_PREDICATE()": FunctionFragment;
        "FX_STATE_SENDER()": FunctionFragment;
        "L1_MATIC()": FunctionFragment;
        "L1_WETH()": FunctionFragment;
        "ROOT_CHAIN_MANAGER()": FunctionFragment;
        "cctpTokenMessenger()": FunctionFragment;
        "recipientCircleDomainId()": FunctionFragment;
        "relayMessage(address,bytes)": FunctionFragment;
        "relayTokens(address,address,uint256,address)": FunctionFragment;
        "usdcToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEPOSIT_MANAGER" | "ERC20_PREDICATE" | "FX_STATE_SENDER" | "L1_MATIC" | "L1_WETH" | "ROOT_CHAIN_MANAGER" | "cctpTokenMessenger" | "recipientCircleDomainId" | "relayMessage" | "relayTokens" | "usdcToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEPOSIT_MANAGER", values?: undefined): string;
    encodeFunctionData(functionFragment: "ERC20_PREDICATE", values?: undefined): string;
    encodeFunctionData(functionFragment: "FX_STATE_SENDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "L1_MATIC", values?: undefined): string;
    encodeFunctionData(functionFragment: "L1_WETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "ROOT_CHAIN_MANAGER", values?: undefined): string;
    encodeFunctionData(functionFragment: "cctpTokenMessenger", values?: undefined): string;
    encodeFunctionData(functionFragment: "recipientCircleDomainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayMessage", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "relayTokens", values: [string, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "usdcToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEPOSIT_MANAGER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ERC20_PREDICATE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FX_STATE_SENDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L1_MATIC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L1_WETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ROOT_CHAIN_MANAGER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cctpTokenMessenger", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recipientCircleDomainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usdcToken", data: BytesLike): Result;
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
export interface Polygon_Adapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Polygon_AdapterInterface;
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
        DEPOSIT_MANAGER(overrides?: CallOverrides): Promise<[string]>;
        ERC20_PREDICATE(overrides?: CallOverrides): Promise<[string]>;
        FX_STATE_SENDER(overrides?: CallOverrides): Promise<[string]>;
        L1_MATIC(overrides?: CallOverrides): Promise<[string]>;
        L1_WETH(overrides?: CallOverrides): Promise<[string]>;
        ROOT_CHAIN_MANAGER(overrides?: CallOverrides): Promise<[string]>;
        cctpTokenMessenger(overrides?: CallOverrides): Promise<[string]>;
        recipientCircleDomainId(overrides?: CallOverrides): Promise<[number]>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        usdcToken(overrides?: CallOverrides): Promise<[string]>;
    };
    DEPOSIT_MANAGER(overrides?: CallOverrides): Promise<string>;
    ERC20_PREDICATE(overrides?: CallOverrides): Promise<string>;
    FX_STATE_SENDER(overrides?: CallOverrides): Promise<string>;
    L1_MATIC(overrides?: CallOverrides): Promise<string>;
    L1_WETH(overrides?: CallOverrides): Promise<string>;
    ROOT_CHAIN_MANAGER(overrides?: CallOverrides): Promise<string>;
    cctpTokenMessenger(overrides?: CallOverrides): Promise<string>;
    recipientCircleDomainId(overrides?: CallOverrides): Promise<number>;
    relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    usdcToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        DEPOSIT_MANAGER(overrides?: CallOverrides): Promise<string>;
        ERC20_PREDICATE(overrides?: CallOverrides): Promise<string>;
        FX_STATE_SENDER(overrides?: CallOverrides): Promise<string>;
        L1_MATIC(overrides?: CallOverrides): Promise<string>;
        L1_WETH(overrides?: CallOverrides): Promise<string>;
        ROOT_CHAIN_MANAGER(overrides?: CallOverrides): Promise<string>;
        cctpTokenMessenger(overrides?: CallOverrides): Promise<string>;
        recipientCircleDomainId(overrides?: CallOverrides): Promise<number>;
        relayMessage(target: string, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: CallOverrides): Promise<void>;
        usdcToken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "MessageRelayed(address,bytes)"(target?: null, message?: null): MessageRelayedEventFilter;
        MessageRelayed(target?: null, message?: null): MessageRelayedEventFilter;
        "TokensRelayed(address,address,uint256,address)"(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
        TokensRelayed(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
    };
    estimateGas: {
        DEPOSIT_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;
        ERC20_PREDICATE(overrides?: CallOverrides): Promise<BigNumber>;
        FX_STATE_SENDER(overrides?: CallOverrides): Promise<BigNumber>;
        L1_MATIC(overrides?: CallOverrides): Promise<BigNumber>;
        L1_WETH(overrides?: CallOverrides): Promise<BigNumber>;
        ROOT_CHAIN_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;
        cctpTokenMessenger(overrides?: CallOverrides): Promise<BigNumber>;
        recipientCircleDomainId(overrides?: CallOverrides): Promise<BigNumber>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        usdcToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEPOSIT_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ERC20_PREDICATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FX_STATE_SENDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L1_MATIC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L1_WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ROOT_CHAIN_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cctpTokenMessenger(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recipientCircleDomainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        usdcToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

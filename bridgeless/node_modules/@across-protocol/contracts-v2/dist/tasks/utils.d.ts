export declare const zeroAddress = "0x0000000000000000000000000000000000000000";
export declare const minimalSpokePoolInterface: {
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    outputs: never[];
    stateMutability: string;
    type: string;
}[];
export declare function askYesNoQuestion(query: string): Promise<boolean>;

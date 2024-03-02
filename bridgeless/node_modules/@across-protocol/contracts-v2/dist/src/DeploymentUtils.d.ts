export declare function getDeployedAddress(contractName: string, networkId: number): string;
export declare function getDeployedBlockNumber(contractName: string, networkId: number): number;
export declare function getContractInfoFromAddress(contractAddress: string): {
    chainId: Number;
    contractName: string;
};

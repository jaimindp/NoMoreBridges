export declare const L1_ADDRESS_MAP: {
    [key: number]: {
        [contractName: string]: string;
    };
};
export declare const L2_ADDRESS_MAP: {
    [key: number]: {
        [contractName: string]: string;
    };
};
export declare const POLYGON_CHAIN_IDS: {
    [l1ChainId: number]: number;
};
/**
 * The domain ID provided by Circle for each supported chain ID.
 * @note This is not the same as the chain ID.
 * @note Only reference by the mainnet token, they are all the same.
 * @link https://developers.circle.com/stablecoins/docs/supported-domains
 */
export declare const CIRCLE_DOMAIN_IDs: {
    [chainId: number]: number;
};

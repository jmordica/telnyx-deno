/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UsecaseMetadata = {
    /**
     * Campaign annual subscription fee
     */
    annualFee?: number;
    /**
     * Maximum number of sub-usecases declaration required.
     */
    maxSubUsecases?: number;
    /**
     * Minimum number of sub-usecases declaration required.
     */
    minSubUsecases?: number;
    /**
     * Map of usecase metadata for each MNO. Key is the network ID of the MNO (e.g. 10017), Value is the mno metadata for the usecase.
     */
    mnoMetadata?: Record<string, any>;
    /**
     * Campaign monthly subscription fee
     */
    monthlyFee?: number;
    /**
     * Campaign quarterly subscription fee
     */
    quarterlyFee?: number;
    /**
     * Campaign usecase
     */
    usecase?: string;
};


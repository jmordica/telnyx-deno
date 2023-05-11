/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SIMCardOrderPreview = {
    total_cost?: {
        /**
         * A string representing the cost amount.
         */
        amount?: string;
        /**
         * ISO 4217 currency string.
         */
        currency?: string;
    };
    shipping_cost?: {
        /**
         * A string representing the cost amount.
         */
        amount?: string;
        /**
         * ISO 4217 currency string.
         */
        currency?: string;
    };
    sim_cards_cost?: {
        /**
         * A string representing the cost amount.
         */
        amount?: string;
        /**
         * ISO 4217 currency string.
         */
        currency?: string;
    };
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * The amount of SIM cards requested in the SIM card order.
     */
    quantity?: number;
};


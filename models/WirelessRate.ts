/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WirelessRate = {
    /**
     * Rate from which cost is calculated
     */
    amount?: string;
    /**
     * Currency of the rate and cost
     */
    currency?: WirelessRate.currency;
};

export namespace WirelessRate {

    /**
     * Currency of the rate and cost
     */
    export enum currency {
        AUD = 'AUD',
        CAD = 'CAD',
        EUR = 'EUR',
        GBP = 'GBP',
        USD = 'USD',
    }


}


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WirelessCost = {
    /**
     * Final cost. Cost is calculated as rate * unit
     */
    amount?: string;
    /**
     * Currency of the rate and cost
     */
    currency?: WirelessCost.currency;
};

export namespace WirelessCost {

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


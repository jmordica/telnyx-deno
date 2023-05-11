/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Money = {
    amount?: string;
    currency?: Money.currency;
};

export namespace Money {

    export enum currency {
        AUD = 'AUD',
        CAD = 'CAD',
        EUR = 'EUR',
        GBP = 'GBP',
        USD = 'USD',
    }


}


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ManagedAccountBalance = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: ManagedAccountBalance.record_type;
    /**
     * The account's current balance.
     */
    balance?: string;
    /**
     * The account's credit limit.
     */
    credit_limit?: string;
    /**
     * Available amount to spend (balance + credit limit)
     */
    available_credit?: string;
    /**
     * The ISO 4217 currency identifier.
     */
    currency?: string;
};

export namespace ManagedAccountBalance {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        BALANCE = 'balance',
    }


}


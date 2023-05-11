/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePortingOrder = {
    /**
     * The list of +E.164 formatted phone numbers
     */
    phone_numbers: Array<string>;
    /**
     * A customer-specified reference number for customer bookkeeping purposes
     */
    customer_reference?: string;
};


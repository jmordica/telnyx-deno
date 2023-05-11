/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NumberOrder = {
    readonly id?: string;
    readonly record_type?: string;
    /**
     * The count of phone numbers in the number order.
     */
    readonly phone_numbers_count?: number;
    sub_number_order_ids?: Array<string>;
    /**
     * Identifies the connection associated with this phone number.
     */
    connection_id?: string;
    /**
     * Identifies the messaging profile associated with the phone number.
     */
    messaging_profile_id?: string;
    /**
     * Identifies the messaging profile associated with the phone number.
     */
    billing_group_id?: string;
    /**
     * The status of the order.
     */
    readonly status?: NumberOrder.status;
    /**
     * A customer reference string for customer look ups.
     */
    customer_reference?: string;
    /**
     * An ISO 8901 datetime string denoting when the number order was created.
     */
    readonly created_at?: string;
    /**
     * An ISO 8901 datetime string for when the number order was updated.
     */
    readonly updated_at?: string;
    /**
     * True if all requirements are met for every phone number, false otherwise.
     */
    readonly requirements_met?: boolean;
};

export namespace NumberOrder {

    /**
     * The status of the order.
     */
    export enum status {
        PENDING = 'pending',
        SUCCESS = 'success',
        FAILURE = 'failure',
    }


}


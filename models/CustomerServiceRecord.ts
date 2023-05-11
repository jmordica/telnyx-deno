/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CustomerServiceRecord = {
    /**
     * Uniquely identifies this customer service record
     */
    readonly id?: string;
    /**
     * The phone number of the customer service record.
     */
    phone_number?: string;
    /**
     * The status of the customer service record
     */
    status?: CustomerServiceRecord.status;
    /**
     * The error message in case status is `failed`. This field would be null in case of `pending` or `completed` status.
     */
    error_message?: string;
    /**
     * The result of the CSR request. This field would be null in case of `pending` or `failed` status.
     */
    result?: {
        /**
         * The name of the carrier that the customer service record is for.
         */
        carrier_name?: string;
        /**
         * The associated phone numbers of the customer service record.
         */
        associated_phone_numbers?: Array<string>;
        /**
         * The admin of the customer service record.
         */
        admin?: {
            /**
             * The name of the customer service record.
             */
            name?: string;
            /**
             * The billing phone number of the customer service record.
             */
            billing_phone_number?: string;
            /**
             * The account number of the customer service record.
             */
            account_number?: string;
            /**
             * The authorized person name of the customer service record.
             */
            authorized_person_name?: string;
        };
        /**
         * The address of the customer service record
         */
        address?: {
            /**
             * The state of the address
             */
            administrative_area?: string;
            /**
             * The city of the address
             */
            locality?: string;
            /**
             * The zip code of the address
             */
            postal_code?: string;
            /**
             * The street address
             */
            street_address?: string;
            /**
             * The full address
             */
            full_address?: string;
        };
    };
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    readonly updated_at?: string;
};

export namespace CustomerServiceRecord {

    /**
     * The status of the customer service record
     */
    export enum status {
        PENDING = 'pending',
        COMPLETED = 'completed',
        FAILED = 'failed',
    }


}


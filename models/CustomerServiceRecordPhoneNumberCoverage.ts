/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CustomerServiceRecordPhoneNumberCoverage = {
    /**
     * The phone number that is being verified.
     */
    phone_number?: string;
    /**
     * Indicates whether the phone number is covered or not.
     */
    has_csr_coverage?: boolean;
    /**
     * The reason why the phone number is not covered. Only returned if `has_csr_coverage` is false.
     */
    reason?: string;
    /**
     * Additional data required to perform CSR for the phone number. Only returned if `has_csr_coverage` is true.
     */
    additional_data_required?: Array<'name' | 'authorized_person_name' | 'account_number' | 'customer_code' | 'pin' | 'address_line_1' | 'city' | 'state' | 'zip_code' | 'billing_phone_number'>;
    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
};


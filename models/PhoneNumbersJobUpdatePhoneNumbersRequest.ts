/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PhoneNumbersJobUpdatePhoneNumbersRequest = {
    /**
     * Array of phone number ids and/or phone numbers in E164 format to update
     */
    phone_numbers: Array<string>;
    /**
     * A list of user-assigned tags to help organize phone numbers.
     */
    tags?: Array<string>;
    /**
     * If someone attempts to port your phone number away from Telnyx and your phone number has an external PIN set, we will attempt to verify that you provided the correct external PIN to the winning carrier. Note that not all carriers cooperate with this security mechanism.
     */
    external_pin?: string;
    /**
     * A customer reference string for customer look ups.
     */
    customer_reference?: string;
    /**
     * Identifies the connection associated with the phone number.
     */
    connection_id?: string;
    /**
     * Identifies the billing group associated with the phone number.
     */
    billing_group_id?: string;
};


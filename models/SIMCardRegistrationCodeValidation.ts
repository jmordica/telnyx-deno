/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SIMCardRegistrationCodeValidation = {
    record_type?: string;
    /**
     * The 10-digit SIM card registration code
     */
    registration_code?: string;
    /**
     * The attribute that denotes whether the code is valid or not
     */
    valid?: boolean;
    /**
     * The validation message
     */
    invalid_detail?: string | null;
};


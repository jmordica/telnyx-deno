/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The request body when creating a verification.
 */
export type CreateVerificationRequestWhatsapp = {
    /**
     * +E164 formatted phone number.
     */
    phone_number: string;
    /**
     * The identifier of the associated Verify profile.
     */
    verify_profile_id: string;
    /**
     * The number of seconds the verification code is valid for.
     */
    timeout_secs?: number;
};


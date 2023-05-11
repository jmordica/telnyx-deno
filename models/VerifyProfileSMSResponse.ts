/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyProfileSMSResponse = {
    /**
     * Enables SMS text messaging for the Verify profile.
     */
    messaging_enabled?: boolean;
    /**
     * Enables RCS messaging for the Verify profile.
     */
    rcs_enabled?: boolean;
    /**
     * Optionally sets a messaging text template when sending the verification code. Uses `{code}` to template in the actual verification code.
     */
    messaging_template?: string;
    /**
     * For every request that is initiated via this Verify profile, this sets the number of seconds before a verification request code expires. Once the verification request expires, the user cannot use the code to verify their identity.
     */
    default_verification_timeout_secs?: number;
    /**
     * Enables VSMS for the Verify profile.
     */
    vsms_enabled?: boolean;
};


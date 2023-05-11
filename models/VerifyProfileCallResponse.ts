/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyProfileCallResponse = {
    /**
     * Optionally sets a speech text template when sending the verification code. Uses `{code}` to template in the actual verification code.
     */
    messaging_template?: string;
    /**
     * For every request that is initiated via this Verify profile, this sets the number of seconds before a verification request code expires. Once the verification request expires, the user cannot use the code to verify their identity.
     */
    default_verification_timeout_secs?: number;
    /**
     * Must be less than default_verification_timeout_secs
     */
    default_call_timeout_secs?: number;
};


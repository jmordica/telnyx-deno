/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateVerifyProfileWhatsappRequest = {
    /**
     * For every request that is initiated via this Verify profile, this sets the number of seconds before a verification request code expires. Once the verification request expires, the user cannot use the code to verify their identity.
     */
    default_verification_timeout_secs?: number;
    /**
     * The name that identifies the application requesting 2fa in the verification message.
     */
    app_name?: string;
};


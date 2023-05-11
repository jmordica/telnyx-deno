/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyVerificationCodeRequest = {
    /**
     * This is the code the user submits for verification.
     */
    code: string;
    /**
     * The identifier of the associated Verify profile.
     */
    verify_profile_id: string;
};


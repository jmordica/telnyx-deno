/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyVerificationCodeResponse = {
    data: {
        /**
         * +E164 formatted phone number.
         */
        phone_number: string;
        /**
         * Identifies if the verification code has been accepted or rejected.
         */
        response_code: VerifyVerificationCodeResponse.response_code;
    };
};

export namespace VerifyVerificationCodeResponse {

    /**
     * Identifies if the verification code has been accepted or rejected.
     */
    export enum response_code {
        ACCEPTED = 'accepted',
        REJECTED = 'rejected',
    }


}


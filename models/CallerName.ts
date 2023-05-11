/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CallerName = {
    /**
     * The name of the requested phone number's owner as per the CNAM database
     */
    caller_name?: string;
    /**
     * A caller-name lookup specific error code, expressed as a stringified 5-digit integer
     */
    error_code?: string;
};


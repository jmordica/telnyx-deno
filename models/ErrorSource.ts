/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ErrorSource = {
    /**
     * JSON pointer (RFC6901) to the offending entity.
     */
    pointer?: string;
    /**
     * Indicates which query parameter caused the error.
     */
    parameter?: string;
};


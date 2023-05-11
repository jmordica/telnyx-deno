/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PortabilityCheckDetails = {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * Indicates whether this phone number is FastPort eligible
     */
    readonly fast_portable?: boolean;
    /**
     * If this phone number is not portable, explains why. Empty string if the number is portable.
     */
    readonly not_portable_reason?: string;
    /**
     * The +E.164 formatted phone number this result is about
     */
    readonly phone_number?: string;
    /**
     * Indicates whether this phone number is portable
     */
    readonly portable?: boolean;
};


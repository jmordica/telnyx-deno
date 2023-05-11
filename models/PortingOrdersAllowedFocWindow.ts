/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PortingOrdersAllowedFocWindow = {
    /**
     * ISO 8601 formatted date indicating the start of the range of foc window.
     */
    readonly started_at?: string;
    /**
     * ISO 8601 formatted date indicating the end of the range of foc window
     */
    readonly ended_at?: string;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
};


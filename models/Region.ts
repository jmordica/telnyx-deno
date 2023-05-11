/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Region = {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * A code for the region.
     */
    code?: string;
    /**
     * A name for the region.
     */
    name?: string;
    /**
     * List of interface types supported in this region.
     */
    supported_interfaces?: Array<string>;
    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    readonly updated_at?: string;
};


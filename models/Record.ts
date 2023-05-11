/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Record = {
    /**
     * Identifies the resource.
     */
    readonly id?: string;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    readonly updated_at?: string;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Ip = {
    /**
     * Identifies the type of resource.
     */
    id?: string;
    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
    /**
     * ID of the IP Connection to which this IP should be attached.
     */
    connection_id?: string;
    /**
     * IP adddress represented by this resource.
     */
    ip_address?: string;
    /**
     * Port to use when connecting to this IP.
     */
    port?: number;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
};


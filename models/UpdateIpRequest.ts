/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateIpRequest = {
    /**
     * ID of the IP Connection to which this IP should be attached.
     */
    connection_id?: string;
    /**
     * IP adddress represented by this resource.
     */
    ip_address: string;
    /**
     * Port to use when connecting to this IP.
     */
    port?: number;
};


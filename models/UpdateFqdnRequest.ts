/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateFqdnRequest = {
    /**
     * ID of the FQDN connection to which this IP should be attached.
     */
    connection_id?: string;
    /**
     * FQDN represented by this resource.
     */
    fqdn?: string;
    /**
     * Port to use when connecting to this FQDN.
     */
    port?: number | null;
    /**
     * The DNS record type for the FQDN. For cases where a port is not set, the DNS record type must be 'srv'. For cases where a port is set, the DNS record type must be 'a'. If the DNS record type is 'a' and a port is not specified, 5060 will be used.
     */
    dns_record_type?: string;
};


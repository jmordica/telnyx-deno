/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CallControlApplicationInbound = {
    /**
     * When set, this will limit the total number of inbound calls to phone numbers associated with this connection.
     */
    channel_limit?: number;
    /**
     * Specifies if SHAKEN/STIR settings are enabled for the Call Control application or not.
     */
    shaken_stir_enabled?: boolean;
    /**
     * Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.
     */
    sip_subdomain?: string;
    /**
     * This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
     */
    sip_subdomain_receive_settings?: CallControlApplicationInbound.sip_subdomain_receive_settings;
};

export namespace CallControlApplicationInbound {

    /**
     * This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
     */
    export enum sip_subdomain_receive_settings {
        ONLY_MY_CONNECTIONS = 'only_my_connections',
        FROM_ANYONE = 'from_anyone',
    }


}


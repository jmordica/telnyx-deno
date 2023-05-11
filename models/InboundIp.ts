/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InboundIp = {
    /**
     * This setting allows you to set the format with which the caller's number (ANI) is sent for inbound phone calls.
     */
    ani_number_format?: InboundIp.ani_number_format;
    dnis_number_format?: InboundIp.dnis_number_format;
    /**
     * Defines the list of codecs that Telnyx will send for inbound calls to a specific number on your portal account, in priority order. This only works when the Connection the number is assigned to uses Media Handling mode: default. OPUS and H.264 codecs are available only when using TCP or TLS transport for SIP.
     */
    codecs?: Array<string>;
    /**
     * The default primary IP to use for the number. Only settable if the connection is
     * of IP authentication type. Value must be the ID of an authorized IP set on the connection.
     */
    default_primary_ip_id?: string;
    /**
     * The default secondary IP to use for the number. Only settable if the connection is
     * of IP authentication type. Value must be the ID of an authorized IP set on the connection.
     */
    default_secondary_ip_id?: string;
    /**
     * The default tertiary IP to use for the number. Only settable if the connection is
     * of IP authentication type. Value must be the ID of an authorized IP set on the connection.
     */
    default_tertiary_ip_id?: string;
    /**
     * Default routing method to be used when a number is associated with the connection. Must be one of the routing method types or left blank, other values are not allowed.
     */
    default_routing_method?: InboundIp.default_routing_method;
    /**
     * When set, this will limit the total number of inbound calls to phone numbers associated with this connection.
     */
    channel_limit?: number;
    /**
     * Generate ringback tone through 183 session progress message with early media.
     */
    generate_ringback_tone?: boolean;
    /**
     * When set, inbound phone calls will receive ISUP parameters via SIP headers. (Only when available and only when using TCP or TLS transport.)
     */
    isup_headers_enabled?: boolean;
    /**
     * Enable PRACK messages as defined in RFC3262.
     */
    prack_enabled?: boolean;
    /**
     * By default, Telnyx does not send caller-id information when the caller has chosen to hide this information. When this option is enabled, Telnyx will send the SIP header Privacy:id plus the caller-id information so that the receiver side can choose when to hide it.
     */
    privacy_zone_enabled?: boolean;
    /**
     * Defaults to true.
     */
    sip_compact_headers_enabled?: boolean;
    /**
     * Selects which `sip_region` to receive inbound calls from. If null, the default region (US) will be used.
     */
    sip_region?: InboundIp.sip_region;
    /**
     * Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.
     */
    sip_subdomain?: string;
    /**
     * This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
     */
    sip_subdomain_receive_settings?: InboundIp.sip_subdomain_receive_settings;
    /**
     * Time(sec) before aborting if connection is not made.
     */
    timeout_1xx_secs?: number;
    /**
     * Time(sec) before aborting if call is unanswered (min: 1, max: 600).
     */
    timeout_2xx_secs?: number;
};

export namespace InboundIp {

    /**
     * This setting allows you to set the format with which the caller's number (ANI) is sent for inbound phone calls.
     */
    export enum ani_number_format {
        _E_164 = '+E.164',
        E_164 = 'E.164',
        _E_164_NATIONAL = '+E.164-national',
        E_164_NATIONAL = 'E.164-national',
    }

    export enum dnis_number_format {
        _E164 = '+e164',
        E164 = 'e164',
        NATIONAL = 'national',
        SIP_USERNAME = 'sip_username',
    }

    /**
     * Default routing method to be used when a number is associated with the connection. Must be one of the routing method types or left blank, other values are not allowed.
     */
    export enum default_routing_method {
        SEQUENTIAL = 'sequential',
        ROUND_ROBIN = 'round-robin',
    }

    /**
     * Selects which `sip_region` to receive inbound calls from. If null, the default region (US) will be used.
     */
    export enum sip_region {
        US = 'US',
        EUROPE = 'Europe',
        AUSTRALIA = 'Australia',
    }

    /**
     * This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
     */
    export enum sip_subdomain_receive_settings {
        ONLY_MY_CONNECTIONS = 'only_my_connections',
        FROM_ANYONE = 'from_anyone',
    }


}


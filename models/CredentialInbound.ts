/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CredentialInbound = {
    /**
     * This setting allows you to set the format with which the caller's number (ANI) is sent for inbound phone calls.
     */
    ani_number_format?: CredentialInbound.ani_number_format;
    dnis_number_format?: CredentialInbound.dnis_number_format;
    /**
     * Defines the list of codecs that Telnyx will send for inbound calls to a specific number on your portal account, in priority order. This only works when the Connection the number is assigned to uses Media Handling mode: default. OPUS and H.264 codecs are available only when using TCP or TLS transport for SIP.
     */
    codecs?: Array<string>;
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
     * Time(sec) before aborting if connection is not made.
     */
    timeout_1xx_secs?: number;
    /**
     * Time(sec) before aborting if call is unanswered (min: 1, max: 600).
     */
    timeout_2xx_secs?: string;
};

export namespace CredentialInbound {

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


}


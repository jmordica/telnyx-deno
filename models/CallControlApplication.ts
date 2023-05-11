/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CallControlApplicationInbound } from './CallControlApplicationInbound.ts';
import type { CallControlApplicationOutbound } from './CallControlApplicationOutbound.ts';

export type CallControlApplication = {
    /**
     * Specifies whether the connection can be used.
     */
    active?: boolean;
    /**
     * `Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
     *
     */
    anchorsite_override?: CallControlApplication.anchorsite_override;
    /**
     * A user-assigned name to help manage the application.
     */
    application_name?: string;
    /**
     * ISO 8601 formatted date of when the resource was created
     */
    created_at?: string;
    /**
     * Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
     */
    dtmf_type?: CallControlApplication.dtmf_type;
    /**
     * Specifies whether calls to phone numbers associated with this connection should hangup after timing out.
     */
    first_command_timeout?: boolean;
    /**
     * Specifies how many seconds to wait before timing out a dial command.
     */
    first_command_timeout_secs?: number;
    id?: string;
    inbound?: CallControlApplicationInbound;
    outbound?: CallControlApplicationOutbound;
    record_type?: CallControlApplication.record_type;
    /**
     * ISO 8601 formatted date of when the resource was last updated
     */
    updated_at?: string;
    /**
     * Determines which webhook format will be used, Telnyx API v1 or v2.
     */
    webhook_api_version?: CallControlApplication.webhook_api_version;
    /**
     * The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as `https`.
     */
    webhook_event_failover_url?: string | null;
    /**
     * The URL where webhooks related to this connection will be sent. Must include a scheme, such as `https`.
     */
    webhook_event_url?: string;
    webhook_timeout_secs?: number | null;
};

export namespace CallControlApplication {

    /**
     * `Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
     *
     */
    export enum anchorsite_override {
        _LATENCY_ = '"Latency"',
        _CHICAGO_IL_ = '"Chicago, IL"',
        _ASHBURN_VA_ = '"Ashburn, VA"',
        _SAN_JOSE_CA_ = '"San Jose, CA"',
    }

    /**
     * Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
     */
    export enum dtmf_type {
        RFC_2833 = 'RFC 2833',
        INBAND = 'Inband',
        SIP_INFO = 'SIP INFO',
    }

    export enum record_type {
        CALL_CONTROL_APPLICATION = 'call_control_application',
    }

    /**
     * Determines which webhook format will be used, Telnyx API v1 or v2.
     */
    export enum webhook_api_version {
        _1 = '1',
        _2 = '2',
    }


}


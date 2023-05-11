/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AnchorsiteOverride } from './AnchorsiteOverride.ts';
import type { ConnectionRtcpSettings } from './ConnectionRtcpSettings.ts';
import type { DtmfType } from './DtmfType.ts';
import type { EncryptedMedia } from './EncryptedMedia.ts';
import type { InboundIp } from './InboundIp.ts';
import type { OutboundIp } from './OutboundIp.ts';

export type IpConnection = {
    /**
     * Identifies the type of resource.
     */
    id?: string;
    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
    /**
     * Defaults to true
     */
    active?: boolean;
    anchorsite_override?: AnchorsiteOverride;
    connection_name?: string;
    /**
     * One of UDP, TLS, or TCP. Applies only to connections with IP authentication or FQDN authentication.
     */
    transport_protocol?: IpConnection.transport_protocol;
    /**
     * When enabled, Telnyx will generate comfort noise when you place the call on hold. If disabled, you will need to generate comfort noise or on hold music to avoid RTP timeout.
     */
    default_on_hold_comfort_noise_enabled?: boolean;
    dtmf_type?: DtmfType;
    /**
     * Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG scenarios.
     */
    encode_contact_header_enabled?: boolean;
    encrypted_media?: EncryptedMedia;
    /**
     * Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly if both are on the Telnyx network. If this is disabled, Telnyx will be able to use T38 on just one leg of the call depending on each leg's settings.
     */
    onnet_t38_passthrough_enabled?: boolean;
    /**
     * The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.
     */
    webhook_event_url?: string;
    /**
     * The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.
     */
    webhook_event_failover_url?: string | null;
    /**
     * Determines which webhook format will be used, Telnyx API v1 or v2.
     */
    webhook_api_version?: IpConnection.webhook_api_version;
    /**
     * Specifies how many seconds to wait before timing out a webhook.
     */
    webhook_timeout_secs?: number | null;
    rtcp_settings?: ConnectionRtcpSettings;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
    inbound?: InboundIp;
    outbound?: OutboundIp;
};

export namespace IpConnection {

    /**
     * One of UDP, TLS, or TCP. Applies only to connections with IP authentication or FQDN authentication.
     */
    export enum transport_protocol {
        UDP = 'UDP',
        TCP = 'TCP',
        TLS = 'TLS',
    }

    /**
     * Determines which webhook format will be used, Telnyx API v1 or v2.
     */
    export enum webhook_api_version {
        _1 = '1',
        _2 = '2',
    }


}


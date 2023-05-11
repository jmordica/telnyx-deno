/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AnchorsiteOverride } from './AnchorsiteOverride.ts';
import type { ConnectionRtcpSettings } from './ConnectionRtcpSettings.ts';
import type { CredentialInbound } from './CredentialInbound.ts';
import type { CredentialOutbound } from './CredentialOutbound.ts';
import type { DtmfType } from './DtmfType.ts';
import type { EncryptedMedia } from './EncryptedMedia.ts';

export type CredentialConnection = {
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
    /**
     * The user name to be used as part of the credentials. Must be 4-32 characters long and alphanumeric values only (no spaces or special characters).
     */
    user_name?: string;
    /**
     * The password to be used as part of the credentials. Must be 8 to 128 characters long.
     */
    password?: string;
    /**
     * ISO-8601 formatted date indicating when the resource was created.
     */
    created_at?: string;
    /**
     * ISO-8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
    anchorsite_override?: AnchorsiteOverride;
    connection_name?: string;
    /**
     * This feature enables inbound SIP URI calls to your Credential Auth Connection. If enabled for all (unrestricted) then anyone who calls the SIP URI <your-username>@telnyx.com will be connected to your Connection. You can also choose to allow only calls that are originated on any Connections under your account (internal).
     */
    sip_uri_calling_preference?: CredentialConnection.sip_uri_calling_preference;
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
    webhook_api_version?: CredentialConnection.webhook_api_version;
    /**
     * Specifies how many seconds to wait before timing out a webhook.
     */
    webhook_timeout_secs?: number | null;
    rtcp_settings?: ConnectionRtcpSettings;
    inbound?: CredentialInbound;
    outbound?: CredentialOutbound;
};

export namespace CredentialConnection {

    /**
     * This feature enables inbound SIP URI calls to your Credential Auth Connection. If enabled for all (unrestricted) then anyone who calls the SIP URI <your-username>@telnyx.com will be connected to your Connection. You can also choose to allow only calls that are originated on any Connections under your account (internal).
     */
    export enum sip_uri_calling_preference {
        DISABLED = 'disabled',
        UNRESTRICTED = 'unrestricted',
        INTERNAL = 'internal',
    }

    /**
     * Determines which webhook format will be used, Telnyx API v1 or v2.
     */
    export enum webhook_api_version {
        _1 = '1',
        _2 = '2',
    }


}


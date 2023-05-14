/**
 * Telnyx API
 * SIP trunking, SMS, MMS, Call Control and Telephony Data Services.
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@telnyx.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AnchorsiteOverride } from '../models/AnchorsiteOverride.ts';
import { ConnectionRtcpSettings } from '../models/ConnectionRtcpSettings.ts';
import { CredentialInbound } from '../models/CredentialInbound.ts';
import { CredentialOutbound } from '../models/CredentialOutbound.ts';
import { DtmfType } from '../models/DtmfType.ts';
import { EncryptedMedia } from '../models/EncryptedMedia.ts';
import { HttpFile } from '../http/http.ts';

export class UpdateCredentialConnectionRequest {
    /**
    * Defaults to true
    */
    'active'?: boolean;
    /**
    * The user name to be used as part of the credentials. Must be 4-32 characters long and alphanumeric values only (no spaces or special characters).
    */
    'userName'?: string;
    /**
    * The password to be used as part of the credentials. Must be 8 to 128 characters long.
    */
    'password'?: string;
    'anchorsiteOverride'?: AnchorsiteOverride;
    'connectionName'?: string;
    /**
    * This feature enables inbound SIP URI calls to your Credential Auth Connection. If enabled for all (unrestricted) then anyone who calls the SIP URI <your-username>@telnyx.com will be connected to your Connection. You can also choose to allow only calls that are originated on any Connections under your account (internal).
    */
    'sipUriCallingPreference'?: UpdateCredentialConnectionRequestSipUriCallingPreferenceEnum;
    /**
    * When enabled, Telnyx will generate comfort noise when you place the call on hold. If disabled, you will need to generate comfort noise or on hold music to avoid RTP timeout.
    */
    'defaultOnHoldComfortNoiseEnabled'?: boolean;
    'dtmfType'?: DtmfType;
    /**
    * Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG scenarios.
    */
    'encodeContactHeaderEnabled'?: boolean;
    'encryptedMedia'?: EncryptedMedia | null;
    /**
    * Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly if both are on the Telnyx network. If this is disabled, Telnyx will be able to use T38 on just one leg of the call depending on each leg\'s settings.
    */
    'onnetT38PassthroughEnabled'?: boolean;
    /**
    * The URL where webhooks related to this connection will be sent. Must include a scheme, such as \'https\'.
    */
    'webhookEventUrl'?: string;
    /**
    * The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as \'https\'.
    */
    'webhookEventFailoverUrl'?: string | null;
    /**
    * Determines which webhook format will be used, Telnyx API v1 or v2.
    */
    'webhookApiVersion'?: UpdateCredentialConnectionRequestWebhookApiVersionEnum;
    /**
    * Specifies how many seconds to wait before timing out a webhook.
    */
    'webhookTimeoutSecs'?: number | null;
    'rtcpSettings'?: ConnectionRtcpSettings;
    'inbound'?: CredentialInbound;
    'outbound'?: CredentialOutbound;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "userName",
            "baseName": "user_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "anchorsiteOverride",
            "baseName": "anchorsite_override",
            "type": "AnchorsiteOverride",
            "format": ""
        },
        {
            "name": "connectionName",
            "baseName": "connection_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "sipUriCallingPreference",
            "baseName": "sip_uri_calling_preference",
            "type": "UpdateCredentialConnectionRequestSipUriCallingPreferenceEnum",
            "format": ""
        },
        {
            "name": "defaultOnHoldComfortNoiseEnabled",
            "baseName": "default_on_hold_comfort_noise_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "dtmfType",
            "baseName": "dtmf_type",
            "type": "DtmfType",
            "format": ""
        },
        {
            "name": "encodeContactHeaderEnabled",
            "baseName": "encode_contact_header_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "encryptedMedia",
            "baseName": "encrypted_media",
            "type": "EncryptedMedia",
            "format": ""
        },
        {
            "name": "onnetT38PassthroughEnabled",
            "baseName": "onnet_t38_passthrough_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "webhookEventUrl",
            "baseName": "webhook_event_url",
            "type": "string",
            "format": "url"
        },
        {
            "name": "webhookEventFailoverUrl",
            "baseName": "webhook_event_failover_url",
            "type": "string",
            "format": "url"
        },
        {
            "name": "webhookApiVersion",
            "baseName": "webhook_api_version",
            "type": "UpdateCredentialConnectionRequestWebhookApiVersionEnum",
            "format": ""
        },
        {
            "name": "webhookTimeoutSecs",
            "baseName": "webhook_timeout_secs",
            "type": "number",
            "format": ""
        },
        {
            "name": "rtcpSettings",
            "baseName": "rtcp_settings",
            "type": "ConnectionRtcpSettings",
            "format": ""
        },
        {
            "name": "inbound",
            "baseName": "inbound",
            "type": "CredentialInbound",
            "format": ""
        },
        {
            "name": "outbound",
            "baseName": "outbound",
            "type": "CredentialOutbound",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateCredentialConnectionRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UpdateCredentialConnectionRequestSipUriCallingPreferenceEnum = "disabled" | "unrestricted" | "internal" ;
export type UpdateCredentialConnectionRequestWebhookApiVersionEnum = "1" | "2" ;


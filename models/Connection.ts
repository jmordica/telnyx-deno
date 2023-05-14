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
import { HttpFile } from '../http/http.ts';

export class Connection {
    /**
    * Identifies the specific resource.
    */
    'id'?: string;
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: string;
    /**
    * Defaults to true
    */
    'active'?: boolean;
    'anchorsiteOverride'?: AnchorsiteOverride;
    'connectionName'?: string;
    /**
    * ISO 8601 formatted date indicating when the resource was created.
    */
    'createdAt'?: string;
    /**
    * ISO 8601 formatted date indicating when the resource was updated.
    */
    'updatedAt'?: string;
    /**
    * The URL where webhooks related to this connection will be sent.
    */
    'webhookEventUrl'?: string | null;
    /**
    * The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails.
    */
    'webhookEventFailoverUrl'?: string | null;
    /**
    * Determines which webhook format will be used, Telnyx API v1 or v2.
    */
    'webhookApiVersion'?: ConnectionWebhookApiVersionEnum;
    /**
    * Identifies the associated outbound voice profile.
    */
    'outboundVoiceProfileId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
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
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
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
            "type": "ConnectionWebhookApiVersionEnum",
            "format": ""
        },
        {
            "name": "outboundVoiceProfileId",
            "baseName": "outbound_voice_profile_id",
            "type": "string",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return Connection.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ConnectionWebhookApiVersionEnum = "1" | "2" ;

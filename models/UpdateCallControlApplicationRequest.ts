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

import { CallControlApplicationInbound } from '../models/CallControlApplicationInbound.ts';
import { CallControlApplicationOutbound } from '../models/CallControlApplicationOutbound.ts';
import { HttpFile } from '../http/http.ts';

export class UpdateCallControlApplicationRequest {
    /**
    * A user-assigned name to help manage the application.
    */
    'applicationName': string;
    /**
    * The URL where webhooks related to this connection will be sent. Must include a scheme, such as \'https\'.
    */
    'webhookEventUrl': string;
    /**
    * Specifies whether the connection can be used.
    */
    'active'?: boolean;
    /**
    * <code>Latency</code> directs Telnyx to route media through the site with the lowest round-trip time to the user\'s connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media. 
    */
    'anchorsiteOverride'?: UpdateCallControlApplicationRequestAnchorsiteOverrideEnum;
    /**
    * Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
    */
    'dtmfType'?: UpdateCallControlApplicationRequestDtmfTypeEnum;
    /**
    * Specifies whether calls to phone numbers associated with this connection should hangup after timing out.
    */
    'firstCommandTimeout'?: boolean;
    /**
    * Specifies how many seconds to wait before timing out a dial command.
    */
    'firstCommandTimeoutSecs'?: number;
    'inbound'?: CallControlApplicationInbound;
    'outbound'?: CallControlApplicationOutbound;
    /**
    * Determines which webhook format will be used, Telnyx API v1 or v2.
    */
    'webhookApiVersion'?: UpdateCallControlApplicationRequestWebhookApiVersionEnum;
    /**
    * The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as \'https\'.
    */
    'webhookEventFailoverUrl'?: string | null;
    /**
    * Specifies how many seconds to wait before timing out a webhook.
    */
    'webhookTimeoutSecs'?: number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "applicationName",
            "baseName": "application_name",
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
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "anchorsiteOverride",
            "baseName": "anchorsite_override",
            "type": "UpdateCallControlApplicationRequestAnchorsiteOverrideEnum",
            "format": ""
        },
        {
            "name": "dtmfType",
            "baseName": "dtmf_type",
            "type": "UpdateCallControlApplicationRequestDtmfTypeEnum",
            "format": ""
        },
        {
            "name": "firstCommandTimeout",
            "baseName": "first_command_timeout",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "firstCommandTimeoutSecs",
            "baseName": "first_command_timeout_secs",
            "type": "number",
            "format": ""
        },
        {
            "name": "inbound",
            "baseName": "inbound",
            "type": "CallControlApplicationInbound",
            "format": ""
        },
        {
            "name": "outbound",
            "baseName": "outbound",
            "type": "CallControlApplicationOutbound",
            "format": ""
        },
        {
            "name": "webhookApiVersion",
            "baseName": "webhook_api_version",
            "type": "UpdateCallControlApplicationRequestWebhookApiVersionEnum",
            "format": ""
        },
        {
            "name": "webhookEventFailoverUrl",
            "baseName": "webhook_event_failover_url",
            "type": "string",
            "format": "url"
        },
        {
            "name": "webhookTimeoutSecs",
            "baseName": "webhook_timeout_secs",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateCallControlApplicationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UpdateCallControlApplicationRequestAnchorsiteOverrideEnum = "&quot;Latency&quot;" | "&quot;Chicago, IL&quot;" | "&quot;Ashburn, VA&quot;" | "&quot;San Jose, CA&quot;" ;
export type UpdateCallControlApplicationRequestDtmfTypeEnum = "RFC 2833" | "Inband" | "SIP INFO" ;
export type UpdateCallControlApplicationRequestWebhookApiVersionEnum = "1" | "2" ;


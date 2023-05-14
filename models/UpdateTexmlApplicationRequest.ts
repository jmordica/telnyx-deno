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
import { CreateTexmlApplicationRequestInbound } from '../models/CreateTexmlApplicationRequestInbound.ts';
import { CreateTexmlApplicationRequestOutbound } from '../models/CreateTexmlApplicationRequestOutbound.ts';
import { DtmfType } from '../models/DtmfType.ts';
import { HttpFile } from '../http/http.ts';

export class UpdateTexmlApplicationRequest {
    /**
    * A user-assigned name to help manage the application.
    */
    'friendlyName': string;
    /**
    * Specifies whether the connection can be used.
    */
    'active'?: boolean;
    'anchorsiteOverride'?: AnchorsiteOverride;
    'dtmfType'?: DtmfType;
    /**
    * Specifies whether calls to phone numbers associated with this connection should hangup after timing out.
    */
    'firstCommandTimeout'?: boolean;
    /**
    * Specifies how many seconds to wait before timing out a dial command.
    */
    'firstCommandTimeoutSecs'?: number;
    /**
    * URL to which Telnyx will deliver your XML Translator webhooks.
    */
    'voiceUrl': string;
    /**
    * URL to which Telnyx will deliver your XML Translator webhooks if we get an error response from your voice_url.
    */
    'voiceFallbackUrl'?: string;
    /**
    * HTTP request method Telnyx will use to interact with your XML Translator webhooks. Either \'get\' or \'post\'.
    */
    'voiceMethod'?: UpdateTexmlApplicationRequestVoiceMethodEnum;
    /**
    * URL for Telnyx to send requests to containing information about call progress events.
    */
    'statusCallback'?: string;
    /**
    * HTTP request method Telnyx should use when requesting the status_callback URL.
    */
    'statusCallbackMethod'?: UpdateTexmlApplicationRequestStatusCallbackMethodEnum;
    'inbound'?: CreateTexmlApplicationRequestInbound;
    'outbound'?: CreateTexmlApplicationRequestOutbound;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "friendlyName",
            "baseName": "friendly_name",
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
            "name": "dtmfType",
            "baseName": "dtmf_type",
            "type": "DtmfType",
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
            "name": "voiceUrl",
            "baseName": "voice_url",
            "type": "string",
            "format": "url"
        },
        {
            "name": "voiceFallbackUrl",
            "baseName": "voice_fallback_url",
            "type": "string",
            "format": "url"
        },
        {
            "name": "voiceMethod",
            "baseName": "voice_method",
            "type": "UpdateTexmlApplicationRequestVoiceMethodEnum",
            "format": ""
        },
        {
            "name": "statusCallback",
            "baseName": "status_callback",
            "type": "string",
            "format": "url"
        },
        {
            "name": "statusCallbackMethod",
            "baseName": "status_callback_method",
            "type": "UpdateTexmlApplicationRequestStatusCallbackMethodEnum",
            "format": ""
        },
        {
            "name": "inbound",
            "baseName": "inbound",
            "type": "CreateTexmlApplicationRequestInbound",
            "format": ""
        },
        {
            "name": "outbound",
            "baseName": "outbound",
            "type": "CreateTexmlApplicationRequestOutbound",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateTexmlApplicationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UpdateTexmlApplicationRequestVoiceMethodEnum = "get" | "post" ;
export type UpdateTexmlApplicationRequestStatusCallbackMethodEnum = "get" | "post" ;


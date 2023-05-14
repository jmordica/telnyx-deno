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

import { HttpFile } from '../http/http.ts';

export class CreateFaxApplicationRequestOutbound {
    /**
    * When set, this will limit the number of concurrent outbound calls to phone numbers associated with this connection.
    */
    'channelLimit'?: number;
    /**
    * Identifies the associated outbound voice profile.
    */
    'outboundVoiceProfileId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channelLimit",
            "baseName": "channel_limit",
            "type": "number",
            "format": ""
        },
        {
            "name": "outboundVoiceProfileId",
            "baseName": "outbound_voice_profile_id",
            "type": "string",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return CreateFaxApplicationRequestOutbound.attributeTypeMap;
    }

    public constructor() {
    }
}


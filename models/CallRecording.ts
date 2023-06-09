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

/**
* The call recording settings for a phone number.
*/
export class CallRecording {
    /**
    * When enabled, any inbound call to this number will be recorded.
    */
    'inboundCallRecordingEnabled'?: boolean;
    /**
    * The audio file format for calls being recorded.
    */
    'inboundCallRecordingFormat'?: CallRecordingInboundCallRecordingFormatEnum;
    /**
    * When using \'dual\' channels, final audio file will be stereo recorded with the first leg on channel A, and the rest on channel B.
    */
    'inboundCallRecordingChannels'?: CallRecordingInboundCallRecordingChannelsEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inboundCallRecordingEnabled",
            "baseName": "inbound_call_recording_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "inboundCallRecordingFormat",
            "baseName": "inbound_call_recording_format",
            "type": "CallRecordingInboundCallRecordingFormatEnum",
            "format": ""
        },
        {
            "name": "inboundCallRecordingChannels",
            "baseName": "inbound_call_recording_channels",
            "type": "CallRecordingInboundCallRecordingChannelsEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CallRecording.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CallRecordingInboundCallRecordingFormatEnum = "wav" | "mp3" ;
export type CallRecordingInboundCallRecordingChannelsEnum = "single" | "dual" ;


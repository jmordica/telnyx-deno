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

export class ResumeConferenceRecordingRequest {
    /**
    * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
    */
    'commandId'?: string;
    /**
    * Use this field to resume specific recording.
    */
    'recordingId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "commandId",
            "baseName": "command_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "recordingId",
            "baseName": "recording_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ResumeConferenceRecordingRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


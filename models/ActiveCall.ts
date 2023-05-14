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

export class ActiveCall {
    'recordType': ActiveCallRecordTypeEnum;
    /**
    * ID that is unique to the call session and can be used to correlate webhook events. Call session is a group of related call legs that logically belong to the same phone call, e.g. an inbound and outbound leg of a transferred call
    */
    'callSessionId': string;
    /**
    * ID that is unique to the call and can be used to correlate webhook events
    */
    'callLegId': string;
    /**
    * Unique identifier and token for controlling the call.
    */
    'callControlId': string;
    /**
    * State received from a command.
    */
    'clientState': string;
    /**
    * Indicates the duration of the call in seconds
    */
    'callDuration': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "ActiveCallRecordTypeEnum",
            "format": ""
        },
        {
            "name": "callSessionId",
            "baseName": "call_session_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "callLegId",
            "baseName": "call_leg_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "callControlId",
            "baseName": "call_control_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientState",
            "baseName": "client_state",
            "type": "string",
            "format": ""
        },
        {
            "name": "callDuration",
            "baseName": "call_duration",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ActiveCall.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ActiveCallRecordTypeEnum = "call" ;


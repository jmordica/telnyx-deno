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

import { CallRecordingErrorPayload } from '../models/CallRecordingErrorPayload.ts';
import { HttpFile } from '../http/http.ts';

export class CallRecordingError {
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: CallRecordingErrorRecordTypeEnum;
    /**
    * The type of event being delivered.
    */
    'eventType'?: CallRecordingErrorEventTypeEnum;
    /**
    * Identifies the type of resource.
    */
    'id'?: string;
    /**
    * ISO 8601 datetime of when the event occurred.
    */
    'occurredAt'?: Date;
    'payload'?: CallRecordingErrorPayload;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "CallRecordingErrorRecordTypeEnum",
            "format": ""
        },
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "CallRecordingErrorEventTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "occurredAt",
            "baseName": "occurred_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "CallRecordingErrorPayload",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CallRecordingError.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CallRecordingErrorRecordTypeEnum = "event" ;
export type CallRecordingErrorEventTypeEnum = "call.recording.error" ;


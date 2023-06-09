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

import { RecordingStartedPayload } from '../models/RecordingStartedPayload.ts';
import { HttpFile } from '../http/http.ts';

export class RecordingStarted {
    /**
    * An identifier for the type of the resource.
    */
    'recordType'?: RecordingStartedRecordTypeEnum;
    /**
    * The type of event being delivered.
    */
    'eventType'?: RecordingStartedEventTypeEnum;
    /**
    * Uniquely identify the event.
    */
    'id'?: string;
    /**
    * ISO 8601 datetime of when the event occurred.
    */
    'occurredAt'?: Date;
    'payload'?: RecordingStartedPayload;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "RecordingStartedRecordTypeEnum",
            "format": ""
        },
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "RecordingStartedEventTypeEnum",
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
            "type": "RecordingStartedPayload",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RecordingStarted.attributeTypeMap;
    }

    public constructor() {
    }
}


export type RecordingStartedRecordTypeEnum = "event" ;
export type RecordingStartedEventTypeEnum = "video.room.recording.started" ;


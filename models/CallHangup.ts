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

import { CallHangupPayload } from '../models/CallHangupPayload.ts';
import { HttpFile } from '../http/http.ts';

export class CallHangup {
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: CallHangupRecordTypeEnum;
    /**
    * The type of event being delivered.
    */
    'eventType'?: CallHangupEventTypeEnum;
    /**
    * Identifies the type of resource.
    */
    'id'?: string;
    /**
    * ISO 8601 datetime of when the event occurred.
    */
    'occurredAt'?: Date;
    'payload'?: CallHangupPayload;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "CallHangupRecordTypeEnum",
            "format": ""
        },
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "CallHangupEventTypeEnum",
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
            "type": "CallHangupPayload",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CallHangup.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CallHangupRecordTypeEnum = "event" ;
export type CallHangupEventTypeEnum = "call.hangup" ;


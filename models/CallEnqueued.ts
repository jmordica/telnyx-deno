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

import { CallEnqueuedPayload } from '../models/CallEnqueuedPayload.ts';
import { HttpFile } from '../http/http.ts';

export class CallEnqueued {
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: CallEnqueuedRecordTypeEnum;
    /**
    * The type of event being delivered.
    */
    'eventType'?: CallEnqueuedEventTypeEnum;
    /**
    * Identifies the type of resource.
    */
    'id'?: string;
    /**
    * ISO 8601 datetime of when the event occurred.
    */
    'occurredAt'?: Date;
    'payload'?: CallEnqueuedPayload;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "CallEnqueuedRecordTypeEnum",
            "format": ""
        },
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "CallEnqueuedEventTypeEnum",
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
            "type": "CallEnqueuedPayload",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CallEnqueued.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CallEnqueuedRecordTypeEnum = "event" ;
export type CallEnqueuedEventTypeEnum = "call.enqueued" ;


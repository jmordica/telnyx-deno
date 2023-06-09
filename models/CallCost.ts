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

import { CallCostMeta } from '../models/CallCostMeta.ts';
import { CallCostPayload } from '../models/CallCostPayload.ts';
import { HttpFile } from '../http/http.ts';

export class CallCost {
    /**
    * Identifies the type of resource.
    */
    'recordType'?: CallCostRecordTypeEnum;
    /**
    * The type of the event being delivered
    */
    'eventType'?: CallCostEventTypeEnum;
    /**
    * Uniquely identifies a webhook
    */
    'id'?: string;
    /**
    * ISO 8601 datetime of when the event occurred.
    */
    'occurredAt'?: Date;
    'meta'?: CallCostMeta;
    'payload'?: CallCostPayload;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "CallCostRecordTypeEnum",
            "format": ""
        },
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "CallCostEventTypeEnum",
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
            "name": "meta",
            "baseName": "meta",
            "type": "CallCostMeta",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "CallCostPayload",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CallCost.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CallCostRecordTypeEnum = "event" ;
export type CallCostEventTypeEnum = "call.cost" ;


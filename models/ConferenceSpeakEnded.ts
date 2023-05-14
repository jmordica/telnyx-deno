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

import { ConferenceSpeakEndedPayload } from '../models/ConferenceSpeakEndedPayload.ts';
import { HttpFile } from '../http/http.ts';

export class ConferenceSpeakEnded {
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: ConferenceSpeakEndedRecordTypeEnum;
    /**
    * The type of event being delivered.
    */
    'eventType'?: ConferenceSpeakEndedEventTypeEnum;
    /**
    * Identifies the type of resource.
    */
    'id'?: string;
    'payload'?: ConferenceSpeakEndedPayload;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "ConferenceSpeakEndedRecordTypeEnum",
            "format": ""
        },
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "ConferenceSpeakEndedEventTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "ConferenceSpeakEndedPayload",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConferenceSpeakEnded.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ConferenceSpeakEndedRecordTypeEnum = "event" ;
export type ConferenceSpeakEndedEventTypeEnum = "conference.speak.ended" ;


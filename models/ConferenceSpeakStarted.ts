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

export class ConferenceSpeakStarted {
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: ConferenceSpeakStartedRecordTypeEnum;
    /**
    * The type of event being delivered.
    */
    'eventType'?: ConferenceSpeakStartedEventTypeEnum;
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
            "type": "ConferenceSpeakStartedRecordTypeEnum",
            "format": ""
        },
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "ConferenceSpeakStartedEventTypeEnum",
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
        return ConferenceSpeakStarted.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ConferenceSpeakStartedRecordTypeEnum = "event" ;
export type ConferenceSpeakStartedEventTypeEnum = "conference.speak.started" ;


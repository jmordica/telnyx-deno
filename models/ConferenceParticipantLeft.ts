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

import { ConferenceParticipantJoinedPayload } from '../models/ConferenceParticipantJoinedPayload.ts';
import { HttpFile } from '../http/http.ts';

export class ConferenceParticipantLeft {
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: ConferenceParticipantLeftRecordTypeEnum;
    /**
    * The type of event being delivered.
    */
    'eventType'?: ConferenceParticipantLeftEventTypeEnum;
    /**
    * Identifies the type of resource.
    */
    'id'?: string;
    /**
    * ISO 8601 datetime of when the event occurred.
    */
    'occurredAt'?: Date;
    'payload'?: ConferenceParticipantJoinedPayload;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "ConferenceParticipantLeftRecordTypeEnum",
            "format": ""
        },
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "ConferenceParticipantLeftEventTypeEnum",
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
            "type": "ConferenceParticipantJoinedPayload",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConferenceParticipantLeft.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ConferenceParticipantLeftRecordTypeEnum = "event" ;
export type ConferenceParticipantLeftEventTypeEnum = "conference.participant.left" ;


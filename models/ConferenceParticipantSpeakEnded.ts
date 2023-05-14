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

import { ConferenceParticipantSpeakEndedPayload } from '../models/ConferenceParticipantSpeakEndedPayload.ts';
import { HttpFile } from '../http/http.ts';

export class ConferenceParticipantSpeakEnded {
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: ConferenceParticipantSpeakEndedRecordTypeEnum;
    /**
    * The type of event being delivered.
    */
    'eventType'?: ConferenceParticipantSpeakEndedEventTypeEnum;
    /**
    * Identifies the type of resource.
    */
    'id'?: string;
    'payload'?: ConferenceParticipantSpeakEndedPayload;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "ConferenceParticipantSpeakEndedRecordTypeEnum",
            "format": ""
        },
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "ConferenceParticipantSpeakEndedEventTypeEnum",
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
            "type": "ConferenceParticipantSpeakEndedPayload",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConferenceParticipantSpeakEnded.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ConferenceParticipantSpeakEndedRecordTypeEnum = "event" ;
export type ConferenceParticipantSpeakEndedEventTypeEnum = "conference.participant.speak.ended" ;

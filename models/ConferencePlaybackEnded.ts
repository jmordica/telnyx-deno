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

import { ConferencePlaybackEndedPayload } from '../models/ConferencePlaybackEndedPayload.ts';
import { HttpFile } from '../http/http.ts';

export class ConferencePlaybackEnded {
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: ConferencePlaybackEndedRecordTypeEnum;
    /**
    * The type of event being delivered.
    */
    'eventType'?: ConferencePlaybackEndedEventTypeEnum;
    /**
    * Identifies the type of resource.
    */
    'id'?: string;
    'payload'?: ConferencePlaybackEndedPayload;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "ConferencePlaybackEndedRecordTypeEnum",
            "format": ""
        },
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "ConferencePlaybackEndedEventTypeEnum",
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
            "type": "ConferencePlaybackEndedPayload",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConferencePlaybackEnded.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ConferencePlaybackEndedRecordTypeEnum = "event" ;
export type ConferencePlaybackEndedEventTypeEnum = "conference.playback.ended" ;


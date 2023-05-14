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

import { ConferenceEndedBy } from '../models/ConferenceEndedBy.ts';
import { HttpFile } from '../http/http.ts';

export class Conference {
    'recordType': ConferenceRecordTypeEnum;
    /**
    * Uniquely identifies the conference
    */
    'id': string;
    /**
    * Name of the conference
    */
    'name': string;
    /**
    * ISO 8601 formatted date of when the conference was created
    */
    'createdAt': string;
    /**
    * ISO 8601 formatted date of when the conference will expire
    */
    'expiresAt': string;
    /**
    * ISO 8601 formatted date of when the conference was last updated
    */
    'updatedAt'?: string;
    /**
    * Region where the conference is hosted
    */
    'region'?: string;
    /**
    * Status of the conference
    */
    'status'?: ConferenceStatusEnum;
    /**
    * Reason why the conference ended
    */
    'endReason'?: ConferenceEndReasonEnum;
    'endedBy'?: ConferenceEndedBy;
    /**
    * Identifies the connection associated with the conference
    */
    'connectionId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "ConferenceRecordTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ConferenceStatusEnum",
            "format": ""
        },
        {
            "name": "endReason",
            "baseName": "end_reason",
            "type": "ConferenceEndReasonEnum",
            "format": ""
        },
        {
            "name": "endedBy",
            "baseName": "ended_by",
            "type": "ConferenceEndedBy",
            "format": ""
        },
        {
            "name": "connectionId",
            "baseName": "connection_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Conference.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ConferenceRecordTypeEnum = "conference" ;
export type ConferenceStatusEnum = "init" | "in_progress" | "completed" ;
export type ConferenceEndReasonEnum = "all_left" | "ended_via_api" | "host_left" | "time_exceeded" ;

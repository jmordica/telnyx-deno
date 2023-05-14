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

import { HttpFile } from '../http/http.ts';

export class RoomParticipant {
    /**
    * A unique identifier for the room participant.
    */
    'id'?: string;
    /**
    * Identify the room session that participant is part of.
    */
    'sessionId'?: string;
    /**
    * Context provided to the given participant through the client SDK
    */
    'context'?: string;
    /**
    * ISO 8601 timestamp when the participant joined the session.
    */
    'joinedAt'?: string;
    /**
    * ISO 8601 timestamp when the participant was updated.
    */
    'updatedAt'?: string;
    /**
    * ISO 8601 timestamp when the participant left the session.
    */
    'leftAt'?: string;
    'recordType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "sessionId",
            "baseName": "session_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "string",
            "format": ""
        },
        {
            "name": "joinedAt",
            "baseName": "joined_at",
            "type": "string",
            "format": "datetime"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": "datetime"
        },
        {
            "name": "leftAt",
            "baseName": "left_at",
            "type": "string",
            "format": "datetime"
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RoomParticipant.attributeTypeMap;
    }

    public constructor() {
    }
}


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

export class RoomRecording {
    /**
    * A unique identifier for the room recording.
    */
    'id'?: string;
    /**
    * Identify the room associated with the room recording.
    */
    'roomId'?: string;
    /**
    * Identify the room session associated with the room recording.
    */
    'sessionId'?: string;
    /**
    * Identify the room participant associated with the room recording.
    */
    'participantId'?: string;
    /**
    * Shows the room recording status.
    */
    'status'?: RoomRecordingStatusEnum;
    /**
    * Shows the room recording type.
    */
    'type'?: RoomRecordingTypeEnum;
    /**
    * Shows the room recording size in MB.
    */
    'sizeMb'?: number;
    /**
    * Url to download the recording.
    */
    'downloadUrl'?: string;
    /**
    * Shows the codec used for the room recording.
    */
    'codec'?: string;
    /**
    * Shows the room recording duration in seconds.
    */
    'durationSecs'?: number;
    /**
    * ISO 8601 timestamp when the room recording was created.
    */
    'createdAt'?: string;
    /**
    * ISO 8601 timestamp when the room recording was updated.
    */
    'updatedAt'?: string;
    /**
    * ISO 8601 timestamp when the room recording has ended.
    */
    'endedAt'?: string;
    /**
    * ISO 8601 timestamp when the room recording has stated.
    */
    'startedAt'?: string;
    /**
    * ISO 8601 timestamp when the room recording has completed.
    */
    'completedAt'?: string;
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
            "name": "roomId",
            "baseName": "room_id",
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
            "name": "participantId",
            "baseName": "participant_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "RoomRecordingStatusEnum",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RoomRecordingTypeEnum",
            "format": ""
        },
        {
            "name": "sizeMb",
            "baseName": "size_mb",
            "type": "number",
            "format": "float"
        },
        {
            "name": "downloadUrl",
            "baseName": "download_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "codec",
            "baseName": "codec",
            "type": "string",
            "format": ""
        },
        {
            "name": "durationSecs",
            "baseName": "duration_secs",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
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
            "name": "endedAt",
            "baseName": "ended_at",
            "type": "string",
            "format": "datetime"
        },
        {
            "name": "startedAt",
            "baseName": "started_at",
            "type": "string",
            "format": "datetime"
        },
        {
            "name": "completedAt",
            "baseName": "completed_at",
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
        return RoomRecording.attributeTypeMap;
    }

    public constructor() {
    }
}


export type RoomRecordingStatusEnum = "completed" | "processing" ;
export type RoomRecordingTypeEnum = "audio" | "video" ;


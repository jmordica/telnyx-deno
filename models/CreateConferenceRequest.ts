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

export class CreateConferenceRequest {
    /**
    * Unique identifier and token for controlling the call
    */
    'callControlId': string;
    /**
    * Name of the conference
    */
    'name': string;
    /**
    * Whether a beep sound should be played when participants join and/or leave the conference.
    */
    'beepEnabled'?: CreateConferenceRequestBeepEnabledEnum;
    /**
    * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string. The client_state will be updated for the creator call leg and will be used for all webhooks related to the created conference.
    */
    'clientState'?: string;
    /**
    * Toggle background comfort noise.
    */
    'comfortNoise'?: boolean;
    /**
    * Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.
    */
    'commandId'?: string;
    /**
    * Time length (minutes) after which the conference will end.
    */
    'durationMinutes'?: number;
    /**
    * The URL of a file to be played to participants joining the conference. The URL can point to either a WAV or MP3 file. hold_media_name and hold_audio_url cannot be used together in one request. Takes effect only when \"start_conference_on_create\" is set to \"false\".
    */
    'holdAudioUrl'?: string;
    /**
    * The media_name of a file to be played to participants joining the conference. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file. Takes effect only when \"start_conference_on_create\" is set to \"false\".
    */
    'holdMediaName'?: string;
    /**
    * The maximum number of active conference participants to allow. Must be between 2 and 800. Defaults to 250
    */
    'maxParticipants'?: number;
    /**
    * Whether the conference should be started on creation. If the conference isn\'t started all participants that join are automatically put on hold. Defaults to \"true\".
    */
    'startConferenceOnCreate'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "callControlId",
            "baseName": "call_control_id",
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
            "name": "beepEnabled",
            "baseName": "beep_enabled",
            "type": "CreateConferenceRequestBeepEnabledEnum",
            "format": ""
        },
        {
            "name": "clientState",
            "baseName": "client_state",
            "type": "string",
            "format": ""
        },
        {
            "name": "comfortNoise",
            "baseName": "comfort_noise",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "commandId",
            "baseName": "command_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "durationMinutes",
            "baseName": "duration_minutes",
            "type": "number",
            "format": ""
        },
        {
            "name": "holdAudioUrl",
            "baseName": "hold_audio_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "holdMediaName",
            "baseName": "hold_media_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxParticipants",
            "baseName": "max_participants",
            "type": "number",
            "format": ""
        },
        {
            "name": "startConferenceOnCreate",
            "baseName": "start_conference_on_create",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateConferenceRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CreateConferenceRequestBeepEnabledEnum = "always" | "never" | "on_enter" | "on_exit" ;

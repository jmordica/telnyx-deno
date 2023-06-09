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

export class ConferenceCallRequest {
    /**
    * Unique identifier and token for controlling the call
    */
    'callControlId': string;
    /**
    * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
    */
    'clientState'?: string;
    /**
    * Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.
    */
    'commandId'?: string;
    /**
    * The `from` number to be used as the caller id presented to the destination (`to` number).
    */
    '_from': string;
    /**
    * Whether the participant should be put on hold immediately after joining the conference.
    */
    'hold'?: boolean;
    /**
    * The URL of a file to be played to the participant when they are put on hold after joining the conference. If media_name is also supplied, this is currently ignored. Takes effect only when \"start_conference_on_create\" is set to \"false\". This property takes effect only if \"hold\" is set to \"true\".
    */
    'holdAudioUrl'?: string;
    /**
    * The media_name of a file to be played to the participant when they are put on hold after joining the conference. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file. Takes effect only when \"start_conference_on_create\" is set to \"false\". This property takes effect only if \"hold\" is set to \"true\".
    */
    'holdMediaName'?: string;
    /**
    * Whether the participant should be muted immediately after joining the conference.
    */
    'mute'?: boolean;
    /**
    * Whether the conference should be started after the participant joins the conference.
    */
    'startConferenceOnEnter'?: boolean;
    /**
    * Sets the joining participant as a supervisor for the conference. A conference can have multiple supervisors. \"barge\" means the supervisor enters the conference as a normal participant. This is the same as \"none\". \"monitor\" means the supervisor is muted but can hear all participants. \"whisper\" means that only the specified \"whisper_call_control_ids\" can hear the supervisor. Defaults to \"none\".
    */
    'supervisorRole'?: ConferenceCallRequestSupervisorRoleEnum;
    /**
    * The DID or SIP URI to dial out and bridge to the given call.
    */
    'to': string;
    /**
    * Array of unique call_control_ids the joining supervisor can whisper to. If none provided, the supervisor will join the conference as a monitoring participant only.
    */
    'whisperCallControlIds'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "callControlId",
            "baseName": "call_control_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientState",
            "baseName": "client_state",
            "type": "string",
            "format": ""
        },
        {
            "name": "commandId",
            "baseName": "command_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "_from",
            "baseName": "from",
            "type": "string",
            "format": ""
        },
        {
            "name": "hold",
            "baseName": "hold",
            "type": "boolean",
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
            "name": "mute",
            "baseName": "mute",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "startConferenceOnEnter",
            "baseName": "start_conference_on_enter",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "supervisorRole",
            "baseName": "supervisor_role",
            "type": "ConferenceCallRequestSupervisorRoleEnum",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string",
            "format": ""
        },
        {
            "name": "whisperCallControlIds",
            "baseName": "whisper_call_control_ids",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConferenceCallRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ConferenceCallRequestSupervisorRoleEnum = "barge" | "monitor" | "none" | "whisper" ;


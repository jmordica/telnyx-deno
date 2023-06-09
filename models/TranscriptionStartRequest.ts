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

export class TranscriptionStartRequest {
    /**
    * Language to use for speech recognition
    */
    'language'?: TranscriptionStartRequestLanguageEnum;
    /**
    * Whether to send also interim results. If set to false, only final results will be sent.
    */
    'interimResults'?: boolean;
    /**
    * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
    */
    'clientState'?: string;
    /**
    * Indicates which leg of the call will be transcribed. Use `inbound` for the leg that requested the transcription, `outbound` for the other leg, and `both` for both legs of the call. Will default to `inbound`.
    */
    'transcriptionTracks'?: string;
    /**
    * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
    */
    'commandId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "language",
            "baseName": "language",
            "type": "TranscriptionStartRequestLanguageEnum",
            "format": ""
        },
        {
            "name": "interimResults",
            "baseName": "interim_results",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "clientState",
            "baseName": "client_state",
            "type": "string",
            "format": ""
        },
        {
            "name": "transcriptionTracks",
            "baseName": "transcription_tracks",
            "type": "string",
            "format": ""
        },
        {
            "name": "commandId",
            "baseName": "command_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TranscriptionStartRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TranscriptionStartRequestLanguageEnum = "de" | "en" | "es" | "fr" | "it" | "pl" ;


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

import { CallRequestAnsweringMachineDetectionConfig } from '../models/CallRequestAnsweringMachineDetectionConfig.ts';
import { CallRequestTo } from '../models/CallRequestTo.ts';
import { CustomSipHeader } from '../models/CustomSipHeader.ts';
import { SipHeader } from '../models/SipHeader.ts';
import { SoundModifications } from '../models/SoundModifications.ts';
import { HttpFile } from '../http/http.ts';

export class TransferCallRequest {
    'to': CallRequestTo;
    /**
    * The `from` number to be used as the caller id presented to the destination (`to` number). The number should be in +E164 format. This attribute will default to the `to` number of the original call if omitted.
    */
    '_from'?: string;
    /**
    * The `from_display_name` string to be used as the caller id name (SIP From Display Name) presented to the destination (`to` number). The string should have a maximum of 128 characters, containing only letters, numbers, spaces, and -_~!.+ special characters. If ommited, the display name will be the same as the number in the `from` field.
    */
    'fromDisplayName'?: string;
    /**
    * The URL of a file to be played back when the transfer destination answers before bridging the call. The URL can point to either a WAV or MP3 file. media_name and audio_url cannot be used together in one request.
    */
    'audioUrl'?: string;
    /**
    * The media_name of a file to be played back when the transfer destination answers before bridging the call. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.
    */
    'mediaName'?: string;
    /**
    * The number of seconds that Telnyx will wait for the call to be answered by the destination to which it is being transferred. If the timeout is reached before an answer is received, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `timeout` will be sent. Minimum value is 5 seconds. Maximum value is 120 seconds.
    */
    'timeoutSecs'?: number;
    /**
    * Sets the maximum duration of a Call Control Leg in seconds. If the time limit is reached, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `time_limit` will be sent. For example, by setting a time limit of 120 seconds, a Call Leg will be automatically terminated two minutes after being answered. The default time limit is 14400 seconds or 4 hours and this is also the maximum allowed call length.
    */
    'timeLimitSecs'?: number;
    /**
    * Enables Answering Machine Detection. When a call is answered, Telnyx runs real-time detection to determine if it was picked up by a human or a machine and sends an `call.machine.detection.ended` webhook with the analysis result. If \'greeting_end\' or \'detect_words\' is used and a \'machine\' is detected, you will receive another \'call.machine.greeting.ended\' webhook when the answering machine greeting ends with a beep or silence. If `detect_beep` is used, you will only receive \'call.machine.greeting.ended\' if a beep is detected.
    */
    'answeringMachineDetection'?: TransferCallRequestAnsweringMachineDetectionEnum;
    'answeringMachineDetectionConfig'?: CallRequestAnsweringMachineDetectionConfig;
    /**
    * Custom headers to be added to the SIP INVITE.
    */
    'customHeaders'?: Array<CustomSipHeader>;
    /**
    * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
    */
    'clientState'?: string;
    /**
    * Use this field to add state to every subsequent webhook for the new leg. It must be a valid Base-64 encoded string.
    */
    'targetLegClientState'?: string;
    /**
    * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
    */
    'commandId'?: string;
    /**
    * SIP Authentication username used for SIP challenges.
    */
    'sipAuthUsername'?: string;
    /**
    * SIP Authentication password used for SIP challenges.
    */
    'sipAuthPassword'?: string;
    /**
    * SIP headers to be added to the SIP INVITE. Currently only User-to-User header is supported.
    */
    'sipHeaders'?: Array<SipHeader>;
    'soundModifications'?: SoundModifications;
    /**
    * Use this field to override the URL for which Telnyx will send subsequent webhooks to for this call.
    */
    'webhookUrl'?: string;
    /**
    * HTTP request type used for `webhook_url`.
    */
    'webhookUrlMethod'?: TransferCallRequestWebhookUrlMethodEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "to",
            "baseName": "to",
            "type": "CallRequestTo",
            "format": ""
        },
        {
            "name": "_from",
            "baseName": "from",
            "type": "string",
            "format": ""
        },
        {
            "name": "fromDisplayName",
            "baseName": "from_display_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "audioUrl",
            "baseName": "audio_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "mediaName",
            "baseName": "media_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeoutSecs",
            "baseName": "timeout_secs",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "timeLimitSecs",
            "baseName": "time_limit_secs",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "answeringMachineDetection",
            "baseName": "answering_machine_detection",
            "type": "TransferCallRequestAnsweringMachineDetectionEnum",
            "format": ""
        },
        {
            "name": "answeringMachineDetectionConfig",
            "baseName": "answering_machine_detection_config",
            "type": "CallRequestAnsweringMachineDetectionConfig",
            "format": ""
        },
        {
            "name": "customHeaders",
            "baseName": "custom_headers",
            "type": "Array<CustomSipHeader>",
            "format": ""
        },
        {
            "name": "clientState",
            "baseName": "client_state",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetLegClientState",
            "baseName": "target_leg_client_state",
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
            "name": "sipAuthUsername",
            "baseName": "sip_auth_username",
            "type": "string",
            "format": ""
        },
        {
            "name": "sipAuthPassword",
            "baseName": "sip_auth_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "sipHeaders",
            "baseName": "sip_headers",
            "type": "Array<SipHeader>",
            "format": ""
        },
        {
            "name": "soundModifications",
            "baseName": "sound_modifications",
            "type": "SoundModifications",
            "format": ""
        },
        {
            "name": "webhookUrl",
            "baseName": "webhook_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "webhookUrlMethod",
            "baseName": "webhook_url_method",
            "type": "TransferCallRequestWebhookUrlMethodEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransferCallRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TransferCallRequestAnsweringMachineDetectionEnum = "premium" | "detect" | "detect_beep" | "detect_words" | "greeting_end" | "disabled" ;
export type TransferCallRequestWebhookUrlMethodEnum = "POST" | "GET" ;


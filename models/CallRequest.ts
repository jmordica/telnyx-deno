/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomSipHeader } from './CustomSipHeader.ts';
import type { DialogflowConfig } from './DialogflowConfig.ts';
import type { SipHeader } from './SipHeader.ts';
import type { SoundModifications } from './SoundModifications.ts';

export type CallRequest = {
    /**
     * The DID or SIP URI to dial out to. Multiple DID or SIP URIs can be provided using an array of strings
     */
    to: (string | Array<string>);
    /**
     * The `from` number to be used as the caller id presented to the destination (`to` number). The number should be in +E164 format.
     */
    from: string;
    /**
     * The `from_display_name` string to be used as the caller id name (SIP From Display Name) presented to the destination (`to` number). The string should have a maximum of 128 characters, containing only letters, numbers, spaces, and -_~!.+ special characters. If ommited, the display name will be the same as the number in the `from` field.
     */
    from_display_name?: string;
    /**
     * The ID of the Call Control App (formerly ID of the connection) to be used when dialing the destination.
     */
    connection_id: string;
    /**
     * The URL of a file to be played back to the callee when the call is answered. The URL can point to either a WAV or MP3 file. media_name and audio_url cannot be used together in one request.
     */
    audio_url?: string;
    /**
     * The media_name of a file to be played back to the callee when the call is answered. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.
     */
    media_name?: string;
    /**
     * The list of comma-separated codecs in a preferred order for the forked media to be received.
     */
    preferred_codecs?: string;
    /**
     * The number of seconds that Telnyx will wait for the call to be answered by the destination to which it is being called. If the timeout is reached before an answer is received, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `timeout` will be sent. Minimum value is 5 seconds. Maximum value is 120 seconds.
     */
    timeout_secs?: number;
    /**
     * Sets the maximum duration of a Call Control Leg in seconds. If the time limit is reached, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `time_limit` will be sent. For example, by setting a time limit of 120 seconds, a Call Leg will be automatically terminated two minutes after being answered. The default time limit is 14400 seconds or 4 hours and this is also the maximum allowed call length.
     */
    time_limit_secs?: number;
    /**
     * Enables Answering Machine Detection. Telnyx offers Premium and Standard detections. With Premium detection, when a call is answered, Telnyx runs real-time detection and sends a `call.machine.premium.detection.ended` webhook with one of the following results: `human_residence`, `human_business`, `machine`, `silence` or `fax_detected`. If we detect a beep, we also send a `call.machine.premium.greeting.ended` webhook with the result of `beep_detected`. If we detect a beep before `call.machine.premium.detection.ended` we only send `call.machine.premium.greeting.ended`, and if we detect a beep after `call.machine.premium.detection.ended`, we send both webhooks. With Standard detection, when a call is answered, Telnyx runs real-time detection to determine if it was picked up by a human or a machine and sends an `call.machine.detection.ended` webhook with the analysis result. If `greeting_end` or `detect_words` is used and a `machine` is detected, you will receive another `call.machine.greeting.ended` webhook when the answering machine greeting ends with a beep or silence. If `detect_beep` is used, you will only receive `call.machine.greeting.ended` if a beep is detected.
     */
    answering_machine_detection?: CallRequest.answering_machine_detection;
    /**
     * Optional configuration parameters to modify 'answering_machine_detection' performance.
     */
    answering_machine_detection_config?: {
        /**
         * Maximum timeout threshold for overall detection.
         */
        total_analysis_time_millis?: number;
        /**
         * Silence duration threshold after a greeting message or voice for it be considered human.
         */
        after_greeting_silence_millis?: number;
        /**
         * Maximum threshold for silence between words.
         */
        between_words_silence_millis?: number;
        /**
         * Maximum threshold of a human greeting. If greeting longer than this value, considered machine.
         */
        greeting_duration_millis?: number;
        /**
         * If initial silence duration is greater than this value, consider it a machine.
         */
        initial_silence_millis?: number;
        /**
         * If number of detected words is greater than this value, consder it a machine.
         */
        maximum_number_of_words?: number;
        /**
         * If a single word lasts longer than this threshold, consider it a machine.
         */
        maximum_word_length_millis?: number;
        /**
         * Minimum noise threshold for any analysis.
         */
        silence_threshold?: number;
        /**
         * If machine already detected, maximum timeout threshold to determine the end of the machine greeting.
         */
        greeting_total_analysis_time_millis?: number;
        /**
         * If machine already detected, maximum threshold for silence between words. If exceeded, the greeting is considered ended.
         */
        greeting_silence_duration_millis?: number;
    };
    /**
     * Custom headers to be added to the SIP INVITE.
     */
    custom_headers?: Array<CustomSipHeader>;
    /**
     * Use this field to set the Billing Group ID for the call. Must be a valid and existing Billing Group ID.
     */
    billing_group_id?: string;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore others Dial commands with the same `command_id`.
     */
    command_id?: string;
    /**
     * Use another call's control id for sharing the same call session id
     */
    link_to?: string;
    /**
     * SIP Authentication username used for SIP challenges.
     */
    sip_auth_username?: string;
    /**
     * SIP Authentication password used for SIP challenges.
     */
    sip_auth_password?: string;
    /**
     * SIP headers to be added to the SIP INVITE request. Currently only User-to-User header is supported.
     */
    sip_headers?: Array<SipHeader>;
    sound_modifications?: SoundModifications;
    /**
     * The destination WebSocket address where the stream is going to be delivered.
     */
    stream_url?: string;
    /**
     * Specifies which track should be streamed.
     */
    stream_track?: CallRequest.stream_track;
    /**
     * Use this field to override the URL for which Telnyx will send subsequent webhooks to for this call.
     */
    webhook_url?: string;
    /**
     * HTTP request type used for `webhook_url`.
     */
    webhook_url_method?: CallRequest.webhook_url_method;
    /**
     * Start recording automatically after an event. Disabled by default.
     */
    record?: CallRequest.record;
    /**
     * Defines which channel should be recorded ('single' or 'dual') when `record` is specified.
     */
    record_channels?: CallRequest.record_channels;
    /**
     * Defines the format of the recording ('wav' or 'mp3') when `record` is specified.
     */
    record_format?: CallRequest.record_format;
    /**
     * Defines the maximum length for the recording in seconds when `record` is specified. The minimum value is 0. The maximum value is 43200. The default value is 0 (infinite).
     */
    record_max_length?: number;
    /**
     * The number of seconds that Telnyx will wait for the recording to be stopped if silence is detected when `record` is specified. The timer only starts when the speech is detected. The minimum value is 0. The default value is 0 (infinite).
     */
    record_timeout_secs?: number;
    /**
     * Enables Dialogflow for the current call. The default value is false.
     */
    enable_dialogflow?: boolean;
    dialogflow_config?: DialogflowConfig;
};

export namespace CallRequest {

    /**
     * Enables Answering Machine Detection. Telnyx offers Premium and Standard detections. With Premium detection, when a call is answered, Telnyx runs real-time detection and sends a `call.machine.premium.detection.ended` webhook with one of the following results: `human_residence`, `human_business`, `machine`, `silence` or `fax_detected`. If we detect a beep, we also send a `call.machine.premium.greeting.ended` webhook with the result of `beep_detected`. If we detect a beep before `call.machine.premium.detection.ended` we only send `call.machine.premium.greeting.ended`, and if we detect a beep after `call.machine.premium.detection.ended`, we send both webhooks. With Standard detection, when a call is answered, Telnyx runs real-time detection to determine if it was picked up by a human or a machine and sends an `call.machine.detection.ended` webhook with the analysis result. If `greeting_end` or `detect_words` is used and a `machine` is detected, you will receive another `call.machine.greeting.ended` webhook when the answering machine greeting ends with a beep or silence. If `detect_beep` is used, you will only receive `call.machine.greeting.ended` if a beep is detected.
     */
    export enum answering_machine_detection {
        PREMIUM = 'premium',
        DETECT = 'detect',
        DETECT_BEEP = 'detect_beep',
        DETECT_WORDS = 'detect_words',
        GREETING_END = 'greeting_end',
        DISABLED = 'disabled',
    }

    /**
     * Specifies which track should be streamed.
     */
    export enum stream_track {
        INBOUND_TRACK = 'inbound_track',
        OUTBOUND_TRACK = 'outbound_track',
        BOTH_TRACKS = 'both_tracks',
    }

    /**
     * HTTP request type used for `webhook_url`.
     */
    export enum webhook_url_method {
        POST = 'POST',
        GET = 'GET',
    }

    /**
     * Start recording automatically after an event. Disabled by default.
     */
    export enum record {
        RECORD_FROM_ANSWER = 'record-from-answer',
    }

    /**
     * Defines which channel should be recorded ('single' or 'dual') when `record` is specified.
     */
    export enum record_channels {
        SINGLE = 'single',
        DUAL = 'dual',
    }

    /**
     * Defines the format of the recording ('wav' or 'mp3') when `record` is specified.
     */
    export enum record_format {
        WAV = 'wav',
        MP3 = 'mp3',
    }


}


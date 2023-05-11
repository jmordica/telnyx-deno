/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomSipHeader } from './CustomSipHeader.ts';
import type { SipHeader } from './SipHeader.ts';
import type { SoundModifications } from './SoundModifications.ts';

export type TransferCallRequest = {
    /**
     * The DID or SIP URI to dial out to. Multiple DID or SIP URIs can be provided using an array of strings
     */
    to: (string | Array<string>);
    /**
     * The `from` number to be used as the caller id presented to the destination (`to` number). The number should be in +E164 format. This attribute will default to the `to` number of the original call if omitted.
     */
    from?: string;
    /**
     * The `from_display_name` string to be used as the caller id name (SIP From Display Name) presented to the destination (`to` number). The string should have a maximum of 128 characters, containing only letters, numbers, spaces, and -_~!.+ special characters. If ommited, the display name will be the same as the number in the `from` field.
     */
    from_display_name?: string;
    /**
     * The URL of a file to be played back when the transfer destination answers before bridging the call. The URL can point to either a WAV or MP3 file. media_name and audio_url cannot be used together in one request.
     */
    audio_url?: string;
    /**
     * The media_name of a file to be played back when the transfer destination answers before bridging the call. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.
     */
    media_name?: string;
    /**
     * The number of seconds that Telnyx will wait for the call to be answered by the destination to which it is being transferred. If the timeout is reached before an answer is received, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `timeout` will be sent. Minimum value is 5 seconds. Maximum value is 120 seconds.
     */
    timeout_secs?: number;
    /**
     * Sets the maximum duration of a Call Control Leg in seconds. If the time limit is reached, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `time_limit` will be sent. For example, by setting a time limit of 120 seconds, a Call Leg will be automatically terminated two minutes after being answered. The default time limit is 14400 seconds or 4 hours and this is also the maximum allowed call length.
     */
    time_limit_secs?: number;
    /**
     * Enables Answering Machine Detection. When a call is answered, Telnyx runs real-time detection to determine if it was picked up by a human or a machine and sends an `call.machine.detection.ended` webhook with the analysis result. If 'greeting_end' or 'detect_words' is used and a 'machine' is detected, you will receive another 'call.machine.greeting.ended' webhook when the answering machine greeting ends with a beep or silence. If `detect_beep` is used, you will only receive 'call.machine.greeting.ended' if a beep is detected.
     */
    answering_machine_detection?: TransferCallRequest.answering_machine_detection;
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
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to add state to every subsequent webhook for the new leg. It must be a valid Base-64 encoded string.
     */
    target_leg_client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
    /**
     * SIP Authentication username used for SIP challenges.
     */
    sip_auth_username?: string;
    /**
     * SIP Authentication password used for SIP challenges.
     */
    sip_auth_password?: string;
    /**
     * SIP headers to be added to the SIP INVITE. Currently only User-to-User header is supported.
     */
    sip_headers?: Array<SipHeader>;
    sound_modifications?: SoundModifications;
    /**
     * Use this field to override the URL for which Telnyx will send subsequent webhooks to for this call.
     */
    webhook_url?: string;
    /**
     * HTTP request type used for `webhook_url`.
     */
    webhook_url_method?: TransferCallRequest.webhook_url_method;
};

export namespace TransferCallRequest {

    /**
     * Enables Answering Machine Detection. When a call is answered, Telnyx runs real-time detection to determine if it was picked up by a human or a machine and sends an `call.machine.detection.ended` webhook with the analysis result. If 'greeting_end' or 'detect_words' is used and a 'machine' is detected, you will receive another 'call.machine.greeting.ended' webhook when the answering machine greeting ends with a beep or silence. If `detect_beep` is used, you will only receive 'call.machine.greeting.ended' if a beep is detected.
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
     * HTTP request type used for `webhook_url`.
     */
    export enum webhook_url_method {
        POST = 'POST',
        GET = 'GET',
    }


}


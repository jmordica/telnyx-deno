/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomSipHeader } from './CustomSipHeader.ts';
import type { SipHeader } from './SipHeader.ts';
import type { SoundModifications } from './SoundModifications.ts';

export type AnswerRequest = {
    /**
     * Use this field to set the Billing Group ID for the call. Must be a valid and existing Billing Group ID.
     */
    billing_group_id?: string;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
    /**
     * Custom headers to be added to the SIP INVITE response.
     */
    custom_headers?: Array<CustomSipHeader>;
    /**
     * SIP headers to be added to the SIP INVITE response. Currently only User-to-User header is supported.
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
    stream_track?: AnswerRequest.stream_track;
    /**
     * Use this field to override the URL for which Telnyx will send subsequent webhooks to for this call.
     */
    webhook_url?: string;
    /**
     * HTTP request type used for `webhook_url`.
     */
    webhook_url_method?: AnswerRequest.webhook_url_method;
};

export namespace AnswerRequest {

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


}


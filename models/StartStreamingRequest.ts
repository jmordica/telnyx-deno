/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DialogflowConfig } from './DialogflowConfig.ts';

export type StartStreamingRequest = {
    /**
     * The destination WebSocket address where the stream is going to be delivered.
     */
    stream_url?: string;
    /**
     * Specifies which track should be streamed.
     */
    stream_track?: StartStreamingRequest.stream_track;
    /**
     * Enables Dialogflow for the current call. The default value is false.
     */
    enable_dialogflow?: boolean;
    dialogflow_config?: DialogflowConfig;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
};

export namespace StartStreamingRequest {

    /**
     * Specifies which track should be streamed.
     */
    export enum stream_track {
        INBOUND_TRACK = 'inbound_track',
        OUTBOUND_TRACK = 'outbound_track',
        BOTH_TRACKS = 'both_tracks',
    }


}


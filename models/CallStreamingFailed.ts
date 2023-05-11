/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CallStreamingFailed = {
    /**
     * Identifies the resource.
     */
    record_type?: CallStreamingFailed.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: CallStreamingFailed.event_type;
    /**
     * Identifies the type of resource.
     */
    id?: string;
    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;
    payload?: {
        /**
         * Call ID used to issue commands via Call Control API.
         */
        call_control_id?: string;
        /**
         * Call Control App ID (formerly Telnyx connection ID) used in the call.
         */
        connection_id?: string;
        /**
         * ID that is unique to the call and can be used to correlate webhook events.
         */
        call_leg_id?: string;
        /**
         * ID that is unique to the call session and can be used to correlate webhook events. Call session is a group of related call legs that logically belong to the same phone call, e.g. an inbound and outbound leg of a transferred call.
         */
        call_session_id?: string;
        /**
         * State received from a command.
         */
        client_state?: string;
        /**
         * A short description explaning why the media streaming failed.
         */
        failure_reason?: string;
        /**
         * Identifies the streaming.
         */
        stream_id?: string;
        /**
         * Streaming parameters as they were originally given to the Call Control API.
         */
        stream_params?: {
            /**
             * The destination WebSocket address where the stream is going to be delivered.
             */
            stream_url?: string;
            /**
             * Specifies which track should be streamed.
             */
            track?: CallStreamingFailed.track;
        };
        /**
         * The type of stream connection the stream is performing.
         */
        stream_type?: CallStreamingFailed.stream_type;
    };
};

export namespace CallStreamingFailed {

    /**
     * Identifies the resource.
     */
    export enum record_type {
        EVENT = 'event',
    }

    /**
     * The type of event being delivered.
     */
    export enum event_type {
        STREAMING_FAILED = 'streaming.failed',
    }

    /**
     * Specifies which track should be streamed.
     */
    export enum track {
        INBOUND_TRACK = 'inbound_track',
        OUTBOUND_TRACK = 'outbound_track',
        BOTH_TRACKS = 'both_tracks',
    }

    /**
     * The type of stream connection the stream is performing.
     */
    export enum stream_type {
        WEBSOCKET = 'websocket',
        DIALOGFLOW = 'dialogflow',
    }


}


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CallStreamingStarted = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: CallStreamingStarted.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: CallStreamingStarted.event_type;
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
         * Destination WebSocket address where the stream is going to be delivered.
         */
        stream_url?: string;
    };
};

export namespace CallStreamingStarted {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        EVENT = 'event',
    }

    /**
     * The type of event being delivered.
     */
    export enum event_type {
        STREAMING_STARTED = 'streaming.started',
    }


}


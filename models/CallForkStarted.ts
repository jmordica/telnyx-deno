/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CallForkStarted = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: CallForkStarted.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: CallForkStarted.event_type;
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
         * Call Control App ID (formerly Telnyx connection ID) used in the call.
         */
        connection_id?: string;
        /**
         * Unique ID for controlling the call.
         */
        call_control_id?: string;
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
         * Type of media streamed. It can be either 'raw' or 'decrypted'.
         */
        stream_type?: CallForkStarted.stream_type;
    };
};

export namespace CallForkStarted {

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
        CALL_FORK_STARTED = 'call.fork.started',
    }

    /**
     * Type of media streamed. It can be either 'raw' or 'decrypted'.
     */
    export enum stream_type {
        RAW = 'raw',
        DECRYPTED = 'decrypted',
    }


}

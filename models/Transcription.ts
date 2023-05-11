/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Transcription = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: Transcription.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: Transcription.event_type;
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
         * Unique identifier and token for controlling the call.
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
         * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
         */
        client_state?: string;
        /**
         * Call Control App ID (formerly Telnyx connection ID) used in the call.
         */
        connection_id?: string;
        transcription_data?: {
            /**
             * Speech recognition confidence level.
             */
            confidence?: number;
            /**
             * When false, it means that this is an interim result.
             */
            is_final?: boolean;
            /**
             * Recognized text.
             */
            transcript?: string;
        };
    };
};

export namespace Transcription {

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
        CALL_TRANSCRIPTION = 'call.transcription',
    }


}


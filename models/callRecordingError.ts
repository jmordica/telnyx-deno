/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type callRecordingError = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: callRecordingError.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: callRecordingError.event_type;
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
         * Indication that there was a problem recording the call.
         */
        reason?: callRecordingError.reason;
    };
};

export namespace callRecordingError {

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
        CALL_RECORDING_ERROR = 'call.recording.error',
    }

    /**
     * Indication that there was a problem recording the call.
     */
    export enum reason {
        FAILED_TO_AUTHORIZE_WITH_STORAGE_USING_CUSTOM_CREDENTIALS = 'Failed to authorize with storage using custom credentials',
        INVALID_CREDENTIALS_JSON = 'Invalid credentials json',
        UNSUPPORTED_BACKEND = 'Unsupported backend',
        INTERNAL_SERVER_ERROR = 'Internal server error',
    }


}


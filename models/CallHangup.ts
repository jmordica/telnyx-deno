/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CallHangup = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: CallHangup.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: CallHangup.event_type;
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
         * Number or SIP URI placing the call.
         */
        from?: string;
        /**
         * Destination number or SIP URI of the call.
         */
        to?: string;
        /**
         * ISO 8601 datetime of when the call started.
         */
        start_time?: string;
        /**
         * State received from a command.
         */
        state?: CallHangup.state;
        /**
         * The reason the call was ended (`call_rejected`, `normal_clearing`, `originator_cancel`, `timeout`, `time_limit`, `user_busy`, `not_found` or `unspecified`).
         */
        hangup_cause?: CallHangup.hangup_cause;
        /**
         * The party who ended the call (`callee`, `caller`, `unknown`).
         */
        hangup_source?: CallHangup.hangup_source;
        /**
         * The reason the call was ended (SIP response code). If the SIP response is unavailable (in inbound calls for example) this is set to `unspecified`.
         */
        sip_hangup_cause?: string;
    };
};

export namespace CallHangup {

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
        CALL_HANGUP = 'call.hangup',
    }

    /**
     * State received from a command.
     */
    export enum state {
        HANGUP = 'hangup',
    }

    /**
     * The reason the call was ended (`call_rejected`, `normal_clearing`, `originator_cancel`, `timeout`, `time_limit`, `user_busy`, `not_found` or `unspecified`).
     */
    export enum hangup_cause {
        CALL_REJECTED = 'call_rejected',
        NORMAL_CLEARING = 'normal_clearing',
        ORIGINATOR_CANCEL = 'originator_cancel',
        TIMEOUT = 'timeout',
        TIME_LIMIT = 'time_limit',
        USER_BUSY = 'user_busy',
        NOT_FOUND = 'not_found',
        UNSPECIFIED = 'unspecified',
    }

    /**
     * The party who ended the call (`callee`, `caller`, `unknown`).
     */
    export enum hangup_source {
        CALLER = 'caller',
        CALLEE = 'callee',
        UNKNOWN = 'unknown',
    }


}


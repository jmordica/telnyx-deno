/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConferenceEnded = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: ConferenceEnded.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: ConferenceEnded.event_type;
    /**
     * Identifies the type of resource.
     */
    id?: string;
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
         * Conference ID that the participant joined.
         */
        conference_id?: string;
        /**
         * ISO 8601 datetime of when the event occurred.
         */
        occurred_at?: string;
        /**
         * Reason the conference ended.
         */
        reason?: ConferenceEnded.reason;
    };
};

export namespace ConferenceEnded {

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
        CONFERENCE_ENDED = 'conference.ended',
    }

    /**
     * Reason the conference ended.
     */
    export enum reason {
        ALL_LEFT = 'all_left',
        HOST_LEFT = 'host_left',
        TIME_EXCEEDED = 'time_exceeded',
    }


}


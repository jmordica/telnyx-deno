/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConferenceSpeakStarted = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: ConferenceSpeakStarted.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: ConferenceSpeakStarted.event_type;
    /**
     * Identifies the type of resource.
     */
    id?: string;
    payload?: {
        /**
         * Call Control App ID (formerly Telnyx connection ID) used in the call.
         */
        connection_id?: string;
        /**
         * ID that is unique to the call session that started the conference.
         */
        creator_call_session_id?: string;
        /**
         * ID of the conference the text was spoken in.
         */
        conference_id?: string;
        /**
         * ISO 8601 datetime of when the event occurred.
         */
        occurred_at?: string;
    };
};

export namespace ConferenceSpeakStarted {

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
        CONFERENCE_SPEAK_STARTED = 'conference.speak.started',
    }


}


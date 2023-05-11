/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConferenceFloorChangedEvent = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: ConferenceFloorChangedEvent.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: ConferenceFloorChangedEvent.event_type;
    /**
     * Identifies the type of resource.
     */
    id?: string;
    payload?: {
        /**
         * Call Control ID of the new speaker.
         */
        call_control_id?: string;
        /**
         * Call Control App ID (formerly Telnyx connection ID) used in the call.
         */
        connection_id?: string;
        /**
         * Call Leg ID of the new speaker.
         */
        call_leg_id?: string;
        /**
         * Call Session ID of the new speaker.
         */
        call_session_id?: string;
        /**
         * State received from a command.
         */
        client_state?: string;
        /**
         * Conference ID that had a speaker change event.
         */
        conference_id?: string;
        /**
         * ISO 8601 datetime of when the event occurred.
         */
        occurred_at?: string;
    };
};

export namespace ConferenceFloorChangedEvent {

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
        CONFERENCE_FLOOR_CHANGED = 'conference.floor.changed',
    }


}


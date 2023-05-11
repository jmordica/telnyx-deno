/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ParticipantLeft = {
    /**
     * An identifier for the type of the resource.
     */
    record_type?: ParticipantLeft.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: ParticipantLeft.event_type;
    /**
     * Uniquely identify the event.
     */
    id?: string;
    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;
    payload?: {
        /**
         * Session ID that identifies the session where the participant left.
         */
        session_id?: string;
        /**
         * Room ID that identifies the room where the participant left.
         */
        room_id?: string;
        /**
         * Context provided to the given participant through the client SDK
         */
        context?: string;
        /**
         * Participant ID that identifies the participant that left.
         */
        participant_id?: string;
        /**
         * The duration in seconds of the participant in the session
         */
        duration_secs?: number;
        /**
         * The reason why the participant left
         */
        left_reason?: string;
    };
};

export namespace ParticipantLeft {

    /**
     * An identifier for the type of the resource.
     */
    export enum record_type {
        EVENT = 'event',
    }

    /**
     * The type of event being delivered.
     */
    export enum event_type {
        VIDEO_ROOM_PARTICIPANT_LEFT = 'video.room.participant.left',
    }


}


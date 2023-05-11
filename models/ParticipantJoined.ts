/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ParticipantJoined = {
    /**
     * An identifier for the type of the resource.
     */
    record_type?: ParticipantJoined.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: ParticipantJoined.event_type;
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
         * Session ID that identifies the session where the participant joined.
         */
        session_id?: string;
        /**
         * Room ID that identifies the room where the participant joined.
         */
        room_id?: string;
        /**
         * Context provided to the given participant through the client SDK
         */
        context?: string;
        /**
         * Participant ID that identifies the participant that joined.
         */
        participant_id?: string;
    };
};

export namespace ParticipantJoined {

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
        VIDEO_ROOM_PARTICIPANT_JOINED = 'video.room.participant.joined',
    }


}


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SessionEnded = {
    /**
     * An identifier for the type of the resource.
     */
    record_type?: SessionEnded.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: SessionEnded.event_type;
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
         * Session ID that identifies the session that ended.
         */
        session_id?: string;
        /**
         * Room ID that identifies the room where the session ended.
         */
        room_id?: string;
        /**
         * The duration in seconds of the session
         */
        duration_secs?: number;
        /**
         * The reason why the session ended
         */
        ended_reason?: string;
    };
};

export namespace SessionEnded {

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
        VIDEO_ROOM_SESSION_ENDED = 'video.room.session.ended',
    }


}


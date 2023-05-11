/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SessionStarted = {
    /**
     * An identifier for the type of the resource.
     */
    record_type?: SessionStarted.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: SessionStarted.event_type;
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
         * Session ID that identifies the session that started.
         */
        session_id?: string;
        /**
         * Room ID that identifies the room where the session started.
         */
        room_id?: string;
    };
};

export namespace SessionStarted {

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
        VIDEO_ROOM_SESSION_STARTED = 'video.room.session.started',
    }


}


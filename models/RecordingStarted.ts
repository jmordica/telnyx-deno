/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RecordingStarted = {
    /**
     * An identifier for the type of the resource.
     */
    record_type?: RecordingStarted.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: RecordingStarted.event_type;
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
         * Session ID associated with the recording.
         */
        session_id?: string;
        /**
         * Room ID associated with the recording.
         */
        room_id?: string;
        /**
         * Participant ID associated with the recording.
         */
        participant_id?: string;
        /**
         * Recording ID associated with the recording.
         */
        recording_id?: string;
        /**
         * Type of the recording.
         */
        type?: RecordingStarted.type;
    };
};

export namespace RecordingStarted {

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
        VIDEO_ROOM_RECORDING_STARTED = 'video.room.recording.started',
    }

    /**
     * Type of the recording.
     */
    export enum type {
        AUDIO = 'audio',
        VIDEO = 'video',
    }


}


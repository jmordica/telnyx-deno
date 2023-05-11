/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RecordingCompleted = {
    /**
     * An identifier for the type of the resource.
     */
    record_type?: RecordingCompleted.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: RecordingCompleted.event_type;
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
         * Recording ID that identifies the recording.
         */
        recording_id?: string;
        /**
         * Type of the recording.
         */
        type?: RecordingCompleted.type;
        /**
         * Recording size in MB.
         */
        size_mb?: number;
        /**
         * Url to download the recording.
         */
        download_url?: string;
        /**
         * Codec used for the recording.
         */
        codec?: string;
        /**
         * Recording duration in seconds.
         */
        duration_secs?: number;
    };
};

export namespace RecordingCompleted {

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
        VIDEO_ROOM_RECORDING_COMPLETED = 'video.room.recording.completed',
    }

    /**
     * Type of the recording.
     */
    export enum type {
        AUDIO = 'audio',
        VIDEO = 'video',
    }


}


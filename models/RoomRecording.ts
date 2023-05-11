/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RoomRecording = {
    /**
     * A unique identifier for the room recording.
     */
    id?: string;
    /**
     * Identify the room associated with the room recording.
     */
    room_id?: string;
    /**
     * Identify the room session associated with the room recording.
     */
    session_id?: string;
    /**
     * Identify the room participant associated with the room recording.
     */
    participant_id?: string;
    /**
     * Shows the room recording status.
     */
    status?: RoomRecording.status;
    /**
     * Shows the room recording type.
     */
    type?: RoomRecording.type;
    /**
     * Shows the room recording size in MB.
     */
    size_mb?: number;
    /**
     * Url to download the recording.
     */
    download_url?: string;
    /**
     * Shows the codec used for the room recording.
     */
    codec?: string;
    /**
     * Shows the room recording duration in seconds.
     */
    duration_secs?: number;
    /**
     * ISO 8601 timestamp when the room recording was created.
     */
    created_at?: string;
    /**
     * ISO 8601 timestamp when the room recording was updated.
     */
    updated_at?: string;
    /**
     * ISO 8601 timestamp when the room recording has ended.
     */
    ended_at?: string;
    /**
     * ISO 8601 timestamp when the room recording has stated.
     */
    started_at?: string;
    /**
     * ISO 8601 timestamp when the room recording has completed.
     */
    completed_at?: string;
    readonly record_type?: string;
};

export namespace RoomRecording {

    /**
     * Shows the room recording status.
     */
    export enum status {
        COMPLETED = 'completed',
        PROCESSING = 'processing',
    }

    /**
     * Shows the room recording type.
     */
    export enum type {
        AUDIO = 'audio',
        VIDEO = 'video',
    }


}


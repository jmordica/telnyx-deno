/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CompositionCompleted = {
    /**
     * An identifier for the type of the resource.
     */
    record_type?: CompositionCompleted.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: CompositionCompleted.event_type;
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
         * Composition ID that identifies the room composition.
         */
        composition_id?: string;
        /**
         * Url to download the room composition.
         */
        download_url?: string;
        /**
         * Room composition duration in seconds.
         */
        duration_secs?: number;
        /**
         * Format of the room composition.
         */
        format?: string;
        /**
         * Format of the room composition.
         */
        resolution?: string;
        /**
         * Room ID associated with the room composition.
         */
        room_id?: string;
        /**
         * Session ID associated with the room composition.
         */
        session_id?: string;
        /**
         * Room composition size in MB.
         */
        size_mb?: number;
    };
};

export namespace CompositionCompleted {

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
        VIDEO_ROOM_COMPOSITION_COMPLETED = 'video.room.composition.completed',
    }


}


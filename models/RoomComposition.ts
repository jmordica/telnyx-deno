/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VideoRegion } from './VideoRegion.ts';

export type RoomComposition = {
    /**
     * A unique identifier for the room composition.
     */
    id?: string;
    /**
     * Identify the room associated with the room composition.
     */
    room_id?: string;
    /**
     * Identify the room session associated with the room composition.
     */
    session_id?: string;
    /**
     * Identify the user associated with the room composition.
     */
    user_id?: string;
    /**
     * Shows the room composition status.
     */
    status?: RoomComposition.status;
    /**
     * Shows the room composition size in MB.
     */
    size_mb?: number;
    /**
     * Url to download the composition.
     */
    download_url?: string;
    /**
     * Shows the room composition duration in seconds.
     */
    duration_secs?: number;
    /**
     * Shows format of the room composition.
     */
    format?: RoomComposition.format;
    /**
     * ISO 8601 timestamp when the room composition was created.
     */
    created_at?: string;
    /**
     * ISO 8601 timestamp when the room composition was updated.
     */
    updated_at?: string;
    /**
     * ISO 8601 timestamp when the room composition has ended.
     */
    ended_at?: string;
    /**
     * ISO 8601 timestamp when the room composition has stated.
     */
    started_at?: string;
    /**
     * ISO 8601 timestamp when the room composition has completed.
     */
    completed_at?: string;
    /**
     * Describes the video layout of the room composition in terms of regions. Limited to 2 regions.
     */
    video_layout?: Record<string, VideoRegion>;
    /**
     * The URL where webhooks related to this room composition will be sent. Must include a scheme, such as 'https'.
     */
    webhook_event_url?: string;
    /**
     * The failover URL where webhooks related to this room composition will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.
     */
    webhook_event_failover_url?: string | null;
    /**
     * Specifies how many seconds to wait before timing out a webhook.
     */
    webhook_timeout_secs?: number | null;
    readonly record_type?: string;
};

export namespace RoomComposition {

    /**
     * Shows the room composition status.
     */
    export enum status {
        COMPLETED = 'completed',
        ENQUEUED = 'enqueued',
        PROCESSING = 'processing',
    }

    /**
     * Shows format of the room composition.
     */
    export enum format {
        MP4 = 'mp4',
    }


}


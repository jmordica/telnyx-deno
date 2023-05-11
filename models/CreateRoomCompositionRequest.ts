/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VideoRegion } from './VideoRegion.ts';

export type CreateRoomCompositionRequest = {
    /**
     * The desired format of the room composition.
     */
    format?: string | null;
    /**
     * The desired resolution (width/height in pixels) of the resulting video of the room composition. Both width and height are required to be between 16 and 1280; and width * height should not exceed 1280 * 720
     */
    resolution?: string | null;
    /**
     * id of the room session associated with the room composition.
     */
    session_id?: string | null;
    /**
     * Describes the video layout of the room composition in terms of regions.
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
};


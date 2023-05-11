/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoomSession } from './RoomSession.ts';

export type Room = {
    /**
     * A unique identifier for the room.
     */
    id?: string;
    /**
     * Maximum participants allowed in the room.
     */
    max_participants?: number;
    /**
     * The unique (within the Telnyx account scope) name of the room.
     */
    unique_name?: string;
    /**
     * ISO 8601 timestamp when the room was created.
     */
    created_at?: string;
    /**
     * ISO 8601 timestamp when the room was updated.
     */
    updated_at?: string;
    /**
     * The identifier of the active room session if any.
     */
    active_session_id?: string;
    sessions?: Array<RoomSession>;
    /**
     * Enable or disable recording for that room.
     */
    enable_recording?: boolean;
    /**
     * The URL where webhooks related to this room will be sent. Must include a scheme, such as 'https'.
     */
    webhook_event_url?: string;
    /**
     * The failover URL where webhooks related to this room will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.
     */
    webhook_event_failover_url?: string | null;
    /**
     * Specifies how many seconds to wait before timing out a webhook.
     */
    webhook_timeout_secs?: number | null;
    readonly record_type?: string;
};


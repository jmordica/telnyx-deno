/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PatchRoomRequest = {
    /**
     * The unique (within the Telnyx account scope) name of the room.
     */
    unique_name?: string;
    /**
     * The maximum amount of participants allowed in a room. If new participants try to join after that limit is reached, their request will be rejected.
     */
    max_participants?: number;
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
};


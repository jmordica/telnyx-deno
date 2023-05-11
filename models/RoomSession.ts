/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoomParticipant } from './RoomParticipant.ts';

export type RoomSession = {
    /**
     * A unique identifier for the room session.
     */
    id?: string;
    /**
     * Identify the room hosting that room session.
     */
    room_id?: string;
    /**
     * Shows if the room session is active or not.
     */
    active?: boolean;
    /**
     * ISO 8601 timestamp when the room session was created.
     */
    created_at?: string;
    /**
     * ISO 8601 timestamp when the room session was updated.
     */
    updated_at?: string;
    /**
     * ISO 8601 timestamp when the room session has ended.
     */
    ended_at?: string;
    participants?: Array<RoomParticipant>;
    readonly record_type?: string;
};


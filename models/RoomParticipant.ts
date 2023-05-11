/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RoomParticipant = {
    /**
     * A unique identifier for the room participant.
     */
    id?: string;
    /**
     * Identify the room session that participant is part of.
     */
    session_id?: string;
    /**
     * Context provided to the given participant through the client SDK
     */
    context?: string;
    /**
     * ISO 8601 timestamp when the participant joined the session.
     */
    joined_at?: string;
    /**
     * ISO 8601 timestamp when the participant was updated.
     */
    updated_at?: string;
    /**
     * ISO 8601 timestamp when the participant left the session.
     */
    left_at?: string;
    readonly record_type?: string;
};


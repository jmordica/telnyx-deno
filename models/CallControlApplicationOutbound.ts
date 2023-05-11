/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CallControlApplicationOutbound = {
    /**
     * When set, this will limit the total number of outbound calls to phone numbers associated with this connection.
     */
    channel_limit?: number;
    /**
     * Identifies the associated outbound voice profile.
     */
    outbound_voice_profile_id?: string;
};


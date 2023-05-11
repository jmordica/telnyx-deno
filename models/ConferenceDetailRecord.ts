/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConferenceDetailRecord = {
    /**
     * Conference id
     */
    id?: string;
    /**
     * Conference name
     */
    name?: string;
    /**
     * User id
     */
    user_id?: string;
    /**
     * Conference start time
     */
    started_at?: string;
    /**
     * Conference end time
     */
    ended_at?: string;
    /**
     * Conference expiry time
     */
    expires_at?: string;
    /**
     * Region where the conference is hosted
     */
    region?: string;
    /**
     * Telnyx UUID that identifies the conference call leg
     */
    call_leg_id?: string;
    /**
     * Telnyx UUID that identifies with conference call session
     */
    call_session_id?: string;
    /**
     * Connection id
     */
    connection_id?: string;
    /**
     * Duration of the conference call in seconds
     */
    call_sec?: number;
    /**
     * Number of participants that joined the conference call
     */
    participant_count?: number;
    /**
     * Sum of the conference call duration for all participants in seconds
     */
    participant_call_sec?: number;
    /**
     * Indicates whether Telnyx billing charges might be applicable
     */
    is_telnyx_billable?: boolean;
    record_type: 'ConferenceDetailRecord.ts';
};


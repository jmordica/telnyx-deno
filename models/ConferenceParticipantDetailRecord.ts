/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConferenceParticipantDetailRecord = {
    /**
     * Participant id
     */
    id?: string;
    /**
     * User id
     */
    user_id?: string;
    /**
     * Conference id
     */
    conference_id?: string;
    /**
     * Participant join time
     */
    joined_at?: string;
    /**
     * Participant leave time
     */
    left_at?: string;
    /**
     * Number called by the participant to join the conference
     */
    destination_number?: string;
    /**
     * Participant origin number used in the conference call
     */
    originating_number?: string;
    /**
     * Telnyx UUID that identifies the conference call leg
     */
    call_leg_id?: string;
    /**
     * Telnyx UUID that identifies with conference call session
     */
    call_session_id?: string;
    /**
     * Duration of the conference call in seconds
     */
    call_sec?: number;
    /**
     * Duration of the conference call for billing purposes
     */
    billed_sec?: number;
    /**
     * Indicates whether Telnyx billing charges might be applicable
     */
    is_telnyx_billable?: boolean;
    /**
     * Currency amount per billing unit used to calculate the Telnyx billing cost
     */
    rate?: string;
    /**
     * Billing unit used to calculate the Telnyx billing cost
     */
    rate_measured_in?: string;
    /**
     * Currency amount for Telnyx billing cost
     */
    cost?: string;
    /**
     * Telnyx account currency used to describe monetary values, including billing cost
     */
    currency?: string;
    record_type: 'ConferenceParticipantDetailRecord.ts';
};


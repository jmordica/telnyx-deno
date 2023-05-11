/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MediaStorageDetailRecord = {
    /**
     * Unique identifier for the Media Storage Event
     */
    id?: string;
    /**
     * Event creation time
     */
    created_at?: string;
    /**
     * Asset id
     */
    asset_id?: string;
    /**
     * User id
     */
    user_id?: string;
    /**
     * Organization owner id
     */
    org_id?: string;
    /**
     * Type of action performed against the Media Storage API
     */
    action_type?: string;
    /**
     * Link channel type
     */
    link_channel_type?: string;
    /**
     * Link channel id
     */
    link_channel_id?: string;
    /**
     * Request status
     */
    status?: string;
    /**
     * Webhook id
     */
    webhook_id?: string;
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
    record_type: 'MediaStorageDetailRecord.ts';
};


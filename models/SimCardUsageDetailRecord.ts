/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SimCardUsageDetailRecord = {
    /**
     * Unique identifier for this SIM Card Usage
     */
    id?: string;
    /**
     * Event creation time
     */
    created_at?: string;
    /**
     * Event close time
     */
    closed_at?: string;
    /**
     * Ip address that generated the event
     */
    ip_address?: string;
    /**
     * Number of megabytes downloaded
     */
    downlink_data?: number;
    /**
     * International Mobile Subscriber Identity
     */
    imsi?: string;
    /**
     * Mobile country code
     */
    mcc?: string;
    /**
     * Mobile network code
     */
    mnc?: string;
    /**
     * Telnyx account currency used to describe monetary values, including billing cost
     */
    currency?: string;
    /**
     * Unit of wireless link consumption
     */
    data_unit?: string;
    /**
     * Currency amount per billing unit used to calculate the Telnyx billing cost
     */
    data_rate?: string;
    /**
     * Sim group name for sim card
     */
    sim_group_name?: string;
    /**
     * Unique identifier for SIM card
     */
    sim_card_id?: string;
    /**
     * Unique identifier for SIM group
     */
    sim_group_id?: string;
    /**
     * User-provided tags
     */
    sim_card_tags?: string;
    /**
     * Telephone number associated to SIM card
     */
    phone_number?: string;
    /**
     * Number of megabytes uploaded
     */
    uplink_data?: number;
    /**
     * Data cost
     */
    data_cost?: number;
    record_type: 'SimCardUsageDetailRecord.ts';
};


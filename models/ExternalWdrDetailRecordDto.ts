/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DownlinkData } from './DownlinkData.ts';
import type { UplinkData } from './UplinkData.ts';
import type { WirelessCost } from './WirelessCost.ts';
import type { WirelessRate } from './WirelessRate.ts';

export type ExternalWdrDetailRecordDto = {
    /**
     * WDR id
     */
    id?: string;
    /**
     * Record created time
     */
    created_at?: string;
    cost?: WirelessCost;
    /**
     * Mobile country code.
     */
    mcc?: string;
    /**
     * Mobile network code.
     */
    mnc?: string;
    downlink_data?: DownlinkData;
    /**
     * Session duration in seconds.
     */
    duration_seconds?: number;
    /**
     * International mobile subscriber identity
     */
    imsi?: string;
    rate?: WirelessRate;
    /**
     * Defined sim group name
     */
    sim_group_name?: string;
    /**
     * Sim group unique identifier
     */
    sim_group_id?: string;
    /**
     * Sim card unique identifier
     */
    sim_card_id?: string;
    /**
     * Phone number
     */
    phone_number?: string;
    uplink_data?: UplinkData;
    record_type?: string;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConsumedData } from './ConsumedData.ts';

export type SIMCardGroup = {
    /**
     * Identifies the resource.
     */
    readonly id?: string;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * Indicates whether the SIM card group is the users default group.<br/>The default group is created for the user and can not be removed.
     */
    readonly default?: boolean;
    /**
     * A user friendly name for the SIM card group.
     */
    name?: string;
    /**
     * Upper limit on the amount of data the SIM cards, within the group, can use.
     */
    data_limit?: {
        amount?: string;
        unit?: string;
    };
    consumed_data?: ConsumedData;
    /**
     * The identification of the related Private Wireless Gateway resource.
     */
    private_wireless_gateway_id?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    readonly updated_at?: string;
};


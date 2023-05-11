/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PortingOrderActivationStatus } from './PortingOrderActivationStatus.ts';

export type PortingOrderActivationSettings = {
    /**
     * ISO 8601 formatted Date/Time requested for the FOC date
     */
    foc_datetime_requested?: string;
    /**
     * ISO 8601 formatted Date/Time of the FOC date
     */
    foc_datetime_actual?: string;
    /**
     * Indicates whether this porting order is eligible for FastPort
     */
    readonly fast_port_eligible?: boolean;
    activation_status?: PortingOrderActivationStatus;
};


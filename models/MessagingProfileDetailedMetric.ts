/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessagingProfileMessageTypeMetrics } from './MessagingProfileMessageTypeMetrics.ts';

export type MessagingProfileDetailedMetric = {
    /**
     * The timestamp of the aggregated data.
     */
    readonly timestamp?: string;
    metrics?: Array<MessagingProfileMessageTypeMetrics>;
};


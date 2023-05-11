/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessagingProfileDetailedMetric } from './MessagingProfileDetailedMetric.ts';
import type { MessagingProfileHighLevelMetrics } from './MessagingProfileHighLevelMetrics.ts';

export type MessagingProfileDetailedMetrics = {
    overview?: MessagingProfileHighLevelMetrics;
    detailed?: Array<MessagingProfileDetailedMetric>;
};


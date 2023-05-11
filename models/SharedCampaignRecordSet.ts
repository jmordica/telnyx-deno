/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SharedCampaign } from './SharedCampaign.ts';

export type SharedCampaignRecordSet = {
    page?: number;
    records?: Array<SharedCampaign>;
    totalRecords?: number;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PhoneNumberCampaign } from './PhoneNumberCampaign.ts';

export type PhoneNumberCampaignPaginated = {
    records: Array<PhoneNumberCampaign>;
    page: number;
    totalRecords: number;
};


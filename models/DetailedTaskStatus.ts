/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BrandStatus } from './BrandStatus.ts';
import type { CampaignStatus } from './CampaignStatus.ts';
import type { PhoneNumberStatus } from './PhoneNumberStatus.ts';

export type DetailedTaskStatus = {
    /**
     * The ID of the task associated with bulk Sole Proprietor brand and campaign creation.
     */
    taskId: string;
    /**
     * A user generated unique identifier that keeps track of sole proprietor brand/campaign combinations submitted during bulk creation.
     */
    referenceId: string;
    /**
     * The status of the individual brand submitted via bulk creation.
     */
    brand: Array<BrandStatus>;
    /**
     * The status of the individual campaign submitted via bulk creation.
     */
    campaign: Array<CampaignStatus>;
    phoneNumbers: Array<PhoneNumberStatus>;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreationStatus } from './CreationStatus.ts';

export type CampaignStatus = {
    /**
     * The campaign description.
     */
    description: string;
    /**
     * The current status of the campaign.
     */
    status: CreationStatus;
    /**
     * The ID of the campaign created via bulk creation. This campaign will only have a campaignId after the campaign has been created.
     */
    campaignId?: string;
    /**
     * The date and time that the campaign was created.
     */
    created_at?: string;
    /**
     * Errors related to a campaign creation failure.
     */
    error?: string;
};


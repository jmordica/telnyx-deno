/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CampaignStatusUpdateEvent = {
    /**
     * Brand ID associated with the campaign.
     */
    brandId?: string;
    /**
     * The ID of the campaign.
     */
    campaignId?: string;
    /**
     * Unix timestamp when campaign was created.
     */
    createDate?: string;
    /**
     * Alphanumeric identifier of the CSP associated with this campaign.
     */
    cspId?: string;
    /**
     * Indicates whether the campaign is registered with T-Mobile.
     */
    isTMobileRegistered?: boolean;
};


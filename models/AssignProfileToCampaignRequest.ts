/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AssignProfileToCampaignRequest = {
    /**
     * The ID of the messaging profile that you want to link to the specified campaign.
     */
    messagingProfileId: string;
    /**
     * The TCR ID of the shared campaign you want to link to the specified messaging profile (for campaigns not created using Telnyx 10DLC services only). If you supply this ID in the request, do not also include a campaignId.
     */
    tcrCampaignId?: string;
    /**
     * The ID of the campaign you want to link to the specified messaging profile. If you supply this ID in the request, do not also include a tcrCampaignId.
     */
    campaignId?: string;
};


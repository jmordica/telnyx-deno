/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CampaignSharingStatus } from '../models/CampaignSharingStatus.ts';
import type { SharedCampaignRecordSet } from '../models/SharedCampaignRecordSet.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class SharedCampaignsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Partner Campaigns Shared By User
     * Get all partner campaigns you have shared to Telnyx in a paginated fashion
     *
     * This endpoint is currently limited to only returning shared campaigns that Telnyx
     * has accepted. In other words, shared but pending campaigns are currently omitted
     * from the response from this endpoint.
     * @param page The 1-indexed page number to get. The default value is `1`.
     * @param recordsPerPage The amount of records per page, limited to between 1 and 500 inclusive. The default value is `10`.
     * @returns SharedCampaignRecordSet Successful Response
     * @throws ApiError
     */
    public getPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGet(
        page: number = 1,
        recordsPerPage: number = 10,
    ): CancelablePromise<SharedCampaignRecordSet> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/partnerCampaign/sharedByMe',
            query: {
                'page': page,
                'recordsPerPage': recordsPerPage,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Sharing Status
     * @param campaignId ID of the campaign in question
     * @returns CampaignSharingStatus Successful Response
     * @throws ApiError
     */
    public getSharingStatusPartnerCampaignCampaignIdSharingGet(
        campaignId: string,
    ): CancelablePromise<Record<string, CampaignSharingStatus>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/partnerCampaign/{campaignId}/sharing',
            path: {
                'campaignId': campaignId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Campaign } from '../models/Campaign.ts';
import type { Campaign_CSP } from '../models/Campaign_CSP.ts';
import type { CampaignCost } from '../models/CampaignCost.ts';
import type { CampaignDeletionResponse } from '../models/CampaignDeletionResponse.ts';
import type { CampaignRecordSet_CSP } from '../models/CampaignRecordSet_CSP.ts';
import type { CampaignRequest } from '../models/CampaignRequest.ts';
import type { CampaignSharingChain } from '../models/CampaignSharingChain.ts';
import type { UpdateCampaign } from '../models/UpdateCampaign.ts';
import type { UsecaseMetadata } from '../models/UsecaseMetadata.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class CampaignService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Campaigns
     * Retrieve a list of campaigns associated with a supplied `brandId`.
     * @param brandId
     * @param page The 1-indexed page number to get. The default value is `1`.
     * @param recordsPerPage The amount of records per page, limited to between 1 and 500 inclusive. The default value is `10`.
     * @returns CampaignRecordSet_CSP Successful Response
     * @throws ApiError
     */
    public listCampaignsCampaignGet(
        brandId: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): CancelablePromise<CampaignRecordSet_CSP> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/campaign',
            query: {
                'brandId': brandId,
                'page': page,
                'recordsPerPage': recordsPerPage,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Accept Shared Campaign
     * Manually accept a campaign shared with Telnyx
     * @param campaignId TCR's ID for the campaign to import
     * @returns any Successful Response
     * @throws ApiError
     */
    public acceptSharedCampaignCampaignAcceptSharingCampaignIdPost(
        campaignId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/campaign/acceptSharing/{campaignId}',
            path: {
                'campaignId': campaignId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Campaign Cost
     * @param usecase
     * @returns CampaignCost Successful Response
     * @throws ApiError
     */
    public getCampaignCostCampaignUsecaseCostGet(
        usecase: string,
    ): CancelablePromise<CampaignCost> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/campaign/usecase/cost',
            query: {
                'usecase': usecase,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Deactivate My Campaign
     * Terminate a campaign. Note that once deactivated, a campaign cannot be restored.
     * @param campaignId
     * @returns CampaignDeletionResponse Successful Response
     * @throws ApiError
     */
    public deactivateMyCampaignCampaignCampaignIdDelete(
        campaignId: string,
    ): CancelablePromise<CampaignDeletionResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/campaign/{campaignId}',
            path: {
                'campaignId': campaignId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get My Campaign
     * Retrieve campaign details by `campaignId`.
     * @param campaignId
     * @returns Campaign_CSP Successful Response
     * @throws ApiError
     */
    public getMyCampaignCampaignCampaignIdGet(
        campaignId: string,
    ): CancelablePromise<Campaign_CSP> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/campaign/{campaignId}',
            path: {
                'campaignId': campaignId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update My Campaign
     * Update a campaign's properties by `campaignId`. **Please note:** only sample messages are editable.
     * @param campaignId
     * @param requestBody
     * @returns Campaign Successful Response
     * @throws ApiError
     */
    public updateMyCampaignCampaignCampaignIdPut(
        campaignId: string,
        requestBody: UpdateCampaign,
    ): CancelablePromise<Campaign> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/campaign/{campaignId}',
            path: {
                'campaignId': campaignId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Campaign Mno Metadata
     * Get the campaign metadata for each MNO it was submitted to
     * @param campaignId ID of the campaign in question
     * @returns any Successful Response
     * @throws ApiError
     */
    public getCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet(
        campaignId: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/campaign/{campaignId}/mnoMetadata',
            path: {
                'campaignId': campaignId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get My Campaign Operation Status
     * Retrieve campaign's operation status at MNO level.
     * @param campaignId
     * @returns any Successful Response
     * @throws ApiError
     */
    public getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet(
        campaignId: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/campaign/{campaignId}/operationStatus',
            path: {
                'campaignId': campaignId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get My Osr Campaign Attributes
     * @param campaignId
     * @returns any Successful Response
     * @throws ApiError
     */
    public getMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGet(
        campaignId: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/campaign/{campaignId}/osr/attributes',
            path: {
                'campaignId': campaignId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Sharing Status
     * @param campaignId ID of the campaign in question
     * @returns CampaignSharingChain Successful Response
     * @throws ApiError
     */
    public getSharingStatusCampaignCampaignIdSharingGet(
        campaignId: string,
    ): CancelablePromise<CampaignSharingChain> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/campaign/{campaignId}/sharing',
            path: {
                'campaignId': campaignId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Submit Campaign
     * Before creating a campaign, use the [Qualify By Usecase endpoint](https://developers.telnyx.com/docs/api/v2/10dlc/Campaign#qualify_by_usecase_campaignBuilder_brand__brand_id__usecase__usecase__get) to ensure that the brand you want to assign a new campaign to is qualified for the desired use case of that campaign. **Please note:** After campaign creation, you'll only be able to edit the campaign's sample messages. Creating a campaign will entail an upfront, non-refundable three month's cost that will depend on the campaign's use case ([see 10DLC Costs section for details](https://developers.telnyx.com/docs/api/v2/10dlc)).
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public submitCampaignCampaignBuilderPost(
        requestBody: CampaignRequest,
    ): CancelablePromise<(Record<string, any> | Campaign_CSP)> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/campaignBuilder',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Qualify By Usecase
     * This endpoint allows you to see whether or not the supplied brand is suitable for your desired campaign use case.
     * @param usecase
     * @param brandId
     * @returns UsecaseMetadata Successful Response
     * @throws ApiError
     */
    public qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet(
        usecase: string,
        brandId: string,
    ): CancelablePromise<UsecaseMetadata> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/campaignBuilder/brand/{brandId}/usecase/{usecase}',
            path: {
                'usecase': usecase,
                'brandId': brandId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}

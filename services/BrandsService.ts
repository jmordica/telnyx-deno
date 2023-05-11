/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrandFeedback } from '../models/BrandFeedback.ts';
import type { BrandRecordSetCSP } from '../models/BrandRecordSetCSP.ts';
import type { CreateBrand } from '../models/CreateBrand.ts';
import type { ExternalVetting } from '../models/ExternalVetting.ts';
import type { ImportExternalVetting } from '../models/ImportExternalVetting.ts';
import type { OrderExternalVetting } from '../models/OrderExternalVetting.ts';
import type { TelnyxBrand } from '../models/TelnyxBrand.ts';
import type { UpdateBrand } from '../models/UpdateBrand.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class BrandsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Brands
     * This endpoint is used to list all brands associated with your organization.
     * @param page
     * @param recordsPerPage number of records per page. maximum of 500
     * @param displayName
     * @param entityType
     * @param state
     * @param country
     * @returns BrandRecordSetCSP Successful Response
     * @throws ApiError
     */
    public listBrandsBrandGet(
        page: number = 1,
        recordsPerPage: number = 10,
        displayName?: string,
        entityType?: string,
        state?: string,
        country?: string,
    ): CancelablePromise<BrandRecordSetCSP> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/brand',
            query: {
                'page': page,
                'recordsPerPage': recordsPerPage,
                'displayName': displayName,
                'entityType': entityType,
                'state': state,
                'country': country,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Brand
     * This endpoint is used to create a new brand. A brand is an entity created by The Campaign Registry (TCR) that represents an organization or a company. It is this entity that TCR created campaigns will be associated with. Each brand creation will entail an upfront, non-refundable $4 expense.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createBrandBrandPost(
        requestBody: CreateBrand,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/brand',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Brand Feedback By Id
     * Get feedback about a brand by ID. This endpoint can be used after creating or revetting
     * a brand.
     *
     * Possible values for `.category[].id`:
     *
     * * `TAX_ID` - Data mismatch related to tax id and its associated properties.
     * * `STOCK_SYMBOL` - Non public entity registered as a public for profit entity or
     * the stock information mismatch.
     * * `GOVERNMENT_ENTITY` - Non government entity registered as a government entity.
     * Must be a U.S. government entity.
     * * `NONPROFIT` - Not a recognized non-profit entity. No IRS tax-exempt status
     * found.
     * * `OTHERS` - Details of the data misrepresentation if any.
     * @param brandId
     * @returns BrandFeedback Successful Response
     * @throws ApiError
     */
    public getBrandFeedbackByIdBrandFeedbackBrandIdGet(
        brandId: string,
    ): CancelablePromise<BrandFeedback> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/brand/feedback/{brandId}',
            path: {
                'brandId': brandId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Brand
     * @param brandId
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteBrandBrandBrandIdDelete(
        brandId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/brand/{brandId}',
            path: {
                'brandId': brandId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Brand
     * Retrieve a brand by `brandId`.
     * @param brandId
     * @returns TelnyxBrand Successful Response
     * @throws ApiError
     */
    public getBrandBrandBrandIdGet(
        brandId: string,
    ): CancelablePromise<TelnyxBrand> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/brand/{brandId}',
            path: {
                'brandId': brandId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Brand
     * Update a brand's attributes by `brandId`.
     * @param brandId
     * @param requestBody
     * @returns TelnyxBrand Successful Response
     * @throws ApiError
     */
    public updateBrandBrandBrandIdPut(
        brandId: string,
        requestBody: UpdateBrand,
    ): CancelablePromise<TelnyxBrand> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/brand/{brandId}',
            path: {
                'brandId': brandId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * List External Vettings
     * Get list of valid external vetting record for a given brand
     * @param brandId
     * @returns any Successful Response
     * @throws ApiError
     */
    public listExternalVettingsBrandBrandIdExternalVettingGet(
        brandId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/brand/{brandId}/externalVetting',
            path: {
                'brandId': brandId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Order Brand External Vetting
     * Order new external vetting for a brand
     * @param brandId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public orderBrandExternalVettingBrandBrandIdExternalVettingPost(
        brandId: string,
        requestBody: OrderExternalVetting,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/brand/{brandId}/externalVetting',
            path: {
                'brandId': brandId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Import External Vetting Record
     * This operation can be used to import an external vetting record from a TCR-approved
     * vetting provider. If the vetting provider confirms validity of the record, it will be
     * saved with the brand and will be considered for future campaign qualification.
     * @param brandId
     * @param requestBody
     * @returns ExternalVetting Successful Response
     * @throws ApiError
     */
    public importExternalVettingRecordBrandBrandIdExternalVettingPut(
        brandId: string,
        requestBody: ImportExternalVetting,
    ): CancelablePromise<ExternalVetting> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/brand/{brandId}/externalVetting',
            path: {
                'brandId': brandId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Revet Brand
     * This operation allows you to revet the brand. However, revetting is allowed once after the successful brand registration and thereafter limited to once every 3 months.
     * @param brandId
     * @returns any Successful Response
     * @throws ApiError
     */
    public revetBrandBrandBrandIdRevetPut(
        brandId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/brand/{brandId}/revet',
            path: {
                'brandId': brandId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}

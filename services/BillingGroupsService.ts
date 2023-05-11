/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingGroup } from '../models/BillingGroup.ts';
import type { Errors } from '../models/Errors.ts';
import type { NewBillingGroup } from '../models/NewBillingGroup.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { UpdateBillingGroup } from '../models/UpdateBillingGroup.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class BillingGroupsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all billing groups
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any A paginated array of billing groups
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listBillingGroups(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<BillingGroup>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/billing_groups',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Create a billing group
     * @param requestBody New billing group object
     * @returns any Expected billing group response to a valid request
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createBillingGroup(
        requestBody: NewBillingGroup,
    ): CancelablePromise<{
        data?: BillingGroup;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/billing_groups',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a billing group
     * @param id The id of the billing group
     * @returns any Expected billing group response to a valid request
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteBillingGroup(
        id: string,
    ): CancelablePromise<{
        data?: BillingGroup;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/billing_groups/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve a billing group
     * @param id The id of the billing group
     * @returns any Expected billing group response to a valid request
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveBillingGroup(
        id: string,
    ): CancelablePromise<{
        data?: BillingGroup;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/billing_groups/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a billing group
     * @param id The id of the billing group
     * @param requestBody Update billing group object
     * @returns any Expected billing group response to a valid request
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateBillingGroup(
        id: string,
        requestBody: UpdateBillingGroup,
    ): CancelablePromise<{
        data?: BillingGroup;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/billing_groups/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessIdentity } from '../models/BusinessIdentity.ts';
import type { CreateOrUpdateBusinessIdentityRequest } from '../models/CreateOrUpdateBusinessIdentityRequest.ts';
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class BusinessIdentityService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Lists the Business Identities owned by the current user/organization
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of Business Identities.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listBusinessIdentities(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<BusinessIdentity>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/business_identities',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Creates a Business Identity
     * Creates a new Business Identity.
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any Business Identity was created.
     * @throws ApiError
     */
    public createBusinessIdentity(
        requestBody: CreateOrUpdateBusinessIdentityRequest,
    ): CancelablePromise<Errors | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/business_identities',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a Business Identity
     * Deletes the Business Identity. This action will fail if any verification requests have been made for any associated Display Profile. Please contact support@telnyx.com in case you want to delete a Business Identity in that situation.
     * @param id Identifies the Business Identity
     * @returns any Successful response with a Business Identity.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteBusinessIdentity(
        id: string,
    ): CancelablePromise<{
        data?: BusinessIdentity;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/business_identities/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display the Business Identity
     * @param id Identifies the Business Identity
     * @returns any Successful response with a Business Identity.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public displayBusinessIdentity(
        id: string,
    ): CancelablePromise<{
        data?: BusinessIdentity;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/business_identities/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a Business Identity
     * Update an existing Business Identity.
     * @param id Identifies the Business Identity
     * @param requestBody
     * @returns any Business Identity was updated.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateBusinessIdentity(
        id: string,
        requestBody: CreateOrUpdateBusinessIdentityRequest,
    ): CancelablePromise<any | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/business_identities/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}

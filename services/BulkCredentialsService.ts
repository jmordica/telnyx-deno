/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkCredentialRequest } from '../models/BulkCredentialRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class BulkCredentialsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete several credentials
     * Delete several credentials in bulk.
     * @param filterTag Filter by tag, required by bulk operations.
     * @returns any Successful response for Bulk credential requests
     * @throws ApiError
     */
    public deleteBulkTelephonyCredential(
        filterTag: string,
    ): CancelablePromise<{
        data?: {
            /**
             * Amount of credentials affected
             */
            credentials?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/actions/bulk/telephony_credentials',
            query: {
                'filter[tag]': filterTag,
            },
            errors: {
                422: `Bad request`,
            },
        });
    }

    /**
     * Update several credentials
     * Update several credentials in bulk.
     * @param filterTag Filter by tag, required by bulk operations.
     * @param requestBody Parameters to update credentials on bulk
     * @returns any Successful response for Bulk credential requests
     * @throws ApiError
     */
    public updateBulkTelephonyCredential(
        filterTag: string,
        requestBody: BulkCredentialRequest,
    ): CancelablePromise<{
        data?: {
            /**
             * Amount of credentials affected
             */
            credentials?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/actions/bulk/telephony_credentials',
            query: {
                'filter[tag]': filterTag,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Bad request`,
            },
        });
    }

    /**
     * Creates several credentials
     * Creates several credentials in bulk.
     * @param requestBody Requested parameters to create credentials on bulk
     * @returns any Successful response for Bulk credential requests
     * @throws ApiError
     */
    public createBulkTelephonyCredential(
        requestBody: BulkCredentialRequest,
    ): CancelablePromise<{
        data?: {
            /**
             * Amount of credentials affected
             */
            credentials?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/actions/bulk/telephony_credentials',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Bad request`,
            },
        });
    }

    /**
     * Perform activate or deactivate action on all credentials filtered by the provided tag.
     * Perform activate or deactivate action on all credentials filtered by the provided tag. Activate action will change the status to active, making it possible to connect calls with the credential. Deactivate action will change the status to inactive, making it impossible to connect calls with the credential.
     * @param action Identifies the action to be taken. Activate will change the status to active. Deactivate will change the status to inactive.
     * @param filterTag Filter by tag, required by bulk operations.
     * @returns any Successful response for Bulk credential requests
     * @throws ApiError
     */
    public bulkCredentialAction(
        action: 'activate' | 'deactivate',
        filterTag: string,
    ): CancelablePromise<{
        data?: {
            /**
             * Amount of credentials affected
             */
            credentials?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/actions/{action}/telephony_credentials',
            path: {
                'action': action,
            },
            query: {
                'filter[tag]': filterTag,
            },
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Bad request`,
            },
        });
    }

}

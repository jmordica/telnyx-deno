/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAndroidPushCredentialRequest } from '../models/CreateAndroidPushCredentialRequest.ts';
import type { CreateIosPushCredentialRequest } from '../models/CreateIosPushCredentialRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class PushCredentialsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List mobile push credentials
     * List mobile push credentials
     * @param filterType type of mobile push credentials
     * @param filterAlias Unique mobile push credential alias
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     * @returns any Mobile mobile push credentials
     * @throws ApiError
     */
    public listPushCredentials(
        filterType?: 'ios' | 'android',
        filterAlias?: string,
        pageSize: number = 20,
        pageNumber: number = 1,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/mobile_push_credentials',
            query: {
                'filter[type]': filterType,
                'filter[alias]': filterAlias,
                'page[size]': pageSize,
                'page[number]': pageNumber,
            },
            errors: {
                401: `Unauthorized request`,
            },
        });
    }

    /**
     * Creates a new mobile push credential
     * Creates a new mobile push credential
     * @param requestBody Mobile push credential parameters that need to be sent in the request
     * @returns any Mobile push credential created
     * @throws ApiError
     */
    public createPushCredential(
        requestBody: (CreateIosPushCredentialRequest | CreateAndroidPushCredentialRequest),
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/mobile_push_credentials',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized request`,
                422: `Unable to process request`,
            },
        });
    }

    /**
     * Deletes a mobile push credential
     * Deletes a mobile push credential based on the given `push_credential_id`
     * @param pushCredentialId The unique identifier of a mobile push credential
     * @returns void
     * @throws ApiError
     */
    public deletePushCredentialById(
        pushCredentialId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/mobile_push_credentials/{push_credential_id}',
            path: {
                'push_credential_id': pushCredentialId,
            },
            errors: {
                401: `Unauthorized request`,
                404: `Resource not found`,
                422: `Unable to process request`,
            },
        });
    }

    /**
     * Retrieves a mobile push credential
     * Retrieves mobile push credential based on the given `push_credential_id`
     * @param pushCredentialId The unique identifier of a mobile push credential
     * @returns any Successful get mobile push credential response
     * @throws ApiError
     */
    public getPushCredentialById(
        pushCredentialId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/mobile_push_credentials/{push_credential_id}',
            path: {
                'push_credential_id': pushCredentialId,
            },
            errors: {
                401: `Unauthorized request`,
                404: `Resource not found`,
                422: `Unable to process request`,
            },
        });
    }

}

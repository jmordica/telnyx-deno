/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { TelephonyCredential } from '../models/TelephonyCredential.ts';
import type { TelephonyCredentialCreateRequest } from '../models/TelephonyCredentialCreateRequest.ts';
import type { TelephonyCredentialUpdateRequest } from '../models/TelephonyCredentialUpdateRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class CredentialsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all credentials
     * List all On-demand Credentials.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterTag Filter by tag
     * @param filterName Filter by name
     * @param filterStatus Filter by status
     * @param filterResourceId Filter by resource_id
     * @param filterSipUsername Filter by sip_username
     * @returns any Successful response with multiple credentials
     * @throws ApiError
     */
    public findTelephonyCredentials(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterTag?: string,
        filterName?: string,
        filterStatus?: string,
        filterResourceId?: string,
        filterSipUsername?: string,
    ): CancelablePromise<{
        data?: Array<TelephonyCredential>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/telephony_credentials',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[tag]': filterTag,
                'filter[name]': filterName,
                'filter[status]': filterStatus,
                'filter[resource_id]': filterResourceId,
                'filter[sip_username]': filterSipUsername,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Create a credential
     * Create a credential.
     * @param requestBody Parameters that can be defined during credential creation
     * @returns any Successful response with details about a credential
     * @throws ApiError
     */
    public createTelephonyCredential(
        requestBody: TelephonyCredentialCreateRequest,
    ): CancelablePromise<{
        data?: TelephonyCredential;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/telephony_credentials',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Bad request`,
            },
        });
    }

    /**
     * List all tags
     * Returns a list of tags used on Credentials
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with multiple tags
     * @throws ApiError
     */
    public listTags(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<{
            tag?: string;
            amount?: number;
        }>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/telephony_credentials/tags',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Delete a credential
     * Delete an existing credential.
     * @param id Identifies the resource.
     * @returns any Successful response with details about a credential
     * @throws ApiError
     */
    public deleteTelephonyCredential(
        id: string,
    ): CancelablePromise<{
        data?: TelephonyCredential;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/telephony_credentials/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Bad request`,
            },
        });
    }

    /**
     * Get a credential
     * Get the details of an existing On-demand Credential.
     * @param id Identifies the resource.
     * @returns any Successful response with details about a credential
     * @throws ApiError
     */
    public getTelephonyCredential(
        id: string,
    ): CancelablePromise<{
        data?: TelephonyCredential;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/telephony_credentials/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Update a credential
     * Update an existing credential.
     * @param id Identifies the resource.
     * @param requestBody Parameters that can be updated in a credential
     * @returns any Successful response with details about a credential
     * @throws ApiError
     */
    public updateTelephonyCredential(
        id: string,
        requestBody: TelephonyCredentialUpdateRequest,
    ): CancelablePromise<{
        data?: TelephonyCredential;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/telephony_credentials/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Bad request`,
            },
        });
    }

    /**
     * Perform activate or deactivate action on provided Credential
     * Perform activate or deactivate action on provided Credential. Activate action will change the status to active, making it possible to connect calls with the credential. Deactivate action will change the status to inactive, making it impossible to connect calls with the credential.
     * @param id Identifies the resource.
     * @param action Identifies the action to be taken.
     * @returns any Successful response with details about a credential
     * @throws ApiError
     */
    public telephonyCredentialAction(
        id: string,
        action: 'activate' | 'deactivate',
    ): CancelablePromise<{
        data?: TelephonyCredential;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/telephony_credentials/{id}/actions/{action}',
            path: {
                'id': id,
                'action': action,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                404: `Resource not found`,
            },
        });
    }

}

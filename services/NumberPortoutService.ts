/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Metadata } from '../models/Metadata.ts';
import type { PortoutComment } from '../models/PortoutComment.ts';
import type { PortoutDetails } from '../models/PortoutDetails.ts';
import type { PortOutSupportingDocument } from '../models/PortOutSupportingDocument.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class NumberPortoutService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List portout requests
     * Returns the portout requests according to filters
     * @param filterCarrierName Filter by new carrier name.
     * @param filterSpid Filter by new carrier spid.
     * @param filterStatus Filter by portout status.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Portout Response
     * @throws ApiError
     */
    public listPortoutRequest(
        filterCarrierName?: string,
        filterSpid?: string,
        filterStatus?: 'pending' | 'authorized' | 'ported' | 'rejected' | 'rejected-pending' | 'canceled',
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<PortoutDetails>;
        meta?: Metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/portouts',
            query: {
                'filter[carrier_name]': filterCarrierName,
                'filter[spid]': filterSpid,
                'filter[status]': filterStatus,
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Get a portout request
     * Returns the portout request based on the ID provided
     * @param id Portout id
     * @returns any Portout Response
     * @throws ApiError
     */
    public findPortoutRequest(
        id: string,
    ): CancelablePromise<{
        data?: PortoutDetails;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/portouts/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * List all comments for a portout request
     * Returns a list of comments for a portout request.
     * @param id Portout id
     * @returns any Portout Comments
     * @throws ApiError
     */
    public findPortoutComments(
        id: string,
    ): CancelablePromise<{
        data?: Array<PortoutComment>;
        meta?: Metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/portouts/{id}/comments',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Create a comment on a portout request
     * Creates a comment on a portout request.
     * @param id Portout id
     * @param requestBody
     * @returns any Portout Comment Response
     * @throws ApiError
     */
    public postPortRequestComment(
        id: string,
        requestBody: {
            /**
             * Comment to post on this portout request
             */
            body?: string;
        },
    ): CancelablePromise<{
        data?: PortoutComment;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/portouts/{id}/comments',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * List supporting documents on a portout request
     * List every supporting documents for a portout request.
     * @param id Portout id
     * @returns any Portout Supporting Documents
     * @throws ApiError
     */
    public getPortRequestSupportingDocuments(
        id: string,
    ): CancelablePromise<{
        data?: Array<PortOutSupportingDocument>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/portouts/{id}/supporting_documents',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Create a list of supporting documents on a portout request
     * Creates a list of supporting documents on a portout request.
     * @param id Portout id
     * @param requestBody
     * @returns any Portout Supporting Documents
     * @throws ApiError
     */
    public postPortRequestSupportingDocuments(
        id: string,
        requestBody: {
            /**
             * List of supporting documents parameters
             */
            documents?: Array<{
                /**
                 * Identifies the type of the document
                 */
                type: 'loa' | 'invoice.ts';
                /**
                 * Identifies the associated document
                 */
                document_id: string;
            }>;
        },
    ): CancelablePromise<{
        data?: Array<PortOutSupportingDocument>;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/portouts/{id}/supporting_documents',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Update Status
     * Authorize or reject portout request
     * @param id Portout id
     * @param status Updated portout status
     * @param requestBody
     * @returns any Portout Response
     * @throws ApiError
     */
    public updatePortoutRequest(
        id: string,
        status: 'authorized' | 'rejected-pending',
        requestBody: {
            /**
             * Provide a reason if rejecting the port out request
             */
            reason?: string;
        },
    ): CancelablePromise<{
        data?: PortoutDetails;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/portouts/{id}/{status}',
            path: {
                'id': id,
                'status': status,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

}

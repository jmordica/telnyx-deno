/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateMessagingHostedNumberOrderRequest } from '../models/CreateMessagingHostedNumberOrderRequest.ts';
import type { Errors } from '../models/Errors.ts';
import type { HostedNumber } from '../models/HostedNumber.ts';
import type { MessagingHostedNumberOrder } from '../models/MessagingHostedNumberOrder.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { UploadFileMessagingHostedNumberOrderRequest } from '../models/UploadFileMessagingHostedNumberOrderRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class MessagingHostedNumberService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List messaging hosted number orders
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of messaging hosted number orders.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listMessagingHostedNumberOrder(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<MessagingHostedNumberOrder>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messaging_hosted_number_orders',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Create a messaging hosted number order
     * @param requestBody Message payload
     * @returns any Successful response with details about a messaging hosted number order.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createMessagingHostedNumberOrder(
        requestBody?: CreateMessagingHostedNumberOrderRequest,
    ): CancelablePromise<{
        data?: MessagingHostedNumberOrder;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/messaging_hosted_number_orders',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a messaging hosted number order
     * @param id Identifies the type of resource.
     * @returns any Successful response with details about a messaging hosted number order.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveMessagingHostedNumberOrder(
        id: string,
    ): CancelablePromise<{
        data?: MessagingHostedNumberOrder;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messaging_hosted_number_orders/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Upload file required for a messaging hosted number order
     * @param id Identifies the type of resource.
     * @param formData Message payload
     * @returns any Successful response with details about a messaging hosted number order.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public uploadFileMessagingHostedNumberOrder(
        id: string,
        formData?: UploadFileMessagingHostedNumberOrderRequest,
    ): CancelablePromise<{
        data?: MessagingHostedNumberOrder;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/messaging_hosted_number_orders/{id}/actions/file_upload',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete a messaging hosted number
     * @param id Identifies the type of resource.
     * @returns any Successful response with details about a messaging hosted number.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteMessagingHostedNumber(
        id: string,
    ): CancelablePromise<{
        data?: HostedNumber;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/messaging_hosted_numbers/{id}',
            path: {
                'id': id,
            },
        });
    }

}

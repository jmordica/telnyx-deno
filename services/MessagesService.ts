/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateLongCodeMessageRequest } from '../models/CreateLongCodeMessageRequest.ts';
import type { CreateMessageRequest } from '../models/CreateMessageRequest.ts';
import type { CreateNumberPoolMessageRequest } from '../models/CreateNumberPoolMessageRequest.ts';
import type { CreateShortCodeMessageRequest } from '../models/CreateShortCodeMessageRequest.ts';
import type { Errors } from '../models/Errors.ts';
import type { OutboundMessagePayload } from '../models/OutboundMessagePayload.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class MessagesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Send a message
     * Send a message with a Phone Number, Alphanumeric Sender ID, Short Code or Number Pool.
     *
     * This endpoint allows you to send a message with any messaging resource.
     * Current messaging resources include: long-code, short-code, number-pool, and
     * alphanumeric-sender-id.
     *
     * @param requestBody Message payload
     * @returns any Successful response with details about a message.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createMessage(
        requestBody?: CreateMessageRequest,
    ): CancelablePromise<{
        data?: OutboundMessagePayload;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/messages',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Send a long code message
     * @param requestBody Message payload
     * @returns any Successful response with details about a message.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createLongCodeMessage(
        requestBody?: CreateLongCodeMessageRequest,
    ): CancelablePromise<{
        data?: OutboundMessagePayload;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/messages/long_code',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Send a message using number pool
     * @param requestBody Message payload
     * @returns any Successful response with details about a message.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createNumberPoolMessage(
        requestBody?: CreateNumberPoolMessageRequest,
    ): CancelablePromise<{
        data?: OutboundMessagePayload;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/messages/number_pool',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Send a short code message
     * @param requestBody Message payload
     * @returns any Successful response with details about a message.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createShortCodeMessage(
        requestBody?: CreateShortCodeMessageRequest,
    ): CancelablePromise<{
        data?: OutboundMessagePayload;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/messages/short_code',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a message
     * Note: This API endpoint can only retrieve messages that are no older than 10 days since their creation. If you require messages older than this, please generate an [MDR report.](https://developers.telnyx.com/docs/api/v1/reports/MDR-Reports)
     * @param id The id of the message
     * @returns any Successful response with details about a message.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveMessage(
        id: string,
    ): CancelablePromise<{
        data?: OutboundMessagePayload;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messages/{id}',
            path: {
                'id': id,
            },
        });
    }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateWhatsAppMessageRequest } from '../models/CreateWhatsAppMessageRequest.ts';
import type { Errors } from '../models/Errors.ts';
import type { MarkMessageAsReadRequestBody } from '../models/MarkMessageAsReadRequestBody.ts';
import type { Message } from '../models/Message.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class WhatsAppMessagesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Send Message
     * Send text messages, media/documents, and message templates to your customers.
     * @param requestBody
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public sendMessage(
        requestBody: CreateWhatsAppMessageRequest,
    ): CancelablePromise<{
        data?: Message;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/whatsapp_messages',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Mark Message As Read
     * Mark a message as read.
     * @param messageId Message ID from Webhook
     * @param requestBody
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public markMessageAsRead(
        messageId: string,
        requestBody: MarkMessageAsReadRequestBody,
    ): CancelablePromise<Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/whatsapp_messages/{message_id}',
            path: {
                'message_id': messageId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}

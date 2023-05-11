/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginationMetaSimple } from '../models/PaginationMetaSimple.ts';
import type { webhook_delivery } from '../models/webhook_delivery.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class WebhooksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List webhook deliveries
     * Lists webhook_deliveries for the authenticated user
     * @param filterStatusEq Return only webhook_deliveries matching the given `status`
     * @param filterEventType Return only webhook_deliveries matching the given value of `event_type`. Accepts multiple values separated by a `,`.
     * @param filterWebhookContains Return only webhook deliveries whose `webhook` component contains the given text
     * @param filterAttemptsContains Return only webhook_deliveries whose `attempts` component contains the given text
     * @param filterStartedAtGte Return only webhook_deliveries whose delivery started later than or at given ISO 8601 datetime
     * @param filterStartedAtLte Return only webhook_deliveries whose delivery started earlier than or at given ISO 8601 datetime
     * @param filterFinishedAtGte Return only webhook_deliveries whose delivery finished later than or at given ISO 8601 datetime
     * @param filterFinishedAtLte Return only webhook_deliveries whose delivery finished earlier than or at given ISO 8601 datetime
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any A paginated array of webhook_delivery attempts
     * @throws ApiError
     */
    public getWebhookDeliveries(
        filterStatusEq?: 'delivered' | 'failed',
        filterEventType?: string,
        filterWebhookContains?: string,
        filterAttemptsContains?: string,
        filterStartedAtGte?: string,
        filterStartedAtLte?: string,
        filterFinishedAtGte?: string,
        filterFinishedAtLte?: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<webhook_delivery>;
        meta?: PaginationMetaSimple;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/webhook_deliveries',
            query: {
                'filter[status][eq]': filterStatusEq,
                'filter[event_type]': filterEventType,
                'filter[webhook][contains]': filterWebhookContains,
                'filter[attempts][contains]': filterAttemptsContains,
                'filter[started_at][gte]': filterStartedAtGte,
                'filter[started_at][lte]': filterStartedAtLte,
                'filter[finished_at][gte]': filterFinishedAtGte,
                'filter[finished_at][lte]': filterFinishedAtLte,
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Find webhook_delivery details by ID
     * Provides webhook_delivery debug data, such as timestamps, delivery status and attempts.
     * @param id Uniquely identifies the webhook_delivery.
     * @returns any Webhook delivery record.
     * @throws ApiError
     */
    public getWebhookDelivery(
        id: string,
    ): CancelablePromise<{
        data?: webhook_delivery;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/webhook_deliveries/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `WebhookDelivery not found`,
            },
        });
    }

}

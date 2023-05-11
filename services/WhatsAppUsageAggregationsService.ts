/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WhatsAppUsageAggregationsResponseContainer } from '../models/WhatsAppUsageAggregationsResponseContainer.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class WhatsAppUsageAggregationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Generate and fetch WhatsApp usage aggregations synchronously. This endpoint will both generate and fetch the WhatsApp aggregations over a specified time period.
     * @param startDate
     * @param endDate
     * @returns WhatsAppUsageAggregationsResponseContainer Successful
     * @throws ApiError
     */
    public getUsageAggregationsSync(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<WhatsAppUsageAggregationsResponseContainer> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/whatsapp_usage_aggregations',
            query: {
                'start_date': startDate,
                'end_date': endDate,
            },
        });
    }

}

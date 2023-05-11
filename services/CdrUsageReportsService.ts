/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CdrGetSyncUsageReportResponse } from '../models/CdrGetSyncUsageReportResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class CdrUsageReportsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Generate and fetch voice usage report synchronously. This endpoint will both generate and fetch the voice report over a specified time period. No polling is necessary but the response may take up to a couple of minutes.
     * @param aggregationType
     * @param productBreakdown
     * @param startDate
     * @param endDate
     * @param connections
     * @returns CdrGetSyncUsageReportResponse Successful
     * @throws ApiError
     */
    public getUsageReportSync(
        aggregationType: 'NO_AGGREGATION' | 'CONNECTION' | 'TAG' | 'BILLING_GROUP',
        productBreakdown: 'NO_BREAKDOWN' | 'DID_VS_TOLL_FREE' | 'COUNTRY' | 'DID_VS_TOLL_FREE_PER_COUNTRY',
        startDate?: string,
        endDate?: string,
        connections?: Array<number>,
    ): CancelablePromise<CdrGetSyncUsageReportResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/cdr_usage_reports/sync',
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'aggregation_type': aggregationType,
                'product_breakdown': productBreakdown,
                'connections': connections,
            },
        });
    }

}

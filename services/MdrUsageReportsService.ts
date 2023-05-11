/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MdrDeleteUsageReportsResponse } from '../models/MdrDeleteUsageReportsResponse.ts';
import type { MdrGetSyncUsageReportResponse } from '../models/MdrGetSyncUsageReportResponse.ts';
import type { MdrGetUsageReportsByIdResponse } from '../models/MdrGetUsageReportsByIdResponse.ts';
import type { MdrGetUsageReportsResponse } from '../models/MdrGetUsageReportsResponse.ts';
import type { MdrPostUsageReportRequest } from '../models/MdrPostUsageReportRequest.ts';
import type { MdrPostUsageReportsResponse } from '../models/MdrPostUsageReportsResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class MdrUsageReportsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Fetch all messaging usage reports. Usage reports are aggregated messaging data for specified time period and breakdown
     * @param pageNumber Page number
     * @param pageSize Size of the page
     * @returns MdrGetUsageReportsResponse Successful
     * @throws ApiError
     */
    public getUsageReports(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<MdrGetUsageReportsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/mdr_usage_reports',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Submit request for new new messaging usage report. This endpoint will pull and aggregate messaging data in specified time period.
     * @param requestBody Mdr usage report data
     * @returns MdrPostUsageReportsResponse Successful
     * @throws ApiError
     */
    public submitUsageReport(
        requestBody: MdrPostUsageReportRequest,
    ): CancelablePromise<MdrPostUsageReportsResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/reports/mdr_usage_reports',
            body: requestBody,
            mediaType: '*/*',
        });
    }

    /**
     * Generate and fetch messaging usage report synchronously. This endpoint will both generate and fetch the messaging report over a specified time period. No polling is necessary but the response may take up to a couple of minutes.
     * @param aggregationType
     * @param startDate
     * @param endDate
     * @param profiles
     * @returns MdrGetSyncUsageReportResponse Successful
     * @throws ApiError
     */
    public getUsageReportSync1(
        aggregationType: 'NO_AGGREGATION' | 'PROFILE' | 'TAGS',
        startDate?: string,
        endDate?: string,
        profiles?: Array<string>,
    ): CancelablePromise<MdrGetSyncUsageReportResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/mdr_usage_reports/sync',
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'aggregation_type': aggregationType,
                'profiles': profiles,
            },
        });
    }

    /**
     * Delete messaging usage report by id
     * @param id
     * @returns MdrDeleteUsageReportsResponse Successful
     * @throws ApiError
     */
    public deleteUsageReport(
        id: any,
    ): CancelablePromise<MdrDeleteUsageReportsResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/reports/mdr_usage_reports/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Fetch a single messaging usage report by id
     * @param id
     * @returns MdrGetUsageReportsByIdResponse Successful
     * @throws ApiError
     */
    public getUsageReport(
        id: any,
    ): CancelablePromise<MdrGetUsageReportsByIdResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/mdr_usage_reports/{id}',
            path: {
                'id': id,
            },
        });
    }

}

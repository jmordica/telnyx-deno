/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { WdrReport } from '../models/WdrReport.ts';
import type { WdrReportRequest } from '../models/WdrReportRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class ReportingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all Wireless Detail Records (WDRs) Reports
     * Returns the WDR Reports that match the given parameters.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public getWdrReports(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<WdrReport>;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wireless/detail_records_reports',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Create a Wireless Detail Records (WDRs) Report
     * Asynchronously create a report containing Wireless Detail Records (WDRs) for the SIM cards that consumed wireless data in the given time period.
     *
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any Successful response
     * @throws ApiError
     */
    public createWdrReport(
        requestBody: WdrReportRequest,
    ): CancelablePromise<Errors | {
        data?: WdrReport;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wireless/detail_records_reports',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Delete a Wireless Detail Record (WDR) Report
     * Deletes one specific WDR report
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteWdrReport(
        id: string,
    ): CancelablePromise<{
        data?: WdrReport;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/wireless/detail_records_reports/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Get a Wireless Detail Record (WDR) Report
     * Returns one specific WDR report
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public getWdrReport(
        id: string,
    ): CancelablePromise<{
        data?: WdrReport;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wireless/detail_records_reports/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

}

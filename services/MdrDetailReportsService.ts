/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MdrDeleteDetailReportResponse } from '../models/MdrDeleteDetailReportResponse.ts';
import type { MdrGetDetailReportByIdResponse } from '../models/MdrGetDetailReportByIdResponse.ts';
import type { MdrGetDetailReportResponse } from '../models/MdrGetDetailReportResponse.ts';
import type { MdrGetDetailResponse } from '../models/MdrGetDetailResponse.ts';
import type { MdrPostDetailReportRequest } from '../models/MdrPostDetailReportRequest.ts';
import type { MdrPostDetailReportResponse } from '../models/MdrPostDetailReportResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class MdrDetailReportsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Fetch all previous requests for messaging detail reports. Messaging detail reports are reports for pulling all messaging records.
     * @param pageNumber Page number
     * @param pageSize Size of the page
     * @returns MdrGetDetailReportResponse Successful
     * @throws ApiError
     */
    public getCdrRequests(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<MdrGetDetailReportResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/batch_mdr_reports',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Submit a request for new messaging detail report. Messaging detail report pulls all raw messaging data according to defined filters.
     * @param requestBody Mdr detail request data
     * @returns MdrPostDetailReportResponse Successful
     * @throws ApiError
     */
    public submitMdrRequest(
        requestBody: MdrPostDetailReportRequest,
    ): CancelablePromise<MdrPostDetailReportResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/reports/batch_mdr_reports',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete generated messaging detail report by id
     * @param id
     * @returns MdrDeleteDetailReportResponse Successful
     * @throws ApiError
     */
    public deleteMdrRequest(
        id: any,
    ): CancelablePromise<MdrDeleteDetailReportResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/reports/batch_mdr_reports/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Fetch single messaging detail report by id.
     * @param id
     * @returns MdrGetDetailReportByIdResponse Successful
     * @throws ApiError
     */
    public getMdrRequest(
        id: any,
    ): CancelablePromise<MdrGetDetailReportByIdResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/batch_mdr_reports/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Fetch all Mdr records
     * @param startDate Pagination start date
     * @param endDate Pagination end date
     * @param id
     * @param direction
     * @param profile
     * @param cld
     * @param cli
     * @param status
     * @param messageType
     * @returns MdrGetDetailResponse Successful
     * @throws ApiError
     */
    public getPaginatedMdrs(
        startDate?: string,
        endDate?: string,
        id?: string,
        direction?: 'INBOUND' | 'OUTBOUND',
        profile?: string,
        cld?: string,
        cli?: string,
        status?: 'GW_TIMEOUT' | 'DELIVERED' | 'DLR_UNCONFIRMED' | 'DLR_TIMEOUT' | 'RECEIVED' | 'GW_REJECT' | 'FAILED',
        messageType?: 'SMS' | 'MMS',
    ): CancelablePromise<MdrGetDetailResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/mdrs',
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'id': id,
                'direction': direction,
                'profile': profile,
                'cld': cld,
                'cli': cli,
                'status': status,
                'message_type': messageType,
            },
        });
    }

}

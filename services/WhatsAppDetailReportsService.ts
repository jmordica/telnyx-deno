/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WhatsAppDetailReportResponse } from '../models/WhatsAppDetailReportResponse.ts';
import type { WhatsAppGetAllDetailReportResponse } from '../models/WhatsAppGetAllDetailReportResponse.ts';
import type { WhatsAppReportsReq } from '../models/WhatsAppReportsReq.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class WhatsAppDetailReportsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Fetch all previous requests for WhatsApp detail reports. WhatsApp detail reports are reports for pulling all WhatsApp records.
     * @param pageNumber Page number
     * @param pageSize Size of the page
     * @returns WhatsAppGetAllDetailReportResponse Successful
     * @throws ApiError
     */
    public getRequests(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<WhatsAppGetAllDetailReportResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/whatsapp_detail_record_reports',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Submit a request for new WhatsApp detail report. WhatsApp detail report pulls all raw WhatsApp data according to defined filters.
     * @param requestBody WhatsApp detail request data
     * @returns WhatsAppDetailReportResponse Successful
     * @throws ApiError
     */
    public submitRequest(
        requestBody: WhatsAppReportsReq,
    ): CancelablePromise<WhatsAppDetailReportResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/whatsapp_detail_record_reports',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete generated WhatsApp detail report by id
     * @param id
     * @returns WhatsAppDetailReportResponse Successful
     * @throws ApiError
     */
    public deleteRequest(
        id: any,
    ): CancelablePromise<WhatsAppDetailReportResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/whatsapp_detail_record_reports/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Fetch single whatsapp detail report by id.
     * @param id
     * @returns WhatsAppDetailReportResponse Successful
     * @throws ApiError
     */
    public getRequest(
        id: any,
    ): CancelablePromise<WhatsAppDetailReportResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/whatsapp_detail_record_reports/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

}

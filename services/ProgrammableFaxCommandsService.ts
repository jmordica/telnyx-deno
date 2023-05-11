/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { Fax } from '../models/Fax.ts';
import type { SendFaxRequest } from '../models/SendFaxRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class ProgrammableFaxCommandsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * View a list of faxes
     * @param filterCreatedAtGte ISO 8601 date time for filtering faxes created after or on that date
     * @param filterCreatedAtGt ISO 8601 date time for filtering faxes created after that date
     * @param filterCreatedAtLte ISO 8601 formatted date time for filtering faxes created on or before that date
     * @param filterCreatedAtLt ISO 8601 formatted date time for filtering faxes created before that date
     * @param filterDirectionEq The direction, inbound or outbound, for filtering faxes sent from this account
     * @param filterFromEq The phone number, in E.164 format for filtering faxes sent from this number
     * @param pageSize Number of fax resourcxes for the single page returned
     * @param pageNumber Number of the page to be retrieved
     * @returns any List faxes response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listFaxes(
        filterCreatedAtGte?: string,
        filterCreatedAtGt?: string,
        filterCreatedAtLte?: string,
        filterCreatedAtLt?: string,
        filterDirectionEq?: string,
        filterFromEq?: string,
        pageSize?: number,
        pageNumber?: number,
    ): CancelablePromise<{
        data?: Array<Fax>;
        meta?: Record<string, any>;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/faxes',
            query: {
                'filter[created_at][gte]': filterCreatedAtGte,
                'filter[created_at][gt]': filterCreatedAtGt,
                'filter[created_at][lte]': filterCreatedAtLte,
                'filter[created_at][lt]': filterCreatedAtLt,
                'filter[direction][eq]': filterDirectionEq,
                'filter[from][eq]': filterFromEq,
                'page[size]': pageSize,
                'page[number]': pageNumber,
            },
        });
    }

    /**
     * Send a fax
     * Send a fax. Files have size limits and page count limit validations. If a file is bigger than 50MB or has more than 350 pages it will fail with `file_size_limit_exceeded` and `page_count_limit_exceeded` respectively.
     *
     * **Expected Webhooks:**
     *
     * - `fax.queued`
     * - `fax.media.processed`
     * - `fax.sending.started`
     * - `fax.delivered`
     * - `fax.failed`
     *
     * @param requestBody Send fax request
     * @returns Errors Unexpected error
     * @returns any Send fax response
     * @throws ApiError
     */
    public sendFax(
        requestBody: SendFaxRequest,
    ): CancelablePromise<Errors | {
        data?: Fax;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/faxes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a fax
     * @param id The unique identifier of a fax.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteFax(
        id: string,
    ): CancelablePromise<Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/faxes/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * View a fax
     * @param id The unique identifier of a fax.
     * @returns any Get fax response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public viewFax(
        id: string,
    ): CancelablePromise<{
        data?: Fax;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/faxes/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Cancel a fax
     * Cancel the outbound fax that is in one of the following states: `queued`, `media.processed`, `originated` or `sending`
     * @param id The unique identifier of a fax.
     * @returns Errors Unexpected error
     * @returns any Successful response upon accepting cancel fax command
     * @throws ApiError
     */
    public cancelFax(
        id: string,
    ): CancelablePromise<Errors | {
        result?: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/faxes/{id}/actions/cancel',
            path: {
                'id': id,
            },
            errors: {
                404: `Conference does not exist`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Refresh a fax
     * Refreshes the inbound fax's media_url when it has expired
     * @param id The unique identifier of a fax.
     * @returns any Refresh fax response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public refreshFax(
        id: string,
    ): CancelablePromise<{
        result?: string;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/faxes/{id}/actions/refresh',
            path: {
                'id': id,
            },
            errors: {
                404: `Conference does not exist`,
            },
        });
    }

}

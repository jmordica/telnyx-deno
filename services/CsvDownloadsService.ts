/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CsvDownload } from '../models/CsvDownload.ts';
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class CsvDownloadsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List CSV downloads
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of CSV downloads.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listCsvDownloads(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<CsvDownload>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_numbers/csv_downloads',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Create a CSV download
     * @returns any Successful response with details about a CSV download.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createCsvDownload(): CancelablePromise<{
        data?: Array<CsvDownload>;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/phone_numbers/csv_downloads',
        });
    }

    /**
     * Retrieve a CSV download
     * @param id Identifies the CSV download.
     * @returns any Successful response with details about a CSV download.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveCsvDownload(
        id: string,
    ): CancelablePromise<{
        data?: Array<CsvDownload>;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_numbers/csv_downloads/{id}',
            path: {
                'id': id,
            },
        });
    }

}

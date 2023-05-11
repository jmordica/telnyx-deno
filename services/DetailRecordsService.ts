/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DetailRecordsSearchResponse } from '../models/DetailRecordsSearchResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class DetailRecordsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Search detail records
     * Search for any detail record across the Telnyx Platform. Examples and additional information found [here](/docs/v2/debugging/detail-record-search).
     * @param filterRecordType Filter by the given record type.
     * @param filterDateRange Filter by the given user-friendly date range. You can specify one of the following enum values, or a dynamic one using this format: last_N_days.
     * @param filter Filter records on a given record attribute and value. <br/>Example: filter[status]=delivered
     * @param pageNumber Page number
     * @param pageSize Page size
     * @param sort Specifies the sort order for results. <br/>Example: sort=-created_at
     * @returns DetailRecordsSearchResponse Successful
     * @throws ApiError
     */
    public detailRecordsSearch(
        filterRecordType: 'amd' | 'conference' | 'conference-participant' | 'media_storage' | 'messaging' | 'verify' | 'whatsapp' | 'whatsapp-conversation' | 'wireless',
        filterDateRange?: 'yesterday' | 'today' | 'tomorrow' | 'last_week' | 'this_week' | 'next_week' | 'last_month' | 'this_month' | 'next_month',
        filter?: Record<string, any>,
        pageNumber: number = 1,
        pageSize: number = 20,
        sort?: Array<string>,
    ): CancelablePromise<DetailRecordsSearchResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/detail_records',
            query: {
                'filter[record_type]': filterRecordType,
                'filter[date_range]': filterDateRange,
                'filter': filter,
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'sort': sort,
            },
        });
    }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalWdrGetDetailResponse } from '../models/ExternalWdrGetDetailResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class WdrDetailReportsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Fetch all Wdr records
     * @param startDate Start date
     * @param endDate End date
     * @param id
     * @param mcc
     * @param mnc
     * @param imsi
     * @param simGroupName
     * @param simGroupId
     * @param simCardId
     * @param phoneNumber
     * @param pageNumber Page number
     * @param pageSize Size of the page
     * @param sort
     * @returns ExternalWdrGetDetailResponse Successful
     * @throws ApiError
     */
    public getPaginatedWdrs(
        startDate?: string,
        endDate?: string,
        id?: string,
        mcc?: string,
        mnc?: string,
        imsi?: string,
        simGroupName?: string,
        simGroupId?: string,
        simCardId?: string,
        phoneNumber?: string,
        pageNumber: number = 1,
        pageSize: number = 20,
        sort?: Array<string>,
    ): CancelablePromise<ExternalWdrGetDetailResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/wdrs',
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'id': id,
                'mcc': mcc,
                'mnc': mnc,
                'imsi': imsi,
                'sim_group_name': simGroupName,
                'sim_group_id': simGroupId,
                'sim_card_id': simCardId,
                'phone_number': phoneNumber,
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'sort': sort,
            },
        });
    }

}

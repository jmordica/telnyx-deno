/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessIPRangeListResponseSchema } from '../models/AccessIPRangeListResponseSchema.ts';
import type { AccessIPRangePOST } from '../models/AccessIPRangePOST.ts';
import type { AccessIPRangeResponseSchema } from '../models/AccessIPRangeResponseSchema.ts';
import type { CloudflareSyncStatus } from '../models/CloudflareSyncStatus.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class IpRangesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all Access IP Ranges
     * @param filterCidrBlock
     * @param filterCidrBlockStartswith
     * @param filterCidrBlockEndswith
     * @param filterCidrBlockContains
     * @param filterStatus
     * @param filterCreatedAtGt
     * @param filterCreatedAtLt
     * @param pageNumber
     * @param pageSize
     * @returns AccessIPRangeListResponseSchema Successful Response
     * @throws ApiError
     */
    public accessIpRangeList(
        filterCidrBlock?: string,
        filterCidrBlockStartswith?: string,
        filterCidrBlockEndswith?: string,
        filterCidrBlockContains?: string,
        filterStatus?: CloudflareSyncStatus,
        filterCreatedAtGt?: string,
        filterCreatedAtLt?: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<AccessIPRangeListResponseSchema> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/access_ip_ranges',
            query: {
                'filter[cidr_block]': filterCidrBlock,
                'filter[cidr_block][startswith]': filterCidrBlockStartswith,
                'filter[cidr_block][endswith]': filterCidrBlockEndswith,
                'filter[cidr_block][contains]': filterCidrBlockContains,
                'filter[status]': filterStatus,
                'filter[created_at][gt]': filterCreatedAtGt,
                'filter[created_at][lt]': filterCreatedAtLt,
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create new Access IP Range
     * @param requestBody
     * @returns AccessIPRangeResponseSchema Successful Response
     * @throws ApiError
     */
    public accessIpRangeCreate(
        requestBody: AccessIPRangePOST,
    ): CancelablePromise<AccessIPRangeResponseSchema> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/access_ip_ranges',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete access IP ranges
     * @param accessIpRangeId
     * @returns AccessIPRangeResponseSchema Successful Response
     * @throws ApiError
     */
    public deleteAccessIpRanges(
        accessIpRangeId: string,
    ): CancelablePromise<AccessIPRangeResponseSchema> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/access_ip_ranges/{access_ip_range_id}',
            path: {
                'access_ip_range_id': accessIpRangeId,
            },
        });
    }

}

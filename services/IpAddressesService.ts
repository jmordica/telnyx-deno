/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessIPAddressListResponseSchema } from '../models/AccessIPAddressListResponseSchema.ts';
import type { AccessIPAddressPOST } from '../models/AccessIPAddressPOST.ts';
import type { AccessIPAddressResponseSchema } from '../models/AccessIPAddressResponseSchema.ts';
import type { CloudflareSyncStatus } from '../models/CloudflareSyncStatus.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class IpAddressesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all Access IP Addresses
     * @param filterIpSource
     * @param filterIpAddress
     * @param filterStatus
     * @param filterCreatedAtGt
     * @param filterCreatedAtLt
     * @param pageNumber
     * @param pageSize
     * @returns AccessIPAddressListResponseSchema Successful Response
     * @throws ApiError
     */
    public accessIpAddressList(
        filterIpSource?: string,
        filterIpAddress?: string,
        filterStatus?: CloudflareSyncStatus,
        filterCreatedAtGt?: string,
        filterCreatedAtLt?: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<AccessIPAddressListResponseSchema> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/access_ip_address',
            query: {
                'filter[ip_source]': filterIpSource,
                'filter[ip_address]': filterIpAddress,
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
     * Create new Access IP Address
     * @param requestBody
     * @returns AccessIPAddressResponseSchema Successful Response
     * @throws ApiError
     */
    public accessIpAddressCreate(
        requestBody: AccessIPAddressPOST,
    ): CancelablePromise<AccessIPAddressResponseSchema> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/access_ip_address',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete access IP address
     * @param accessIpAddressId
     * @returns AccessIPAddressResponseSchema Successful Response
     * @throws ApiError
     */
    public accessIpAddressDelete(
        accessIpAddressId: string,
    ): CancelablePromise<AccessIPAddressResponseSchema> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/access_ip_address/{access_ip_address_id}',
            path: {
                'access_ip_address_id': accessIpAddressId,
            },
        });
    }

    /**
     * Retrieve an access IP address
     * @param accessIpAddressId
     * @returns AccessIPAddressResponseSchema Successful Response
     * @throws ApiError
     */
    public accessIpAddressGet(
        accessIpAddressId: string,
    ): CancelablePromise<AccessIPAddressResponseSchema> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/access_ip_address/{access_ip_address_id}',
            path: {
                'access_ip_address_id': accessIpAddressId,
            },
        });
    }

}

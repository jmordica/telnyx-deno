/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DynamicEmergencyAddress } from '../models/DynamicEmergencyAddress.ts';
import type { Metadata } from '../models/Metadata.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class DynamicEmergencyAddressesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List dynamic emergency addresses
     * Returns the dynamic emergency addresses according to filters
     * @param filterStatus Filter by status.
     * @param filterCountryCode Filter by country code.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Dynamic Emergency Address Responses
     * @throws ApiError
     */
    public listDyanmicEmergencyAddresses(
        filterStatus?: 'pending' | 'activated' | 'rejected',
        filterCountryCode?: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<DynamicEmergencyAddress>;
        meta?: Metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dynamic_emergency_addresses',
            query: {
                'filter[status]': filterStatus,
                'filter[country_code]': filterCountryCode,
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Create a dynamic emergency address.
     * Creates a dynamic emergency address.
     * @param requestBody
     * @returns any Dynamic Emergency Address Response
     * @throws ApiError
     */
    public createDyanmicEmergencyAddress(
        requestBody: DynamicEmergencyAddress,
    ): CancelablePromise<{
        data?: DynamicEmergencyAddress;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dynamic_emergency_addresses',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Delete a dynamic emergency address
     * Deletes the dynamic emergency address based on the ID provided
     * @param id Dynamic Emergency Address id
     * @returns any Dynamic Emergency Address Response
     * @throws ApiError
     */
    public deleteDynamicEmergencyAddress(
        id: string,
    ): CancelablePromise<{
        data?: DynamicEmergencyAddress;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/dynamic_emergency_addresses/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Get a dynamic emergency address
     * Returns the dynamic emergency address based on the ID provided
     * @param id Dynamic Emergency Address id
     * @returns any Dynamic Emergency Address Response
     * @throws ApiError
     */
    public getDynamicEmergencyAddress(
        id: string,
    ): CancelablePromise<{
        data?: DynamicEmergencyAddress;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dynamic_emergency_addresses/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

}

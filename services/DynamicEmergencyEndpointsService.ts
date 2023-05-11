/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DynamicEmergencyEndpoint } from '../models/DynamicEmergencyEndpoint.ts';
import type { Metadata } from '../models/Metadata.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class DynamicEmergencyEndpointsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List dynamic emergency endpoints
     * Returns the dynamic emergency endpoints according to filters
     * @param filterStatus Filter by status.
     * @param filterCountryCode Filter by country code.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Dynamic Emergency Endpoints Responses
     * @throws ApiError
     */
    public listDyanmicEmergencyEndpoints(
        filterStatus?: 'pending' | 'activated' | 'rejected',
        filterCountryCode?: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<DynamicEmergencyEndpoint>;
        meta?: Metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dynamic_emergency_endpoints',
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
     * Create a dynamic emergency endpoint.
     * Creates a dynamic emergency endpoints.
     * @param requestBody
     * @returns any Dynamic Emergency Endpoint Response
     * @throws ApiError
     */
    public createDyanmicEmergencyEndpoint(
        requestBody: DynamicEmergencyEndpoint,
    ): CancelablePromise<{
        data?: DynamicEmergencyEndpoint;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dynamic_emergency_endpoints',
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
     * Delete a dynamic emergency endpoint
     * Deletes the dynamic emergency endpoint based on the ID provided
     * @param id Dynamic Emergency Endpoint id
     * @returns any Dynamic Emergency Endpoint Response
     * @throws ApiError
     */
    public deleteDynamicEmergencyEndpoint(
        id: string,
    ): CancelablePromise<{
        data?: DynamicEmergencyEndpoint;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/dynamic_emergency_endpoints/{id}',
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
     * Get a dynamic emergency endpoint
     * Returns the dynamic emergency endpoint based on the ID provided
     * @param id Dynamic Emergency Endpoint id
     * @returns any Dynamic Emergency Endpoint Response
     * @throws ApiError
     */
    public getDynamicEmergencyEndpoint(
        id: string,
    ): CancelablePromise<{
        data?: DynamicEmergencyEndpoint;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dynamic_emergency_endpoints/{id}',
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

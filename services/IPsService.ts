/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateIpRequest } from '../models/CreateIpRequest.ts';
import type { Ip } from '../models/Ip.ts';
import type { UpdateIpRequest } from '../models/UpdateIpRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class IPsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Ips
     * Get all IPs belonging to the user that match the given filters.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterConnectionId ID of the IP Connection to which this IP should be attached.
     * @param filterIpAddress IP adddress represented by this resource.
     * @param filterPort Port to use when connecting to this IP.
     * @returns any Successful response with a list of IPs.
     * @throws ApiError
     */
    public listIps(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterConnectionId?: string,
        filterIpAddress?: string,
        filterPort?: number,
    ): CancelablePromise<{
        data?: Array<Ip>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ips',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[connection_id]': filterConnectionId,
                'filter[ip_address]': filterIpAddress,
                'filter[port]': filterPort,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create an Ip
     * Create a new IP object.
     * @param requestBody
     * @returns any Successful response with details about an IP.
     * @throws ApiError
     */
    public createIp(
        requestBody?: CreateIpRequest,
    ): CancelablePromise<{
        data?: Ip;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ips',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete an Ip
     * Delete an IP.
     * @param id Identifies the type of resource.
     * @returns any Successful response with details about an IP.
     * @throws ApiError
     */
    public deleteIp(
        id: string,
    ): CancelablePromise<{
        data?: Ip;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ips/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Retrieve an Ip
     * Return the details regarding a specific IP.
     * @param id Identifies the type of resource.
     * @returns any Successful response with details about an IP.
     * @throws ApiError
     */
    public retrieveIp(
        id: string,
    ): CancelablePromise<{
        data?: Ip;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ips/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update an Ip
     * Update the details of a specific IP.
     * @param id Identifies the type of resource.
     * @param requestBody
     * @returns any Successful response with details about an IP.
     * @throws ApiError
     */
    public updateIp(
        id: string,
        requestBody?: UpdateIpRequest,
    ): CancelablePromise<{
        data?: Ip;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/ips/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
            },
        });
    }

}

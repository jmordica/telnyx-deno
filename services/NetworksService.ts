/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { InterfaceStatus } from '../models/InterfaceStatus.ts';
import type { Network } from '../models/Network.ts';
import type { NetworkCreate } from '../models/NetworkCreate.ts';
import type { NetworkInterface } from '../models/NetworkInterface.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class NetworksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all Networks
     * List all Networks.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterName The network name to filter on.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public networkList(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterName?: string,
    ): CancelablePromise<{
        data?: Array<Network>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/networks',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[name]': filterName,
            },
        });
    }

    /**
     * Create a Network
     * Create a new Network.
     * @param requestBody
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public networkCreate(
        requestBody: NetworkCreate,
    ): CancelablePromise<{
        data?: Network;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/networks',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Delete a Network
     * Delete a Network.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public networkDelete(
        id: string,
    ): CancelablePromise<{
        data?: Network;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/networks/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve a Network
     * Retrieve a Network.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public networkGet(
        id: string,
    ): CancelablePromise<{
        data?: Network;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/networks/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a Network
     * Update a Network.
     * @param id Identifies the resource.
     * @param requestBody
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public networkUpdate(
        id: string,
        requestBody: NetworkCreate,
    ): CancelablePromise<{
        data?: Network;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/networks/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List all Interfaces for a Network.
     * List all Interfaces for a Network.
     * @param id Identifies the resource.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterName The interface name to filter on.
     * @param filterType The interface type to filter on.
     * @param filterStatus The interface status to filter on.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public networkInterfaceList(
        id: string,
        pageNumber: number = 1,
        pageSize: number = 20,
        filterName?: string,
        filterType?: string,
        filterStatus?: InterfaceStatus,
    ): CancelablePromise<{
        data?: Array<NetworkInterface>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/networks/{id}/network_interfaces',
            path: {
                'id': id,
            },
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[name]': filterName,
                'filter[type]': filterType,
                'filter[status]': filterStatus,
            },
        });
    }

}

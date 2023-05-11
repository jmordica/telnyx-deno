/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFqdnConnectionRequest } from '../models/CreateFqdnConnectionRequest.ts';
import type { FqdnConnection } from '../models/FqdnConnection.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { UpdateFqdnConnectionRequest } from '../models/UpdateFqdnConnectionRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class FqdnConnectionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List FQDN connections
     * Returns a list of your FQDN connections.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterConnectionNameContains If present, connections with <code>connection_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>
     * That is: <ul>
     * <li>
     * <code>connection_name</code>: sorts the result by the
     * <code>connection_name</code> field in ascending order.
     * </li>
     *
     * <li>
     * <code>-connection_name</code>: sorts the result by the
     * <code>connection_name</code> field in descending order.
     * </li>
     * </ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.
     * @returns any Successful response with a list of FQDN connections.
     * @throws ApiError
     */
    public listFqdnConnections(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterConnectionNameContains: string = null,
        sort: 'created_at' | 'connection_name' | 'active' = 'created_at',
    ): CancelablePromise<{
        data?: Array<FqdnConnection>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fqdn_connections',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[connection_name][contains]': filterConnectionNameContains,
                'sort': sort,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Create an FQDN connection
     * Creates a FQDN connection.
     * @param requestBody Parameters that can be defined during FQDN connection creation
     * @returns any Successful response with details about an FQDN connection.
     * @throws ApiError
     */
    public createFqdnConnection(
        requestBody: CreateFqdnConnectionRequest,
    ): CancelablePromise<{
        data?: FqdnConnection;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fqdn_connections',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Bad request`,
            },
        });
    }

    /**
     * Delete an FQDN connection
     * Deletes an FQDN connection.
     * @param id FQDN Connection ID
     * @returns any Successful response with details about an FQDN connection.
     * @throws ApiError
     */
    public deleteFqdnConnection(
        id: string,
    ): CancelablePromise<{
        data?: FqdnConnection;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fqdn_connections/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Bad request`,
            },
        });
    }

    /**
     * Retrieve an FQDN connection
     * Retrieves the details of an existing FQDN connection.
     * @param id FQDN Connection ID
     * @returns any Successful response with details about an FQDN connection.
     * @throws ApiError
     */
    public retrieveFqdnConnection(
        id: string,
    ): CancelablePromise<{
        data?: FqdnConnection;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fqdn_connections/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Bad request`,
            },
        });
    }

    /**
     * Update an FQDN connection
     * Updates settings of an existing FQDN connection.
     * @param id FQDN Connection ID
     * @param requestBody Parameters that can be updated in a FQDN connection
     * @returns any Successful response with details about an FQDN connection.
     * @throws ApiError
     */
    public updateFqdnConnection(
        id: string,
        requestBody: UpdateFqdnConnectionRequest,
    ): CancelablePromise<{
        data?: FqdnConnection;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/fqdn_connections/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Bad request`,
            },
        });
    }

}

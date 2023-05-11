/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateIpConnectionRequest } from '../models/CreateIpConnectionRequest.ts';
import type { IpConnection } from '../models/IpConnection.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { UpdateIpConnectionRequest } from '../models/UpdateIpConnectionRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class IpConnectionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Ip connections
     * Returns a list of your IP connections.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterConnectionNameContains If present, connections with <code>connection_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @param filterOutboundOutboundVoiceProfileId Identifies the associated outbound voice profile.
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
     * @returns any Successful response with a list of IP connections.
     * @throws ApiError
     */
    public listIpConnections(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterConnectionNameContains: string = null,
        filterOutboundOutboundVoiceProfileId?: string,
        sort: 'created_at' | 'connection_name' | 'active' = 'created_at',
    ): CancelablePromise<{
        data?: Array<IpConnection>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ip_connections',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[connection_name][contains]': filterConnectionNameContains,
                'filter[outbound.outbound_voice_profile_id]': filterOutboundOutboundVoiceProfileId,
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
     * Create an Ip connection
     * Creates an IP connection.
     * @param requestBody Parameters that can be defined during IP connection creation
     * @returns any Successful response with details about an IP connection.
     * @throws ApiError
     */
    public createIpConnection(
        requestBody: CreateIpConnectionRequest,
    ): CancelablePromise<{
        data?: IpConnection;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ip_connections',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Bad request`,
            },
        });
    }

    /**
     * Delete an Ip connection
     * Deletes an existing IP connection.
     * @param id Identifies the type of resource.
     * @returns any Successful response with details about an IP connection.
     * @throws ApiError
     */
    public deleteIpConnection(
        id: string,
    ): CancelablePromise<{
        data?: IpConnection;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ip_connections/{id}',
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
     * Retrieve an Ip connection
     * Retrieves the details of an existing ip connection.
     * @param id IP Connection ID
     * @returns any Successful response with details about an IP connection.
     * @throws ApiError
     */
    public retrieveIpConnection(
        id: string,
    ): CancelablePromise<{
        data?: IpConnection;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ip_connections/{id}',
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
     * Update an Ip connection
     * Updates settings of an existing IP connection.
     * @param id Identifies the type of resource.
     * @param requestBody Parameters that can be updated in a IP connection
     * @returns any Successful response with details about an IP connection.
     * @throws ApiError
     */
    public updateIpConnection(
        id: string,
        requestBody: UpdateIpConnectionRequest,
    ): CancelablePromise<{
        data?: IpConnection;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/ip_connections/{id}',
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

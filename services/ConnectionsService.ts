/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Connection } from '../models/Connection.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class ConnectionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List connections
     * Returns a list of your connections irrespective of type.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterConnectionNameContains If present, connections with <code>connection_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @param filterOutboundVoiceProfileId Identifies the associated outbound voice profile.
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
     * @returns any Successful response with a list of connections.
     * @throws ApiError
     */
    public listConnections(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterConnectionNameContains: string = null,
        filterOutboundVoiceProfileId?: string,
        sort: 'created_at' | 'connection_name' | 'active' = 'created_at',
    ): CancelablePromise<{
        data?: Array<Connection>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/connections',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[connection_name][contains]': filterConnectionNameContains,
                'filter[outbound_voice_profile_id]': filterOutboundVoiceProfileId,
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
     * Retrieve a connection
     * Retrieves the high-level details of an existing connection. To retrieve specific authentication information, use the endpoint for the specific connection type.
     * @param id IP Connection ID
     * @returns any Successful response with details about a connection.
     * @throws ApiError
     */
    public retrieveConnection(
        id: string,
    ): CancelablePromise<{
        data?: Connection;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/connections/{id}',
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

}

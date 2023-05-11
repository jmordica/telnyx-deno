/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCredentialConnectionRequest } from '../models/CreateCredentialConnectionRequest.ts';
import type { CredentialConnection } from '../models/CredentialConnection.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { UpdateCredentialConnectionRequest } from '../models/UpdateCredentialConnectionRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class CredentialConnectionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List credential connections
     * Returns a list of your credential connections.
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
     * @returns any Successful response with a list of credential connections.
     * @throws ApiError
     */
    public listCredentialConnections(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterConnectionNameContains: string = null,
        filterOutboundOutboundVoiceProfileId?: string,
        sort: 'created_at' | 'connection_name' | 'active' = 'created_at',
    ): CancelablePromise<{
        data?: Array<CredentialConnection>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/credential_connections',
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
     * Create a credential connection
     * Creates a credential connection.
     * @param requestBody Parameters that can be defined during credential connection creation
     * @returns any Successful response with details about a credential connection.
     * @throws ApiError
     */
    public createCredentialConnection(
        requestBody: CreateCredentialConnectionRequest,
    ): CancelablePromise<{
        data?: CredentialConnection;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/credential_connections',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Bad request`,
            },
        });
    }

    /**
     * Delete a credential connection
     * Deletes an existing credential connection.
     * @param id Identifies the resource.
     * @returns any Successful response with details about a credential connection.
     * @throws ApiError
     */
    public deleteCredentialConnection(
        id: string,
    ): CancelablePromise<{
        data?: CredentialConnection;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/credential_connections/{id}',
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
     * Retrieve a credential connection
     * Retrieves the details of an existing credential connection.
     * @param id Identifies the resource.
     * @returns any Successful response with details about a credential connection.
     * @throws ApiError
     */
    public retrieveCredentialConnection(
        id: string,
    ): CancelablePromise<{
        data?: CredentialConnection;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/credential_connections/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Update a credential connection
     * Updates settings of an existing credential connection.
     * @param id Identifies the resource.
     * @param requestBody Parameters that can be updated in a credential connection
     * @returns any Successful response with details about a credential connection.
     * @throws ApiError
     */
    public updateCredentialConnection(
        id: string,
        requestBody: UpdateCredentialConnectionRequest,
    ): CancelablePromise<{
        data?: CredentialConnection;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/credential_connections/{id}',
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

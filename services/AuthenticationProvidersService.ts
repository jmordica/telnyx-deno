/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticationProvider } from '../models/AuthenticationProvider.ts';
import type { AuthenticationProviderCreate } from '../models/AuthenticationProviderCreate.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { UpdateAuthenticationProviderRequest } from '../models/UpdateAuthenticationProviderRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class AuthenticationProvidersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all SSO authentication providers
     * Returns a list of your SSO authentication providers.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>
     * That is: <ul>
     * <li>
     * <code>name</code>: sorts the result by the
     * <code>name</code> field in ascending order.
     * </li>
     *
     * <li>
     * <code>-name</code>: sorts the result by the
     * <code>name</code> field in descending order.
     * </li>
     * </ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.
     * @returns any Successful response
     * @throws ApiError
     */
    public findAuthenticationProviders(
        pageNumber: number = 1,
        pageSize: number = 20,
        sort: 'name' | '-name' | 'short_name' | '-short_name' | 'active' | '-active' | 'created_at' | '-created_at' | 'updated_at' | '-updated_at' = '-created_at',
    ): CancelablePromise<{
        data?: Array<AuthenticationProvider>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/authentication_providers',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
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
     * Creates an authentication provider
     * Creates an authentication provider.
     * @param requestBody Parameters that can be defined during authentication provider creation
     * @returns any Successful response
     * @throws ApiError
     */
    public createAuthenticationProvider(
        requestBody: AuthenticationProviderCreate,
    ): CancelablePromise<{
        data?: AuthenticationProvider;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/authentication_providers',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Bad request`,
            },
        });
    }

    /**
     * Deletes an authentication provider
     * Deletes an existing authentication provider.
     * @param id authentication provider ID
     * @returns any Successful response
     * @throws ApiError
     */
    public deleteAuthenticationProvider(
        id: string,
    ): CancelablePromise<{
        data?: AuthenticationProvider;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/authentication_providers/{id}',
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
     * Retrieve an authentication provider
     * Retrieves the details of an existing authentication provider.
     * @param id authentication provider ID
     * @returns any Successful response
     * @throws ApiError
     */
    public getAuthenticationProvider(
        id: string,
    ): CancelablePromise<{
        data?: AuthenticationProvider;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/authentication_providers/{id}',
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
     * Update a authentication provider
     * Updates settings of an existing authentication provider.
     * @param id Identifies the resource.
     * @param requestBody Parameters that can be updated in a authentication provider
     * @returns any Successful response
     * @throws ApiError
     */
    public updateAuthenticationProvider(
        id: string,
        requestBody: UpdateAuthenticationProviderRequest,
    ): CancelablePromise<{
        data?: AuthenticationProvider;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/authentication_providers/{id}',
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

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateManagedAccountRequest } from '../models/CreateManagedAccountRequest.ts';
import type { ManagedAccount } from '../models/ManagedAccount.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { UpdateManagedAccountRequest } from '../models/UpdateManagedAccountRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class ManagedAccountsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Lists accounts managed by the current user.
     * Lists the accounts managed by the current user. Users need to be explictly approved by Telnyx in order to become manager accounts.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterEmailContains If present, email containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @param filterEmailEq If present, only returns results with the <code>email</code> matching exactly the value given.
     * @param filterOrganizationNameContains If present, only returns results with the <code>organization_name</code> containing the given value. Matching is not case-sensitive. Requires at least three characters.
     * @param filterOrganizationNameEq If present, only returns results with the <code>organization_name</code> matching the exact value given.
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>
     * That is: <ul>
     * <li>
     * <code>email</code>: sorts the result by the
     * <code>email</code> field in ascending order.
     * </li>
     *
     * <li>
     * <code>-email</code>: sorts the result by the
     * <code>email</code> field in descending order.
     * </li>
     * </ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.
     * @param includeCancelledAccounts Specifies if cancelled accounts should be included in the results.
     * @returns any Successful response with a list of managed accounts.
     * @throws ApiError
     */
    public listManagedAccounts(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterEmailContains: string = 'null',
        filterEmailEq: string = 'null',
        filterOrganizationNameContains: string = 'null',
        filterOrganizationNameEq: string = 'null',
        sort: 'created_at' | 'email' = 'created_at',
        includeCancelledAccounts: boolean = "false",
    ): CancelablePromise<{
        data?: Array<ManagedAccount>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/managed_accounts',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[email][contains]': filterEmailContains,
                'filter[email][eq]': filterEmailEq,
                'filter[organization_name][contains]': filterOrganizationNameContains,
                'filter[organization_name][eq]': filterOrganizationNameEq,
                'sort': sort,
                'include_cancelled_accounts': includeCancelledAccounts,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create a new managed account.
     * Create a new managed account owned by the authenticated user. You need to be explictly approved by Telnyx in order to become a manager account.
     * @param requestBody Parameters that define the managed account to be created
     * @returns any Successful response with information about a single managed account.
     * @throws ApiError
     */
    public createManagedAccount(
        requestBody: CreateManagedAccountRequest,
    ): CancelablePromise<{
        data?: ManagedAccount;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/managed_accounts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Retrieve a managed account
     * Retrieves the details of a single managed account.
     * @param id Managed Account User ID
     * @returns any Successful response with information about a single managed account.
     * @throws ApiError
     */
    public retrieveManagedAccount(
        id: string,
    ): CancelablePromise<{
        data?: ManagedAccount;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/managed_accounts/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
            },
        });
    }

    /**
     * Update a managed account
     * Update a single managed account.
     * @param id Managed Account User ID
     * @param requestBody Parameters that define the updates to the managed account
     * @returns any Successful response with information about a single managed account.
     * @throws ApiError
     */
    public updateManagedAccount(
        id: string,
        requestBody: UpdateManagedAccountRequest,
    ): CancelablePromise<{
        data?: ManagedAccount;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/managed_accounts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Disables a managed account
     * Disables a managed account, forbidding it to use Telnyx services, including sending or receiving phone calls and SMS messages. Ongoing phone calls will not be affected. The managed account and its sub-users will still be able to log in via the mission control portal.
     * @param id Managed Account User ID
     * @returns any Successful response with information about a single managed account.
     * @throws ApiError
     */
    public disableManagedAccount(
        id: string,
    ): CancelablePromise<{
        data?: ManagedAccount;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/managed_accounts/{id}/actions/disable',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Enables a managed account
     * Enables a managed account and its sub-users to use Telnyx services.
     * @param id Managed Account User ID
     * @returns any Successful response with information about a single managed account.
     * @throws ApiError
     */
    public enableManagedAccount(
        id: string,
    ): CancelablePromise<{
        data?: ManagedAccount;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/managed_accounts/{id}/actions/enable',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

}

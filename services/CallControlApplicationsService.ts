/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CallControlApplication } from '../models/CallControlApplication.ts';
import type { CreateCallControlApplicationRequest } from '../models/CreateCallControlApplicationRequest.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { UpdateCallControlApplicationRequest } from '../models/UpdateCallControlApplicationRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class CallControlApplicationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List call control applications
     * Return a list of call control applications.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterApplicationNameContains If present, applications with <code>application_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
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
     * @returns any Successful response with a list of call control applications.
     * @throws ApiError
     */
    public listCallControlApplications(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterApplicationNameContains: string = 'null',
        filterOutboundVoiceProfileId?: string,
        sort: 'created_at' | 'connection_name' | 'active' = 'created_at',
    ): CancelablePromise<{
        data?: Array<CallControlApplication>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/call_control_applications',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[application_name][contains]': filterApplicationNameContains,
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
     * Create a call control application
     * Create a call control application.
     * @param requestBody Create call control application request.
     * @returns any Successful response with details about a call control application.
     * @throws ApiError
     */
    public createCallControlApplication(
        requestBody: CreateCallControlApplicationRequest,
    ): CancelablePromise<{
        data?: CallControlApplication;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/call_control_applications',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Bad Request`,
            },
        });
    }

    /**
     * Delete a call control application
     * Deletes a call control application.
     * @param id Identifies the resource.
     * @returns any Successful response with details about a call control application.
     * @throws ApiError
     */
    public deleteCallControlApplication(
        id: string,
    ): CancelablePromise<{
        data?: CallControlApplication;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/call_control_applications/{id}',
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
     * Retrieve a call control application
     * Retrieves the details of an existing call control application.
     * @param id Identifies the resource.
     * @returns any Successful response with details about a call control application.
     * @throws ApiError
     */
    public retrieveCallControlApplication(
        id: string,
    ): CancelablePromise<{
        data?: CallControlApplication;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/call_control_applications/{id}',
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
     * Update a call control application
     * Updates settings of an existing call control application.
     * @param id Identifies the resource.
     * @param requestBody Update call control application request.
     * @returns any Successful response with details about a call control application.
     * @throws ApiError
     */
    public updateCallControlApplication(
        id: string,
        requestBody: UpdateCallControlApplicationRequest,
    ): CancelablePromise<{
        data?: CallControlApplication;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/call_control_applications/{id}',
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

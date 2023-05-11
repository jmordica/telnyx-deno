/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFaxApplicationRequest } from '../models/CreateFaxApplicationRequest.ts';
import type { FaxApplication } from '../models/FaxApplication.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { UpdateFaxApplicationRequest } from '../models/UpdateFaxApplicationRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class ProgrammableFaxApplicationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all Fax Applications
     * This endpoint returns a list of your Fax Applications inside the 'data' attribute of the response. You can adjust which applications are listed by using filters. Fax Applications are used to configure how you send and receive faxes using the Programmable Fax API with Telnyx.
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
     * @returns any Successful response
     * @throws ApiError
     */
    public listFaxApplications(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterApplicationNameContains: string = 'null',
        filterOutboundVoiceProfileId?: string,
        sort: 'created_at' | 'connection_name' | 'active' = 'created_at',
    ): CancelablePromise<{
        data?: Array<FaxApplication>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fax_applications',
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
     * Creates a Fax Application
     * Creates a new Fax Application based on the parameters sent in the request. The application name and webhook URL are required. Once created, you can assign phone numbers to your application using the `/phone_numbers` endpoint.
     * @param requestBody Parameters that can be set when creating a Fax Application
     * @returns any Successful response
     * @throws ApiError
     */
    public createFaxApplication(
        requestBody: CreateFaxApplicationRequest,
    ): CancelablePromise<{
        data?: FaxApplication;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fax_applications',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Bad request`,
            },
        });
    }

    /**
     * Deletes a Fax Application
     * Permanently deletes a Fax Application. Deletion may be prevented if the application is in use by phone numbers.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @throws ApiError
     */
    public deleteFaxApplication(
        id: string,
    ): CancelablePromise<{
        data?: FaxApplication;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fax_applications/{id}',
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
     * Retrieve a Fax Application
     * Return the details of an existing Fax Application inside the 'data' attribute of the response.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @throws ApiError
     */
    public getFaxApplication(
        id: string,
    ): CancelablePromise<{
        data?: FaxApplication;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fax_applications/{id}',
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
     * Update a Fax Application
     * Updates settings of an existing Fax Application based on the parameters of the request.
     * @param id Identifies the resource.
     * @param requestBody Parameters to be updated for the Fax Application
     * @returns any Successful response
     * @throws ApiError
     */
    public updateFaxApplication(
        id: string,
        requestBody: UpdateFaxApplicationRequest,
    ): CancelablePromise<{
        data?: FaxApplication;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/fax_applications/{id}',
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

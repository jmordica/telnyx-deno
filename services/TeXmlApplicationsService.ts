/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTexmlApplicationRequest } from '../models/CreateTexmlApplicationRequest.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { TexmlApplication } from '../models/TexmlApplication.ts';
import type { UpdateTexmlApplicationRequest } from '../models/UpdateTexmlApplicationRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class TeXmlApplicationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all TeXML Applications
     * Returns a list of your TeXML Applications.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterFriendlyNameContains If present, applications with <code>friendly_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
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
    public findTexmlApplications(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterFriendlyNameContains: string = 'null',
        filterOutboundVoiceProfileId?: string,
        sort: 'created_at' | 'connection_name' | 'active' = 'created_at',
    ): CancelablePromise<{
        data?: Array<TexmlApplication>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/texml_applications',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[friendly_name][contains]': filterFriendlyNameContains,
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
     * Creates a TeXML Application
     * Creates a TeXML Application.
     * @param requestBody Parameters that can be set when creating a TeXML Application
     * @returns any Successful response
     * @throws ApiError
     */
    public createTexmlApplication(
        requestBody: CreateTexmlApplicationRequest,
    ): CancelablePromise<{
        data?: TexmlApplication;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/texml_applications',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Bad request`,
            },
        });
    }

    /**
     * Deletes a TeXML Application
     * Deletes a TeXML Application.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @throws ApiError
     */
    public deleteTexmlApplication(
        id: string,
    ): CancelablePromise<{
        data?: TexmlApplication;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/texml_applications/{id}',
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
     * Retrieve a TeXML Application
     * Retrieves the details of an existing TeXML Application.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @throws ApiError
     */
    public getTexmlApplication(
        id: string,
    ): CancelablePromise<{
        data?: TexmlApplication;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/texml_applications/{id}',
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
     * Update a TeXML Application
     * Updates settings of an existing TeXML Application.
     * @param id Identifies the resource.
     * @param requestBody Parameters that can be updated in a TeXML Application
     * @returns any Successful response
     * @throws ApiError
     */
    public updateTexmlApplication(
        id: string,
        requestBody: UpdateTexmlApplicationRequest,
    ): CancelablePromise<{
        data?: TexmlApplication;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/texml_applications/{id}',
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

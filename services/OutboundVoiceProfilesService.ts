/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOutboundVoiceProfileRequest } from '../models/CreateOutboundVoiceProfileRequest.ts';
import type { OutboundVoiceProfile } from '../models/OutboundVoiceProfile.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { UpdateOutboundVoiceProfileRequest } from '../models/UpdateOutboundVoiceProfileRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class OutboundVoiceProfilesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all outbound voice profiles
     * Get all outbound voice profiles belonging to the user that match the given filters.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterNameContains Optional filter on outbound voice profile name.
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code>-</code> prefix.<br/><br/>
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
     * </ul> <br/>
     * @returns any Successful response
     * @throws ApiError
     */
    public listOutboundVoiceProfiles(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterNameContains?: string,
        sort: 'enabled' | '-enabled' | 'created_at' | '-created_at' | 'name' | '-name' | 'service_plan' | '-service_plan' | 'traffic_type' | '-traffic_type' | 'usage_payment_method' | '-usage_payment_method' = '-created_at',
    ): CancelablePromise<{
        data?: Array<OutboundVoiceProfile>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/outbound_voice_profiles',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[name][contains]': filterNameContains,
                'sort': sort,
            },
            errors: {
                401: `Unauthorized`,
                422: `Bad request`,
            },
        });
    }

    /**
     * Create an outbound voice profile
     * Create an outbound voice profile.
     * @param requestBody Parameters that can be defined when creating an outbound voice profile
     * @returns any Successful response
     * @throws ApiError
     */
    public createOutboundVoiceProfile(
        requestBody: CreateOutboundVoiceProfileRequest,
    ): CancelablePromise<{
        data?: OutboundVoiceProfile;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/outbound_voice_profiles',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Bad request`,
            },
        });
    }

    /**
     * Delete an outbound voice profile
     * Deletes an existing outbound voice profile.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @throws ApiError
     */
    public deleteOutboundVoiceProfile(
        id: string,
    ): CancelablePromise<{
        data?: OutboundVoiceProfile;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/outbound_voice_profiles/{id}',
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
     * Retrieve an outbound voice profile
     * Retrieves the details of an existing outbound voice profile.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @throws ApiError
     */
    public retrieveOutboundVoiceProfile(
        id: string,
    ): CancelablePromise<{
        data?: OutboundVoiceProfile;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/outbound_voice_profiles/{id}',
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
     * Updates an existing outbound voice profile.
     * Updates an existing outbound voice profile.
     * @param id Identifies the resource.
     * @param requestBody Parameters that can be updated on an outbound voice profile
     * @returns any Successful response
     * @throws ApiError
     */
    public updateOutboundVoiceProfile(
        id: string,
        requestBody: UpdateOutboundVoiceProfileRequest,
    ): CancelablePromise<{
        data?: OutboundVoiceProfile;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/outbound_voice_profiles/{id}',
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

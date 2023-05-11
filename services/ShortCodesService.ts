/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { ShortCode } from '../models/ShortCode.ts';
import type { UpdateShortCodeRequest } from '../models/UpdateShortCodeRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class ShortCodesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List short codes
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterMessagingProfileId Filter by Messaging Profile ID. Use the string `null` for phone numbers without assigned profiles. A synonym for the `/messaging_profiles/{id}/short_codes` endpoint when querying about an extant profile.
     * @returns any Successful response with a list of short codes.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listShortCodes(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterMessagingProfileId?: string,
    ): CancelablePromise<{
        data?: Array<ShortCode>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/short_codes',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[messaging_profile_id]': filterMessagingProfileId,
            },
        });
    }

    /**
     * Retrieve a short code
     * @param id The id of the short code
     * @returns any Successful response with details about a short code.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveShortCode(
        id: string,
    ): CancelablePromise<{
        data?: ShortCode;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/short_codes/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update short code
     * Update the settings for a specific short code. To unbind a short code from a profile, set the `messaging_profile_id` to `null` or an empty string.
     * @param id The id of the short code
     * @param requestBody Short code update
     * @returns any Successful response with details about a short code.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateShortCode(
        id: string,
        requestBody: UpdateShortCodeRequest,
    ): CancelablePromise<{
        data?: ShortCode;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/short_codes/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}

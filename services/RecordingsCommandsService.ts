/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { Recording } from '../models/Recording.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class RecordingsCommandsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List recordings
     * Lists recordings for the authenticated user
     * @param filterConferenceId Return only recordings associated with a given conference
     * @param filterCreatedAtGte Return only recordings created later than or at given ISO 8601 datetime
     * @param filterCreatedAtLte Return only recordings created earlier than or at given ISO 8601 datetime
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of recordings.
     * @throws ApiError
     */
    public listRecordings(
        filterConferenceId?: string,
        filterCreatedAtGte?: string,
        filterCreatedAtLte?: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<Recording>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/recordings',
            query: {
                'filter[conference_id]': filterConferenceId,
                'filter[created_at][gte]': filterCreatedAtGte,
                'filter[created_at][lte]': filterCreatedAtLte,
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Retrieve a recording
     * Retrieve a recording from the authenticated user's recordings
     * @param id Uniquely identifies the recording
     * @returns any Successful response with details about a recording.
     * @throws ApiError
     */
    public retrieveRecording(
        id: string,
    ): CancelablePromise<{
        data?: Recording;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/recordings/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Conference does not exist`,
            },
        });
    }

}

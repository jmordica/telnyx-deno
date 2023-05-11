/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateMessagingProfileRequest } from '../models/CreateMessagingProfileRequest.ts';
import type { Errors } from '../models/Errors.ts';
import type { MessagingProfile } from '../models/MessagingProfile.ts';
import type { MessagingProfileDetailedMetrics } from '../models/MessagingProfileDetailedMetrics.ts';
import type { MessagingProfileHighLevelMetrics } from '../models/MessagingProfileHighLevelMetrics.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { PhoneNumberWithMessagingSettings } from '../models/PhoneNumberWithMessagingSettings.ts';
import type { ShortCode } from '../models/ShortCode.ts';
import type { UpdateMessagingProfileRequest } from '../models/UpdateMessagingProfileRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class MessagingProfilesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List messaging profile metrics
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param id The id of the messaging profile(s) to retrieve
     * @param timeFrame The timeframe for which you'd like to retrieve metrics.
     * @returns any Successful response with a list of messaging profile metrics.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listMessagingProfileMetrics(
        pageNumber: number = 1,
        pageSize: number = 20,
        id?: string,
        timeFrame: '1h' | '3h' | '24h' | '3d' | '7d' | '30d' = '24h',
    ): CancelablePromise<{
        data?: Array<MessagingProfileHighLevelMetrics>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messaging_profile_metrics',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'id': id,
                'time_frame': timeFrame,
            },
        });
    }

    /**
     * List messaging profiles
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterName Filter by name
     * @returns any Successful response with a list of messaging profiles.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listMessagingProfiles(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterName?: string,
    ): CancelablePromise<{
        data?: Array<MessagingProfile>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messaging_profiles',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[name]': filterName,
            },
        });
    }

    /**
     * Create a messaging profile
     * @param requestBody New Messaging Profile object
     * @returns any Successful response with details about a messaging profile.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createMessagingProfile(
        requestBody: CreateMessagingProfileRequest,
    ): CancelablePromise<{
        data?: MessagingProfile;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/messaging_profiles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a messaging profile
     * @param id The id of the messaging profile to retrieve
     * @returns any Successful response with details about a messaging profile.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteMessagingProfile(
        id: string,
    ): CancelablePromise<{
        data?: MessagingProfile;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/messaging_profiles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve a messaging profile
     * @param id The id of the messaging profile to retrieve
     * @returns any Successful response with details about a messaging profile.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveMessagingProfile(
        id: string,
    ): CancelablePromise<{
        data?: MessagingProfile;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messaging_profiles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a messaging profile
     * @param id The id of the messaging profile to retrieve
     * @param requestBody New Messaging Profile object
     * @returns any Successful response with details about a messaging profile.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateMessagingProfile(
        id: string,
        requestBody: UpdateMessagingProfileRequest,
    ): CancelablePromise<{
        data?: MessagingProfile;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/messaging_profiles/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve messaging profile metrics
     * @param id The id of the messaging profile to retrieve
     * @param timeFrame The timeframe for which you'd like to retrieve metrics.
     * @returns any Successful response with details about a messaging profile's metrics.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveMessagingProfileDetailedMetrics(
        id: string,
        timeFrame: '1h' | '3h' | '24h' | '3d' | '7d' | '30d' = '24h',
    ): CancelablePromise<{
        data?: MessagingProfileDetailedMetrics;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messaging_profiles/{id}/metrics',
            path: {
                'id': id,
            },
            query: {
                'time_frame': timeFrame,
            },
        });
    }

    /**
     * List phone numbers associated with a messaging profile
     * @param id The id of the messaging profile to retrieve
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of messaging profile phone numbers.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listMessagingProfilePhoneNumbers(
        id: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<PhoneNumberWithMessagingSettings>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messaging_profiles/{id}/phone_numbers',
            path: {
                'id': id,
            },
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * List short codes associated with a messaging profile
     * @param id The id of the messaging profile to retrieve
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of messaging profile short codes.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listMessagingProfileShortCodes(
        id: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<ShortCode>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messaging_profiles/{id}/short_codes',
            path: {
                'id': id,
            },
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { PhoneNumbersJob } from '../models/PhoneNumbersJob.ts';
import type { PhoneNumbersJobDeletePhoneNumbersRequest } from '../models/PhoneNumbersJobDeletePhoneNumbersRequest.ts';
import type { PhoneNumbersJobUpdateEmergencySettingsRequest } from '../models/PhoneNumbersJobUpdateEmergencySettingsRequest.ts';
import type { PhoneNumbersJobUpdatePhoneNumbersRequest } from '../models/PhoneNumbersJobUpdatePhoneNumbersRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class NumberBackgroundJobsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Lists the phone numbers jobs
     * @param filterType Filter the phone number jobs by type.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param sort Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     * @returns any Successful response with a list of phone numbers background jobs.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listPhoneNumbersJobs(
        filterType?: 'update_emergency_settings' | 'delete_phone_numbers' | 'update_phone_numbers',
        pageNumber: number = 1,
        pageSize: number = 20,
        sort?: 'created_at',
    ): CancelablePromise<{
        data?: Array<PhoneNumbersJob>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_numbers/jobs',
            query: {
                'filter[type]': filterType,
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Delete a batch of numbers
     * Creates a new background job to delete a batch of numbers. At most one thousand numbers can be updated per API call.
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any Phone numbers job delete phone numbers requested.
     * @throws ApiError
     */
    public createPhoneNumbersJobDeletePhoneNumbers(
        requestBody: PhoneNumbersJobDeletePhoneNumbersRequest,
    ): CancelablePromise<Errors | {
        data?: PhoneNumbersJob;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/phone_numbers/jobs/delete_phone_numbers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update the emergency settings from a batch of numbers
     * Creates a background job to update the emergency settings of a collection of phone numbers. At most one thousand numbers can be updated per API call.
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any Phone numbers enable emergency requested.
     * @throws ApiError
     */
    public createPhoneNumbersJobUpdateEmergencySettings(
        requestBody: PhoneNumbersJobUpdateEmergencySettingsRequest,
    ): CancelablePromise<Errors | {
        data?: PhoneNumbersJob;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/phone_numbers/jobs/update_emergency_settings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update a batch of numbers
     * Creates a new background job to update a batch of numbers. At most one thousand numbers can be updated per API call. At least one of the updateable fields must be submitted.
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any Phone numbers job update phone numbers requested.
     * @throws ApiError
     */
    public createPhoneNumbersJobUpdatePhoneNumber(
        requestBody: PhoneNumbersJobUpdatePhoneNumbersRequest,
    ): CancelablePromise<Errors | {
        data?: PhoneNumbersJob;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/phone_numbers/jobs/update_phone_numbers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a phone numbers job
     * @param id Identifies the Phone Numbers Job.
     * @returns any Phone numbers job details.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrievePhoneNumbersJob(
        id: string,
    ): CancelablePromise<{
        data?: PhoneNumbersJob;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_numbers/jobs/{id}',
            path: {
                'id': id,
            },
        });
    }

}

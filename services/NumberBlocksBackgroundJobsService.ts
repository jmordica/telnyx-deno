/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { PhoneNumberBlocksJob } from '../models/PhoneNumberBlocksJob.ts';
import type { PhoneNumberBlocksJobDeletePhoneNumberBlockRequest } from '../models/PhoneNumberBlocksJobDeletePhoneNumberBlockRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class NumberBlocksBackgroundJobsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Lists the phone number blocks jobs
     * @param filterType Filter the phone number blocks jobs by type.
     * @param filterStatus Filter the phone number blocks jobs by status.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param sort Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     * @returns any Successful response with a list of phone number blocks background jobs.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listPhoneNumberBlocksJobs(
        filterType?: 'delete_phone_number_block',
        filterStatus?: 'pending' | 'in_progress' | 'completed' | 'failed',
        pageNumber: number = 1,
        pageSize: number = 20,
        sort?: 'created_at',
    ): CancelablePromise<{
        data?: Array<PhoneNumberBlocksJob>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_number_blocks/jobs',
            query: {
                'filter[type]': filterType,
                'filter[status]': filterStatus,
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Deletes all numbers associated with a phone number block
     * Creates a new background job to delete all the phone numbers associated with the given block. We will only consider the phone number block as deleted after all phone numbers associated with it are removed, so multiple executions of this job may be necessary in case some of the phone numbers present errors during the deletion process.
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any Phone number blocks job delete phone numbers requested.
     * @throws ApiError
     */
    public createPhoneNumberBlocksJobDeletePhoneNumberBlock(
        requestBody: PhoneNumberBlocksJobDeletePhoneNumberBlockRequest,
    ): CancelablePromise<Errors | {
        data?: PhoneNumberBlocksJob;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/phone_number_blocks/jobs/delete_phone_number_block',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieves a phone number blocks job
     * @param id Identifies the Phone Number Blocks Job.
     * @returns any Phone number blocks job details.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrievePhoneNumberBlocksJob(
        id: string,
    ): CancelablePromise<{
        data?: PhoneNumberBlocksJob;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_number_blocks/jobs/{id}',
            path: {
                'id': id,
            },
        });
    }

}

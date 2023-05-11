/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkCreationDetailedStatusResponse } from '../models/BulkCreationDetailedStatusResponse.ts';
import type { BulkCreationRequest } from '../models/BulkCreationRequest.ts';
import type { BulkCreationResponse } from '../models/BulkCreationResponse.ts';
import type { BulkCreationStatusResponse } from '../models/BulkCreationStatusResponse.ts';
import type { BulkCreationTasksResponse } from '../models/BulkCreationTasksResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class BulkSoleProprietorCreationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get All Tasks
     * Get a list of all tasks ever submitted by your organization.
     * @param recordsPerPage
     * @param page
     * @returns BulkCreationTasksResponse Successful Response
     * @throws ApiError
     */
    public getAllTasksBulkCreationGet(
        recordsPerPage?: any,
        page?: any,
    ): CancelablePromise<BulkCreationTasksResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/bulkCreation',
            query: {
                'recordsPerPage': recordsPerPage,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Bulk Creation
     * Submit sets of data about brands, campaigns, and phone numbers to create and assign. Please note that sub-usecases, phone numbers, and sample messages are each limited to 5 per campaign.
     * @param requestBody
     * @returns BulkCreationResponse Successful Response
     * @throws ApiError
     */
    public bulkCreationBulkCreationPost(
        requestBody: BulkCreationRequest,
    ): CancelablePromise<BulkCreationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/bulkCreation',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Task Status
     * Get a simple overview of the status of a bulk creation task.
     * @param taskId
     * @returns BulkCreationStatusResponse Successful Response
     * @throws ApiError
     */
    public getTaskStatusBulkCreationTaskIdGet(
        taskId: string,
    ): CancelablePromise<BulkCreationStatusResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/bulkCreation/{taskId}',
            path: {
                'taskId': taskId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Detailed Task Status
     * Get detailed information about the status of a bulk creation task.
     * @param taskId
     * @param recordsPerPage
     * @param page
     * @returns BulkCreationDetailedStatusResponse Successful Response
     * @throws ApiError
     */
    public getDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet(
        taskId: string,
        recordsPerPage?: any,
        page?: any,
    ): CancelablePromise<BulkCreationDetailedStatusResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/bulkCreation/{taskId}/detailedStatus',
            path: {
                'taskId': taskId,
            },
            query: {
                'recordsPerPage': recordsPerPage,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}

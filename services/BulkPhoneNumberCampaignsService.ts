/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignmentTaskStatusResponse } from '../models/AssignmentTaskStatusResponse.ts';
import type { AssignProfileToCampaignRequest } from '../models/AssignProfileToCampaignRequest.ts';
import type { AssignProfileToCampaignResponse } from '../models/AssignProfileToCampaignResponse.ts';
import type { PhoneNumberStatusResponsePaginated } from '../models/PhoneNumberStatusResponsePaginated.ts';
import type { SettingsDataErrorMessage } from '../models/SettingsDataErrorMessage.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class BulkPhoneNumberCampaignsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Assign Messaging Profile To Campaign
     * This endpoint allows you to link all phone numbers associated with a Messaging Profile to a campaign. **Please note:** if you want to assign phone numbers to a campaign that you did not create with Telnyx 10DLC services, this endpoint allows that provided that you've shared the campaign with Telnyx. In this case, only provide the parameter, `tcrCampaignId`, and not `campaignId`. In all other cases (where the campaign you're assigning was created with Telnyx 10DLC services), only provide `campaignId`, not `tcrCampaignId`.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public assignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePost(
        requestBody: AssignProfileToCampaignRequest,
    ): CancelablePromise<(AssignProfileToCampaignResponse | SettingsDataErrorMessage)> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/phoneNumberAssignmentByProfile',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Assignment Task Status
     * Check the status of the task associated with assigning all phone numbers on a messaging profile to a campaign by `taskId`.
     * @param taskId
     * @returns AssignmentTaskStatusResponse Successful Response
     * @throws ApiError
     */
    public getAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGet(
        taskId: string,
    ): CancelablePromise<AssignmentTaskStatusResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phoneNumberAssignmentByProfile/{taskId}',
            path: {
                'taskId': taskId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Phone Number Status
     * Check the status of the individual phone number/campaign assignments associated with the supplied `taskId`.
     * @param taskId
     * @param recordsPerPage
     * @param page
     * @returns PhoneNumberStatusResponsePaginated Successful Response
     * @throws ApiError
     */
    public getPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet(
        taskId: string,
        recordsPerPage?: any,
        page?: any,
    ): CancelablePromise<PhoneNumberStatusResponsePaginated> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phoneNumberAssignmentByProfile/{taskId}/phoneNumbers',
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

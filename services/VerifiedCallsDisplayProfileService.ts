/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateVerifiedCallsDisplayProfileRequest } from '../models/CreateVerifiedCallsDisplayProfileRequest.ts';
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { UpdateVerifiedCallsDisplayProfileRequest } from '../models/UpdateVerifiedCallsDisplayProfileRequest.ts';
import type { VerifiedCallsDisplayProfile } from '../models/VerifiedCallsDisplayProfile.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class VerifiedCallsDisplayProfileService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Lists the Verified Calls Display Profiles owned by the current user/organization
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of Verified Calls Display Profiles.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listVerifiedCallsDisplayProfiles(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<VerifiedCallsDisplayProfile>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/verified_calls_display_profiles',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Creates a Verified Calls Display Profile
     * Creates a Verified Calls Display Profile associated with the given Business Identity
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any Successful response with a Verified Calls Display Profile.
     * @throws ApiError
     */
    public createVerifiedCallsDisplayProfile(
        requestBody: CreateVerifiedCallsDisplayProfileRequest,
    ): CancelablePromise<Errors | {
        data?: VerifiedCallsDisplayProfile;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/verified_calls_display_profiles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Deletes the Verified Calls Display Profile
     * Deletes the Verified Calls Display Profile. This action will fail if any verification requests have been made for this Verified Calls Display Profile. Please contact support@telnyx.com in case you want to delete a Verified Calls Display Profile in that situation.
     * @param id Identifies the Verified Calls Display Profile
     * @returns any Successful response with a Verified Calls Display Profile.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteVerifiedCallsDisplayProfile(
        id: string,
    ): CancelablePromise<{
        data?: VerifiedCallsDisplayProfile;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/verified_calls_display_profiles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display the Verified Calls Display Profile
     * @param id Identifies the Verified Calls Display Profile
     * @returns any Successful response with a Verified Calls Display Profile.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public displayVerifiedCallsDisplayProfile(
        id: string,
    ): CancelablePromise<{
        data?: VerifiedCallsDisplayProfile;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/verified_calls_display_profiles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a Verified Calls Display Profile
     * Update an existing Verified Calls Display Profile and allows adding/removing nested Call Reasons and Phone Numbers. Different attributes can be updated depending on the Verified Calls Display Profile's status: For the VERIFICATION_STATE_PENDING status, no fields can be updated. For the VERIFICATION_STATE_VERIFIED status, it is allowed only to add/remove Call Reaons and Phone Numbers. For the other statuses, all fields can be updated. All existing Call Reasons and Phone Numbers must be sent during the request, or the update will fail.
     * @param id Identifies the Verified Calls Display Profile
     * @param requestBody
     * @returns any Verified Calls Display Profile was updated.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateVerifiedCallsDisplayProfile(
        id: string,
        requestBody: UpdateVerifiedCallsDisplayProfileRequest,
    ): CancelablePromise<any | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/verified_calls_display_profiles/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Creates a Verification Request
     * Starts a new Verified Calls Display Profile verification process.
     * @param id Identifies the Verified Calls Display Profile
     * @returns Errors Unexpected error
     * @returns any The Verification Request was issued.
     * @throws ApiError
     */
    public createVerifiedCallsDisplayProfileVerificationRequest(
        id: string,
    ): CancelablePromise<Errors | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/verified_calls_display_profiles/{id}/verification_request',
            path: {
                'id': id,
            },
        });
    }

}

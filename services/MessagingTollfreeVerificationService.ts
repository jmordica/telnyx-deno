/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { Paginated_VerificationRequestStatus_ } from '../models/Paginated_VerificationRequestStatus_.ts';
import type { TFVerificationRequest } from '../models/TFVerificationRequest.ts';
import type { TFVerificationStatus } from '../models/TFVerificationStatus.ts';
import type { VerificationRequestEgress } from '../models/VerificationRequestEgress.ts';
import type { VerificationRequestStatus } from '../models/VerificationRequestStatus.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class MessagingTollfreeVerificationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Verification Requests
     * Get a list of previously-submitted tollfree verification requests
     * @param page
     * @param pageSize
     * Request this many records per page
     *
     * This value is automatically clamped if the provided value is too large.
     *
     * @param dateStart
     * @param dateEnd
     * @param status
     * @param phoneNumber
     * @returns Paginated_VerificationRequestStatus_ Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listVerificationRequests(
        page: number,
        pageSize: number,
        dateStart?: string,
        dateEnd?: string,
        status?: TFVerificationStatus,
        phoneNumber?: string,
    ): CancelablePromise<Paginated_VerificationRequestStatus_ | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messaging_tollfree/verification/requests',
            query: {
                'page': page,
                'page_size': pageSize,
                'date_start': dateStart,
                'date_end': dateEnd,
                'status': status,
                'phone_number': phoneNumber,
            },
        });
    }

    /**
     * Submit Verification Request
     * Submit a new tollfree verification request
     * @param requestBody
     * @returns VerificationRequestEgress Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public submitVerificationRequest(
        requestBody: TFVerificationRequest,
    ): CancelablePromise<VerificationRequestEgress | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/messaging_tollfree/verification/requests',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Verification Request
     * Get a single verification request by its ID.
     * @param id
     * @returns VerificationRequestStatus Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public getVerificationRequest(
        id: string,
    ): CancelablePromise<VerificationRequestStatus | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messaging_tollfree/verification/requests/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update Verification Request
     * Update an existing tollfree verification request. This is particularly useful when there are pending customer actions to be taken.
     * @param id
     * @param requestBody
     * @returns VerificationRequestEgress Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateVerificationRequest(
        id: string,
        requestBody: TFVerificationRequest,
    ): CancelablePromise<VerificationRequestEgress | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/messaging_tollfree/verification/requests/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}

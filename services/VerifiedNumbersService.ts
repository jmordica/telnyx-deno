/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateVerifiedNumberResponse } from '../models/CreateVerifiedNumberResponse.ts';
import type { ListVerifiedNumbersResponse } from '../models/ListVerifiedNumbersResponse.ts';
import type { VerifiedNumberResponseDataWrapper } from '../models/VerifiedNumberResponseDataWrapper.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class VerifiedNumbersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all Verified Numbers
     * Gets a paginated list of Verified Numbers.
     * @param pageSize
     * @param pageNumber
     * @returns ListVerifiedNumbersResponse Expected response to a valid request.
     * @throws ApiError
     */
    public listVerifiedNumbers(
        pageSize: number = 25,
        pageNumber: number = 1,
    ): CancelablePromise<ListVerifiedNumbersResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/verified_numbers',
            query: {
                'page[size]': pageSize,
                'page[number]': pageNumber,
            },
            errors: {
                400: `Unexpected error`,
                401: `Unauthorized Request`,
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Request phone number verification
     * Initiates phone number verification procedure.
     * @param requestBody
     * @returns CreateVerifiedNumberResponse Expected response to a valid request.
     * @throws ApiError
     */
    public createVerifiedNumber(
        requestBody: {
            phone_number: string;
            /**
             * Verification method.
             */
            verification_method: 'sms' | 'call.ts';
        },
    ): CancelablePromise<CreateVerifiedNumberResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/verified_numbers',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Unexpected error`,
                401: `Unauthorized Request`,
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Delete a verified number
     * @param phoneNumber The phone number being deleted.
     * @returns VerifiedNumberResponseDataWrapper Expected verifications response to a valid request.
     * @throws ApiError
     */
    public deleteVerifiedNumber(
        phoneNumber: string,
    ): CancelablePromise<VerifiedNumberResponseDataWrapper> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/verified_numbers/{phone_number}',
            path: {
                'phone_number': phoneNumber,
            },
            errors: {
                400: `Unexpected error`,
                401: `Unauthorized Request`,
                404: `Resource Not Found`,
            },
        });
    }

    /**
     * Retrieve a verified number
     * @param phoneNumber The phone number being requested.
     * @returns VerifiedNumberResponseDataWrapper Expected verifications response to a valid request.
     * @throws ApiError
     */
    public retrieveVerifiedNumber(
        phoneNumber: string,
    ): CancelablePromise<VerifiedNumberResponseDataWrapper> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/verified_numbers/{phone_number}',
            path: {
                'phone_number': phoneNumber,
            },
            errors: {
                400: `Unexpected error`,
                401: `Unauthorized Request`,
                404: `Resource Not Found`,
            },
        });
    }

    /**
     * Submit verification code
     * @param phoneNumber The phone number being verified.
     * @param requestBody
     * @returns VerifiedNumberResponseDataWrapper Expected response to a valid request.
     * @throws ApiError
     */
    public verifyVerificationCode(
        phoneNumber: string,
        requestBody: {
            verification_code: string;
        },
    ): CancelablePromise<VerifiedNumberResponseDataWrapper> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/verified_numbers/{phone_number}/actions/verify',
            path: {
                'phone_number': phoneNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Unexpected error`,
                401: `Unauthorized Request`,
                404: `Resource Not Found`,
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

}

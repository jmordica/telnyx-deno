/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PhoneNumberCampaign } from '../models/PhoneNumberCampaign.ts';
import type { PhoneNumberCampaignCreate } from '../models/PhoneNumberCampaignCreate.ts';
import type { PhoneNumberCampaignPaginated } from '../models/PhoneNumberCampaignPaginated.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class PhoneNumberCampaignsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve All Phone Number Campaigns
     * Retrieve all of your organization's phone number/campaign assignments.
     * @param recordsPerPage
     * @param page
     * @returns PhoneNumberCampaignPaginated Successful Response
     * @throws ApiError
     */
    public retrieveAllPhoneNumberCampaignsPhoneNumberCampaignGet(
        recordsPerPage?: any,
        page?: any,
    ): CancelablePromise<PhoneNumberCampaignPaginated> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phoneNumberCampaign',
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
     * Create New Phone Number Campaign
     * Assign an individual phone number to campaign.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createNewPhoneNumberCampaignPhoneNumberCampaignPost(
        requestBody: PhoneNumberCampaignCreate,
    ): CancelablePromise<(PhoneNumberCampaign | Record<string, any>)> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/phoneNumberCampaign',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Phone Number Campaign
     * This endpoint allows you to remove a campaign assignment from the supplied `phoneNumber`.
     * @param phoneNumber
     * @returns PhoneNumberCampaign Successful Response
     * @throws ApiError
     */
    public deletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDelete(
        phoneNumber: string,
    ): CancelablePromise<PhoneNumberCampaign> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/phoneNumberCampaign/{phoneNumber}',
            path: {
                'phoneNumber': phoneNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Single Phone Number Campaign
     * Retrieve an individual phone number/campaign assignment by `phoneNumber`.
     * @param phoneNumber
     * @returns PhoneNumberCampaign Successful Response
     * @throws ApiError
     */
    public getSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGet(
        phoneNumber: string,
    ): CancelablePromise<PhoneNumberCampaign> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phoneNumberCampaign/{phoneNumber}',
            path: {
                'phoneNumber': phoneNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create New Phone Number Campaign
     * This endpoint allows you to assign a different campaign to a supplied `phoneNumber`.
     * @param phoneNumber
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut(
        phoneNumber: string,
        requestBody: PhoneNumberCampaignCreate,
    ): CancelablePromise<(PhoneNumberCampaign | Record<string, any>)> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/phoneNumberCampaign/{phoneNumber}',
            path: {
                'phoneNumber': phoneNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Retrieve All Phone Number Campaigns
     * @param recordsPerPage
     * @param page
     * @returns any Successful Response
     * @throws ApiError
     */
    public retrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGet(
        recordsPerPage?: any,
        page?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_number_campaigns',
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
     * Create New Phone Number Campaign
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createNewPhoneNumberCampaignPhoneNumberCampaignsPost(
        requestBody: PhoneNumberCampaignCreate,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/phone_number_campaigns',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Phone Number Campaign
     * @param phoneNumber
     * @returns any Successful Response
     * @throws ApiError
     */
    public deletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDelete(
        phoneNumber: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/phone_number_campaigns/{phoneNumber}',
            path: {
                'phoneNumber': phoneNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Single Phone Number Campaign
     * @param phoneNumber
     * @returns any Successful Response
     * @throws ApiError
     */
    public getSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGet(
        phoneNumber: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_number_campaigns/{phoneNumber}',
            path: {
                'phoneNumber': phoneNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create New Phone Number Campaign
     * @param phoneNumber
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut(
        phoneNumber: string,
        requestBody: PhoneNumberCampaignCreate,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/phone_number_campaigns/{phoneNumber}',
            path: {
                'phoneNumber': phoneNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}

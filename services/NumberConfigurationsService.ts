/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { PhoneNumberDeletedDetailed } from '../models/PhoneNumberDeletedDetailed.ts';
import type { PhoneNumberDetailed } from '../models/PhoneNumberDetailed.ts';
import type { PhoneNumberEnableEmergencyRequest } from '../models/PhoneNumberEnableEmergencyRequest.ts';
import type { PhoneNumberWithMessagingSettings } from '../models/PhoneNumberWithMessagingSettings.ts';
import type { PhoneNumberWithVoiceSettings } from '../models/PhoneNumberWithVoiceSettings.ts';
import type { UpdatePhoneNumberMessagingSettingsRequest } from '../models/UpdatePhoneNumberMessagingSettingsRequest.ts';
import type { UpdatePhoneNumberRequest } from '../models/UpdatePhoneNumberRequest.ts';
import type { UpdatePhoneNumberVoiceSettingsRequest } from '../models/UpdatePhoneNumberVoiceSettingsRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class NumberConfigurationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List phone numbers
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterTag Filter by phone number tags.
     * @param filterPhoneNumber Filter by phone number. Requires at least three digits.
     * Non-numerical characters will result in no values being returned.
     * @param filterStatus Filter by phone number status.
     * @param filterConnectionId Filter by connection_id.
     * @param filterVoiceConnectionNameContains Filter contains connection name. Requires at least three characters.
     * @param filterVoiceConnectionNameStartsWith Filter starts with connection name. Requires at least three characters.
     * @param filterVoiceConnectionNameEndsWith Filter ends with connection name. Requires at least three characters.
     * @param filterVoiceConnectionNameEq Filter by connection name.
     * @param filterUsagePaymentMethod Filter by usage_payment_method.
     * @param filterBillingGroupId Filter by the billing_group_id associated with phone numbers. To filter to only phone numbers that have no billing group associated them, set the value of this filter to the string 'null'.
     * @param filterEmergencyAddressId Filter by the emergency_address_id associated with phone numbers. To filter only phone numbers that have no emergency address associated with them, set the value of this filter to the string 'null'.
     * @param filterCustomerReference Filter numbers via the customer_reference set.
     * @param sort Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     * @returns any Successful response with a list of phone numbers.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listPhoneNumbers(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterTag?: string,
        filterPhoneNumber?: string,
        filterStatus?: 'purchase_pending' | 'purchase_failed' | 'port_pending' | 'active' | 'deleted' | 'port_failed' | 'emergency_only' | 'ported_out' | 'port_out_pending',
        filterConnectionId?: string,
        filterVoiceConnectionNameContains?: string,
        filterVoiceConnectionNameStartsWith?: string,
        filterVoiceConnectionNameEndsWith?: string,
        filterVoiceConnectionNameEq?: string,
        filterUsagePaymentMethod?: 'pay-per-minute' | 'channel',
        filterBillingGroupId?: string,
        filterEmergencyAddressId?: string,
        filterCustomerReference?: string,
        sort?: 'purchased_at' | 'phone_number' | 'connection_name' | 'usage_payment_method',
    ): CancelablePromise<{
        data?: Array<PhoneNumberDetailed>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_numbers',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[tag]': filterTag,
                'filter[phone_number]': filterPhoneNumber,
                'filter[status]': filterStatus,
                'filter[connection_id]': filterConnectionId,
                'filter[voice.connection_name][contains]': filterVoiceConnectionNameContains,
                'filter[voice.connection_name][starts_with]': filterVoiceConnectionNameStartsWith,
                'filter[voice.connection_name][ends_with]': filterVoiceConnectionNameEndsWith,
                'filter[voice.connection_name][eq]': filterVoiceConnectionNameEq,
                'filter[usage_payment_method]': filterUsagePaymentMethod,
                'filter[billing_group_id]': filterBillingGroupId,
                'filter[emergency_address_id]': filterEmergencyAddressId,
                'filter[customer_reference]': filterCustomerReference,
                'sort': sort,
            },
        });
    }

    /**
     * List phone numbers with messaging settings
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of phone numbers with messaging settings.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listPhoneNumbersWithMessagingSettings(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<PhoneNumberWithMessagingSettings>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_numbers/messaging',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * List phone numbers with voice settings
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterPhoneNumber Filter by phone number. Requires at least three digits.
     * Non-numerical characters will result in no values being returned.
     * @param filterConnectionNameContains Filter contains connection name. Requires at least three characters.
     * @param filterCustomerReference Filter numbers via the customer_reference set.
     * @param filterUsagePaymentMethod Filter by usage_payment_method.
     * @param sort Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     * @returns any Successful response with a list of phone numbers with voice settings.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listPhoneNumbersWithVoiceSettings(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterPhoneNumber?: string,
        filterConnectionNameContains?: string,
        filterCustomerReference?: string,
        filterUsagePaymentMethod?: 'pay-per-minute' | 'channel',
        sort?: 'purchased_at' | 'phone_number' | 'connection_name' | 'usage_payment_method',
    ): CancelablePromise<{
        data?: Array<PhoneNumberWithVoiceSettings>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_numbers/voice',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[phone_number]': filterPhoneNumber,
                'filter[connection_name][contains]': filterConnectionNameContains,
                'filter[customer_reference]': filterCustomerReference,
                'filter[usage_payment_method]': filterUsagePaymentMethod,
                'sort': sort,
            },
        });
    }

    /**
     * Delete a phone number
     * @param id Identifies the resource.
     * @returns any Successful response with details about a phone number.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deletePhoneNumber(
        id: string,
    ): CancelablePromise<{
        data?: PhoneNumberDeletedDetailed;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/phone_numbers/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve a phone number
     * @param id Identifies the resource.
     * @returns any Successful response with details about a phone number.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrievePhoneNumber(
        id: string,
    ): CancelablePromise<{
        data?: PhoneNumberDetailed;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_numbers/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a phone number
     * @param id Identifies the resource.
     * @param requestBody Updated settings for the phone number.
     * @returns any Successful response with details about a phone number.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updatePhoneNumber(
        id: string,
        requestBody: UpdatePhoneNumberRequest,
    ): CancelablePromise<{
        data?: PhoneNumberDetailed;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/phone_numbers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Enable emergency for a phone number
     * @param id Identifies the resource.
     * @param requestBody
     * @returns any Phone number emergency enabled.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public enableEmergencyPhoneNumber(
        id: string,
        requestBody: PhoneNumberEnableEmergencyRequest,
    ): CancelablePromise<{
        data?: PhoneNumberWithVoiceSettings;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/phone_numbers/{id}/actions/enable_emergency',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a phone number with messaging settings
     * @param id Identifies the type of resource.
     * @returns any Successful response with details about a phone number including voice settings.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrievePhoneNumberWithMessagingSettings(
        id: string,
    ): CancelablePromise<{
        data?: PhoneNumberWithMessagingSettings;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_numbers/{id}/messaging',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a phone number with messaging settings
     * @param id Identifies the type of resource.
     * @param requestBody Updated messaging settings for the phone number
     * @returns any Successful response with details about a phone number including voice settings.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updatePhoneNumberWithMessagingSettings(
        id: string,
        requestBody: UpdatePhoneNumberMessagingSettingsRequest,
    ): CancelablePromise<{
        data?: PhoneNumberWithMessagingSettings;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/phone_numbers/{id}/messaging',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a phone number with voice settings
     * @param id Identifies the resource.
     * @returns any Successful response with details about a phone number including voice settings.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrievePhoneNumberWithVoiceSettings(
        id: string,
    ): CancelablePromise<{
        data?: PhoneNumberWithVoiceSettings;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_numbers/{id}/voice',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a phone number with voice settings
     * @param id Identifies the resource.
     * @param requestBody Updated voice settings for the phone number.
     * @returns any Successful response with details about a phone number including voice settings.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updatePhoneNumberWithVoiceSettings(
        id: string,
        requestBody: UpdatePhoneNumberVoiceSettingsRequest,
    ): CancelablePromise<{
        data?: PhoneNumberWithVoiceSettings;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/phone_numbers/{id}/voice',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}

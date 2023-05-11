/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerServiceRecord } from '../models/CustomerServiceRecord.ts';
import type { CustomerServiceRecordAdditionalData } from '../models/CustomerServiceRecordAdditionalData.ts';
import type { CustomerServiceRecordPhoneNumberCoverage } from '../models/CustomerServiceRecordPhoneNumberCoverage.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class CustomerServiceRecordService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List customer service records
     * List customer service records.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param sort Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     * @param filterPhoneNumberEq Filters records to those with a specified number.
     * @param filterPhoneNumberIn Filters records to those with at least one number in the list.
     * @param filterStatusEq Filters records to those with a specific status.
     * @param filterStatusIn Filters records to those with a least one status in the list.
     * @param filterCreatedAtLt Filters records to those created before a specific date.
     * @param filterCreatedAtLt Filters records to those created after a specific date.
     * @returns any Successful Response
     * @throws ApiError
     */
    public listCustomerServiceRecords(
        pageNumber: number = 1,
        pageSize: number = 20,
        sort?: 'created_at' | '-created_at',
        filterPhoneNumberEq?: string,
        filterPhoneNumberIn?: Array<string>,
        filterStatusEq?: 'pending' | 'completed' | 'failed',
        filterStatusIn?: Array<'pending' | 'completed' | 'failed'>,
        filterCreatedAtLt?: string,
        //filterCreatedAtLt?: string,
    ): CancelablePromise<{
        data?: Array<CustomerServiceRecord>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/customer_service_records',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'sort[]': sort,
                'filter[phone_number][eq]': filterPhoneNumberEq,
                'filter[phone_number][in][]': filterPhoneNumberIn,
                'filter[status][eq]': filterStatusEq,
                'filter[status][in][]': filterStatusIn,
                'filter[created_at][lt]': filterCreatedAtLt,
                //'filter[created_at][lt]': filterCreatedAtLt,
            },
            errors: {
                401: `The required authentication headers were either invalid or not included in the request.`,
                403: `You do not have permission to perform the requested action on the specified resource or resources.`,
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
                500: `An unexpected error occurred.`,
            },
        });
    }

    /**
     * Create a customer service record
     * Create a new customer service record for the provided phone number.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createCustomerServiceRecord(
        requestBody: {
            /**
             * A valid US phone number in E164 format.
             */
            phone_number: string;
            /**
             * Callback URL to receive webhook notifications.
             */
            webhook_url?: string;
            additional_data?: CustomerServiceRecordAdditionalData;
        },
    ): CancelablePromise<{
        data?: CustomerServiceRecord;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/customer_service_records',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `The required authentication headers were either invalid or not included in the request.`,
                403: `You do not have permission to perform the requested action on the specified resource or resources.`,
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
                500: `An unexpected error occurred.`,
            },
        });
    }

    /**
     * Verify CSR phone number coverage
     * Verify the coverage for a list of phone numbers.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public verifyPhoneNumberCoverage(
        requestBody: {
            /**
             * The phone numbers list to be verified.
             */
            phone_numbers: Array<string>;
        },
    ): CancelablePromise<{
        data?: Array<CustomerServiceRecordPhoneNumberCoverage>;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/customer_service_records/phone_number_coverages',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `The required authentication headers were either invalid or not included in the request.`,
                403: `You do not have permission to perform the requested action on the specified resource or resources.`,
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
                500: `An unexpected error occurred.`,
            },
        });
    }

    /**
     * Get a customer service record
     * Get a specific customer service record.
     * @param customerServiceRecordId The ID of the customer service record
     * @returns any Successful Response
     * @throws ApiError
     */
    public getCustomerServiceRecord(
        customerServiceRecordId: string,
    ): CancelablePromise<{
        data?: CustomerServiceRecord;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/customer_service_records/{customer_service_record_id}',
            path: {
                'customer_service_record_id': customerServiceRecordId,
            },
            errors: {
                401: `The required authentication headers were either invalid or not included in the request.`,
                403: `You do not have permission to perform the requested action on the specified resource or resources.`,
                404: `Resource not found`,
                500: `An unexpected error occurred.`,
            },
        });
    }

}

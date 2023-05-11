/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from '../models/Comment.ts';
import type { CreateNumberOrderRequest } from '../models/CreateNumberOrderRequest.ts';
import type { Errors } from '../models/Errors.ts';
import type { NumberOrder } from '../models/NumberOrder.ts';
import type { NumberOrderPhoneNumber } from '../models/NumberOrderPhoneNumber.ts';
import type { NumberOrderWithPhoneNumbers } from '../models/NumberOrderWithPhoneNumbers.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { ReadComment } from '../models/ReadComment.ts';
import type { RegulatoryRequirements } from '../models/RegulatoryRequirements.ts';
import type { SubNumberOrder } from '../models/SubNumberOrder.ts';
import type { UpdateNumberOrderPhoneNumberRequest } from '../models/UpdateNumberOrderPhoneNumberRequest.ts';
import type { UpdateNumberOrderRequest } from '../models/UpdateNumberOrderRequest.ts';
import type { UpdateSubNumberOrderRequest } from '../models/UpdateSubNumberOrderRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class NumberOrdersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve all comments
     * @param filterCommentRecordType Record type that the comment relates to i.e number_order, sub_number_order or number_order_phone_number
     * @param filterCommentRecordId ID of the record the comments relate to
     * @returns any An array of Comment Responses
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listComments(
        filterCommentRecordType: string,
        filterCommentRecordId: string,
    ): CancelablePromise<{
        data?: Array<Comment>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comments',
            query: {
                'filter[comment_record_type]': filterCommentRecordType,
                'filter[comment_record_id]': filterCommentRecordId,
            },
        });
    }

    /**
     * Create a comment
     * @param requestBody
     * @returns any A Comment Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createComment(
        requestBody: Comment,
    ): CancelablePromise<{
        data?: (Comment & Record<string, any>);
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/comments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a comment
     * @param id The comment ID.
     * @returns any A Comment Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveComment(
        id: string,
    ): CancelablePromise<{
        data?: (Comment & Record<string, any>);
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comments/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Mark a comment as read
     * @param id The comment ID.
     * @returns any A Comment Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public markCommentRead(
        id: string,
    ): CancelablePromise<{
        data?: (ReadComment & Record<string, any>);
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/comments/{id}/read',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve a list of phone numbers associated to orders
     * Get a list of phone numbers associated to orders.
     * @returns any Successful response with a list of number order phone numbers.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveNumberOrderPhoneNumbers(): CancelablePromise<{
        data?: Array<NumberOrderPhoneNumber>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/number_order_phone_numbers',
        });
    }

    /**
     * Retrieve a number order phone number.
     * Get an existing number order phone number.
     * @param numberOrderPhoneNumberId The number order phone number ID.
     * @returns any Successful response with details about a number order phone number.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveNumberOrderPhoneNumber(
        numberOrderPhoneNumberId: string,
    ): CancelablePromise<{
        data?: NumberOrderPhoneNumber;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/number_order_phone_numbers/{number_order_phone_number_id}',
            path: {
                'number_order_phone_number_id': numberOrderPhoneNumberId,
            },
        });
    }

    /**
     * Update a number order phone number.
     * Updates a number order phone number.
     * @param numberOrderPhoneNumberId The number order phone number ID.
     * @param requestBody
     * @returns any Successful response with details about a number order phone number.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateNumberOrderPhoneNumber(
        numberOrderPhoneNumberId: string,
        requestBody: UpdateNumberOrderPhoneNumberRequest,
    ): CancelablePromise<{
        data?: NumberOrderPhoneNumber;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/number_order_phone_numbers/{number_order_phone_number_id}',
            path: {
                'number_order_phone_number_id': numberOrderPhoneNumberId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List number orders
     * Get a paginated list of number orders.
     * @param filterStatus Filter number orders by status.
     * @param filterCreatedAtGt Filter number orders later than this value.
     * @param filterCreatedAtLt Filter number orders earlier than this value.
     * @param filterPhoneNumbersCount Filter number order with this amount of numbers
     * @param filterCustomerReference Filter number orders via the customer reference set.
     * @param filterRequirementsMet Filter number orders by requirements met.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of number orders.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listNumberOrders(
        filterStatus?: string,
        filterCreatedAtGt?: string,
        filterCreatedAtLt?: string,
        filterPhoneNumbersCount?: string,
        filterCustomerReference?: string,
        filterRequirementsMet?: boolean,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<NumberOrder>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/number_orders',
            query: {
                'filter[status]': filterStatus,
                'filter[created_at][gt]': filterCreatedAtGt,
                'filter[created_at][lt]': filterCreatedAtLt,
                'filter[phone_numbers_count]': filterPhoneNumbersCount,
                'filter[customer_reference]': filterCustomerReference,
                'filter[requirements_met]': filterRequirementsMet,
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Create a number order
     * Creates a phone number order.
     * @param requestBody
     * @returns any Successful response with details about a number order.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createNumberOrder(
        requestBody: CreateNumberOrderRequest,
    ): CancelablePromise<{
        data?: NumberOrderWithPhoneNumbers;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/number_orders',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a number order
     * Get an existing phone number order.
     * @param numberOrderId The number order ID.
     * @returns any Successful response with details about a number order.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveNumberOrder(
        numberOrderId: string,
    ): CancelablePromise<{
        data?: NumberOrderWithPhoneNumbers;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/number_orders/{number_order_id}',
            path: {
                'number_order_id': numberOrderId,
            },
        });
    }

    /**
     * Update a number order
     * Updates a phone number order.
     * @param numberOrderId The number order ID.
     * @param requestBody
     * @returns any Successful response with details about a number order.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateNumberOrder(
        numberOrderId: string,
        requestBody: UpdateNumberOrderRequest,
    ): CancelablePromise<{
        data?: NumberOrderWithPhoneNumbers;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/number_orders/{number_order_id}',
            path: {
                'number_order_id': numberOrderId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve regulartory requirements
     * @param filterPhoneNumber Record type phone number/ phone numbers
     * @returns any An array of Regulatory Requiremenst Responses
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listRegulartoryRequirements(
        filterPhoneNumber: string,
    ): CancelablePromise<{
        data?: Array<RegulatoryRequirements>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_numbers_regulatory_requirements',
            query: {
                'filter[phone_number]': filterPhoneNumber,
            },
        });
    }

    /**
     * List sub number orders
     * Get a paginated list of sub number orders.
     * @param filterUserId User ID of the user who owns the sub number order
     * @param filterOrderRequestId ID of the number order the sub number order belongs to
     * @param filterCountryCode ISO alpha-2 country code.
     * @param filterPhoneNumberType Phone Number Type
     * @param filterPhoneNumbersCount Amount of numbers in the sub number order
     * @returns any Successful response with a list of sub number orders.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listSubNumberOrders(
        filterUserId?: string,
        filterOrderRequestId?: string,
        filterCountryCode?: string,
        filterPhoneNumberType?: string,
        filterPhoneNumbersCount?: number,
    ): CancelablePromise<{
        data?: Array<SubNumberOrder>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sub_number_orders',
            query: {
                'filter[user_id]': filterUserId,
                'filter[order_request_id]': filterOrderRequestId,
                'filter[country_code]': filterCountryCode,
                'filter[phone_number_type]': filterPhoneNumberType,
                'filter[phone_numbers_count]': filterPhoneNumbersCount,
            },
        });
    }

    /**
     * Retrieve a sub number order
     * Get an existing sub number order.
     * @param subNumberOrderId The sub number order ID.
     * @param filterIncludePhoneNumbers Include the first 50 phone number objects in the results
     * @returns any Successful response with details about a sub number order.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveSubNumberOrder(
        subNumberOrderId: string,
        filterIncludePhoneNumbers: boolean = false,
    ): CancelablePromise<{
        data?: SubNumberOrder;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sub_number_orders/{sub_number_order_id}',
            path: {
                'sub_number_order_id': subNumberOrderId,
            },
            query: {
                'filter[include_phone_numbers]': filterIncludePhoneNumbers,
            },
        });
    }

    /**
     * Update a sub number order
     * Updates a sub number order.
     * @param subNumberOrderId The sub number order ID.
     * @param requestBody
     * @returns any Successful response with details about a sub number order.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateSubNumberOrder(
        subNumberOrderId: string,
        requestBody: UpdateSubNumberOrderRequest,
    ): CancelablePromise<{
        data?: SubNumberOrder;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/sub_number_orders/{sub_number_order_id}',
            path: {
                'sub_number_order_id': subNumberOrderId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateNumberBlockOrderRequest } from '../models/CreateNumberBlockOrderRequest.ts';
import type { Errors } from '../models/Errors.ts';
import type { NumberBlockOrder } from '../models/NumberBlockOrder.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class NumberBlockOrdersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List number block orders
     * Get a paginated list of number block orders.
     * @param filterStatus Filter number block orders by status.
     * @param filterCreatedAtGt Filter number block orders later than this value.
     * @param filterCreatedAtLt Filter number block orders earlier than this value.
     * @param filterPhoneNumbersStartingNumber Filter number block  orders having these phone numbers.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of number block orders.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listNumberBlockOrders(
        filterStatus?: string,
        filterCreatedAtGt?: string,
        filterCreatedAtLt?: string,
        filterPhoneNumbersStartingNumber?: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<NumberBlockOrder>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/number_block_orders',
            query: {
                'filter[status]': filterStatus,
                'filter[created_at][gt]': filterCreatedAtGt,
                'filter[created_at][lt]': filterCreatedAtLt,
                'filter[phone_numbers.starting_number]': filterPhoneNumbersStartingNumber,
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Create a number block order
     * Creates a phone number block order.
     * @param requestBody
     * @returns any Successful response with details about a number block order.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createNumberBlockOrder(
        requestBody: CreateNumberBlockOrderRequest,
    ): CancelablePromise<{
        data?: NumberBlockOrder;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/number_block_orders',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a number block order
     * Get an existing phone number block order.
     * @param numberBlockOrderId The number block order ID.
     * @returns any Successful response with details about a number block order.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveNumberBlockOrder(
        numberBlockOrderId: string,
    ): CancelablePromise<{
        data?: NumberBlockOrder;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/number_block_orders/{number_block_order_id}',
            path: {
                'number_block_order_id': numberBlockOrderId,
            },
        });
    }

}

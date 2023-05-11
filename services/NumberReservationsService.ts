/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateNumberReservationRequest } from '../models/CreateNumberReservationRequest.ts';
import type { Errors } from '../models/Errors.ts';
import type { NumberReservation } from '../models/NumberReservation.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class NumberReservationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List number reservations
     * Gets a paginated list of phone number reservations.
     * @param filterStatus Filter number reservations by status.
     * @param filterCreatedAtGt Filter number reservations later than this value.
     * @param filterCreatedAtLt Filter number reservations earlier than this value.
     * @param filterPhoneNumbersPhoneNumber Filter number reservations having these phone numbers.
     * @param filterCustomerReference Filter number reservations via the customer reference set.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of number reservations.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listNumberReservations(
        filterStatus?: string,
        filterCreatedAtGt?: string,
        filterCreatedAtLt?: string,
        filterPhoneNumbersPhoneNumber?: string,
        filterCustomerReference?: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<NumberReservation>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/number_reservations',
            query: {
                'filter[status]': filterStatus,
                'filter[created_at][gt]': filterCreatedAtGt,
                'filter[created_at][lt]': filterCreatedAtLt,
                'filter[phone_numbers.phone_number]': filterPhoneNumbersPhoneNumber,
                'filter[customer_reference]': filterCustomerReference,
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Create a number reservation
     * Creates a Phone Number Reservation for multiple numbers.
     * @param requestBody
     * @returns any Successful response with details about a number reservation.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createNumberReservation(
        requestBody: CreateNumberReservationRequest,
    ): CancelablePromise<{
        data?: NumberReservation;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/number_reservations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a number reservation
     * Gets a single phone number reservation.
     * @param numberReservationId The number reservation ID.
     * @returns any Successful response with details about a number reservation.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveNumberReservation(
        numberReservationId: string,
    ): CancelablePromise<{
        data?: NumberReservation;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/number_reservations/{number_reservation_id}',
            path: {
                'number_reservation_id': numberReservationId,
            },
        });
    }

    /**
     * Extend a number reservation
     * Extends reservation expiry time on all phone numbers.
     * @param numberReservationId The number reservation ID.
     * @returns any Successful response with details about a number reservation.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public extendNumberReservationExpiryTime(
        numberReservationId: string,
    ): CancelablePromise<{
        data?: NumberReservation;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/number_reservations/{number_reservation_id}/actions/extend',
            path: {
                'number_reservation_id': numberReservationId,
            },
        });
    }

}

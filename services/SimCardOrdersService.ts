/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { SIMCardOrder } from '../models/SIMCardOrder.ts';
import type { SimCardOrderCreate } from '../models/SimCardOrderCreate.ts';
import type { SIMCardOrderPreview } from '../models/SIMCardOrderPreview.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class SimCardOrdersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Preview SIM card orders
     * Preview SIM card order purchases.
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public simCardOrdersPreview(
        requestBody?: {
            /**
             * The amount of SIM cards that the user would like to purchase in the SIM card order.
             */
            quantity: number;
            /**
             * Uniquely identifies the address for the order.
             */
            address_id: string;
        },
    ): CancelablePromise<{
        data?: SIMCardOrderPreview;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sim_card_order_preview',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Get all SIM card orders
     * Get all SIM card orders according to filters.
     * @param filterCreatedAt Filter by ISO 8601 formatted date-time string matching resource creation date-time.
     * @param filterUpdatedAt Filter by ISO 8601 formatted date-time string matching resource last update date-time.
     * @param filterQuantity Filter orders by how many SIM cards were ordered.
     * @param filterCostAmount The total monetary amount of the order.
     * @param filterCostCurrency Filter by ISO 4217 currency string.
     * @param filterAddressId Uniquely identifies the address for the order.
     * @param filterAddressStreetAddress Returns entries with matching name of the street where the address is located.
     * @param filterAddressExtendedAddress Returns entries with matching name of the supplemental field for address information.
     * @param filterAddressLocality Filter by the name of the city where the address is located.
     * @param filterAddressAdministrativeArea Filter by state or province where the address is located.
     * @param filterAddressCountryCode Filter by the mobile operator two-character (ISO 3166-1 alpha-2) origin country code.
     * @param filterAddressPostalCode Filter by postal code for the address.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardOrdersGet(
        filterCreatedAt?: string,
        filterUpdatedAt?: string,
        filterQuantity?: number,
        filterCostAmount?: string,
        filterCostCurrency?: string,
        filterAddressId?: string,
        filterAddressStreetAddress?: string,
        filterAddressExtendedAddress?: string,
        filterAddressLocality?: string,
        filterAddressAdministrativeArea?: string,
        filterAddressCountryCode?: string,
        filterAddressPostalCode?: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<SIMCardOrder>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_card_orders',
            query: {
                'filter[created_at]': filterCreatedAt,
                'filter[updated_at]': filterUpdatedAt,
                'filter[quantity]': filterQuantity,
                'filter[cost.amount]': filterCostAmount,
                'filter[cost.currency]': filterCostCurrency,
                'filter[address.id]': filterAddressId,
                'filter[address.street_address]': filterAddressStreetAddress,
                'filter[address.extended_address]': filterAddressExtendedAddress,
                'filter[address.locality]': filterAddressLocality,
                'filter[address.administrative_area]': filterAddressAdministrativeArea,
                'filter[address.country_code]': filterAddressCountryCode,
                'filter[address.postal_code]': filterAddressPostalCode,
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Create a SIM card order
     * Creates a new order for SIM cards.
     * @param requestBody
     * @returns any Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardOrdersPost(
        requestBody: SimCardOrderCreate,
    ): CancelablePromise<{
        data?: SIMCardOrder;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sim_card_orders',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a single SIM card order
     * Get a single SIM card order by its ID.
     * @param id Identifies the resource.
     * @returns any Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardOrderGet(
        id: string,
    ): CancelablePromise<{
        data?: SIMCardOrder;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_card_orders/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

}

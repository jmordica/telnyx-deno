/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { PrivateWirelessGateway } from '../models/PrivateWirelessGateway.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class PrivateWirelessGatewaysService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all Private Wireless Gateways
     * Get all Private Wireless Gateways belonging to the user.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterName The name of the Private Wireless Gateway.
     * @param filterIpRange The IP address range of the Private Wireless Gateway.
     * @param filterRegionCode The name of the region where the Private Wireless Gateway is deployed.
     * @param filterCreatedAt Private Wireless Gateway resource creation date.
     * @param filterUpdatedAt When the Private Wireless Gateway was last updated.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public getPrivateWirelessGateways(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterName?: string,
        filterIpRange?: string,
        filterRegionCode?: string,
        filterCreatedAt?: string,
        filterUpdatedAt?: string,
    ): CancelablePromise<{
        data?: Array<PrivateWirelessGateway>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/private_wireless_gateways',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[name]': filterName,
                'filter[ip_range]': filterIpRange,
                'filter[region_code]': filterRegionCode,
                'filter[created_at]': filterCreatedAt,
                'filter[updated_at]': filterUpdatedAt,
            },
        });
    }

    /**
     * Create a Private Wireless Gateway
     * Asynchronously create a Private Wireless Gateway for SIM cards for a previously created network.
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any Successful response
     * @throws ApiError
     */
    public createPrivateWirelessGateway(
        requestBody: {
            /**
             * The identification of the related network resource.
             */
            network_id: string;
            /**
             * The private wireless gateway name.
             */
            name: string;
        },
    ): CancelablePromise<Errors | {
        data?: PrivateWirelessGateway;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/private_wireless_gateways',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Delete a Private Wireless Gateway
     * Deletes the Private Wireless Gateway.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deletePrivateWirelessGateway(
        id: string,
    ): CancelablePromise<{
        data?: PrivateWirelessGateway;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/private_wireless_gateways/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Get a Private Wireless Gateway
     * Retrieve information about a Private Wireless Gateway.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public getPrivateWirelessGateway(
        id: string,
    ): CancelablePromise<{
        data?: PrivateWirelessGateway;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/private_wireless_gateways/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

}

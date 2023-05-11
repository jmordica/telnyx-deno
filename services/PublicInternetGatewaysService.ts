/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { PublicInternetGatewayCreate } from '../models/PublicInternetGatewayCreate.ts';
import type { PublicInternetGatewayRead } from '../models/PublicInternetGatewayRead.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class PublicInternetGatewaysService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all Public Internet Gateways
     * List all Public Internet Gateways.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterNetworkId The associated network id to filter on.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public publicInternetGatewayList(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterNetworkId?: string,
    ): CancelablePromise<{
        data?: Array<PublicInternetGatewayRead>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/public_internet_gateways',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[network_id]': filterNetworkId,
            },
        });
    }

    /**
     * Create a Public Internet Gateway
     * Create a new Public Internet Gateway.
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any Successful response
     * @throws ApiError
     */
    public publicInternetGatewayCreate(
        requestBody: PublicInternetGatewayCreate,
    ): CancelablePromise<Errors | {
        data?: PublicInternetGatewayRead;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/public_internet_gateways',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Delete a Public Internet Gateway
     * Delete a Public Internet Gateway.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public publicInternetGatewayDelete(
        id: string,
    ): CancelablePromise<{
        data?: PublicInternetGatewayRead;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/public_internet_gateways/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve a Public Internet Gateway
     * Retrieve a Public Internet Gateway.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public publicInternetGatewayGet(
        id: string,
    ): CancelablePromise<{
        data?: PublicInternetGatewayRead;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/public_internet_gateways/{id}',
            path: {
                'id': id,
            },
        });
    }

}

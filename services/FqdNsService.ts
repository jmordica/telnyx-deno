/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFqdnRequest } from '../models/CreateFqdnRequest.ts';
import type { CustomerFacingFQDNsGetIPResponse } from '../models/CustomerFacingFQDNsGetIPResponse.ts';
import type { CustomerFacingFQDNsListResponse } from '../models/CustomerFacingFQDNsListResponse.ts';
import type { CustomerFacingFQDNsPost } from '../models/CustomerFacingFQDNsPost.ts';
import type { CustomerFacingFQDNsResponseSchema } from '../models/CustomerFacingFQDNsResponseSchema.ts';
import type { Fqdn } from '../models/Fqdn.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { UpdateFqdnRequest } from '../models/UpdateFqdnRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class FqdNsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all Access FQDNs
     * @param pageNumber
     * @param pageSize
     * @returns CustomerFacingFQDNsListResponse Successful Response
     * @throws ApiError
     */
    public listAllAccessFqdns(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<CustomerFacingFQDNsListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/access_fqdns',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Create new Access FQDN
     * @param requestBody
     * @returns CustomerFacingFQDNsResponseSchema Successful Response
     * @throws ApiError
     */
    public createAccessFqdn(
        requestBody: CustomerFacingFQDNsPost,
    ): CancelablePromise<CustomerFacingFQDNsResponseSchema> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/access_fqdns',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Access FQDN
     * @param fqdnId
     * @returns CustomerFacingFQDNsResponseSchema Successful Response
     * @throws ApiError
     */
    public deleteAccessFqdn(
        fqdnId: string,
    ): CancelablePromise<CustomerFacingFQDNsResponseSchema> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/access_fqdns/{fqdn_id}',
            path: {
                'fqdn_id': fqdnId,
            },
        });
    }

    /**
     * List an Access FQDN
     * @param fqdnId
     * @returns CustomerFacingFQDNsResponseSchema Successful Response
     * @throws ApiError
     */
    public listAccessFqdnById(
        fqdnId: string,
    ): CancelablePromise<CustomerFacingFQDNsResponseSchema> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/access_fqdns/{fqdn_id}',
            path: {
                'fqdn_id': fqdnId,
            },
        });
    }

    /**
     * Update Access FQDN
     * @param fqdnId
     * @param requestBody
     * @returns CustomerFacingFQDNsResponseSchema Successful Response
     * @throws ApiError
     */
    public updateAccessFqdn(
        fqdnId: string,
        requestBody: {
            description: string;
        },
    ): CancelablePromise<CustomerFacingFQDNsResponseSchema> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/access_fqdns/{fqdn_id}',
            path: {
                'fqdn_id': fqdnId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List Access FQDN's IP Addresses
     * @param fqdnId
     * @param pageNumber
     * @param pageSize
     * @returns CustomerFacingFQDNsGetIPResponse Successful Response
     * @throws ApiError
     */
    public listAllIpsByFqdn(
        fqdnId: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<CustomerFacingFQDNsGetIPResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/access_fqdns/{fqdn_id}/ips',
            path: {
                'fqdn_id': fqdnId,
            },
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * List FQDNs
     * Get all FQDNs belonging to the user that match the given filters.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterConnectionId ID of the FQDN connection to which the FQDN belongs.
     * @param filterFqdn FQDN represented by the resource.
     * @param filterPort Port to use when connecting to the FQDN.
     * @param filterDnsRecordType DNS record type used by the FQDN.
     * @returns any Successful response with a list of FQDN connections.
     * @throws ApiError
     */
    public listFqdns(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterConnectionId?: string,
        filterFqdn?: string,
        filterPort?: number,
        filterDnsRecordType?: string,
    ): CancelablePromise<{
        data?: Array<Fqdn>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fqdns',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[connection_id]': filterConnectionId,
                'filter[fqdn]': filterFqdn,
                'filter[port]': filterPort,
                'filter[dns_record_type]': filterDnsRecordType,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create an FQDN
     * Create a new FQDN object.
     * @param requestBody
     * @returns any Successful response with details about an FQDN connection.
     * @throws ApiError
     */
    public createFqdn(
        requestBody?: CreateFqdnRequest,
    ): CancelablePromise<{
        data?: Fqdn;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fqdns',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete an FQDN
     * Delete an FQDN.
     * @param id Identifies the resource.
     * @returns any Successful response with details about an FQDN connection.
     * @throws ApiError
     */
    public deleteFqdn(
        id: string,
    ): CancelablePromise<{
        data?: Fqdn;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fqdns/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Retrieve an FQDN
     * Return the details regarding a specific FQDN.
     * @param id Identifies the resource.
     * @returns any Successful response with details about an FQDN connection.
     * @throws ApiError
     */
    public retrieveFqdn(
        id: string,
    ): CancelablePromise<{
        data?: Fqdn;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fqdns/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update an FQDN
     * Update the details of a specific FQDN.
     * @param id Identifies the resource.
     * @param requestBody
     * @returns any Successful response with details about an FQDN connection.
     * @throws ApiError
     */
    public updateFqdn(
        id: string,
        requestBody?: UpdateFqdnRequest,
    ): CancelablePromise<{
        data?: Fqdn;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/fqdns/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
            },
        });
    }

}

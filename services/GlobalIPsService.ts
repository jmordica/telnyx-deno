/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { GlobalIP } from '../models/GlobalIP.ts';
import type { GlobalIPAllowedPort } from '../models/GlobalIPAllowedPort.ts';
import type { GlobalIpAssignment } from '../models/GlobalIpAssignment.ts';
import type { GlobalIpAssignmentHealthMetric } from '../models/GlobalIpAssignmentHealthMetric.ts';
import type { GlobalIpAssignmentUpdate } from '../models/GlobalIpAssignmentUpdate.ts';
import type { GlobalIpAssignmentUsageMetric } from '../models/GlobalIpAssignmentUsageMetric.ts';
import type { GlobalIpLatencyMetric } from '../models/GlobalIpLatencyMetric.ts';
import type { GlobalIPProtocol } from '../models/GlobalIPProtocol.ts';
import type { GlobalIpUsageMetric } from '../models/GlobalIpUsageMetric.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class GlobalIPsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all Global IP Allowed Ports
     * List all Global IP Allowed Ports
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public globalIpAllowedPortList(): CancelablePromise<{
        data?: Array<GlobalIPAllowedPort>;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/global_ip_allowed_ports',
        });
    }

    /**
     * @param filterGlobalIpIdIn Filter by Global IP ID(s) separated by commas
     * @param filterGlobalIpAssignmentIdIn Filter by Global IP Assignment ID(s) separated by commas
     * @param filterTimestampGt Filter by timestamp greater than
     * @param filterTimestampLt Filter by timestamp less than
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public globalIpAssignmentHealth(
        filterGlobalIpIdIn?: string,
        filterGlobalIpAssignmentIdIn?: string,
        filterTimestampGt?: string,
        filterTimestampLt?: string,
    ): CancelablePromise<{
        data?: Array<GlobalIpAssignmentHealthMetric>;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/global_ip_assignment_health',
            query: {
                'filter[global_ip_id][in]': filterGlobalIpIdIn,
                'filter[global_ip_assignment_id][in]': filterGlobalIpAssignmentIdIn,
                'filter[timestamp][gt]': filterTimestampGt,
                'filter[timestamp][lt]': filterTimestampLt,
            },
        });
    }

    /**
     * List all Global IP assignments
     * List all Global IP assignments.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public globalIpAssignmentList(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<GlobalIpAssignment>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/global_ip_assignments',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Create a Global IP assignment
     * Create a Global IP assignment.
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any Successful response
     * @throws ApiError
     */
    public globalIpAssignmentCreate(
        requestBody: GlobalIpAssignment,
    ): CancelablePromise<Errors | {
        data?: GlobalIpAssignment;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/global_ip_assignments',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Delete a Global IP assignment
     * Delete a Global IP assignment.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public globalIpAssignmentDelete(
        id: string,
    ): CancelablePromise<{
        data?: GlobalIpAssignment;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/global_ip_assignments/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve a Global IP
     * Retrieve a Global IP assignment.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public globalIpAssignmentGet(
        id: string,
    ): CancelablePromise<{
        data?: GlobalIpAssignment;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/global_ip_assignments/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a Global IP assignment
     * Update a Global IP assignment.
     * @param id Identifies the resource.
     * @param requestBody
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public globalIpAssignmentUpdate(
        id: string,
        requestBody: GlobalIpAssignmentUpdate,
    ): CancelablePromise<{
        data?: GlobalIpAssignment;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/global_ip_assignments/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param filterGlobalIpAssignmentIdIn Filter by Global IP Assignment ID(s) separated by commas
     * @param filterGlobalIpIdIn Filter by Global IP ID(s), separated by commas
     * @param filterTimestampGt Filter by timestamp greater than
     * @param filterTimestampLt Filter by timestamp less than
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public globalIpAssignmentUsage(
        filterGlobalIpAssignmentIdIn?: string,
        filterGlobalIpIdIn?: string,
        filterTimestampGt?: string,
        filterTimestampLt?: string,
    ): CancelablePromise<{
        data?: Array<GlobalIpAssignmentUsageMetric>;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/global_ip_assignments_usage',
            query: {
                'filter[global_ip_assignment_id][in]': filterGlobalIpAssignmentIdIn,
                'filter[global_ip_id][in]': filterGlobalIpIdIn,
                'filter[timestamp][gt]': filterTimestampGt,
                'filter[timestamp][lt]': filterTimestampLt,
            },
        });
    }

    /**
     * @param filterGlobalIpIdIn Filter by Global IP ID(s) separated by commas
     * @param filterTimestampGt Filter by timestamp greater than
     * @param filterTimestampLt Filter by timestamp less than
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public globalIpLatency(
        filterGlobalIpIdIn?: string,
        filterTimestampGt?: string,
        filterTimestampLt?: string,
    ): CancelablePromise<{
        data?: Array<GlobalIpLatencyMetric>;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/global_ip_latency',
            query: {
                'filter[global_ip_id][in]': filterGlobalIpIdIn,
                'filter[timestamp][gt]': filterTimestampGt,
                'filter[timestamp][lt]': filterTimestampLt,
            },
        });
    }

    /**
     * List all Global IP Protocols
     * List all Global IP Protocols
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public globalIpProtocolList(): CancelablePromise<{
        data?: Array<GlobalIPProtocol>;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/global_ip_protocols',
        });
    }

    /**
     * @param filterGlobalIpIdIn Filter by Global IP ID(s) separated by commas
     * @param filterTimestampGt Filter by timestamp greater than
     * @param filterTimestampLt Filter by timestamp less than
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public globalIpUsage(
        filterGlobalIpIdIn?: string,
        filterTimestampGt?: string,
        filterTimestampLt?: string,
    ): CancelablePromise<{
        data?: Array<GlobalIpUsageMetric>;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/global_ip_usage',
            query: {
                'filter[global_ip_id][in]': filterGlobalIpIdIn,
                'filter[timestamp][gt]': filterTimestampGt,
                'filter[timestamp][lt]': filterTimestampLt,
            },
        });
    }

    /**
     * List all Global IPs
     * List all Global IPs.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public globalIpList(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<GlobalIP>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/global_ips',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Create a Global IP
     * Create a Global IP.
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any Successful response
     * @throws ApiError
     */
    public globalIpCreate(
        requestBody: GlobalIP,
    ): CancelablePromise<Errors | {
        data?: GlobalIP;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/global_ips',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Delete a Global IP
     * Delete a Global IP.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public globalIpDelete(
        id: string,
    ): CancelablePromise<{
        data?: GlobalIP;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/global_ips/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve a Global IP
     * Retrieve a Global IP.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public globalIpGet(
        id: string,
    ): CancelablePromise<{
        data?: GlobalIP;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/global_ips/{id}',
            path: {
                'id': id,
            },
        });
    }

}

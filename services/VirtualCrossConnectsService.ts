/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { VirtualCrossConnectCombined } from '../models/VirtualCrossConnectCombined.ts';
import type { VirtualCrossConnectCreate } from '../models/VirtualCrossConnectCreate.ts';
import type { VirtualCrossConnectPatch } from '../models/VirtualCrossConnectPatch.ts';
import type { VirtualCrossConnectRegion } from '../models/VirtualCrossConnectRegion.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class VirtualCrossConnectsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all Virtual Cross Connect Cloud Regions
     * List all Virtual Cross Connects Cloud Regions.<br /><br />This endpoint shows which cloud regions are available for the `region_code` your Virtual Cross Connect will be provisioned in.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterRegionCode The Telnyx region code
     * @param filterCloudProvider The Telnyx region code
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public virtaulCrossConnectRegionList(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterRegionCode?: string,
        filterCloudProvider?: 'aws' | 'azure' | 'gce',
    ): CancelablePromise<{
        data?: Array<VirtualCrossConnectRegion>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/virtual_cross_connect_regions',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[region_code]': filterRegionCode,
                'filter[cloud_provider]': filterCloudProvider,
            },
        });
    }

    /**
     * Retrieve a Virtual Cross Connect Cloud Regions
     * Retrieve a Virtual Cross Connect Cloud Regions.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public virtualCrossConnectRegionGet(
        id: string,
    ): CancelablePromise<{
        data?: VirtualCrossConnectRegion;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/virtual_cross_connect_regions/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * List all Virtual Cross Connects
     * List all Virtual Cross Connects.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterNetworkId The associated network id to filter on.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public virtaulCrossConnectList(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterNetworkId?: string,
    ): CancelablePromise<{
        data?: Array<VirtualCrossConnectCombined>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/virtual_cross_connects',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[network_id]': filterNetworkId,
            },
        });
    }

    /**
     * Create a Virtual Cross Connect
     * Create a new Virtual Cross Connect.<br /><br />For AWS and GCE, you have the option of creating the primary connection first and the secondary connection later. You also have the option of disabling the primary and/or secondary connections at any time and later re-enabling them. With Azure, you do not have this option. Azure requires both the primary and secondary connections to be created at the same time and they can not be independantly disabled.
     * @param requestBody
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public virtualCrossConnectCreate(
        requestBody: VirtualCrossConnectCreate,
    ): CancelablePromise<{
        data?: VirtualCrossConnectCombined;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/virtual_cross_connects',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Delete a Virtual Cross Connect
     * Delete a Virtual Cross Connect.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public virtualCrossConnectDelete(
        id: string,
    ): CancelablePromise<{
        data?: VirtualCrossConnectCombined;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/virtual_cross_connects/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve a Virtual Cross Connect
     * Retrieve a Virtual Cross Connect.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public virtualCrossConnectGet(
        id: string,
    ): CancelablePromise<{
        data?: VirtualCrossConnectCombined;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/virtual_cross_connects/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update the Virtual Cross Connect
     * Update the Virtual Cross Connect.<br /><br />Cloud IPs can only be patched during the `created` state, as GCE will only inform you of your generated IP once the pending connection requested has been accepted. Once the Virtual Cross Connect has moved to `provisioning`, the IPs can no longer be patched.<br /><br />Once the Virtual Cross Connect has moved to `provisioned` and you are ready to enable routing, you can toggle the routing announcements to `true`.
     * @param id Identifies the resource.
     * @param requestBody
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public virtualCrossConnectUpdate(
        id: string,
        requestBody: VirtualCrossConnectPatch,
    ): CancelablePromise<{
        data?: VirtualCrossConnectCombined;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/virtual_cross_connects/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Provision a Virtual Cross Connect
     * Provision a new Virtual Cross Connect.<br /><br />This endpoint is only necessary for GCE cloud regions. Once you have patched your Cloud IPs, you must POST this request to trigger the provision.
     * @param id Identifies the resource.
     * @returns Errors Unexpected error
     * @returns any Successful response
     * @throws ApiError
     */
    public virtualCrossConnectProvision(
        id: string,
    ): CancelablePromise<Errors | {
        data?: VirtualCrossConnectCombined;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/virtual_cross_connects/{id}/actions/provision',
            path: {
                'id': id,
            },
        });
    }

}

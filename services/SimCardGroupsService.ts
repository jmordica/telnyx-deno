/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { SearchedSIMCardGroup } from '../models/SearchedSIMCardGroup.ts';
import type { SIMCardGroup } from '../models/SIMCardGroup.ts';
import type { SIMCardGroupAction } from '../models/SIMCardGroupAction.ts';
import type { SIMCardGroupCreate } from '../models/SIMCardGroupCreate.ts';
import type { SIMCardGroupPatch } from '../models/SIMCardGroupPatch.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class SimCardGroupsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all SIM card groups
     * Get all SIM card groups belonging to the user that match the given filters.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterName A valid SIM card group name.
     * @param filterPrivateWirelessGatewayId A Private Wireless Gateway ID associated with the group.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardGroupsGetAll(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterName?: string,
        filterPrivateWirelessGatewayId?: string,
    ): CancelablePromise<{
        data?: Array<SearchedSIMCardGroup>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_card_groups',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[name]': filterName,
                'filter[private_wireless_gateway_id]': filterPrivateWirelessGatewayId,
            },
        });
    }

    /**
     * Create a SIM card group
     * Creates a new SIM card group object
     * @param requestBody
     * @returns any Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardGroupsPost(
        requestBody: SIMCardGroupCreate,
    ): CancelablePromise<{
        data?: SIMCardGroup;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sim_card_groups',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a SIM card group
     * Permanently deletes a SIM card group
     * @param id Identifies the resource.
     * @returns any Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardGroupDelete(
        id: string,
    ): CancelablePromise<{
        data?: SIMCardGroup;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/sim_card_groups/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get SIM card group
     * Returns the details regarding a specific SIM card group
     * @param id Identifies the resource.
     * @returns any Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardGroupsGet(
        id: string,
    ): CancelablePromise<{
        data?: SIMCardGroup;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_card_groups/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a SIM card group
     * Updates a SIM card group
     * @param id Identifies the resource.
     * @param requestBody
     * @returns any Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardGroupUpdate(
        id: string,
        requestBody: SIMCardGroupPatch,
    ): CancelablePromise<{
        data?: SIMCardGroup;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/sim_card_groups/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Request Private Wireless Gateway removal from SIM card group
     * This action will asynchronously remove an existing Private Wireless Gateway definition from a SIM card group. Completing this operation defines that all SIM cards in the SIM card group will get their traffic handled by Telnyx's default mobile network configuration.
     * @param id Identifies the resource.
     * @returns Errors Unexpected error
     * @returns any Successful Response
     * @throws ApiError
     */
    public removeSimCardGroupPrivateWirelessGateway(
        id: string,
    ): CancelablePromise<Errors | {
        data?: SIMCardGroupAction;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sim_card_groups/{id}/actions/remove_private_wireless_gateway',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Request Private Wireless Gateway assignment for SIM card group
     * This action will asynchronously assign a provisioned Private Wireless Gateway to the SIM card group. Completing this operation defines that all SIM cards in the SIM card group will get their traffic controlled by the associated Private Wireless Gateway. This operation will also imply that new SIM cards assigned to a group will inherit its network definitions. If it's moved to a different group that doesn't have a Private Wireless Gateway, it'll use Telnyx's default mobile network configuration.
     * @param id Identifies the resource.
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any Successful Response
     * @throws ApiError
     */
    public setSimCardGroupPrivateWirelessGateway(
        id: string,
        requestBody: {
            /**
             * The identification of the related Private Wireless Gateway resource.
             */
            private_wireless_gateway_id: string;
        },
    ): CancelablePromise<Errors | {
        data?: SIMCardGroupAction;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sim_card_groups/{id}/actions/set_private_wireless_gateway',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}

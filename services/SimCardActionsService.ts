/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkSIMCardActionDetailed } from '../models/BulkSIMCardActionDetailed.ts';
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { SIMCardAction } from '../models/SIMCardAction.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class SimCardActionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List bulk SIM card actions
     * This API lists a paginated collection of bulk SIM card actions. A bulk SIM card action contains details about a collection of individual SIM card actions.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterActionType Filter by action type.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listBulkSimCardActions(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterActionType?: 'bulk_set_public_ips',
    ): CancelablePromise<{
        data?: Array<BulkSIMCardActionDetailed>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/bulk_sim_card_actions',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[action_type]': filterActionType,
            },
        });
    }

    /**
     * Get bulk SIM card action details
     * This API fetches information about a bulk SIM card action. A bulk SIM card action contains details about a collection of individual SIM card actions.
     * @param id Identifies the resource.
     * @returns any Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public bulkSimCardActionGet(
        id: string,
    ): CancelablePromise<{
        data?: BulkSIMCardActionDetailed;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/bulk_sim_card_actions/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * List SIM card actions
     * This API lists a paginated collection of SIM card actions. It enables exploring a collection of existing asynchronous operations using specific filters.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterSimCardId A valid SIM card ID.
     * @param filterStatus Filter by a specific status of the resource's lifecycle.
     * @param filterBulkSimCardActionId Filter by a bulk SIM card action ID.
     * @param filterActionType Filter by action type.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listSimCardActions(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterSimCardId?: string,
        filterStatus?: 'in-progress' | 'completed' | 'failed',
        filterBulkSimCardActionId?: string,
        filterActionType?: 'enable' | 'enable_standby_sim_card' | 'disable' | 'set_standby' | 'remove_public_ip' | 'set_public_ip',
    ): CancelablePromise<{
        data?: Array<SIMCardAction>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_card_actions',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[sim_card_id]': filterSimCardId,
                'filter[status]': filterStatus,
                'filter[bulk_sim_card_action_id]': filterBulkSimCardActionId,
                'filter[action_type]': filterActionType,
            },
        });
    }

    /**
     * Get SIM card action details
     * This API fetches detailed information about a SIM card action to follow-up on an existing asynchronous operation.
     * @param id Identifies the resource.
     * @returns any Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardActionGet(
        id: string,
    ): CancelablePromise<{
        data?: SIMCardAction;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_card_actions/{id}',
            path: {
                'id': id,
            },
        });
    }

}

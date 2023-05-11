/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { SIMCardGroupAction } from '../models/SIMCardGroupAction.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class SimCardGroupActionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List SIM card group actions
     * This API allows listing a paginated collection a SIM card group actions. It allows to explore a collection of existing asynchronous operation using specific filters.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterSimCardGroupId A valid SIM card group ID.
     * @param filterStatus Filter by a specific status of the resource's lifecycle.
     * @param filterType Filter by action type.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardGroupActionsGet(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterSimCardGroupId?: string,
        filterStatus?: 'in-progress' | 'completed' | 'failed',
        filterType?: 'set_private_wireless_gateway' | 'remove_private_wireless_gateway',
    ): CancelablePromise<{
        data?: Array<SIMCardGroupAction>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_card_group_actions',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[sim_card_group_id]': filterSimCardGroupId,
                'filter[status]': filterStatus,
                'filter[type]': filterType,
            },
        });
    }

    /**
     * Get SIM card group action details
     * This API allows fetching detailed information about a SIM card group action resource to make follow-ups in an existing asynchronous operation.
     * @param id Identifies the resource.
     * @returns any Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardGroupActionGet(
        id: string,
    ): CancelablePromise<{
        data?: SIMCardGroupAction;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_card_group_actions/{id}',
            path: {
                'id': id,
            },
        });
    }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompleteOTAUpdate } from '../models/CompleteOTAUpdate.ts';
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { SimplifiedOTAUpdate } from '../models/SimplifiedOTAUpdate.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class OtaUpdatesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List OTA updates
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterStatus Filter by a specific status of the resource's lifecycle.
     * @param filterSimCardId The SIM card identification UUID.
     * @param filterType Filter by type.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public otaUpdatesList(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterStatus?: 'in-progress' | 'completed' | 'failed',
        filterSimCardId?: string,
        filterType?: 'sim_card_network_preferences',
    ): CancelablePromise<{
        data?: Array<SimplifiedOTAUpdate>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ota_updates',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[status]': filterStatus,
                'filter[sim_card_id]': filterSimCardId,
                'filter[type]': filterType,
            },
        });
    }

    /**
     * Get OTA update
     * This API returns the details of an Over the Air (OTA) update.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public otaUpdateGet(
        id: string,
    ): CancelablePromise<{
        data?: CompleteOTAUpdate;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ota_updates/{id}',
            path: {
                'id': id,
            },
        });
    }

}

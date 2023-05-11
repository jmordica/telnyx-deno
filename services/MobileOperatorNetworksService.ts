/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { MobileOperatorNetwork } from '../models/MobileOperatorNetwork.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class MobileOperatorNetworksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List mobile operator networks
     * Telnyx has a set of GSM mobile operators partners that are available through our mobile network roaming. This resource is entirely managed by Telnyx and may change over time. That means that this resource won't allow any write operations for it. Still, it's available so it can be used as a support resource that can be related to other resources or become a configuration option.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterNameStartsWith Filter by name starting with.
     * @param filterNameContains Filter by name containing match.
     * @param filterNameEndsWith Filter by name ending with.
     * @param filterCountryCode Filter by exact country_code.
     * @param filterMcc Filter by exact MCC.
     * @param filterMnc Filter by exact MNC.
     * @param filterTadig Filter by exact TADIG.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public mobileOperatorNetworksGet(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterNameStartsWith?: string,
        filterNameContains?: string,
        filterNameEndsWith?: string,
        filterCountryCode?: string,
        filterMcc?: string,
        filterMnc?: string,
        filterTadig?: string,
    ): CancelablePromise<{
        data?: Array<MobileOperatorNetwork>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/mobile_operator_networks',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[name][starts_with]': filterNameStartsWith,
                'filter[name][contains]': filterNameContains,
                'filter[name][ends_with]': filterNameEndsWith,
                'filter[country_code]': filterCountryCode,
                'filter[mcc]': filterMcc,
                'filter[mnc]': filterMnc,
                'filter[tadig]': filterTadig,
            },
        });
    }

}

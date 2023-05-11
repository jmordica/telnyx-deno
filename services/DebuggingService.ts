/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CallEvent } from '../models/CallEvent.ts';
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class DebuggingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List call events
     * Filters call events by given filter parameters. Events are ordered by `event_timestamp`. If filter for `call_leg_id` or `call_session_id` is not present, it only filters events from the last 24 hours.
     *
     * **Note**: Only one `filter[event_timestamp]` can be passed.
     *
     * @param filterCallLegId The unique identifier of an individual call leg.
     * @param filterCallSessionId The unique identifier of the call control session. A session may include multiple call leg events.
     * @param filterStatus Event status
     * @param filterType Event type
     * @param filterEventTimestampGt Event timestamp: greater than
     * @param filterEventTimestampGte Event timestamp: greater than or equal
     * @param filterEventTimestampLt Event timestamp: lower than
     * @param filterEventTimestampLte Event timestamp: lower than or equal
     * @param filterEventTimestampEq Event timestamp: equal
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of call events.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listCallEvents(
        filterCallLegId?: string,
        filterCallSessionId?: string,
        filterStatus?: 'delivered' | 'failed',
        filterType?: 'command' | 'webhook',
        filterEventTimestampGt?: string,
        filterEventTimestampGte?: string,
        filterEventTimestampLt?: string,
        filterEventTimestampLte?: string,
        filterEventTimestampEq?: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<CallEvent>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/call_events',
            query: {
                'filter[call_leg_id]': filterCallLegId,
                'filter[call_session_id]': filterCallSessionId,
                'filter[status]': filterStatus,
                'filter[type]': filterType,
                'filter[event_timestamp][gt]': filterEventTimestampGt,
                'filter[event_timestamp][gte]': filterEventTimestampGte,
                'filter[event_timestamp][lt]': filterEventTimestampLt,
                'filter[event_timestamp][lte]': filterEventTimestampLte,
                'filter[event_timestamp][eq]': filterEventTimestampEq,
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

}

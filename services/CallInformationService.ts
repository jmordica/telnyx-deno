/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActiveCall } from '../models/ActiveCall.ts';
import type { Call } from '../models/Call.ts';
import type { CursorPaginationMeta } from '../models/CursorPaginationMeta.ts';
import type { Errors } from '../models/Errors.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class CallInformationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve a call status
     * Returns the status of a call (data is available 10 minutes after call ended).
     * @param callControlId Unique identifier and token for controlling the call
     * @returns any Successful response with details about a call status.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveCallStatus(
        callControlId: string,
    ): CancelablePromise<{
        data?: Call;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/calls/{call_control_id}',
            path: {
                'call_control_id': callControlId,
            },
        });
    }

    /**
     * List all active calls for given connection
     * Lists all active calls for given connection. Acceptable connections are either SIP connections with webhook_url or xml_request_url, call control or texml. Returned results are cursor paginated.
     *
     * @param connectionId Telnyx connection id
     * @param pageLimit Limit of records per single page
     * @param pageAfter Opaque identifier of next page
     * @param pageBefore Opaque identifier of previous page
     * @returns any Successful response with list of details about active calls.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listConnectionActiveCalls(
        connectionId: string,
        pageLimit: number = 20,
        pageAfter: string = 'null',
        pageBefore: string = 'null',
    ): CancelablePromise<{
        data?: Array<ActiveCall>;
        meta?: CursorPaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/connections/{connection_id}/active_calls',
            path: {
                'connection_id': connectionId,
            },
            query: {
                'page[limit]': pageLimit,
                'page[after]': pageAfter,
                'page[before]': pageBefore,
            },
        });
    }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class MessagingTollfreeVerificationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete Verification Request
     * Delete a verification request
     *
     * A request may only be deleted when when the request is in the "rejected" state.
     *
     * * `HTTP 200`: request successfully deleted
     * * `HTTP 400`: request exists but can't be deleted (i.e. not rejected)
     * * `HTTP 404`: request unknown or already deleted
     * @param id
     * @returns any Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteVerificationRequestPublicApiV2RequestsIdDelete(
        id: string,
    ): CancelablePromise<any | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/messaging_tollfree/verification/requests/{id}',
            path: {
                'id': id,
            },
        });
    }

}

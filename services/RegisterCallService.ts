/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { RegisterCallRequest } from '../models/RegisterCallRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class RegisterCallService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Register the call for Google Verified Calls
     * Register the call before dialing to show your brand on callee's phone.
     * @param requestBody Register call request
     * @returns any Successful response upon making a register call command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public registerCall(
        requestBody: RegisterCallRequest,
    ): CancelablePromise<{
        data?: {
            result?: string;
        };
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}

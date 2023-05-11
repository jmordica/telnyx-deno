/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { UserBalance } from '../models/UserBalance.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class BillingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve user balance details
     * @returns any Retrieve user balance details
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public getUserBalance(): CancelablePromise<{
        data?: UserBalance;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/balance',
        });
    }

}

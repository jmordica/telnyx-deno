/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PortabilityCheckDetails } from '../models/PortabilityCheckDetails.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class PhoneNumberPortingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Run a portability check
     * Runs a portability check, returning the results immediately.
     * @param requestBody
     * @returns any PortabilityCheck Response
     * @throws ApiError
     */
    public postPortabilityCheck(
        requestBody: {
            /**
             * The list of +E.164 formatted phone numbers to check for portability
             */
            phone_numbers?: Array<string>;
        },
    ): CancelablePromise<{
        data?: Array<PortabilityCheckDetails>;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/portability_checks',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

}

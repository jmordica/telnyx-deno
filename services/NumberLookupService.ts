/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { NumberLookupRecord } from '../models/NumberLookupRecord.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class NumberLookupService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Lookup phone number data
     * Returns information about the provided phone number.
     * @param phoneNumber The phone number to be looked up
     * @param type Specifies the type of number lookup to be performed
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public numberLookup(
        phoneNumber: string,
        type?: 'carrier' | 'caller-name',
    ): CancelablePromise<{
        data?: NumberLookupRecord;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/number_lookup/{phone_number}',
            path: {
                'phone_number': phoneNumber,
            },
            query: {
                'type': type,
            },
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

}

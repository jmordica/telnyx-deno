/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class EnumService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Enum
     * @param endpoint
     * @returns any Successful Response
     * @throws ApiError
     */
    public getEnumEnumEndpointGet(
        endpoint: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/enum/{endpoint}',
            path: {
                'endpoint': endpoint,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}

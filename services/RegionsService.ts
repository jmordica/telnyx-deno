/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { Region } from '../models/Region.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class RegionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all Regions
     * List all regions and the interfaces that region supports
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public regionList(): CancelablePromise<{
        data?: Array<Region>;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/regions',
        });
    }

}

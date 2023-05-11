/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class ErrorService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Error Codes
     * List all error codes
     * @returns string Successful Response
     * @throws ApiError
     */
    public listErrorCodesErrorGet(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/error',
        });
    }

}

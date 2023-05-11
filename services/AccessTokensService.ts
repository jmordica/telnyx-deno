/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class AccessTokensService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create an Access Token.
     * Create an Access Token (JWT) for the credential.
     * @param id Identifies the resource.
     * @returns string JWT
     * @throws ApiError
     */
    public createTelephonyCredentialToken(
        id: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/telephony_credentials/{id}/token',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not Found`,
            },
        });
    }

}

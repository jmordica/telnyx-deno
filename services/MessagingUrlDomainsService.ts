/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { MessagingUrlDomain } from '../models/MessagingUrlDomain.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class MessagingUrlDomainsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List messaging URL domains
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with details about a messaging URL domain.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listMessagingUrlDomains(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<MessagingUrlDomain>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messaging_url_domains',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { WhatsappBusinessAccount } from '../models/WhatsappBusinessAccount.ts';
import type { WhatsappPhoneNumber } from '../models/WhatsappPhoneNumber.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class WhatsAppBusinessAccountService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Lists the WhatsApp Business Accounts owned by the current organization
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of WhatsApp Business Accounts.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listWhatsappBusinessAccounts(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<WhatsappBusinessAccount>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/whatsapp_business_accounts',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Retrieves a WhatsApp Business Account
     * @param id Identifies the WhatsApp Business Account
     * @returns any WhatsApp Business Account details
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveWhatsappBusinessAccount(
        id: string,
    ): CancelablePromise<{
        data?: WhatsappBusinessAccount;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/whatsapp_business_accounts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieves the phone numbers from a WhatsApp Business Account
     * @param id Identifies the WhatsApp Business Account
     * @returns any Successful response with a list of WhatsApp Phone Numbers.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveWhatsappBusinessAccountPhoneNumbers(
        id: string,
    ): CancelablePromise<{
        data?: Array<WhatsappPhoneNumber>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/whatsapp_business_accounts/{id}/phone_numbers',
            path: {
                'id': id,
            },
        });
    }

}

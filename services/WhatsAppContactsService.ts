/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckContact } from '../models/CheckContact.ts';
import type { CheckContactRequestBody } from '../models/CheckContactRequestBody.ts';
import type { Errors } from '../models/Errors.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class WhatsAppContactsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Check Contact
     * Verify that a phone number belongs to a valid WhatsApp account. You must ensure that the status is valid before you can message a user, and you'll get their WhatsApp ID to use for messaging.
     * @param requestBody
     * @returns any Successful response with details about WhatsApp contact(s).
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public checkContact(
        requestBody: CheckContactRequestBody,
    ): CancelablePromise<{
        data?: Array<CheckContact>;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/whatsapp_contacts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}

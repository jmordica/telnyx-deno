/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateWhatsappMessageTemplateRequestBody } from '../models/CreateWhatsappMessageTemplateRequestBody.ts';
import type { CursorPagination } from '../models/CursorPagination.ts';
import type { Errors } from '../models/Errors.ts';
import type { WhatsappMessageTemplate } from '../models/WhatsappMessageTemplate.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class WhatsAppMessageTemplateService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List WhatsApp Message Templates
     * @param id Identifies the WhatsApp Business Account
     * @param category The template category
     * @param language The language of the whatsapp message template
     * @param name A name identifying this whatsapp message template
     * @param qualityScore The score of the whatsapp message template
     * @param rejectedReason The reason why a message template was rejected by Whatsapp
     * @param limit The maximum number of message_templates to be returned on a query, we may return less than the limit number even if more pages are available.
     * @param before Indicates that this is a query for entries before the given cursor
     * @param after Indicates that this is a query for entries after the given cursor
     * @param status Identifies the whatsApp Message Template status
     * @returns any WhatsApp Message Template
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listWhatsappMessageTemplates(
        id: string,
        category?: 'ACCOUNT_UPDATE' | 'PAYMENT_UPDATE' | 'PERSONAL_FINANCE_UPDATE' | 'SHIPPING_UPDATE' | 'RESERVATION_UPDATE' | 'ISSUE_RESOLUTION' | 'APPOINTMENT_UPDATE' | 'TRANSPORTATION_UPDATE' | 'TICKET_UPDATE' | 'ALERT_UPDATE' | 'AUTO_REPLY',
        language?: 'af' | 'sq' | 'ar' | 'az' | 'bn' | 'bg' | 'ca' | 'zh_CN' | 'zh_HK' | 'zh_TW' | 'hr' | 'cs' | 'da' | 'nl' | 'en' | 'en_GB' | 'en_US' | 'et' | 'fil' | 'fi' | 'fr' | 'ka' | 'de' | 'el' | 'gu' | 'ha' | 'he' | 'hi' | 'hu' | 'id' | 'ga' | 'it' | 'ja' | 'kn' | 'kk' | 'rw_RW' | 'ko' | 'ky_KG' | 'lo' | 'lv' | 'lt' | 'mk' | 'ms' | 'ml' | 'mr' | 'nb' | 'fa' | 'pl' | 'pt_BR' | 'pt_PT' | 'pa' | 'ro' | 'ru' | 'sr' | 'sk' | 'sl' | 'es' | 'es_AR' | 'es_ES' | 'es_MX' | 'sw' | 'sv' | 'ta' | 'te' | 'th' | 'tr' | 'uk' | 'ur' | 'uz' | 'vi' | 'zu',
        name?: string,
        qualityScore?: string,
        rejectedReason?: string,
        limit?: string,
        before?: string,
        after?: string,
        status?: string,
    ): CancelablePromise<{
        data?: Array<WhatsappMessageTemplate>;
        meta?: CursorPagination;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/whatsapp_business_accounts/{id}/whatsapp_message_templates',
            path: {
                'id': id,
            },
            query: {
                'category': category,
                'language': language,
                'name': name,
                'quality_score': qualityScore,
                'rejected_reason': rejectedReason,
                'limit': limit,
                'before': before,
                'after': after,
                'status': status,
            },
        });
    }

    /**
     * Create WhatsApp Message Templates
     * @param id Identifies the WhatsApp Business Account
     * @param requestBody
     * @returns any WhatsApp Message Template
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createWhatsappMessageTemplates(
        id: string,
        requestBody?: CreateWhatsappMessageTemplateRequestBody,
    ): CancelablePromise<{
        id?: string;
        record_type?: string;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/whatsapp_business_accounts/{id}/whatsapp_message_templates',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete WhatsApp Message Templates
     * Deletes all of the message templates with the given name and business account
     * @param id Identifies the WhatsApp Business Account
     * @param name The name of the Whatsapp Message Template
     * @returns Errors Unexpected error
     * @returns any All message templates with the given name have been deleted
     * @throws ApiError
     */
    public deleteWhatsappMessageTemplates(
        id: string,
        name: string,
    ): CancelablePromise<Errors | any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/whatsapp_business_accounts/{id}/whatsapp_message_templates/{name}',
            path: {
                'id': id,
                'name': name,
            },
        });
    }

}

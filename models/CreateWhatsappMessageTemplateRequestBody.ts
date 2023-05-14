/**
 * Telnyx API
 * SIP trunking, SMS, MMS, Call Control and Telephony Data Services.
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@telnyx.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class CreateWhatsappMessageTemplateRequestBody {
    /**
    * The template category
    */
    'category'?: CreateWhatsappMessageTemplateRequestBodyCategoryEnum;
    /**
    * The language of the whatsapp message template
    */
    'language'?: CreateWhatsappMessageTemplateRequestBodyLanguageEnum;
    /**
    * A name identifying this whatsapp message template
    */
    'name'?: string;
    /**
    * The JSON-formatted components for the this whatsapp message template, please refer to whatsapp documentation on the correct structure for this field
    */
    'components'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "category",
            "baseName": "category",
            "type": "CreateWhatsappMessageTemplateRequestBodyCategoryEnum",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "CreateWhatsappMessageTemplateRequestBodyLanguageEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "components",
            "baseName": "components",
            "type": "string",
            "format": "json"
        }    ];

    static getAttributeTypeMap() {
        return CreateWhatsappMessageTemplateRequestBody.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CreateWhatsappMessageTemplateRequestBodyCategoryEnum = "ACCOUNT_UPDATE" | "PAYMENT_UPDATE" | "PERSONAL_FINANCE_UPDATE" | "SHIPPING_UPDATE" | "RESERVATION_UPDATE" | "ISSUE_RESOLUTION" | "APPOINTMENT_UPDATE" | "TRANSPORTATION_UPDATE" | "TICKET_UPDATE" | "ALERT_UPDATE" | "AUTO_REPLY" ;
export type CreateWhatsappMessageTemplateRequestBodyLanguageEnum = "af" | "sq" | "ar" | "az" | "bn" | "bg" | "ca" | "zh_CN" | "zh_HK" | "zh_TW" | "hr" | "cs" | "da" | "nl" | "en" | "en_GB" | "en_US" | "et" | "fil" | "fi" | "fr" | "ka" | "de" | "el" | "gu" | "ha" | "he" | "hi" | "hu" | "id" | "ga" | "it" | "ja" | "kn" | "kk" | "rw_RW" | "ko" | "ky_KG" | "lo" | "lv" | "lt" | "mk" | "ms" | "ml" | "mr" | "nb" | "fa" | "pl" | "pt_BR" | "pt_PT" | "pa" | "ro" | "ru" | "sr" | "sk" | "sl" | "es" | "es_AR" | "es_ES" | "es_MX" | "sw" | "sv" | "ta" | "te" | "th" | "tr" | "uk" | "ur" | "uz" | "vi" | "zu" ;

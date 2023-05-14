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

export class Money {
    'amount'?: string;
    'currency'?: MoneyCurrencyEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "MoneyCurrencyEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Money.attributeTypeMap;
    }

    public constructor() {
    }
}


export type MoneyCurrencyEnum = "AUD" | "CAD" | "EUR" | "GBP" | "USD" ;

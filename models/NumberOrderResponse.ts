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

import { NumberOrderWithPhoneNumbers } from '../models/NumberOrderWithPhoneNumbers.ts';
import { HttpFile } from '../http/http.ts';

export class NumberOrderResponse {
    'data'?: NumberOrderWithPhoneNumbers;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "NumberOrderWithPhoneNumbers",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NumberOrderResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


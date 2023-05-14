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

import { NumberOrder } from '../models/NumberOrder.ts';
import { PaginationMeta } from '../models/PaginationMeta.ts';
import { HttpFile } from '../http/http.ts';

export class ListNumberOrdersResponse {
    'data'?: Array<NumberOrder>;
    'meta'?: PaginationMeta;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<NumberOrder>",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "PaginationMeta",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListNumberOrdersResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


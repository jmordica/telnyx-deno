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

/**
* An object representing the total cost of the order.
*/
export class SIMCardOrderCost {
    /**
    * A string representing the cost amount.
    */
    'amount'?: string;
    /**
    * Filter by ISO 4217 currency string.
    */
    'currency'?: string;

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
            "type": "string",
            "format": "currency"
        }    ];

    static getAttributeTypeMap() {
        return SIMCardOrderCost.attributeTypeMap;
    }

    public constructor() {
    }
}

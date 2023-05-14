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
* The SIM card individual data limit configuration.
*/
export class SIMCardDataLimit {
    'amount'?: string;
    'unit'?: SIMCardDataLimitUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string",
            "format": "decimal"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "SIMCardDataLimitUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SIMCardDataLimit.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SIMCardDataLimitUnitEnum = "MB" | "GB" ;


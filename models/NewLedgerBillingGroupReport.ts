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

export class NewLedgerBillingGroupReport {
    /**
    * Year of the ledger billing group report
    */
    'year'?: number;
    /**
    * Month of the ledger billing group report
    */
    'month'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "year",
            "baseName": "year",
            "type": "number",
            "format": ""
        },
        {
            "name": "month",
            "baseName": "month",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NewLedgerBillingGroupReport.attributeTypeMap;
    }

    public constructor() {
    }
}

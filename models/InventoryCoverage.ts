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

export class InventoryCoverage {
    'group'?: string;
    'groupType'?: string;
    'numberRange'?: number;
    'numberType'?: InventoryCoverageNumberTypeEnum;
    'phoneNumberType'?: InventoryCoveragePhoneNumberTypeEnum;
    'coverageType'?: InventoryCoverageCoverageTypeEnum;
    'recordType'?: string;
    'count'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "group",
            "baseName": "group",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupType",
            "baseName": "group_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "numberRange",
            "baseName": "number_range",
            "type": "number",
            "format": ""
        },
        {
            "name": "numberType",
            "baseName": "number_type",
            "type": "InventoryCoverageNumberTypeEnum",
            "format": ""
        },
        {
            "name": "phoneNumberType",
            "baseName": "phone_number_type",
            "type": "InventoryCoveragePhoneNumberTypeEnum",
            "format": ""
        },
        {
            "name": "coverageType",
            "baseName": "coverage_type",
            "type": "InventoryCoverageCoverageTypeEnum",
            "format": ""
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InventoryCoverage.attributeTypeMap;
    }

    public constructor() {
    }
}


export type InventoryCoverageNumberTypeEnum = "did" | "toll-free" ;
export type InventoryCoveragePhoneNumberTypeEnum = "local" | "toll_free" | "national" | "landline" | "shared_cost" | "mobile" ;
export type InventoryCoverageCoverageTypeEnum = "number" | "block" ;

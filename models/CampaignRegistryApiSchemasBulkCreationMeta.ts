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

export class CampaignRegistryApiSchemasBulkCreationMeta {
    'page': number;
    'recordsPerPage': number;
    'totalPages': number;
    'totalRecords': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": ""
        },
        {
            "name": "recordsPerPage",
            "baseName": "recordsPerPage",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalRecords",
            "baseName": "totalRecords",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CampaignRegistryApiSchemasBulkCreationMeta.attributeTypeMap;
    }

    public constructor() {
    }
}


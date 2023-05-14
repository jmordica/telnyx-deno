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

export class Metadata {
    /**
    * Total number of pages based on pagination settings
    */
    'totalPages'?: number;
    /**
    * Total number of results
    */
    'totalResults'?: number;
    /**
    * Current Page based on pagination settings (included when defaults are used.)
    */
    'pageNumber'?: number;
    /**
    * Number of results to return per page based on pagination settings (included when defaults are used.)
    */
    'pageSize'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "totalPages",
            "baseName": "total_pages",
            "type": "number",
            "format": "double"
        },
        {
            "name": "totalResults",
            "baseName": "total_results",
            "type": "number",
            "format": "double"
        },
        {
            "name": "pageNumber",
            "baseName": "page_number",
            "type": "number",
            "format": "double"
        },
        {
            "name": "pageSize",
            "baseName": "page_size",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return Metadata.attributeTypeMap;
    }

    public constructor() {
    }
}


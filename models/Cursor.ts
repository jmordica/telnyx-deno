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

export class Cursor {
    /**
    * Opaque identifier of next page.
    */
    'after'?: string;
    /**
    * Opaque identifier of previous page.
    */
    'before'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "after",
            "baseName": "after",
            "type": "string",
            "format": ""
        },
        {
            "name": "before",
            "baseName": "before",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Cursor.attributeTypeMap;
    }

    public constructor() {
    }
}

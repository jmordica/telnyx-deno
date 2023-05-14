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
* Indicates the document\'s filesize
*/
export class DocServiceDocumentAllOfSize {
    /**
    * Identifies the unit
    */
    'unit'?: string;
    /**
    * The number of bytes
    */
    'amount'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocServiceDocumentAllOfSize.attributeTypeMap;
    }

    public constructor() {
    }
}

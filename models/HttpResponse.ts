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
* Response details, optional.
*/
export class HttpResponse {
    'status'?: number;
    /**
    * List of headers, limited to 10kB.
    */
    'headers'?: Array<string>;
    /**
    * Raw response body, limited to 10kB.
    */
    'body'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "number",
            "format": ""
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return HttpResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


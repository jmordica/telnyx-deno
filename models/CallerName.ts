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

export class CallerName {
    /**
    * The name of the requested phone number\'s owner as per the CNAM database
    */
    'callerName'?: string;
    /**
    * A caller-name lookup specific error code, expressed as a stringified 5-digit integer
    */
    'errorCode'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "callerName",
            "baseName": "caller_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "errorCode",
            "baseName": "error_code",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CallerName.attributeTypeMap;
    }

    public constructor() {
    }
}

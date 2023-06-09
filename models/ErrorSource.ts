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

export class ErrorSource {
    /**
    * JSON pointer (RFC6901) to the offending entity.
    */
    'pointer'?: string;
    /**
    * Indicates which query parameter caused the error.
    */
    'parameter'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pointer",
            "baseName": "pointer",
            "type": "string",
            "format": "json-pointer"
        },
        {
            "name": "parameter",
            "baseName": "parameter",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ErrorSource.attributeTypeMap;
    }

    public constructor() {
    }
}


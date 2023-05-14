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

export class CreateTeXMLSecretResult {
    'name'?: string;
    'value'?: CreateTeXMLSecretResultValueEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "CreateTeXMLSecretResultValueEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateTeXMLSecretResult.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CreateTeXMLSecretResultValueEnum = "*****" ;


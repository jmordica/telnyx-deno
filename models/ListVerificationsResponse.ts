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

import { Meta } from '../models/Meta.ts';
import { Verification } from '../models/Verification.ts';
import { HttpFile } from '../http/http.ts';

export class ListVerificationsResponse {
    'data': Array<Verification>;
    'meta': Meta;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Verification>",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "Meta",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListVerificationsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


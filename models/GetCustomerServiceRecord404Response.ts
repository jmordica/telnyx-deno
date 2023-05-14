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

import { ResourceNotFoundError } from '../models/ResourceNotFoundError.ts';
import { HttpFile } from '../http/http.ts';

export class GetCustomerServiceRecord404Response {
    'errors'?: Array<ResourceNotFoundError>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ResourceNotFoundError>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetCustomerServiceRecord404Response.attributeTypeMap;
    }

    public constructor() {
    }
}

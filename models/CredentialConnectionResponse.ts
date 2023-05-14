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

import { CredentialConnection } from '../models/CredentialConnection.ts';
import { HttpFile } from '../http/http.ts';

export class CredentialConnectionResponse {
    'data'?: CredentialConnection;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "CredentialConnection",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CredentialConnectionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

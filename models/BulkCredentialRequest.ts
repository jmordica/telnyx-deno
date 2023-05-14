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

export class BulkCredentialRequest {
    /**
    * A default name for all credentials.
    */
    'name'?: string;
    /**
    * Tags a credential for bulk operations. A single tag can hold at maximum 1000 credentials.
    */
    'tag': string;
    /**
    * Amount of credentials to be created. A single tag can hold at maximum 1000 credentials
    */
    'amount'?: number;
    /**
    * Identifies the connection this credential is associated with.
    */
    'connectionId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "connectionId",
            "baseName": "connection_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BulkCredentialRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


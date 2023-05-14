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

export class WireguardAllowedIP {
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: string;
    /**
    * The IP address to add to the Wireguard Interface\'s AllowedIP list.
    */
    'ipAddress'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipAddress",
            "baseName": "ip_address",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WireguardAllowedIP.attributeTypeMap;
    }

    public constructor() {
    }
}

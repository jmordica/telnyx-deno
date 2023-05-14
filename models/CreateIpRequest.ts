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

export class CreateIpRequest {
    /**
    * ID of the IP Connection to which this IP should be attached.
    */
    'connectionId'?: string;
    /**
    * IP adddress represented by this resource.
    */
    'ipAddress': string;
    /**
    * Port to use when connecting to this IP.
    */
    'port'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "connectionId",
            "baseName": "connection_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipAddress",
            "baseName": "ip_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateIpRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


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

export class Ip {
    /**
    * Identifies the type of resource.
    */
    'id'?: string;
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: string;
    /**
    * ID of the IP Connection to which this IP should be attached.
    */
    'connectionId'?: string;
    /**
    * IP adddress represented by this resource.
    */
    'ipAddress'?: string;
    /**
    * Port to use when connecting to this IP.
    */
    'port'?: number;
    /**
    * ISO 8601 formatted date indicating when the resource was created.
    */
    'createdAt'?: string;
    /**
    * ISO 8601 formatted date indicating when the resource was updated.
    */
    'updatedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        },
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
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Ip.attributeTypeMap;
    }

    public constructor() {
    }
}

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

import { InterfaceStatus } from '../models/InterfaceStatus.ts';
import { RegionOutRegion } from '../models/RegionOutRegion.ts';
import { HttpFile } from '../http/http.ts';

export class PublicInternetGatewayRead {
    /**
    * Identifies the resource.
    */
    'id'?: string;
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: string;
    /**
    * ISO 8601 formatted date-time indicating when the resource was created.
    */
    'createdAt'?: string;
    /**
    * ISO 8601 formatted date-time indicating when the resource was updated.
    */
    'updatedAt'?: string;
    /**
    * The id of the network associated with the interface.
    */
    'networkId'?: string;
    /**
    * A user specified name for the interface.
    */
    'name'?: string;
    'status'?: InterfaceStatus;
    /**
    * The publically accessible ip for this interface.
    */
    'publicIp'?: string;
    /**
    * The region interface is deployed to.
    */
    'regionCode'?: string;
    'region'?: RegionOutRegion;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
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
        },
        {
            "name": "networkId",
            "baseName": "network_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "InterfaceStatus",
            "format": ""
        },
        {
            "name": "publicIp",
            "baseName": "public_ip",
            "type": "string",
            "format": ""
        },
        {
            "name": "regionCode",
            "baseName": "region_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "RegionOutRegion",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicInternetGatewayRead.attributeTypeMap;
    }

    public constructor() {
    }
}




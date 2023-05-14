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
import { HttpFile } from '../http/http.ts';

export class VirtualCrossConnectCreate {
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
    'networkId': string;
    /**
    * A user specified name for the interface.
    */
    'name'?: string;
    'status'?: InterfaceStatus;
    /**
    * The Virtual Private Cloud with which you would like to establish a cross connect.
    */
    'cloudProvider': VirtualCrossConnectCreateCloudProviderEnum;
    /**
    * The region where your Virtual Private Cloud hosts are located.<br /><br />The available regions can be found using the /virtual_cross_connect_regions endpoint.
    */
    'cloudRegion': string;
    /**
    * The Border Gateway Protocol (BGP) Autonomous System Number (ASN). If null, value will be assigned by Telnyx.
    */
    'bgpAsn': number;
    /**
    * The desired throughput in Megabits per Second (Mbps) for your Virtual Cross Connect.<br /><br />The available bandwidths can be found using the /virtual_cross_connect_regions endpoint.
    */
    'bandwidthMbps'?: number;
    /**
    * Indicates whether the primary circuit is enabled. Setting this to `false` will disable the circuit.
    */
    'primaryEnabled'?: boolean;
    /**
    * The identifier for your Virtual Private Cloud. The number will be different based upon your Cloud provider.
    */
    'primaryCloudAccountId': string;
    /**
    * The IP address assigned to the Telnyx side of the Virtual Cross Connect.<br /><br />If none is provided, one will be generated for you.<br /><br />This value should be null for GCE as Google will only inform you of your assigned IP once the connection has been accepted.
    */
    'primaryTelnyxIp'?: string;
    /**
    * The IP address assigned for your side of the Virtual Cross Connect.<br /><br />If none is provided, one will be generated for you.<br /><br />This value should be null for GCE as Google will only inform you of your assigned IP once the connection has been accepted.
    */
    'primaryCloudIp'?: string;
    /**
    * The authentication key for BGP peer configuration.
    */
    'primaryBgpKey'?: string;
    /**
    * Indicates whether the secondary circuit is enabled. Setting this to `false` will disable the circuit.
    */
    'secondaryEnabled'?: boolean;
    /**
    * The identifier for your Virtual Private Cloud. The number will be different based upon your Cloud provider.<br /><br />This attribute is only necessary for GCE.
    */
    'secondaryCloudAccountId'?: string;
    /**
    * The IP address assigned to the Telnyx side of the Virtual Cross Connect.<br /><br />If none is provided, one will be generated for you.<br /><br />This value should be null for GCE as Google will only inform you of your assigned IP once the connection has been accepted.
    */
    'secondaryTelnyxIp'?: string;
    /**
    * The IP address assigned for your side of the Virtual Cross Connect.<br /><br />If none is provided, one will be generated for you.<br /><br />This value should be null for GCE as Google will only inform you of your assigned IP once the connection has been accepted.
    */
    'secondaryCloudIp'?: string;
    /**
    * The authentication key for BGP peer configuration.
    */
    'secondaryBgpKey'?: string;
    /**
    * The region the interface should be deployed to.
    */
    'regionCode': string;

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
            "name": "cloudProvider",
            "baseName": "cloud_provider",
            "type": "VirtualCrossConnectCreateCloudProviderEnum",
            "format": ""
        },
        {
            "name": "cloudRegion",
            "baseName": "cloud_region",
            "type": "string",
            "format": ""
        },
        {
            "name": "bgpAsn",
            "baseName": "bgp_asn",
            "type": "number",
            "format": ""
        },
        {
            "name": "bandwidthMbps",
            "baseName": "bandwidth_mbps",
            "type": "number",
            "format": ""
        },
        {
            "name": "primaryEnabled",
            "baseName": "primary_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "primaryCloudAccountId",
            "baseName": "primary_cloud_account_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "primaryTelnyxIp",
            "baseName": "primary_telnyx_ip",
            "type": "string",
            "format": "ipv4"
        },
        {
            "name": "primaryCloudIp",
            "baseName": "primary_cloud_ip",
            "type": "string",
            "format": "ipv4"
        },
        {
            "name": "primaryBgpKey",
            "baseName": "primary_bgp_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "secondaryEnabled",
            "baseName": "secondary_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secondaryCloudAccountId",
            "baseName": "secondary_cloud_account_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "secondaryTelnyxIp",
            "baseName": "secondary_telnyx_ip",
            "type": "string",
            "format": "ipv4"
        },
        {
            "name": "secondaryCloudIp",
            "baseName": "secondary_cloud_ip",
            "type": "string",
            "format": "ipv4"
        },
        {
            "name": "secondaryBgpKey",
            "baseName": "secondary_bgp_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "regionCode",
            "baseName": "region_code",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VirtualCrossConnectCreate.attributeTypeMap;
    }

    public constructor() {
    }
}


export type VirtualCrossConnectCreateCloudProviderEnum = "aws" | "azure" | "gce" ;


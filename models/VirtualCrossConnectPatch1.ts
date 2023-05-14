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

export class VirtualCrossConnectPatch1 {
    /**
    * Indicates whether the primary circuit is enabled. Setting this to `false` will disable the circuit.
    */
    'primaryEnabled'?: boolean;
    /**
    * Whether the primary BGP route is being announced.
    */
    'primaryRoutingAnnouncement'?: boolean;
    /**
    * The IP address assigned for your side of the Virtual Cross Connect.<br /><br />If none is provided, one will be generated for you.<br /><br />This value can not be patched once the VXC has bene provisioned.
    */
    'primaryCloudIp'?: string;
    /**
    * Indicates whether the secondary circuit is enabled. Setting this to `false` will disable the circuit.
    */
    'secondaryEnabled'?: boolean;
    /**
    * Whether the secondary BGP route is being announced.
    */
    'secondaryRoutingAnnouncement'?: boolean;
    /**
    * The IP address assigned for your side of the Virtual Cross Connect.<br /><br />If none is provided, one will be generated for you.<br /><br />This value can not be patched once the VXC has bene provisioned.
    */
    'secondaryCloudIp'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "primaryEnabled",
            "baseName": "primary_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "primaryRoutingAnnouncement",
            "baseName": "primary_routing_announcement",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "primaryCloudIp",
            "baseName": "primary_cloud_ip",
            "type": "string",
            "format": "ipv4"
        },
        {
            "name": "secondaryEnabled",
            "baseName": "secondary_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secondaryRoutingAnnouncement",
            "baseName": "secondary_routing_announcement",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secondaryCloudIp",
            "baseName": "secondary_cloud_ip",
            "type": "string",
            "format": "ipv4"
        }    ];

    static getAttributeTypeMap() {
        return VirtualCrossConnectPatch1.attributeTypeMap;
    }

    public constructor() {
    }
}


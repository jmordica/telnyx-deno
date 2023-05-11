/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Interface } from './Interface.ts';
import type { Record } from './Record.ts';

export type VirtualCrossConnect = (Record & Interface & {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * The Virtual Private Cloud with which you would like to establish a cross connect.
     */
    cloud_provider?: VirtualCrossConnect.cloud_provider;
    /**
     * The region where your Virtual Private Cloud hosts are located.<br /><br />The available regions can be found using the /virtual_cross_connect_regions endpoint.
     */
    cloud_region?: string;
    /**
     * The Border Gateway Protocol (BGP) Autonomous System Number (ASN). If null, value will be assigned by Telnyx.
     */
    bgp_asn?: number;
    /**
     * The desired throughput in Megabits per Second (Mbps) for your Virtual Cross Connect.<br /><br />The available bandwidths can be found using the /virtual_cross_connect_regions endpoint.
     */
    bandwidth_mbps?: number;
    /**
     * Indicates whether the primary circuit is enabled. Setting this to `false` will disable the circuit.
     */
    readonly primary_enabled?: boolean;
    /**
     * The identifier for your Virtual Private Cloud. The number will be different based upon your Cloud provider.
     */
    primary_cloud_account_id?: string;
    /**
     * The IP address assigned to the Telnyx side of the Virtual Cross Connect.<br /><br />If none is provided, one will be generated for you.<br /><br />This value should be null for GCE as Google will only inform you of your assigned IP once the connection has been accepted.
     */
    primary_telnyx_ip?: string;
    /**
     * The IP address assigned for your side of the Virtual Cross Connect.<br /><br />If none is provided, one will be generated for you.<br /><br />This value should be null for GCE as Google will only inform you of your assigned IP once the connection has been accepted.
     */
    primary_cloud_ip?: string;
    /**
     * The authentication key for BGP peer configuration.
     */
    primary_bgp_key?: string;
    /**
     * Indicates whether the secondary circuit is enabled. Setting this to `false` will disable the circuit.
     */
    readonly secondary_enabled?: boolean;
    /**
     * The identifier for your Virtual Private Cloud. The number will be different based upon your Cloud provider.<br /><br />This attribute is only necessary for GCE.
     */
    secondary_cloud_account_id?: string;
    /**
     * The IP address assigned to the Telnyx side of the Virtual Cross Connect.<br /><br />If none is provided, one will be generated for you.<br /><br />This value should be null for GCE as Google will only inform you of your assigned IP once the connection has been accepted.
     */
    secondary_telnyx_ip?: string;
    /**
     * The IP address assigned for your side of the Virtual Cross Connect.<br /><br />If none is provided, one will be generated for you.<br /><br />This value should be null for GCE as Google will only inform you of your assigned IP once the connection has been accepted.
     */
    secondary_cloud_ip?: string;
    /**
     * The authentication key for BGP peer configuration.
     */
    secondary_bgp_key?: string;
});

export namespace VirtualCrossConnect {

    /**
     * The Virtual Private Cloud with which you would like to establish a cross connect.
     */
    export enum cloud_provider {
        AWS = 'aws',
        AZURE = 'azure',
        GCE = 'gce',
    }


}


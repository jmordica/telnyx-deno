/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VirtualCrossConnectPatch = {
    /**
     * Indicates whether the primary circuit is enabled. Setting this to `false` will disable the circuit.
     */
    primary_enabled?: boolean;
    /**
     * Whether the primary BGP route is being announced.
     */
    primary_routing_announcement?: boolean;
    /**
     * The IP address assigned for your side of the Virtual Cross Connect.<br /><br />If none is provided, one will be generated for you.<br /><br />This value can not be patched once the VXC has bene provisioned.
     */
    primary_cloud_ip?: string;
    /**
     * Indicates whether the secondary circuit is enabled. Setting this to `false` will disable the circuit.
     */
    secondary_enabled?: boolean;
    /**
     * Whether the secondary BGP route is being announced.
     */
    secondary_routing_announcement?: boolean;
    /**
     * The IP address assigned for your side of the Virtual Cross Connect.<br /><br />If none is provided, one will be generated for you.<br /><br />This value can not be patched once the VXC has bene provisioned.
     */
    secondary_cloud_ip?: string;
};


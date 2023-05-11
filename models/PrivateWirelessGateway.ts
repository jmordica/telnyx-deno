/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrivateWirelessGatewayStatus } from './PrivateWirelessGatewayStatus.ts';
import type { PWGAssignedResourcesSummary } from './PWGAssignedResourcesSummary.ts';

export type PrivateWirelessGateway = {
    /**
     * Identifies the resource.
     */
    readonly id?: string;
    /**
     * The identification of the related network resource.
     */
    network_id?: string;
    readonly record_type?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    readonly updated_at?: string;
    /**
     * The private wireless gateway name.
     */
    name?: string;
    /**
     * The geographical region where the Private Wireless Gateway is deployed to.
     */
    region_code?: string;
    status?: PrivateWirelessGatewayStatus;
    /**
     * IP block used to assign IPs to the SIM cards in the Private Wireless Gateway.
     */
    readonly ip_range?: string;
    /**
     * A list of the resources that have been assigned to the Private Wireless Gateway
     */
    assigned_resources?: Array<PWGAssignedResourcesSummary>;
};


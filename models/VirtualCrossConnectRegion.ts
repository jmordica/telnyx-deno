/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Record } from './Record.ts';

export type VirtualCrossConnectRegion = (Record & {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * The region the interface is deployed to.
     */
    region_code?: string;
    /**
     * The Virtual Private Cloud with which you would like to establish a cross connect.
     */
    cloud_provider?: VirtualCrossConnectRegion.cloud_provider;
    /**
     * The region where your Virtual Private Cloud hosts are located.
     */
    cloud_region?: string;
    /**
     * The available throughput in Megabits per Second (Mbps) for your Virtual Cross Connect.
     */
    bandwidth_mbps?: Array<number>;
});

export namespace VirtualCrossConnectRegion {

    /**
     * The Virtual Private Cloud with which you would like to establish a cross connect.
     */
    export enum cloud_provider {
        AWS = 'aws',
        AZURE = 'azure',
        GCE = 'gce',
    }


}


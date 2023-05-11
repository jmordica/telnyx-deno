/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InterfaceStatus } from './InterfaceStatus.ts';
import type { Record } from './Record.ts';

export type GlobalIpAssignment = (Record & {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * Global IP ID.
     */
    global_ip_id?: string;
    /**
     * Wireguard peer ID.
     */
    wireguard_peer_id?: string;
    status?: InterfaceStatus;
    /**
     * Wireguard peer is connected.
     */
    readonly is_connected?: boolean;
    /**
     * Enable/disable BGP announcement.
     */
    is_in_maintenance?: boolean;
    /**
     * Status of BGP announcement.
     */
    readonly is_announced?: boolean;
});


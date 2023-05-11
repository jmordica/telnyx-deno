/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Record } from './Record.ts';

export type WireguardPeerAllowedIP = (Record & {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * The IP address to add to the Wireguard Interface's AllowedIP list.
     */
    ip_address?: string;
});


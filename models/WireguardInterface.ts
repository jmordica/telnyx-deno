/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Interface } from './Interface.ts';
import type { Record } from './Record.ts';

export type WireguardInterface = (Record & Interface & {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * The Telnyx WireGuard peers `Peer.endpoint` value.
     */
    readonly endpoint?: string;
    /**
     * The Telnyx WireGuard peers `Peer.PublicKey`.
     */
    readonly public_key?: string;
});


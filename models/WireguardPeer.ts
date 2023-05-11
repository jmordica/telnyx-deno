/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Record } from './Record.ts';
import type { WireguardPeerPatch } from './WireguardPeerPatch.ts';

export type WireguardPeer = (Record & WireguardPeerPatch & {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * ISO 8601 formatted date-time indicating when peer sent traffic last time.
     */
    readonly last_seen?: string;
    /**
     * The id of the wireguard interface associated with the peer.
     */
    wireguard_interface_id?: string;
    /**
     * Your WireGuard `Interface.PrivateKey`.<br /><br />This attribute is only ever utlised if, on POST, you do NOT provide your own `public_key`. In which case, a new Public and Private key pair will be generated for you. When your `private_key` is returned, you must save this immediately as we do not save it within Telnyx. If you lose your Private Key, it can not be recovered.
     */
    readonly private_key?: string;
});


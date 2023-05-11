/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GlobalIpAssignment } from './GlobalIpAssignment.ts';

export type GlobalIpAssignmentUpdate = (GlobalIpAssignment & {
    readonly global_ip_id?: any;
    readonly wireguard_peer_id?: any;
});


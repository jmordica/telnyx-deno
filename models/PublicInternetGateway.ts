/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Interface } from './Interface.ts';
import type { Record } from './Record.ts';

export type PublicInternetGateway = (Record & Interface & {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * The publically accessible ip for this interface.
     */
    readonly public_ip?: string;
});


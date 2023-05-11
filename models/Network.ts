/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Record } from './Record.ts';

export type Network = (Record & {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * A user specified name for the network.
     */
    name?: string;
});


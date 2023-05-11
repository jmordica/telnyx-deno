/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Interface } from './Interface.ts';
import type { Record } from './Record.ts';
import type { RegionOut } from './RegionOut.ts';

export type NetworkInterface = (Record & Interface & RegionOut & {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * Identifies the type of the interface.
     */
    readonly type?: string;
});


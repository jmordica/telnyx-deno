/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Record } from './Record.ts';

export type GlobalIP = (Record & {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * The Global IP address.
     */
    readonly ip_address?: string;
    /**
     * A Global IP ports grouped by protocol code.
     */
    ports?: Record<string, any>;
    /**
     * A user specified name for the address.
     */
    name?: string;
    /**
     * A user specified description for the address.
     */
    description?: string;
});


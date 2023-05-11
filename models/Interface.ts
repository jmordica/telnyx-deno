/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InterfaceStatus } from './InterfaceStatus.ts';

export type Interface = {
    /**
     * The id of the network associated with the interface.
     */
    network_id?: string;
    /**
     * A user specified name for the interface.
     */
    name?: string;
    status?: InterfaceStatus;
};


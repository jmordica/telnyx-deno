/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedAt } from './CreatedAt.ts';
import type { Id } from './Id.ts';
import type { UpdatedAt } from './UpdatedAt.ts';

/**
 * This object represents a bulk SIM card action. It groups SIM card actions created through a bulk endpoint under a single resource for further lookup.
 */
export type BulkSIMCardAction = {
    id?: Id;
    readonly record_type?: string;
    /**
     * The operation type. It can be one of the following: <br/>
     * <ul>
     * <li><code>bulk_set_public_ips</code> - set a public IP for each specified SIM card</li>
     * </ul>
     */
    readonly action_type?: BulkSIMCardAction.action_type;
    /**
     * A JSON object representation of the bulk action payload.
     */
    readonly settings?: Record<string, any>;
    created_at?: CreatedAt;
    updated_at?: UpdatedAt;
};

export namespace BulkSIMCardAction {

    /**
     * The operation type. It can be one of the following: <br/>
     * <ul>
     * <li><code>bulk_set_public_ips</code> - set a public IP for each specified SIM card</li>
     * </ul>
     */
    export enum action_type {
        BULK_SET_PUBLIC_IPS = 'bulk_set_public_ips',
    }


}


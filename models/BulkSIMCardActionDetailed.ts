/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedAt } from './CreatedAt.ts';
import type { Id } from './Id.ts';
import type { SIMCardActionsSummary } from './SIMCardActionsSummary.ts';
import type { UpdatedAt } from './UpdatedAt.ts';

export type BulkSIMCardActionDetailed = {
    id?: Id;
    readonly record_type?: string;
    /**
     * The operation type. It can be one of the following: <br/>
     * <ul>
     * <li><code>bulk_set_public_ips</code> - set a public IP for each specified SIM card</li>
     * </ul>
     */
    readonly action_type?: BulkSIMCardActionDetailed.action_type;
    /**
     * A JSON object representation of the bulk action payload.
     */
    readonly settings?: Record<string, any>;
    sim_card_actions_summary?: Array<SIMCardActionsSummary>;
    created_at?: CreatedAt;
    updated_at?: UpdatedAt;
};

export namespace BulkSIMCardActionDetailed {

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


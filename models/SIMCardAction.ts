/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedAt } from './CreatedAt.ts';
import type { Id } from './Id.ts';
import type { UpdatedAt } from './UpdatedAt.ts';

/**
 * This object represents a SIM card action. It allows tracking the current status of an operation that impacts the SIM card.
 */
export type SIMCardAction = {
    id?: Id;
    readonly record_type?: string;
    /**
     * The related SIM card identifier.
     */
    readonly sim_card_id?: string;
    /**
     * The operation type. It can be one of the following: <br/>
     * <ul>
     * <li><code>enable</code> - move the SIM card to the <code>enabled</code> status</li>
     * <li><code>enable_standby_sim_card</code> - move a SIM card previously on the <code>standby</code> status to the <code>enabled</code> status after it consumes data.</li>
     * <li><code>disable</code> - move the SIM card to the <code>disabled</code> status</li>
     * <li><code>set_standby</code> - move the SIM card to the <code>standby</code> status</li>
     * </ul>
     */
    readonly action_type?: SIMCardAction.action_type;
    status?: {
        /**
         * The current status of the SIM card action.
         */
        readonly value?: SIMCardAction.value;
        /**
         * It describes why the SIM card action is in the current status. This will be <code>null</code> for self-explanatory statuses, such as <code>in-progress</code> and <code>completed</code> but will include further information on statuses like <code>interrupted</code> and <code>failed</code>.
         */
        readonly reason?: string;
    };
    /**
     * A JSON object representation of the action params.
     */
    readonly settings?: Record<string, any> | null;
    created_at?: CreatedAt;
    updated_at?: UpdatedAt;
};

export namespace SIMCardAction {

    /**
     * The operation type. It can be one of the following: <br/>
     * <ul>
     * <li><code>enable</code> - move the SIM card to the <code>enabled</code> status</li>
     * <li><code>enable_standby_sim_card</code> - move a SIM card previously on the <code>standby</code> status to the <code>enabled</code> status after it consumes data.</li>
     * <li><code>disable</code> - move the SIM card to the <code>disabled</code> status</li>
     * <li><code>set_standby</code> - move the SIM card to the <code>standby</code> status</li>
     * </ul>
     */
    export enum action_type {
        ENABLE = 'enable',
        ENABLE_STANDBY_SIM_CARD = 'enable_standby_sim_card',
        DISABLE = 'disable',
        SET_STANDBY = 'set_standby',
    }

    /**
     * The current status of the SIM card action.
     */
    export enum value {
        IN_PROGRESS = 'in-progress',
        COMPLETED = 'completed',
        FAILED = 'failed',
        INTERRUPTED = 'interrupted',
    }


}


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This object represents a SIM card group action request. It allows tracking the current status of an operation that impacts the SIM card group and SIM card in it.
 */
export type SIMCardGroupAction = {
    /**
     * Identifies the resource.
     */
    readonly id?: string;
    readonly record_type?: string;
    /**
     * The SIM card group identification.
     */
    sim_card_group_id?: string;
    /**
     * Represents the type of the operation requested.
     */
    type?: SIMCardGroupAction.type;
    status?: SIMCardGroupAction.status;
    /**
     * A JSON object representation of the action params.
     */
    settings?: {
        /**
         * The identification of the related Private Wireless Gateway resource.
         */
        private_wireless_gateway_id?: string;
    };
    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    readonly updated_at?: string;
};

export namespace SIMCardGroupAction {

    /**
     * Represents the type of the operation requested.
     */
    export enum type {
        SET_PRIVATE_WIRELESS_GATEWAY = 'set_private_wireless_gateway',
        REMOVE_PRIVATE_WIRELESS_GATEWAY = 'remove_private_wireless_gateway',
    }

    export enum status {
        IN_PROGRESS = 'in-progress',
        COMPLETED = 'completed',
        FAILED = 'failed',
    }


}


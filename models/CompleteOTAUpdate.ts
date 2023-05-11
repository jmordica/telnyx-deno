/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MobileOperatorNetworksPreferencesResponse } from './MobileOperatorNetworksPreferencesResponse.ts';

/**
 * This object represents an Over the Air (OTA) update request. It allows tracking the current status of a operation that apply settings in a particular SIM card. <br/><br/>
 */
export type CompleteOTAUpdate = {
    /**
     * Identifies the resource.
     */
    readonly id?: string;
    readonly record_type?: string;
    /**
     * The identification UUID of the related SIM card resource.
     */
    sim_card_id?: string;
    /**
     * Represents the type of the operation requested. This will relate directly to the source of the request.
     */
    type?: CompleteOTAUpdate.type;
    status?: CompleteOTAUpdate.status;
    /**
     * A JSON object representation of the operation. The information present here will relate directly to the source of the OTA request.
     */
    settings?: {
        mobile_operator_networks_preferences?: MobileOperatorNetworksPreferencesResponse;
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

export namespace CompleteOTAUpdate {

    /**
     * Represents the type of the operation requested. This will relate directly to the source of the request.
     */
    export enum type {
        SIM_CARD_NETWORK_PREFERENCES = 'sim_card_network_preferences',
    }

    export enum status {
        IN_PROGRESS = 'in-progress',
        COMPLETED = 'completed',
        FAILED = 'failed',
    }


}

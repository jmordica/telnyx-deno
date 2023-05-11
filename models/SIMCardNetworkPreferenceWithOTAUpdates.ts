/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompleteOTAUpdate } from './CompleteOTAUpdate.ts';
import type { MobileOperatorNetworksPreferencesResponse } from './MobileOperatorNetworksPreferencesResponse.ts';

export type SIMCardNetworkPreferenceWithOTAUpdates = {
    readonly record_type?: string;
    sim_card_id?: string;
    mobile_operator_networks_preferences?: MobileOperatorNetworksPreferencesResponse;
    ota_updates?: Array<CompleteOTAUpdate>;
    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    readonly updated_at?: string;
};


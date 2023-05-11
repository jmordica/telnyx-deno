/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MobileOperatorNetworksPreferencesResponse } from './MobileOperatorNetworksPreferencesResponse.ts';

export type SIMCardNetworkPreference = {
    readonly record_type?: string;
    sim_card_id?: string;
    mobile_operator_networks_preferences?: MobileOperatorNetworksPreferencesResponse;
    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    readonly updated_at?: string;
};


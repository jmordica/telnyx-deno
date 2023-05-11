/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DynamicEmergencyAddress = {
    readonly id?: string;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * Unique location reference string to be used in SIP INVITE from / p-asserted headers.
     */
    readonly sip_geolocation_id?: string;
    /**
     * Status of dynamic emergency address
     */
    readonly status?: DynamicEmergencyAddress.status;
    house_number: string;
    house_suffix?: string;
    street_pre_directional?: string;
    street_name: string;
    street_suffix?: string;
    street_post_directional?: string;
    extended_address?: string;
    locality: string;
    administrative_area: string;
    postal_code: string;
    country_code?: DynamicEmergencyAddress.country_code;
    /**
     * ISO 8601 formatted date of when the resource was created
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date of when the resource was last updated
     */
    readonly updated_at?: string;
};

export namespace DynamicEmergencyAddress {

    /**
     * Status of dynamic emergency address
     */
    export enum status {
        PENDING = 'pending',
        ACTIVATED = 'activated',
        REJECTED = 'rejected',
    }

    export enum country_code {
        US = 'US',
        CA = 'CA',
        PR = 'PR',
    }


}


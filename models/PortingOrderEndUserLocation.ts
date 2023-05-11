/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PortingOrderEndUserLocation = {
    /**
     * First line of billing address
     */
    street_address?: string;
    /**
     * Second line of billing address
     */
    extended_address?: string;
    /**
     * City or municipality of billing address
     */
    locality?: string;
    /**
     * State, province, or similar of billing address
     */
    administrative_area?: string;
    /**
     * Postal Code of billing address
     */
    postal_code?: string;
    /**
     * ISO3166-1 alpha-2 country code of billing address
     */
    country_code?: string;
};


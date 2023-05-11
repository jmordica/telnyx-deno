/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The CNAM listing settings for a phone number.
 */
export type CnamListing = {
    /**
     * Enables CNAM listings for this number. Requires cnam_listing_details to also be set.
     */
    cnam_listing_enabled?: boolean;
    /**
     * The CNAM listing details for this number. Must be alphanumeric characters or spaces with a maximum length of 15. Requires cnam_listing_enabled to also be set to true.
     */
    cnam_listing_details?: string;
};


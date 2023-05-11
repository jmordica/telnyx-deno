/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExternalVetting = {
    /**
     * External vetting provider ID for the brand.
     */
    evpId?: string;
    /**
     * Unique ID that identifies a vetting transaction performed by a vetting provider. This ID is provided by the vetting provider at time of vetting.
     */
    vettingId?: string;
    /**
     * Required by some providers for vetting record confirmation.
     */
    vettingToken?: string;
    /**
     * Vetting score ranging from 0-100.
     */
    vettingScore?: number;
    /**
     * Identifies the vetting classification.
     */
    vettingClass?: string;
    /**
     * Vetting effective date. This is the date when vetting was completed, or the starting effective date in ISO 8601 format. If this date is missing, then the vetting was not complete or not valid.
     */
    vettedDate?: string;
    /**
     * Vetting submission date. This is the date when the vetting request is generated in ISO 8601 format.
     */
    createDate?: string;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ImportExternalVetting = {
    /**
     * External vetting provider ID for the brand.
     */
    evpId: string;
    /**
     * Unique ID that identifies a vetting transaction performed by a vetting provider. This ID is provided by the vetting provider at time of vetting.
     */
    vettingId: string;
    /**
     * Required by some providers for vetting record confirmation.
     */
    vettingToken?: string;
};


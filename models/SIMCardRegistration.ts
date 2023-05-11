/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SIMCardRegistration = {
    /**
     * The group SIMCardGroup identification. This attribute can be <code>null</code> when it's present in an associated resource.
     */
    sim_card_group_id?: string;
    /**
     * Searchable tags associated with the SIM card
     */
    tags?: Array<string>;
    registration_codes: Array<string>;
    /**
     * Status on which the SIM card will be set after being successful registered.
     */
    status?: SIMCardRegistration.status;
};

export namespace SIMCardRegistration {

    /**
     * Status on which the SIM card will be set after being successful registered.
     */
    export enum status {
        ENABLED = 'enabled',
        DISABLED = 'disabled',
        STANDBY = 'standby',
    }


}


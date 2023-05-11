/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SIMCardGroupPatch = {
    /**
     * A user friendly name for the SIM card group.
     */
    name?: string;
    /**
     * Upper limit on the amount of data the SIM cards, within the group, can use.
     */
    data_limit?: {
        amount?: string;
        unit?: string;
    };
};


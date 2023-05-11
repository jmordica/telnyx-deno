/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Mno = {
    /**
     * Unique network identifier assigned to MNO.
     */
    networkId: number;
    /**
     * Display name of the mobile network operator.
     */
    displayName: string;
    /**
     * NetNumber OSR 'campaign_id' property's 'status' attribute holds individual MNO campaign operation status. The 'status' attribute leverages bitmasking technique to store multiple MNOs' operating status. The campaign operation status is reduced to '1' or '0' value where '1' indicate an 'ACTIVE' status and '0' represents every other non-active statuses, including REVIEW, REJECT and SUSPEND. The 'osrBitmaskIndex' holds the bitmask index of the MNO. For example, T-Mobile's bitmask index is 2, which implies T-Mobile's campaign operation status is stored in bit #2, or 3rd bit when counting from right.
     */
    osrBitmaskIndex: number;
};


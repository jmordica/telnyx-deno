/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MobileOperatorNetworkPreferencesRequest = {
    /**
     * The mobile operator network resource identification UUID.
     */
    mobile_operator_network_id?: string;
    /**
     * It determines what is the priority of a specific operator network that should be assumed by a SIM card when connecting to a network. The highest priority is 0, the second highest is 1 and so on.
     */
    priority?: number;
};


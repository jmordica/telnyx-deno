/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GlobalIpAssignmentUsageMetric = {
    /**
     * The timestamp of the metric.
     */
    timestamp?: string;
    global_ip?: {
        /**
         * Global IP ID.
         */
        id?: string;
        /**
         * The Global IP address.
         */
        readonly ip_address?: string;
    };
    global_ip_assignment?: {
        /**
         * Global IP assignment ID.
         */
        id?: string;
        /**
         * Wireguard peer ID.
         */
        wireguard_peer_id?: string;
        wireguard_peer?: {
            /**
             * A user specified name for the interface.
             */
            name?: string;
            /**
             * The IP address of the interface.
             */
            ip_address?: string;
        };
    };
    transmitted?: {
        /**
         * The amount of data transmitted.
         */
        amount?: number;
        /**
         * The unit of the amount of data transmitted.
         */
        unit?: string;
    };
    received?: {
        /**
         * The amount of data received.
         */
        amount?: number;
        /**
         * The unit of the amount of data received.
         */
        unit?: string;
    };
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GlobalIpAssignmentHealthMetric = {
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
    health?: {
        /**
         * The number of successful health checks.
         */
        pass?: number;
        /**
         * The number of failed health checks.
         */
        fail?: number;
    };
};


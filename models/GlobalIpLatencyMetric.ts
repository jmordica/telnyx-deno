/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GlobalIpLatencyMetric = {
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
    prober_location?: {
        /**
         * Location ID.
         */
        id?: string;
        /**
         * Location name.
         */
        name?: string;
        /**
         * Latitude.
         */
        lat?: number;
        /**
         * Longitude.
         */
        lon?: number;
    };
    mean_latency?: {
        /**
         * The average latency.
         */
        amount?: number;
        /**
         * The unit of the average latency.
         */
        unit?: string;
    };
    percentile_latency?: {
        '0'?: {
            /**
             * The minimum latency.
             */
            amount?: number;
            /**
             * The unit of the minimum latency.
             */
            unit?: string;
        };
        '25'?: {
            /**
             * The 25th percentile latency.
             */
            amount?: number;
            /**
             * The unit of the 25th percentile latency.
             */
            unit?: string;
        };
        '50'?: {
            /**
             * The 50th percentile latency.
             */
            amount?: number;
            /**
             * The unit of the 50th percentile latency.
             */
            unit?: string;
        };
        '75'?: {
            /**
             * The 75th percentile latency.
             */
            amount?: number;
            /**
             * The unit of the 75th percentile latency.
             */
            unit?: string;
        };
        '90'?: {
            /**
             * The 90th percentile latency.
             */
            amount?: number;
            /**
             * The unit of the 90th percentile latency.
             */
            unit?: string;
        };
        '99'?: {
            /**
             * The 99th percentile latency.
             */
            amount?: number;
            /**
             * The unit of the 99th percentile latency.
             */
            unit?: string;
        };
        '100'?: {
            /**
             * The maximum latency.
             */
            amount?: number;
            /**
             * The unit of the maximum latency.
             */
            unit?: string;
        };
    };
};


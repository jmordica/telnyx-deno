/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * High level health metrics about the number and it's messaging sending patterns.
 *
 */
export type NumberHealthMetrics = {
    /**
     * The number of messages analyzed for the health metrics.
     */
    message_count: number;
    /**
     * The ratio of messages received to the number of messages sent.
     */
    inbound_outbound_ratio: number;
    /**
     * The ratio of messages sucessfully delivered to the number of messages attempted.
     */
    success_ratio: number;
    /**
     * The ratio of messages blocked for spam to the number of messages attempted.
     */
    spam_ratio: number;
};


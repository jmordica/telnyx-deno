/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MessagingProfileMessageTypeMetrics = {
    /**
     * The metric type.
     */
    readonly label?: string;
    /**
     * The number of outbound messages sent.
     */
    readonly sent?: number;
    /**
     * The number of outbound messages successfully delivered.
     */
    readonly delivered?: number;
    /**
     * The ratio of outbound messages sent that resulted in errors.
     */
    readonly outbound_error_ratio?: number;
    /**
     * The number of inbound messages received.
     */
    readonly received?: number;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MessagingProfileHighLevelMetrics = {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: MessagingProfileHighLevelMetrics.record_type;
    /**
     * Identifies the type of resource.
     */
    readonly messaging_profile_id?: string;
    /**
     * The number of phone numbers associated with the messaging profile.
     */
    readonly phone_numbers?: number;
    outbound?: {
        /**
         * The number of outbound messages sent.
         */
        readonly sent?: number;
        /**
         * The number of outbound messages successfully delivered.
         */
        readonly delivered?: number;
        /**
         * The ratio of messages sent that resulted in errors.
         */
        readonly error_ratio?: number;
    };
    inbound?: {
        /**
         * The number of inbound messages received.
         */
        readonly received?: number;
    };
};

export namespace MessagingProfileHighLevelMetrics {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        MESSAGING_PROFILE_METRICS = 'messaging_profile_metrics',
    }


}


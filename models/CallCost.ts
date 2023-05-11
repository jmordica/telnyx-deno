/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CallCost = {
    /**
     * Identifies the type of resource.
     */
    record_type?: CallCost.record_type;
    /**
     * The type of the event being delivered
     */
    event_type?: CallCost.event_type;
    /**
     * Uniquely identifies a webhook
     */
    id?: string;
    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;
    meta?: {
        meta?: {
            /**
             * The number of attempts made to deliver the webhook
             */
            attempt?: number;
            /**
             * The URL where webhook was sent
             */
            delivered_to?: string;
        };
    };
    payload?: {
        /**
         * The number of seconds for which this call will be billed
         */
        billed_duration_secs?: number;
        /**
         * Call ID used to issue commands via Call Control API.
         */
        call_control_id?: string;
        /**
         * ID that is unique to the call and can be used to correlate webhook events.
         */
        call_leg_id?: string;
        /**
         * ID that is unique to the call session and can be used to correlate webhook events. Call session is a group of related call legs that logically belong to the same phone call, e.g. an inbound and outbound leg of a transferred call.
         */
        call_session_id?: string;
        /**
         * State received from a command.
         */
        client_state?: string;
        /**
         * Identifies the type of resource.
         */
        connection_id?: string;
        cost_parts?: Array<{
            /**
             * The number of seconds for which this item will be billed
             */
            billed_duration_secs?: number;
            /**
             * The service incurring a charge
             */
            call_part?: string;
            /**
             * The billed cost of the item, in currency shown in the `currency` field
             */
            cost?: number;
            /**
             * The currency in which `cost` is measured
             */
            currency?: string;
            /**
             * The cost per unit of the item incurring a charge
             */
            rate?: number;
        }>;
        /**
         * The billed cost of the call
         */
        total_cost?: number;
        /**
         * Reflects how command ended.
         */
        status?: CallCost.status;
    };
};

export namespace CallCost {

    /**
     * Identifies the type of resource.
     */
    export enum record_type {
        EVENT = 'event',
    }

    /**
     * The type of the event being delivered
     */
    export enum event_type {
        CALL_COST = 'call.cost',
    }

    /**
     * Reflects how command ended.
     */
    export enum status {
        VALID = 'valid',
        INVALID = 'invalid',
        CALL_HANGUP = 'call_hangup',
        CANCELLED = 'cancelled',
        CANCELLED_AMD = 'cancelled_amd',
    }


}


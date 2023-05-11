/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QueueCall = {
    record_type: QueueCall.record_type;
    /**
     * ID that is unique to the call session and can be used to correlate webhook events. Call session is a group of related call legs that logically belong to the same phone call, e.g. an inbound and outbound leg of a transferred call
     */
    call_session_id: string;
    /**
     * ID that is unique to the call and can be used to correlate webhook events
     */
    call_leg_id: string;
    /**
     * Unique identifier and token for controlling the call.
     */
    call_control_id: string;
    /**
     * Call Control App ID (formerly Telnyx connection ID) used in the call.
     */
    connection_id: string;
    /**
     * Number or SIP URI placing the call.
     */
    from: string;
    /**
     * Destination number or SIP URI of the call.
     */
    to: string;
    /**
     * ISO 8601 formatted date of when the call was put in the queue
     */
    enqueued_at: string;
    /**
     * The time the call has been waiting in the queue, given in seconds
     */
    wait_time_secs: number;
    /**
     * Current position of the call in the queue
     */
    queue_position: number;
    /**
     * Unique identifier of the queue the call is in.
     */
    queue_id: string;
};

export namespace QueueCall {

    export enum record_type {
        QUEUE_CALL = 'queue_call',
    }


}


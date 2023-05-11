/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ActiveCall = {
    record_type: ActiveCall.record_type;
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
     * State received from a command.
     */
    client_state: string;
    /**
     * Indicates the duration of the call in seconds
     */
    call_duration: number;
};

export namespace ActiveCall {

    export enum record_type {
        CALL = 'call',
    }


}


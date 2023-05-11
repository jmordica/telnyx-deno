/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RejectRequest = {
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
    /**
     * Cause for call rejection.
     */
    cause: RejectRequest.cause;
};

export namespace RejectRequest {

    /**
     * Cause for call rejection.
     */
    export enum cause {
        CALL_REJECTED = 'CALL_REJECTED',
        USER_BUSY = 'USER_BUSY',
    }


}


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StopForkingRequest = {
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
    /**
     * Optionally specify a `stream_type`. This should match the `stream_type` that was used in `fork_start` command to properly stop the fork.
     */
    stream_type?: StopForkingRequest.stream_type;
};

export namespace StopForkingRequest {

    /**
     * Optionally specify a `stream_type`. This should match the `stream_type` that was used in `fork_start` command to properly stop the fork.
     */
    export enum stream_type {
        RAW = 'raw',
        DECRYPTED = 'decrypted',
    }


}


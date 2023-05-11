/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EnqueueRequest = {
    /**
     * The name of the queue the call should be put in. If a queue with a given name doesn't exist yet it will be created.
     */
    queue_name?: string;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
    /**
     * The number of seconds after which the call will be removed from the queue.
     */
    max_wait_time_secs?: number;
    /**
     * The maximum number of calls allowed in the queue at a given time. Can't be modified for an existing queue.
     */
    max_size?: number;
};


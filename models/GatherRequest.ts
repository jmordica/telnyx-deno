/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GatherRequest = {
    /**
     * The minimum number of digits to fetch. This parameter has a minimum value of 1.
     */
    minimum_digits?: number;
    /**
     * The maximum number of digits to fetch. This parameter has a maximum value of 128.
     */
    maximum_digits?: number;
    /**
     * The number of milliseconds to wait to complete the request.
     */
    timeout_millis?: number;
    /**
     * The number of milliseconds to wait for input between digits.
     */
    inter_digit_timeout_millis?: number;
    /**
     * The number of milliseconds to wait for the first DTMF.
     */
    initial_timeout_millis?: number;
    /**
     * The digit used to terminate input if fewer than `maximum_digits` digits have been gathered.
     */
    terminating_digit?: string;
    /**
     * A list of all digits accepted as valid.
     */
    valid_digits?: string;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
};


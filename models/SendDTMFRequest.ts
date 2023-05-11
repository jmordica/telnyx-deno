/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendDTMFRequest = {
    /**
     * DTMF digits to send. Valid digits are 0-9, A-D, *, and #. Pauses can be added using w (0.5s) and W (1s).
     */
    digits: string;
    /**
     * Specifies for how many milliseconds each digit will be played in the audio stream. Ranges from 100 to 500ms
     */
    duration_millis?: number;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
};


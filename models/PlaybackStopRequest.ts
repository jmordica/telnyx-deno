/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PlaybackStopRequest = {
    /**
     * When enabled, it stops the audio being played in the overlay queue.
     */
    overlay?: boolean;
    /**
     * Use `current` to stop the current audio being played. Use `all` to stop the current audio file being played and clear all audio files from the queue.
     */
    stop?: string;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
};


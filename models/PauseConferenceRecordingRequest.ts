/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PauseConferenceRecordingRequest = {
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
    /**
     * Use this field to pause specific recording.
     */
    recording_id?: string;
};


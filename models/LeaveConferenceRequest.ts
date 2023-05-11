/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LeaveConferenceRequest = {
    /**
     * Unique identifier and token for controlling the call
     */
    call_control_id: string;
    /**
     * Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.
     */
    command_id?: string;
    /**
     * Whether a beep sound should be played when the participant leaves the conference. Can be used to override the conference-level setting.
     */
    beep_enabled?: LeaveConferenceRequest.beep_enabled;
};

export namespace LeaveConferenceRequest {

    /**
     * Whether a beep sound should be played when the participant leaves the conference. Can be used to override the conference-level setting.
     */
    export enum beep_enabled {
        ALWAYS = 'always',
        NEVER = 'never',
        ON_ENTER = 'on_enter',
        ON_EXIT = 'on_exit',
    }


}


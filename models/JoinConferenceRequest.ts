/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type JoinConferenceRequest = {
    /**
     * Unique identifier and token for controlling the call
     */
    call_control_id: string;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string. Please note that the client_state will be updated for the participient call leg and the change will not affect conferencing webhooks unless the participient is the owner of the conference.
     */
    client_state?: string;
    /**
     * Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.
     */
    command_id?: string;
    /**
     * Whether the conference should end and all remaining participants be hung up after the participant leaves the conference. Defaults to "false".
     */
    end_conference_on_exit?: boolean;
    /**
     * Whether the conference should end after the participant leaves the conference. NOTE this doesn't hang up the other participants. Defaults to "false".
     */
    soft_end_conference_on_exit?: boolean;
    /**
     * Whether the participant should be put on hold immediately after joining the conference. Defaults to "false".
     */
    hold?: boolean;
    /**
     * The URL of a file to be played to the participant when they are put on hold after joining the conference. hold_media_name and hold_audio_url cannot be used together in one request. Takes effect only when "start_conference_on_create" is set to "false". This property takes effect only if "hold" is set to "true".
     */
    hold_audio_url?: string;
    /**
     * The media_name of a file to be played to the participant when they are put on hold after joining the conference. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file. Takes effect only when "start_conference_on_create" is set to "false". This property takes effect only if "hold" is set to "true".
     */
    hold_media_name?: string;
    /**
     * Whether the participant should be muted immediately after joining the conference. Defaults to "false".
     */
    mute?: boolean;
    /**
     * Whether the conference should be started after the participant joins the conference. Defaults to "false".
     */
    start_conference_on_enter?: boolean;
    /**
     * Sets the joining participant as a supervisor for the conference. A conference can have multiple supervisors. "barge" means the supervisor enters the conference as a normal participant. This is the same as "none". "monitor" means the supervisor is muted but can hear all participants. "whisper" means that only the specified "whisper_call_control_ids" can hear the supervisor. Defaults to "none".
     */
    supervisor_role?: JoinConferenceRequest.supervisor_role;
    /**
     * Array of unique call_control_ids the joining supervisor can whisper to. If none provided, the supervisor will join the conference as a monitoring participant only.
     */
    whisper_call_control_ids?: Array<string>;
    /**
     * Whether a beep sound should be played when the participant joins and/or leaves the conference. Can be used to override the conference-level setting.
     */
    beep_enabled?: JoinConferenceRequest.beep_enabled;
};

export namespace JoinConferenceRequest {

    /**
     * Sets the joining participant as a supervisor for the conference. A conference can have multiple supervisors. "barge" means the supervisor enters the conference as a normal participant. This is the same as "none". "monitor" means the supervisor is muted but can hear all participants. "whisper" means that only the specified "whisper_call_control_ids" can hear the supervisor. Defaults to "none".
     */
    export enum supervisor_role {
        BARGE = 'barge',
        MONITOR = 'monitor',
        NONE = 'none',
        WHISPER = 'whisper',
    }

    /**
     * Whether a beep sound should be played when the participant joins and/or leaves the conference. Can be used to override the conference-level setting.
     */
    export enum beep_enabled {
        ALWAYS = 'always',
        NEVER = 'never',
        ON_ENTER = 'on_enter',
        ON_EXIT = 'on_exit',
    }


}


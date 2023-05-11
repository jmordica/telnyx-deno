/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConferenceCallRequest = {
    /**
     * Unique identifier and token for controlling the call
     */
    call_control_id: string;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.
     */
    command_id?: string;
    /**
     * The `from` number to be used as the caller id presented to the destination (`to` number).
     */
    from: string;
    /**
     * Whether the participant should be put on hold immediately after joining the conference.
     */
    hold?: boolean;
    /**
     * The URL of a file to be played to the participant when they are put on hold after joining the conference. If media_name is also supplied, this is currently ignored. Takes effect only when "start_conference_on_create" is set to "false". This property takes effect only if "hold" is set to "true".
     */
    hold_audio_url?: string;
    /**
     * The media_name of a file to be played to the participant when they are put on hold after joining the conference. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file. Takes effect only when "start_conference_on_create" is set to "false". This property takes effect only if "hold" is set to "true".
     */
    hold_media_name?: string;
    /**
     * Whether the participant should be muted immediately after joining the conference.
     */
    mute?: boolean;
    /**
     * Whether the conference should be started after the participant joins the conference.
     */
    start_conference_on_enter?: boolean;
    /**
     * Sets the joining participant as a supervisor for the conference. A conference can have multiple supervisors. "barge" means the supervisor enters the conference as a normal participant. This is the same as "none". "monitor" means the supervisor is muted but can hear all participants. "whisper" means that only the specified "whisper_call_control_ids" can hear the supervisor. Defaults to "none".
     */
    supervisor_role?: ConferenceCallRequest.supervisor_role;
    /**
     * The DID or SIP URI to dial out and bridge to the given call.
     */
    to: string;
    /**
     * Array of unique call_control_ids the joining supervisor can whisper to. If none provided, the supervisor will join the conference as a monitoring participant only.
     */
    whisper_call_control_ids?: Array<string>;
};

export namespace ConferenceCallRequest {

    /**
     * Sets the joining participant as a supervisor for the conference. A conference can have multiple supervisors. "barge" means the supervisor enters the conference as a normal participant. This is the same as "none". "monitor" means the supervisor is muted but can hear all participants. "whisper" means that only the specified "whisper_call_control_ids" can hear the supervisor. Defaults to "none".
     */
    export enum supervisor_role {
        BARGE = 'barge',
        MONITOR = 'monitor',
        NONE = 'none',
        WHISPER = 'whisper',
    }


}


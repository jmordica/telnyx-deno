/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateConferenceRequest = {
    /**
     * Unique identifier and token for controlling the call
     */
    call_control_id: string;
    /**
     * Name of the conference
     */
    name: string;
    /**
     * Whether a beep sound should be played when participants join and/or leave the conference.
     */
    beep_enabled?: CreateConferenceRequest.beep_enabled;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string. The client_state will be updated for the creator call leg and will be used for all webhooks related to the created conference.
     */
    client_state?: string;
    /**
     * Toggle background comfort noise.
     */
    comfort_noise?: boolean;
    /**
     * Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.
     */
    command_id?: string;
    /**
     * Time length (minutes) after which the conference will end.
     */
    duration_minutes?: number;
    /**
     * The URL of a file to be played to participants joining the conference. The URL can point to either a WAV or MP3 file. hold_media_name and hold_audio_url cannot be used together in one request. Takes effect only when "start_conference_on_create" is set to "false".
     */
    hold_audio_url?: string;
    /**
     * The media_name of a file to be played to participants joining the conference. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file. Takes effect only when "start_conference_on_create" is set to "false".
     */
    hold_media_name?: string;
    /**
     * The maximum number of active conference participants to allow. Must be between 2 and 800. Defaults to 250
     */
    max_participants?: number;
    /**
     * Whether the conference should be started on creation. If the conference isn't started all participants that join are automatically put on hold. Defaults to "true".
     */
    start_conference_on_create?: boolean;
};

export namespace CreateConferenceRequest {

    /**
     * Whether a beep sound should be played when participants join and/or leave the conference.
     */
    export enum beep_enabled {
        ALWAYS = 'always',
        NEVER = 'never',
        ON_ENTER = 'on_enter',
        ON_EXIT = 'on_exit',
    }


}


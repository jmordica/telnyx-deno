/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TranscriptionStartRequest = {
    /**
     * Language to use for speech recognition
     */
    language?: TranscriptionStartRequest.language;
    /**
     * Whether to send also interim results. If set to false, only final results will be sent.
     */
    interim_results?: boolean;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Indicates which leg of the call will be transcribed. Use `inbound` for the leg that requested the transcription, `outbound` for the other leg, and `both` for both legs of the call. Will default to `inbound`.
     */
    transcription_tracks?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
};

export namespace TranscriptionStartRequest {

    /**
     * Language to use for speech recognition
     */
    export enum language {
        DE = 'de',
        EN = 'en',
        ES = 'es',
        FR = 'fr',
        IT = 'it',
        PL = 'pl',
    }


}


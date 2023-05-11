/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StartConferenceRecordingRequest = {
    /**
     * The audio file format used when storing the conference recording. Can be either `mp3` or `wav`.
     */
    format: StartConferenceRecordingRequest.format;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `conference_id`.
     */
    command_id?: string;
    /**
     * If enabled, a beep sound will be played at the start of a recording.
     */
    play_beep?: boolean;
};

export namespace StartConferenceRecordingRequest {

    /**
     * The audio file format used when storing the conference recording. Can be either `mp3` or `wav`.
     */
    export enum format {
        WAV = 'wav',
        MP3 = 'mp3',
    }


}


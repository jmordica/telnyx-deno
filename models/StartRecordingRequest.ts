/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StartRecordingRequest = {
    /**
     * The audio file format used when storing the call recording. Can be either `mp3` or `wav`.
     */
    format: StartRecordingRequest.format;
    /**
     * When `dual`, final audio file will be stereo recorded with the first leg on channel A, and the rest on channel B.
     */
    channels: StartRecordingRequest.channels;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
    /**
     * If enabled, a beep sound will be played at the start of a recording.
     */
    play_beep?: boolean;
    /**
     * Defines the maximum length for the recording in seconds. The minimum value is 0. The maximum value is 14400. The default value is 0 (infinite)
     */
    max_length?: number;
    /**
     * The number of seconds that Telnyx will wait for the recording to be stopped if silence is detected. The timer only starts when the speech is detected. The minimum value is 0. The default value is 0 (infinite)
     */
    timeout_secs?: number;
};

export namespace StartRecordingRequest {

    /**
     * The audio file format used when storing the call recording. Can be either `mp3` or `wav`.
     */
    export enum format {
        WAV = 'wav',
        MP3 = 'mp3',
    }

    /**
     * When `dual`, final audio file will be stereo recorded with the first leg on channel A, and the rest on channel B.
     */
    export enum channels {
        SINGLE = 'single',
        DUAL = 'dual',
    }


}


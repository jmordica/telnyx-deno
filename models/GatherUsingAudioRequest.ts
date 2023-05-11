/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GatherUsingAudioRequest = {
    /**
     * The URL of a file to be played back at the beginning of each prompt. The URL can point to either a WAV or MP3 file. media_name and audio_url cannot be used together in one request.
     */
    audio_url?: string;
    /**
     * The media_name of a file to be played back at the beginning of each prompt. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.
     */
    media_name?: string;
    /**
     * The URL of a file to play when digits don't match the `valid_digits` parameter or the number of digits is not between `min` and `max`. The URL can point to either a WAV or MP3 file. invalid_media_name and invalid_audio_url cannot be used together in one request.
     */
    invalid_audio_url?: string;
    /**
     * The media_name of a file to be played back when digits don't match the `valid_digits` parameter or the number of digits is not between `min` and `max`. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.
     */
    invalid_media_name?: string;
    /**
     * The minimum number of digits to fetch. This parameter has a minimum value of 1.
     */
    minimum_digits?: number;
    /**
     * The maximum number of digits to fetch. This parameter has a maximum value of 128.
     */
    maximum_digits?: number;
    /**
     * The maximum number of times the file should be played if there is no input from the user on the call.
     */
    maximum_tries?: number;
    /**
     * The number of milliseconds to wait for a DTMF response after file playback ends before a replaying the sound file.
     */
    timeout_millis?: number;
    /**
     * The digit used to terminate input if fewer than `maximum_digits` digits have been gathered.
     */
    terminating_digit?: string;
    /**
     * A list of all digits accepted as valid.
     */
    valid_digits?: string;
    /**
     * The number of milliseconds to wait for input between digits.
     */
    inter_digit_timeout_millis?: number;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
};


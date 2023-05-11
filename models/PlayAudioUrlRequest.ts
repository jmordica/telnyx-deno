/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Loopcount } from './Loopcount.ts';

export type PlayAudioUrlRequest = {
    /**
     * The URL of a file to be played back on the call. The URL can point to either a WAV or MP3 file. media_name and audio_url cannot be used together in one request.
     */
    audio_url?: string;
    /**
     * The media_name of a file to be played back on the call. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.
     */
    media_name?: string;
    /**
     * The number of times the audio file should be played. If supplied, the value must be an integer between 1 and 100, or the special string `infinity` for an endless loop.
     */
    loop?: Loopcount;
    /**
     * When enabled, audio will be mixed on top of any other audio that is actively being played back. Note that `overlay: true` will only work if there is another audio file already being played on the call.
     */
    overlay?: boolean;
    /**
     * When specified, it stops the current audio being played. Specify `current` to stop the current audio being played, and to play the next file in the queue. Specify `all` to stop the current audio file being played and to also clear all audio files from the queue.
     */
    stop?: string;
    /**
     * Specifies the leg or legs on which audio will be played. If supplied, the value must be either `self`, `opposite` or `both`.
     */
    target_legs?: string;
    /**
     * Caches the audio file. Useful when playing the same audio file multiple times during the call.
     */
    cache_audio?: boolean;
    /**
     * Allows a user to provide base64 encoded mp3. Note: when using this parameter, `media_url` and `media_name` in the `playback_started` and `playback_ended` webhooks will be empty
     */
    playback_content?: string;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
};


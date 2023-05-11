/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Loopcount } from './Loopcount.ts';

export type ConferencePlayRequest = {
    /**
     * The URL of a file to be played back in the conference. media_name and audio_url cannot be used together in one request.
     */
    audio_url?: string;
    /**
     * The media_name of a file to be played back in the conference. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.
     */
    media_name?: string;
    /**
     * The number of times the audio file should be played. If supplied, the value must be an integer between 1 and 100, or the special string `infinity` for an endless loop.
     */
    loop?: Loopcount;
    /**
     * List of call control ids identifying participants the audio file should be played to. If not given, the audio file will be played to the entire conference.
     */
    call_control_ids?: Array<string>;
};


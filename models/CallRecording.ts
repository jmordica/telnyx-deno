/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The call recording settings for a phone number.
 */
export type CallRecording = {
    /**
     * When enabled, any inbound call to this number will be recorded.
     */
    inbound_call_recording_enabled?: boolean;
    /**
     * The audio file format for calls being recorded.
     */
    inbound_call_recording_format?: CallRecording.inbound_call_recording_format;
    /**
     * When using 'dual' channels, final audio file will be stereo recorded with the first leg on channel A, and the rest on channel B.
     */
    inbound_call_recording_channels?: CallRecording.inbound_call_recording_channels;
};

export namespace CallRecording {

    /**
     * The audio file format for calls being recorded.
     */
    export enum inbound_call_recording_format {
        WAV = 'wav',
        MP3 = 'mp3',
    }

    /**
     * When using 'dual' channels, final audio file will be stereo recorded with the first leg on channel A, and the rest on channel B.
     */
    export enum inbound_call_recording_channels {
        SINGLE = 'single',
        DUAL = 'dual',
    }


}


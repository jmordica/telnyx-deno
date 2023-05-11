/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OutboundCallRecording = {
    /**
     * Specifies which calls are recorded.
     */
    call_recording_type?: OutboundCallRecording.call_recording_type;
    /**
     * When call_recording_type is 'by_caller_phone_number', only outbound calls using one of these numbers will be recorded. Numbers must be specified in E164 format.
     */
    call_recording_caller_phone_numbers?: Array<string>;
    /**
     * When using 'dual' channels, the final audio file will be a stereo recording with the first leg on channel A, and the rest on channel B.
     */
    call_recording_channels?: OutboundCallRecording.call_recording_channels;
    /**
     * The audio file format for calls being recorded.
     */
    call_recording_format?: OutboundCallRecording.call_recording_format;
};

export namespace OutboundCallRecording {

    /**
     * Specifies which calls are recorded.
     */
    export enum call_recording_type {
        ALL = 'all',
        NONE = 'none',
        BY_CALLER_PHONE_NUMBER = 'by_caller_phone_number',
    }

    /**
     * When using 'dual' channels, the final audio file will be a stereo recording with the first leg on channel A, and the rest on channel B.
     */
    export enum call_recording_channels {
        SINGLE = 'single',
        DUAL = 'dual',
    }

    /**
     * The audio file format for calls being recorded.
     */
    export enum call_recording_format {
        WAV = 'wav',
        MP3 = 'mp3',
    }


}


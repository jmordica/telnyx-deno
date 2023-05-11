/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RecordingResponseData = {
    /**
     * Unique identifier and token for controlling the call.
     */
    call_control_id?: string;
    /**
     * ID that is unique to the call and can be used to correlate webhook events.
     */
    call_leg_id?: string;
    /**
     * ID that is unique to the call session and can be used to correlate webhook events. Call session is a group of related call legs that logically belong to the same phone call, e.g. an inbound and outbound leg of a transferred call.
     */
    call_session_id?: string;
    /**
     * When `dual`, final audio file has the first leg on channel A, and the rest on channel B.
     */
    channels?: RecordingResponseData.channels;
    /**
     * Uniquely identifies the conference.
     */
    conference_id?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;
    /**
     * The links to download the recording files.
     */
    download_urls?: {
        /**
         * Link to download the recording in mp3 format.
         */
        mp3?: string;
        /**
         * Link to download the recording in wav format.
         */
        wav?: string;
    };
    /**
     * The duration of the recording in milliseconds.
     */
    duration_millis?: number;
    /**
     * Uniquely identifies the recording.
     */
    id?: string;
    record_type?: RecordingResponseData.record_type;
    /**
     * ISO 8601 formatted date of when the recording started.
     */
    recording_started_at?: string;
    /**
     * ISO 8601 formatted date of when the recording ended.
     */
    recording_ended_at?: string;
    /**
     * The kind of event that led to this recording being created.
     */
    source?: RecordingResponseData.source;
    /**
     * The status of the recording. Only resources for `completed` recordings are currently supported.
     */
    status?: RecordingResponseData.status;
    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
};

export namespace RecordingResponseData {

    /**
     * When `dual`, final audio file has the first leg on channel A, and the rest on channel B.
     */
    export enum channels {
        SINGLE = 'single',
        DUAL = 'dual',
    }

    export enum record_type {
        RECORDING = 'recording',
    }

    /**
     * The kind of event that led to this recording being created.
     */
    export enum source {
        CONFERENCE = 'conference',
        CALL = 'call',
    }

    /**
     * The status of the recording. Only resources for `completed` recordings are currently supported.
     */
    export enum status {
        COMPLETED = 'completed',
    }


}


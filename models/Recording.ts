/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Recording = {
    record_type: Recording.record_type;
    /**
     * Uniquely identifies the recording
     */
    id: string;
    /**
     * ISO 8601 formatted date of when the recording was created
     */
    created_at: string;
    /**
     * ISO 8601 formatted date of when the recording was last updated
     */
    updated_at: string;
    /**
     * ISO 8601 formatted date of when the recording started
     */
    recording_started_at: string;
    /**
     * ISO 8601 formatted date of when the recording ended
     */
    recording_ended_at: string;
    /**
     * The duration of the recording in milliseconds
     */
    duration_millis: number;
    /**
     * The status of the recording. Only resources for `completed` recordings are currently supported
     */
    status: Recording.status;
    /**
     * When `dual`, final audio file has the first leg on channel A, and the rest on channel B.
     */
    channels: Recording.channels;
    /**
     * The kind of event that led to this recording being created
     */
    source: Recording.source;
    /**
     * If a conference recording, uniquely identifies the recorded conference
     */
    conference_id?: string;
    /**
     * If a call recording, uniquely identifies the recorded call leg
     */
    call_leg_id?: string;
    /**
     * If a call recording, uniquely identifies the recorded call session
     */
    call_session_id?: string;
    /**
     * The links to download the recording files
     */
    download_urls: {
        /**
         * Link to download the recording in mp3 format
         */
        mp3?: string;
        /**
         * Link to download the recording in wav format
         */
        wav?: string;
    };
};

export namespace Recording {

    export enum record_type {
        RECORDING = 'recording',
    }

    /**
     * The status of the recording. Only resources for `completed` recordings are currently supported
     */
    export enum status {
        COMPLETED = 'completed',
    }

    /**
     * When `dual`, final audio file has the first leg on channel A, and the rest on channel B.
     */
    export enum channels {
        SINGLE = 'single',
        DUAL = 'dual',
    }

    /**
     * The kind of event that led to this recording being created
     */
    export enum source {
        CONFERENCE = 'conference',
        CALL = 'call',
    }


}


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConferenceRecordingSaved = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: ConferenceRecordingSaved.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: ConferenceRecordingSaved.event_type;
    /**
     * Identifies the type of resource.
     */
    id?: string;
    payload?: {
        /**
         * Participant's call ID used to issue commands via Call Control API.
         */
        call_control_id?: string;
        /**
         * ID that is unique to the call session and can be used to correlate webhook events. Call session is a group of related call legs that logically belong to the same phone call, e.g. an inbound and outbound leg of a transferred call.
         */
        call_session_id?: string;
        /**
         * State received from a command.
         */
        client_state?: string;
        /**
         * Whether recording was recorded in `single` or `dual` channel.
         */
        channels?: ConferenceRecordingSaved.channels;
        /**
         * ID of the conference that is being recorded.
         */
        conference_id?: string;
        /**
         * Call Control App ID (formerly Telnyx connection ID) used in the call.
         */
        connection_id?: string;
        /**
         * The audio file format used when storing the call recording. Can be either `mp3` or `wav`.
         */
        format?: ConferenceRecordingSaved.format;
        /**
         * Recording URLs in requested format. The URL is valid for as long as the file exists. For security purposes, this feature is activated on a per request basis.  Please contact customer support with your Account ID to request activation.
         */
        public_recording_urls?: {
            /**
             * Recording URL in requested `mp3` format.
             */
            mp3?: string | null;
            /**
             * Recording URL in requested `wav` format.
             */
            wav?: string | null;
        };
        /**
         * ISO 8601 datetime of when recording ended.
         */
        recording_ended_at?: string;
        /**
         * ID of the conference recording.
         */
        recording_id?: string;
        /**
         * ISO 8601 datetime of when recording started.
         */
        recording_started_at?: string;
        /**
         * Recording URLs in requested format. These URLs are valid for 10 minutes. After 10 minutes, you may retrieve recordings via API using Reports -> Call Recordings documentation, or via Mission Control under Reporting -> Recordings.
         */
        recording_urls?: {
            /**
             * Recording URL in requested `mp3` format.
             */
            mp3?: string | null;
            /**
             * Recording URL in requested `wav` format.
             */
            wav?: string | null;
        };
    };
};

export namespace ConferenceRecordingSaved {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        EVENT = 'event',
    }

    /**
     * The type of event being delivered.
     */
    export enum event_type {
        CONFERENCE_RECORDING_SAVED = 'conference.recording.saved',
    }

    /**
     * Whether recording was recorded in `single` or `dual` channel.
     */
    export enum channels {
        SINGLE = 'single',
        DUAL = 'dual',
    }

    /**
     * The audio file format used when storing the call recording. Can be either `mp3` or `wav`.
     */
    export enum format {
        WAV = 'wav',
        MP3 = 'mp3',
    }


}


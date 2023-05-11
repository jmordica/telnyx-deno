/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConferencePlaybackEnded = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: ConferencePlaybackEnded.record_type;
    /**
     * The type of event being delivered.
     */
    event_type?: ConferencePlaybackEnded.event_type;
    /**
     * Identifies the type of resource.
     */
    id?: string;
    payload?: {
        /**
         * Call Control App ID (formerly Telnyx connection ID) used in the call.
         */
        connection_id?: string;
        /**
         * ID that is unique to the call session that started the conference.
         */
        creator_call_session_id?: string;
        /**
         * ID of the conference the text was spoken in.
         */
        conference_id?: string;
        /**
         * The audio URL being played back, if audio_url has been used to start.
         */
        media_url?: string;
        /**
         * The name of the audio media file being played back, if media_name has been used to start.
         */
        media_name?: string;
        /**
         * ISO 8601 datetime of when the event occurred.
         */
        occurred_at?: string;
    };
};

export namespace ConferencePlaybackEnded {

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
        CONFERENCE_PLAYBACK_ENDED = 'conference.playback.ended',
    }


}


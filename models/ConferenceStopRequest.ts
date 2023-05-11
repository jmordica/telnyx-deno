/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConferenceStopRequest = {
    /**
     * List of call control ids identifying participants the audio file should stop be played to. If not given, the audio will be stoped to the entire conference.
     */
    call_control_ids?: Array<string>;
};


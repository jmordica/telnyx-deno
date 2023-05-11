/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConferenceUnmuteRequest = {
    /**
     * List of unique identifiers and tokens for controlling the call. Enter each call control ID to be unmuted. When empty all participants will be unmuted.
     */
    call_control_ids?: Array<string>;
};


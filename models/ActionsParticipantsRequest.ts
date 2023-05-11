/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ActionsParticipantsRequest = {
    /**
     * Either a list of participant id to perform the action on, or the keyword "all" to perform the action on all participant.
     */
    participants?: ('all' | Array<string>);
    /**
     * List of participant id to exclude from the action.
     */
    exclude?: Array<string>;
};


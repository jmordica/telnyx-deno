/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Participant = {
    record_type: Participant.record_type;
    /**
     * Uniquely identifies the participant
     */
    id: string;
    /**
     * Uniquely identifies the call leg associated with the participant
     */
    call_leg_id: string;
    /**
     * Call Control ID associated with the partiipant of the conference
     */
    call_control_id: string;
    /**
     * Info about the conference that the participant is in
     */
    conference: {
        /**
         * Uniquely identifies the conference
         */
        id?: string;
        /**
         * Name of the conference
         */
        name?: string;
    };
    /**
     * Array of unique call_control_ids the participant can whisper to..
     */
    whisper_call_control_ids: Array<string>;
    /**
     * ISO 8601 formatted date of when the participant was created
     */
    created_at: string;
    /**
     * ISO 8601 formatted date of when the participant was last updated
     */
    updated_at: string;
    /**
     * Whether the conference will end and all remaining participants be hung up after the participant leaves the conference.
     */
    end_conference_on_exit: boolean;
    /**
     * Whether the conference will end after the participant leaves the conference.
     */
    soft_end_conference_on_exit: boolean;
    /**
     * The status of the participant with respect to the lifecycle within the conference
     */
    status: Participant.status;
    /**
     * Whether the participant is muted.
     */
    muted: boolean;
    /**
     * Whether the participant is put on_hold.
     */
    on_hold: boolean;
};

export namespace Participant {

    export enum record_type {
        PARTICIPANT = 'participant',
    }

    /**
     * The status of the participant with respect to the lifecycle within the conference
     */
    export enum status {
        JOINING = 'joining',
        JOINED = 'joined',
        LEFT = 'left',
    }


}


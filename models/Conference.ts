/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Conference = {
    record_type: Conference.record_type;
    /**
     * Uniquely identifies the conference
     */
    id: string;
    /**
     * Name of the conference
     */
    name: string;
    /**
     * ISO 8601 formatted date of when the conference was created
     */
    created_at: string;
    /**
     * ISO 8601 formatted date of when the conference will expire
     */
    expires_at: string;
    /**
     * ISO 8601 formatted date of when the conference was last updated
     */
    updated_at?: string;
    /**
     * Region where the conference is hosted
     */
    region?: string;
    /**
     * Status of the conference
     */
    status?: Conference.status;
    /**
     * Reason why the conference ended
     */
    end_reason?: Conference.end_reason;
    /**
     * IDs related to who ended the conference. It is expected for them to all be there or all be null
     */
    ended_by?: {
        /**
         * Call Control ID which ended the conference
         */
        call_control_id?: string;
        /**
         * Call Session ID which ended the conference
         */
        call_session_id?: string;
    };
    /**
     * Identifies the connection associated with the conference
     */
    connection_id?: string;
};

export namespace Conference {

    export enum record_type {
        CONFERENCE = 'conference',
    }

    /**
     * Status of the conference
     */
    export enum status {
        INIT = 'init',
        IN_PROGRESS = 'in_progress',
        COMPLETED = 'completed',
    }

    /**
     * Reason why the conference ended
     */
    export enum end_reason {
        ALL_LEFT = 'all_left',
        ENDED_VIA_API = 'ended_via_api',
        HOST_LEFT = 'host_left',
        TIME_EXCEEDED = 'time_exceeded',
    }


}


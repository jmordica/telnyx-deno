/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateConferenceRequest = {
    /**
     * Unique identifier and token for controlling the call
     */
    call_control_id: string;
    /**
     * Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.
     */
    command_id?: string;
    /**
     * Sets the participant as a supervisor for the conference. A conference can have multiple supervisors. "barge" means the supervisor enters the conference as a normal participant. This is the same as "none". "monitor" means the supervisor is muted but can hear all participants. "whisper" means that only the specified "whisper_call_control_ids" can hear the supervisor. Defaults to "none".
     */
    supervisor_role: UpdateConferenceRequest.supervisor_role;
    /**
     * Array of unique call_control_ids the supervisor can whisper to. If none provided, the supervisor will join the conference as a monitoring participant only.
     */
    whisper_call_control_ids?: Array<string>;
};

export namespace UpdateConferenceRequest {

    /**
     * Sets the participant as a supervisor for the conference. A conference can have multiple supervisors. "barge" means the supervisor enters the conference as a normal participant. This is the same as "none". "monitor" means the supervisor is muted but can hear all participants. "whisper" means that only the specified "whisper_call_control_ids" can hear the supervisor. Defaults to "none".
     */
    export enum supervisor_role {
        BARGE = 'barge',
        MONITOR = 'monitor',
        NONE = 'none',
        WHISPER = 'whisper',
    }


}


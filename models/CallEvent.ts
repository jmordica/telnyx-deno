/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CallEvent = {
    record_type: CallEvent.record_type;
    /**
     * Uniquely identifies an individual call leg.
     */
    call_leg_id: string;
    /**
     * Uniquely identifies the call control session. A session may include multiple call leg events.
     */
    call_session_id: string;
    /**
     * Event timestamp
     */
    event_timestamp: string;
    /**
     * Event name
     */
    name: string;
    /**
     * Event type
     */
    type: CallEvent.type;
    /**
     * Event metadata, which includes raw event, and extra information based on event type
     */
    metadata: Record<string, any>;
};

export namespace CallEvent {

    export enum record_type {
        CALL_EVENT = 'call_event',
    }

    /**
     * Event type
     */
    export enum type {
        COMMAND = 'command',
        WEBHOOK = 'webhook',
    }


}


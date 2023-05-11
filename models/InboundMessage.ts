/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InboundMessagePayload } from './InboundMessagePayload.ts';

export type InboundMessage = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: InboundMessage.record_type;
    /**
     * Identifies the type of resource.
     */
    id?: string;
    /**
     * The type of event being delivered.
     */
    event_type?: InboundMessage.event_type;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    occurred_at?: string;
    payload?: InboundMessagePayload;
};

export namespace InboundMessage {

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
        MESSAGE_RECEIVED = 'message.received',
    }


}


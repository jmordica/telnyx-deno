/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NumberOrder } from './NumberOrder.ts';

export type NumberOrdered = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: NumberOrdered.record_type;
    /**
     * Identifies the type of resource.
     */
    id?: string;
    /**
     * The type of event being delivered.
     */
    event_type?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    occurred_at?: string;
    payload?: NumberOrder;
};

export namespace NumberOrdered {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        EVENT = 'event',
    }


}


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Queue = {
    record_type: Queue.record_type;
    /**
     * Uniquely identifies the queue
     */
    id: string;
    /**
     * Name of the queue
     */
    name: string;
    /**
     * ISO 8601 formatted date of when the queue was created
     */
    created_at: string;
    /**
     * ISO 8601 formatted date of when the queue was last updated
     */
    updated_at: string;
    /**
     * The number of calls currently in the queue
     */
    current_size: number;
    /**
     * The maximum number of calls allowed in the queue
     */
    max_size: number;
    /**
     * The average time that the calls currently in the queue have spent waiting, given in seconds.
     */
    average_wait_time_secs: number;
};

export namespace Queue {

    export enum record_type {
        QUEUE = 'queue',
    }


}


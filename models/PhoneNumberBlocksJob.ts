/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PhoneNumberBlocksJobFailedOperation } from './PhoneNumberBlocksJobFailedOperation.ts';
import type { PhoneNumberBlocksJobSuccessfulOperation } from './PhoneNumberBlocksJobSuccessfulOperation.ts';

export type PhoneNumberBlocksJob = {
    /**
     * Identifies the resource.
     */
    readonly id?: string;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * Indicates the completion status of the background operation.
     */
    readonly status?: PhoneNumberBlocksJob.status;
    /**
     * Identifies the type of the background job.
     */
    readonly type?: PhoneNumberBlocksJob.type;
    /**
     * ISO 8601 formatted date indicating when the estimated time of completion of the background job.
     */
    readonly etc?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    readonly updated_at?: string;
    readonly successful_operations?: Array<PhoneNumberBlocksJobSuccessfulOperation>;
    readonly failed_operations?: Array<PhoneNumberBlocksJobFailedOperation>;
};

export namespace PhoneNumberBlocksJob {

    /**
     * Indicates the completion status of the background operation.
     */
    export enum status {
        PENDING = 'pending',
        IN_PROGRESS = 'in_progress',
        COMPLETED = 'completed',
        FAILED = 'failed',
    }

    /**
     * Identifies the type of the background job.
     */
    export enum type {
        DELETE_PHONE_NUMBER_BLOCK = 'delete_phone_number_block',
    }


}


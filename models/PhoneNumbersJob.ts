/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PhoneNumbersJobFailedOperation } from './PhoneNumbersJobFailedOperation.ts';
import type { PhoneNumbersJobPendingOperation } from './PhoneNumbersJobPendingOperation.ts';
import type { PhoneNumbersJobPhoneNumber } from './PhoneNumbersJobPhoneNumber.ts';
import type { PhoneNumbersJobSuccessfulOperation } from './PhoneNumbersJobSuccessfulOperation.ts';

export type PhoneNumbersJob = {
    /**
     * Identifies the resource.
     */
    readonly id?: string;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * Indicates the completion status of the background update.
     */
    readonly status?: PhoneNumbersJob.status;
    /**
     * Identifies the type of the background job.
     */
    readonly type?: PhoneNumbersJob.type;
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
    phone_numbers?: Array<PhoneNumbersJobPhoneNumber>;
    readonly successful_operations?: Array<PhoneNumbersJobSuccessfulOperation>;
    readonly pending_operations?: Array<PhoneNumbersJobPendingOperation>;
    readonly failed_operations?: Array<PhoneNumbersJobFailedOperation>;
};

export namespace PhoneNumbersJob {

    /**
     * Indicates the completion status of the background update.
     */
    export enum status {
        PENDING = 'pending',
        IN_PROGRESS = 'in_progress',
        COMPLETED = 'completed',
        FAILED = 'failed',
        EXPIRED = 'expired',
    }

    /**
     * Identifies the type of the background job.
     */
    export enum type {
        UPDATE_EMERGENCY_SETTINGS = 'update_emergency_settings',
        DELETE_PHONE_NUMBERS = 'delete_phone_numbers',
        UPDATE_PHONE_NUMBERS = 'update_phone_numbers',
    }


}


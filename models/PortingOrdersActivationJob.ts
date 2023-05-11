/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PortingOrdersActivationJob = {
    /**
     * Uniquely identifies this activation job
     */
    readonly id?: string;
    /**
     * Specifies the status of this activation job
     */
    status?: PortingOrdersActivationJob.status;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    readonly updated_at?: string;
};

export namespace PortingOrdersActivationJob {

    /**
     * Specifies the status of this activation job
     */
    export enum status {
        CREATED = 'created',
        IN_PROCESS = 'in-process',
        COMPLETED = 'completed',
        FAILED = 'failed',
    }


}


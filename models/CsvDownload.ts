/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CsvDownload = {
    /**
     * Identifies the resource.
     */
    readonly id?: string;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * The URL at which the CSV file can be retrieved.
     */
    url?: string;
    /**
     * Indicates the completion level of the CSV report. Only complete CSV download requests will be able to be retrieved.
     */
    status?: CsvDownload.status;
};

export namespace CsvDownload {

    /**
     * Indicates the completion level of the CSV report. Only complete CSV download requests will be able to be retrieved.
     */
    export enum status {
        PENDING = 'pending',
        COMPLETE = 'complete',
        FAILED = 'failed',
        EXPIRED = 'expired',
    }


}


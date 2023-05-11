/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WdrReport = {
    /**
     * Identifies the resource.
     */
    readonly id?: string;
    readonly record_type?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    readonly updated_at?: string;
    /**
     * ISO 8601 formatted date-time indicating the start time.
     */
    start_time?: string;
    /**
     * ISO 8601 formatted date-time indicating the end time.
     */
    end_time?: string;
    /**
     * Indicates the status of the report, which is updated asynchronously.
     */
    status?: WdrReport.status;
    /**
     * The URL where the report content, when generated, will be published to.
     */
    report_url?: string;
};

export namespace WdrReport {

    /**
     * Indicates the status of the report, which is updated asynchronously.
     */
    export enum status {
        PENDING = 'pending',
        COMPLETE = 'complete',
        FAILED = 'failed',
        DELETED = 'deleted',
    }


}


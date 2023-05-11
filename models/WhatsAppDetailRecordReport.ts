/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WhatsAppDetailRecordReport = {
    id?: string;
    created_at?: string;
    start_date?: string;
    end_date?: string;
    download_link?: string;
    status?: WhatsAppDetailRecordReport.status;
    record_type?: string;
};

export namespace WhatsAppDetailRecordReport {

    export enum status {
        PENDING = 'PENDING',
        COMPLETE = 'COMPLETE',
        FAILED = 'FAILED',
        EXPIRED = 'EXPIRED',
    }


}


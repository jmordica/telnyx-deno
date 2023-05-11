/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Filter } from './Filter.ts';

export type MdrDetailReportResponse = {
    /**
     * Identifies the resource
     */
    id?: string;
    start_date?: string;
    end_date?: string;
    directions?: Array<'INBOUND' | 'OUTBOUND'>;
    record_types?: Array<'INCOMPLETE' | 'COMPLETED' | 'ERRORS'>;
    connections?: Array<number>;
    report_name?: string;
    status?: MdrDetailReportResponse.status;
    report_url?: string;
    filters?: Array<Filter>;
    created_at?: string;
    updated_at?: string;
    profiles?: string;
    record_type?: string;
};

export namespace MdrDetailReportResponse {

    export enum status {
        PENDING = 'PENDING',
        COMPLETE = 'COMPLETE',
        FAILED = 'FAILED',
        EXPIRED = 'EXPIRED',
    }


}


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MdrUsageRecord } from './MdrUsageRecord.ts';

export type MdrUsageReportResponse = {
    /**
     * Identifies the resource
     */
    id?: string;
    start_date?: string;
    end_date?: string;
    connections?: Array<number>;
    aggregation_type?: MdrUsageReportResponse.aggregation_type;
    status?: MdrUsageReportResponse.status;
    report_url?: string;
    result?: Array<MdrUsageRecord>;
    created_at?: string;
    updated_at?: string;
    profiles?: string;
    record_type?: string;
};

export namespace MdrUsageReportResponse {

    export enum aggregation_type {
        NO_AGGREGATION = 'NO_AGGREGATION',
        PROFILE = 'PROFILE',
        TAGS = 'TAGS',
    }

    export enum status {
        PENDING = 'PENDING',
        COMPLETE = 'COMPLETE',
        FAILED = 'FAILED',
        EXPIRED = 'EXPIRED',
    }


}


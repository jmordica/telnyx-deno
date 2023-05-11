/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CdrUsageReportResponse = {
    /**
     * Identifies the resource
     */
    id?: string;
    start_time?: string;
    end_time?: string;
    connections?: Array<number>;
    aggregation_type?: CdrUsageReportResponse.aggregation_type;
    status?: CdrUsageReportResponse.status;
    report_url?: string;
    result?: Record<string, any>;
    created_at?: string;
    updated_at?: string;
    record_type?: string;
    product_breakdown?: CdrUsageReportResponse.product_breakdown;
};

export namespace CdrUsageReportResponse {

    export enum aggregation_type {
        NO_AGGREGATION = 'NO_AGGREGATION',
        CONNECTION = 'CONNECTION',
        TAG = 'TAG',
        BILLING_GROUP = 'BILLING_GROUP',
    }

    export enum status {
        PENDING = 'PENDING',
        COMPLETE = 'COMPLETE',
        FAILED = 'FAILED',
        EXPIRED = 'EXPIRED',
    }

    export enum product_breakdown {
        NO_BREAKDOWN = 'NO_BREAKDOWN',
        DID_VS_TOLL_FREE = 'DID_VS_TOLL_FREE',
        COUNTRY = 'COUNTRY',
        DID_VS_TOLL_FREE_PER_COUNTRY = 'DID_VS_TOLL_FREE_PER_COUNTRY',
    }


}


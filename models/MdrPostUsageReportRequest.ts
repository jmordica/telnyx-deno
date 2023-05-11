/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MdrPostUsageReportRequest = {
    start_date: string;
    end_date: string;
    aggregation_type: MdrPostUsageReportRequest.aggregation_type;
    profiles?: string;
};

export namespace MdrPostUsageReportRequest {

    export enum aggregation_type {
        NO_AGGREGATION = 'NO_AGGREGATION',
        PROFILE = 'PROFILE',
        TAGS = 'TAGS',
    }


}


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Filter } from './Filter.ts';

export type MdrPostDetailReportRequest = {
    start_date: string;
    end_date: string;
    directions?: Array<'INBOUND' | 'OUTBOUND'>;
    record_types?: Array<'INCOMPLETE' | 'COMPLETED' | 'ERRORS'>;
    connections?: Array<number>;
    report_name?: string;
    include_message_body?: boolean;
    filters?: Array<Filter>;
    profiles?: string;
};


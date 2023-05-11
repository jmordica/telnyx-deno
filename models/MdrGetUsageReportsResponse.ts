/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MdrUsageReportResponse } from './MdrUsageReportResponse.ts';
import type { PaginationMeta } from './PaginationMeta.ts';

export type MdrGetUsageReportsResponse = {
    data?: Array<MdrUsageReportResponse>;
    meta?: PaginationMeta;
};


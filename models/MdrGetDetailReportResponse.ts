/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MdrDetailReportResponse } from './MdrDetailReportResponse.ts';
import type { PaginationMeta } from './PaginationMeta.ts';

export type MdrGetDetailReportResponse = {
    data?: Array<MdrDetailReportResponse>;
    meta?: PaginationMeta;
};


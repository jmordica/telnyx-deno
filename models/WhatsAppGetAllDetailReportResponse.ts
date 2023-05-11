/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationMeta } from './PaginationMeta.ts';
import type { WhatsAppDetailRecordReport } from './WhatsAppDetailRecordReport.ts';

export type WhatsAppGetAllDetailReportResponse = {
    data?: Array<WhatsAppDetailRecordReport>;
    meta?: PaginationMeta;
};


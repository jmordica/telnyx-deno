/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalWdrDetailRecordDto } from './ExternalWdrDetailRecordDto.ts';
import type { PaginationMeta } from './PaginationMeta.ts';

export type ExternalWdrGetDetailResponse = {
    data?: Array<ExternalWdrDetailRecordDto>;
    meta?: PaginationMeta;
};


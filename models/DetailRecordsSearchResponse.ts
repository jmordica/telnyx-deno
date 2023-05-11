/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DetailRecord } from './DetailRecord.ts';
import type { PaginationMeta } from './PaginationMeta.ts';

export type DetailRecordsSearchResponse = {
    data?: Array<DetailRecord>;
    meta?: PaginationMeta;
};


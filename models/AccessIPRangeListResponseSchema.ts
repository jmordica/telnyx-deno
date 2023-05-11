/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessIPRangeResponseSchema } from './AccessIPRangeResponseSchema.ts';
import type { PaginationMeta } from './PaginationMeta.ts';

export type AccessIPRangeListResponseSchema = {
    data: Array<AccessIPRangeResponseSchema>;
    meta: PaginationMeta;
};


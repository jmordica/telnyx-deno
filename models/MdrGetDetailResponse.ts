/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MdrDetailResponse } from './MdrDetailResponse.ts';
import type { PaginationMeta } from './PaginationMeta.ts';

export type MdrGetDetailResponse = {
    data?: Array<MdrDetailResponse>;
    meta?: PaginationMeta;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessIPAddressResponseSchema } from './AccessIPAddressResponseSchema.ts';
import type { PaginationMeta } from './PaginationMeta.ts';

export type AccessIPAddressListResponseSchema = {
    data: Array<AccessIPAddressResponseSchema>;
    meta: PaginationMeta;
};


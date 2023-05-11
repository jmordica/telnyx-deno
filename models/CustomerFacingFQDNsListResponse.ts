/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomerFacingFQDNsResponseSchema } from './CustomerFacingFQDNsResponseSchema.ts';
import type { PaginationMeta } from './PaginationMeta.ts';

export type CustomerFacingFQDNsListResponse = {
    data?: Array<CustomerFacingFQDNsResponseSchema>;
    meta?: PaginationMeta;
};


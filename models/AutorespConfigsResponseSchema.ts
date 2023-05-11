/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AutorespConfigSchema } from './AutorespConfigSchema.ts';
import type { PaginationMeta } from './PaginationMeta.ts';

export type AutorespConfigsResponseSchema = {
    data: Array<AutorespConfigSchema>;
    meta: PaginationMeta;
};


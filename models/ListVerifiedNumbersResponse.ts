/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Meta } from './Meta.ts';
import type { VerifiedNumberResponse } from './VerifiedNumberResponse.ts';

/**
 * A paginated list of Verified Numbers
 */
export type ListVerifiedNumbersResponse = {
    data: Array<VerifiedNumberResponse>;
    meta: Meta;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VerificationRequestStatus } from './VerificationRequestStatus.ts';

/**
 * A paginated response
 */
export type Paginated_VerificationRequestStatus_ = {
    /**
     * The records yielded by this request
     */
    records?: Array<VerificationRequestStatus>;
    /**
     * The total amount of records for these query parameters
     */
    total_records?: number;
};


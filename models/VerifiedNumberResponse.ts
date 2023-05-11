/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VerifiedNumberRecordType } from './VerifiedNumberRecordType.ts';

export type VerifiedNumberResponse = {
    phone_number?: string;
    record_type?: VerifiedNumberRecordType;
    verified_at?: string;
};


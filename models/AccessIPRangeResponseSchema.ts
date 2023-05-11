/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CloudflareSyncStatus } from './CloudflareSyncStatus.ts';

export type AccessIPRangeResponseSchema = {
    id: string;
    cidr_block: string;
    status: CloudflareSyncStatus;
    description?: string;
    user_id: string;
    created_at?: string;
    updated_at?: string;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BulkCreationStatusResponse } from './BulkCreationStatusResponse.ts';
import type { campaign_registry__api__schemas__bulk_creation__Meta } from './campaign_registry__api__schemas__bulk_creation__Meta.ts';

export type BulkCreationTasksResponse = {
    meta: campaign_registry__api__schemas__bulk_creation__Meta;
    records: Array<BulkCreationStatusResponse>;
};


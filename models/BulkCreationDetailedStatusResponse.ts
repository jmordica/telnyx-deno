/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { campaign_registry__api__schemas__bulk_creation__Meta } from './campaign_registry__api__schemas__bulk_creation__Meta.ts';
import type { DetailedTaskStatus } from './DetailedTaskStatus.ts';

export type BulkCreationDetailedStatusResponse = {
    meta: campaign_registry__api__schemas__bulk_creation__Meta;
    records: Array<DetailedTaskStatus>;
};


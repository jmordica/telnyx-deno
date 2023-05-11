/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { campaign_registry__api__schemas__bulk_creation__TaskStatus } from './campaign_registry__api__schemas__bulk_creation__TaskStatus.ts';

export type BulkCreationStatusResponse = {
    /**
     * The ID of the task associated with bulk Sole Proprietor brand and campaign creation.
     */
    taskId: string;
    /**
     * The current status of this task
     */
    status: campaign_registry__api__schemas__bulk_creation__TaskStatus;
    /**
     * The date and time the task was initiated
     */
    createdAt?: string;
    /**
     * The date and time the task's status was updated
     */
    updatedAt?: string;
};


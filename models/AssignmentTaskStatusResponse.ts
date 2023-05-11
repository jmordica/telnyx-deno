/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskStatus } from './TaskStatus.ts';

export type AssignmentTaskStatusResponse = {
    taskId: string;
    /**
     * The status of the task associated with assigning a messaging profile to a campaign.
     */
    status: TaskStatus;
    createdAt?: string;
    updatedAt?: string;
};


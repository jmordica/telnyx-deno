/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SIMCardActionsSummary = {
    status?: SIMCardActionsSummary.status;
    count?: number;
};

export namespace SIMCardActionsSummary {

    export enum status {
        IN_PROGRESS = 'in-progress',
        COMPLETED = 'completed',
        FAILED = 'failed',
        INTERRUPTED = 'interrupted',
    }


}


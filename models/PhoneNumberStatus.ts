/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssignmentStatus } from './AssignmentStatus.ts';

export type PhoneNumberStatus = {
    /**
     * A phone number that is intended to be linked to a campaign.
     */
    phoneNumber: string;
    /**
     * The current status of the phone number.
     */
    status: AssignmentStatus;
    /**
     * The date and time that the this phone number was assigned.
     */
    assigned_at?: string;
    /**
     * Errors related to an individual phone number assignment.
     */
    error?: string;
};


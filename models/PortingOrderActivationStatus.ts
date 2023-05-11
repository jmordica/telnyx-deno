/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Activation status
 */
export enum PortingOrderActivationStatus {
    NEW = 'New',
    PENDING = 'Pending',
    CONFLICT = 'Conflict',
    CANCEL_PENDING = 'Cancel Pending',
    FAILED = 'Failed',
    CONCURRED = 'Concurred',
    ACTIVATE_RDY = 'Activate RDY',
    DISCONNECT_PENDING = 'Disconnect Pending',
    CONCURRENCE_SENT = 'Concurrence Sent',
    OLD = 'Old',
    SENDING = 'Sending',
    ACTIVE = 'Active',
    CANCELED = 'Canceled',
}

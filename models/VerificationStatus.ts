/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The possible statuses of the verification request.
 */
export enum VerificationStatus {
    PENDING = 'pending',
    SMS_DELIVERY_FAILED = 'sms_delivery_failed',
    ACCEPTED = 'accepted',
    EXPIRED = 'expired',
    NOT_ENOUGH_CREDIT = 'not_enough_credit',
    NETWORK_ERROR = 'network_error',
    NUMBER_UNREACHABLE = 'number_unreachable',
    INTERNAL_ERROR = 'internal_error',
    INVALID_DESTINATION = 'invalid_destination',
    TIMED_OUT = 'timed_out',
}

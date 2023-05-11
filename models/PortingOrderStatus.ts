/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PortingOrdersExceptionType } from './PortingOrdersExceptionType.ts';

/**
 * Porting order status
 */
export type PortingOrderStatus = {
    /**
     * A list of 0 or more details about this porting order's status
     */
    details?: Array<PortingOrdersExceptionType>;
    /**
     * The current status of the porting order
     */
    value?: PortingOrderStatus.value;
};

export namespace PortingOrderStatus {

    /**
     * The current status of the porting order
     */
    export enum value {
        DRAFT = 'draft',
        IN_PROCESS = 'in-process',
        SUBMITTED = 'submitted',
        EXCEPTION = 'exception',
        FOC_DATE_CONFIRMED = 'foc-date-confirmed',
        PORTED = 'ported',
        CANCELED = 'canceled',
        CANCEL_PENDING = 'cancel-pending',
    }


}


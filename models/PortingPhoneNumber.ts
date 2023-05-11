/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PortabilityStatus } from './PortabilityStatus.ts';
import type { PortingOrderActivationStatus } from './PortingOrderActivationStatus.ts';

export type PortingPhoneNumber = {
    /**
     * The current status of the porting order
     */
    porting_order_status?: PortingPhoneNumber.porting_order_status;
    /**
     * The type of the phone number
     */
    phone_number_type?: PortingPhoneNumber.phone_number_type;
    /**
     * E164 formatted phone number
     */
    phone_number?: string;
    /**
     * Identifies the associated port request
     */
    porting_order_id?: string;
    /**
     * A key to reference this porting order when contacting Telnyx customer support
     */
    support_key?: string;
    activation_status?: PortingOrderActivationStatus;
    portability_status?: PortabilityStatus;
    /**
     * The current status of the requirements in a INTL porting order
     */
    requirements_status?: PortingPhoneNumber.requirements_status;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
};

export namespace PortingPhoneNumber {

    /**
     * The current status of the porting order
     */
    export enum porting_order_status {
        DRAFT = 'draft',
        IN_PROCESS = 'in-process',
        SUBMITTED = 'submitted',
        EXCEPTION = 'exception',
        FOC_DATE_CONFIRMED = 'foc-date-confirmed',
        CANCEL_PENDING = 'cancel-pending',
        PORTED = 'ported',
        CANCELLED = 'cancelled',
    }

    /**
     * The type of the phone number
     */
    export enum phone_number_type {
        LANDLINE = 'landline',
        LOCAL = 'local',
        MOBILE = 'mobile',
        NATIONAL = 'national',
        SHARED_COST = 'shared_cost',
        TOLL_FREE = 'toll_free',
    }

    /**
     * The current status of the requirements in a INTL porting order
     */
    export enum requirements_status {
        REQUIREMENT_INFO_PENDING = 'requirement-info-pending',
        REQUIREMENT_INFO_UNDER_REVIEW = 'requirement-info-under-review',
        REQUIREMENT_INFO_EXCEPTION = 'requirement-info-exception',
        APPROVED = 'approved',
    }


}


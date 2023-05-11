/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PortingOrderType } from './PortingOrderType.ts';

export type PortingOrderMisc = {
    type?: PortingOrderType;
    /**
     * Remaining numbers can be either kept with their current service provider or disconnected. 'new_billing_telephone_number' is required when 'remaining_numbers_action' is 'keep'.
     */
    remaining_numbers_action?: PortingOrderMisc.remaining_numbers_action;
    /**
     * New billing phone number for the remaining numbers. Used in case the current billing phone number is being ported to Telnyx. This will be set on your account with your current service provider and should be one of the numbers remaining on that account.
     */
    new_billing_phone_number?: string;
};

export namespace PortingOrderMisc {

    /**
     * Remaining numbers can be either kept with their current service provider or disconnected. 'new_billing_telephone_number' is required when 'remaining_numbers_action' is 'keep'.
     */
    export enum remaining_numbers_action {
        KEEP = 'keep',
        DISCONNECT = 'disconnect',
    }


}


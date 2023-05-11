/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HostedNumber } from './HostedNumber.ts';

export type MessagingHostedNumberOrder = {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * Resource unique identifier.
     */
    readonly id?: string;
    /**
     * Automatically associate the number with this messaging profile ID when the order is complete.
     */
    messaging_profile_id?: string | null;
    status?: MessagingHostedNumberOrder.status;
    phone_numbers?: Array<HostedNumber>;
};

export namespace MessagingHostedNumberOrder {

    export enum status {
        FAILED = 'failed',
        PENDING = 'pending',
        SUCCESSFUL = 'successful',
    }


}


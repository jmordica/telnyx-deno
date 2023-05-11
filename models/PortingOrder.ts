/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PortingOrderActivationSettings } from './PortingOrderActivationSettings.ts';
import type { PortingOrderDocuments } from './PortingOrderDocuments.ts';
import type { PortingOrderEndUser } from './PortingOrderEndUser.ts';
import type { PortingOrderMisc } from './PortingOrderMisc.ts';
import type { PortingOrderPhoneNumberConfiguration } from './PortingOrderPhoneNumberConfiguration.ts';
import type { PortingOrderRequirement } from './PortingOrderRequirement.ts';
import type { PortingOrderStatus } from './PortingOrderStatus.ts';
import type { PortingOrderUserFeedback } from './PortingOrderUserFeedback.ts';

export type PortingOrder = {
    /**
     * Uniquely identifies this porting order
     */
    readonly id?: string;
    /**
     * A customer-specified reference number for customer bookkeeping purposes
     */
    customer_reference?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    readonly updated_at?: string;
    status?: PortingOrderStatus;
    /**
     * A key to reference this porting order when contacting Telnyx customer support. This information is not available in draft porting orders.
     */
    readonly support_key?: string;
    /**
     * A key to reference for the porting order group when contacting Telnyx customer support. This information is not available for porting orders in `draft` state
     */
    readonly parent_support_key?: string;
    /**
     * Count of phone numbers associated with this porting order
     */
    readonly porting_phone_numbers_count?: number;
    /**
     * Identifies the old service provider
     */
    readonly old_service_provider_ocn?: string;
    documents?: PortingOrderDocuments;
    misc?: PortingOrderMisc;
    end_user?: PortingOrderEndUser;
    activation_settings?: PortingOrderActivationSettings;
    phone_number_configuration?: PortingOrderPhoneNumberConfiguration;
    /**
     * The type of the phone number
     */
    phone_number_type?: PortingOrder.phone_number_type;
    /**
     * A description of the porting order
     */
    readonly description?: string;
    /**
     * List of documentation requirements for porting numbers.
     */
    requirements?: Array<PortingOrderRequirement>;
    /**
     * Is true when the required documentation is met
     */
    requirements_met?: boolean;
    user_feedback?: PortingOrderUserFeedback;
    /**
     * Identifies the user (or organization) who requested the porting order
     */
    user_id?: string;
    webhook_url?: string;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
};

export namespace PortingOrder {

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


}


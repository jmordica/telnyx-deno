/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PortingOrderDocuments } from './PortingOrderDocuments.ts';
import type { PortingOrderEndUser } from './PortingOrderEndUser.ts';
import type { PortingOrderMisc } from './PortingOrderMisc.ts';
import type { PortingOrderPhoneNumberConfiguration } from './PortingOrderPhoneNumberConfiguration.ts';
import type { PortingOrderUserFeedback } from './PortingOrderUserFeedback.ts';
import type { UpdatePortingOrderRequirement } from './UpdatePortingOrderRequirement.ts';

export type UpdatePortingOrder = {
    misc?: PortingOrderMisc;
    end_user?: PortingOrderEndUser;
    documents?: PortingOrderDocuments;
    activation_settings?: {
        /**
         * ISO 8601 formatted Date/Time requested for the FOC date
         */
        foc_datetime_requested?: string;
    };
    phone_number_configuration?: PortingOrderPhoneNumberConfiguration;
    /**
     * List of requirements for porting numbers.
     */
    requirements?: Array<UpdatePortingOrderRequirement>;
    user_feedback?: PortingOrderUserFeedback;
    webhook_url?: string;
    customer_reference?: string;
};


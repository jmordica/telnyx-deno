/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Money } from './Money.ts';

export type WhatsAppUsageAggregation = {
    message_type?: string;
    direction?: string;
    status?: string;
    recipient_country_code?: string;
    whatsapp_fee?: Money;
    telnyx_fee?: Money;
    cost?: Money;
    count?: string;
    record_type?: string;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OutboundMessage } from './OutboundMessage.ts';

export type OutboundMessageEvent = {
    data?: OutboundMessage;
    meta?: {
        /**
         * Number of attempts to deliver the webhook event.
         */
        attempt?: number;
        /**
         * The webhook URL the event was delivered to.
         */
        delivered_to?: string;
    };
};


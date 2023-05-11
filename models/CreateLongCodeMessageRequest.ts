/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ToNumber } from './ToNumber.ts';

export type CreateLongCodeMessageRequest = {
    /**
     * Phone number, in +E.164 format, used to send the message.
     */
    from: string;
    to: ToNumber;
    /**
     * Message body (i.e., content) as a non-empty string.
     *
     * **Required for SMS**
     */
    text?: string;
    /**
     * Subject of multimedia message
     */
    subject?: string;
    /**
     * A list of media URLs. The total media size must be less than 1 MB.
     *
     * **Required for MMS**
     */
    media_urls?: Array<string>;
    /**
     * The URL where webhooks related to this message will be sent.
     */
    webhook_url?: string;
    /**
     * The failover URL where webhooks related to this message will be sent if sending to the primary URL fails.
     */
    webhook_failover_url?: string;
    /**
     * If the profile this number is associated with has webhooks, use them for delivery notifications. If webhooks are also specified on the message itself, they will be attempted first, then those on the profile.
     */
    use_profile_webhooks?: boolean;
    /**
     * The protocol for sending the message, either SMS or MMS.
     */
    type?: CreateLongCodeMessageRequest.type;
    /**
     * Automatically detect if an SMS message is unusually long and exceeds a recommended limit of message parts.
     */
    auto_detect?: boolean;
};

export namespace CreateLongCodeMessageRequest {

    /**
     * The protocol for sending the message, either SMS or MMS.
     */
    export enum type {
        SMS = 'SMS',
        MMS = 'MMS',
    }


}


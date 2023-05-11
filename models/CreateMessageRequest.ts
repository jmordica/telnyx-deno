/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ToNumber } from './ToNumber.ts';

export type CreateMessageRequest = {
    /**
     * Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short code).
     *
     * **Required if sending with a phone number, short code, or alphanumeric sender ID.**
     *
     */
    from?: string;
    /**
     * Unique identifier for a messaging profile.
     *
     * **Required if sending via number pool or with an alphanumeric sender ID.**
     *
     */
    messaging_profile_id?: string;
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
    type?: CreateMessageRequest.type;
    /**
     * Automatically detect if an SMS message is unusually long and exceeds a recommended limit of message parts.
     */
    auto_detect?: boolean;
};

export namespace CreateMessageRequest {

    /**
     * The protocol for sending the message, either SMS or MMS.
     */
    export enum type {
        SMS = 'SMS',
        MMS = 'MMS',
    }


}


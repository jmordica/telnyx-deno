/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Error } from './Error.ts';

export type OutboundMessagePayload = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: OutboundMessagePayload.record_type;
    /**
     * The direction of the message. Inbound messages are sent to you whereas outbound messages are sent from you.
     */
    direction?: OutboundMessagePayload.direction;
    /**
     * Identifies the type of resource.
     */
    id?: string;
    /**
     * The type of message.
     */
    type?: OutboundMessagePayload.type;
    /**
     * Unique identifier for a messaging profile.
     */
    messaging_profile_id?: string;
    /**
     * The id of the organization the messaging profile belongs to.
     */
    organization_id?: string;
    from?: {
        /**
         * Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short code).
         */
        phone_number?: string;
        /**
         * The carrier of the receiver.
         */
        carrier?: string;
        /**
         * The line-type of the receiver.
         */
        line_type?: OutboundMessagePayload.line_type;
    };
    to?: Array<{
        /**
         * Receiving address (+E.164 formatted phone number or short code).
         */
        phone_number?: string;
        /**
         * The delivery status of the message.
         */
        status?: 'queued' | 'sending' | 'sent' | 'expired' | 'sending_failed' | 'delivery_unconfirmed' | 'delivered' | 'delivery_failed.ts';
        /**
         * The carrier of the receiver.
         */
        carrier?: string;
        /**
         * The line-type of the receiver.
         */
        line_type?: 'Wireline' | 'Wireless' | 'VoWiFi' | 'VoIP' | 'Pre-Paid Wireless' | '.ts';
    }>;
    /**
     * Message body (i.e., content) as a non-empty string.
     *
     * **Required for SMS**
     */
    text?: string;
    /**
     * Subject of multimedia message
     */
    subject?: string | null;
    media?: Array<{
        /**
         * The url of the media requested to be sent.
         */
        url?: string;
        /**
         * The MIME type of the requested media.
         */
        content_type?: string | null;
        /**
         * The SHA256 hash of the requested media.
         */
        sha256?: string | null;
        /**
         * The size of the requested media.
         */
        size?: number | null;
    }>;
    /**
     * The URL where webhooks related to this message will be sent.
     */
    webhook_url?: string | null;
    /**
     * The failover URL where webhooks related to this message will be sent if sending to the primary URL fails.
     */
    webhook_failover_url?: string | null;
    /**
     * Encoding scheme used for the message body.
     */
    encoding?: string;
    /**
     * Number of parts into which the message's body must be split.
     */
    parts?: number;
    /**
     * Tags associated with the resource.
     */
    tags?: Array<string>;
    cost?: {
        /**
         * The amount deducted from your account.
         */
        amount?: string;
        /**
         * The ISO 4217 currency identifier.
         */
        currency?: string;
    } | null;
    /**
     * ISO 8601 formatted date indicating when the message request was received.
     */
    received_at?: string;
    /**
     * ISO 8601 formatted date indicating when the message was sent.
     */
    sent_at?: string;
    /**
     * ISO 8601 formatted date indicating when the message was finalized.
     */
    completed_at?: string;
    /**
     * Message must be out of the queue by this time or else it will be discarded and marked as 'sending_failed'. Once the message moves out of the queue, this field will be nulled
     */
    valid_until?: string | null;
    /**
     * These errors may point at addressees when referring to unsuccessful/unconfirmed delivery statuses.
     */
    errors?: Array<Error>;
};

export namespace OutboundMessagePayload {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        MESSAGE = 'message',
    }

    /**
     * The direction of the message. Inbound messages are sent to you whereas outbound messages are sent from you.
     */
    export enum direction {
        OUTBOUND = 'outbound',
    }

    /**
     * The type of message.
     */
    export enum type {
        SMS = 'SMS',
        MMS = 'MMS',
    }

    /**
     * The line-type of the receiver.
     */
    export enum line_type {
        WIRELINE = 'Wireline',
        WIRELESS = 'Wireless',
        VO_WI_FI = 'VoWiFi',
        VO_IP = 'VoIP',
        PRE_PAID_WIRELESS = 'Pre-Paid Wireless',
        = '',
    }


}


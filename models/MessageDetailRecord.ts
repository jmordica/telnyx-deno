/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MessageDetailRecord = {
    /**
     * Unique identifier of the message
     */
    uuid?: string;
    /**
     * Identifier of the Telnyx account who owns the message
     */
    user_id?: string;
    /**
     * Message completion time
     */
    completed_at?: string;
    /**
     * Message creation time
     */
    created_at?: string;
    /**
     * Message updated time
     */
    updated_at?: string;
    /**
     * Time when the message was sent
     */
    sent_at?: string;
    /**
     * Country-specific carrier used to send or receive the message
     */
    carrier?: string;
    /**
     * Fee charged by certain carriers in order to deliver certain message types. Telnyx passes this fee on to the customer according to our pricing table
     */
    carrier_fee?: string;
    /**
     * The recipient of the message (to parameter in the Messaging API)
     */
    cld?: string;
    /**
     * The sender of the message (from parameter in the Messaging API). For Alphanumeric ID messages, this is the sender ID value
     */
    cli?: string;
    /**
     * Two-letter representation of the country of the cld property using the ISO 3166-1 alpha-2 format
     */
    country_code?: string;
    /**
     * Final webhook delivery status
     */
    delivery_status?: string;
    /**
     * Failover customer-provided URL which Telnyx posts delivery status webhooks to
     */
    delivery_status_failover_url?: string;
    /**
     * Primary customer-provided URL which Telnyx posts delivery status webhooks to
     */
    delivery_status_webhook_url?: string;
    /**
     * Logical direction of the message from the Telnyx customer's perspective. It's inbound when the Telnyx customer receives the message, or outbound otherwise
     */
    direction?: MessageDetailRecord.direction;
    /**
     * Indicates whether this is a Free-To-End-User (FTEU) short code message
     */
    fteu?: boolean;
    /**
     * Mobile country code. Only available for certain products, such as Global Outbound-Only from Alphanumeric Sender ID
     */
    mcc?: string;
    /**
     * Mobile network code. Only available for certain products, such as Global Outbound-Only from Alphanumeric Sender ID
     */
    mnc?: string;
    /**
     * Describes the Messaging service used to send the message. Available services are: Short Message Service (SMS), Multimedia Messaging Service (MMS), and Rich Communication Services (RCS)
     */
    message_type?: MessageDetailRecord.message_type;
    /**
     * Indicates whether both sender and recipient numbers are Telnyx-managed
     */
    on_net?: boolean;
    /**
     * Unique identifier of the Messaging Profile used to send or receive the message
     */
    profile_id?: string;
    /**
     * Name of the Messaging Profile used to send or receive the message
     */
    profile_name?: string;
    /**
     * Two-letter representation of the country of the cli property using the ISO 3166-1 alpha-2 format
     */
    source_country_code?: string;
    /**
     * Final status of the message after the delivery attempt
     */
    status?: MessageDetailRecord.status;
    /**
     * Comma-separated tags assigned to the Telnyx number associated with the message
     */
    tags?: string;
    /**
     * Currency amount per billing unit used to calculate the Telnyx billing cost
     */
    rate?: string;
    /**
     * Telnyx account currency used to describe monetary values, including billing cost
     */
    currency?: string;
    /**
     * Amount, in the user currency, for the Telnyx billing cost
     */
    cost?: string;
    /**
     * Telnyx API error codes returned by the Telnyx gateway
     */
    errors?: Array<string>;
    /**
     * Number of message parts. The message is broken down in multiple parts when its length surpasses the limit of 160 characters
     */
    parts?: number;
    /**
     * Identifies the record schema
     */
    record_type: 'MessageDetailRecord.ts';
};

export namespace MessageDetailRecord {

    /**
     * Logical direction of the message from the Telnyx customer's perspective. It's inbound when the Telnyx customer receives the message, or outbound otherwise
     */
    export enum direction {
        INBOUND = 'inbound',
        OUTBOUND = 'outbound',
    }

    /**
     * Describes the Messaging service used to send the message. Available services are: Short Message Service (SMS), Multimedia Messaging Service (MMS), and Rich Communication Services (RCS)
     */
    export enum message_type {
        SMS = 'SMS',
        MMS = 'MMS',
        RCS = 'RCS',
    }

    /**
     * Final status of the message after the delivery attempt
     */
    export enum status {
        GW_TIMEOUT = 'gw_timeout',
        DELIVERED = 'delivered',
        DLR_UNCONFIRMED = 'dlr_unconfirmed',
        DLR_TIMEOUT = 'dlr_timeout',
        RECEIVED = 'received',
        GW_REJECT = 'gw_reject',
        FAILED = 'failed',
    }


}


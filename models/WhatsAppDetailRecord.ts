/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WhatsAppDetailRecord = {
    /**
     * WhatsApp Message Id
     */
    id?: string;
    /**
     * WhatsApp API Version
     */
    version?: string;
    /**
     * WhatsApp Sender Id
     */
    sender_id?: string;
    /**
     * WhatsApp Recipient Id
     */
    recipient_id?: string;
    /**
     * WhatsApp Message Type. Consult WhatsApp API documentation to see all available types
     */
    message_type?: WhatsAppDetailRecord.message_type;
    /**
     * WhatsApp Message Status. Consult WhatsApp API documentation to see all available status
     */
    message_status?: WhatsAppDetailRecord.message_status;
    /**
     * Logical direction of the message from the Telnyx customer's perspective. It's inbound when the Telnyx customer receives the message, or outbound otherwise
     */
    direction?: WhatsAppDetailRecord.direction;
    /**
     * CLDR two-letter region-code of recipient
     */
    recipient_region_code?: string;
    /**
     * Telnyx account currency used to describe monetary values, including billing cost
     */
    currency?: string;
    /**
     * A string representing Whatsapp error code. Consult WhatsApp API documentation to see all available error codes
     */
    whatsapp_error_code?: string;
    /**
     * UTC time when the message was created
     */
    created_at?: string;
    /**
     * UTC time when the webhook was received
     */
    webhook_received_at?: string;
    /**
     * UUID representation of the webhook unique identifier
     */
    webhook_id?: string;
    /**
     * Currency amount for Telnyx billing cost
     */
    telnyx_fee?: string;
    /**
     * Currency amount for WhatsApp cost
     */
    whatsapp_fee?: string;
    /**
     * Whatsapp Conversation ID
     */
    conversation_id?: string;
    /**
     * Whatsapp Conversation Origin
     */
    conversation_origin?: WhatsAppDetailRecord.conversation_origin;
    /**
     * Whatsapp Business Account ID
     */
    whatsapp_business_account_id?: string;
    record_type: 'WhatsAppDetailRecord.ts';
};

export namespace WhatsAppDetailRecord {

    /**
     * WhatsApp Message Type. Consult WhatsApp API documentation to see all available types
     */
    export enum message_type {
        SESSION = 'session',
        TEMPLATE = 'template',
    }

    /**
     * WhatsApp Message Status. Consult WhatsApp API documentation to see all available status
     */
    export enum message_status {
        SENT = 'sent',
        DELIVERED = 'delivered',
        READ = 'read',
        FAILED = 'failed',
        DELETED = 'deleted',
    }

    /**
     * Logical direction of the message from the Telnyx customer's perspective. It's inbound when the Telnyx customer receives the message, or outbound otherwise
     */
    export enum direction {
        INBOUND = 'inbound',
        OUTBOUND = 'outbound',
    }

    /**
     * Whatsapp Conversation Origin
     */
    export enum conversation_origin {
        BUSINESS_INITIATED = 'business_initiated',
        USER_INITIATED = 'user_initiated',
        REFERRAL_CONVERSION = 'referral_conversion',
    }


}


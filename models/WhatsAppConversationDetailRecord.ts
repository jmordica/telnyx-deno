/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WhatsAppConversationDetailRecord = {
    /**
     * CLDR two-letter region-code of recipient
     */
    recipient_region_code?: string;
    /**
     * Telnyx account currency used to describe monetary values, including billing cost
     */
    currency?: string;
    /**
     * UTC time when the message was created
     */
    created_at?: string;
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
    conversation_origin?: WhatsAppConversationDetailRecord.conversation_origin;
    /**
     * Whatsapp Business Account ID
     */
    whatsapp_business_account_id?: string;
    record_type: 'WhatsAppConversationDetailRecord.ts';
};

export namespace WhatsAppConversationDetailRecord {

    /**
     * Whatsapp Conversation Origin
     */
    export enum conversation_origin {
        BUSINESS_INITIATED = 'business_initiated',
        USER_INITIATED = 'user_initiated',
        REFERRAL_CONVERSION = 'referral_conversion',
    }


}


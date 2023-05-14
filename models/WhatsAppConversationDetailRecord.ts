/**
 * Telnyx API
 * SIP trunking, SMS, MMS, Call Control and Telephony Data Services.
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@telnyx.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class WhatsAppConversationDetailRecord {
    /**
    * CLDR two-letter region-code of recipient
    */
    'recipientRegionCode'?: string;
    /**
    * Telnyx account currency used to describe monetary values, including billing cost
    */
    'currency'?: string;
    /**
    * UTC time when the message was created
    */
    'createdAt'?: Date;
    /**
    * Currency amount for WhatsApp cost
    */
    'whatsappFee'?: string;
    /**
    * Whatsapp Conversation ID
    */
    'conversationId'?: string;
    /**
    * Whatsapp Conversation Origin
    */
    'conversationOrigin'?: WhatsAppConversationDetailRecordConversationOriginEnum;
    /**
    * Whatsapp Business Account ID
    */
    'whatsappBusinessAccountId'?: string;
    'recordType': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recipientRegionCode",
            "baseName": "recipient_region_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "whatsappFee",
            "baseName": "whatsapp_fee",
            "type": "string",
            "format": ""
        },
        {
            "name": "conversationId",
            "baseName": "conversation_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "conversationOrigin",
            "baseName": "conversation_origin",
            "type": "WhatsAppConversationDetailRecordConversationOriginEnum",
            "format": ""
        },
        {
            "name": "whatsappBusinessAccountId",
            "baseName": "whatsapp_business_account_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WhatsAppConversationDetailRecord.attributeTypeMap;
    }

    public constructor() {
    }
}


export type WhatsAppConversationDetailRecordConversationOriginEnum = "business_initiated" | "user_initiated" | "referral_conversion" ;

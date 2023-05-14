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

export class MessageDetailRecord {
    /**
    * Unique identifier of the message
    */
    'uuid'?: string;
    /**
    * Identifier of the Telnyx account who owns the message
    */
    'userId'?: string;
    /**
    * Message completion time
    */
    'completedAt'?: Date;
    /**
    * Message creation time
    */
    'createdAt'?: Date;
    /**
    * Message updated time
    */
    'updatedAt'?: Date;
    /**
    * Time when the message was sent
    */
    'sentAt'?: Date;
    /**
    * Country-specific carrier used to send or receive the message
    */
    'carrier'?: string;
    /**
    * Fee charged by certain carriers in order to deliver certain message types. Telnyx passes this fee on to the customer according to our pricing table
    */
    'carrierFee'?: string;
    /**
    * The recipient of the message (to parameter in the Messaging API)
    */
    'cld'?: string;
    /**
    * The sender of the message (from parameter in the Messaging API). For Alphanumeric ID messages, this is the sender ID value
    */
    'cli'?: string;
    /**
    * Two-letter representation of the country of the cld property using the ISO 3166-1 alpha-2 format
    */
    'countryCode'?: string;
    /**
    * Final webhook delivery status
    */
    'deliveryStatus'?: string;
    /**
    * Failover customer-provided URL which Telnyx posts delivery status webhooks to
    */
    'deliveryStatusFailoverUrl'?: string;
    /**
    * Primary customer-provided URL which Telnyx posts delivery status webhooks to
    */
    'deliveryStatusWebhookUrl'?: string;
    /**
    * Logical direction of the message from the Telnyx customer\'s perspective. It\'s inbound when the Telnyx customer receives the message, or outbound otherwise
    */
    'direction'?: MessageDetailRecordDirectionEnum;
    /**
    * Indicates whether this is a Free-To-End-User (FTEU) short code message
    */
    'fteu'?: boolean;
    /**
    * Mobile country code. Only available for certain products, such as Global Outbound-Only from Alphanumeric Sender ID
    */
    'mcc'?: string;
    /**
    * Mobile network code. Only available for certain products, such as Global Outbound-Only from Alphanumeric Sender ID
    */
    'mnc'?: string;
    /**
    * Describes the Messaging service used to send the message. Available services are: Short Message Service (SMS), Multimedia Messaging Service (MMS), and Rich Communication Services (RCS)
    */
    'messageType'?: MessageDetailRecordMessageTypeEnum;
    /**
    * Indicates whether both sender and recipient numbers are Telnyx-managed
    */
    'onNet'?: boolean;
    /**
    * Unique identifier of the Messaging Profile used to send or receive the message
    */
    'profileId'?: string;
    /**
    * Name of the Messaging Profile used to send or receive the message
    */
    'profileName'?: string;
    /**
    * Two-letter representation of the country of the cli property using the ISO 3166-1 alpha-2 format
    */
    'sourceCountryCode'?: string;
    /**
    * Final status of the message after the delivery attempt
    */
    'status'?: MessageDetailRecordStatusEnum;
    /**
    * Comma-separated tags assigned to the Telnyx number associated with the message
    */
    'tags'?: string;
    /**
    * Currency amount per billing unit used to calculate the Telnyx billing cost
    */
    'rate'?: string;
    /**
    * Telnyx account currency used to describe monetary values, including billing cost
    */
    'currency'?: string;
    /**
    * Amount, in the user currency, for the Telnyx billing cost
    */
    'cost'?: string;
    /**
    * Telnyx API error codes returned by the Telnyx gateway
    */
    'errors'?: Array<string>;
    /**
    * Number of message parts. The message is broken down in multiple parts when its length surpasses the limit of 160 characters
    */
    'parts'?: number;
    /**
    * Identifies the record schema
    */
    'recordType': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "completedAt",
            "baseName": "completed_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "sentAt",
            "baseName": "sent_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "carrier",
            "baseName": "carrier",
            "type": "string",
            "format": ""
        },
        {
            "name": "carrierFee",
            "baseName": "carrier_fee",
            "type": "string",
            "format": ""
        },
        {
            "name": "cld",
            "baseName": "cld",
            "type": "string",
            "format": ""
        },
        {
            "name": "cli",
            "baseName": "cli",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryStatus",
            "baseName": "delivery_status",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryStatusFailoverUrl",
            "baseName": "delivery_status_failover_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryStatusWebhookUrl",
            "baseName": "delivery_status_webhook_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "MessageDetailRecordDirectionEnum",
            "format": ""
        },
        {
            "name": "fteu",
            "baseName": "fteu",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mcc",
            "baseName": "mcc",
            "type": "string",
            "format": ""
        },
        {
            "name": "mnc",
            "baseName": "mnc",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageType",
            "baseName": "message_type",
            "type": "MessageDetailRecordMessageTypeEnum",
            "format": ""
        },
        {
            "name": "onNet",
            "baseName": "on_net",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "profileId",
            "baseName": "profile_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "profileName",
            "baseName": "profile_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceCountryCode",
            "baseName": "source_country_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "MessageDetailRecordStatusEnum",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "string",
            "format": ""
        },
        {
            "name": "rate",
            "baseName": "rate",
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
            "name": "cost",
            "baseName": "cost",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "parts",
            "baseName": "parts",
            "type": "number",
            "format": ""
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MessageDetailRecord.attributeTypeMap;
    }

    public constructor() {
    }
}


export type MessageDetailRecordDirectionEnum = "inbound" | "outbound" ;
export type MessageDetailRecordMessageTypeEnum = "SMS" | "MMS" | "RCS" ;
export type MessageDetailRecordStatusEnum = "gw_timeout" | "delivered" | "dlr_unconfirmed" | "dlr_timeout" | "received" | "gw_reject" | "failed" ;

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

export class MdrDetailResponse {
    /**
    * Message sent time
    */
    'createdAt'?: Date;
    /**
    * Configured profile name. New profiles can be created and configured on Telnyx portal
    */
    'profileName'?: string;
    /**
    * Direction of message - inbound or outbound.
    */
    'direction'?: string;
    /**
    * Number of parts this message has. Max number of character is 160. If message contains more characters then that it will be broken down in multiple parts
    */
    'parts'?: number;
    /**
    * Message status
    */
    'status'?: MdrDetailResponseStatusEnum;
    /**
    * The destination number for a call, or the callee
    */
    'cld'?: string;
    /**
    * The number associated with the person initiating the call, or the caller
    */
    'cli'?: string;
    /**
    * Rate applied to the message
    */
    'rate'?: string;
    /**
    * Final cost. Cost is calculated as rate * parts
    */
    'cost'?: string;
    /**
    * Currency of the rate and cost
    */
    'currency'?: MdrDetailResponseCurrencyEnum;
    /**
    * Id of message detail record
    */
    'id'?: string;
    /**
    * Type of message
    */
    'messageType'?: MdrDetailResponseMessageTypeEnum;
    'recordType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "profileName",
            "baseName": "profile_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "string",
            "format": ""
        },
        {
            "name": "parts",
            "baseName": "parts",
            "type": "number",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "MdrDetailResponseStatusEnum",
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
            "name": "rate",
            "baseName": "rate",
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
            "name": "currency",
            "baseName": "currency",
            "type": "MdrDetailResponseCurrencyEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageType",
            "baseName": "message_type",
            "type": "MdrDetailResponseMessageTypeEnum",
            "format": ""
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MdrDetailResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type MdrDetailResponseStatusEnum = "GW_TIMEOUT" | "DELIVERED" | "DLR_UNCONFIRMED" | "DLR_TIMEOUT" | "RECEIVED" | "GW_REJECT" | "FAILED" ;
export type MdrDetailResponseCurrencyEnum = "AUD" | "CAD" | "EUR" | "GBP" | "USD" ;
export type MdrDetailResponseMessageTypeEnum = "SMS" | "MMS" ;

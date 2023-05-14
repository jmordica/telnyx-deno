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

export class MediaStorageDetailRecord {
    /**
    * Unique identifier for the Media Storage Event
    */
    'id'?: string;
    /**
    * Event creation time
    */
    'createdAt'?: Date;
    /**
    * Asset id
    */
    'assetId'?: string;
    /**
    * User id
    */
    'userId'?: string;
    /**
    * Organization owner id
    */
    'orgId'?: string;
    /**
    * Type of action performed against the Media Storage API
    */
    'actionType'?: string;
    /**
    * Link channel type
    */
    'linkChannelType'?: string;
    /**
    * Link channel id
    */
    'linkChannelId'?: string;
    /**
    * Request status
    */
    'status'?: string;
    /**
    * Webhook id
    */
    'webhookId'?: string;
    /**
    * Currency amount per billing unit used to calculate the Telnyx billing cost
    */
    'rate'?: string;
    /**
    * Billing unit used to calculate the Telnyx billing cost
    */
    'rateMeasuredIn'?: string;
    /**
    * Currency amount for Telnyx billing cost
    */
    'cost'?: string;
    /**
    * Telnyx account currency used to describe monetary values, including billing cost
    */
    'currency'?: string;
    'recordType': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
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
            "name": "assetId",
            "baseName": "asset_id",
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
            "name": "orgId",
            "baseName": "org_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "actionType",
            "baseName": "action_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkChannelType",
            "baseName": "link_channel_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkChannelId",
            "baseName": "link_channel_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "webhookId",
            "baseName": "webhook_id",
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
            "name": "rateMeasuredIn",
            "baseName": "rate_measured_in",
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
        return MediaStorageDetailRecord.attributeTypeMap;
    }

    public constructor() {
    }
}


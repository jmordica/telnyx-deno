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

/**
* Original webhook JSON data. Payload fields vary according to event type.
*/
export class WebhookDeliveryWebhook {
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: WebhookDeliveryWebhookRecordTypeEnum;
    /**
    * The type of event being delivered.
    */
    'eventType'?: WebhookDeliveryWebhookEventTypeEnum;
    /**
    * Identifies the type of resource.
    */
    'id'?: string;
    /**
    * ISO 8601 datetime of when the event occurred.
    */
    'occurredAt'?: Date;
    'payload'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "WebhookDeliveryWebhookRecordTypeEnum",
            "format": ""
        },
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "WebhookDeliveryWebhookEventTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "occurredAt",
            "baseName": "occurred_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebhookDeliveryWebhook.attributeTypeMap;
    }

    public constructor() {
    }
}


export type WebhookDeliveryWebhookRecordTypeEnum = "event" ;
export type WebhookDeliveryWebhookEventTypeEnum = "webhook.command" ;


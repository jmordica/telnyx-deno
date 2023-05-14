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

import { Direction } from '../models/Direction.ts';
import { Quality } from '../models/Quality.ts';
import { HttpFile } from '../http/http.ts';

export class Fax {
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: FaxRecordTypeEnum;
    /**
    * Identifies the resource.
    */
    'id'?: string;
    /**
    * The ID of the connection used to send the fax.
    */
    'connectionId'?: string;
    'direction'?: Direction;
    /**
    * The URL to the PDF used for the fax\'s media. media_url and media_name/contents can\'t be submitted together.
    */
    'mediaUrl'?: string;
    /**
    * The media_name used for the fax\'s media. Must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. media_name and media_url/contents can\'t be submitted together.
    */
    'mediaName'?: string;
    /**
    * The phone number, in E.164 format, the fax will be sent to or SIP URI
    */
    'to'?: string;
    /**
    * The phone number, in E.164 format, the fax will be sent from.
    */
    '_from'?: string;
    'quality'?: Quality;
    /**
    * Status of the fax
    */
    'status'?: FaxStatusEnum;
    /**
    * URL that will receive fax webhooks
    */
    'webhookUrl'?: string;
    /**
    * Optional failover URL that will receive fax webhooks if webhook_url doesn\'t return a 2XX response
    */
    'webhookFailoverUrl'?: string;
    /**
    * Should fax media be stored on temporary URL. It does not support media_name.
    */
    'storeMedia'?: boolean;
    /**
    * If store_media was set to true, this is a link to temporary location. Link expires after 10 minutes.
    */
    'storedMediaUrl'?: string;
    /**
    * ISO 8601 timestamp when resource was created
    */
    'createdAt'?: string;
    /**
    * ISO 8601 timestamp when resource was updated
    */
    'updatedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "FaxRecordTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "connectionId",
            "baseName": "connection_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "Direction",
            "format": ""
        },
        {
            "name": "mediaUrl",
            "baseName": "media_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "mediaName",
            "baseName": "media_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string",
            "format": ""
        },
        {
            "name": "_from",
            "baseName": "from",
            "type": "string",
            "format": ""
        },
        {
            "name": "quality",
            "baseName": "quality",
            "type": "Quality",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "FaxStatusEnum",
            "format": ""
        },
        {
            "name": "webhookUrl",
            "baseName": "webhook_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "webhookFailoverUrl",
            "baseName": "webhook_failover_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "storeMedia",
            "baseName": "store_media",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "storedMediaUrl",
            "baseName": "stored_media_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": "datetime"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": "datetime"
        }    ];

    static getAttributeTypeMap() {
        return Fax.attributeTypeMap;
    }

    public constructor() {
    }
}


export type FaxRecordTypeEnum = "fax" ;
export type FaxStatusEnum = "queued" | "media.processed" | "originated" | "sending" | "delivered" | "failed" | "initiated" | "receiving" | "media.processing" | "received" ;


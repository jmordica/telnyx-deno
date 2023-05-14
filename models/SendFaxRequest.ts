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

import { Quality } from '../models/Quality.ts';
import { HttpFile } from '../http/http.ts';

export class SendFaxRequest {
    /**
    * The connection ID to send the fax with.
    */
    'connectionId': string;
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
    'to': string;
    /**
    * The phone number, in E.164 format, the fax will be sent from.
    */
    '_from': string;
    'quality'?: Quality;
    /**
    * The flag to disable the T.38 protocol.
    */
    't38Enabled'?: boolean;
    /**
    * The flag to enable monochrome, true black and white fax results.
    */
    'monochrome'?: boolean;
    /**
    * Should fax media be stored on temporary URL. It does not support media_name, they can\'t be submitted together.
    */
    'storeMedia'?: boolean;
    /**
    * Use this field to override the URL to which Telnyx will send subsequent webhooks for this fax.
    */
    'webhookUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "connectionId",
            "baseName": "connection_id",
            "type": "string",
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
            "name": "t38Enabled",
            "baseName": "t38_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "monochrome",
            "baseName": "monochrome",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "storeMedia",
            "baseName": "store_media",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "webhookUrl",
            "baseName": "webhook_url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendFaxRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



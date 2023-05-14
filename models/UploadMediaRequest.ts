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

export class UploadMediaRequest {
    /**
    * The URL where the media to be stored in Telnyx network is currently hosted. The maximum allowed size is 20 MB.
    */
    'mediaUrl': string;
    /**
    * The number of seconds after which the media resource will be deleted, defaults to 2 days. The maximum allowed vale is 630720000, which translates to 20 years.
    */
    'ttlSecs'?: number;
    /**
    * The unique identifier of a file.
    */
    'mediaName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "mediaUrl",
            "baseName": "media_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "ttlSecs",
            "baseName": "ttl_secs",
            "type": "number",
            "format": ""
        },
        {
            "name": "mediaName",
            "baseName": "media_name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UploadMediaRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

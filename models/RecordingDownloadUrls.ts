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
* The links to download the recording files
*/
export class RecordingDownloadUrls {
    /**
    * Link to download the recording in mp3 format
    */
    'mp3'?: string;
    /**
    * Link to download the recording in wav format
    */
    'wav'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "mp3",
            "baseName": "mp3",
            "type": "string",
            "format": ""
        },
        {
            "name": "wav",
            "baseName": "wav",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RecordingDownloadUrls.attributeTypeMap;
    }

    public constructor() {
    }
}


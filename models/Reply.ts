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
* Reply button details.
*/
export class Reply {
    /**
    * Button title. It cannot be an empty string and must be unique within the message. Emojis are supported, markdown is not.
    */
    'title': string;
    /**
    * Unique identifier for your button. This ID is returned in the webhook when the button is clicked by the user. You cannot have leading or trailing spaces when setting the ID.
    */
    'id': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Reply.attributeTypeMap;
    }

    public constructor() {
    }
}


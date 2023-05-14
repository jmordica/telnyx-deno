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

export class MessagingProfileHighLevelMetricsOutbound {
    /**
    * The number of outbound messages sent.
    */
    'sent'?: number;
    /**
    * The number of outbound messages successfully delivered.
    */
    'delivered'?: number;
    /**
    * The ratio of messages sent that resulted in errors.
    */
    'errorRatio'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sent",
            "baseName": "sent",
            "type": "number",
            "format": ""
        },
        {
            "name": "delivered",
            "baseName": "delivered",
            "type": "number",
            "format": ""
        },
        {
            "name": "errorRatio",
            "baseName": "error_ratio",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MessagingProfileHighLevelMetricsOutbound.attributeTypeMap;
    }

    public constructor() {
    }
}

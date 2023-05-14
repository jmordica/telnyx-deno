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

export class MessagingProfileMessageTypeMetrics {
    /**
    * The metric type.
    */
    'label'?: string;
    /**
    * The number of outbound messages sent.
    */
    'sent'?: number;
    /**
    * The number of outbound messages successfully delivered.
    */
    'delivered'?: number;
    /**
    * The ratio of outbound messages sent that resulted in errors.
    */
    'outboundErrorRatio'?: number;
    /**
    * The number of inbound messages received.
    */
    'received'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
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
            "name": "outboundErrorRatio",
            "baseName": "outbound_error_ratio",
            "type": "number",
            "format": ""
        },
        {
            "name": "received",
            "baseName": "received",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MessagingProfileMessageTypeMetrics.attributeTypeMap;
    }

    public constructor() {
    }
}


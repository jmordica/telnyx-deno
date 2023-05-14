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

export class PortingOrdersAllowedFocWindow {
    /**
    * ISO 8601 formatted date indicating the start of the range of foc window.
    */
    'startedAt'?: Date;
    /**
    * ISO 8601 formatted date indicating the end of the range of foc window
    */
    'endedAt'?: Date;
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "startedAt",
            "baseName": "started_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endedAt",
            "baseName": "ended_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PortingOrdersAllowedFocWindow.attributeTypeMap;
    }

    public constructor() {
    }
}

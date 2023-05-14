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

export class UpdatePortingOrderActivationSettings {
    /**
    * ISO 8601 formatted Date/Time requested for the FOC date
    */
    'focDatetimeRequested'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "focDatetimeRequested",
            "baseName": "foc_datetime_requested",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return UpdatePortingOrderActivationSettings.attributeTypeMap;
    }

    public constructor() {
    }
}

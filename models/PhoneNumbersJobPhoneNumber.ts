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

export class PhoneNumbersJobPhoneNumber {
    /**
    * The phone number in e164 format.
    */
    'phoneNumber'?: string;
    /**
    * The phone number\'s ID
    */
    'id'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string",
            "format": "e164"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return PhoneNumbersJobPhoneNumber.attributeTypeMap;
    }

    public constructor() {
    }
}

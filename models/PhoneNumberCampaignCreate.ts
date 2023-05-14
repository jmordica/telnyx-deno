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

export class PhoneNumberCampaignCreate {
    /**
    * The phone number you want to link to a specified campaign.
    */
    'phoneNumber': string;
    /**
    * The ID of the campaign you want to link to the specified phone number.
    */
    'campaignId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "campaignId",
            "baseName": "campaignId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PhoneNumberCampaignCreate.attributeTypeMap;
    }

    public constructor() {
    }
}

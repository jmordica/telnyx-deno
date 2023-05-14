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

export class WhatsAppContactAddress {
    /**
    * City name
    */
    'city': string;
    /**
    * Full country name
    */
    'country': string;
    /**
    * Two-letter country abbreviation
    */
    'countryCode': string;
    /**
    * State abbreviation
    */
    'state': string;
    /**
    * Street number and name
    */
    'street': string;
    /**
    * Standard Values: HOME, WORK
    */
    'type': string;
    /**
    * ZIP code
    */
    'zip': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "street",
            "baseName": "street",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "zip",
            "baseName": "zip",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WhatsAppContactAddress.attributeTypeMap;
    }

    public constructor() {
    }
}

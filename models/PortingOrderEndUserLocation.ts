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

export class PortingOrderEndUserLocation {
    /**
    * First line of billing address
    */
    'streetAddress'?: string;
    /**
    * Second line of billing address
    */
    'extendedAddress'?: string;
    /**
    * City or municipality of billing address
    */
    'locality'?: string;
    /**
    * State, province, or similar of billing address
    */
    'administrativeArea'?: string;
    /**
    * Postal Code of billing address
    */
    'postalCode'?: string;
    /**
    * ISO3166-1 alpha-2 country code of billing address
    */
    'countryCode'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "streetAddress",
            "baseName": "street_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "extendedAddress",
            "baseName": "extended_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "locality",
            "baseName": "locality",
            "type": "string",
            "format": ""
        },
        {
            "name": "administrativeArea",
            "baseName": "administrative_area",
            "type": "string",
            "format": ""
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PortingOrderEndUserLocation.attributeTypeMap;
    }

    public constructor() {
    }
}


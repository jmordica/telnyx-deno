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
* The address of the customer service record
*/
export class CustomerServiceRecordResultAddress {
    /**
    * The state of the address
    */
    'administrativeArea'?: string;
    /**
    * The city of the address
    */
    'locality'?: string;
    /**
    * The zip code of the address
    */
    'postalCode'?: string;
    /**
    * The street address
    */
    'streetAddress'?: string;
    /**
    * The full address
    */
    'fullAddress'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "administrativeArea",
            "baseName": "administrative_area",
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
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "streetAddress",
            "baseName": "street_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "fullAddress",
            "baseName": "full_address",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomerServiceRecordResultAddress.attributeTypeMap;
    }

    public constructor() {
    }
}


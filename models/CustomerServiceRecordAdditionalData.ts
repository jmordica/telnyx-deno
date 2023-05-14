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

export class CustomerServiceRecordAdditionalData {
    /**
    * The name of the administrator of CSR.
    */
    'name'?: string;
    /**
    * The name of the authorized person.
    */
    'authorizedPersonName'?: string;
    /**
    * The PIN of the customer service record.
    */
    'pin'?: string;
    /**
    * The account number of the customer service record.
    */
    'accountNumber'?: string;
    /**
    * The customer code of the customer service record.
    */
    'customerCode'?: string;
    /**
    * The first line of the address of the customer service record.
    */
    'addressLine1'?: string;
    /**
    * The city of the customer service record.
    */
    'city'?: string;
    /**
    * The state of the customer service record.
    */
    'state'?: string;
    /**
    * The zip code of the customer service record.
    */
    'zipCode'?: string;
    /**
    * The billing phone number of the customer service record.
    */
    'billingPhoneNumber'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "authorizedPersonName",
            "baseName": "authorized_person_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "pin",
            "baseName": "pin",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountNumber",
            "baseName": "account_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerCode",
            "baseName": "customer_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressLine1",
            "baseName": "address_line_1",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
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
            "name": "zipCode",
            "baseName": "zip_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingPhoneNumber",
            "baseName": "billing_phone_number",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomerServiceRecordAdditionalData.attributeTypeMap;
    }

    public constructor() {
    }
}


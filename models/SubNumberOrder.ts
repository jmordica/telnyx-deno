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

import { SubNumberOrderRegulatoryRequirement } from '../models/SubNumberOrderRegulatoryRequirement.ts';
import { HttpFile } from '../http/http.ts';

export class SubNumberOrder {
    'id'?: string;
    'orderRequestId'?: string;
    'countryCode'?: string;
    'phoneNumberType'?: SubNumberOrderPhoneNumberTypeEnum;
    'userId'?: string;
    'regulatoryRequirements'?: Array<SubNumberOrderRegulatoryRequirement>;
    'recordType'?: string;
    /**
    * The count of phone numbers in the number order.
    */
    'phoneNumbersCount'?: number;
    /**
    * An ISO 8901 datetime string denoting when the number order was created.
    */
    'createdAt'?: string;
    /**
    * An ISO 8901 datetime string for when the number order was updated.
    */
    'updatedAt'?: string;
    /**
    * True if all requirements are met for every phone number, false otherwise.
    */
    'requirementsMet'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "orderRequestId",
            "baseName": "order_request_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumberType",
            "baseName": "phone_number_type",
            "type": "SubNumberOrderPhoneNumberTypeEnum",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "regulatoryRequirements",
            "baseName": "regulatory_requirements",
            "type": "Array<SubNumberOrderRegulatoryRequirement>",
            "format": ""
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumbersCount",
            "baseName": "phone_numbers_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": "datetime"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": "datetime"
        },
        {
            "name": "requirementsMet",
            "baseName": "requirements_met",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubNumberOrder.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SubNumberOrderPhoneNumberTypeEnum = "local" | "toll_free" | "mobile" | "national" | "shared_cost" | "landline" ;

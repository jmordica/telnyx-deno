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

export class NumberOrder {
    'id'?: string;
    'recordType'?: string;
    /**
    * The count of phone numbers in the number order.
    */
    'phoneNumbersCount'?: number;
    'subNumberOrderIds'?: Array<string>;
    /**
    * Identifies the connection associated with this phone number.
    */
    'connectionId'?: string;
    /**
    * Identifies the messaging profile associated with the phone number.
    */
    'messagingProfileId'?: string;
    /**
    * Identifies the messaging profile associated with the phone number.
    */
    'billingGroupId'?: string;
    /**
    * The status of the order.
    */
    'status'?: NumberOrderStatusEnum;
    /**
    * A customer reference string for customer look ups.
    */
    'customerReference'?: string;
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
            "name": "subNumberOrderIds",
            "baseName": "sub_number_order_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "connectionId",
            "baseName": "connection_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "messagingProfileId",
            "baseName": "messaging_profile_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingGroupId",
            "baseName": "billing_group_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "NumberOrderStatusEnum",
            "format": ""
        },
        {
            "name": "customerReference",
            "baseName": "customer_reference",
            "type": "string",
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
        return NumberOrder.attributeTypeMap;
    }

    public constructor() {
    }
}


export type NumberOrderStatusEnum = "pending" | "success" | "failure" ;


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

import { ReservedPhoneNumber } from '../models/ReservedPhoneNumber.ts';
import { HttpFile } from '../http/http.ts';

export class NumberReservation {
    'id'?: string;
    'recordType'?: string;
    'phoneNumbers'?: Array<ReservedPhoneNumber>;
    /**
    * The status of the entire reservation.
    */
    'status'?: NumberReservationStatusEnum;
    /**
    * A customer reference string for customer look ups.
    */
    'customerReference'?: string;
    /**
    * An ISO 8901 datetime string denoting when the numbers reservation was created.
    */
    'createdAt'?: string;
    /**
    * An ISO 8901 datetime string for when the number reservation was updated.
    */
    'updatedAt'?: string;

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
            "name": "phoneNumbers",
            "baseName": "phone_numbers",
            "type": "Array<ReservedPhoneNumber>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "NumberReservationStatusEnum",
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
        }    ];

    static getAttributeTypeMap() {
        return NumberReservation.attributeTypeMap;
    }

    public constructor() {
    }
}


export type NumberReservationStatusEnum = "pending" | "success" | "failure" ;


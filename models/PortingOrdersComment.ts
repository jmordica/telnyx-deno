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

export class PortingOrdersComment {
    'id'?: string;
    /**
    * Body of comment
    */
    'body'?: string;
    'portingOrderId'?: string;
    /**
    * Indicates whether this comment was created by a Telnyx Admin, user, or system
    */
    'userType'?: PortingOrdersCommentUserTypeEnum;
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: string;
    /**
    * ISO 8601 formatted date indicating when the resource was created.
    */
    'createdAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        {
            "name": "portingOrderId",
            "baseName": "porting_order_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "userType",
            "baseName": "user_type",
            "type": "PortingOrdersCommentUserTypeEnum",
            "format": ""
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return PortingOrdersComment.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PortingOrdersCommentUserTypeEnum = "admin" | "user" | "system" ;

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

export class MarkCommentRead200ResponseData {
    'id'?: string;
    'body'?: string;
    'commenter'?: string;
    'commenterType'?: MarkCommentRead200ResponseDataCommenterTypeEnum;
    'commentRecordType'?: MarkCommentRead200ResponseDataCommentRecordTypeEnum;
    'commentRecordId'?: string;
    /**
    * An ISO 8901 datetime string for when the comment was read.
    */
    'readAt'?: string;
    /**
    * An ISO 8901 datetime string denoting when the comment was created.
    */
    'createdAt'?: string;
    /**
    * An ISO 8901 datetime string for when the comment was updated.
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
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        {
            "name": "commenter",
            "baseName": "commenter",
            "type": "string",
            "format": ""
        },
        {
            "name": "commenterType",
            "baseName": "commenter_type",
            "type": "MarkCommentRead200ResponseDataCommenterTypeEnum",
            "format": ""
        },
        {
            "name": "commentRecordType",
            "baseName": "comment_record_type",
            "type": "MarkCommentRead200ResponseDataCommentRecordTypeEnum",
            "format": ""
        },
        {
            "name": "commentRecordId",
            "baseName": "comment_record_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "readAt",
            "baseName": "read_at",
            "type": "string",
            "format": "datetime"
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
        return MarkCommentRead200ResponseData.attributeTypeMap;
    }

    public constructor() {
    }
}


export type MarkCommentRead200ResponseDataCommenterTypeEnum = "admin" | "user" ;
export type MarkCommentRead200ResponseDataCommentRecordTypeEnum = "number_order" | "sub_number_order" | "number_order_phone_number" ;

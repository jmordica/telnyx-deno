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

import { DocReqsRequirementType } from '../models/DocReqsRequirementType.ts';
import { HttpFile } from '../http/http.ts';

export class DocReqsRequirement {
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: string;
    /**
    * The 2-character (ISO 3166-1 alpha-2) country code where this requirement applies
    */
    'countryCode'?: string;
    /**
    * The locality where this requirement applies
    */
    'locality'?: string;
    /**
    * Indicates the phone_number_type this requirement applies to. Leave blank if this requirement applies to all number_types.
    */
    'phoneNumberType'?: DocReqsRequirementPhoneNumberTypeEnum;
    /**
    * Indicates whether this requirement applies to ordering, porting, or both
    */
    'action'?: DocReqsRequirementActionEnum;
    /**
    * Lists the requirement types necessary to fulfill this requirement
    */
    'requirementsTypes'?: Array<DocReqsRequirementType>;
    /**
    * Identifies the associated document
    */
    'id'?: string;
    /**
    * ISO 8601 formatted date-time indicating when the resource was created.
    */
    'createdAt'?: string;
    /**
    * ISO 8601 formatted date-time indicating when the resource was last updated.
    */
    'updatedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
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
            "name": "locality",
            "baseName": "locality",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumberType",
            "baseName": "phone_number_type",
            "type": "DocReqsRequirementPhoneNumberTypeEnum",
            "format": ""
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "DocReqsRequirementActionEnum",
            "format": ""
        },
        {
            "name": "requirementsTypes",
            "baseName": "requirements_types",
            "type": "Array<DocReqsRequirementType>",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocReqsRequirement.attributeTypeMap;
    }

    public constructor() {
    }
}


export type DocReqsRequirementPhoneNumberTypeEnum = "local" | "national" | "toll_free" ;
export type DocReqsRequirementActionEnum = "both" | "ordering" | "porting" ;

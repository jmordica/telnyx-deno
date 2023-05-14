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

import { CreationStatus } from '../models/CreationStatus.ts';
import { HttpFile } from '../http/http.ts';

export class BrandStatus {
    /**
    * The display name of the brand submitted via bulk creation.
    */
    'displayName': string;
    'status': CreationStatus;
    /**
    * The ID of the brand created via bulk creation. This brand will only have a brandId after the brand has been created.
    */
    'brandId'?: string;
    /**
    * The date and time that the brand was created.
    */
    'createdAt'?: Date;
    /**
    * Errors related to a brand creation failure.
    */
    'error'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CreationStatus",
            "format": ""
        },
        {
            "name": "brandId",
            "baseName": "brandId",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BrandStatus.attributeTypeMap;
    }

    public constructor() {
    }
}




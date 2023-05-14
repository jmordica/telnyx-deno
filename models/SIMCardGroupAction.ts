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

import { SIMCardGroupActionSettings } from '../models/SIMCardGroupActionSettings.ts';
import { HttpFile } from '../http/http.ts';

/**
* This object represents a SIM card group action request. It allows tracking the current status of an operation that impacts the SIM card group and SIM card in it.
*/
export class SIMCardGroupAction {
    /**
    * Identifies the resource.
    */
    'id'?: string;
    'recordType'?: string;
    /**
    * The SIM card group identification.
    */
    'simCardGroupId'?: string;
    /**
    * Represents the type of the operation requested.
    */
    'type'?: SIMCardGroupActionTypeEnum;
    'status'?: SIMCardGroupActionStatusEnum;
    'settings'?: SIMCardGroupActionSettings;
    /**
    * ISO 8601 formatted date-time indicating when the resource was created.
    */
    'createdAt'?: string;
    /**
    * ISO 8601 formatted date-time indicating when the resource was updated.
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
            "name": "simCardGroupId",
            "baseName": "sim_card_group_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SIMCardGroupActionTypeEnum",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SIMCardGroupActionStatusEnum",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "SIMCardGroupActionSettings",
            "format": ""
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
        return SIMCardGroupAction.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SIMCardGroupActionTypeEnum = "set_private_wireless_gateway" | "remove_private_wireless_gateway" ;
export type SIMCardGroupActionStatusEnum = "in-progress" | "completed" | "failed" ;

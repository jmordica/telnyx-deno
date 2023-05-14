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
* This object represents a bulk SIM card action. It groups SIM card actions created through a bulk endpoint under a single resource for further lookup.
*/
export class BulkSIMCardAction {
    /**
    * Identifies the resource.
    */
    'id'?: string;
    'recordType'?: string;
    /**
    * The operation type. It can be one of the following: <br/> <ul> <li><code>bulk_set_public_ips</code> - set a public IP for each specified SIM card</li> </ul>
    */
    'actionType'?: BulkSIMCardActionActionTypeEnum;
    /**
    * A JSON object representation of the bulk action payload.
    */
    'settings'?: any;
    /**
    * ISO 8601 formatted date indicating when the resource was created.
    */
    'createdAt'?: string;
    /**
    * ISO 8601 formatted date indicating when the resource was updated.
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
            "name": "actionType",
            "baseName": "action_type",
            "type": "BulkSIMCardActionActionTypeEnum",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "any",
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
        return BulkSIMCardAction.attributeTypeMap;
    }

    public constructor() {
    }
}


export type BulkSIMCardActionActionTypeEnum = "bulk_set_public_ips" ;

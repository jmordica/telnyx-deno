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

import { SIMCardActionStatus } from '../models/SIMCardActionStatus.ts';
import { HttpFile } from '../http/http.ts';

/**
* This object represents a SIM card action. It allows tracking the current status of an operation that impacts the SIM card.
*/
export class SIMCardAction {
    /**
    * Identifies the resource.
    */
    'id'?: string;
    'recordType'?: string;
    /**
    * The related SIM card identifier.
    */
    'simCardId'?: string;
    /**
    * The operation type. It can be one of the following: <br/> <ul>  <li><code>enable</code> - move the SIM card to the <code>enabled</code> status</li>  <li><code>enable_standby_sim_card</code> - move a SIM card previously on the <code>standby</code> status to the <code>enabled</code> status after it consumes data.</li>  <li><code>disable</code> - move the SIM card to the <code>disabled</code> status</li>  <li><code>set_standby</code> - move the SIM card to the <code>standby</code> status</li>  </ul>
    */
    'actionType'?: SIMCardActionActionTypeEnum;
    'status'?: SIMCardActionStatus;
    /**
    * A JSON object representation of the action params.
    */
    'settings'?: any | null;
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
            "name": "simCardId",
            "baseName": "sim_card_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "actionType",
            "baseName": "action_type",
            "type": "SIMCardActionActionTypeEnum",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SIMCardActionStatus",
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
        return SIMCardAction.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SIMCardActionActionTypeEnum = "enable" | "enable_standby_sim_card" | "disable" | "set_standby" ;

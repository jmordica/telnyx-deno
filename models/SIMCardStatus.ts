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

export class SIMCardStatus {
    /**
    * The current status of the SIM card. It will be one of the following: <br/> <ul>  <li><code>registering</code> - the card is being registered</li>  <li><code>enabling</code> - the card is being enabled</li>  <li><code>enabled</code> - the card is enabled and ready for use</li>  <li><code>disabling</code> - the card is being disabled</li>  <li><code>disabled</code> - the card has been disabled and cannot be used</li>  <li><code>data_limit_exceeded</code> - the card has exceeded its data consumption limit</li>  <li><code>setting_standby</code> - the process to set the card in stand by is in progress</li>  <li><code>standby</code> - the card is in stand by</li> </ul> Transitioning between the enabled and disabled states may take a period of time. 
    */
    'value'?: SIMCardStatusValueEnum;
    /**
    * It describes why the SIM card is in the current status.
    */
    'reason'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "SIMCardStatusValueEnum",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SIMCardStatus.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SIMCardStatusValueEnum = "registering" | "enabling" | "enabled" | "disabling" | "disabled" | "data_limit_exceeded" | "setting_standby" | "standby" ;


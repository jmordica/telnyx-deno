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

import { ButtonParameter } from '../models/ButtonParameter.ts';
import { HttpFile } from '../http/http.ts';

export class Button {
    /**
    * Type of button being created.
    */
    'subType': any | null;
    /**
    * Position index of the button. You can have up to 3 buttons using index values of 0-2.
    */
    'index': number;
    /**
    * The parameters for the button, which are set at creation time in your Business Manager.
    */
    'parameters': Array<ButtonParameter>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "subType",
            "baseName": "sub_type",
            "type": "any",
            "format": ""
        },
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": ""
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<ButtonParameter>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Button.attributeTypeMap;
    }

    public constructor() {
    }
}

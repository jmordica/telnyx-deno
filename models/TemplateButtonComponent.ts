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

import { ButtonComponentType } from '../models/ButtonComponentType.ts';
import { ButtonSubtype } from '../models/ButtonSubtype.ts';
import { TemplateButtonParameter } from '../models/TemplateButtonParameter.ts';
import { HttpFile } from '../http/http.ts';

export class TemplateButtonComponent {
    'type': ButtonComponentType;
    'subType': ButtonSubtype;
    /**
    * Position index of the button. You can have up to 3 buttons using index values of 0-2.
    */
    'index': number;
    'parameters': Array<TemplateButtonParameter>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ButtonComponentType",
            "format": ""
        },
        {
            "name": "subType",
            "baseName": "sub_type",
            "type": "ButtonSubtype",
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
            "type": "Array<TemplateButtonParameter>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TemplateButtonComponent.attributeTypeMap;
    }

    public constructor() {
    }
}




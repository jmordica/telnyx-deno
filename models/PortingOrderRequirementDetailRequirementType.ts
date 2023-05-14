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
* Identifies the requirement type that meets this requirement
*/
export class PortingOrderRequirementDetailRequirementType {
    /**
    * The acceptance criteria for the requirement type
    */
    'acceptanceCriteria'?: any;
    /**
    * A description of the requirement type
    */
    'description'?: string;
    /**
    * An example of the requirement type
    */
    'example'?: string;
    /**
    * Identifies the requirement type
    */
    'id'?: string;
    /**
    * The name of the requirement type
    */
    'name'?: string;
    /**
    * The type of the requirement type
    */
    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acceptanceCriteria",
            "baseName": "acceptance_criteria",
            "type": "any",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "example",
            "baseName": "example",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PortingOrderRequirementDetailRequirementType.attributeTypeMap;
    }

    public constructor() {
    }
}


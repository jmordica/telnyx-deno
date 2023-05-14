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

export class DialogflowConnection {
    'recordType'?: string;
    /**
    * Uniquely identifies a Telnyx application (Call Control).
    */
    'connectionId'?: string;
    /**
    * The id of a configured conversation profile on your Dialogflow account. (If you use Dialogflow CX, this param is required)
    */
    'conversationProfileId'?: string;
    /**
    * Which Dialogflow environment will be used.
    */
    'environment'?: string;
    /**
    * The JSON map to connect your Dialoglow account.
    */
    'serviceAccount'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "connectionId",
            "baseName": "connection_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "conversationProfileId",
            "baseName": "conversation_profile_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceAccount",
            "baseName": "service_account",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DialogflowConnection.attributeTypeMap;
    }

    public constructor() {
    }
}


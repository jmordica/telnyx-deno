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
* The call forwarding settings for a phone number.
*/
export class CallForwarding {
    /**
    * Indicates if call forwarding will be enabled for this number if forwards_to and forwarding_type are filled in. Defaults to true for backwards compatibility with APIV1 use of numbers endpoints.
    */
    'callForwardingEnabled'?: boolean;
    /**
    * The phone number to which inbound calls to this number are forwarded. Inbound calls will not be forwarded if this field is left blank. If set, must be a +E.164-formatted phone number.
    */
    'forwardsTo'?: string;
    /**
    * Call forwarding type. \'forwards_to\' must be set for this to have an effect.
    */
    'forwardingType'?: CallForwardingForwardingTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "callForwardingEnabled",
            "baseName": "call_forwarding_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "forwardsTo",
            "baseName": "forwards_to",
            "type": "string",
            "format": ""
        },
        {
            "name": "forwardingType",
            "baseName": "forwarding_type",
            "type": "CallForwardingForwardingTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CallForwarding.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CallForwardingForwardingTypeEnum = "always" | "on_failure" ;

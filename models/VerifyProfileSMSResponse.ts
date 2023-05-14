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

export class VerifyProfileSMSResponse {
    /**
    * Enables SMS text messaging for the Verify profile.
    */
    'messagingEnabled'?: boolean;
    /**
    * Enables RCS messaging for the Verify profile.
    */
    'rcsEnabled'?: boolean;
    /**
    * Optionally sets a messaging text template when sending the verification code. Uses `{code}` to template in the actual verification code.
    */
    'messagingTemplate'?: string;
    /**
    * For every request that is initiated via this Verify profile, this sets the number of seconds before a verification request code expires. Once the verification request expires, the user cannot use the code to verify their identity.
    */
    'defaultVerificationTimeoutSecs'?: number;
    /**
    * Enables VSMS for the Verify profile.
    */
    'vsmsEnabled'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "messagingEnabled",
            "baseName": "messaging_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rcsEnabled",
            "baseName": "rcs_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "messagingTemplate",
            "baseName": "messaging_template",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultVerificationTimeoutSecs",
            "baseName": "default_verification_timeout_secs",
            "type": "number",
            "format": ""
        },
        {
            "name": "vsmsEnabled",
            "baseName": "vsms_enabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VerifyProfileSMSResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


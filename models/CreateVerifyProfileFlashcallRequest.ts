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

export class CreateVerifyProfileFlashcallRequest {
    /**
    * For every request that is initiated via this Verify profile, this sets the number of seconds before a verification request code expires. Once the verification request expires, the user cannot use the code to verify their identity.
    */
    'defaultVerificationTimeoutSecs'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "defaultVerificationTimeoutSecs",
            "baseName": "default_verification_timeout_secs",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateVerifyProfileFlashcallRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


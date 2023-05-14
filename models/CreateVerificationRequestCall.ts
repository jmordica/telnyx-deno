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
* The request body when creating a verification.
*/
export class CreateVerificationRequestCall {
    /**
    * +E164 formatted phone number.
    */
    'phoneNumber': string;
    /**
    * The identifier of the associated Verify profile.
    */
    'verifyProfileId': string;
    /**
    * The number of seconds the verification code is valid for.
    */
    'timeoutSecs'?: number;
    /**
    * Must be less than the profile\'s default_verification_timeout_secs or timeout_secs, whichever is lesser.
    */
    'callTimeoutSecs'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "verifyProfileId",
            "baseName": "verify_profile_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "timeoutSecs",
            "baseName": "timeout_secs",
            "type": "number",
            "format": ""
        },
        {
            "name": "callTimeoutSecs",
            "baseName": "call_timeout_secs",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateVerificationRequestCall.attributeTypeMap;
    }

    public constructor() {
    }
}

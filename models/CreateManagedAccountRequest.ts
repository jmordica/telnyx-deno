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

export class CreateManagedAccountRequest {
    /**
    * The email address for the managed account. If not provided, the email address will be generated based on the email address of the manager account.
    */
    'email'?: string;
    /**
    * Password for the managed account. If a password is not supplied, the account will not be able to be signed into directly. (A password reset may still be performed later to enable sign-in via password.)
    */
    'password'?: string;
    /**
    * The name of the business for which the new managed account is being created, that will be used as the managed accounts\'s organization\'s name.
    */
    'businessName': string;
    /**
    * Boolean value that indicates if the managed account is able to have custom pricing set for it or not. If false, uses the pricing of the manager account. Defaults to false. This value may be changed after creation, but there may be time lag between when the value is changed and pricing changes take effect.
    */
    'managedAccountAllowCustomPricing'?: boolean;
    /**
    * Boolean value that indicates if the billing information and charges to the managed account \"roll up\" to the manager account. If true, the managed account will not have its own balance and will use the shared balance with the manager account. This value cannot be changed after account creation without going through Telnyx support as changes require manual updates to the account ledger. Defaults to false.
    */
    'rollupBilling'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "businessName",
            "baseName": "business_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "managedAccountAllowCustomPricing",
            "baseName": "managed_account_allow_custom_pricing",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rollupBilling",
            "baseName": "rollup_billing",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateManagedAccountRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

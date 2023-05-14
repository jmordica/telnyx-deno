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

import { PortingOrderType } from '../models/PortingOrderType.ts';
import { HttpFile } from '../http/http.ts';

export class PortingOrderMisc {
    'type'?: PortingOrderType;
    /**
    * Remaining numbers can be either kept with their current service provider or disconnected. \'new_billing_telephone_number\' is required when \'remaining_numbers_action\' is \'keep\'.
    */
    'remainingNumbersAction'?: PortingOrderMiscRemainingNumbersActionEnum;
    /**
    * New billing phone number for the remaining numbers. Used in case the current billing phone number is being ported to Telnyx. This will be set on your account with your current service provider and should be one of the numbers remaining on that account.
    */
    'newBillingPhoneNumber'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PortingOrderType",
            "format": ""
        },
        {
            "name": "remainingNumbersAction",
            "baseName": "remaining_numbers_action",
            "type": "PortingOrderMiscRemainingNumbersActionEnum",
            "format": ""
        },
        {
            "name": "newBillingPhoneNumber",
            "baseName": "new_billing_phone_number",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PortingOrderMisc.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PortingOrderMiscRemainingNumbersActionEnum = "keep" | "disconnect" ;

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

import { PortingOrdersExceptionType } from '../models/PortingOrdersExceptionType.ts';
import { HttpFile } from '../http/http.ts';

/**
* Porting order status
*/
export class PortingOrderStatus {
    /**
    * A list of 0 or more details about this porting order\'s status
    */
    'details'?: Array<PortingOrdersExceptionType>;
    /**
    * The current status of the porting order
    */
    'value'?: PortingOrderStatusValueEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "details",
            "baseName": "details",
            "type": "Array<PortingOrdersExceptionType>",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "PortingOrderStatusValueEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PortingOrderStatus.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PortingOrderStatusValueEnum = "draft" | "in-process" | "submitted" | "exception" | "foc-date-confirmed" | "ported" | "canceled" | "cancel-pending" ;

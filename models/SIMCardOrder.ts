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

import { SIMCardOrderCost } from '../models/SIMCardOrderCost.ts';
import { SIMCardOrderOrderAddress } from '../models/SIMCardOrderOrderAddress.ts';
import { HttpFile } from '../http/http.ts';

export class SIMCardOrder {
    /**
    * Identifies the resource.
    */
    'id'?: string;
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: string;
    /**
    * The amount of SIM cards requested in the SIM card order.
    */
    'quantity'?: number;
    'cost'?: SIMCardOrderCost;
    'orderAddress'?: SIMCardOrderOrderAddress;
    /**
    * The URL used to get tracking information about the order.
    */
    'trackingUrl'?: string;
    /**
    * The current status of the SIM Card order.<ul> <li><code>pending</code> - the order is waiting to be processed.</li> <li><code>processing</code> - the order is currently being processed.</li> <li><code>ready_to_ship</code> - the order is ready to be shipped to the specified <b>address</b>.</li> <li><code>shipped</code> - the order was shipped and is on its way to be delivered to the specified <b>address</b>.</li> <li><code>delivered</code> - the order was delivered to the specified <b>address</b>.</li> <li><code>canceled</code> - the order was canceled.</li> </ul>
    */
    'status'?: SIMCardOrderStatusEnum;
    /**
    * ISO 8601 formatted date-time indicating when the resource was last created.
    */
    'createdAt'?: string;
    /**
    * ISO 8601 formatted date-time indicating when the resource was last updated.
    */
    'updatedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": ""
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "SIMCardOrderCost",
            "format": ""
        },
        {
            "name": "orderAddress",
            "baseName": "order_address",
            "type": "SIMCardOrderOrderAddress",
            "format": ""
        },
        {
            "name": "trackingUrl",
            "baseName": "tracking_url",
            "type": "string",
            "format": "url"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SIMCardOrderStatusEnum",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SIMCardOrder.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SIMCardOrderStatusEnum = "pending" | "processing" | "ready_to_ship" | "shipped" | "delivered" | "canceled" ;

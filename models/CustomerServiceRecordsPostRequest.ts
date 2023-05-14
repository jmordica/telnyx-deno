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

import { CallbackWebhookMeta } from '../models/CallbackWebhookMeta.ts';
import { CustomerServiceRecordStatusChangedEvent } from '../models/CustomerServiceRecordStatusChangedEvent.ts';
import { HttpFile } from '../http/http.ts';

export class CustomerServiceRecordsPostRequest {
    'data'?: CustomerServiceRecordStatusChangedEvent;
    'meta'?: CallbackWebhookMeta;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "CustomerServiceRecordStatusChangedEvent",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "CallbackWebhookMeta",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomerServiceRecordsPostRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

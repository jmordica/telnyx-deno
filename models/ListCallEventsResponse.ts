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

import { CallEvent } from '../models/CallEvent.ts';
import { PaginationMeta } from '../models/PaginationMeta.ts';
import { HttpFile } from '../http/http.ts';

export class ListCallEventsResponse {
    'data'?: Array<CallEvent>;
    'meta'?: PaginationMeta;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<CallEvent>",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "PaginationMeta",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListCallEventsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


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

import { SimCardDataUsageNotificationsPostRequestThreshold } from '../models/SimCardDataUsageNotificationsPostRequestThreshold.ts';
import { HttpFile } from '../http/http.ts';

export class SimCardDataUsageNotificationsPostRequest {
    /**
    * The identification UUID of the related SIM card resource.
    */
    'simCardId': string;
    'threshold': SimCardDataUsageNotificationsPostRequestThreshold;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "simCardId",
            "baseName": "sim_card_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "threshold",
            "baseName": "threshold",
            "type": "SimCardDataUsageNotificationsPostRequestThreshold",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SimCardDataUsageNotificationsPostRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


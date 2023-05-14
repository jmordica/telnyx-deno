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

import { CallPlaybackEnded } from '../models/CallPlaybackEnded.ts';
import { HttpFile } from '../http/http.ts';

export class CallPlaybackEndedEvent {
    'data'?: CallPlaybackEnded;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "CallPlaybackEnded",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CallPlaybackEndedEvent.attributeTypeMap;
    }

    public constructor() {
    }
}

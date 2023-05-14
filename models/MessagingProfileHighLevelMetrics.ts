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

import { MessagingProfileHighLevelMetricsInbound } from '../models/MessagingProfileHighLevelMetricsInbound.ts';
import { MessagingProfileHighLevelMetricsOutbound } from '../models/MessagingProfileHighLevelMetricsOutbound.ts';
import { HttpFile } from '../http/http.ts';

export class MessagingProfileHighLevelMetrics {
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: MessagingProfileHighLevelMetricsRecordTypeEnum;
    /**
    * Identifies the type of resource.
    */
    'messagingProfileId'?: string;
    /**
    * The number of phone numbers associated with the messaging profile.
    */
    'phoneNumbers'?: number;
    'outbound'?: MessagingProfileHighLevelMetricsOutbound;
    'inbound'?: MessagingProfileHighLevelMetricsInbound;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "MessagingProfileHighLevelMetricsRecordTypeEnum",
            "format": ""
        },
        {
            "name": "messagingProfileId",
            "baseName": "messaging_profile_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "phoneNumbers",
            "baseName": "phone_numbers",
            "type": "number",
            "format": ""
        },
        {
            "name": "outbound",
            "baseName": "outbound",
            "type": "MessagingProfileHighLevelMetricsOutbound",
            "format": ""
        },
        {
            "name": "inbound",
            "baseName": "inbound",
            "type": "MessagingProfileHighLevelMetricsInbound",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MessagingProfileHighLevelMetrics.attributeTypeMap;
    }

    public constructor() {
    }
}


export type MessagingProfileHighLevelMetricsRecordTypeEnum = "messaging_profile_metrics" ;

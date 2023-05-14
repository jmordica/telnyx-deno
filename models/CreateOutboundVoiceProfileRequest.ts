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

import { OutboundCallRecording } from '../models/OutboundCallRecording.ts';
import { ServicePlan } from '../models/ServicePlan.ts';
import { TrafficType } from '../models/TrafficType.ts';
import { UsagePaymentMethod } from '../models/UsagePaymentMethod.ts';
import { HttpFile } from '../http/http.ts';

export class CreateOutboundVoiceProfileRequest {
    /**
    * A user-supplied name to help with organization.
    */
    'name': string;
    'trafficType'?: TrafficType;
    'servicePlan'?: ServicePlan;
    /**
    * Must be no more than your global concurrent call limit. Null means no limit.
    */
    'concurrentCallLimit'?: number | null;
    /**
    * Specifies whether the outbound voice profile can be used. Disabled profiles will result in outbound calls being blocked for the associated Connections.
    */
    'enabled'?: boolean;
    'tags'?: Array<string>;
    'usagePaymentMethod'?: UsagePaymentMethod;
    /**
    * The list of destinations you want to be able to call using this outbound voice profile formatted in alpha2.
    */
    'whitelistedDestinations'?: Array<string>;
    /**
    * Maximum rate (price per minute) for a Destination to be allowed when making outbound calls.
    */
    'maxDestinationRate'?: number;
    /**
    * The maximum amount of usage charges, in USD, you want Telnyx to allow on this outbound voice profile in a day before disallowing new calls.
    */
    'dailySpendLimit'?: string;
    /**
    * Specifies whether to enforce the daily_spend_limit on this outbound voice profile.
    */
    'dailySpendLimitEnabled'?: boolean;
    'callRecording'?: OutboundCallRecording;
    /**
    * The ID of the billing group associated with the outbound proflile. Defaults to null (for no group assigned).
    */
    'billingGroupId'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "trafficType",
            "baseName": "traffic_type",
            "type": "TrafficType",
            "format": ""
        },
        {
            "name": "servicePlan",
            "baseName": "service_plan",
            "type": "ServicePlan",
            "format": ""
        },
        {
            "name": "concurrentCallLimit",
            "baseName": "concurrent_call_limit",
            "type": "number",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "usagePaymentMethod",
            "baseName": "usage_payment_method",
            "type": "UsagePaymentMethod",
            "format": ""
        },
        {
            "name": "whitelistedDestinations",
            "baseName": "whitelisted_destinations",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "maxDestinationRate",
            "baseName": "max_destination_rate",
            "type": "number",
            "format": ""
        },
        {
            "name": "dailySpendLimit",
            "baseName": "daily_spend_limit",
            "type": "string",
            "format": ""
        },
        {
            "name": "dailySpendLimitEnabled",
            "baseName": "daily_spend_limit_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "callRecording",
            "baseName": "call_recording",
            "type": "OutboundCallRecording",
            "format": ""
        },
        {
            "name": "billingGroupId",
            "baseName": "billing_group_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return CreateOutboundVoiceProfileRequest.attributeTypeMap;
    }

    public constructor() {
    }
}




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

export class ConferenceParticipantDetailRecord {
    /**
    * Participant id
    */
    'id'?: string;
    /**
    * User id
    */
    'userId'?: string;
    /**
    * Conference id
    */
    'conferenceId'?: string;
    /**
    * Participant join time
    */
    'joinedAt'?: Date;
    /**
    * Participant leave time
    */
    'leftAt'?: Date;
    /**
    * Number called by the participant to join the conference
    */
    'destinationNumber'?: string;
    /**
    * Participant origin number used in the conference call
    */
    'originatingNumber'?: string;
    /**
    * Telnyx UUID that identifies the conference call leg
    */
    'callLegId'?: string;
    /**
    * Telnyx UUID that identifies with conference call session
    */
    'callSessionId'?: string;
    /**
    * Duration of the conference call in seconds
    */
    'callSec'?: number;
    /**
    * Duration of the conference call for billing purposes
    */
    'billedSec'?: number;
    /**
    * Indicates whether Telnyx billing charges might be applicable
    */
    'isTelnyxBillable'?: boolean;
    /**
    * Currency amount per billing unit used to calculate the Telnyx billing cost
    */
    'rate'?: string;
    /**
    * Billing unit used to calculate the Telnyx billing cost
    */
    'rateMeasuredIn'?: string;
    /**
    * Currency amount for Telnyx billing cost
    */
    'cost'?: string;
    /**
    * Telnyx account currency used to describe monetary values, including billing cost
    */
    'currency'?: string;
    'recordType': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "conferenceId",
            "baseName": "conference_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "joinedAt",
            "baseName": "joined_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "leftAt",
            "baseName": "left_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "destinationNumber",
            "baseName": "destination_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "originatingNumber",
            "baseName": "originating_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "callLegId",
            "baseName": "call_leg_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "callSessionId",
            "baseName": "call_session_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "callSec",
            "baseName": "call_sec",
            "type": "number",
            "format": ""
        },
        {
            "name": "billedSec",
            "baseName": "billed_sec",
            "type": "number",
            "format": ""
        },
        {
            "name": "isTelnyxBillable",
            "baseName": "is_telnyx_billable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "string",
            "format": ""
        },
        {
            "name": "rateMeasuredIn",
            "baseName": "rate_measured_in",
            "type": "string",
            "format": ""
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "string",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConferenceParticipantDetailRecord.attributeTypeMap;
    }

    public constructor() {
    }
}


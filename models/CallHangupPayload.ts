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

export class CallHangupPayload {
    /**
    * Call ID used to issue commands via Call Control API.
    */
    'callControlId'?: string;
    /**
    * Call Control App ID (formerly Telnyx connection ID) used in the call.
    */
    'connectionId'?: string;
    /**
    * ID that is unique to the call and can be used to correlate webhook events.
    */
    'callLegId'?: string;
    /**
    * ID that is unique to the call session and can be used to correlate webhook events. Call session is a group of related call legs that logically belong to the same phone call, e.g. an inbound and outbound leg of a transferred call.
    */
    'callSessionId'?: string;
    /**
    * State received from a command.
    */
    'clientState'?: string;
    /**
    * Number or SIP URI placing the call.
    */
    '_from'?: string;
    /**
    * Destination number or SIP URI of the call.
    */
    'to'?: string;
    /**
    * ISO 8601 datetime of when the call started.
    */
    'startTime'?: Date;
    /**
    * State received from a command.
    */
    'state'?: CallHangupPayloadStateEnum;
    /**
    * The reason the call was ended (`call_rejected`, `normal_clearing`, `originator_cancel`, `timeout`, `time_limit`, `user_busy`, `not_found` or `unspecified`).
    */
    'hangupCause'?: CallHangupPayloadHangupCauseEnum;
    /**
    * The party who ended the call (`callee`, `caller`, `unknown`).
    */
    'hangupSource'?: CallHangupPayloadHangupSourceEnum;
    /**
    * The reason the call was ended (SIP response code). If the SIP response is unavailable (in inbound calls for example) this is set to `unspecified`.
    */
    'sipHangupCause'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "callControlId",
            "baseName": "call_control_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "connectionId",
            "baseName": "connection_id",
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
            "name": "clientState",
            "baseName": "client_state",
            "type": "string",
            "format": ""
        },
        {
            "name": "_from",
            "baseName": "from",
            "type": "string",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string",
            "format": ""
        },
        {
            "name": "startTime",
            "baseName": "start_time",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CallHangupPayloadStateEnum",
            "format": ""
        },
        {
            "name": "hangupCause",
            "baseName": "hangup_cause",
            "type": "CallHangupPayloadHangupCauseEnum",
            "format": ""
        },
        {
            "name": "hangupSource",
            "baseName": "hangup_source",
            "type": "CallHangupPayloadHangupSourceEnum",
            "format": ""
        },
        {
            "name": "sipHangupCause",
            "baseName": "sip_hangup_cause",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CallHangupPayload.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CallHangupPayloadStateEnum = "hangup" ;
export type CallHangupPayloadHangupCauseEnum = "call_rejected" | "normal_clearing" | "originator_cancel" | "timeout" | "time_limit" | "user_busy" | "not_found" | "unspecified" ;
export type CallHangupPayloadHangupSourceEnum = "caller" | "callee" | "unknown" ;

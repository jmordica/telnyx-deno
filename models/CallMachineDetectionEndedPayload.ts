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

export class CallMachineDetectionEndedPayload {
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
    * Answering machine detection result.
    */
    'result'?: CallMachineDetectionEndedPayloadResultEnum;

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
            "name": "result",
            "baseName": "result",
            "type": "CallMachineDetectionEndedPayloadResultEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CallMachineDetectionEndedPayload.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CallMachineDetectionEndedPayloadResultEnum = "human" | "machine" | "not_sure" ;


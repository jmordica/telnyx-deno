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

import { CallStreamingFailedPayloadStreamParams } from '../models/CallStreamingFailedPayloadStreamParams.ts';
import { HttpFile } from '../http/http.ts';

export class CallStreamingFailedPayload {
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
    * A short description explaning why the media streaming failed.
    */
    'failureReason'?: string;
    /**
    * Identifies the streaming.
    */
    'streamId'?: string;
    'streamParams'?: CallStreamingFailedPayloadStreamParams;
    /**
    * The type of stream connection the stream is performing.
    */
    'streamType'?: CallStreamingFailedPayloadStreamTypeEnum;

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
            "name": "failureReason",
            "baseName": "failure_reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "streamId",
            "baseName": "stream_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "streamParams",
            "baseName": "stream_params",
            "type": "CallStreamingFailedPayloadStreamParams",
            "format": ""
        },
        {
            "name": "streamType",
            "baseName": "stream_type",
            "type": "CallStreamingFailedPayloadStreamTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CallStreamingFailedPayload.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CallStreamingFailedPayloadStreamTypeEnum = "websocket" | "dialogflow" ;

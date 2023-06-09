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

export class BridgeRequest {
    /**
    * The Call Control ID of the call you want to bridge with, can\'t be used together with queue parameter or video_room_id parameter.
    */
    'callControlId': string;
    /**
    * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
    */
    'clientState'?: string;
    /**
    * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
    */
    'commandId'?: string;
    /**
    * The name of the queue you want to bridge with, can\'t be used together with call_control_id parameter or video_room_id parameter. Bridging with a queue means bridging with the first call in the queue. The call will always be removed from the queue regardless of whether bridging succeeds. Returns an error when the queue is empty.
    */
    'queue'?: string;
    /**
    * The ID of the video room you want to bridge with, can\'t be used together with call_control_id parameter or queue parameter.
    */
    'videoRoomId'?: string;
    /**
    * The additional parameter that will be passed to the video conference. It is a text field and the user can decide how to use it. For example, you can set the participant name or pass JSON text. It can be used only with video_room_id parameter.
    */
    'videoRoomContext'?: string;
    /**
    * Specifies behavior after the bridge ends (i.e. the opposite leg either hangs up or is transferred). If supplied with the value `self`, the current leg will be parked after unbridge. If not set, the default behavior is to hang up the leg.
    */
    'parkAfterUnbridge'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "callControlId",
            "baseName": "call_control_id",
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
            "name": "commandId",
            "baseName": "command_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "queue",
            "baseName": "queue",
            "type": "string",
            "format": ""
        },
        {
            "name": "videoRoomId",
            "baseName": "video_room_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "videoRoomContext",
            "baseName": "video_room_context",
            "type": "string",
            "format": ""
        },
        {
            "name": "parkAfterUnbridge",
            "baseName": "park_after_unbridge",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BridgeRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


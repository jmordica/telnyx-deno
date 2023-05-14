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

export class StartForkingRequest {
    /**
    * The network target, <udp:ip_address:port>, where the call\'s RTP media packets should be forwarded. Both incoming and outgoing media packets will be delivered to the specified target, and information about the stream will be included in the encapsulation protocol header, including the direction (0 = inbound; 1 = outbound), leg (0 = A-leg; 1 = B-leg), and call_leg_id.
    */
    'target'?: string;
    /**
    * The network target, <udp:ip_address:port>, where the call\'s incoming RTP media packets should be forwarded.
    */
    'rx'?: string;
    /**
    * Optionally specify a media type to stream. If `decrypted` selected, Telnyx will decrypt incoming SIP media before forking to the target. `rx` and `tx` are required fields if `decrypted` selected.
    */
    'streamType'?: StartForkingRequestStreamTypeEnum;
    /**
    * The network target, <udp:ip_address:port>, where the call\'s outgoing RTP media packets should be forwarded.
    */
    'tx'?: string;
    /**
    * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
    */
    'clientState'?: string;
    /**
    * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
    */
    'commandId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "target",
            "baseName": "target",
            "type": "string",
            "format": ""
        },
        {
            "name": "rx",
            "baseName": "rx",
            "type": "string",
            "format": ""
        },
        {
            "name": "streamType",
            "baseName": "stream_type",
            "type": "StartForkingRequestStreamTypeEnum",
            "format": ""
        },
        {
            "name": "tx",
            "baseName": "tx",
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
        }    ];

    static getAttributeTypeMap() {
        return StartForkingRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type StartForkingRequestStreamTypeEnum = "raw" | "decrypted" ;

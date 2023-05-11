/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StartForkingRequest = {
    /**
     * The network target, <udp:ip_address:port>, where the call's RTP media packets should be forwarded. Both incoming and outgoing media packets will be delivered to the specified target, and information about the stream will be included in the encapsulation protocol header, including the direction (0 = inbound; 1 = outbound), leg (0 = A-leg; 1 = B-leg), and call_leg_id.
     */
    target?: string;
    /**
     * The network target, <udp:ip_address:port>, where the call's incoming RTP media packets should be forwarded.
     */
    rx?: string;
    /**
     * Optionally specify a media type to stream. If `decrypted` selected, Telnyx will decrypt incoming SIP media before forking to the target. `rx` and `tx` are required fields if `decrypted` selected.
     */
    stream_type?: StartForkingRequest.stream_type;
    /**
     * The network target, <udp:ip_address:port>, where the call's outgoing RTP media packets should be forwarded.
     */
    tx?: string;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
};

export namespace StartForkingRequest {

    /**
     * Optionally specify a media type to stream. If `decrypted` selected, Telnyx will decrypt incoming SIP media before forking to the target. `rx` and `tx` are required fields if `decrypted` selected.
     */
    export enum stream_type {
        RAW = 'raw',
        DECRYPTED = 'decrypted',
    }


}


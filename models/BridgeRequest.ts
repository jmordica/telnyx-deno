/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BridgeRequest = {
    /**
     * The Call Control ID of the call you want to bridge with, can't be used together with queue parameter or video_room_id parameter.
     */
    call_control_id: string;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
    /**
     * The name of the queue you want to bridge with, can't be used together with call_control_id parameter or video_room_id parameter. Bridging with a queue means bridging with the first call in the queue. The call will always be removed from the queue regardless of whether bridging succeeds. Returns an error when the queue is empty.
     */
    queue?: string;
    /**
     * The ID of the video room you want to bridge with, can't be used together with call_control_id parameter or queue parameter.
     */
    video_room_id?: string;
    /**
     * The additional parameter that will be passed to the video conference. It is a text field and the user can decide how to use it. For example, you can set the participant name or pass JSON text. It can be used only with video_room_id parameter.
     */
    video_room_context?: string;
    /**
     * Specifies behavior after the bridge ends (i.e. the opposite leg either hangs up or is transferred). If supplied with the value `self`, the current leg will be parked after unbridge. If not set, the default behavior is to hang up the leg.
     */
    park_after_unbridge?: string;
};


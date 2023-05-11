/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnswerRequest } from '../models/AnswerRequest.ts';
import type { BridgeRequest } from '../models/BridgeRequest.ts';
import type { Call } from '../models/Call.ts';
import type { CallControlCommandResult } from '../models/CallControlCommandResult.ts';
import type { CallRequest } from '../models/CallRequest.ts';
import type { ClientStateUpdateRequest } from '../models/ClientStateUpdateRequest.ts';
import type { EnqueueRequest } from '../models/EnqueueRequest.ts';
import type { Errors } from '../models/Errors.ts';
import type { GatherRequest } from '../models/GatherRequest.ts';
import type { GatherUsingAudioRequest } from '../models/GatherUsingAudioRequest.ts';
import type { GatherUsingSpeakRequest } from '../models/GatherUsingSpeakRequest.ts';
import type { HangupRequest } from '../models/HangupRequest.ts';
import type { LeaveQueueRequest } from '../models/LeaveQueueRequest.ts';
import type { PauseRecordingRequest } from '../models/PauseRecordingRequest.ts';
import type { PlayAudioUrlRequest } from '../models/PlayAudioUrlRequest.ts';
import type { PlaybackStopRequest } from '../models/PlaybackStopRequest.ts';
import type { ReferRequest } from '../models/ReferRequest.ts';
import type { RejectRequest } from '../models/RejectRequest.ts';
import type { ResumeRecordingRequest } from '../models/ResumeRecordingRequest.ts';
import type { SendDTMFRequest } from '../models/SendDTMFRequest.ts';
import type { SpeakRequest } from '../models/SpeakRequest.ts';
import type { StartForkingRequest } from '../models/StartForkingRequest.ts';
import type { StartRecordingRequest } from '../models/StartRecordingRequest.ts';
import type { StartStreamingRequest } from '../models/StartStreamingRequest.ts';
import type { StopForkingRequest } from '../models/StopForkingRequest.ts';
import type { StopGatherRequest } from '../models/StopGatherRequest.ts';
import type { StopRecordingRequest } from '../models/StopRecordingRequest.ts';
import type { StopStreamingRequest } from '../models/StopStreamingRequest.ts';
import type { TranscriptionStartRequest } from '../models/TranscriptionStartRequest.ts';
import type { TranscriptionStopRequest } from '../models/TranscriptionStopRequest.ts';
import type { TransferCallRequest } from '../models/TransferCallRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class CallCommandsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Dial
     * Dial a number or SIP URI from a given connection. A successful response will include a `call_leg_id` which can be used to correlate the command with subsequent webhooks.
     *
     * **Expected Webhooks:**
     *
     * - `call.initiated`
     * - `call.answered` or `call.hangup`
     * - `call.machine.detection.ended` if `answering_machine_detection` was requested
     * - `call.machine.greeting.ended` if `answering_machine_detection` was requested to detect the end of machine greeting
     * - `call.machine.premium.detection.ended` if `answering_machine_detection=premium` was requested
     * - `call.machine.premium.greeting.ended` if `answering_machine_detection=premium` was requested and a beep was detected
     * - `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url` was set
     *
     * @param requestBody Call request
     * @returns any Successful response with details about a call status.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callDial(
        requestBody: CallRequest,
    ): CancelablePromise<{
        data?: Call;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Answer call
     * Answer an incoming call. You must issue this command before executing subsequent commands on an incoming call.
     *
     * **Expected Webhooks:**
     *
     * - `call.answered`
     * - `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url` was set
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Answer call request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callAnswer(
        callControlId: string,
        requestBody: AnswerRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/answer',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Bridge calls
     * Bridge two call control calls.
     *
     * **Expected Webhooks:**
     *
     * - `call.bridged` for Leg A
     * - `call.bridged` for Leg B
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Bridge call request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callBridge(
        callControlId: string,
        requestBody: BridgeRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/bridge',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update client state
     * Updates client state
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Updates client state for every subsequent webhook
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public clientStateUpdate(
        callControlId: string,
        requestBody: ClientStateUpdateRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/calls/{call_control_id}/actions/client_state_update',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Enqueue call
     * Put the call in a queue.
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Enqueue call request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callEnqueue(
        callControlId: string,
        requestBody: EnqueueRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/enqueue',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Forking start
     * Call forking allows you to stream the media from a call to a specific target in realtime.
     * This stream can be used to enable realtime audio analysis to support a
     * variety of use cases, including fraud detection, or the creation of AI-generated audio responses.
     * Requests must specify either the `target` attribute or the `rx` and `tx` attributes.
     *
     * **Expected Webhooks:**
     *
     * - `call.fork.started`
     * - `call.fork.stopped`
     *
     * **Simple Telnyx RTP Encapsulation Protocol (STREP)**
     *
     * *Note: This header/encapsulation is not used when the `rx` and `tx`
     * parameters have been specified; it only applies when media is forked
     * using the `target` attribute.*
     *
     * If the destination for forked media is specified using the "target"
     * attribute, the RTP will be encapsulated in an extra Telnyx protocol,
     * which adds a 24 byte header to the RTP payload in each packet. The STREP
     * header includes the Call Control `call_leg_id` for stream
     * identification, along with bits that represent the direction (inbound or
     * outbound) of the media. This 24-byte header sits between the UDP header
     * and the RTP header.
     *
     * The STREP header makes it possible to fork RTP for multiple calls (or
     * two RTP streams for the same call) to the same IP:port, where the
     * streams can be demultiplexed by your application using the information
     * in the header. Of course, it's still possible to ignore this header
     * completely, for example, if sending forked media for different calls to
     * different ports or IP addresses. In this case, simply strip 24 bytes
     * (or use the second byte to find the header length) from the received UDP
     * payload to get the RTP (RTP header and payload).
     *
     * ```
     * STREP Specification
     *
     * 0                   1                   2                   3
     * 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
     * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
     * |1 1|Version|L|D|    HeaderLen  |  reserved (2 bytes)           |
     * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
     * |       reserved (4 bytes, for UDP ports or anything else)      |
     * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
     * |               The call_leg_id                                 |
     * |                   from Call Control                           |
     * |                       (128 bits / 16 bytes)                   |
     * |                           (this is binary data)               |
     * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
     *
     * 11
     * Static bits 11, always set to 11 to easily distinguish forked media
     * from RTP (10) and T.38 media (usually 00) and SIP (which begins
     * with a capital letter, so begins with bits 01). This is a magic number.
     *
     * Version
     * Four bits to indicate the version number of the protocol, starting at 0001.
     *
     * L
     * One bit to represent the leg of the call (A or B).
     * 0 represents the A (first) leg of the call.
     * 1 represents the B (second) leg of the call.
     *
     * D
     * One bit to represent the direction of this RTP stream.
     * 0 represents media received by Telnyx.
     * 1 represents media transmitted by Telnyx.
     *
     * HeaderLen (1 byte)
     * The length of the header in bytes.
     * Note that this value does not include the length of the payload. The total
     * size of the RTP can be calculated by subtracting the HeaderLen from the UDP
     * length (minus 8 for the UDP header).
     * In version 1, this value will always be 24.
     *
     * Reserved (6 bytes)
     * Reserved for future use and to make sure that the header is a multiple of 32 bits
     *
     * Call Leg ID
     * A 128-bit identifier for the call leg.
     * This is the call_leg_id from Call Control.
     * ```
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Fork media request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callForkStart(
        callControlId: string,
        requestBody: StartForkingRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/fork_start',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Forking stop
     * Stop forking a call.
     *
     * **Expected Webhooks:**
     *
     * - `call.fork.stopped`
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Stop forking media request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callForkStop(
        callControlId: string,
        requestBody: StopForkingRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/fork_stop',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Gather
     * Gather DTMF signals to build interactive menus.
     *
     * You can pass a list of valid digits. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather` command.
     *
     * **Expected Webhooks:**
     *
     * - `call.dtmf.received` (you may receive many of these webhooks)
     * - `call.gather.ended`
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Gather
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callGather(
        callControlId: string,
        requestBody: GatherRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/gather',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Gather stop
     * Stop current gather.
     *
     * **Expected Webhooks:**
     *
     * - `call.gather.ended`
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Stop current gather
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callGatherStop(
        callControlId: string,
        requestBody: StopGatherRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/gather_stop',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Gather using audio
     * Play an audio file on the call until the required DTMF signals are gathered to build interactive menus.
     *
     * You can pass a list of valid digits along with an 'invalid_audio_url', which will be played back at the beginning of each prompt. Playback will be interrupted when a DTMF signal is received. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather_using_audio` command.
     *
     * **Expected Webhooks:**
     *
     * - `call.playback.started`
     * - `call.playback.ended`
     * - `call.dtmf.received` (you may receive many of these webhooks)
     * - `call.gather.ended`
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Gather using audio request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callGatherUsingAudio(
        callControlId: string,
        requestBody: GatherUsingAudioRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/gather_using_audio',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Gather using speak
     * Convert text to speech and play it on the call until the required DTMF signals are gathered to build interactive menus.
     *
     * You can pass a list of valid digits along with an 'invalid_payload', which will be played back at the beginning of each prompt. Speech will be interrupted when a DTMF signal is received. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather_using_speak` command.
     *
     * **Expected Webhooks:**
     *
     * - `call.dtmf.received` (you may receive many of these webhooks)
     * - `call.gather.ended`
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Gather using speak request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callGatherUsingSpeak(
        callControlId: string,
        requestBody: GatherUsingSpeakRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/gather_using_speak',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Hangup call
     * Hang up the call.
     *
     * **Expected Webhooks:**
     *
     * - `call.hangup`
     * - `call.recording.saved`
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Hangup request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callHangup(
        callControlId: string,
        requestBody: HangupRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/hangup',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove call from a queue
     * Removes the call from a queue.
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Removes the call from the queue, the call currently is enqueued in.
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public leaveQueue(
        callControlId: string,
        requestBody: LeaveQueueRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/leave_queue',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Play audio URL
     * Play an audio file on the call. If multiple play audio commands are issued consecutively,
     * the audio files will be placed in a queue awaiting playback.
     *
     * *Notes:*
     *
     * - When `overlay` is enabled, `target_legs` is limited to `self`.
     * - A customer cannot Play Audio with `overlay=true` unless there is a Play Audio with `overlay=false` actively playing.
     *
     * **Expected Webhooks:**
     *
     * - `call.playback.started`
     * - `call.playback.ended`
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Play audio URL request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callPlaybackStart(
        callControlId: string,
        requestBody: PlayAudioUrlRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/playback_start',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Stop audio playback
     * Stop audio being played on the call.
     *
     * **Expected Webhooks:**
     *
     * - `call.playback.ended` or `call.speak.ended`
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Stop audio playback request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callPlaybackStop(
        callControlId: string,
        requestBody: PlaybackStopRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/playback_stop',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Record pause
     * Pause recording the call. Recording can be resumed via Resume recording command.
     *
     * **Expected Webhooks:**
     *
     * There are no webhooks associated with this command.
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Pause recording call request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callRecordPause(
        callControlId: string,
        requestBody: PauseRecordingRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/record_pause',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Record resume
     * Resume recording the call.
     *
     * **Expected Webhooks:**
     *
     * There are no webhooks associated with this command.
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Resume recording call request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callRecordResume(
        callControlId: string,
        requestBody: ResumeRecordingRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/record_resume',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Recording start
     * Start recording the call. Recording will stop on call hang-up, or can be initiated via the Stop Recording command.
     *
     * **Expected Webhooks:**
     *
     * - `call.recording.saved`
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Start recording audio request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callRecordStart(
        callControlId: string,
        requestBody: StartRecordingRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/record_start',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Recording stop
     * Stop recording the call.
     *
     * **Expected Webhooks:**
     *
     * - `call.recording.saved`
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Stop recording call request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callRecordStop(
        callControlId: string,
        requestBody: StopRecordingRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/record_stop',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * SIP Refer a call
     * Initiate a SIP Refer on a Call Control call. You can initiate a SIP Refer at any point in the duration of a call.
     *
     * **Expected Webhooks:**
     *
     * - `call.refer.started`
     * - `call.refer.completed`
     * - `call.refer.failed`
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Refer request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callRefer(
        callControlId: string,
        requestBody: ReferRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/refer',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Reject a call
     * Reject an incoming call.
     *
     * **Expected Webhooks:**
     *
     * - `call.hangup`
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Reject request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callReject(
        callControlId: string,
        requestBody: RejectRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/reject',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Send DTMF
     * Sends DTMF tones from this leg. DTMF tones will be heard by the other end of the call.
     *
     * **Expected Webhooks:**
     *
     * There are no webhooks associated with this command.
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Send DTMF request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callSendDtmf(
        callControlId: string,
        requestBody: SendDTMFRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/send_dtmf',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Speak text
     * Convert text to speech and play it back on the call. If multiple speak text commands are issued consecutively, the audio files will be placed in a queue awaiting playback.
     *
     * **Expected Webhooks:**
     *
     * - `call.speak.started`
     * - `call.speak.ended`
     *
     * @param callControlId Unique identifier and token for controlling the call
     * @param requestBody Speak request
     * @returns any Successful response upon making a call control command.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public callSpeak(
        callControlId: string,
        requestBody: SpeakRequest,
    ): CancelablePromise<{
        data?: CallControlCommandResult;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calls/{call_control_id}/actions/speak',
            path: {
                'call_control_id': callControlId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Streaming start
     * Start streaming the media from a call to a specific WebSocket address or Dialogflow connection in near-realtime. Audio will be delivered as base64-encoded RTP payload (raw audio), wrapped in JSON payloads.
     *
     * **Example: Starting a stream to a Websocket address**
     *
     * The `stream_url` param is mandatory.
     *
     * ```
     * curl -X POST \
     * --header "Content-Type: application/json" \
     * --header "Accept: application/json" \
     * --header "Authorization: Bearer YOUR_API_KEY" \
     * --data '{
         * "stream_url": "wss://www.example.com/websocket",\
         * "client_state":"aGF2ZSBhIG5pY2UgZGF5ID1d",\
         * "command_id":"891510ac-f3e4-11e8-af5b-de00688a4901" \
         * }' \
         * https://api.telnyx.com/v2/calls/{call_control_id}/actions/streaming_start
         * ```
         *
         * **Example: Starting a stream to a Dialogflow connection**
         *
         * Enable the Dialogflow integration by sending `"enable_dialogflow": true` in the request. You need to have a Dialogflow connection associated with your Call Control application first, [click here for instructions](https://developers.telnyx.com/docs/v2/call-control/tutorials/dialogflow-es).
         * ```
         * curl -X POST \
         * --header "Content-Type: application/json" \
         * --header "Accept: application/json" \
         * --header "Authorization: Bearer YOUR_API_KEY" \
         * --data '{
             * "client_state":"aGF2ZSBhIG5pY2UgZGF5ID1d", \
             * "command_id":"891510ac-f3e4-11e8-af5b-de00688a4901", \
             * "enable_dialogflow": true \
             * }' \
             * https://api.telnyx.com/v2/calls/{call_control_id}/actions/streaming_start
             * ```
             *
             * **Expected Webhooks:**
             *
             * - `streaming.started`
             * - `streaming.stopped`
             * - `streaming.failed`
             *
             * **WebSocket events**
             *
             * When the WebSocket connection is established, the following event is being sent over it:
             * ```
             * {
                 * "event": "connected",
                 * "version": "1.0.0"
                 * }
                 * ```
                 * And when the call is started, an event which contains information about the encoding and `stream_id` that identifies a particular stream:
                 * ```
                 * {
                     * "event": "start",
                     * "sequence_number": "1",
                     * "start": {
                         * "user_id": "3e6f995f-85f7-4705-9741-53b116d28237",
                         * "call_control_id": "v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg",
                         * "client_state": "aGF2ZSBhIG5pY2UgZGF5ID1d",
                         * "media_format": {
                             * "encoding": "audio/x-mulaw",
                             * "sample_rate": 8000,
                             * "channels": 1
                             * }
                             * },
                             * "stream_id": "32de0dea-53cb-4b21-89a4-9e1819c043bc"
                             * }
                             * ```
                             * The start event is followed by the following media events that contain base64-encoded RTP payload (raw audio, no RTP headers) (:
                             * ```
                             * {
                                 * "event": "media",
                                 * "sequence_number": "4",
                                 * "media": {
                                     * "track": "inbound/outbound",
                                     * "chunk": "2",
                                     * "timestamp": "5",
                                     * "payload": "no+JhoaJjpzSHxAKBgYJD...IsSbjomGhoqQn1Ic"
                                     * },
                                     * "stream_id": "32de0dea-53cb-4b21-89a4-9e1819c043bc"
                                     * }
                                     * ```
                                     * Please note that the order of events is not guaranteed and the chunk number can be used to reorder the events.
                                     *
                                     * When the call ends, the stop event over WebSockets connection is sent:
                                     * ```
                                     * {
                                         * "event": "stop",
                                         * "sequence_number": "5",
                                         * "stop": {
                                             * "user_id": "3e6f995f-85f7-4705-9741-53b116d28237",
                                             * "call_control_id": "v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQ"
                                             * },
                                             * "stream_id": "32de0dea-53cb-4b21-89a4-9e1819c043bc"
                                             * }
                                             * ```
                                             *
                                             * **Bidirectional Media Streaming**
                                             *
                                             * Media can be sent back to the call through the websocket as well. This is done in a way very similar to the [playback_start](https://developers.telnyx.com/docs/api/v2/call-control/Call-Commands#callPlaybackStart)
                                             * command, when using a base64 encoded mp3 file in the payload. Simply send a packet to the websocket connection as follows:
                                             *
                                             * ```
                                             * {
                                                 * "event": "media",
                                                 * "media": {
                                                     * "payload" : <your base64 encoded mp3 file>
                                                     * }
                                                     * }
                                                     * ```
                                                     *
                                                     * The payload, which is a base64-encoded mp3 file, will be played on the call.
                                                     *
                                                     * Some limitations to be aware of:
                                                     *
                                                     * - Media payloads can only be submitted once per second.
                                                     * - Media _must_ be base64 encoded mp3
                                                     *
                                                     * **Stream Errors**
                                                     *
                                                     * Any errors in the media packet, including when a rate limit is reached, will result in an error frame being
                                                     * sent to your websocket server. The error frame will appear as follows:
                                                     *
                                                     * ```
                                                     * {
                                                         * "stream_id": "32de0dea-53cb-4b21-89a4-9e1819c043bc",
                                                         * "event": "error",
                                                         * "sequence_number": "6",
                                                         * "error": {
                                                             * "title": "rate_limit_reached",
                                                             * "code": "100005",
                                                             * "detail": "Too many requests"
                                                             * }
                                                             * }
                                                             * ```
                                                             *
                                                             * Possible errors are as follows:
                                                             *
                                                             * - Error 100002: `"unknown_error"`
                                                             * - Error 100003: `"malformed_frame"`
                                                             * - Error 100004: `"invalid_media"`
                                                             * - Error 100005: `"rate_limit_reached"`
                                                             *
                                                             * @param callControlId Unique identifier and token for controlling the call
                                                             * @param requestBody Start streaming media request
                                                             * @returns any Successful response upon making a call control command.
                                                             * @returns Errors Unexpected error
                                                             * @throws ApiError
                                                             */
                                                            public callStreamingStart(
                                                                callControlId: string,
                                                                requestBody: StartStreamingRequest,
                                                            ): CancelablePromise<{
                                                                data?: CallControlCommandResult;
                                                            } | Errors> {
                                                                return this.httpRequest.request({
                                                                    method: 'POST',
                                                                    url: '/calls/{call_control_id}/actions/streaming_start',
                                                                    path: {
                                                                        'call_control_id': callControlId,
                                                                    },
                                                                    body: requestBody,
                                                                    mediaType: 'application/json',
                                                                });
                                                            }

                                                            /**
                                                             * Streaming stop
                                                             * Stop streaming a call to a WebSocket.
                                                             *
                                                             * **Expected Webhooks:**
                                                             *
                                                             * - `streaming.stopped`
                                                             *
                                                             * @param callControlId Unique identifier and token for controlling the call
                                                             * @param requestBody Stop streaming media request
                                                             * @returns any Successful response upon making a call control command.
                                                             * @returns Errors Unexpected error
                                                             * @throws ApiError
                                                             */
                                                            public callStreamingStop(
                                                                callControlId: string,
                                                                requestBody: StopStreamingRequest,
                                                            ): CancelablePromise<{
                                                                data?: CallControlCommandResult;
                                                            } | Errors> {
                                                                return this.httpRequest.request({
                                                                    method: 'POST',
                                                                    url: '/calls/{call_control_id}/actions/streaming_stop',
                                                                    path: {
                                                                        'call_control_id': callControlId,
                                                                    },
                                                                    body: requestBody,
                                                                    mediaType: 'application/json',
                                                                });
                                                            }

                                                            /**
                                                             * Transcription start
                                                             * Start real-time transcription. Transcription will stop on call hang-up, or can be initiated via the Transcription stop command.
                                                             *
                                                             * **Expected Webhooks:**
                                                             *
                                                             * - `call.transcription`
                                                             *
                                                             * @param callControlId Unique identifier and token for controlling the call
                                                             * @param requestBody Transcription start request
                                                             * @returns any Successful response upon making a call control command.
                                                             * @returns Errors Unexpected error
                                                             * @throws ApiError
                                                             */
                                                            public callTranscriptionStart(
                                                                callControlId: string,
                                                                requestBody: TranscriptionStartRequest,
                                                            ): CancelablePromise<{
                                                                data?: CallControlCommandResult;
                                                            } | Errors> {
                                                                return this.httpRequest.request({
                                                                    method: 'POST',
                                                                    url: '/calls/{call_control_id}/actions/transcription_start',
                                                                    path: {
                                                                        'call_control_id': callControlId,
                                                                    },
                                                                    body: requestBody,
                                                                    mediaType: 'application/json',
                                                                });
                                                            }

                                                            /**
                                                             * Transcription stop
                                                             * Stop real-time transcription.
                                                             * @param callControlId Unique identifier and token for controlling the call
                                                             * @param requestBody Transcription stop request
                                                             * @returns any Successful response upon making a call control command.
                                                             * @returns Errors Unexpected error
                                                             * @throws ApiError
                                                             */
                                                            public callTranscriptionStop(
                                                                callControlId: string,
                                                                requestBody: TranscriptionStopRequest,
                                                            ): CancelablePromise<{
                                                                data?: CallControlCommandResult;
                                                            } | Errors> {
                                                                return this.httpRequest.request({
                                                                    method: 'POST',
                                                                    url: '/calls/{call_control_id}/actions/transcription_stop',
                                                                    path: {
                                                                        'call_control_id': callControlId,
                                                                    },
                                                                    body: requestBody,
                                                                    mediaType: 'application/json',
                                                                });
                                                            }

                                                            /**
                                                             * Transfer call
                                                             * Transfer a call to a new destination. If the transfer is unsuccessful, a `call.hangup` webhook for the other call (Leg B) will be sent indicating that the transfer could not be completed. The original call will remain active and may be issued additional commands, potentially transfering the call to an alternate destination.
                                                             *
                                                             * **Expected Webhooks:**
                                                             *
                                                             * - `call.initiated`
                                                             * - `call.bridged` to Leg B
                                                             * - `call.answered` or `call.hangup`
                                                             * - `call.machine.detection.ended` if `answering_machine_detection` was requested
                                                             * - `call.machine.greeting.ended` if `answering_machine_detection` was requested to detect the end of machine greeting
                                                             * - `call.machine.premium.detection.ended` if `answering_machine_detection=premium` was requested
                                                             * - `call.machine.premium.greeting.ended` if `answering_machine_detection=premium` was requested and a beep was detected
                                                             *
                                                             * @param callControlId Unique identifier and token for controlling the call
                                                             * @param requestBody Transfer call request
                                                             * @returns any Successful response upon making a call control command.
                                                             * @returns Errors Unexpected error
                                                             * @throws ApiError
                                                             */
                                                            public callTransfer(
                                                                callControlId: string,
                                                                requestBody: TransferCallRequest,
                                                            ): CancelablePromise<{
                                                                data?: CallControlCommandResult;
                                                            } | Errors> {
                                                                return this.httpRequest.request({
                                                                    method: 'POST',
                                                                    url: '/calls/{call_control_id}/actions/transfer',
                                                                    path: {
                                                                        'call_control_id': callControlId,
                                                                    },
                                                                    body: requestBody,
                                                                    mediaType: 'application/json',
                                                                });
                                                            }

                                                        }

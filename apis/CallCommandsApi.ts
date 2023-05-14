// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AnswerRequest } from '../models/AnswerRequest.ts';
import { BridgeRequest } from '../models/BridgeRequest.ts';
import { CallControlCommandResponse } from '../models/CallControlCommandResponse.ts';
import { CallRequest } from '../models/CallRequest.ts';
import { ClientStateUpdateRequest } from '../models/ClientStateUpdateRequest.ts';
import { EnqueueRequest } from '../models/EnqueueRequest.ts';
import { Errors } from '../models/Errors.ts';
import { GatherRequest } from '../models/GatherRequest.ts';
import { GatherUsingAudioRequest } from '../models/GatherUsingAudioRequest.ts';
import { GatherUsingSpeakRequest } from '../models/GatherUsingSpeakRequest.ts';
import { HangupRequest } from '../models/HangupRequest.ts';
import { LeaveQueueRequest } from '../models/LeaveQueueRequest.ts';
import { PauseRecordingRequest } from '../models/PauseRecordingRequest.ts';
import { PlayAudioUrlRequest } from '../models/PlayAudioUrlRequest.ts';
import { PlaybackStopRequest } from '../models/PlaybackStopRequest.ts';
import { ReferRequest } from '../models/ReferRequest.ts';
import { RejectRequest } from '../models/RejectRequest.ts';
import { ResumeRecordingRequest } from '../models/ResumeRecordingRequest.ts';
import { RetrieveCallStatusResponse } from '../models/RetrieveCallStatusResponse.ts';
import { SendDTMFRequest } from '../models/SendDTMFRequest.ts';
import { SpeakRequest } from '../models/SpeakRequest.ts';
import { StartForkingRequest } from '../models/StartForkingRequest.ts';
import { StartRecordingRequest } from '../models/StartRecordingRequest.ts';
import { StartStreamingRequest } from '../models/StartStreamingRequest.ts';
import { StopForkingRequest } from '../models/StopForkingRequest.ts';
import { StopGatherRequest } from '../models/StopGatherRequest.ts';
import { StopRecordingRequest } from '../models/StopRecordingRequest.ts';
import { StopStreamingRequest } from '../models/StopStreamingRequest.ts';
import { TranscriptionStartRequest } from '../models/TranscriptionStartRequest.ts';
import { TranscriptionStopRequest } from '../models/TranscriptionStopRequest.ts';
import { TransferCallRequest } from '../models/TransferCallRequest.ts';

/**
 * no description
 */
export class CallCommandsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Answer an incoming call. You must issue this command before executing subsequent commands on an incoming call.  **Expected Webhooks:**  - `call.answered` - `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url` was set 
     * Answer call
     * @param callControlId Unique identifier and token for controlling the call
     * @param answerRequest Answer call request
     */
    public async callAnswer(callControlId: string, answerRequest: AnswerRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callAnswer", "callControlId");
        }


        // verify required parameter 'answerRequest' is not null or undefined
        if (answerRequest === null || answerRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callAnswer", "answerRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/answer'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(answerRequest, "AnswerRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Bridge two call control calls.  **Expected Webhooks:**  - `call.bridged` for Leg A - `call.bridged` for Leg B 
     * Bridge calls
     * @param callControlId Unique identifier and token for controlling the call
     * @param bridgeRequest Bridge call request
     */
    public async callBridge(callControlId: string, bridgeRequest: BridgeRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callBridge", "callControlId");
        }


        // verify required parameter 'bridgeRequest' is not null or undefined
        if (bridgeRequest === null || bridgeRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callBridge", "bridgeRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/bridge'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bridgeRequest, "BridgeRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Dial a number or SIP URI from a given connection. A successful response will include a `call_leg_id` which can be used to correlate the command with subsequent webhooks.  **Expected Webhooks:**  - `call.initiated` - `call.answered` or `call.hangup` - `call.machine.detection.ended` if `answering_machine_detection` was requested - `call.machine.greeting.ended` if `answering_machine_detection` was requested to detect the end of machine greeting - `call.machine.premium.detection.ended` if `answering_machine_detection=premium` was requested - `call.machine.premium.greeting.ended` if `answering_machine_detection=premium` was requested and a beep was detected - `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url` was set 
     * Dial
     * @param callRequest Call request
     */
    public async callDial(callRequest: CallRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callRequest' is not null or undefined
        if (callRequest === null || callRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callDial", "callRequest");
        }


        // Path Params
        const localVarPath = '/calls';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(callRequest, "CallRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Put the call in a queue.
     * Enqueue call
     * @param callControlId Unique identifier and token for controlling the call
     * @param enqueueRequest Enqueue call request
     */
    public async callEnqueue(callControlId: string, enqueueRequest: EnqueueRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callEnqueue", "callControlId");
        }


        // verify required parameter 'enqueueRequest' is not null or undefined
        if (enqueueRequest === null || enqueueRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callEnqueue", "enqueueRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/enqueue'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(enqueueRequest, "EnqueueRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Call forking allows you to stream the media from a call to a specific target in realtime.  This stream can be used to enable realtime audio analysis to support a  variety of use cases, including fraud detection, or the creation of AI-generated audio responses.  Requests must specify either the `target` attribute or the `rx` and `tx` attributes.  **Expected Webhooks:**  - `call.fork.started` - `call.fork.stopped`  **Simple Telnyx RTP Encapsulation Protocol (STREP)**  *Note: This header/encapsulation is not used when the `rx` and `tx` parameters have been specified; it only applies when media is forked using the `target` attribute.*  If the destination for forked media is specified using the \"target\" attribute, the RTP will be encapsulated in an extra Telnyx protocol, which adds a 24 byte header to the RTP payload in each packet. The STREP header includes the Call Control `call_leg_id` for stream identification, along with bits that represent the direction (inbound or outbound) of the media. This 24-byte header sits between the UDP header and the RTP header.  The STREP header makes it possible to fork RTP for multiple calls (or two RTP streams for the same call) to the same IP:port, where the streams can be demultiplexed by your application using the information in the header. Of course, it\'s still possible to ignore this header completely, for example, if sending forked media for different calls to different ports or IP addresses. In this case, simply strip 24 bytes (or use the second byte to find the header length) from the received UDP payload to get the RTP (RTP header and payload).  ``` STREP Specification    0                   1                   2                   3   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  |1 1|Version|L|D|    HeaderLen  |  reserved (2 bytes)           |  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  |       reserved (4 bytes, for UDP ports or anything else)      |  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  |               The call_leg_id                                 |  |                   from Call Control                           |  |                       (128 bits / 16 bytes)                   |  |                           (this is binary data)               |  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+   11    Static bits 11, always set to 11 to easily distinguish forked media    from RTP (10) and T.38 media (usually 00) and SIP (which begins    with a capital letter, so begins with bits 01). This is a magic number.   Version    Four bits to indicate the version number of the protocol, starting at 0001.   L    One bit to represent the leg of the call (A or B).    0 represents the A (first) leg of the call.    1 represents the B (second) leg of the call.   D    One bit to represent the direction of this RTP stream.    0 represents media received by Telnyx.    1 represents media transmitted by Telnyx.   HeaderLen (1 byte)    The length of the header in bytes.    Note that this value does not include the length of the payload. The total    size of the RTP can be calculated by subtracting the HeaderLen from the UDP    length (minus 8 for the UDP header).    In version 1, this value will always be 24.   Reserved (6 bytes)    Reserved for future use and to make sure that the header is a multiple of 32 bits   Call Leg ID    A 128-bit identifier for the call leg.    This is the call_leg_id from Call Control. ``` 
     * Forking start
     * @param callControlId Unique identifier and token for controlling the call
     * @param startForkingRequest Fork media request
     */
    public async callForkStart(callControlId: string, startForkingRequest: StartForkingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callForkStart", "callControlId");
        }


        // verify required parameter 'startForkingRequest' is not null or undefined
        if (startForkingRequest === null || startForkingRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callForkStart", "startForkingRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/fork_start'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(startForkingRequest, "StartForkingRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Stop forking a call.  **Expected Webhooks:**  - `call.fork.stopped` 
     * Forking stop
     * @param callControlId Unique identifier and token for controlling the call
     * @param stopForkingRequest Stop forking media request
     */
    public async callForkStop(callControlId: string, stopForkingRequest: StopForkingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callForkStop", "callControlId");
        }


        // verify required parameter 'stopForkingRequest' is not null or undefined
        if (stopForkingRequest === null || stopForkingRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callForkStop", "stopForkingRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/fork_stop'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(stopForkingRequest, "StopForkingRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gather DTMF signals to build interactive menus.  You can pass a list of valid digits. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather` command.  **Expected Webhooks:**  - `call.dtmf.received` (you may receive many of these webhooks) - `call.gather.ended` 
     * Gather
     * @param callControlId Unique identifier and token for controlling the call
     * @param gatherRequest Gather
     */
    public async callGather(callControlId: string, gatherRequest: GatherRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callGather", "callControlId");
        }


        // verify required parameter 'gatherRequest' is not null or undefined
        if (gatherRequest === null || gatherRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callGather", "gatherRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/gather'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gatherRequest, "GatherRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Stop current gather.  **Expected Webhooks:**  - `call.gather.ended` 
     * Gather stop
     * @param callControlId Unique identifier and token for controlling the call
     * @param stopGatherRequest Stop current gather
     */
    public async callGatherStop(callControlId: string, stopGatherRequest: StopGatherRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callGatherStop", "callControlId");
        }


        // verify required parameter 'stopGatherRequest' is not null or undefined
        if (stopGatherRequest === null || stopGatherRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callGatherStop", "stopGatherRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/gather_stop'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(stopGatherRequest, "StopGatherRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Play an audio file on the call until the required DTMF signals are gathered to build interactive menus.  You can pass a list of valid digits along with an \'invalid_audio_url\', which will be played back at the beginning of each prompt. Playback will be interrupted when a DTMF signal is received. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather_using_audio` command.  **Expected Webhooks:**  - `call.playback.started` - `call.playback.ended` - `call.dtmf.received` (you may receive many of these webhooks) - `call.gather.ended` 
     * Gather using audio
     * @param callControlId Unique identifier and token for controlling the call
     * @param gatherUsingAudioRequest Gather using audio request
     */
    public async callGatherUsingAudio(callControlId: string, gatherUsingAudioRequest: GatherUsingAudioRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callGatherUsingAudio", "callControlId");
        }


        // verify required parameter 'gatherUsingAudioRequest' is not null or undefined
        if (gatherUsingAudioRequest === null || gatherUsingAudioRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callGatherUsingAudio", "gatherUsingAudioRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/gather_using_audio'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gatherUsingAudioRequest, "GatherUsingAudioRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Convert text to speech and play it on the call until the required DTMF signals are gathered to build interactive menus.  You can pass a list of valid digits along with an \'invalid_payload\', which will be played back at the beginning of each prompt. Speech will be interrupted when a DTMF signal is received. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather_using_speak` command.  **Expected Webhooks:**  - `call.dtmf.received` (you may receive many of these webhooks) - `call.gather.ended` 
     * Gather using speak
     * @param callControlId Unique identifier and token for controlling the call
     * @param gatherUsingSpeakRequest Gather using speak request
     */
    public async callGatherUsingSpeak(callControlId: string, gatherUsingSpeakRequest: GatherUsingSpeakRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callGatherUsingSpeak", "callControlId");
        }


        // verify required parameter 'gatherUsingSpeakRequest' is not null or undefined
        if (gatherUsingSpeakRequest === null || gatherUsingSpeakRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callGatherUsingSpeak", "gatherUsingSpeakRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/gather_using_speak'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gatherUsingSpeakRequest, "GatherUsingSpeakRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Hang up the call.  **Expected Webhooks:**  - `call.hangup` - `call.recording.saved` 
     * Hangup call
     * @param callControlId Unique identifier and token for controlling the call
     * @param hangupRequest Hangup request
     */
    public async callHangup(callControlId: string, hangupRequest: HangupRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callHangup", "callControlId");
        }


        // verify required parameter 'hangupRequest' is not null or undefined
        if (hangupRequest === null || hangupRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callHangup", "hangupRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/hangup'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(hangupRequest, "HangupRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Play an audio file on the call. If multiple play audio commands are issued consecutively, the audio files will be placed in a queue awaiting playback.  *Notes:*  - When `overlay` is enabled, `target_legs` is limited to `self`. - A customer cannot Play Audio with `overlay=true` unless there is a Play Audio with `overlay=false` actively playing.  **Expected Webhooks:**  - `call.playback.started` - `call.playback.ended` 
     * Play audio URL
     * @param callControlId Unique identifier and token for controlling the call
     * @param playAudioUrlRequest Play audio URL request
     */
    public async callPlaybackStart(callControlId: string, playAudioUrlRequest: PlayAudioUrlRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callPlaybackStart", "callControlId");
        }


        // verify required parameter 'playAudioUrlRequest' is not null or undefined
        if (playAudioUrlRequest === null || playAudioUrlRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callPlaybackStart", "playAudioUrlRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/playback_start'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(playAudioUrlRequest, "PlayAudioUrlRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Stop audio being played on the call.  **Expected Webhooks:**  - `call.playback.ended` or `call.speak.ended` 
     * Stop audio playback
     * @param callControlId Unique identifier and token for controlling the call
     * @param playbackStopRequest Stop audio playback request
     */
    public async callPlaybackStop(callControlId: string, playbackStopRequest: PlaybackStopRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callPlaybackStop", "callControlId");
        }


        // verify required parameter 'playbackStopRequest' is not null or undefined
        if (playbackStopRequest === null || playbackStopRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callPlaybackStop", "playbackStopRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/playback_stop'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(playbackStopRequest, "PlaybackStopRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Pause recording the call. Recording can be resumed via Resume recording command.  **Expected Webhooks:**  There are no webhooks associated with this command. 
     * Record pause
     * @param callControlId Unique identifier and token for controlling the call
     * @param pauseRecordingRequest Pause recording call request
     */
    public async callRecordPause(callControlId: string, pauseRecordingRequest: PauseRecordingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callRecordPause", "callControlId");
        }


        // verify required parameter 'pauseRecordingRequest' is not null or undefined
        if (pauseRecordingRequest === null || pauseRecordingRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callRecordPause", "pauseRecordingRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/record_pause'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(pauseRecordingRequest, "PauseRecordingRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Resume recording the call.  **Expected Webhooks:**  There are no webhooks associated with this command. 
     * Record resume
     * @param callControlId Unique identifier and token for controlling the call
     * @param resumeRecordingRequest Resume recording call request
     */
    public async callRecordResume(callControlId: string, resumeRecordingRequest: ResumeRecordingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callRecordResume", "callControlId");
        }


        // verify required parameter 'resumeRecordingRequest' is not null or undefined
        if (resumeRecordingRequest === null || resumeRecordingRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callRecordResume", "resumeRecordingRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/record_resume'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(resumeRecordingRequest, "ResumeRecordingRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Start recording the call. Recording will stop on call hang-up, or can be initiated via the Stop Recording command.  **Expected Webhooks:**  - `call.recording.saved` 
     * Recording start
     * @param callControlId Unique identifier and token for controlling the call
     * @param startRecordingRequest Start recording audio request
     */
    public async callRecordStart(callControlId: string, startRecordingRequest: StartRecordingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callRecordStart", "callControlId");
        }


        // verify required parameter 'startRecordingRequest' is not null or undefined
        if (startRecordingRequest === null || startRecordingRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callRecordStart", "startRecordingRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/record_start'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(startRecordingRequest, "StartRecordingRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Stop recording the call.  **Expected Webhooks:**  - `call.recording.saved` 
     * Recording stop
     * @param callControlId Unique identifier and token for controlling the call
     * @param stopRecordingRequest Stop recording call request
     */
    public async callRecordStop(callControlId: string, stopRecordingRequest: StopRecordingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callRecordStop", "callControlId");
        }


        // verify required parameter 'stopRecordingRequest' is not null or undefined
        if (stopRecordingRequest === null || stopRecordingRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callRecordStop", "stopRecordingRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/record_stop'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(stopRecordingRequest, "StopRecordingRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Initiate a SIP Refer on a Call Control call. You can initiate a SIP Refer at any point in the duration of a call.  **Expected Webhooks:**  - `call.refer.started` - `call.refer.completed` - `call.refer.failed` 
     * SIP Refer a call
     * @param callControlId Unique identifier and token for controlling the call
     * @param referRequest Refer request
     */
    public async callRefer(callControlId: string, referRequest: ReferRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callRefer", "callControlId");
        }


        // verify required parameter 'referRequest' is not null or undefined
        if (referRequest === null || referRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callRefer", "referRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/refer'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(referRequest, "ReferRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Reject an incoming call.  **Expected Webhooks:**  - `call.hangup` 
     * Reject a call
     * @param callControlId Unique identifier and token for controlling the call
     * @param rejectRequest Reject request
     */
    public async callReject(callControlId: string, rejectRequest: RejectRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callReject", "callControlId");
        }


        // verify required parameter 'rejectRequest' is not null or undefined
        if (rejectRequest === null || rejectRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callReject", "rejectRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/reject'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(rejectRequest, "RejectRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Sends DTMF tones from this leg. DTMF tones will be heard by the other end of the call.  **Expected Webhooks:**  There are no webhooks associated with this command. 
     * Send DTMF
     * @param callControlId Unique identifier and token for controlling the call
     * @param sendDTMFRequest Send DTMF request
     */
    public async callSendDTMF(callControlId: string, sendDTMFRequest: SendDTMFRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callSendDTMF", "callControlId");
        }


        // verify required parameter 'sendDTMFRequest' is not null or undefined
        if (sendDTMFRequest === null || sendDTMFRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callSendDTMF", "sendDTMFRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/send_dtmf'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(sendDTMFRequest, "SendDTMFRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Convert text to speech and play it back on the call. If multiple speak text commands are issued consecutively, the audio files will be placed in a queue awaiting playback.  **Expected Webhooks:**  - `call.speak.started` - `call.speak.ended` 
     * Speak text
     * @param callControlId Unique identifier and token for controlling the call
     * @param speakRequest Speak request
     */
    public async callSpeak(callControlId: string, speakRequest: SpeakRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callSpeak", "callControlId");
        }


        // verify required parameter 'speakRequest' is not null or undefined
        if (speakRequest === null || speakRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callSpeak", "speakRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/speak'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(speakRequest, "SpeakRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Start streaming the media from a call to a specific WebSocket address or Dialogflow connection in near-realtime. Audio will be delivered as base64-encoded RTP payload (raw audio), wrapped in JSON payloads.   **Example: Starting a stream to a Websocket address**   The `stream_url` param is mandatory.  ``` curl -X POST \\    --header \"Content-Type: application/json\" \\    --header \"Accept: application/json\" \\    --header \"Authorization: Bearer YOUR_API_KEY\" \\    --data \'{  \"stream_url\": \"wss://www.example.com/websocket\",\\  \"client_state\":\"aGF2ZSBhIG5pY2UgZGF5ID1d\",\\  \"command_id\":\"891510ac-f3e4-11e8-af5b-de00688a4901\" \\  }\' \\    https://api.telnyx.com/v2/calls/{call_control_id}/actions/streaming_start  ```    **Example: Starting a stream to a Dialogflow connection**    Enable the Dialogflow integration by sending `\"enable_dialogflow\": true` in the request. You need to have a Dialogflow connection associated with your Call Control application first, [click here for instructions](https://developers.telnyx.com/docs/v2/call-control/tutorials/dialogflow-es). ``` curl -X POST \\    --header \"Content-Type: application/json\" \\    --header \"Accept: application/json\" \\    --header \"Authorization: Bearer YOUR_API_KEY\" \\    --data \'{  \"client_state\":\"aGF2ZSBhIG5pY2UgZGF5ID1d\", \\  \"command_id\":\"891510ac-f3e4-11e8-af5b-de00688a4901\", \\  \"enable_dialogflow\": true \\  }\' \\    https://api.telnyx.com/v2/calls/{call_control_id}/actions/streaming_start  ```  **Expected Webhooks:**  - `streaming.started` - `streaming.stopped` - `streaming.failed`  **WebSocket events**  When the WebSocket connection is established, the following event is being sent over it: ``` {   \"event\": \"connected\",   \"version\": \"1.0.0\" } ``` And when the call is started, an event which contains information about the encoding and `stream_id` that identifies a particular stream: ``` {   \"event\": \"start\",   \"sequence_number\": \"1\",   \"start\": {     \"user_id\": \"3e6f995f-85f7-4705-9741-53b116d28237\",     \"call_control_id\": \"v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg\",      \"client_state\": \"aGF2ZSBhIG5pY2UgZGF5ID1d\",     \"media_format\": {       \"encoding\": \"audio/x-mulaw\",       \"sample_rate\": 8000,       \"channels\": 1     }   },   \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\" } ``` The start event is followed by the following media events that contain base64-encoded RTP payload (raw audio, no RTP headers) (: ``` {    \"event\": \"media\",   \"sequence_number\": \"4\",   \"media\": {      \"track\": \"inbound/outbound\",      \"chunk\": \"2\",     \"timestamp\": \"5\",     \"payload\": \"no+JhoaJjpzSHxAKBgYJD...IsSbjomGhoqQn1Ic\"    },   \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\"  } ``` Please note that the order of events is not guaranteed and the chunk number can be used to reorder the events.  When the call ends, the stop event over WebSockets connection is sent: ``` {    \"event\": \"stop\",   \"sequence_number\": \"5\",   \"stop\": {     \"user_id\": \"3e6f995f-85f7-4705-9741-53b116d28237\",     \"call_control_id\": \"v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQ\"    },     \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\"   } ```  **Bidirectional Media Streaming**  Media can be sent back to the call through the websocket as well. This is done in a way very similar to the [playback_start](https://developers.telnyx.com/docs/api/v2/call-control/Call-Commands#callPlaybackStart) command, when using a base64 encoded mp3 file in the payload. Simply send a packet to the websocket connection as follows:  ``` {   \"event\": \"media\",   \"media\": {     \"payload\" : <your base64 encoded mp3 file>   } } ```  The payload, which is a base64-encoded mp3 file, will be played on the call.  Some limitations to be aware of:  - Media payloads can only be submitted once per second. - Media _must_ be base64 encoded mp3  **Stream Errors**  Any errors in the media packet, including when a rate limit is reached, will result in an error frame being sent to your websocket server. The error frame will appear as follows:  ``` {   \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\",   \"event\": \"error\",   \"sequence_number\": \"6\",   \"error\": {     \"title\": \"rate_limit_reached\",     \"code\": \"100005\",     \"detail\": \"Too many requests\"   } } ```  Possible errors are as follows:  - Error 100002: `\"unknown_error\"` - Error 100003: `\"malformed_frame\"` - Error 100004: `\"invalid_media\"` - Error 100005: `\"rate_limit_reached\"` 
     * Streaming start
     * @param callControlId Unique identifier and token for controlling the call
     * @param startStreamingRequest Start streaming media request
     */
    public async callStreamingStart(callControlId: string, startStreamingRequest: StartStreamingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callStreamingStart", "callControlId");
        }


        // verify required parameter 'startStreamingRequest' is not null or undefined
        if (startStreamingRequest === null || startStreamingRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callStreamingStart", "startStreamingRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/streaming_start'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(startStreamingRequest, "StartStreamingRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Stop streaming a call to a WebSocket.  **Expected Webhooks:**  - `streaming.stopped` 
     * Streaming stop
     * @param callControlId Unique identifier and token for controlling the call
     * @param stopStreamingRequest Stop streaming media request
     */
    public async callStreamingStop(callControlId: string, stopStreamingRequest: StopStreamingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callStreamingStop", "callControlId");
        }


        // verify required parameter 'stopStreamingRequest' is not null or undefined
        if (stopStreamingRequest === null || stopStreamingRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callStreamingStop", "stopStreamingRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/streaming_stop'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(stopStreamingRequest, "StopStreamingRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Start real-time transcription. Transcription will stop on call hang-up, or can be initiated via the Transcription stop command.  **Expected Webhooks:**  - `call.transcription` 
     * Transcription start
     * @param callControlId Unique identifier and token for controlling the call
     * @param transcriptionStartRequest Transcription start request
     */
    public async callTranscriptionStart(callControlId: string, transcriptionStartRequest: TranscriptionStartRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callTranscriptionStart", "callControlId");
        }


        // verify required parameter 'transcriptionStartRequest' is not null or undefined
        if (transcriptionStartRequest === null || transcriptionStartRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callTranscriptionStart", "transcriptionStartRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/transcription_start'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(transcriptionStartRequest, "TranscriptionStartRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Stop real-time transcription.
     * Transcription stop
     * @param callControlId Unique identifier and token for controlling the call
     * @param transcriptionStopRequest Transcription stop request
     */
    public async callTranscriptionStop(callControlId: string, transcriptionStopRequest: TranscriptionStopRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callTranscriptionStop", "callControlId");
        }


        // verify required parameter 'transcriptionStopRequest' is not null or undefined
        if (transcriptionStopRequest === null || transcriptionStopRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callTranscriptionStop", "transcriptionStopRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/transcription_stop'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(transcriptionStopRequest, "TranscriptionStopRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Transfer a call to a new destination. If the transfer is unsuccessful, a `call.hangup` webhook for the other call (Leg B) will be sent indicating that the transfer could not be completed. The original call will remain active and may be issued additional commands, potentially transfering the call to an alternate destination.  **Expected Webhooks:**  - `call.initiated` - `call.bridged` to Leg B - `call.answered` or `call.hangup` - `call.machine.detection.ended` if `answering_machine_detection` was requested - `call.machine.greeting.ended` if `answering_machine_detection` was requested to detect the end of machine greeting - `call.machine.premium.detection.ended` if `answering_machine_detection=premium` was requested - `call.machine.premium.greeting.ended` if `answering_machine_detection=premium` was requested and a beep was detected 
     * Transfer call
     * @param callControlId Unique identifier and token for controlling the call
     * @param transferCallRequest Transfer call request
     */
    public async callTransfer(callControlId: string, transferCallRequest: TransferCallRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "callTransfer", "callControlId");
        }


        // verify required parameter 'transferCallRequest' is not null or undefined
        if (transferCallRequest === null || transferCallRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "callTransfer", "transferCallRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/transfer'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(transferCallRequest, "TransferCallRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates client state
     * Update client state
     * @param callControlId Unique identifier and token for controlling the call
     * @param clientStateUpdateRequest Updates client state for every subsequent webhook
     */
    public async clientStateUpdate(callControlId: string, clientStateUpdateRequest: ClientStateUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "clientStateUpdate", "callControlId");
        }


        // verify required parameter 'clientStateUpdateRequest' is not null or undefined
        if (clientStateUpdateRequest === null || clientStateUpdateRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "clientStateUpdate", "clientStateUpdateRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/client_state_update'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(clientStateUpdateRequest, "ClientStateUpdateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Removes the call from a queue.
     * Remove call from a queue
     * @param callControlId Unique identifier and token for controlling the call
     * @param leaveQueueRequest Removes the call from the queue, the call currently is enqueued in.
     */
    public async leaveQueue(callControlId: string, leaveQueueRequest: LeaveQueueRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallCommandsApi", "leaveQueue", "callControlId");
        }


        // verify required parameter 'leaveQueueRequest' is not null or undefined
        if (leaveQueueRequest === null || leaveQueueRequest === undefined) {
            throw new RequiredError("CallCommandsApi", "leaveQueue", "leaveQueueRequest");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}/actions/leave_queue'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(leaveQueueRequest, "LeaveQueueRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class CallCommandsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callAnswer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callAnswer(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callBridge
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callBridge(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callDial
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callDial(response: ResponseContext): Promise<RetrieveCallStatusResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetrieveCallStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveCallStatusResponse", ""
            ) as RetrieveCallStatusResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetrieveCallStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveCallStatusResponse", ""
            ) as RetrieveCallStatusResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callEnqueue
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callEnqueue(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callForkStart
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callForkStart(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callForkStop
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callForkStop(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callGather
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callGather(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callGatherStop
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callGatherStop(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callGatherUsingAudio
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callGatherUsingAudio(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callGatherUsingSpeak
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callGatherUsingSpeak(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callHangup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callHangup(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callPlaybackStart
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callPlaybackStart(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callPlaybackStop
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callPlaybackStop(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callRecordPause
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callRecordPause(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callRecordResume
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callRecordResume(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callRecordStart
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callRecordStart(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callRecordStop
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callRecordStop(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callRefer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callRefer(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callReject
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callReject(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callSendDTMF
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callSendDTMF(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callSpeak
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callSpeak(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callStreamingStart
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callStreamingStart(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callStreamingStop
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callStreamingStop(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callTranscriptionStart
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callTranscriptionStart(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callTranscriptionStop
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callTranscriptionStop(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callTransfer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callTransfer(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to clientStateUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async clientStateUpdate(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to leaveQueue
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async leaveQueue(response: ResponseContext): Promise<CallControlCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlCommandResponse", ""
            ) as CallControlCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

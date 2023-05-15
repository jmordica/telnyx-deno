import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

import { AnswerRequest } from '../models/AnswerRequest.ts';
import { Attempt } from '../models/Attempt.ts';
import { BridgeRequest } from '../models/BridgeRequest.ts';
import { Call } from '../models/Call.ts';
import { CallAnswered } from '../models/CallAnswered.ts';
import { CallAnsweredEvent } from '../models/CallAnsweredEvent.ts';
import { CallAnsweredPayload } from '../models/CallAnsweredPayload.ts';
import { CallBridged } from '../models/CallBridged.ts';
import { CallBridgedEvent } from '../models/CallBridgedEvent.ts';
import { CallBridgedPayload } from '../models/CallBridgedPayload.ts';
import { CallControlCommandResponse } from '../models/CallControlCommandResponse.ts';
import { CallControlCommandResult } from '../models/CallControlCommandResult.ts';
import { CallCost } from '../models/CallCost.ts';
import { CallCostMeta } from '../models/CallCostMeta.ts';
import { CallCostMetaMeta } from '../models/CallCostMetaMeta.ts';
import { CallCostPayload } from '../models/CallCostPayload.ts';
import { CallCostPayloadCostPartsInner } from '../models/CallCostPayloadCostPartsInner.ts';
import { CallDtmfReceived } from '../models/CallDtmfReceived.ts';
import { CallDtmfReceivedEvent } from '../models/CallDtmfReceivedEvent.ts';
import { CallDtmfReceivedPayload } from '../models/CallDtmfReceivedPayload.ts';
import { CallEnqueued } from '../models/CallEnqueued.ts';
import { CallEnqueuedEvent } from '../models/CallEnqueuedEvent.ts';
import { CallEnqueuedPayload } from '../models/CallEnqueuedPayload.ts';
import { CallEvent } from '../models/CallEvent.ts';
import { CallForkStarted } from '../models/CallForkStarted.ts';
import { CallForkStartedEvent } from '../models/CallForkStartedEvent.ts';
import { CallForkStartedPayload } from '../models/CallForkStartedPayload.ts';
import { CallForkStopped } from '../models/CallForkStopped.ts';
import { CallForkStoppedEvent } from '../models/CallForkStoppedEvent.ts';
import { CallForwarding } from '../models/CallForwarding.ts';
import { CallGatherEnded } from '../models/CallGatherEnded.ts';
import { CallGatherEndedEvent } from '../models/CallGatherEndedEvent.ts';
import { CallGatherEndedPayload } from '../models/CallGatherEndedPayload.ts';
import { CallHangup } from '../models/CallHangup.ts';
import { CallHangupEvent } from '../models/CallHangupEvent.ts';
import { CallHangupPayload } from '../models/CallHangupPayload.ts';
import { CallInitiated } from '../models/CallInitiated.ts';
import { CallInitiatedEvent } from '../models/CallInitiatedEvent.ts';
import { CallInitiatedPayload } from '../models/CallInitiatedPayload.ts';
import { CallLeftQueue } from '../models/CallLeftQueue.ts';
import { CallLeftQueueEvent } from '../models/CallLeftQueueEvent.ts';
import { CallLeftQueuePayload } from '../models/CallLeftQueuePayload.ts';
import { CallMachineDetectionEnded } from '../models/CallMachineDetectionEnded.ts';
import { CallMachineDetectionEndedEvent } from '../models/CallMachineDetectionEndedEvent.ts';
import { CallMachineDetectionEndedPayload } from '../models/CallMachineDetectionEndedPayload.ts';
import { CallMachineGreetingEnded } from '../models/CallMachineGreetingEnded.ts';
import { CallMachineGreetingEndedEvent } from '../models/CallMachineGreetingEndedEvent.ts';
import { CallMachineGreetingEndedPayload } from '../models/CallMachineGreetingEndedPayload.ts';
import { CallMachinePremiumDetectionEnded } from '../models/CallMachinePremiumDetectionEnded.ts';
import { CallMachinePremiumDetectionEndedEvent } from '../models/CallMachinePremiumDetectionEndedEvent.ts';
import { CallMachinePremiumDetectionEndedPayload } from '../models/CallMachinePremiumDetectionEndedPayload.ts';
import { CallMachinePremiumGreetingEnded } from '../models/CallMachinePremiumGreetingEnded.ts';
import { CallMachinePremiumGreetingEndedEvent } from '../models/CallMachinePremiumGreetingEndedEvent.ts';
import { CallMachinePremiumGreetingEndedPayload } from '../models/CallMachinePremiumGreetingEndedPayload.ts';
import { CallPlaybackEnded } from '../models/CallPlaybackEnded.ts';
import { CallPlaybackEndedEvent } from '../models/CallPlaybackEndedEvent.ts';
import { CallPlaybackEndedPayload } from '../models/CallPlaybackEndedPayload.ts';
import { CallPlaybackStarted } from '../models/CallPlaybackStarted.ts';
import { CallPlaybackStartedEvent } from '../models/CallPlaybackStartedEvent.ts';
import { CallPlaybackStartedPayload } from '../models/CallPlaybackStartedPayload.ts';
import { CallRecording } from '../models/CallRecording.ts';
import { CallRecordingError } from '../models/CallRecordingError.ts';
import { CallRecordingErrorEvent } from '../models/CallRecordingErrorEvent.ts';
import { CallRecordingErrorPayload } from '../models/CallRecordingErrorPayload.ts';
import { CallRecordingSaved } from '../models/CallRecordingSaved.ts';
import { CallRecordingSavedEvent } from '../models/CallRecordingSavedEvent.ts';
import { CallRecordingSavedPayload } from '../models/CallRecordingSavedPayload.ts';
import { CallRecordingSavedPayloadPublicRecordingUrls } from '../models/CallRecordingSavedPayloadPublicRecordingUrls.ts';
import { CallRecordingSavedPayloadRecordingUrls } from '../models/CallRecordingSavedPayloadRecordingUrls.ts';
import { CallReferCompleted } from '../models/CallReferCompleted.ts';
import { CallReferCompletedEvent } from '../models/CallReferCompletedEvent.ts';
import { CallReferCompletedPayload } from '../models/CallReferCompletedPayload.ts';
import { CallReferFailed } from '../models/CallReferFailed.ts';
import { CallReferFailedEvent } from '../models/CallReferFailedEvent.ts';
import { CallReferFailedPayload } from '../models/CallReferFailedPayload.ts';
import { CallReferStarted } from '../models/CallReferStarted.ts';
import { CallReferStartedEvent } from '../models/CallReferStartedEvent.ts';
import { CallReferStartedPayload } from '../models/CallReferStartedPayload.ts';
import { CallRequest } from '../models/CallRequest.ts';
import { CallRequestAnsweringMachineDetectionConfig } from '../models/CallRequestAnsweringMachineDetectionConfig.ts';
import { CallRequestTo } from '../models/CallRequestTo.ts';
import { CallSpeakEnded } from '../models/CallSpeakEnded.ts';
import { CallSpeakEndedEvent } from '../models/CallSpeakEndedEvent.ts';
import { CallSpeakEndedPayload } from '../models/CallSpeakEndedPayload.ts';
import { CallSpeakStarted } from '../models/CallSpeakStarted.ts';
import { CallSpeakStartedEvent } from '../models/CallSpeakStartedEvent.ts';
import { CallSpeakStartedPayload } from '../models/CallSpeakStartedPayload.ts';
import { CallStreamingFailed } from '../models/CallStreamingFailed.ts';
import { CallStreamingFailedEvent } from '../models/CallStreamingFailedEvent.ts';
import { CallStreamingFailedPayload } from '../models/CallStreamingFailedPayload.ts';
import { CallStreamingFailedPayloadStreamParams } from '../models/CallStreamingFailedPayloadStreamParams.ts';
import { CallStreamingStarted } from '../models/CallStreamingStarted.ts';
import { CallStreamingStartedEvent } from '../models/CallStreamingStartedEvent.ts';
import { CallStreamingStartedPayload } from '../models/CallStreamingStartedPayload.ts';
import { CallStreamingStopped } from '../models/CallStreamingStopped.ts';
import { CallStreamingStoppedEvent } from '../models/CallStreamingStoppedEvent.ts';
import { CallbackWebhookMeta } from '../models/CallbackWebhookMeta.ts';
import { ClientStateUpdateRequest } from '../models/ClientStateUpdateRequest.ts';
import { Conference } from '../models/Conference.ts';
import { ConferenceCallRequest } from '../models/ConferenceCallRequest.ts';
import { ConferenceCommandResponse } from '../models/ConferenceCommandResponse.ts';
import { ConferenceCommandResult } from '../models/ConferenceCommandResult.ts';
import { ConferenceCreated } from '../models/ConferenceCreated.ts';
import { ConferenceCreatedEvent } from '../models/ConferenceCreatedEvent.ts';
import { ConferenceCreatedPayload } from '../models/ConferenceCreatedPayload.ts';
import { ConferenceDetailRecord } from '../models/ConferenceDetailRecord.ts';
import { ConferenceEnded } from '../models/ConferenceEnded.ts';
import { ConferenceEndedBy } from '../models/ConferenceEndedBy.ts';
import { ConferenceEndedEvent } from '../models/ConferenceEndedEvent.ts';
import { ConferenceEndedPayload } from '../models/ConferenceEndedPayload.ts';
import { ConferenceFloorChangedEvent } from '../models/ConferenceFloorChangedEvent.ts';
import { ConferenceFloorChangedEventPayload } from '../models/ConferenceFloorChangedEventPayload.ts';
import { ConferenceHoldRequest } from '../models/ConferenceHoldRequest.ts';
import { ConferenceMuteRequest } from '../models/ConferenceMuteRequest.ts';
import { ConferenceParticipantDetailRecord } from '../models/ConferenceParticipantDetailRecord.ts';
import { ConferenceParticipantJoined } from '../models/ConferenceParticipantJoined.ts';
import { ConferenceParticipantJoinedEvent } from '../models/ConferenceParticipantJoinedEvent.ts';
import { ConferenceParticipantJoinedPayload } from '../models/ConferenceParticipantJoinedPayload.ts';
import { ConferenceParticipantLeft } from '../models/ConferenceParticipantLeft.ts';
import { ConferenceParticipantLeftEvent } from '../models/ConferenceParticipantLeftEvent.ts';
import { ConferenceParticipantPlaybackEnded } from '../models/ConferenceParticipantPlaybackEnded.ts';
import { ConferenceParticipantPlaybackEndedEvent } from '../models/ConferenceParticipantPlaybackEndedEvent.ts';
import { ConferenceParticipantPlaybackEndedPayload } from '../models/ConferenceParticipantPlaybackEndedPayload.ts';
import { ConferenceParticipantPlaybackStarted } from '../models/ConferenceParticipantPlaybackStarted.ts';
import { ConferenceParticipantPlaybackStartedEvent } from '../models/ConferenceParticipantPlaybackStartedEvent.ts';
import { ConferenceParticipantSpeakEnded } from '../models/ConferenceParticipantSpeakEnded.ts';
import { ConferenceParticipantSpeakEndedEvent } from '../models/ConferenceParticipantSpeakEndedEvent.ts';
import { ConferenceParticipantSpeakEndedPayload } from '../models/ConferenceParticipantSpeakEndedPayload.ts';
import { ConferenceParticipantSpeakStarted } from '../models/ConferenceParticipantSpeakStarted.ts';
import { ConferenceParticipantSpeakStartedEvent } from '../models/ConferenceParticipantSpeakStartedEvent.ts';
import { ConferencePlayRequest } from '../models/ConferencePlayRequest.ts';
import { ConferencePlaybackEnded } from '../models/ConferencePlaybackEnded.ts';
import { ConferencePlaybackEndedEvent } from '../models/ConferencePlaybackEndedEvent.ts';
import { ConferencePlaybackEndedPayload } from '../models/ConferencePlaybackEndedPayload.ts';
import { ConferencePlaybackStarted } from '../models/ConferencePlaybackStarted.ts';
import { ConferencePlaybackStartedEvent } from '../models/ConferencePlaybackStartedEvent.ts';
import { ConferenceRecordingSaved } from '../models/ConferenceRecordingSaved.ts';
import { ConferenceRecordingSavedEvent } from '../models/ConferenceRecordingSavedEvent.ts';
import { ConferenceRecordingSavedPayload } from '../models/ConferenceRecordingSavedPayload.ts';
import { ConferenceResponse } from '../models/ConferenceResponse.ts';
import { ConferenceSpeakEnded } from '../models/ConferenceSpeakEnded.ts';
import { ConferenceSpeakEndedEvent } from '../models/ConferenceSpeakEndedEvent.ts';
import { ConferenceSpeakEndedPayload } from '../models/ConferenceSpeakEndedPayload.ts';
import { ConferenceSpeakRequest } from '../models/ConferenceSpeakRequest.ts';
import { ConferenceSpeakStarted } from '../models/ConferenceSpeakStarted.ts';
import { ConferenceSpeakStartedEvent } from '../models/ConferenceSpeakStartedEvent.ts';
import { ConferenceStopRequest } from '../models/ConferenceStopRequest.ts';
import { ConferenceUnholdRequest } from '../models/ConferenceUnholdRequest.ts';
import { ConferenceUnmuteRequest } from '../models/ConferenceUnmuteRequest.ts';
import { CreateConferenceRequest } from '../models/CreateConferenceRequest.ts';
import { CustomSipHeader } from '../models/CustomSipHeader.ts';
import { DialogflowConfig } from '../models/DialogflowConfig.ts';
import { Direction } from '../models/Direction.ts';
import { EnqueueRequest } from '../models/EnqueueRequest.ts';
import { ErrorSource } from '../models/ErrorSource.ts';
import { Errors } from '../models/Errors.ts';
import { Fax } from '../models/Fax.ts';
import { FaxDelivered } from '../models/FaxDelivered.ts';
import { FaxDeliveredPayload } from '../models/FaxDeliveredPayload.ts';
import { FaxFailed } from '../models/FaxFailed.ts';
import { FaxFailedPayload } from '../models/FaxFailedPayload.ts';
import { FaxMediaProcessed } from '../models/FaxMediaProcessed.ts';
import { FaxMediaProcessedPayload } from '../models/FaxMediaProcessedPayload.ts';
import { FaxQueued } from '../models/FaxQueued.ts';
import { FaxQueuedPayload } from '../models/FaxQueuedPayload.ts';
import { FaxSendingStarted } from '../models/FaxSendingStarted.ts';
import { FaxSendingStartedPayload } from '../models/FaxSendingStartedPayload.ts';
import { Feature } from '../models/Feature.ts';
import { GatherRequest } from '../models/GatherRequest.ts';
import { GatherUsingAudioRequest } from '../models/GatherUsingAudioRequest.ts';
import { GatherUsingSpeakRequest } from '../models/GatherUsingSpeakRequest.ts';
import { GenericError } from '../models/GenericError.ts';
import { GetFaxResponse } from '../models/GetFaxResponse.ts';
import { GetRecordingResponse } from '../models/GetRecordingResponse.ts';
import { HangupRequest } from '../models/HangupRequest.ts';
import { Http } from '../models/Http.ts';
import { HttpRequest } from '../models/HttpRequest.ts';
import { HttpResponse } from '../models/HttpResponse.ts';
import { InitiateCallRequest } from '../models/InitiateCallRequest.ts';
import { InitiateCallResult } from '../models/InitiateCallResult.ts';
import { JoinConferenceRequest } from '../models/JoinConferenceRequest.ts';
import { LeaveConferenceRequest } from '../models/LeaveConferenceRequest.ts';
import { LeaveQueueRequest } from '../models/LeaveQueueRequest.ts';
import { ListCallEventsResponse } from '../models/ListCallEventsResponse.ts';
import { ListConferencesResponse } from '../models/ListConferencesResponse.ts';
import { ListFaxesResponse } from '../models/ListFaxesResponse.ts';
import { ListOfMediaResourcesResponse } from '../models/ListOfMediaResourcesResponse.ts';
import { ListParticipantsResponse } from '../models/ListParticipantsResponse.ts';
import { ListQueueCallsResponse } from '../models/ListQueueCallsResponse.ts';
import { ListRecordingsResponse } from '../models/ListRecordingsResponse.ts';
import { Loopcount } from '../models/Loopcount.ts';
import { MediaRequestBody } from '../models/MediaRequestBody.ts';
import { MediaResource } from '../models/MediaResource.ts';
import { MediaResourceResponse } from '../models/MediaResourceResponse.ts';
import { MediaStorageDetailRecord } from '../models/MediaStorageDetailRecord.ts';
import { Meta } from '../models/Meta.ts';
import { Metadata } from '../models/Metadata.ts';
import { ModelError } from '../models/ModelError.ts';
import { PaginationMeta } from '../models/PaginationMeta.ts';
import { Participant } from '../models/Participant.ts';
import { ParticipantConference } from '../models/ParticipantConference.ts';
import { PauseConferenceRecordingRequest } from '../models/PauseConferenceRecordingRequest.ts';
import { PauseRecordingRequest } from '../models/PauseRecordingRequest.ts';
import { PlayAudioUrlRequest } from '../models/PlayAudioUrlRequest.ts';
import { PlaybackStopRequest } from '../models/PlaybackStopRequest.ts';
import { Quality } from '../models/Quality.ts';
import { Queue } from '../models/Queue.ts';
import { QueueCall } from '../models/QueueCall.ts';
import { QueueCallResponse } from '../models/QueueCallResponse.ts';
import { QueueResponse } from '../models/QueueResponse.ts';
import { RecordType } from '../models/RecordType.ts';
import { Recording } from '../models/Recording.ts';
import { RecordingCompleted } from '../models/RecordingCompleted.ts';
import { RecordingCompletedEvent } from '../models/RecordingCompletedEvent.ts';
import { RecordingCompletedPayload } from '../models/RecordingCompletedPayload.ts';
import { RecordingDownloadUrls } from '../models/RecordingDownloadUrls.ts';
import { RecordingResponse } from '../models/RecordingResponse.ts';
import { RecordingResponseData } from '../models/RecordingResponseData.ts';
import { RecordingResponseDataDownloadUrls } from '../models/RecordingResponseDataDownloadUrls.ts';
import { RecordingStarted } from '../models/RecordingStarted.ts';
import { RecordingStartedEvent } from '../models/RecordingStartedEvent.ts';
import { RecordingStartedPayload } from '../models/RecordingStartedPayload.ts';
import { ReferRequest } from '../models/ReferRequest.ts';
import { RefreshFaxResponse } from '../models/RefreshFaxResponse.ts';
import { RegisterCallCommandResult } from '../models/RegisterCallCommandResult.ts';
import { RegisterCallRequest } from '../models/RegisterCallRequest.ts';
import { RegisterCallResponse } from '../models/RegisterCallResponse.ts';
import { RejectRequest } from '../models/RejectRequest.ts';
import { ResumeConferenceRecordingRequest } from '../models/ResumeConferenceRecordingRequest.ts';
import { ResumeRecordingRequest } from '../models/ResumeRecordingRequest.ts';
import { RetrieveCallStatusResponse } from '../models/RetrieveCallStatusResponse.ts';
import { SendDTMFRequest } from '../models/SendDTMFRequest.ts';
import { SendFaxRequest } from '../models/SendFaxRequest.ts';
import { SipHeader } from '../models/SipHeader.ts';
import { SoundModifications } from '../models/SoundModifications.ts';
import { SpeakRequest } from '../models/SpeakRequest.ts';
import { StartConferenceRecordingRequest } from '../models/StartConferenceRecordingRequest.ts';
import { StartForkingRequest } from '../models/StartForkingRequest.ts';
import { StartRecordingRequest } from '../models/StartRecordingRequest.ts';
import { StartStreamingRequest } from '../models/StartStreamingRequest.ts';
import { StopForkingRequest } from '../models/StopForkingRequest.ts';
import { StopGatherRequest } from '../models/StopGatherRequest.ts';
import { StopRecordingRequest } from '../models/StopRecordingRequest.ts';
import { StopStreamingRequest } from '../models/StopStreamingRequest.ts';
import { SuccessfulResponseUponAcceptingCancelFaxCommand } from '../models/SuccessfulResponseUponAcceptingCancelFaxCommand.ts';
import { Transcription } from '../models/Transcription.ts';
import { TranscriptionEvent } from '../models/TranscriptionEvent.ts';
import { TranscriptionPayload } from '../models/TranscriptionPayload.ts';
import { TranscriptionPayloadTranscriptionData } from '../models/TranscriptionPayloadTranscriptionData.ts';
import { TranscriptionStartRequest } from '../models/TranscriptionStartRequest.ts';
import { TranscriptionStopRequest } from '../models/TranscriptionStopRequest.ts';
import { TransferCallRequest } from '../models/TransferCallRequest.ts';
import { UnauthorizedError } from '../models/UnauthorizedError.ts';
import { UnauthorizedErrorAllOf } from '../models/UnauthorizedErrorAllOf.ts';
import { UnauthorizedErrorAllOfMeta } from '../models/UnauthorizedErrorAllOfMeta.ts';
import { UnexpectedError } from '../models/UnexpectedError.ts';
import { UnexpectedErrorAllOf } from '../models/UnexpectedErrorAllOf.ts';
import { UnexpectedErrorAllOfMeta } from '../models/UnexpectedErrorAllOfMeta.ts';
import { UnprocessableEntityError } from '../models/UnprocessableEntityError.ts';
import { UnprocessableEntityErrorAllOf } from '../models/UnprocessableEntityErrorAllOf.ts';
import { UnprocessableEntityErrorAllOfMeta } from '../models/UnprocessableEntityErrorAllOfMeta.ts';
import { UnprocessableEntityErrorAllOfSource } from '../models/UnprocessableEntityErrorAllOfSource.ts';
import { UpdateConferenceRequest } from '../models/UpdateConferenceRequest.ts';
import { UpdateMediaRequest } from '../models/UpdateMediaRequest.ts';
import { UploadMedia } from '../models/UploadMedia.ts';
import { UploadMediaRequest } from '../models/UploadMediaRequest.ts';
import { ObservableCallCommandsApi } from './ObservableAPI.ts';

import { CallCommandsApiRequestFactory, CallCommandsApiResponseProcessor} from "../apis/CallCommandsApi.ts";
export class PromiseCallCommandsApi {
    private api: ObservableCallCommandsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CallCommandsApiRequestFactory,
        responseProcessor?: CallCommandsApiResponseProcessor
    ) {
        this.api = new ObservableCallCommandsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Answer an incoming call. You must issue this command before executing subsequent commands on an incoming call.  **Expected Webhooks:**  - `call.answered` - `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url` was set 
     * Answer call
     * @param callControlId Unique identifier and token for controlling the call
     * @param answerRequest Answer call request
     */
    public callAnswer(callControlId: string, answerRequest: AnswerRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callAnswer(callControlId, answerRequest, _options);
        return result.toPromise();
    }

    /**
     * Bridge two call control calls.  **Expected Webhooks:**  - `call.bridged` for Leg A - `call.bridged` for Leg B 
     * Bridge calls
     * @param callControlId Unique identifier and token for controlling the call
     * @param bridgeRequest Bridge call request
     */
    public callBridge(callControlId: string, bridgeRequest: BridgeRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callBridge(callControlId, bridgeRequest, _options);
        return result.toPromise();
    }

    /**
     * Dial a number or SIP URI from a given connection. A successful response will include a `call_leg_id` which can be used to correlate the command with subsequent webhooks.  **Expected Webhooks:**  - `call.initiated` - `call.answered` or `call.hangup` - `call.machine.detection.ended` if `answering_machine_detection` was requested - `call.machine.greeting.ended` if `answering_machine_detection` was requested to detect the end of machine greeting - `call.machine.premium.detection.ended` if `answering_machine_detection=premium` was requested - `call.machine.premium.greeting.ended` if `answering_machine_detection=premium` was requested and a beep was detected - `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url` was set 
     * Dial
     * @param callRequest Call request
     */
    public callDial(callRequest: CallRequest, _options?: Configuration): Promise<RetrieveCallStatusResponse> {
        const result = this.api.callDial(callRequest, _options);
        return result.toPromise();
    }

    /**
     * Put the call in a queue.
     * Enqueue call
     * @param callControlId Unique identifier and token for controlling the call
     * @param enqueueRequest Enqueue call request
     */
    public callEnqueue(callControlId: string, enqueueRequest: EnqueueRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callEnqueue(callControlId, enqueueRequest, _options);
        return result.toPromise();
    }

    /**
     * Call forking allows you to stream the media from a call to a specific target in realtime.  This stream can be used to enable realtime audio analysis to support a  variety of use cases, including fraud detection, or the creation of AI-generated audio responses.  Requests must specify either the `target` attribute or the `rx` and `tx` attributes.  **Expected Webhooks:**  - `call.fork.started` - `call.fork.stopped`  **Simple Telnyx RTP Encapsulation Protocol (STREP)**  *Note: This header/encapsulation is not used when the `rx` and `tx` parameters have been specified; it only applies when media is forked using the `target` attribute.*  If the destination for forked media is specified using the \"target\" attribute, the RTP will be encapsulated in an extra Telnyx protocol, which adds a 24 byte header to the RTP payload in each packet. The STREP header includes the Call Control `call_leg_id` for stream identification, along with bits that represent the direction (inbound or outbound) of the media. This 24-byte header sits between the UDP header and the RTP header.  The STREP header makes it possible to fork RTP for multiple calls (or two RTP streams for the same call) to the same IP:port, where the streams can be demultiplexed by your application using the information in the header. Of course, it\'s still possible to ignore this header completely, for example, if sending forked media for different calls to different ports or IP addresses. In this case, simply strip 24 bytes (or use the second byte to find the header length) from the received UDP payload to get the RTP (RTP header and payload).  ``` STREP Specification    0                   1                   2                   3   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  |1 1|Version|L|D|    HeaderLen  |  reserved (2 bytes)           |  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  |       reserved (4 bytes, for UDP ports or anything else)      |  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  |               The call_leg_id                                 |  |                   from Call Control                           |  |                       (128 bits / 16 bytes)                   |  |                           (this is binary data)               |  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+   11    Static bits 11, always set to 11 to easily distinguish forked media    from RTP (10) and T.38 media (usually 00) and SIP (which begins    with a capital letter, so begins with bits 01). This is a magic number.   Version    Four bits to indicate the version number of the protocol, starting at 0001.   L    One bit to represent the leg of the call (A or B).    0 represents the A (first) leg of the call.    1 represents the B (second) leg of the call.   D    One bit to represent the direction of this RTP stream.    0 represents media received by Telnyx.    1 represents media transmitted by Telnyx.   HeaderLen (1 byte)    The length of the header in bytes.    Note that this value does not include the length of the payload. The total    size of the RTP can be calculated by subtracting the HeaderLen from the UDP    length (minus 8 for the UDP header).    In version 1, this value will always be 24.   Reserved (6 bytes)    Reserved for future use and to make sure that the header is a multiple of 32 bits   Call Leg ID    A 128-bit identifier for the call leg.    This is the call_leg_id from Call Control. ``` 
     * Forking start
     * @param callControlId Unique identifier and token for controlling the call
     * @param startForkingRequest Fork media request
     */
    public callForkStart(callControlId: string, startForkingRequest: StartForkingRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callForkStart(callControlId, startForkingRequest, _options);
        return result.toPromise();
    }

    /**
     * Stop forking a call.  **Expected Webhooks:**  - `call.fork.stopped` 
     * Forking stop
     * @param callControlId Unique identifier and token for controlling the call
     * @param stopForkingRequest Stop forking media request
     */
    public callForkStop(callControlId: string, stopForkingRequest: StopForkingRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callForkStop(callControlId, stopForkingRequest, _options);
        return result.toPromise();
    }

    /**
     * Gather DTMF signals to build interactive menus.  You can pass a list of valid digits. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather` command.  **Expected Webhooks:**  - `call.dtmf.received` (you may receive many of these webhooks) - `call.gather.ended` 
     * Gather
     * @param callControlId Unique identifier and token for controlling the call
     * @param gatherRequest Gather
     */
    public callGather(callControlId: string, gatherRequest: GatherRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callGather(callControlId, gatherRequest, _options);
        return result.toPromise();
    }

    /**
     * Stop current gather.  **Expected Webhooks:**  - `call.gather.ended` 
     * Gather stop
     * @param callControlId Unique identifier and token for controlling the call
     * @param stopGatherRequest Stop current gather
     */
    public callGatherStop(callControlId: string, stopGatherRequest: StopGatherRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callGatherStop(callControlId, stopGatherRequest, _options);
        return result.toPromise();
    }

    /**
     * Play an audio file on the call until the required DTMF signals are gathered to build interactive menus.  You can pass a list of valid digits along with an \'invalid_audio_url\', which will be played back at the beginning of each prompt. Playback will be interrupted when a DTMF signal is received. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather_using_audio` command.  **Expected Webhooks:**  - `call.playback.started` - `call.playback.ended` - `call.dtmf.received` (you may receive many of these webhooks) - `call.gather.ended` 
     * Gather using audio
     * @param callControlId Unique identifier and token for controlling the call
     * @param gatherUsingAudioRequest Gather using audio request
     */
    public callGatherUsingAudio(callControlId: string, gatherUsingAudioRequest: GatherUsingAudioRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callGatherUsingAudio(callControlId, gatherUsingAudioRequest, _options);
        return result.toPromise();
    }

    /**
     * Convert text to speech and play it on the call until the required DTMF signals are gathered to build interactive menus.  You can pass a list of valid digits along with an \'invalid_payload\', which will be played back at the beginning of each prompt. Speech will be interrupted when a DTMF signal is received. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather_using_speak` command.  **Expected Webhooks:**  - `call.dtmf.received` (you may receive many of these webhooks) - `call.gather.ended` 
     * Gather using speak
     * @param callControlId Unique identifier and token for controlling the call
     * @param gatherUsingSpeakRequest Gather using speak request
     */
    public callGatherUsingSpeak(callControlId: string, gatherUsingSpeakRequest: GatherUsingSpeakRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callGatherUsingSpeak(callControlId, gatherUsingSpeakRequest, _options);
        return result.toPromise();
    }

    /**
     * Hang up the call.  **Expected Webhooks:**  - `call.hangup` - `call.recording.saved` 
     * Hangup call
     * @param callControlId Unique identifier and token for controlling the call
     * @param hangupRequest Hangup request
     */
    public callHangup(callControlId: string, hangupRequest: HangupRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callHangup(callControlId, hangupRequest, _options);
        return result.toPromise();
    }

    /**
     * Play an audio file on the call. If multiple play audio commands are issued consecutively, the audio files will be placed in a queue awaiting playback.  *Notes:*  - When `overlay` is enabled, `target_legs` is limited to `self`. - A customer cannot Play Audio with `overlay=true` unless there is a Play Audio with `overlay=false` actively playing.  **Expected Webhooks:**  - `call.playback.started` - `call.playback.ended` 
     * Play audio URL
     * @param callControlId Unique identifier and token for controlling the call
     * @param playAudioUrlRequest Play audio URL request
     */
    public callPlaybackStart(callControlId: string, playAudioUrlRequest: PlayAudioUrlRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callPlaybackStart(callControlId, playAudioUrlRequest, _options);
        return result.toPromise();
    }

    /**
     * Stop audio being played on the call.  **Expected Webhooks:**  - `call.playback.ended` or `call.speak.ended` 
     * Stop audio playback
     * @param callControlId Unique identifier and token for controlling the call
     * @param playbackStopRequest Stop audio playback request
     */
    public callPlaybackStop(callControlId: string, playbackStopRequest: PlaybackStopRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callPlaybackStop(callControlId, playbackStopRequest, _options);
        return result.toPromise();
    }

    /**
     * Pause recording the call. Recording can be resumed via Resume recording command.  **Expected Webhooks:**  There are no webhooks associated with this command. 
     * Record pause
     * @param callControlId Unique identifier and token for controlling the call
     * @param pauseRecordingRequest Pause recording call request
     */
    public callRecordPause(callControlId: string, pauseRecordingRequest: PauseRecordingRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callRecordPause(callControlId, pauseRecordingRequest, _options);
        return result.toPromise();
    }

    /**
     * Resume recording the call.  **Expected Webhooks:**  There are no webhooks associated with this command. 
     * Record resume
     * @param callControlId Unique identifier and token for controlling the call
     * @param resumeRecordingRequest Resume recording call request
     */
    public callRecordResume(callControlId: string, resumeRecordingRequest: ResumeRecordingRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callRecordResume(callControlId, resumeRecordingRequest, _options);
        return result.toPromise();
    }

    /**
     * Start recording the call. Recording will stop on call hang-up, or can be initiated via the Stop Recording command.  **Expected Webhooks:**  - `call.recording.saved` 
     * Recording start
     * @param callControlId Unique identifier and token for controlling the call
     * @param startRecordingRequest Start recording audio request
     */
    public callRecordStart(callControlId: string, startRecordingRequest: StartRecordingRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callRecordStart(callControlId, startRecordingRequest, _options);
        return result.toPromise();
    }

    /**
     * Stop recording the call.  **Expected Webhooks:**  - `call.recording.saved` 
     * Recording stop
     * @param callControlId Unique identifier and token for controlling the call
     * @param stopRecordingRequest Stop recording call request
     */
    public callRecordStop(callControlId: string, stopRecordingRequest: StopRecordingRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callRecordStop(callControlId, stopRecordingRequest, _options);
        return result.toPromise();
    }

    /**
     * Initiate a SIP Refer on a Call Control call. You can initiate a SIP Refer at any point in the duration of a call.  **Expected Webhooks:**  - `call.refer.started` - `call.refer.completed` - `call.refer.failed` 
     * SIP Refer a call
     * @param callControlId Unique identifier and token for controlling the call
     * @param referRequest Refer request
     */
    public callRefer(callControlId: string, referRequest: ReferRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callRefer(callControlId, referRequest, _options);
        return result.toPromise();
    }

    /**
     * Reject an incoming call.  **Expected Webhooks:**  - `call.hangup` 
     * Reject a call
     * @param callControlId Unique identifier and token for controlling the call
     * @param rejectRequest Reject request
     */
    public callReject(callControlId: string, rejectRequest: RejectRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callReject(callControlId, rejectRequest, _options);
        return result.toPromise();
    }

    /**
     * Sends DTMF tones from this leg. DTMF tones will be heard by the other end of the call.  **Expected Webhooks:**  There are no webhooks associated with this command. 
     * Send DTMF
     * @param callControlId Unique identifier and token for controlling the call
     * @param sendDTMFRequest Send DTMF request
     */
    public callSendDTMF(callControlId: string, sendDTMFRequest: SendDTMFRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callSendDTMF(callControlId, sendDTMFRequest, _options);
        return result.toPromise();
    }

    /**
     * Convert text to speech and play it back on the call. If multiple speak text commands are issued consecutively, the audio files will be placed in a queue awaiting playback.  **Expected Webhooks:**  - `call.speak.started` - `call.speak.ended` 
     * Speak text
     * @param callControlId Unique identifier and token for controlling the call
     * @param speakRequest Speak request
     */
    public callSpeak(callControlId: string, speakRequest: SpeakRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callSpeak(callControlId, speakRequest, _options);
        return result.toPromise();
    }

    /**
     * Start streaming the media from a call to a specific WebSocket address or Dialogflow connection in near-realtime. Audio will be delivered as base64-encoded RTP payload (raw audio), wrapped in JSON payloads.   **Example: Starting a stream to a Websocket address**   The `stream_url` param is mandatory.  ``` curl -X POST \\    --header \"Content-Type: application/json\" \\    --header \"Accept: application/json\" \\    --header \"Authorization: Bearer YOUR_API_KEY\" \\    --data \'{  \"stream_url\": \"wss://www.example.com/websocket\",\\  \"client_state\":\"aGF2ZSBhIG5pY2UgZGF5ID1d\",\\  \"command_id\":\"891510ac-f3e4-11e8-af5b-de00688a4901\" \\  }\' \\    https://api.telnyx.com/v2/calls/{call_control_id}/actions/streaming_start  ```    **Example: Starting a stream to a Dialogflow connection**    Enable the Dialogflow integration by sending `\"enable_dialogflow\": true` in the request. You need to have a Dialogflow connection associated with your Call Control application first, [click here for instructions](https://developers.telnyx.com/docs/v2/call-control/tutorials/dialogflow-es). ``` curl -X POST \\    --header \"Content-Type: application/json\" \\    --header \"Accept: application/json\" \\    --header \"Authorization: Bearer YOUR_API_KEY\" \\    --data \'{  \"client_state\":\"aGF2ZSBhIG5pY2UgZGF5ID1d\", \\  \"command_id\":\"891510ac-f3e4-11e8-af5b-de00688a4901\", \\  \"enable_dialogflow\": true \\  }\' \\    https://api.telnyx.com/v2/calls/{call_control_id}/actions/streaming_start  ```  **Expected Webhooks:**  - `streaming.started` - `streaming.stopped` - `streaming.failed`  **WebSocket events**  When the WebSocket connection is established, the following event is being sent over it: ``` {   \"event\": \"connected\",   \"version\": \"1.0.0\" } ``` And when the call is started, an event which contains information about the encoding and `stream_id` that identifies a particular stream: ``` {   \"event\": \"start\",   \"sequence_number\": \"1\",   \"start\": {     \"user_id\": \"3e6f995f-85f7-4705-9741-53b116d28237\",     \"call_control_id\": \"v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg\",      \"client_state\": \"aGF2ZSBhIG5pY2UgZGF5ID1d\",     \"media_format\": {       \"encoding\": \"audio/x-mulaw\",       \"sample_rate\": 8000,       \"channels\": 1     }   },   \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\" } ``` The start event is followed by the following media events that contain base64-encoded RTP payload (raw audio, no RTP headers) (: ``` {    \"event\": \"media\",   \"sequence_number\": \"4\",   \"media\": {      \"track\": \"inbound/outbound\",      \"chunk\": \"2\",     \"timestamp\": \"5\",     \"payload\": \"no+JhoaJjpzSHxAKBgYJD...IsSbjomGhoqQn1Ic\"    },   \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\"  } ``` Please note that the order of events is not guaranteed and the chunk number can be used to reorder the events.  When the call ends, the stop event over WebSockets connection is sent: ``` {    \"event\": \"stop\",   \"sequence_number\": \"5\",   \"stop\": {     \"user_id\": \"3e6f995f-85f7-4705-9741-53b116d28237\",     \"call_control_id\": \"v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQ\"    },     \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\"   } ```  **Bidirectional Media Streaming**  Media can be sent back to the call through the websocket as well. This is done in a way very similar to the [playback_start](https://developers.telnyx.com/docs/api/v2/call-control/Call-Commands#callPlaybackStart) command, when using a base64 encoded mp3 file in the payload. Simply send a packet to the websocket connection as follows:  ``` {   \"event\": \"media\",   \"media\": {     \"payload\" : <your base64 encoded mp3 file>   } } ```  The payload, which is a base64-encoded mp3 file, will be played on the call.  Some limitations to be aware of:  - Media payloads can only be submitted once per second. - Media _must_ be base64 encoded mp3  **Stream Errors**  Any errors in the media packet, including when a rate limit is reached, will result in an error frame being sent to your websocket server. The error frame will appear as follows:  ``` {   \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\",   \"event\": \"error\",   \"sequence_number\": \"6\",   \"error\": {     \"title\": \"rate_limit_reached\",     \"code\": \"100005\",     \"detail\": \"Too many requests\"   } } ```  Possible errors are as follows:  - Error 100002: `\"unknown_error\"` - Error 100003: `\"malformed_frame\"` - Error 100004: `\"invalid_media\"` - Error 100005: `\"rate_limit_reached\"` 
     * Streaming start
     * @param callControlId Unique identifier and token for controlling the call
     * @param startStreamingRequest Start streaming media request
     */
    public callStreamingStart(callControlId: string, startStreamingRequest: StartStreamingRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callStreamingStart(callControlId, startStreamingRequest, _options);
        return result.toPromise();
    }

    /**
     * Stop streaming a call to a WebSocket.  **Expected Webhooks:**  - `streaming.stopped` 
     * Streaming stop
     * @param callControlId Unique identifier and token for controlling the call
     * @param stopStreamingRequest Stop streaming media request
     */
    public callStreamingStop(callControlId: string, stopStreamingRequest: StopStreamingRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callStreamingStop(callControlId, stopStreamingRequest, _options);
        return result.toPromise();
    }

    /**
     * Start real-time transcription. Transcription will stop on call hang-up, or can be initiated via the Transcription stop command.  **Expected Webhooks:**  - `call.transcription` 
     * Transcription start
     * @param callControlId Unique identifier and token for controlling the call
     * @param transcriptionStartRequest Transcription start request
     */
    public callTranscriptionStart(callControlId: string, transcriptionStartRequest: TranscriptionStartRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callTranscriptionStart(callControlId, transcriptionStartRequest, _options);
        return result.toPromise();
    }

    /**
     * Stop real-time transcription.
     * Transcription stop
     * @param callControlId Unique identifier and token for controlling the call
     * @param transcriptionStopRequest Transcription stop request
     */
    public callTranscriptionStop(callControlId: string, transcriptionStopRequest: TranscriptionStopRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callTranscriptionStop(callControlId, transcriptionStopRequest, _options);
        return result.toPromise();
    }

    /**
     * Transfer a call to a new destination. If the transfer is unsuccessful, a `call.hangup` webhook for the other call (Leg B) will be sent indicating that the transfer could not be completed. The original call will remain active and may be issued additional commands, potentially transfering the call to an alternate destination.  **Expected Webhooks:**  - `call.initiated` - `call.bridged` to Leg B - `call.answered` or `call.hangup` - `call.machine.detection.ended` if `answering_machine_detection` was requested - `call.machine.greeting.ended` if `answering_machine_detection` was requested to detect the end of machine greeting - `call.machine.premium.detection.ended` if `answering_machine_detection=premium` was requested - `call.machine.premium.greeting.ended` if `answering_machine_detection=premium` was requested and a beep was detected 
     * Transfer call
     * @param callControlId Unique identifier and token for controlling the call
     * @param transferCallRequest Transfer call request
     */
    public callTransfer(callControlId: string, transferCallRequest: TransferCallRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.callTransfer(callControlId, transferCallRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates client state
     * Update client state
     * @param callControlId Unique identifier and token for controlling the call
     * @param clientStateUpdateRequest Updates client state for every subsequent webhook
     */
    public clientStateUpdate(callControlId: string, clientStateUpdateRequest: ClientStateUpdateRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.clientStateUpdate(callControlId, clientStateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes the call from a queue.
     * Remove call from a queue
     * @param callControlId Unique identifier and token for controlling the call
     * @param leaveQueueRequest Removes the call from the queue, the call currently is enqueued in.
     */
    public leaveQueue(callControlId: string, leaveQueueRequest: LeaveQueueRequest, _options?: Configuration): Promise<CallControlCommandResponse> {
        const result = this.api.leaveQueue(callControlId, leaveQueueRequest, _options);
        return result.toPromise();
    }


}



import { ObservableCallInformationApi } from './ObservableAPI.ts';

import { CallInformationApiRequestFactory, CallInformationApiResponseProcessor} from "../apis/CallInformationApi.ts";
export class PromiseCallInformationApi {
    private api: ObservableCallInformationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CallInformationApiRequestFactory,
        responseProcessor?: CallInformationApiResponseProcessor
    ) {
        this.api = new ObservableCallInformationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the status of a call (data is available 10 minutes after call ended).
     * Retrieve a call status
     * @param callControlId Unique identifier and token for controlling the call
     */
    public retrieveCallStatus(callControlId: string, _options?: Configuration): Promise<RetrieveCallStatusResponse> {
        const result = this.api.retrieveCallStatus(callControlId, _options);
        return result.toPromise();
    }


}



import { ObservableCallRecordingsApi } from './ObservableAPI.ts';

import { CallRecordingsApiRequestFactory, CallRecordingsApiResponseProcessor} from "../apis/CallRecordingsApi.ts";
export class PromiseCallRecordingsApi {
    private api: ObservableCallRecordingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CallRecordingsApiRequestFactory,
        responseProcessor?: CallRecordingsApiResponseProcessor
    ) {
        this.api = new ObservableCallRecordingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Permanently deletes a call recording.
     * Delete a call recording
     * @param recordingId Uniquely identifies the recording by id.
     */
    public deleteRecording(recordingId: string, _options?: Configuration): Promise<RecordingResponse> {
        const result = this.api.deleteRecording(recordingId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing call recording.
     * Retrieve call recording
     * @param recordingId Uniquely identifies the recording by id.
     */
    public getRecording(recordingId: string, _options?: Configuration): Promise<RecordingResponse> {
        const result = this.api.getRecording(recordingId, _options);
        return result.toPromise();
    }


}



import { ObservableConferenceCommandsApi } from './ObservableAPI.ts';

import { ConferenceCommandsApiRequestFactory, ConferenceCommandsApiResponseProcessor} from "../apis/ConferenceCommandsApi.ts";
export class PromiseConferenceCommandsApi {
    private api: ObservableConferenceCommandsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConferenceCommandsApiRequestFactory,
        responseProcessor?: ConferenceCommandsApiResponseProcessor
    ) {
        this.api = new ObservableConferenceCommandsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Dials a phone number and, when the call is answered, automatically joins them into the specified conference.  **Expected Webhooks:**  - `call.hangup` - `call.answered` - `conference.participant.joined` - `conference.participant.left` 
     * Dial a new participant into a conference
     * @param id Uniquely identifies the conference by id or name
     * @param conferenceCallRequest Dial Into Conference request object
     */
    public conferenceDialParticipantIn(id: string, conferenceCallRequest: ConferenceCallRequest, _options?: Configuration): Promise<ConferenceCommandResponse> {
        const result = this.api.conferenceDialParticipantIn(id, conferenceCallRequest, _options);
        return result.toPromise();
    }

    /**
     * Hold a list of participants in a conference call
     * Hold conference participants
     * @param id Uniquely identifies the conference by id or name
     * @param conferenceHoldRequest 
     */
    public conferenceHoldParticipants(id: string, conferenceHoldRequest: ConferenceHoldRequest, _options?: Configuration): Promise<ConferenceCommandResponse> {
        const result = this.api.conferenceHoldParticipants(id, conferenceHoldRequest, _options);
        return result.toPromise();
    }

    /**
     * Join an existing call leg to a conference. Issue the Join Conference command with the conference ID in the path and the `call_control_id` of the leg you wish to join to the conference as an attribute. The conference can have up to a certain amount of active participants, as set by the `max_participants` parameter in conference creation request.   **Expected Webhooks:**  - `conference.participant.joined` - `conference.participant.left` 
     * Join a conference
     * @param id Uniquely identifies the conference by id or name
     * @param joinConferenceRequest Join Conference request object
     */
    public conferenceJoin(id: string, joinConferenceRequest: JoinConferenceRequest, _options?: Configuration): Promise<ConferenceCommandResponse> {
        const result = this.api.conferenceJoin(id, joinConferenceRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes a call leg from a conference and moves it back to parked state. **Expected Webhooks:**  - `conference.participant.left` 
     * Leave a conference
     * @param id Uniquely identifies the conference by id or name
     * @param leaveConferenceRequest Leave Conference request object
     */
    public conferenceLeave(id: string, leaveConferenceRequest: LeaveConferenceRequest, _options?: Configuration): Promise<ConferenceCommandResponse> {
        const result = this.api.conferenceLeave(id, leaveConferenceRequest, _options);
        return result.toPromise();
    }

    /**
     * Mute a list of participants in a conference call
     * Mute conference participants
     * @param id Uniquely identifies the conference by id or name
     * @param conferenceMuteRequest 
     */
    public conferenceMuteParticipants(id: string, conferenceMuteRequest: ConferenceMuteRequest, _options?: Configuration): Promise<ConferenceCommandResponse> {
        const result = this.api.conferenceMuteParticipants(id, conferenceMuteRequest, _options);
        return result.toPromise();
    }

    /**
     * Pause conference recording.
     * Conference recording pause
     * @param id Specifies the conference by id or name
     * @param pauseConferenceRecordingRequest 
     */
    public conferencePauseRecording(id: string, pauseConferenceRecordingRequest: PauseConferenceRecordingRequest, _options?: Configuration): Promise<ConferenceCommandResponse> {
        const result = this.api.conferencePauseRecording(id, pauseConferenceRecordingRequest, _options);
        return result.toPromise();
    }

    /**
     * Play audio to all or some participants on a conference call.
     * Play audio to conference participants
     * @param id Uniquely identifies the conference by id or name
     * @param conferencePlayRequest 
     */
    public conferencePlayAudio(id: string, conferencePlayRequest: ConferencePlayRequest, _options?: Configuration): Promise<ConferenceCommandResponse> {
        const result = this.api.conferencePlayAudio(id, conferencePlayRequest, _options);
        return result.toPromise();
    }

    /**
     * Resume conference recording.
     * Conference recording resume
     * @param id Specifies the conference by id or name
     * @param resumeConferenceRecordingRequest 
     */
    public conferenceResumeRecording(id: string, resumeConferenceRecordingRequest: ResumeConferenceRecordingRequest, _options?: Configuration): Promise<ConferenceCommandResponse> {
        const result = this.api.conferenceResumeRecording(id, resumeConferenceRecordingRequest, _options);
        return result.toPromise();
    }

    /**
     * Convert text to speech and play it to all or some participants.
     * Speak text to conference participants
     * @param id Specifies the conference by id or name
     * @param conferenceSpeakRequest 
     */
    public conferenceSpeakText(id: string, conferenceSpeakRequest: ConferenceSpeakRequest, _options?: Configuration): Promise<ConferenceCommandResponse> {
        const result = this.api.conferenceSpeakText(id, conferenceSpeakRequest, _options);
        return result.toPromise();
    }

    /**
     * Start recording the conference. Recording will stop on conference end, or via the Stop Recording command.  **Expected Webhooks:**  - `conference.recording.saved`
     * Conference recording start
     * @param id Specifies the conference to record by id or name
     * @param startConferenceRecordingRequest 
     */
    public conferenceStartRecording(id: string, startConferenceRecordingRequest: StartConferenceRecordingRequest, _options?: Configuration): Promise<ConferenceCommandResponse> {
        const result = this.api.conferenceStartRecording(id, startConferenceRecordingRequest, _options);
        return result.toPromise();
    }

    /**
     * Stop audio being played to all or some participants on a conference call.
     * Stop audio being played on the conference
     * @param id Uniquely identifies the conference by id or name
     * @param conferenceStopRequest 
     */
    public conferenceStopAudio(id: string, conferenceStopRequest: ConferenceStopRequest, _options?: Configuration): Promise<ConferenceCommandResponse> {
        const result = this.api.conferenceStopAudio(id, conferenceStopRequest, _options);
        return result.toPromise();
    }

    /**
     * Stop recording the conference.  **Expected Webhooks:**  - `conference.recording.saved` 
     * Conference recording stop
     * @param id Specifies the conference to stop the recording for by id or name
     * @param stopRecordingRequest Stop recording conference request
     */
    public conferenceStopRecording(id: string, stopRecordingRequest: StopRecordingRequest, _options?: Configuration): Promise<ConferenceCommandResponse> {
        const result = this.api.conferenceStopRecording(id, stopRecordingRequest, _options);
        return result.toPromise();
    }

    /**
     * Unhold a list of participants in a conference call
     * Unhold conference participants
     * @param id Uniquely identifies the conference by id or name
     * @param conferenceUnholdRequest 
     */
    public conferenceUnholdParticipants(id: string, conferenceUnholdRequest: ConferenceUnholdRequest, _options?: Configuration): Promise<ConferenceCommandResponse> {
        const result = this.api.conferenceUnholdParticipants(id, conferenceUnholdRequest, _options);
        return result.toPromise();
    }

    /**
     * Unmute a list of participants in a conference call
     * Unmute conference participants
     * @param id Uniquely identifies the conference by id or name
     * @param conferenceUnmuteRequest 
     */
    public conferenceUnmuteParticipants(id: string, conferenceUnmuteRequest: ConferenceUnmuteRequest, _options?: Configuration): Promise<ConferenceCommandResponse> {
        const result = this.api.conferenceUnmuteParticipants(id, conferenceUnmuteRequest, _options);
        return result.toPromise();
    }

    /**
     * Update conference participant supervisor_role
     * Update conference participant
     * @param id Uniquely identifies the conference by id or name
     * @param updateConferenceRequest Update Conference request object
     */
    public conferenceUpdate(id: string, updateConferenceRequest: UpdateConferenceRequest, _options?: Configuration): Promise<ConferenceCommandResponse> {
        const result = this.api.conferenceUpdate(id, updateConferenceRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a conference from an existing call leg using a `call_control_id` and a conference name. Upon creating the conference, the call will be automatically bridged to the conference. Conferences will expire after all participants have left the conference or after 4 hours regardless of the number of active participants.  **Expected Webhooks:**  - `conference.created` - `conference.participant.joined` - `conference.participant.left` - `conference.ended` - `conference.recording.saved` - `conference.floor.changed` 
     * Create conference
     * @param createConferenceRequest Create a conference
     */
    public createConference(createConferenceRequest: CreateConferenceRequest, _options?: Configuration): Promise<ConferenceResponse> {
        const result = this.api.createConference(createConferenceRequest, _options);
        return result.toPromise();
    }

    /**
     * Lists conference participants
     * List conference participants
     * @param conferenceId Uniquely identifies the conference by id
     * @param filterMuted If present, participants will be filtered to those who are/are not muted
     * @param filterOnHold If present, participants will be filtered to those who are/are not put on hold
     * @param filterWhispering If present, participants will be filtered to those who are whispering or are not
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listConferenceParticipants(conferenceId: string, filterMuted?: boolean, filterOnHold?: boolean, filterWhispering?: boolean, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListParticipantsResponse> {
        const result = this.api.listConferenceParticipants(conferenceId, filterMuted, filterOnHold, filterWhispering, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Lists conferences. Conferences are created on demand, and will expire after all participants have left the conference or after 4 hours regardless of the number of active participants. Conferences are listed in descending order by `expires_at`.
     * List conferences
     * @param filterName If present, conferences will be filtered to those with a matching &#x60;name&#x60; attribute. Matching is case-sensitive
     * @param filterStatus If present, conferences will be filtered by status.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listConferences(filterName?: string, filterStatus?: 'init' | 'in_progress' | 'completed', pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListConferencesResponse> {
        const result = this.api.listConferences(filterName, filterStatus, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Retrieve an existing conference
     * Retrieve a conference
     * @param id Uniquely identifies the conference by id
     */
    public retrieveConference(id: string, _options?: Configuration): Promise<ConferenceResponse> {
        const result = this.api.retrieveConference(id, _options);
        return result.toPromise();
    }


}



import { ObservableDebuggingApi } from './ObservableAPI.ts';

import { DebuggingApiRequestFactory, DebuggingApiResponseProcessor} from "../apis/DebuggingApi.ts";
export class PromiseDebuggingApi {
    private api: ObservableDebuggingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DebuggingApiRequestFactory,
        responseProcessor?: DebuggingApiResponseProcessor
    ) {
        this.api = new ObservableDebuggingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Filters call events by given filter parameters. Events are ordered by `event_timestamp`. If filter for `call_leg_id` or `call_session_id` is not present, it only filters events from the last 24 hours.  **Note**: Only one `filter[event_timestamp]` can be passed. 
     * List call events
     * @param filterCallLegId The unique identifier of an individual call leg.
     * @param filterCallSessionId The unique identifier of the call control session. A session may include multiple call leg events.
     * @param filterStatus Event status
     * @param filterType Event type
     * @param filterEventTimestampGt Event timestamp: greater than
     * @param filterEventTimestampGte Event timestamp: greater than or equal
     * @param filterEventTimestampLt Event timestamp: lower than
     * @param filterEventTimestampLte Event timestamp: lower than or equal
     * @param filterEventTimestampEq Event timestamp: equal
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listCallEvents(filterCallLegId?: string, filterCallSessionId?: string, filterStatus?: 'delivered' | 'failed', filterType?: 'command' | 'webhook', filterEventTimestampGt?: string, filterEventTimestampGte?: string, filterEventTimestampLt?: string, filterEventTimestampLte?: string, filterEventTimestampEq?: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListCallEventsResponse> {
        const result = this.api.listCallEvents(filterCallLegId, filterCallSessionId, filterStatus, filterType, filterEventTimestampGt, filterEventTimestampGte, filterEventTimestampLt, filterEventTimestampLte, filterEventTimestampEq, pageNumber, pageSize, _options);
        return result.toPromise();
    }


}



import { ObservableMediaStorageAPIApi } from './ObservableAPI.ts';

import { MediaStorageAPIApiRequestFactory, MediaStorageAPIApiResponseProcessor} from "../apis/MediaStorageAPIApi.ts";
export class PromiseMediaStorageAPIApi {
    private api: ObservableMediaStorageAPIApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MediaStorageAPIApiRequestFactory,
        responseProcessor?: MediaStorageAPIApiResponseProcessor
    ) {
        this.api = new ObservableMediaStorageAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload media file to Telnyx so it can be used with other Telnyx services
     * Upload media
     * @param uploadMediaRequest Upload media request
     */
    public createMediaStorage(uploadMediaRequest: UploadMediaRequest, _options?: Configuration): Promise<MediaResourceResponse> {
        const result = this.api.createMediaStorage(uploadMediaRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes a stored media file.
     * Deletes stored media
     * @param mediaName Uniquely identifies a media resource.
     */
    public deleteMediaStorage(mediaName: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteMediaStorage(mediaName, _options);
        return result.toPromise();
    }

    /**
     * Downloads a stored media file.
     * Download stored media
     * @param mediaName Uniquely identifies a media resource.
     */
    public downloadMediaStorage(mediaName: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.downloadMediaStorage(mediaName, _options);
        return result.toPromise();
    }

    /**
     * Returns the information about a stored media file.
     * Retrieve stored media
     * @param mediaName Uniquely identifies a media resource.
     */
    public getMediaStorage(mediaName: string, _options?: Configuration): Promise<MediaResourceResponse> {
        const result = this.api.getMediaStorage(mediaName, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of stored media files.
     * List uploaded media
     * @param filterContentType Filters files by given content types
     */
    public listMediaStorage(filterContentType?: string, _options?: Configuration): Promise<ListOfMediaResourcesResponse> {
        const result = this.api.listMediaStorage(filterContentType, _options);
        return result.toPromise();
    }

    /**
     * Updates a stored media file.
     * Update stored media
     * @param mediaName Uniquely identifies a media resource.
     * @param updateMediaRequest Update media request
     */
    public updateMediaStorage(mediaName: string, updateMediaRequest: UpdateMediaRequest, _options?: Configuration): Promise<MediaResourceResponse> {
        const result = this.api.updateMediaStorage(mediaName, updateMediaRequest, _options);
        return result.toPromise();
    }


}



import { ObservableProgrammableFaxCommandsApi } from './ObservableAPI.ts';

import { ProgrammableFaxCommandsApiRequestFactory, ProgrammableFaxCommandsApiResponseProcessor} from "../apis/ProgrammableFaxCommandsApi.ts";
export class PromiseProgrammableFaxCommandsApi {
    private api: ObservableProgrammableFaxCommandsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProgrammableFaxCommandsApiRequestFactory,
        responseProcessor?: ProgrammableFaxCommandsApiResponseProcessor
    ) {
        this.api = new ObservableProgrammableFaxCommandsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancel the outbound fax that is in one of the following states: `queued`, `media.processed`, `originated` or `sending` 
     * Cancel a fax
     * @param id The unique identifier of a fax.
     */
    public cancelFax(id: string, _options?: Configuration): Promise<SuccessfulResponseUponAcceptingCancelFaxCommand> {
        const result = this.api.cancelFax(id, _options);
        return result.toPromise();
    }

    /**
     * Delete a fax
     * @param id The unique identifier of a fax.
     */
    public deleteFax(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteFax(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * View a list of faxes
     * @param filterCreatedAtGte ISO 8601 date time for filtering faxes created after or on that date
     * @param filterCreatedAtGt ISO 8601 date time for filtering faxes created after that date
     * @param filterCreatedAtLte ISO 8601 formatted date time for filtering faxes created on or before that date
     * @param filterCreatedAtLt ISO 8601 formatted date time for filtering faxes created before that date
     * @param filterDirectionEq The direction, inbound or outbound, for filtering faxes sent from this account
     * @param filterFromEq The phone number, in E.164 format for filtering faxes sent from this number
     * @param pageSize Number of fax resourcxes for the single page returned
     * @param pageNumber Number of the page to be retrieved
     */
    public listFaxes(filterCreatedAtGte?: Date, filterCreatedAtGt?: Date, filterCreatedAtLte?: Date, filterCreatedAtLt?: Date, filterDirectionEq?: string, filterFromEq?: string, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<ListFaxesResponse> {
        const result = this.api.listFaxes(filterCreatedAtGte, filterCreatedAtGt, filterCreatedAtLte, filterCreatedAtLt, filterDirectionEq, filterFromEq, pageSize, pageNumber, _options);
        return result.toPromise();
    }

    /**
     * Refreshes the inbound fax\'s media_url when it has expired
     * Refresh a fax
     * @param id The unique identifier of a fax.
     */
    public refreshFax(id: string, _options?: Configuration): Promise<RefreshFaxResponse> {
        const result = this.api.refreshFax(id, _options);
        return result.toPromise();
    }

    /**
     * Send a fax. Files have size limits and page count limit validations. If a file is bigger than 50MB or has more than 350 pages it will fail with `file_size_limit_exceeded` and `page_count_limit_exceeded` respectively.   **Expected Webhooks:**  - `fax.queued` - `fax.media.processed` - `fax.sending.started` - `fax.delivered` - `fax.failed` 
     * Send a fax
     * @param sendFaxRequest Send fax request
     */
    public sendFax(sendFaxRequest: SendFaxRequest, _options?: Configuration): Promise<any> {
        const result = this.api.sendFax(sendFaxRequest, _options);
        return result.toPromise();
    }

    /**
     * View a fax
     * @param id The unique identifier of a fax.
     */
    public viewFax(id: string, _options?: Configuration): Promise<GetFaxResponse> {
        const result = this.api.viewFax(id, _options);
        return result.toPromise();
    }


}



import { ObservableQueueCommandsApi } from './ObservableAPI.ts';

import { QueueCommandsApiRequestFactory, QueueCommandsApiResponseProcessor} from "../apis/QueueCommandsApi.ts";
export class PromiseQueueCommandsApi {
    private api: ObservableQueueCommandsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: QueueCommandsApiRequestFactory,
        responseProcessor?: QueueCommandsApiResponseProcessor
    ) {
        this.api = new ObservableQueueCommandsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the list of calls in an existing queue
     * Retrieve calls from a queue
     * @param queueName Uniquely identifies the queue by name
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listQueueCalls(queueName: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListQueueCallsResponse> {
        const result = this.api.listQueueCalls(queueName, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Retrieve an existing call from an existing queue
     * Retrieve a call from a queue
     * @param queueName Uniquely identifies the queue by name
     * @param callControlId Unique identifier and token for controlling the call
     */
    public retrieveCallFromQueue(queueName: string, callControlId: string, _options?: Configuration): Promise<QueueCallResponse> {
        const result = this.api.retrieveCallFromQueue(queueName, callControlId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve an existing call queue
     * Retrieve a call queue
     * @param queueName Uniquely identifies the queue by name
     */
    public retrieveCallQueue(queueName: string, _options?: Configuration): Promise<QueueResponse> {
        const result = this.api.retrieveCallQueue(queueName, _options);
        return result.toPromise();
    }


}



import { ObservableRecordingsCommandsApi } from './ObservableAPI.ts';

import { RecordingsCommandsApiRequestFactory, RecordingsCommandsApiResponseProcessor} from "../apis/RecordingsCommandsApi.ts";
export class PromiseRecordingsCommandsApi {
    private api: ObservableRecordingsCommandsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RecordingsCommandsApiRequestFactory,
        responseProcessor?: RecordingsCommandsApiResponseProcessor
    ) {
        this.api = new ObservableRecordingsCommandsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Lists recordings for the authenticated user
     * List recordings
     * @param filterConferenceId Return only recordings associated with a given conference
     * @param filterCreatedAtGte Return only recordings created later than or at given ISO 8601 datetime
     * @param filterCreatedAtLte Return only recordings created earlier than or at given ISO 8601 datetime
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listRecordings(filterConferenceId?: string, filterCreatedAtGte?: string, filterCreatedAtLte?: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListRecordingsResponse> {
        const result = this.api.listRecordings(filterConferenceId, filterCreatedAtGte, filterCreatedAtLte, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a recording from the authenticated user\'s recordings
     * Retrieve a recording
     * @param id Uniquely identifies the recording
     */
    public retrieveRecording(id: string, _options?: Configuration): Promise<GetRecordingResponse> {
        const result = this.api.retrieveRecording(id, _options);
        return result.toPromise();
    }


}



import { ObservableRegisterCallApi } from './ObservableAPI.ts';

import { RegisterCallApiRequestFactory, RegisterCallApiResponseProcessor} from "../apis/RegisterCallApi.ts";
export class PromiseRegisterCallApi {
    private api: ObservableRegisterCallApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RegisterCallApiRequestFactory,
        responseProcessor?: RegisterCallApiResponseProcessor
    ) {
        this.api = new ObservableRegisterCallApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Register the call before dialing to show your brand on callee\'s phone.
     * Register the call for Google Verified Calls
     * @param registerCallRequest Register call request
     */
    public registerCall(registerCallRequest: RegisterCallRequest, _options?: Configuration): Promise<RegisterCallResponse> {
        const result = this.api.registerCall(registerCallRequest, _options);
        return result.toPromise();
    }


}




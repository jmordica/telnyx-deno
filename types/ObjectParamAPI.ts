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

import { ObservableCallCommandsApi } from "./ObservableAPI.ts";
import { CallCommandsApiRequestFactory, CallCommandsApiResponseProcessor} from "../apis/CallCommandsApi.ts";

export interface CallCommandsApiCallAnswerRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallAnswer
     */
    callControlId: string
    /**
     * Answer call request
     * @type AnswerRequest
     * @memberof CallCommandsApicallAnswer
     */
    answerRequest: AnswerRequest
}

export interface CallCommandsApiCallBridgeRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallBridge
     */
    callControlId: string
    /**
     * Bridge call request
     * @type BridgeRequest
     * @memberof CallCommandsApicallBridge
     */
    bridgeRequest: BridgeRequest
}

export interface CallCommandsApiCallDialRequest {
    /**
     * Call request
     * @type CallRequest
     * @memberof CallCommandsApicallDial
     */
    callRequest: CallRequest
}

export interface CallCommandsApiCallEnqueueRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallEnqueue
     */
    callControlId: string
    /**
     * Enqueue call request
     * @type EnqueueRequest
     * @memberof CallCommandsApicallEnqueue
     */
    enqueueRequest: EnqueueRequest
}

export interface CallCommandsApiCallForkStartRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallForkStart
     */
    callControlId: string
    /**
     * Fork media request
     * @type StartForkingRequest
     * @memberof CallCommandsApicallForkStart
     */
    startForkingRequest: StartForkingRequest
}

export interface CallCommandsApiCallForkStopRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallForkStop
     */
    callControlId: string
    /**
     * Stop forking media request
     * @type StopForkingRequest
     * @memberof CallCommandsApicallForkStop
     */
    stopForkingRequest: StopForkingRequest
}

export interface CallCommandsApiCallGatherRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallGather
     */
    callControlId: string
    /**
     * Gather
     * @type GatherRequest
     * @memberof CallCommandsApicallGather
     */
    gatherRequest: GatherRequest
}

export interface CallCommandsApiCallGatherStopRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallGatherStop
     */
    callControlId: string
    /**
     * Stop current gather
     * @type StopGatherRequest
     * @memberof CallCommandsApicallGatherStop
     */
    stopGatherRequest: StopGatherRequest
}

export interface CallCommandsApiCallGatherUsingAudioRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallGatherUsingAudio
     */
    callControlId: string
    /**
     * Gather using audio request
     * @type GatherUsingAudioRequest
     * @memberof CallCommandsApicallGatherUsingAudio
     */
    gatherUsingAudioRequest: GatherUsingAudioRequest
}

export interface CallCommandsApiCallGatherUsingSpeakRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallGatherUsingSpeak
     */
    callControlId: string
    /**
     * Gather using speak request
     * @type GatherUsingSpeakRequest
     * @memberof CallCommandsApicallGatherUsingSpeak
     */
    gatherUsingSpeakRequest: GatherUsingSpeakRequest
}

export interface CallCommandsApiCallHangupRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallHangup
     */
    callControlId: string
    /**
     * Hangup request
     * @type HangupRequest
     * @memberof CallCommandsApicallHangup
     */
    hangupRequest: HangupRequest
}

export interface CallCommandsApiCallPlaybackStartRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallPlaybackStart
     */
    callControlId: string
    /**
     * Play audio URL request
     * @type PlayAudioUrlRequest
     * @memberof CallCommandsApicallPlaybackStart
     */
    playAudioUrlRequest: PlayAudioUrlRequest
}

export interface CallCommandsApiCallPlaybackStopRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallPlaybackStop
     */
    callControlId: string
    /**
     * Stop audio playback request
     * @type PlaybackStopRequest
     * @memberof CallCommandsApicallPlaybackStop
     */
    playbackStopRequest: PlaybackStopRequest
}

export interface CallCommandsApiCallRecordPauseRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallRecordPause
     */
    callControlId: string
    /**
     * Pause recording call request
     * @type PauseRecordingRequest
     * @memberof CallCommandsApicallRecordPause
     */
    pauseRecordingRequest: PauseRecordingRequest
}

export interface CallCommandsApiCallRecordResumeRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallRecordResume
     */
    callControlId: string
    /**
     * Resume recording call request
     * @type ResumeRecordingRequest
     * @memberof CallCommandsApicallRecordResume
     */
    resumeRecordingRequest: ResumeRecordingRequest
}

export interface CallCommandsApiCallRecordStartRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallRecordStart
     */
    callControlId: string
    /**
     * Start recording audio request
     * @type StartRecordingRequest
     * @memberof CallCommandsApicallRecordStart
     */
    startRecordingRequest: StartRecordingRequest
}

export interface CallCommandsApiCallRecordStopRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallRecordStop
     */
    callControlId: string
    /**
     * Stop recording call request
     * @type StopRecordingRequest
     * @memberof CallCommandsApicallRecordStop
     */
    stopRecordingRequest: StopRecordingRequest
}

export interface CallCommandsApiCallReferRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallRefer
     */
    callControlId: string
    /**
     * Refer request
     * @type ReferRequest
     * @memberof CallCommandsApicallRefer
     */
    referRequest: ReferRequest
}

export interface CallCommandsApiCallRejectRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallReject
     */
    callControlId: string
    /**
     * Reject request
     * @type RejectRequest
     * @memberof CallCommandsApicallReject
     */
    rejectRequest: RejectRequest
}

export interface CallCommandsApiCallSendDTMFRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallSendDTMF
     */
    callControlId: string
    /**
     * Send DTMF request
     * @type SendDTMFRequest
     * @memberof CallCommandsApicallSendDTMF
     */
    sendDTMFRequest: SendDTMFRequest
}

export interface CallCommandsApiCallSpeakRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallSpeak
     */
    callControlId: string
    /**
     * Speak request
     * @type SpeakRequest
     * @memberof CallCommandsApicallSpeak
     */
    speakRequest: SpeakRequest
}

export interface CallCommandsApiCallStreamingStartRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallStreamingStart
     */
    callControlId: string
    /**
     * Start streaming media request
     * @type StartStreamingRequest
     * @memberof CallCommandsApicallStreamingStart
     */
    startStreamingRequest: StartStreamingRequest
}

export interface CallCommandsApiCallStreamingStopRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallStreamingStop
     */
    callControlId: string
    /**
     * Stop streaming media request
     * @type StopStreamingRequest
     * @memberof CallCommandsApicallStreamingStop
     */
    stopStreamingRequest: StopStreamingRequest
}

export interface CallCommandsApiCallTranscriptionStartRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallTranscriptionStart
     */
    callControlId: string
    /**
     * Transcription start request
     * @type TranscriptionStartRequest
     * @memberof CallCommandsApicallTranscriptionStart
     */
    transcriptionStartRequest: TranscriptionStartRequest
}

export interface CallCommandsApiCallTranscriptionStopRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallTranscriptionStop
     */
    callControlId: string
    /**
     * Transcription stop request
     * @type TranscriptionStopRequest
     * @memberof CallCommandsApicallTranscriptionStop
     */
    transcriptionStopRequest: TranscriptionStopRequest
}

export interface CallCommandsApiCallTransferRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApicallTransfer
     */
    callControlId: string
    /**
     * Transfer call request
     * @type TransferCallRequest
     * @memberof CallCommandsApicallTransfer
     */
    transferCallRequest: TransferCallRequest
}

export interface CallCommandsApiClientStateUpdateRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApiclientStateUpdate
     */
    callControlId: string
    /**
     * Updates client state for every subsequent webhook
     * @type ClientStateUpdateRequest
     * @memberof CallCommandsApiclientStateUpdate
     */
    clientStateUpdateRequest: ClientStateUpdateRequest
}

export interface CallCommandsApiLeaveQueueRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallCommandsApileaveQueue
     */
    callControlId: string
    /**
     * Removes the call from the queue, the call currently is enqueued in.
     * @type LeaveQueueRequest
     * @memberof CallCommandsApileaveQueue
     */
    leaveQueueRequest: LeaveQueueRequest
}

export class ObjectCallCommandsApi {
    private api: ObservableCallCommandsApi

    public constructor(configuration: Configuration, requestFactory?: CallCommandsApiRequestFactory, responseProcessor?: CallCommandsApiResponseProcessor) {
        this.api = new ObservableCallCommandsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Answer an incoming call. You must issue this command before executing subsequent commands on an incoming call.  **Expected Webhooks:**  - `call.answered` - `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url` was set 
     * Answer call
     * @param param the request object
     */
    public callAnswer(param: CallCommandsApiCallAnswerRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callAnswer(param.callControlId, param.answerRequest,  options).toPromise();
    }

    /**
     * Bridge two call control calls.  **Expected Webhooks:**  - `call.bridged` for Leg A - `call.bridged` for Leg B 
     * Bridge calls
     * @param param the request object
     */
    public callBridge(param: CallCommandsApiCallBridgeRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callBridge(param.callControlId, param.bridgeRequest,  options).toPromise();
    }

    /**
     * Dial a number or SIP URI from a given connection. A successful response will include a `call_leg_id` which can be used to correlate the command with subsequent webhooks.  **Expected Webhooks:**  - `call.initiated` - `call.answered` or `call.hangup` - `call.machine.detection.ended` if `answering_machine_detection` was requested - `call.machine.greeting.ended` if `answering_machine_detection` was requested to detect the end of machine greeting - `call.machine.premium.detection.ended` if `answering_machine_detection=premium` was requested - `call.machine.premium.greeting.ended` if `answering_machine_detection=premium` was requested and a beep was detected - `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url` was set 
     * Dial
     * @param param the request object
     */
    public callDial(param: CallCommandsApiCallDialRequest, options?: Configuration): Promise<RetrieveCallStatusResponse> {
        return this.api.callDial(param.callRequest,  options).toPromise();
    }

    /**
     * Put the call in a queue.
     * Enqueue call
     * @param param the request object
     */
    public callEnqueue(param: CallCommandsApiCallEnqueueRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callEnqueue(param.callControlId, param.enqueueRequest,  options).toPromise();
    }

    /**
     * Call forking allows you to stream the media from a call to a specific target in realtime.  This stream can be used to enable realtime audio analysis to support a  variety of use cases, including fraud detection, or the creation of AI-generated audio responses.  Requests must specify either the `target` attribute or the `rx` and `tx` attributes.  **Expected Webhooks:**  - `call.fork.started` - `call.fork.stopped`  **Simple Telnyx RTP Encapsulation Protocol (STREP)**  *Note: This header/encapsulation is not used when the `rx` and `tx` parameters have been specified; it only applies when media is forked using the `target` attribute.*  If the destination for forked media is specified using the \"target\" attribute, the RTP will be encapsulated in an extra Telnyx protocol, which adds a 24 byte header to the RTP payload in each packet. The STREP header includes the Call Control `call_leg_id` for stream identification, along with bits that represent the direction (inbound or outbound) of the media. This 24-byte header sits between the UDP header and the RTP header.  The STREP header makes it possible to fork RTP for multiple calls (or two RTP streams for the same call) to the same IP:port, where the streams can be demultiplexed by your application using the information in the header. Of course, it\'s still possible to ignore this header completely, for example, if sending forked media for different calls to different ports or IP addresses. In this case, simply strip 24 bytes (or use the second byte to find the header length) from the received UDP payload to get the RTP (RTP header and payload).  ``` STREP Specification    0                   1                   2                   3   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  |1 1|Version|L|D|    HeaderLen  |  reserved (2 bytes)           |  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  |       reserved (4 bytes, for UDP ports or anything else)      |  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  |               The call_leg_id                                 |  |                   from Call Control                           |  |                       (128 bits / 16 bytes)                   |  |                           (this is binary data)               |  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+   11    Static bits 11, always set to 11 to easily distinguish forked media    from RTP (10) and T.38 media (usually 00) and SIP (which begins    with a capital letter, so begins with bits 01). This is a magic number.   Version    Four bits to indicate the version number of the protocol, starting at 0001.   L    One bit to represent the leg of the call (A or B).    0 represents the A (first) leg of the call.    1 represents the B (second) leg of the call.   D    One bit to represent the direction of this RTP stream.    0 represents media received by Telnyx.    1 represents media transmitted by Telnyx.   HeaderLen (1 byte)    The length of the header in bytes.    Note that this value does not include the length of the payload. The total    size of the RTP can be calculated by subtracting the HeaderLen from the UDP    length (minus 8 for the UDP header).    In version 1, this value will always be 24.   Reserved (6 bytes)    Reserved for future use and to make sure that the header is a multiple of 32 bits   Call Leg ID    A 128-bit identifier for the call leg.    This is the call_leg_id from Call Control. ``` 
     * Forking start
     * @param param the request object
     */
    public callForkStart(param: CallCommandsApiCallForkStartRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callForkStart(param.callControlId, param.startForkingRequest,  options).toPromise();
    }

    /**
     * Stop forking a call.  **Expected Webhooks:**  - `call.fork.stopped` 
     * Forking stop
     * @param param the request object
     */
    public callForkStop(param: CallCommandsApiCallForkStopRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callForkStop(param.callControlId, param.stopForkingRequest,  options).toPromise();
    }

    /**
     * Gather DTMF signals to build interactive menus.  You can pass a list of valid digits. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather` command.  **Expected Webhooks:**  - `call.dtmf.received` (you may receive many of these webhooks) - `call.gather.ended` 
     * Gather
     * @param param the request object
     */
    public callGather(param: CallCommandsApiCallGatherRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callGather(param.callControlId, param.gatherRequest,  options).toPromise();
    }

    /**
     * Stop current gather.  **Expected Webhooks:**  - `call.gather.ended` 
     * Gather stop
     * @param param the request object
     */
    public callGatherStop(param: CallCommandsApiCallGatherStopRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callGatherStop(param.callControlId, param.stopGatherRequest,  options).toPromise();
    }

    /**
     * Play an audio file on the call until the required DTMF signals are gathered to build interactive menus.  You can pass a list of valid digits along with an \'invalid_audio_url\', which will be played back at the beginning of each prompt. Playback will be interrupted when a DTMF signal is received. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather_using_audio` command.  **Expected Webhooks:**  - `call.playback.started` - `call.playback.ended` - `call.dtmf.received` (you may receive many of these webhooks) - `call.gather.ended` 
     * Gather using audio
     * @param param the request object
     */
    public callGatherUsingAudio(param: CallCommandsApiCallGatherUsingAudioRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callGatherUsingAudio(param.callControlId, param.gatherUsingAudioRequest,  options).toPromise();
    }

    /**
     * Convert text to speech and play it on the call until the required DTMF signals are gathered to build interactive menus.  You can pass a list of valid digits along with an \'invalid_payload\', which will be played back at the beginning of each prompt. Speech will be interrupted when a DTMF signal is received. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather_using_speak` command.  **Expected Webhooks:**  - `call.dtmf.received` (you may receive many of these webhooks) - `call.gather.ended` 
     * Gather using speak
     * @param param the request object
     */
    public callGatherUsingSpeak(param: CallCommandsApiCallGatherUsingSpeakRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callGatherUsingSpeak(param.callControlId, param.gatherUsingSpeakRequest,  options).toPromise();
    }

    /**
     * Hang up the call.  **Expected Webhooks:**  - `call.hangup` - `call.recording.saved` 
     * Hangup call
     * @param param the request object
     */
    public callHangup(param: CallCommandsApiCallHangupRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callHangup(param.callControlId, param.hangupRequest,  options).toPromise();
    }

    /**
     * Play an audio file on the call. If multiple play audio commands are issued consecutively, the audio files will be placed in a queue awaiting playback.  *Notes:*  - When `overlay` is enabled, `target_legs` is limited to `self`. - A customer cannot Play Audio with `overlay=true` unless there is a Play Audio with `overlay=false` actively playing.  **Expected Webhooks:**  - `call.playback.started` - `call.playback.ended` 
     * Play audio URL
     * @param param the request object
     */
    public callPlaybackStart(param: CallCommandsApiCallPlaybackStartRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callPlaybackStart(param.callControlId, param.playAudioUrlRequest,  options).toPromise();
    }

    /**
     * Stop audio being played on the call.  **Expected Webhooks:**  - `call.playback.ended` or `call.speak.ended` 
     * Stop audio playback
     * @param param the request object
     */
    public callPlaybackStop(param: CallCommandsApiCallPlaybackStopRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callPlaybackStop(param.callControlId, param.playbackStopRequest,  options).toPromise();
    }

    /**
     * Pause recording the call. Recording can be resumed via Resume recording command.  **Expected Webhooks:**  There are no webhooks associated with this command. 
     * Record pause
     * @param param the request object
     */
    public callRecordPause(param: CallCommandsApiCallRecordPauseRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callRecordPause(param.callControlId, param.pauseRecordingRequest,  options).toPromise();
    }

    /**
     * Resume recording the call.  **Expected Webhooks:**  There are no webhooks associated with this command. 
     * Record resume
     * @param param the request object
     */
    public callRecordResume(param: CallCommandsApiCallRecordResumeRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callRecordResume(param.callControlId, param.resumeRecordingRequest,  options).toPromise();
    }

    /**
     * Start recording the call. Recording will stop on call hang-up, or can be initiated via the Stop Recording command.  **Expected Webhooks:**  - `call.recording.saved` 
     * Recording start
     * @param param the request object
     */
    public callRecordStart(param: CallCommandsApiCallRecordStartRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callRecordStart(param.callControlId, param.startRecordingRequest,  options).toPromise();
    }

    /**
     * Stop recording the call.  **Expected Webhooks:**  - `call.recording.saved` 
     * Recording stop
     * @param param the request object
     */
    public callRecordStop(param: CallCommandsApiCallRecordStopRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callRecordStop(param.callControlId, param.stopRecordingRequest,  options).toPromise();
    }

    /**
     * Initiate a SIP Refer on a Call Control call. You can initiate a SIP Refer at any point in the duration of a call.  **Expected Webhooks:**  - `call.refer.started` - `call.refer.completed` - `call.refer.failed` 
     * SIP Refer a call
     * @param param the request object
     */
    public callRefer(param: CallCommandsApiCallReferRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callRefer(param.callControlId, param.referRequest,  options).toPromise();
    }

    /**
     * Reject an incoming call.  **Expected Webhooks:**  - `call.hangup` 
     * Reject a call
     * @param param the request object
     */
    public callReject(param: CallCommandsApiCallRejectRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callReject(param.callControlId, param.rejectRequest,  options).toPromise();
    }

    /**
     * Sends DTMF tones from this leg. DTMF tones will be heard by the other end of the call.  **Expected Webhooks:**  There are no webhooks associated with this command. 
     * Send DTMF
     * @param param the request object
     */
    public callSendDTMF(param: CallCommandsApiCallSendDTMFRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callSendDTMF(param.callControlId, param.sendDTMFRequest,  options).toPromise();
    }

    /**
     * Convert text to speech and play it back on the call. If multiple speak text commands are issued consecutively, the audio files will be placed in a queue awaiting playback.  **Expected Webhooks:**  - `call.speak.started` - `call.speak.ended` 
     * Speak text
     * @param param the request object
     */
    public callSpeak(param: CallCommandsApiCallSpeakRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callSpeak(param.callControlId, param.speakRequest,  options).toPromise();
    }

    /**
     * Start streaming the media from a call to a specific WebSocket address or Dialogflow connection in near-realtime. Audio will be delivered as base64-encoded RTP payload (raw audio), wrapped in JSON payloads.   **Example: Starting a stream to a Websocket address**   The `stream_url` param is mandatory.  ``` curl -X POST \\    --header \"Content-Type: application/json\" \\    --header \"Accept: application/json\" \\    --header \"Authorization: Bearer YOUR_API_KEY\" \\    --data \'{  \"stream_url\": \"wss://www.example.com/websocket\",\\  \"client_state\":\"aGF2ZSBhIG5pY2UgZGF5ID1d\",\\  \"command_id\":\"891510ac-f3e4-11e8-af5b-de00688a4901\" \\  }\' \\    https://api.telnyx.com/v2/calls/{call_control_id}/actions/streaming_start  ```    **Example: Starting a stream to a Dialogflow connection**    Enable the Dialogflow integration by sending `\"enable_dialogflow\": true` in the request. You need to have a Dialogflow connection associated with your Call Control application first, [click here for instructions](https://developers.telnyx.com/docs/v2/call-control/tutorials/dialogflow-es). ``` curl -X POST \\    --header \"Content-Type: application/json\" \\    --header \"Accept: application/json\" \\    --header \"Authorization: Bearer YOUR_API_KEY\" \\    --data \'{  \"client_state\":\"aGF2ZSBhIG5pY2UgZGF5ID1d\", \\  \"command_id\":\"891510ac-f3e4-11e8-af5b-de00688a4901\", \\  \"enable_dialogflow\": true \\  }\' \\    https://api.telnyx.com/v2/calls/{call_control_id}/actions/streaming_start  ```  **Expected Webhooks:**  - `streaming.started` - `streaming.stopped` - `streaming.failed`  **WebSocket events**  When the WebSocket connection is established, the following event is being sent over it: ``` {   \"event\": \"connected\",   \"version\": \"1.0.0\" } ``` And when the call is started, an event which contains information about the encoding and `stream_id` that identifies a particular stream: ``` {   \"event\": \"start\",   \"sequence_number\": \"1\",   \"start\": {     \"user_id\": \"3e6f995f-85f7-4705-9741-53b116d28237\",     \"call_control_id\": \"v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg\",      \"client_state\": \"aGF2ZSBhIG5pY2UgZGF5ID1d\",     \"media_format\": {       \"encoding\": \"audio/x-mulaw\",       \"sample_rate\": 8000,       \"channels\": 1     }   },   \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\" } ``` The start event is followed by the following media events that contain base64-encoded RTP payload (raw audio, no RTP headers) (: ``` {    \"event\": \"media\",   \"sequence_number\": \"4\",   \"media\": {      \"track\": \"inbound/outbound\",      \"chunk\": \"2\",     \"timestamp\": \"5\",     \"payload\": \"no+JhoaJjpzSHxAKBgYJD...IsSbjomGhoqQn1Ic\"    },   \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\"  } ``` Please note that the order of events is not guaranteed and the chunk number can be used to reorder the events.  When the call ends, the stop event over WebSockets connection is sent: ``` {    \"event\": \"stop\",   \"sequence_number\": \"5\",   \"stop\": {     \"user_id\": \"3e6f995f-85f7-4705-9741-53b116d28237\",     \"call_control_id\": \"v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQ\"    },     \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\"   } ```  **Bidirectional Media Streaming**  Media can be sent back to the call through the websocket as well. This is done in a way very similar to the [playback_start](https://developers.telnyx.com/docs/api/v2/call-control/Call-Commands#callPlaybackStart) command, when using a base64 encoded mp3 file in the payload. Simply send a packet to the websocket connection as follows:  ``` {   \"event\": \"media\",   \"media\": {     \"payload\" : <your base64 encoded mp3 file>   } } ```  The payload, which is a base64-encoded mp3 file, will be played on the call.  Some limitations to be aware of:  - Media payloads can only be submitted once per second. - Media _must_ be base64 encoded mp3  **Stream Errors**  Any errors in the media packet, including when a rate limit is reached, will result in an error frame being sent to your websocket server. The error frame will appear as follows:  ``` {   \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\",   \"event\": \"error\",   \"sequence_number\": \"6\",   \"error\": {     \"title\": \"rate_limit_reached\",     \"code\": \"100005\",     \"detail\": \"Too many requests\"   } } ```  Possible errors are as follows:  - Error 100002: `\"unknown_error\"` - Error 100003: `\"malformed_frame\"` - Error 100004: `\"invalid_media\"` - Error 100005: `\"rate_limit_reached\"` 
     * Streaming start
     * @param param the request object
     */
    public callStreamingStart(param: CallCommandsApiCallStreamingStartRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callStreamingStart(param.callControlId, param.startStreamingRequest,  options).toPromise();
    }

    /**
     * Stop streaming a call to a WebSocket.  **Expected Webhooks:**  - `streaming.stopped` 
     * Streaming stop
     * @param param the request object
     */
    public callStreamingStop(param: CallCommandsApiCallStreamingStopRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callStreamingStop(param.callControlId, param.stopStreamingRequest,  options).toPromise();
    }

    /**
     * Start real-time transcription. Transcription will stop on call hang-up, or can be initiated via the Transcription stop command.  **Expected Webhooks:**  - `call.transcription` 
     * Transcription start
     * @param param the request object
     */
    public callTranscriptionStart(param: CallCommandsApiCallTranscriptionStartRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callTranscriptionStart(param.callControlId, param.transcriptionStartRequest,  options).toPromise();
    }

    /**
     * Stop real-time transcription.
     * Transcription stop
     * @param param the request object
     */
    public callTranscriptionStop(param: CallCommandsApiCallTranscriptionStopRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callTranscriptionStop(param.callControlId, param.transcriptionStopRequest,  options).toPromise();
    }

    /**
     * Transfer a call to a new destination. If the transfer is unsuccessful, a `call.hangup` webhook for the other call (Leg B) will be sent indicating that the transfer could not be completed. The original call will remain active and may be issued additional commands, potentially transfering the call to an alternate destination.  **Expected Webhooks:**  - `call.initiated` - `call.bridged` to Leg B - `call.answered` or `call.hangup` - `call.machine.detection.ended` if `answering_machine_detection` was requested - `call.machine.greeting.ended` if `answering_machine_detection` was requested to detect the end of machine greeting - `call.machine.premium.detection.ended` if `answering_machine_detection=premium` was requested - `call.machine.premium.greeting.ended` if `answering_machine_detection=premium` was requested and a beep was detected 
     * Transfer call
     * @param param the request object
     */
    public callTransfer(param: CallCommandsApiCallTransferRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.callTransfer(param.callControlId, param.transferCallRequest,  options).toPromise();
    }

    /**
     * Updates client state
     * Update client state
     * @param param the request object
     */
    public clientStateUpdate(param: CallCommandsApiClientStateUpdateRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.clientStateUpdate(param.callControlId, param.clientStateUpdateRequest,  options).toPromise();
    }

    /**
     * Removes the call from a queue.
     * Remove call from a queue
     * @param param the request object
     */
    public leaveQueue(param: CallCommandsApiLeaveQueueRequest, options?: Configuration): Promise<CallControlCommandResponse> {
        return this.api.leaveQueue(param.callControlId, param.leaveQueueRequest,  options).toPromise();
    }

}

import { ObservableCallInformationApi } from "./ObservableAPI.ts";
import { CallInformationApiRequestFactory, CallInformationApiResponseProcessor} from "../apis/CallInformationApi.ts";

export interface CallInformationApiRetrieveCallStatusRequest {
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof CallInformationApiretrieveCallStatus
     */
    callControlId: string
}

export class ObjectCallInformationApi {
    private api: ObservableCallInformationApi

    public constructor(configuration: Configuration, requestFactory?: CallInformationApiRequestFactory, responseProcessor?: CallInformationApiResponseProcessor) {
        this.api = new ObservableCallInformationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the status of a call (data is available 10 minutes after call ended).
     * Retrieve a call status
     * @param param the request object
     */
    public retrieveCallStatus(param: CallInformationApiRetrieveCallStatusRequest, options?: Configuration): Promise<RetrieveCallStatusResponse> {
        return this.api.retrieveCallStatus(param.callControlId,  options).toPromise();
    }

}

import { ObservableCallRecordingsApi } from "./ObservableAPI.ts";
import { CallRecordingsApiRequestFactory, CallRecordingsApiResponseProcessor} from "../apis/CallRecordingsApi.ts";

export interface CallRecordingsApiDeleteRecordingRequest {
    /**
     * Uniquely identifies the recording by id.
     * @type string
     * @memberof CallRecordingsApideleteRecording
     */
    recordingId: string
}

export interface CallRecordingsApiGetRecordingRequest {
    /**
     * Uniquely identifies the recording by id.
     * @type string
     * @memberof CallRecordingsApigetRecording
     */
    recordingId: string
}

export class ObjectCallRecordingsApi {
    private api: ObservableCallRecordingsApi

    public constructor(configuration: Configuration, requestFactory?: CallRecordingsApiRequestFactory, responseProcessor?: CallRecordingsApiResponseProcessor) {
        this.api = new ObservableCallRecordingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Permanently deletes a call recording.
     * Delete a call recording
     * @param param the request object
     */
    public deleteRecording(param: CallRecordingsApiDeleteRecordingRequest, options?: Configuration): Promise<RecordingResponse> {
        return this.api.deleteRecording(param.recordingId,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing call recording.
     * Retrieve call recording
     * @param param the request object
     */
    public getRecording(param: CallRecordingsApiGetRecordingRequest, options?: Configuration): Promise<RecordingResponse> {
        return this.api.getRecording(param.recordingId,  options).toPromise();
    }

}

import { ObservableConferenceCommandsApi } from "./ObservableAPI.ts";
import { ConferenceCommandsApiRequestFactory, ConferenceCommandsApiResponseProcessor} from "../apis/ConferenceCommandsApi.ts";

export interface ConferenceCommandsApiConferenceDialParticipantInRequest {
    /**
     * Uniquely identifies the conference by id or name
     * @type string
     * @memberof ConferenceCommandsApiconferenceDialParticipantIn
     */
    id: string
    /**
     * Dial Into Conference request object
     * @type ConferenceCallRequest
     * @memberof ConferenceCommandsApiconferenceDialParticipantIn
     */
    conferenceCallRequest: ConferenceCallRequest
}

export interface ConferenceCommandsApiConferenceHoldParticipantsRequest {
    /**
     * Uniquely identifies the conference by id or name
     * @type string
     * @memberof ConferenceCommandsApiconferenceHoldParticipants
     */
    id: string
    /**
     * 
     * @type ConferenceHoldRequest
     * @memberof ConferenceCommandsApiconferenceHoldParticipants
     */
    conferenceHoldRequest: ConferenceHoldRequest
}

export interface ConferenceCommandsApiConferenceJoinRequest {
    /**
     * Uniquely identifies the conference by id or name
     * @type string
     * @memberof ConferenceCommandsApiconferenceJoin
     */
    id: string
    /**
     * Join Conference request object
     * @type JoinConferenceRequest
     * @memberof ConferenceCommandsApiconferenceJoin
     */
    joinConferenceRequest: JoinConferenceRequest
}

export interface ConferenceCommandsApiConferenceLeaveRequest {
    /**
     * Uniquely identifies the conference by id or name
     * @type string
     * @memberof ConferenceCommandsApiconferenceLeave
     */
    id: string
    /**
     * Leave Conference request object
     * @type LeaveConferenceRequest
     * @memberof ConferenceCommandsApiconferenceLeave
     */
    leaveConferenceRequest: LeaveConferenceRequest
}

export interface ConferenceCommandsApiConferenceMuteParticipantsRequest {
    /**
     * Uniquely identifies the conference by id or name
     * @type string
     * @memberof ConferenceCommandsApiconferenceMuteParticipants
     */
    id: string
    /**
     * 
     * @type ConferenceMuteRequest
     * @memberof ConferenceCommandsApiconferenceMuteParticipants
     */
    conferenceMuteRequest: ConferenceMuteRequest
}

export interface ConferenceCommandsApiConferencePauseRecordingRequest {
    /**
     * Specifies the conference by id or name
     * @type string
     * @memberof ConferenceCommandsApiconferencePauseRecording
     */
    id: string
    /**
     * 
     * @type PauseConferenceRecordingRequest
     * @memberof ConferenceCommandsApiconferencePauseRecording
     */
    pauseConferenceRecordingRequest: PauseConferenceRecordingRequest
}

export interface ConferenceCommandsApiConferencePlayAudioRequest {
    /**
     * Uniquely identifies the conference by id or name
     * @type string
     * @memberof ConferenceCommandsApiconferencePlayAudio
     */
    id: string
    /**
     * 
     * @type ConferencePlayRequest
     * @memberof ConferenceCommandsApiconferencePlayAudio
     */
    conferencePlayRequest: ConferencePlayRequest
}

export interface ConferenceCommandsApiConferenceResumeRecordingRequest {
    /**
     * Specifies the conference by id or name
     * @type string
     * @memberof ConferenceCommandsApiconferenceResumeRecording
     */
    id: string
    /**
     * 
     * @type ResumeConferenceRecordingRequest
     * @memberof ConferenceCommandsApiconferenceResumeRecording
     */
    resumeConferenceRecordingRequest: ResumeConferenceRecordingRequest
}

export interface ConferenceCommandsApiConferenceSpeakTextRequest {
    /**
     * Specifies the conference by id or name
     * @type string
     * @memberof ConferenceCommandsApiconferenceSpeakText
     */
    id: string
    /**
     * 
     * @type ConferenceSpeakRequest
     * @memberof ConferenceCommandsApiconferenceSpeakText
     */
    conferenceSpeakRequest: ConferenceSpeakRequest
}

export interface ConferenceCommandsApiConferenceStartRecordingRequest {
    /**
     * Specifies the conference to record by id or name
     * @type string
     * @memberof ConferenceCommandsApiconferenceStartRecording
     */
    id: string
    /**
     * 
     * @type StartConferenceRecordingRequest
     * @memberof ConferenceCommandsApiconferenceStartRecording
     */
    startConferenceRecordingRequest: StartConferenceRecordingRequest
}

export interface ConferenceCommandsApiConferenceStopAudioRequest {
    /**
     * Uniquely identifies the conference by id or name
     * @type string
     * @memberof ConferenceCommandsApiconferenceStopAudio
     */
    id: string
    /**
     * 
     * @type ConferenceStopRequest
     * @memberof ConferenceCommandsApiconferenceStopAudio
     */
    conferenceStopRequest: ConferenceStopRequest
}

export interface ConferenceCommandsApiConferenceStopRecordingRequest {
    /**
     * Specifies the conference to stop the recording for by id or name
     * @type string
     * @memberof ConferenceCommandsApiconferenceStopRecording
     */
    id: string
    /**
     * Stop recording conference request
     * @type StopRecordingRequest
     * @memberof ConferenceCommandsApiconferenceStopRecording
     */
    stopRecordingRequest: StopRecordingRequest
}

export interface ConferenceCommandsApiConferenceUnholdParticipantsRequest {
    /**
     * Uniquely identifies the conference by id or name
     * @type string
     * @memberof ConferenceCommandsApiconferenceUnholdParticipants
     */
    id: string
    /**
     * 
     * @type ConferenceUnholdRequest
     * @memberof ConferenceCommandsApiconferenceUnholdParticipants
     */
    conferenceUnholdRequest: ConferenceUnholdRequest
}

export interface ConferenceCommandsApiConferenceUnmuteParticipantsRequest {
    /**
     * Uniquely identifies the conference by id or name
     * @type string
     * @memberof ConferenceCommandsApiconferenceUnmuteParticipants
     */
    id: string
    /**
     * 
     * @type ConferenceUnmuteRequest
     * @memberof ConferenceCommandsApiconferenceUnmuteParticipants
     */
    conferenceUnmuteRequest: ConferenceUnmuteRequest
}

export interface ConferenceCommandsApiConferenceUpdateRequest {
    /**
     * Uniquely identifies the conference by id or name
     * @type string
     * @memberof ConferenceCommandsApiconferenceUpdate
     */
    id: string
    /**
     * Update Conference request object
     * @type UpdateConferenceRequest
     * @memberof ConferenceCommandsApiconferenceUpdate
     */
    updateConferenceRequest: UpdateConferenceRequest
}

export interface ConferenceCommandsApiCreateConferenceRequest {
    /**
     * Create a conference
     * @type CreateConferenceRequest
     * @memberof ConferenceCommandsApicreateConference
     */
    createConferenceRequest: CreateConferenceRequest
}

export interface ConferenceCommandsApiListConferenceParticipantsRequest {
    /**
     * Uniquely identifies the conference by id
     * @type string
     * @memberof ConferenceCommandsApilistConferenceParticipants
     */
    conferenceId: string
    /**
     * If present, participants will be filtered to those who are/are not muted
     * @type boolean
     * @memberof ConferenceCommandsApilistConferenceParticipants
     */
    filterMuted?: boolean
    /**
     * If present, participants will be filtered to those who are/are not put on hold
     * @type boolean
     * @memberof ConferenceCommandsApilistConferenceParticipants
     */
    filterOnHold?: boolean
    /**
     * If present, participants will be filtered to those who are whispering or are not
     * @type boolean
     * @memberof ConferenceCommandsApilistConferenceParticipants
     */
    filterWhispering?: boolean
    /**
     * The page number to load
     * @type number
     * @memberof ConferenceCommandsApilistConferenceParticipants
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof ConferenceCommandsApilistConferenceParticipants
     */
    pageSize?: number
}

export interface ConferenceCommandsApiListConferencesRequest {
    /**
     * If present, conferences will be filtered to those with a matching &#x60;name&#x60; attribute. Matching is case-sensitive
     * @type string
     * @memberof ConferenceCommandsApilistConferences
     */
    filterName?: string
    /**
     * If present, conferences will be filtered by status.
     * @type &#39;init&#39; | &#39;in_progress&#39; | &#39;completed&#39;
     * @memberof ConferenceCommandsApilistConferences
     */
    filterStatus?: 'init' | 'in_progress' | 'completed'
    /**
     * The page number to load
     * @type number
     * @memberof ConferenceCommandsApilistConferences
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof ConferenceCommandsApilistConferences
     */
    pageSize?: number
}

export interface ConferenceCommandsApiRetrieveConferenceRequest {
    /**
     * Uniquely identifies the conference by id
     * @type string
     * @memberof ConferenceCommandsApiretrieveConference
     */
    id: string
}

export class ObjectConferenceCommandsApi {
    private api: ObservableConferenceCommandsApi

    public constructor(configuration: Configuration, requestFactory?: ConferenceCommandsApiRequestFactory, responseProcessor?: ConferenceCommandsApiResponseProcessor) {
        this.api = new ObservableConferenceCommandsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Dials a phone number and, when the call is answered, automatically joins them into the specified conference.  **Expected Webhooks:**  - `call.hangup` - `call.answered` - `conference.participant.joined` - `conference.participant.left` 
     * Dial a new participant into a conference
     * @param param the request object
     */
    public conferenceDialParticipantIn(param: ConferenceCommandsApiConferenceDialParticipantInRequest, options?: Configuration): Promise<ConferenceCommandResponse> {
        return this.api.conferenceDialParticipantIn(param.id, param.conferenceCallRequest,  options).toPromise();
    }

    /**
     * Hold a list of participants in a conference call
     * Hold conference participants
     * @param param the request object
     */
    public conferenceHoldParticipants(param: ConferenceCommandsApiConferenceHoldParticipantsRequest, options?: Configuration): Promise<ConferenceCommandResponse> {
        return this.api.conferenceHoldParticipants(param.id, param.conferenceHoldRequest,  options).toPromise();
    }

    /**
     * Join an existing call leg to a conference. Issue the Join Conference command with the conference ID in the path and the `call_control_id` of the leg you wish to join to the conference as an attribute. The conference can have up to a certain amount of active participants, as set by the `max_participants` parameter in conference creation request.   **Expected Webhooks:**  - `conference.participant.joined` - `conference.participant.left` 
     * Join a conference
     * @param param the request object
     */
    public conferenceJoin(param: ConferenceCommandsApiConferenceJoinRequest, options?: Configuration): Promise<ConferenceCommandResponse> {
        return this.api.conferenceJoin(param.id, param.joinConferenceRequest,  options).toPromise();
    }

    /**
     * Removes a call leg from a conference and moves it back to parked state. **Expected Webhooks:**  - `conference.participant.left` 
     * Leave a conference
     * @param param the request object
     */
    public conferenceLeave(param: ConferenceCommandsApiConferenceLeaveRequest, options?: Configuration): Promise<ConferenceCommandResponse> {
        return this.api.conferenceLeave(param.id, param.leaveConferenceRequest,  options).toPromise();
    }

    /**
     * Mute a list of participants in a conference call
     * Mute conference participants
     * @param param the request object
     */
    public conferenceMuteParticipants(param: ConferenceCommandsApiConferenceMuteParticipantsRequest, options?: Configuration): Promise<ConferenceCommandResponse> {
        return this.api.conferenceMuteParticipants(param.id, param.conferenceMuteRequest,  options).toPromise();
    }

    /**
     * Pause conference recording.
     * Conference recording pause
     * @param param the request object
     */
    public conferencePauseRecording(param: ConferenceCommandsApiConferencePauseRecordingRequest, options?: Configuration): Promise<ConferenceCommandResponse> {
        return this.api.conferencePauseRecording(param.id, param.pauseConferenceRecordingRequest,  options).toPromise();
    }

    /**
     * Play audio to all or some participants on a conference call.
     * Play audio to conference participants
     * @param param the request object
     */
    public conferencePlayAudio(param: ConferenceCommandsApiConferencePlayAudioRequest, options?: Configuration): Promise<ConferenceCommandResponse> {
        return this.api.conferencePlayAudio(param.id, param.conferencePlayRequest,  options).toPromise();
    }

    /**
     * Resume conference recording.
     * Conference recording resume
     * @param param the request object
     */
    public conferenceResumeRecording(param: ConferenceCommandsApiConferenceResumeRecordingRequest, options?: Configuration): Promise<ConferenceCommandResponse> {
        return this.api.conferenceResumeRecording(param.id, param.resumeConferenceRecordingRequest,  options).toPromise();
    }

    /**
     * Convert text to speech and play it to all or some participants.
     * Speak text to conference participants
     * @param param the request object
     */
    public conferenceSpeakText(param: ConferenceCommandsApiConferenceSpeakTextRequest, options?: Configuration): Promise<ConferenceCommandResponse> {
        return this.api.conferenceSpeakText(param.id, param.conferenceSpeakRequest,  options).toPromise();
    }

    /**
     * Start recording the conference. Recording will stop on conference end, or via the Stop Recording command.  **Expected Webhooks:**  - `conference.recording.saved`
     * Conference recording start
     * @param param the request object
     */
    public conferenceStartRecording(param: ConferenceCommandsApiConferenceStartRecordingRequest, options?: Configuration): Promise<ConferenceCommandResponse> {
        return this.api.conferenceStartRecording(param.id, param.startConferenceRecordingRequest,  options).toPromise();
    }

    /**
     * Stop audio being played to all or some participants on a conference call.
     * Stop audio being played on the conference
     * @param param the request object
     */
    public conferenceStopAudio(param: ConferenceCommandsApiConferenceStopAudioRequest, options?: Configuration): Promise<ConferenceCommandResponse> {
        return this.api.conferenceStopAudio(param.id, param.conferenceStopRequest,  options).toPromise();
    }

    /**
     * Stop recording the conference.  **Expected Webhooks:**  - `conference.recording.saved` 
     * Conference recording stop
     * @param param the request object
     */
    public conferenceStopRecording(param: ConferenceCommandsApiConferenceStopRecordingRequest, options?: Configuration): Promise<ConferenceCommandResponse> {
        return this.api.conferenceStopRecording(param.id, param.stopRecordingRequest,  options).toPromise();
    }

    /**
     * Unhold a list of participants in a conference call
     * Unhold conference participants
     * @param param the request object
     */
    public conferenceUnholdParticipants(param: ConferenceCommandsApiConferenceUnholdParticipantsRequest, options?: Configuration): Promise<ConferenceCommandResponse> {
        return this.api.conferenceUnholdParticipants(param.id, param.conferenceUnholdRequest,  options).toPromise();
    }

    /**
     * Unmute a list of participants in a conference call
     * Unmute conference participants
     * @param param the request object
     */
    public conferenceUnmuteParticipants(param: ConferenceCommandsApiConferenceUnmuteParticipantsRequest, options?: Configuration): Promise<ConferenceCommandResponse> {
        return this.api.conferenceUnmuteParticipants(param.id, param.conferenceUnmuteRequest,  options).toPromise();
    }

    /**
     * Update conference participant supervisor_role
     * Update conference participant
     * @param param the request object
     */
    public conferenceUpdate(param: ConferenceCommandsApiConferenceUpdateRequest, options?: Configuration): Promise<ConferenceCommandResponse> {
        return this.api.conferenceUpdate(param.id, param.updateConferenceRequest,  options).toPromise();
    }

    /**
     * Create a conference from an existing call leg using a `call_control_id` and a conference name. Upon creating the conference, the call will be automatically bridged to the conference. Conferences will expire after all participants have left the conference or after 4 hours regardless of the number of active participants.  **Expected Webhooks:**  - `conference.created` - `conference.participant.joined` - `conference.participant.left` - `conference.ended` - `conference.recording.saved` - `conference.floor.changed` 
     * Create conference
     * @param param the request object
     */
    public createConference(param: ConferenceCommandsApiCreateConferenceRequest, options?: Configuration): Promise<ConferenceResponse> {
        return this.api.createConference(param.createConferenceRequest,  options).toPromise();
    }

    /**
     * Lists conference participants
     * List conference participants
     * @param param the request object
     */
    public listConferenceParticipants(param: ConferenceCommandsApiListConferenceParticipantsRequest, options?: Configuration): Promise<ListParticipantsResponse> {
        return this.api.listConferenceParticipants(param.conferenceId, param.filterMuted, param.filterOnHold, param.filterWhispering, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Lists conferences. Conferences are created on demand, and will expire after all participants have left the conference or after 4 hours regardless of the number of active participants. Conferences are listed in descending order by `expires_at`.
     * List conferences
     * @param param the request object
     */
    public listConferences(param: ConferenceCommandsApiListConferencesRequest = {}, options?: Configuration): Promise<ListConferencesResponse> {
        return this.api.listConferences(param.filterName, param.filterStatus, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieve an existing conference
     * Retrieve a conference
     * @param param the request object
     */
    public retrieveConference(param: ConferenceCommandsApiRetrieveConferenceRequest, options?: Configuration): Promise<ConferenceResponse> {
        return this.api.retrieveConference(param.id,  options).toPromise();
    }

}

import { ObservableDebuggingApi } from "./ObservableAPI.ts";
import { DebuggingApiRequestFactory, DebuggingApiResponseProcessor} from "../apis/DebuggingApi.ts";

export interface DebuggingApiListCallEventsRequest {
    /**
     * The unique identifier of an individual call leg.
     * @type string
     * @memberof DebuggingApilistCallEvents
     */
    filterCallLegId?: string
    /**
     * The unique identifier of the call control session. A session may include multiple call leg events.
     * @type string
     * @memberof DebuggingApilistCallEvents
     */
    filterCallSessionId?: string
    /**
     * Event status
     * @type &#39;delivered&#39; | &#39;failed&#39;
     * @memberof DebuggingApilistCallEvents
     */
    filterStatus?: 'delivered' | 'failed'
    /**
     * Event type
     * @type &#39;command&#39; | &#39;webhook&#39;
     * @memberof DebuggingApilistCallEvents
     */
    filterType?: 'command' | 'webhook'
    /**
     * Event timestamp: greater than
     * @type string
     * @memberof DebuggingApilistCallEvents
     */
    filterEventTimestampGt?: string
    /**
     * Event timestamp: greater than or equal
     * @type string
     * @memberof DebuggingApilistCallEvents
     */
    filterEventTimestampGte?: string
    /**
     * Event timestamp: lower than
     * @type string
     * @memberof DebuggingApilistCallEvents
     */
    filterEventTimestampLt?: string
    /**
     * Event timestamp: lower than or equal
     * @type string
     * @memberof DebuggingApilistCallEvents
     */
    filterEventTimestampLte?: string
    /**
     * Event timestamp: equal
     * @type string
     * @memberof DebuggingApilistCallEvents
     */
    filterEventTimestampEq?: string
    /**
     * The page number to load
     * @type number
     * @memberof DebuggingApilistCallEvents
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof DebuggingApilistCallEvents
     */
    pageSize?: number
}

export class ObjectDebuggingApi {
    private api: ObservableDebuggingApi

    public constructor(configuration: Configuration, requestFactory?: DebuggingApiRequestFactory, responseProcessor?: DebuggingApiResponseProcessor) {
        this.api = new ObservableDebuggingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Filters call events by given filter parameters. Events are ordered by `event_timestamp`. If filter for `call_leg_id` or `call_session_id` is not present, it only filters events from the last 24 hours.  **Note**: Only one `filter[event_timestamp]` can be passed. 
     * List call events
     * @param param the request object
     */
    public listCallEvents(param: DebuggingApiListCallEventsRequest = {}, options?: Configuration): Promise<ListCallEventsResponse> {
        return this.api.listCallEvents(param.filterCallLegId, param.filterCallSessionId, param.filterStatus, param.filterType, param.filterEventTimestampGt, param.filterEventTimestampGte, param.filterEventTimestampLt, param.filterEventTimestampLte, param.filterEventTimestampEq, param.pageNumber, param.pageSize,  options).toPromise();
    }

}

import { ObservableMediaStorageAPIApi } from "./ObservableAPI.ts";
import { MediaStorageAPIApiRequestFactory, MediaStorageAPIApiResponseProcessor} from "../apis/MediaStorageAPIApi.ts";

export interface MediaStorageAPIApiCreateMediaStorageRequest {
    /**
     * Upload media request
     * @type UploadMediaRequest
     * @memberof MediaStorageAPIApicreateMediaStorage
     */
    uploadMediaRequest: UploadMediaRequest
}

export interface MediaStorageAPIApiDeleteMediaStorageRequest {
    /**
     * Uniquely identifies a media resource.
     * @type string
     * @memberof MediaStorageAPIApideleteMediaStorage
     */
    mediaName: string
}

export interface MediaStorageAPIApiDownloadMediaStorageRequest {
    /**
     * Uniquely identifies a media resource.
     * @type string
     * @memberof MediaStorageAPIApidownloadMediaStorage
     */
    mediaName: string
}

export interface MediaStorageAPIApiGetMediaStorageRequest {
    /**
     * Uniquely identifies a media resource.
     * @type string
     * @memberof MediaStorageAPIApigetMediaStorage
     */
    mediaName: string
}

export interface MediaStorageAPIApiListMediaStorageRequest {
    /**
     * Filters files by given content types
     * @type string
     * @memberof MediaStorageAPIApilistMediaStorage
     */
    filterContentType?: string
}

export interface MediaStorageAPIApiUpdateMediaStorageRequest {
    /**
     * Uniquely identifies a media resource.
     * @type string
     * @memberof MediaStorageAPIApiupdateMediaStorage
     */
    mediaName: string
    /**
     * Update media request
     * @type UpdateMediaRequest
     * @memberof MediaStorageAPIApiupdateMediaStorage
     */
    updateMediaRequest: UpdateMediaRequest
}

export class ObjectMediaStorageAPIApi {
    private api: ObservableMediaStorageAPIApi

    public constructor(configuration: Configuration, requestFactory?: MediaStorageAPIApiRequestFactory, responseProcessor?: MediaStorageAPIApiResponseProcessor) {
        this.api = new ObservableMediaStorageAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload media file to Telnyx so it can be used with other Telnyx services
     * Upload media
     * @param param the request object
     */
    public createMediaStorage(param: MediaStorageAPIApiCreateMediaStorageRequest, options?: Configuration): Promise<MediaResourceResponse> {
        return this.api.createMediaStorage(param.uploadMediaRequest,  options).toPromise();
    }

    /**
     * Deletes a stored media file.
     * Deletes stored media
     * @param param the request object
     */
    public deleteMediaStorage(param: MediaStorageAPIApiDeleteMediaStorageRequest, options?: Configuration): Promise<void> {
        return this.api.deleteMediaStorage(param.mediaName,  options).toPromise();
    }

    /**
     * Downloads a stored media file.
     * Download stored media
     * @param param the request object
     */
    public downloadMediaStorage(param: MediaStorageAPIApiDownloadMediaStorageRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.downloadMediaStorage(param.mediaName,  options).toPromise();
    }

    /**
     * Returns the information about a stored media file.
     * Retrieve stored media
     * @param param the request object
     */
    public getMediaStorage(param: MediaStorageAPIApiGetMediaStorageRequest, options?: Configuration): Promise<MediaResourceResponse> {
        return this.api.getMediaStorage(param.mediaName,  options).toPromise();
    }

    /**
     * Returns a list of stored media files.
     * List uploaded media
     * @param param the request object
     */
    public listMediaStorage(param: MediaStorageAPIApiListMediaStorageRequest = {}, options?: Configuration): Promise<ListOfMediaResourcesResponse> {
        return this.api.listMediaStorage(param.filterContentType,  options).toPromise();
    }

    /**
     * Updates a stored media file.
     * Update stored media
     * @param param the request object
     */
    public updateMediaStorage(param: MediaStorageAPIApiUpdateMediaStorageRequest, options?: Configuration): Promise<MediaResourceResponse> {
        return this.api.updateMediaStorage(param.mediaName, param.updateMediaRequest,  options).toPromise();
    }

}

import { ObservableProgrammableFaxCommandsApi } from "./ObservableAPI.ts";
import { ProgrammableFaxCommandsApiRequestFactory, ProgrammableFaxCommandsApiResponseProcessor} from "../apis/ProgrammableFaxCommandsApi.ts";

export interface ProgrammableFaxCommandsApiCancelFaxRequest {
    /**
     * The unique identifier of a fax.
     * @type string
     * @memberof ProgrammableFaxCommandsApicancelFax
     */
    id: string
}

export interface ProgrammableFaxCommandsApiDeleteFaxRequest {
    /**
     * The unique identifier of a fax.
     * @type string
     * @memberof ProgrammableFaxCommandsApideleteFax
     */
    id: string
}

export interface ProgrammableFaxCommandsApiListFaxesRequest {
    /**
     * ISO 8601 date time for filtering faxes created after or on that date
     * @type Date
     * @memberof ProgrammableFaxCommandsApilistFaxes
     */
    filterCreatedAtGte?: Date
    /**
     * ISO 8601 date time for filtering faxes created after that date
     * @type Date
     * @memberof ProgrammableFaxCommandsApilistFaxes
     */
    filterCreatedAtGt?: Date
    /**
     * ISO 8601 formatted date time for filtering faxes created on or before that date
     * @type Date
     * @memberof ProgrammableFaxCommandsApilistFaxes
     */
    filterCreatedAtLte?: Date
    /**
     * ISO 8601 formatted date time for filtering faxes created before that date
     * @type Date
     * @memberof ProgrammableFaxCommandsApilistFaxes
     */
    filterCreatedAtLt?: Date
    /**
     * The direction, inbound or outbound, for filtering faxes sent from this account
     * @type string
     * @memberof ProgrammableFaxCommandsApilistFaxes
     */
    filterDirectionEq?: string
    /**
     * The phone number, in E.164 format for filtering faxes sent from this number
     * @type string
     * @memberof ProgrammableFaxCommandsApilistFaxes
     */
    filterFromEq?: string
    /**
     * Number of fax resourcxes for the single page returned
     * @type number
     * @memberof ProgrammableFaxCommandsApilistFaxes
     */
    pageSize?: number
    /**
     * Number of the page to be retrieved
     * @type number
     * @memberof ProgrammableFaxCommandsApilistFaxes
     */
    pageNumber?: number
}

export interface ProgrammableFaxCommandsApiRefreshFaxRequest {
    /**
     * The unique identifier of a fax.
     * @type string
     * @memberof ProgrammableFaxCommandsApirefreshFax
     */
    id: string
}

export interface ProgrammableFaxCommandsApiSendFaxRequest {
    /**
     * Send fax request
     * @type SendFaxRequest
     * @memberof ProgrammableFaxCommandsApisendFax
     */
    sendFaxRequest: SendFaxRequest
}

export interface ProgrammableFaxCommandsApiViewFaxRequest {
    /**
     * The unique identifier of a fax.
     * @type string
     * @memberof ProgrammableFaxCommandsApiviewFax
     */
    id: string
}

export class ObjectProgrammableFaxCommandsApi {
    private api: ObservableProgrammableFaxCommandsApi

    public constructor(configuration: Configuration, requestFactory?: ProgrammableFaxCommandsApiRequestFactory, responseProcessor?: ProgrammableFaxCommandsApiResponseProcessor) {
        this.api = new ObservableProgrammableFaxCommandsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancel the outbound fax that is in one of the following states: `queued`, `media.processed`, `originated` or `sending` 
     * Cancel a fax
     * @param param the request object
     */
    public cancelFax(param: ProgrammableFaxCommandsApiCancelFaxRequest, options?: Configuration): Promise<SuccessfulResponseUponAcceptingCancelFaxCommand> {
        return this.api.cancelFax(param.id,  options).toPromise();
    }

    /**
     * Delete a fax
     * @param param the request object
     */
    public deleteFax(param: ProgrammableFaxCommandsApiDeleteFaxRequest, options?: Configuration): Promise<void> {
        return this.api.deleteFax(param.id,  options).toPromise();
    }

    /**
     * 
     * View a list of faxes
     * @param param the request object
     */
    public listFaxes(param: ProgrammableFaxCommandsApiListFaxesRequest = {}, options?: Configuration): Promise<ListFaxesResponse> {
        return this.api.listFaxes(param.filterCreatedAtGte, param.filterCreatedAtGt, param.filterCreatedAtLte, param.filterCreatedAtLt, param.filterDirectionEq, param.filterFromEq, param.pageSize, param.pageNumber,  options).toPromise();
    }

    /**
     * Refreshes the inbound fax\'s media_url when it has expired
     * Refresh a fax
     * @param param the request object
     */
    public refreshFax(param: ProgrammableFaxCommandsApiRefreshFaxRequest, options?: Configuration): Promise<RefreshFaxResponse> {
        return this.api.refreshFax(param.id,  options).toPromise();
    }

    /**
     * Send a fax. Files have size limits and page count limit validations. If a file is bigger than 50MB or has more than 350 pages it will fail with `file_size_limit_exceeded` and `page_count_limit_exceeded` respectively.   **Expected Webhooks:**  - `fax.queued` - `fax.media.processed` - `fax.sending.started` - `fax.delivered` - `fax.failed` 
     * Send a fax
     * @param param the request object
     */
    public sendFax(param: ProgrammableFaxCommandsApiSendFaxRequest, options?: Configuration): Promise<any> {
        return this.api.sendFax(param.sendFaxRequest,  options).toPromise();
    }

    /**
     * View a fax
     * @param param the request object
     */
    public viewFax(param: ProgrammableFaxCommandsApiViewFaxRequest, options?: Configuration): Promise<GetFaxResponse> {
        return this.api.viewFax(param.id,  options).toPromise();
    }

}

import { ObservableQueueCommandsApi } from "./ObservableAPI.ts";
import { QueueCommandsApiRequestFactory, QueueCommandsApiResponseProcessor} from "../apis/QueueCommandsApi.ts";

export interface QueueCommandsApiListQueueCallsRequest {
    /**
     * Uniquely identifies the queue by name
     * @type string
     * @memberof QueueCommandsApilistQueueCalls
     */
    queueName: string
    /**
     * The page number to load
     * @type number
     * @memberof QueueCommandsApilistQueueCalls
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof QueueCommandsApilistQueueCalls
     */
    pageSize?: number
}

export interface QueueCommandsApiRetrieveCallFromQueueRequest {
    /**
     * Uniquely identifies the queue by name
     * @type string
     * @memberof QueueCommandsApiretrieveCallFromQueue
     */
    queueName: string
    /**
     * Unique identifier and token for controlling the call
     * @type string
     * @memberof QueueCommandsApiretrieveCallFromQueue
     */
    callControlId: string
}

export interface QueueCommandsApiRetrieveCallQueueRequest {
    /**
     * Uniquely identifies the queue by name
     * @type string
     * @memberof QueueCommandsApiretrieveCallQueue
     */
    queueName: string
}

export class ObjectQueueCommandsApi {
    private api: ObservableQueueCommandsApi

    public constructor(configuration: Configuration, requestFactory?: QueueCommandsApiRequestFactory, responseProcessor?: QueueCommandsApiResponseProcessor) {
        this.api = new ObservableQueueCommandsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the list of calls in an existing queue
     * Retrieve calls from a queue
     * @param param the request object
     */
    public listQueueCalls(param: QueueCommandsApiListQueueCallsRequest, options?: Configuration): Promise<ListQueueCallsResponse> {
        return this.api.listQueueCalls(param.queueName, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieve an existing call from an existing queue
     * Retrieve a call from a queue
     * @param param the request object
     */
    public retrieveCallFromQueue(param: QueueCommandsApiRetrieveCallFromQueueRequest, options?: Configuration): Promise<QueueCallResponse> {
        return this.api.retrieveCallFromQueue(param.queueName, param.callControlId,  options).toPromise();
    }

    /**
     * Retrieve an existing call queue
     * Retrieve a call queue
     * @param param the request object
     */
    public retrieveCallQueue(param: QueueCommandsApiRetrieveCallQueueRequest, options?: Configuration): Promise<QueueResponse> {
        return this.api.retrieveCallQueue(param.queueName,  options).toPromise();
    }

}

import { ObservableRecordingsCommandsApi } from "./ObservableAPI.ts";
import { RecordingsCommandsApiRequestFactory, RecordingsCommandsApiResponseProcessor} from "../apis/RecordingsCommandsApi.ts";

export interface RecordingsCommandsApiListRecordingsRequest {
    /**
     * Return only recordings associated with a given conference
     * @type string
     * @memberof RecordingsCommandsApilistRecordings
     */
    filterConferenceId?: string
    /**
     * Return only recordings created later than or at given ISO 8601 datetime
     * @type string
     * @memberof RecordingsCommandsApilistRecordings
     */
    filterCreatedAtGte?: string
    /**
     * Return only recordings created earlier than or at given ISO 8601 datetime
     * @type string
     * @memberof RecordingsCommandsApilistRecordings
     */
    filterCreatedAtLte?: string
    /**
     * The page number to load
     * @type number
     * @memberof RecordingsCommandsApilistRecordings
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof RecordingsCommandsApilistRecordings
     */
    pageSize?: number
}

export interface RecordingsCommandsApiRetrieveRecordingRequest {
    /**
     * Uniquely identifies the recording
     * @type string
     * @memberof RecordingsCommandsApiretrieveRecording
     */
    id: string
}

export class ObjectRecordingsCommandsApi {
    private api: ObservableRecordingsCommandsApi

    public constructor(configuration: Configuration, requestFactory?: RecordingsCommandsApiRequestFactory, responseProcessor?: RecordingsCommandsApiResponseProcessor) {
        this.api = new ObservableRecordingsCommandsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Lists recordings for the authenticated user
     * List recordings
     * @param param the request object
     */
    public listRecordings(param: RecordingsCommandsApiListRecordingsRequest = {}, options?: Configuration): Promise<ListRecordingsResponse> {
        return this.api.listRecordings(param.filterConferenceId, param.filterCreatedAtGte, param.filterCreatedAtLte, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieve a recording from the authenticated user\'s recordings
     * Retrieve a recording
     * @param param the request object
     */
    public retrieveRecording(param: RecordingsCommandsApiRetrieveRecordingRequest, options?: Configuration): Promise<GetRecordingResponse> {
        return this.api.retrieveRecording(param.id,  options).toPromise();
    }

}

import { ObservableRegisterCallApi } from "./ObservableAPI.ts";
import { RegisterCallApiRequestFactory, RegisterCallApiResponseProcessor} from "../apis/RegisterCallApi.ts";

export interface RegisterCallApiRegisterCallRequest {
    /**
     * Register call request
     * @type RegisterCallRequest
     * @memberof RegisterCallApiregisterCall
     */
    registerCallRequest: RegisterCallRequest
}

export class ObjectRegisterCallApi {
    private api: ObservableRegisterCallApi

    public constructor(configuration: Configuration, requestFactory?: RegisterCallApiRequestFactory, responseProcessor?: RegisterCallApiResponseProcessor) {
        this.api = new ObservableRegisterCallApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Register the call before dialing to show your brand on callee\'s phone.
     * Register the call for Google Verified Calls
     * @param param the request object
     */
    public registerCall(param: RegisterCallApiRegisterCallRequest, options?: Configuration): Promise<RegisterCallResponse> {
        return this.api.registerCall(param.registerCallRequest,  options).toPromise();
    }

}

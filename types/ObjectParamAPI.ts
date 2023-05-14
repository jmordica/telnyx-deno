import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

import { AccessIPAddressListResponseSchema } from '../models/AccessIPAddressListResponseSchema.ts';
import { AccessIPAddressPOST } from '../models/AccessIPAddressPOST.ts';
import { AccessIPAddressResponseSchema } from '../models/AccessIPAddressResponseSchema.ts';
import { AccessIPRangeListResponseSchema } from '../models/AccessIPRangeListResponseSchema.ts';
import { AccessIPRangePOST } from '../models/AccessIPRangePOST.ts';
import { AccessIPRangeResponseSchema } from '../models/AccessIPRangeResponseSchema.ts';
import { Action } from '../models/Action.ts';
import { ActionsParticipantsRequest } from '../models/ActionsParticipantsRequest.ts';
import { ActionsParticipantsRequestParticipants } from '../models/ActionsParticipantsRequestParticipants.ts';
import { ActivatePortingOrder202Response } from '../models/ActivatePortingOrder202Response.ts';
import { ActiveCall } from '../models/ActiveCall.ts';
import { ActiveCallsResponse } from '../models/ActiveCallsResponse.ts';
import { AltBusinessIdType } from '../models/AltBusinessIdType.ts';
import { AmdDetailRecord } from '../models/AmdDetailRecord.ts';
import { AnchorsiteOverride } from '../models/AnchorsiteOverride.ts';
import { AnswerRequest } from '../models/AnswerRequest.ts';
import { AssignPhoneNumberRequest } from '../models/AssignPhoneNumberRequest.ts';
import { AssignProfileToCampaignRequest } from '../models/AssignProfileToCampaignRequest.ts';
import { AssignProfileToCampaignResponse } from '../models/AssignProfileToCampaignResponse.ts';
import { AssignmentStatus } from '../models/AssignmentStatus.ts';
import { AssignmentTaskStatusResponse } from '../models/AssignmentTaskStatusResponse.ts';
import { Attempt } from '../models/Attempt.ts';
import { Audio } from '../models/Audio.ts';
import { AuthenticationProvider } from '../models/AuthenticationProvider.ts';
import { AuthenticationProviderCreate } from '../models/AuthenticationProviderCreate.ts';
import { AuthenticationProviderSettings } from '../models/AuthenticationProviderSettings.ts';
import { AutoRespConfigCreateSchema } from '../models/AutoRespConfigCreateSchema.ts';
import { AutorespConfigResponseSchema } from '../models/AutorespConfigResponseSchema.ts';
import { AutorespConfigSchema } from '../models/AutorespConfigSchema.ts';
import { AutorespConfigsResponseSchema } from '../models/AutorespConfigsResponseSchema.ts';
import { AvailablePhoneNumber } from '../models/AvailablePhoneNumber.ts';
import { AvailablePhoneNumberBlock } from '../models/AvailablePhoneNumberBlock.ts';
import { AvailablePhoneNumbersMetadata } from '../models/AvailablePhoneNumbersMetadata.ts';
import { BillingGroup } from '../models/BillingGroup.ts';
import { Body } from '../models/Body.ts';
import { BrandBasic } from '../models/BrandBasic.ts';
import { BrandFeedback } from '../models/BrandFeedback.ts';
import { BrandFeedbackCategory } from '../models/BrandFeedbackCategory.ts';
import { BrandIdentityStatus } from '../models/BrandIdentityStatus.ts';
import { BrandOptionalAttributes } from '../models/BrandOptionalAttributes.ts';
import { BrandRecordSetCSP } from '../models/BrandRecordSetCSP.ts';
import { BrandRelationship } from '../models/BrandRelationship.ts';
import { BrandRequest } from '../models/BrandRequest.ts';
import { BrandResponse } from '../models/BrandResponse.ts';
import { BrandStatus } from '../models/BrandStatus.ts';
import { BridgeRequest } from '../models/BridgeRequest.ts';
import { BulkCreationDetailedStatusResponse } from '../models/BulkCreationDetailedStatusResponse.ts';
import { BulkCreationRequest } from '../models/BulkCreationRequest.ts';
import { BulkCreationResponse } from '../models/BulkCreationResponse.ts';
import { BulkCreationStatusResponse } from '../models/BulkCreationStatusResponse.ts';
import { BulkCreationTasksResponse } from '../models/BulkCreationTasksResponse.ts';
import { BulkCredentialRequest } from '../models/BulkCredentialRequest.ts';
import { BulkCredentialResponse } from '../models/BulkCredentialResponse.ts';
import { BulkCredentialResponseData } from '../models/BulkCredentialResponseData.ts';
import { BulkRoomRecordingsDeleteResponse } from '../models/BulkRoomRecordingsDeleteResponse.ts';
import { BulkRoomRecordingsDeleteResponseData } from '../models/BulkRoomRecordingsDeleteResponseData.ts';
import { BulkSIMCardAction } from '../models/BulkSIMCardAction.ts';
import { BulkSIMCardActionDetailed } from '../models/BulkSIMCardActionDetailed.ts';
import { BulkSIMCardNetworkPreferences202Response } from '../models/BulkSIMCardNetworkPreferences202Response.ts';
import { BulkSIMCardNetworkPreferencesRequest } from '../models/BulkSIMCardNetworkPreferencesRequest.ts';
import { BulkSetPublicIPs202Response } from '../models/BulkSetPublicIPs202Response.ts';
import { BulkSetPublicIPsRequest } from '../models/BulkSetPublicIPsRequest.ts';
import { BulkSimCardActionGet200Response } from '../models/BulkSimCardActionGet200Response.ts';
import { BusinessIdentity } from '../models/BusinessIdentity.ts';
import { BusinessIdentityAddress } from '../models/BusinessIdentityAddress.ts';
import { BusinessIdentityContactsInner } from '../models/BusinessIdentityContactsInner.ts';
import { Button } from '../models/Button.ts';
import { ButtonComponentType } from '../models/ButtonComponentType.ts';
import { ButtonParameter } from '../models/ButtonParameter.ts';
import { ButtonParameterType } from '../models/ButtonParameterType.ts';
import { ButtonSubtype } from '../models/ButtonSubtype.ts';
import { CSVDownloadResponse } from '../models/CSVDownloadResponse.ts';
import { Call } from '../models/Call.ts';
import { CallAnswered } from '../models/CallAnswered.ts';
import { CallAnsweredEvent } from '../models/CallAnsweredEvent.ts';
import { CallAnsweredPayload } from '../models/CallAnsweredPayload.ts';
import { CallBridged } from '../models/CallBridged.ts';
import { CallBridgedEvent } from '../models/CallBridgedEvent.ts';
import { CallBridgedPayload } from '../models/CallBridgedPayload.ts';
import { CallControlApplication } from '../models/CallControlApplication.ts';
import { CallControlApplicationInbound } from '../models/CallControlApplicationInbound.ts';
import { CallControlApplicationOutbound } from '../models/CallControlApplicationOutbound.ts';
import { CallControlApplicationResponse } from '../models/CallControlApplicationResponse.ts';
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
import { CallerName } from '../models/CallerName.ts';
import { Campaign } from '../models/Campaign.ts';
import { CampaignCSP } from '../models/CampaignCSP.ts';
import { CampaignCost } from '../models/CampaignCost.ts';
import { CampaignDeletionResponse } from '../models/CampaignDeletionResponse.ts';
import { CampaignRecordSetCSP } from '../models/CampaignRecordSetCSP.ts';
import { CampaignRegistryApiSchemasBulkCreationMeta } from '../models/CampaignRegistryApiSchemasBulkCreationMeta.ts';
import { CampaignRegistryApiSchemasBulkCreationTaskStatus } from '../models/CampaignRegistryApiSchemasBulkCreationTaskStatus.ts';
import { CampaignRequest } from '../models/CampaignRequest.ts';
import { CampaignSharingChain } from '../models/CampaignSharingChain.ts';
import { CampaignSharingStatus } from '../models/CampaignSharingStatus.ts';
import { CampaignStatus } from '../models/CampaignStatus.ts';
import { CampaignStatusUpdateEvent } from '../models/CampaignStatusUpdateEvent.ts';
import { CancelPortingOrder200Response } from '../models/CancelPortingOrder200Response.ts';
import { Carrier } from '../models/Carrier.ts';
import { CdrGetSyncUsageReportResponse } from '../models/CdrGetSyncUsageReportResponse.ts';
import { CdrUsageReportResponse } from '../models/CdrUsageReportResponse.ts';
import { CheckContact } from '../models/CheckContact.ts';
import { CheckContactRequestBody } from '../models/CheckContactRequestBody.ts';
import { CheckContactResponse } from '../models/CheckContactResponse.ts';
import { ClientStateUpdateRequest } from '../models/ClientStateUpdateRequest.ts';
import { CloudflareSyncStatus } from '../models/CloudflareSyncStatus.ts';
import { CnamListing } from '../models/CnamListing.ts';
import { Comment } from '../models/Comment.ts';
import { CompleteOTAUpdate } from '../models/CompleteOTAUpdate.ts';
import { CompleteOTAUpdateSettings } from '../models/CompleteOTAUpdateSettings.ts';
import { CompositionCompleted } from '../models/CompositionCompleted.ts';
import { CompositionCompletedEvent } from '../models/CompositionCompletedEvent.ts';
import { CompositionCompletedPayload } from '../models/CompositionCompletedPayload.ts';
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
import { ConfirmPortingOrder200Response } from '../models/ConfirmPortingOrder200Response.ts';
import { Connection } from '../models/Connection.ts';
import { ConnectionResponse } from '../models/ConnectionResponse.ts';
import { ConnectionRtcpSettings } from '../models/ConnectionRtcpSettings.ts';
import { ConsumedData } from '../models/ConsumedData.ts';
import { Contact } from '../models/Contact.ts';
import { CostInformation } from '../models/CostInformation.ts';
import { CreateAndroidPushCredentialRequest } from '../models/CreateAndroidPushCredentialRequest.ts';
import { CreateAuthenticationProvider200Response } from '../models/CreateAuthenticationProvider200Response.ts';
import { CreateBillingGroup200Response } from '../models/CreateBillingGroup200Response.ts';
import { CreateBrand } from '../models/CreateBrand.ts';
import { CreateBucketRequest } from '../models/CreateBucketRequest.ts';
import { CreateCallControlApplicationRequest } from '../models/CreateCallControlApplicationRequest.ts';
import { CreateComment200Response } from '../models/CreateComment200Response.ts';
import { CreateComment200ResponseData } from '../models/CreateComment200ResponseData.ts';
import { CreateConferenceRequest } from '../models/CreateConferenceRequest.ts';
import { CreateCredentialConnectionRequest } from '../models/CreateCredentialConnectionRequest.ts';
import { CreateDocServiceDocumentRequest } from '../models/CreateDocServiceDocumentRequest.ts';
import { CreateDocument200Response } from '../models/CreateDocument200Response.ts';
import { CreateDyanmicEmergencyAddress201Response } from '../models/CreateDyanmicEmergencyAddress201Response.ts';
import { CreateDyanmicEmergencyEndpoint201Response } from '../models/CreateDyanmicEmergencyEndpoint201Response.ts';
import { CreateFaxApplicationRequest } from '../models/CreateFaxApplicationRequest.ts';
import { CreateFaxApplicationRequestInbound } from '../models/CreateFaxApplicationRequestInbound.ts';
import { CreateFaxApplicationRequestOutbound } from '../models/CreateFaxApplicationRequestOutbound.ts';
import { CreateFqdnConnectionRequest } from '../models/CreateFqdnConnectionRequest.ts';
import { CreateFqdnRequest } from '../models/CreateFqdnRequest.ts';
import { CreateInboundIpRequest } from '../models/CreateInboundIpRequest.ts';
import { CreateInventoryCoverageRequest200Response } from '../models/CreateInventoryCoverageRequest200Response.ts';
import { CreateIosPushCredentialRequest } from '../models/CreateIosPushCredentialRequest.ts';
import { CreateIpConnectionRequest } from '../models/CreateIpConnectionRequest.ts';
import { CreateIpRequest } from '../models/CreateIpRequest.ts';
import { CreateLedgerBillingGroupReport200Response } from '../models/CreateLedgerBillingGroupReport200Response.ts';
import { CreateLongCodeMessageRequest } from '../models/CreateLongCodeMessageRequest.ts';
import { CreateManagedAccount200Response } from '../models/CreateManagedAccount200Response.ts';
import { CreateManagedAccount422Response } from '../models/CreateManagedAccount422Response.ts';
import { CreateManagedAccountRequest } from '../models/CreateManagedAccountRequest.ts';
import { CreateMessageRequest } from '../models/CreateMessageRequest.ts';
import { CreateMessagingHostedNumberOrderRequest } from '../models/CreateMessagingHostedNumberOrderRequest.ts';
import { CreateMessagingProfileRequest } from '../models/CreateMessagingProfileRequest.ts';
import { CreateNotificationChannels200Response } from '../models/CreateNotificationChannels200Response.ts';
import { CreateNotificationProfile200Response } from '../models/CreateNotificationProfile200Response.ts';
import { CreateNotificationSetting200Response } from '../models/CreateNotificationSetting200Response.ts';
import { CreateNumberBlockOrderRequest } from '../models/CreateNumberBlockOrderRequest.ts';
import { CreateNumberOrderDocumentRequest } from '../models/CreateNumberOrderDocumentRequest.ts';
import { CreateNumberOrderRequest } from '../models/CreateNumberOrderRequest.ts';
import { CreateNumberPoolMessageRequest } from '../models/CreateNumberPoolMessageRequest.ts';
import { CreateNumberReservationRequest } from '../models/CreateNumberReservationRequest.ts';
import { CreateOrUpdateBusinessIdentityRequest } from '../models/CreateOrUpdateBusinessIdentityRequest.ts';
import { CreateOutboundVoiceProfileRequest } from '../models/CreateOutboundVoiceProfileRequest.ts';
import { CreatePortingOrder } from '../models/CreatePortingOrder.ts';
import { CreatePortingOrder201Response } from '../models/CreatePortingOrder201Response.ts';
import { CreatePortingOrderComment } from '../models/CreatePortingOrderComment.ts';
import { CreatePortingOrderComment201Response } from '../models/CreatePortingOrderComment201Response.ts';
import { CreatePrivateWirelessGateway202Response } from '../models/CreatePrivateWirelessGateway202Response.ts';
import { CreatePrivateWirelessGatewayRequest } from '../models/CreatePrivateWirelessGatewayRequest.ts';
import { CreatePushCredentialRequest } from '../models/CreatePushCredentialRequest.ts';
import { CreateRoom201Response } from '../models/CreateRoom201Response.ts';
import { CreateRoomClientToken201Response } from '../models/CreateRoomClientToken201Response.ts';
import { CreateRoomClientToken201ResponseData } from '../models/CreateRoomClientToken201ResponseData.ts';
import { CreateRoomClientTokenRequest } from '../models/CreateRoomClientTokenRequest.ts';
import { CreateRoomComposition202Response } from '../models/CreateRoomComposition202Response.ts';
import { CreateRoomCompositionRequest } from '../models/CreateRoomCompositionRequest.ts';
import { CreateRoomRequest } from '../models/CreateRoomRequest.ts';
import { CreateShortCodeMessageRequest } from '../models/CreateShortCodeMessageRequest.ts';
import { CreateTeXMLSecretRequest } from '../models/CreateTeXMLSecretRequest.ts';
import { CreateTeXMLSecretResult } from '../models/CreateTeXMLSecretResult.ts';
import { CreateTexmlApplicationRequest } from '../models/CreateTexmlApplicationRequest.ts';
import { CreateTexmlApplicationRequestInbound } from '../models/CreateTexmlApplicationRequestInbound.ts';
import { CreateTexmlApplicationRequestOutbound } from '../models/CreateTexmlApplicationRequestOutbound.ts';
import { CreateVerificationRequestCall } from '../models/CreateVerificationRequestCall.ts';
import { CreateVerificationRequestFlashcall } from '../models/CreateVerificationRequestFlashcall.ts';
import { CreateVerificationRequestPSD2 } from '../models/CreateVerificationRequestPSD2.ts';
import { CreateVerificationRequestSMS } from '../models/CreateVerificationRequestSMS.ts';
import { CreateVerificationRequestWhatsapp } from '../models/CreateVerificationRequestWhatsapp.ts';
import { CreateVerificationResponse } from '../models/CreateVerificationResponse.ts';
import { CreateVerifiedCallsDisplayProfileRequest } from '../models/CreateVerifiedCallsDisplayProfileRequest.ts';
import { CreateVerifiedNumberRequest } from '../models/CreateVerifiedNumberRequest.ts';
import { CreateVerifiedNumberResponse } from '../models/CreateVerifiedNumberResponse.ts';
import { CreateVerifyProfileCallRequest } from '../models/CreateVerifyProfileCallRequest.ts';
import { CreateVerifyProfileFlashcallRequest } from '../models/CreateVerifyProfileFlashcallRequest.ts';
import { CreateVerifyProfilePSD2Request } from '../models/CreateVerifyProfilePSD2Request.ts';
import { CreateVerifyProfileRequest } from '../models/CreateVerifyProfileRequest.ts';
import { CreateVerifyProfileSMSRequest } from '../models/CreateVerifyProfileSMSRequest.ts';
import { CreateVerifyProfileWhatsappRequest } from '../models/CreateVerifyProfileWhatsappRequest.ts';
import { CreateWdrReport201Response } from '../models/CreateWdrReport201Response.ts';
import { CreateWhatsAppMessageRequest } from '../models/CreateWhatsAppMessageRequest.ts';
import { CreateWhatsappMessageTemplateRequestBody } from '../models/CreateWhatsappMessageTemplateRequestBody.ts';
import { CreationStatus } from '../models/CreationStatus.ts';
import { CredentialConnection } from '../models/CredentialConnection.ts';
import { CredentialConnectionResponse } from '../models/CredentialConnectionResponse.ts';
import { CredentialInbound } from '../models/CredentialInbound.ts';
import { CredentialOutbound } from '../models/CredentialOutbound.ts';
import { CredentialsResponse } from '../models/CredentialsResponse.ts';
import { CsvDownload } from '../models/CsvDownload.ts';
import { Currencies } from '../models/Currencies.ts';
import { Currency } from '../models/Currency.ts';
import { Cursor } from '../models/Cursor.ts';
import { CursorPagination } from '../models/CursorPagination.ts';
import { CursorPaginationCursors } from '../models/CursorPaginationCursors.ts';
import { CursorPaginationMeta } from '../models/CursorPaginationMeta.ts';
import { CustomSipHeader } from '../models/CustomSipHeader.ts';
import { CustomStorageConfiguration } from '../models/CustomStorageConfiguration.ts';
import { CustomStorageConfigurationConfiguration } from '../models/CustomStorageConfigurationConfiguration.ts';
import { CustomerFacingFQDNsGetIPResponse } from '../models/CustomerFacingFQDNsGetIPResponse.ts';
import { CustomerFacingFQDNsListResponse } from '../models/CustomerFacingFQDNsListResponse.ts';
import { CustomerFacingFQDNsPatch } from '../models/CustomerFacingFQDNsPatch.ts';
import { CustomerFacingFQDNsPost } from '../models/CustomerFacingFQDNsPost.ts';
import { CustomerFacingFQDNsResponseSchema } from '../models/CustomerFacingFQDNsResponseSchema.ts';
import { CustomerServiceRecord } from '../models/CustomerServiceRecord.ts';
import { CustomerServiceRecordAdditionalData } from '../models/CustomerServiceRecordAdditionalData.ts';
import { CustomerServiceRecordPhoneNumberCoverage } from '../models/CustomerServiceRecordPhoneNumberCoverage.ts';
import { CustomerServiceRecordResult } from '../models/CustomerServiceRecordResult.ts';
import { CustomerServiceRecordResultAddress } from '../models/CustomerServiceRecordResultAddress.ts';
import { CustomerServiceRecordResultAdmin } from '../models/CustomerServiceRecordResultAdmin.ts';
import { CustomerServiceRecordStatusChangedEvent } from '../models/CustomerServiceRecordStatusChangedEvent.ts';
import { CustomerServiceRecordStatusChangedEventPayload } from '../models/CustomerServiceRecordStatusChangedEventPayload.ts';
import { CustomerServiceRecordsPostRequest } from '../models/CustomerServiceRecordsPostRequest.ts';
import { DateTimeComponent } from '../models/DateTimeComponent.ts';
import { DateTimeObject } from '../models/DateTimeObject.ts';
import { DateTimeUnixEpoch } from '../models/DateTimeUnixEpoch.ts';
import { Dca } from '../models/Dca.ts';
import { DeleteObjectsRequestInner } from '../models/DeleteObjectsRequestInner.ts';
import { DetailRecord } from '../models/DetailRecord.ts';
import { DetailRecordsSearchResponse } from '../models/DetailRecordsSearchResponse.ts';
import { DetailedTaskStatus } from '../models/DetailedTaskStatus.ts';
import { DialogflowConfig } from '../models/DialogflowConfig.ts';
import { DialogflowConnection } from '../models/DialogflowConnection.ts';
import { DialogflowConnectionResponse } from '../models/DialogflowConnectionResponse.ts';
import { Direction } from '../models/Direction.ts';
import { DocReqsListRequirementTypes200Response } from '../models/DocReqsListRequirementTypes200Response.ts';
import { DocReqsRequirement } from '../models/DocReqsRequirement.ts';
import { DocReqsRequirementType } from '../models/DocReqsRequirementType.ts';
import { DocReqsRequirementTypeAcceptanceCriteria } from '../models/DocReqsRequirementTypeAcceptanceCriteria.ts';
import { DocReqsRetrieveDocumentRequirements200Response } from '../models/DocReqsRetrieveDocumentRequirements200Response.ts';
import { DocReqsRetrieveRequirementType200Response } from '../models/DocReqsRetrieveRequirementType200Response.ts';
import { DocServiceDocument } from '../models/DocServiceDocument.ts';
import { DocServiceDocumentAllOf } from '../models/DocServiceDocumentAllOf.ts';
import { DocServiceDocumentAllOfSize } from '../models/DocServiceDocumentAllOfSize.ts';
import { DocServiceDocumentLink } from '../models/DocServiceDocumentLink.ts';
import { DocServiceDocumentLinkAllOf } from '../models/DocServiceDocumentLinkAllOf.ts';
import { DocServiceDocumentUploadInline } from '../models/DocServiceDocumentUploadInline.ts';
import { DocServiceDocumentUploadURL } from '../models/DocServiceDocumentUploadURL.ts';
import { DocServiceRecord } from '../models/DocServiceRecord.ts';
import { Document } from '../models/Document.ts';
import { Document1 } from '../models/Document1.ts';
import { DownlinkData } from '../models/DownlinkData.ts';
import { DtmfType } from '../models/DtmfType.ts';
import { DynamicEmergencyAddress } from '../models/DynamicEmergencyAddress.ts';
import { DynamicEmergencyEndpoint } from '../models/DynamicEmergencyEndpoint.ts';
import { Email } from '../models/Email.ts';
import { EmergencySettings } from '../models/EmergencySettings.ts';
import { EncryptedMedia } from '../models/EncryptedMedia.ts';
import { EndSession200Response } from '../models/EndSession200Response.ts';
import { EndSession200ResponseData } from '../models/EndSession200ResponseData.ts';
import { EnqueueRequest } from '../models/EnqueueRequest.ts';
import { EntityType } from '../models/EntityType.ts';
import { ErrorSource } from '../models/ErrorSource.ts';
import { Errors } from '../models/Errors.ts';
import { Exchange } from '../models/Exchange.ts';
import { ExtVettingProvider } from '../models/ExtVettingProvider.ts';
import { ExternalVetting } from '../models/ExternalVetting.ts';
import { ExternalWdrDetailRecordDto } from '../models/ExternalWdrDetailRecordDto.ts';
import { ExternalWdrGetDetailResponse } from '../models/ExternalWdrGetDetailResponse.ts';
import { FQDNConnectionResponse } from '../models/FQDNConnectionResponse.ts';
import { FQDNResponse } from '../models/FQDNResponse.ts';
import { Fax } from '../models/Fax.ts';
import { FaxApplication } from '../models/FaxApplication.ts';
import { FaxApplicationResponse } from '../models/FaxApplicationResponse.ts';
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
import { Filter } from '../models/Filter.ts';
import { FindAuthenticationProviders200Response } from '../models/FindAuthenticationProviders200Response.ts';
import { FindNotificationsEvents200Response } from '../models/FindNotificationsEvents200Response.ts';
import { FindNotificationsEventsConditions200Response } from '../models/FindNotificationsEventsConditions200Response.ts';
import { FindNotificationsProfiles200Response } from '../models/FindNotificationsProfiles200Response.ts';
import { FindPortoutComments200Response } from '../models/FindPortoutComments200Response.ts';
import { FindPortoutRequest200Response } from '../models/FindPortoutRequest200Response.ts';
import { Footer } from '../models/Footer.ts';
import { ForbiddenError } from '../models/ForbiddenError.ts';
import { ForbiddenErrorAllOf } from '../models/ForbiddenErrorAllOf.ts';
import { ForbiddenErrorAllOfMeta } from '../models/ForbiddenErrorAllOfMeta.ts';
import { Fqdn } from '../models/Fqdn.ts';
import { FqdnConnection } from '../models/FqdnConnection.ts';
import { FqdnConnectionTransportProtocol } from '../models/FqdnConnectionTransportProtocol.ts';
import { GCSConfigurationData } from '../models/GCSConfigurationData.ts';
import { GatherRequest } from '../models/GatherRequest.ts';
import { GatherUsingAudioRequest } from '../models/GatherUsingAudioRequest.ts';
import { GatherUsingSpeakRequest } from '../models/GatherUsingSpeakRequest.ts';
import { GcbChannelZone } from '../models/GcbChannelZone.ts';
import { GcbPhoneNumber } from '../models/GcbPhoneNumber.ts';
import { GenericError } from '../models/GenericError.ts';
import { GetAllFaxApplicationsResponse } from '../models/GetAllFaxApplicationsResponse.ts';
import { GetAllTelephonyCredentialResponse } from '../models/GetAllTelephonyCredentialResponse.ts';
import { GetAllTexmlApplicationsResponse } from '../models/GetAllTexmlApplicationsResponse.ts';
import { GetChannelZones200Response } from '../models/GetChannelZones200Response.ts';
import { GetCustomerServiceRecord201Response } from '../models/GetCustomerServiceRecord201Response.ts';
import { GetCustomerServiceRecord404Response } from '../models/GetCustomerServiceRecord404Response.ts';
import { GetFaxResponse } from '../models/GetFaxResponse.ts';
import { GetPhoneNumbers200Response } from '../models/GetPhoneNumbers200Response.ts';
import { GetPortRequestSupportingDocuments201Response } from '../models/GetPortRequestSupportingDocuments201Response.ts';
import { GetPortingOrder200Response } from '../models/GetPortingOrder200Response.ts';
import { GetPortingOrder200ResponseMeta } from '../models/GetPortingOrder200ResponseMeta.ts';
import { GetPortingOrderSubRequest200Response } from '../models/GetPortingOrderSubRequest200Response.ts';
import { GetPrivateWirelessGateways200Response } from '../models/GetPrivateWirelessGateways200Response.ts';
import { GetRecordingResponse } from '../models/GetRecordingResponse.ts';
import { GetSubRequestByPortingOrder } from '../models/GetSubRequestByPortingOrder.ts';
import { GetUserBalance200Response } from '../models/GetUserBalance200Response.ts';
import { GetWdrReports200Response } from '../models/GetWdrReports200Response.ts';
import { GetWebhookDeliveries200Response } from '../models/GetWebhookDeliveries200Response.ts';
import { GetWebhookDelivery200Response } from '../models/GetWebhookDelivery200Response.ts';
import { GlobalIP } from '../models/GlobalIP.ts';
import { GlobalIP1 } from '../models/GlobalIP1.ts';
import { GlobalIP2 } from '../models/GlobalIP2.ts';
import { GlobalIPAllowedPort } from '../models/GlobalIPAllowedPort.ts';
import { GlobalIPAllowedPortRange } from '../models/GlobalIPAllowedPortRange.ts';
import { GlobalIPProtocol } from '../models/GlobalIPProtocol.ts';
import { GlobalIpAllowedPortList200Response } from '../models/GlobalIpAllowedPortList200Response.ts';
import { GlobalIpAssignment } from '../models/GlobalIpAssignment.ts';
import { GlobalIpAssignmentCreate202Response } from '../models/GlobalIpAssignmentCreate202Response.ts';
import { GlobalIpAssignmentHealth200Response } from '../models/GlobalIpAssignmentHealth200Response.ts';
import { GlobalIpAssignmentHealthMetric } from '../models/GlobalIpAssignmentHealthMetric.ts';
import { GlobalIpAssignmentHealthMetricGlobalIp } from '../models/GlobalIpAssignmentHealthMetricGlobalIp.ts';
import { GlobalIpAssignmentHealthMetricGlobalIpAssignment } from '../models/GlobalIpAssignmentHealthMetricGlobalIpAssignment.ts';
import { GlobalIpAssignmentHealthMetricGlobalIpAssignmentWireguardPeer } from '../models/GlobalIpAssignmentHealthMetricGlobalIpAssignmentWireguardPeer.ts';
import { GlobalIpAssignmentHealthMetricHealth } from '../models/GlobalIpAssignmentHealthMetricHealth.ts';
import { GlobalIpAssignmentList200Response } from '../models/GlobalIpAssignmentList200Response.ts';
import { GlobalIpAssignmentUpdate } from '../models/GlobalIpAssignmentUpdate.ts';
import { GlobalIpAssignmentUsage200Response } from '../models/GlobalIpAssignmentUsage200Response.ts';
import { GlobalIpAssignmentUsageMetric } from '../models/GlobalIpAssignmentUsageMetric.ts';
import { GlobalIpAssignmentUsageMetricGlobalIp } from '../models/GlobalIpAssignmentUsageMetricGlobalIp.ts';
import { GlobalIpAssignmentUsageMetricGlobalIpAssignment } from '../models/GlobalIpAssignmentUsageMetricGlobalIpAssignment.ts';
import { GlobalIpAssignmentUsageMetricGlobalIpAssignmentWireguardPeer } from '../models/GlobalIpAssignmentUsageMetricGlobalIpAssignmentWireguardPeer.ts';
import { GlobalIpAssignmentUsageMetricReceived } from '../models/GlobalIpAssignmentUsageMetricReceived.ts';
import { GlobalIpAssignmentUsageMetricTransmitted } from '../models/GlobalIpAssignmentUsageMetricTransmitted.ts';
import { GlobalIpCreate202Response } from '../models/GlobalIpCreate202Response.ts';
import { GlobalIpLatency200Response } from '../models/GlobalIpLatency200Response.ts';
import { GlobalIpLatencyMetric } from '../models/GlobalIpLatencyMetric.ts';
import { GlobalIpLatencyMetricMeanLatency } from '../models/GlobalIpLatencyMetricMeanLatency.ts';
import { GlobalIpLatencyMetricPercentileLatency } from '../models/GlobalIpLatencyMetricPercentileLatency.ts';
import { GlobalIpLatencyMetricPercentileLatency0 } from '../models/GlobalIpLatencyMetricPercentileLatency0.ts';
import { GlobalIpLatencyMetricPercentileLatency100 } from '../models/GlobalIpLatencyMetricPercentileLatency100.ts';
import { GlobalIpLatencyMetricPercentileLatency25 } from '../models/GlobalIpLatencyMetricPercentileLatency25.ts';
import { GlobalIpLatencyMetricPercentileLatency50 } from '../models/GlobalIpLatencyMetricPercentileLatency50.ts';
import { GlobalIpLatencyMetricPercentileLatency75 } from '../models/GlobalIpLatencyMetricPercentileLatency75.ts';
import { GlobalIpLatencyMetricPercentileLatency90 } from '../models/GlobalIpLatencyMetricPercentileLatency90.ts';
import { GlobalIpLatencyMetricPercentileLatency99 } from '../models/GlobalIpLatencyMetricPercentileLatency99.ts';
import { GlobalIpLatencyMetricProberLocation } from '../models/GlobalIpLatencyMetricProberLocation.ts';
import { GlobalIpList200Response } from '../models/GlobalIpList200Response.ts';
import { GlobalIpProtocolList200Response } from '../models/GlobalIpProtocolList200Response.ts';
import { GlobalIpUsage200Response } from '../models/GlobalIpUsage200Response.ts';
import { GlobalIpUsageMetric } from '../models/GlobalIpUsageMetric.ts';
import { GlobalIpUsageMetricGlobalIp } from '../models/GlobalIpUsageMetricGlobalIp.ts';
import { HTTPValidationError } from '../models/HTTPValidationError.ts';
import { HangupRequest } from '../models/HangupRequest.ts';
import { Header } from '../models/Header.ts';
import { HostedNumber } from '../models/HostedNumber.ts';
import { Http } from '../models/Http.ts';
import { HttpRequest } from '../models/HttpRequest.ts';
import { HttpResponse } from '../models/HttpResponse.ts';
import { Image } from '../models/Image.ts';
import { Image1 } from '../models/Image1.ts';
import { ImmutableSetLong } from '../models/ImmutableSetLong.ts';
import { ImportExternalVetting } from '../models/ImportExternalVetting.ts';
import { InboundFqdn } from '../models/InboundFqdn.ts';
import { InboundIp } from '../models/InboundIp.ts';
import { InboundMessage } from '../models/InboundMessage.ts';
import { InboundMessageEvent } from '../models/InboundMessageEvent.ts';
import { InboundMessagePayload } from '../models/InboundMessagePayload.ts';
import { InboundMessagePayloadCcInner } from '../models/InboundMessagePayloadCcInner.ts';
import { InboundMessagePayloadCost } from '../models/InboundMessagePayloadCost.ts';
import { InboundMessagePayloadFrom } from '../models/InboundMessagePayloadFrom.ts';
import { InboundMessagePayloadMediaInner } from '../models/InboundMessagePayloadMediaInner.ts';
import { InboundMessagePayloadToInner } from '../models/InboundMessagePayloadToInner.ts';
import { InitiateCallRequest } from '../models/InitiateCallRequest.ts';
import { InitiateCallResult } from '../models/InitiateCallResult.ts';
import { InitiateTeXMLCallResponse } from '../models/InitiateTeXMLCallResponse.ts';
import { Interactive } from '../models/Interactive.ts';
import { InteractiveAction } from '../models/InteractiveAction.ts';
import { InteractiveBody } from '../models/InteractiveBody.ts';
import { InteractiveButton } from '../models/InteractiveButton.ts';
import { InteractiveButtonReply } from '../models/InteractiveButtonReply.ts';
import { InteractiveButtonType } from '../models/InteractiveButtonType.ts';
import { InteractiveFooter } from '../models/InteractiveFooter.ts';
import { InteractiveHeader } from '../models/InteractiveHeader.ts';
import { InteractiveProduct } from '../models/InteractiveProduct.ts';
import { InteractiveSection } from '../models/InteractiveSection.ts';
import { InteractiveSectionRow } from '../models/InteractiveSectionRow.ts';
import { InteractiveType } from '../models/InteractiveType.ts';
import { Interface } from '../models/Interface.ts';
import { InterfaceStatus } from '../models/InterfaceStatus.ts';
import { InventoryCoverage } from '../models/InventoryCoverage.ts';
import { InventoryCoverageMetadata } from '../models/InventoryCoverageMetadata.ts';
import { Ip } from '../models/Ip.ts';
import { IpConnection } from '../models/IpConnection.ts';
import { IpConnectionResponse } from '../models/IpConnectionResponse.ts';
import { IpItem } from '../models/IpItem.ts';
import { IpResponse } from '../models/IpResponse.ts';
import { JoinConferenceRequest } from '../models/JoinConferenceRequest.ts';
import { Language } from '../models/Language.ts';
import { LeaveConferenceRequest } from '../models/LeaveConferenceRequest.ts';
import { LeaveQueueRequest } from '../models/LeaveQueueRequest.ts';
import { LedgerBillingGroupReport } from '../models/LedgerBillingGroupReport.ts';
import { ListAllowedFocWindows200Response } from '../models/ListAllowedFocWindows200Response.ts';
import { ListAvailablePhoneNumbersBlocksResponse } from '../models/ListAvailablePhoneNumbersBlocksResponse.ts';
import { ListAvailablePhoneNumbersResponse } from '../models/ListAvailablePhoneNumbersResponse.ts';
import { ListBillingGroups200Response } from '../models/ListBillingGroups200Response.ts';
import { ListBucketsResponse } from '../models/ListBucketsResponse.ts';
import { ListBucketsResponseBucketsInner } from '../models/ListBucketsResponseBucketsInner.ts';
import { ListBulkSIMCardActions200Response } from '../models/ListBulkSIMCardActions200Response.ts';
import { ListBusinessIdentitiesResponse } from '../models/ListBusinessIdentitiesResponse.ts';
import { ListCSVDownloadsResponse } from '../models/ListCSVDownloadsResponse.ts';
import { ListCallControlApplicationsResponse } from '../models/ListCallControlApplicationsResponse.ts';
import { ListCallEventsResponse } from '../models/ListCallEventsResponse.ts';
import { ListComments200Response } from '../models/ListComments200Response.ts';
import { ListConferencesResponse } from '../models/ListConferencesResponse.ts';
import { ListConnectionsResponse } from '../models/ListConnectionsResponse.ts';
import { ListCredentialConnectionsResponse } from '../models/ListCredentialConnectionsResponse.ts';
import { ListDocumentLinks200Response } from '../models/ListDocumentLinks200Response.ts';
import { ListDocuments200Response } from '../models/ListDocuments200Response.ts';
import { ListDyanmicEmergencyAddresses200Response } from '../models/ListDyanmicEmergencyAddresses200Response.ts';
import { ListDyanmicEmergencyEndpoints200Response } from '../models/ListDyanmicEmergencyEndpoints200Response.ts';
import { ListFQDNConnectionsResponse } from '../models/ListFQDNConnectionsResponse.ts';
import { ListFQDNsResponse } from '../models/ListFQDNsResponse.ts';
import { ListFaxesResponse } from '../models/ListFaxesResponse.ts';
import { ListIpConnectionsResponse } from '../models/ListIpConnectionsResponse.ts';
import { ListIpsResponse } from '../models/ListIpsResponse.ts';
import { ListManagedAccounts200Response } from '../models/ListManagedAccounts200Response.ts';
import { ListMessagingHostedNumberOrderResponse } from '../models/ListMessagingHostedNumberOrderResponse.ts';
import { ListMessagingProfileMetricsResponse } from '../models/ListMessagingProfileMetricsResponse.ts';
import { ListMessagingProfilePhoneNumbersResponse } from '../models/ListMessagingProfilePhoneNumbersResponse.ts';
import { ListMessagingProfileShortCodesResponse } from '../models/ListMessagingProfileShortCodesResponse.ts';
import { ListMessagingProfileUrlDomainsResponse } from '../models/ListMessagingProfileUrlDomainsResponse.ts';
import { ListMessagingProfilesResponse } from '../models/ListMessagingProfilesResponse.ts';
import { ListMessagingSettingsResponse } from '../models/ListMessagingSettingsResponse.ts';
import { ListNotificationChannels200Response } from '../models/ListNotificationChannels200Response.ts';
import { ListNotificationSettings200Response } from '../models/ListNotificationSettings200Response.ts';
import { ListNumberBlockOrdersResponse } from '../models/ListNumberBlockOrdersResponse.ts';
import { ListNumberOrderDocumentsResponse } from '../models/ListNumberOrderDocumentsResponse.ts';
import { ListNumberOrderPhoneNumbersResponse } from '../models/ListNumberOrderPhoneNumbersResponse.ts';
import { ListNumberOrdersResponse } from '../models/ListNumberOrdersResponse.ts';
import { ListNumberReservationsResponse } from '../models/ListNumberReservationsResponse.ts';
import { ListObjectsResponse } from '../models/ListObjectsResponse.ts';
import { ListObjectsResponseContentsInner } from '../models/ListObjectsResponseContentsInner.ts';
import { ListOfMediaResourcesResponse } from '../models/ListOfMediaResourcesResponse.ts';
import { ListOutboundChannels200Response } from '../models/ListOutboundChannels200Response.ts';
import { ListOutboundChannels200ResponseData } from '../models/ListOutboundChannels200ResponseData.ts';
import { ListOutboundVoiceProfilesResponse } from '../models/ListOutboundVoiceProfilesResponse.ts';
import { ListParticipantsResponse } from '../models/ListParticipantsResponse.ts';
import { ListPhoneNumberBlocksBackgroundJobsResponse } from '../models/ListPhoneNumberBlocksBackgroundJobsResponse.ts';
import { ListPhoneNumbersBackgroundJobsResponse } from '../models/ListPhoneNumbersBackgroundJobsResponse.ts';
import { ListPhoneNumbersResponse } from '../models/ListPhoneNumbersResponse.ts';
import { ListPhoneNumbersWithVoiceSettingsResponse } from '../models/ListPhoneNumbersWithVoiceSettingsResponse.ts';
import { ListPortingOrderDocuments200Response } from '../models/ListPortingOrderDocuments200Response.ts';
import { ListPortingOrderRequirements200Response } from '../models/ListPortingOrderRequirements200Response.ts';
import { ListPortingOrders200Response } from '../models/ListPortingOrders200Response.ts';
import { ListPortingOrdersActivationJobs200Response } from '../models/ListPortingOrdersActivationJobs200Response.ts';
import { ListPortingOrdersComments200Response } from '../models/ListPortingOrdersComments200Response.ts';
import { ListPortingOrdersExceptionTypes200Response } from '../models/ListPortingOrdersExceptionTypes200Response.ts';
import { ListPortingPhoneNumbers200Response } from '../models/ListPortingPhoneNumbers200Response.ts';
import { ListPortoutRequest200Response } from '../models/ListPortoutRequest200Response.ts';
import { ListQueueCallsResponse } from '../models/ListQueueCallsResponse.ts';
import { ListRecordingsResponse } from '../models/ListRecordingsResponse.ts';
import { ListRegulartoryRequirements200Response } from '../models/ListRegulartoryRequirements200Response.ts';
import { ListRequirements200Response } from '../models/ListRequirements200Response.ts';
import { ListRoomCompositions200Response } from '../models/ListRoomCompositions200Response.ts';
import { ListRoomParticipants200Response } from '../models/ListRoomParticipants200Response.ts';
import { ListRoomRecordings200Response } from '../models/ListRoomRecordings200Response.ts';
import { ListRoomSessions200Response } from '../models/ListRoomSessions200Response.ts';
import { ListRooms200Response } from '../models/ListRooms200Response.ts';
import { ListSIMCardActions200Response } from '../models/ListSIMCardActions200Response.ts';
import { ListShortCodesResponse } from '../models/ListShortCodesResponse.ts';
import { ListSimCardDataUsageNotifications200Response } from '../models/ListSimCardDataUsageNotifications200Response.ts';
import { ListSubNumberOrdersResponse } from '../models/ListSubNumberOrdersResponse.ts';
import { ListTagsResponse } from '../models/ListTagsResponse.ts';
import { ListTagsResponseDataInner } from '../models/ListTagsResponseDataInner.ts';
import { ListVerificationsResponse } from '../models/ListVerificationsResponse.ts';
import { ListVerifiedCallsDisplayProfilesResponse } from '../models/ListVerifiedCallsDisplayProfilesResponse.ts';
import { ListVerifiedNumbersResponse } from '../models/ListVerifiedNumbersResponse.ts';
import { ListVerifyProfilesResponse } from '../models/ListVerifyProfilesResponse.ts';
import { ListWhatsAppBusinessAccountsResponse } from '../models/ListWhatsAppBusinessAccountsResponse.ts';
import { ListWhatsAppPhoneNumbersResponse } from '../models/ListWhatsAppPhoneNumbersResponse.ts';
import { Location } from '../models/Location.ts';
import { Location1Inner } from '../models/Location1Inner.ts';
import { Loopcount } from '../models/Loopcount.ts';
import { ManagedAccount } from '../models/ManagedAccount.ts';
import { ManagedAccountBalance } from '../models/ManagedAccountBalance.ts';
import { MarkCommentRead200Response } from '../models/MarkCommentRead200Response.ts';
import { MarkCommentRead200ResponseData } from '../models/MarkCommentRead200ResponseData.ts';
import { MarkMessageAsReadRequestBody } from '../models/MarkMessageAsReadRequestBody.ts';
import { MdrDeleteDetailReportResponse } from '../models/MdrDeleteDetailReportResponse.ts';
import { MdrDeleteUsageReportsResponse } from '../models/MdrDeleteUsageReportsResponse.ts';
import { MdrDetailReportResponse } from '../models/MdrDetailReportResponse.ts';
import { MdrDetailResponse } from '../models/MdrDetailResponse.ts';
import { MdrGetDetailReportByIdResponse } from '../models/MdrGetDetailReportByIdResponse.ts';
import { MdrGetDetailReportResponse } from '../models/MdrGetDetailReportResponse.ts';
import { MdrGetDetailResponse } from '../models/MdrGetDetailResponse.ts';
import { MdrGetSyncUsageReportResponse } from '../models/MdrGetSyncUsageReportResponse.ts';
import { MdrGetUsageReportsByIdResponse } from '../models/MdrGetUsageReportsByIdResponse.ts';
import { MdrGetUsageReportsResponse } from '../models/MdrGetUsageReportsResponse.ts';
import { MdrPostDetailReportRequest } from '../models/MdrPostDetailReportRequest.ts';
import { MdrPostDetailReportResponse } from '../models/MdrPostDetailReportResponse.ts';
import { MdrPostUsageReportRequest } from '../models/MdrPostUsageReportRequest.ts';
import { MdrPostUsageReportsResponse } from '../models/MdrPostUsageReportsResponse.ts';
import { MdrUsageRecord } from '../models/MdrUsageRecord.ts';
import { MdrUsageReportResponse } from '../models/MdrUsageReportResponse.ts';
import { MediaFeatures } from '../models/MediaFeatures.ts';
import { MediaResource } from '../models/MediaResource.ts';
import { MediaResourceResponse } from '../models/MediaResourceResponse.ts';
import { MediaStorageDetailRecord } from '../models/MediaStorageDetailRecord.ts';
import { Message } from '../models/Message.ts';
import { MessageDetailRecord } from '../models/MessageDetailRecord.ts';
import { MessageResponse } from '../models/MessageResponse.ts';
import { MessageType } from '../models/MessageType.ts';
import { MessagingFeatureSet } from '../models/MessagingFeatureSet.ts';
import { MessagingHostedNumberOrder } from '../models/MessagingHostedNumberOrder.ts';
import { MessagingProfile } from '../models/MessagingProfile.ts';
import { MessagingProfileDetailedMetric } from '../models/MessagingProfileDetailedMetric.ts';
import { MessagingProfileDetailedMetrics } from '../models/MessagingProfileDetailedMetrics.ts';
import { MessagingProfileHighLevelMetrics } from '../models/MessagingProfileHighLevelMetrics.ts';
import { MessagingProfileHighLevelMetricsInbound } from '../models/MessagingProfileHighLevelMetricsInbound.ts';
import { MessagingProfileHighLevelMetricsOutbound } from '../models/MessagingProfileHighLevelMetricsOutbound.ts';
import { MessagingProfileMessageTypeMetrics } from '../models/MessagingProfileMessageTypeMetrics.ts';
import { MessagingProfileResponse } from '../models/MessagingProfileResponse.ts';
import { MessagingUrlDomain } from '../models/MessagingUrlDomain.ts';
import { Meta } from '../models/Meta.ts';
import { Metadata } from '../models/Metadata.ts';
import { Mno } from '../models/Mno.ts';
import { MobileOperatorNetwork } from '../models/MobileOperatorNetwork.ts';
import { MobileOperatorNetworkPreferencesRequest } from '../models/MobileOperatorNetworkPreferencesRequest.ts';
import { MobileOperatorNetworkPreferencesResponse } from '../models/MobileOperatorNetworkPreferencesResponse.ts';
import { MobileOperatorNetworksGet200Response } from '../models/MobileOperatorNetworksGet200Response.ts';
import { ModelError } from '../models/ModelError.ts';
import { Money } from '../models/Money.ts';
import { Network } from '../models/Network.ts';
import { Network1 } from '../models/Network1.ts';
import { NetworkCreate } from '../models/NetworkCreate.ts';
import { NetworkCreate200Response } from '../models/NetworkCreate200Response.ts';
import { NetworkInterface } from '../models/NetworkInterface.ts';
import { NetworkInterface1 } from '../models/NetworkInterface1.ts';
import { NetworkInterfaceList200Response } from '../models/NetworkInterfaceList200Response.ts';
import { NetworkList200Response } from '../models/NetworkList200Response.ts';
import { NewBillingGroup } from '../models/NewBillingGroup.ts';
import { NewLedgerBillingGroupReport } from '../models/NewLedgerBillingGroupReport.ts';
import { NotificationChannel } from '../models/NotificationChannel.ts';
import { NotificationEvent } from '../models/NotificationEvent.ts';
import { NotificationEventCondition } from '../models/NotificationEventCondition.ts';
import { NotificationEventConditionParametersInner } from '../models/NotificationEventConditionParametersInner.ts';
import { NotificationProfile } from '../models/NotificationProfile.ts';
import { NotificationSetting } from '../models/NotificationSetting.ts';
import { NotificationSettingParametersInner } from '../models/NotificationSettingParametersInner.ts';
import { NumberBlockOrder } from '../models/NumberBlockOrder.ts';
import { NumberBlockOrderResponse } from '../models/NumberBlockOrderResponse.ts';
import { NumberHealthMetrics } from '../models/NumberHealthMetrics.ts';
import { NumberLookupRecord } from '../models/NumberLookupRecord.ts';
import { NumberLookupResponse } from '../models/NumberLookupResponse.ts';
import { NumberOrder } from '../models/NumberOrder.ts';
import { NumberOrderBlockEvent } from '../models/NumberOrderBlockEvent.ts';
import { NumberOrderDocument } from '../models/NumberOrderDocument.ts';
import { NumberOrderDocumentResponse } from '../models/NumberOrderDocumentResponse.ts';
import { NumberOrderPhoneNumber } from '../models/NumberOrderPhoneNumber.ts';
import { NumberOrderPhoneNumberResponse } from '../models/NumberOrderPhoneNumberResponse.ts';
import { NumberOrderResponse } from '../models/NumberOrderResponse.ts';
import { NumberOrderWithPhoneNumbers } from '../models/NumberOrderWithPhoneNumbers.ts';
import { NumberOrderWithPhoneNumbersAllOf } from '../models/NumberOrderWithPhoneNumbersAllOf.ts';
import { NumberOrdered } from '../models/NumberOrdered.ts';
import { NumberOrderedEvent } from '../models/NumberOrderedEvent.ts';
import { NumberPoolSettings } from '../models/NumberPoolSettings.ts';
import { NumberReservation } from '../models/NumberReservation.ts';
import { NumberReservationResponse } from '../models/NumberReservationResponse.ts';
import { OTAUpdateGET200Response } from '../models/OTAUpdateGET200Response.ts';
import { OTAUpdatesList200Response } from '../models/OTAUpdatesList200Response.ts';
import { OrderExternalVetting } from '../models/OrderExternalVetting.ts';
import { Organization } from '../models/Organization.ts';
import { OutboundCallRecording } from '../models/OutboundCallRecording.ts';
import { OutboundIp } from '../models/OutboundIp.ts';
import { OutboundMessage } from '../models/OutboundMessage.ts';
import { OutboundMessageEvent } from '../models/OutboundMessageEvent.ts';
import { OutboundMessageEventMeta } from '../models/OutboundMessageEventMeta.ts';
import { OutboundMessagePayload } from '../models/OutboundMessagePayload.ts';
import { OutboundMessagePayloadFrom } from '../models/OutboundMessagePayloadFrom.ts';
import { OutboundMessagePayloadMediaInner } from '../models/OutboundMessagePayloadMediaInner.ts';
import { OutboundMessagePayloadToInner } from '../models/OutboundMessagePayloadToInner.ts';
import { OutboundVoiceProfile } from '../models/OutboundVoiceProfile.ts';
import { OutboundVoiceProfileResponse } from '../models/OutboundVoiceProfileResponse.ts';
import { PWGAssignedResourcesSummary } from '../models/PWGAssignedResourcesSummary.ts';
import { PaginatedVerificationRequestStatus } from '../models/PaginatedVerificationRequestStatus.ts';
import { PaginationMeta } from '../models/PaginationMeta.ts';
import { PaginationMetaSimple } from '../models/PaginationMetaSimple.ts';
import { Participant } from '../models/Participant.ts';
import { ParticipantConference } from '../models/ParticipantConference.ts';
import { ParticipantJoined } from '../models/ParticipantJoined.ts';
import { ParticipantJoinedEvent } from '../models/ParticipantJoinedEvent.ts';
import { ParticipantJoinedPayload } from '../models/ParticipantJoinedPayload.ts';
import { ParticipantLeft } from '../models/ParticipantLeft.ts';
import { ParticipantLeftEvent } from '../models/ParticipantLeftEvent.ts';
import { ParticipantLeftPayload } from '../models/ParticipantLeftPayload.ts';
import { PatchGroupRequest } from '../models/PatchGroupRequest.ts';
import { PatchRoomRequest } from '../models/PatchRoomRequest.ts';
import { PauseConferenceRecordingRequest } from '../models/PauseConferenceRecordingRequest.ts';
import { PauseRecordingRequest } from '../models/PauseRecordingRequest.ts';
import { Phone } from '../models/Phone.ts';
import { PhoneNumber } from '../models/PhoneNumber.ts';
import { PhoneNumberBlocksJob } from '../models/PhoneNumberBlocksJob.ts';
import { PhoneNumberBlocksJobDeletePhoneNumberBlock } from '../models/PhoneNumberBlocksJobDeletePhoneNumberBlock.ts';
import { PhoneNumberBlocksJobDeletePhoneNumberBlockRequest } from '../models/PhoneNumberBlocksJobDeletePhoneNumberBlockRequest.ts';
import { PhoneNumberBlocksJobFailedOperation } from '../models/PhoneNumberBlocksJobFailedOperation.ts';
import { PhoneNumberBlocksJobSuccessfulOperation } from '../models/PhoneNumberBlocksJobSuccessfulOperation.ts';
import { PhoneNumberCampaign } from '../models/PhoneNumberCampaign.ts';
import { PhoneNumberCampaignCreate } from '../models/PhoneNumberCampaignCreate.ts';
import { PhoneNumberCampaignPaginated } from '../models/PhoneNumberCampaignPaginated.ts';
import { PhoneNumberCampaignUpdate } from '../models/PhoneNumberCampaignUpdate.ts';
import { PhoneNumberDeletedDetailed } from '../models/PhoneNumberDeletedDetailed.ts';
import { PhoneNumberDetailed } from '../models/PhoneNumberDetailed.ts';
import { PhoneNumberEnableEmergency } from '../models/PhoneNumberEnableEmergency.ts';
import { PhoneNumberEnableEmergencyRequest } from '../models/PhoneNumberEnableEmergencyRequest.ts';
import { PhoneNumberRegulatoryRequirement } from '../models/PhoneNumberRegulatoryRequirement.ts';
import { PhoneNumberRegulatoryRequirementAllOf } from '../models/PhoneNumberRegulatoryRequirementAllOf.ts';
import { PhoneNumberResponse } from '../models/PhoneNumberResponse.ts';
import { PhoneNumberResponse1 } from '../models/PhoneNumberResponse1.ts';
import { PhoneNumberStatus } from '../models/PhoneNumberStatus.ts';
import { PhoneNumberStatusResponsePaginated } from '../models/PhoneNumberStatusResponsePaginated.ts';
import { PhoneNumberWithMessagingSettings } from '../models/PhoneNumberWithMessagingSettings.ts';
import { PhoneNumberWithMessagingSettingsFeatures } from '../models/PhoneNumberWithMessagingSettingsFeatures.ts';
import { PhoneNumberWithVoiceSettings } from '../models/PhoneNumberWithVoiceSettings.ts';
import { PhoneNumbersBulkUpdateError } from '../models/PhoneNumbersBulkUpdateError.ts';
import { PhoneNumbersEnableEmergency } from '../models/PhoneNumbersEnableEmergency.ts';
import { PhoneNumbersJob } from '../models/PhoneNumbersJob.ts';
import { PhoneNumbersJobDeletePhoneNumbers } from '../models/PhoneNumbersJobDeletePhoneNumbers.ts';
import { PhoneNumbersJobDeletePhoneNumbersRequest } from '../models/PhoneNumbersJobDeletePhoneNumbersRequest.ts';
import { PhoneNumbersJobFailedOperation } from '../models/PhoneNumbersJobFailedOperation.ts';
import { PhoneNumbersJobPendingOperation } from '../models/PhoneNumbersJobPendingOperation.ts';
import { PhoneNumbersJobPhoneNumber } from '../models/PhoneNumbersJobPhoneNumber.ts';
import { PhoneNumbersJobSuccessfulOperation } from '../models/PhoneNumbersJobSuccessfulOperation.ts';
import { PhoneNumbersJobUpdateEmergencySettingsRequest } from '../models/PhoneNumbersJobUpdateEmergencySettingsRequest.ts';
import { PhoneNumbersJobUpdatePhoneNumbers } from '../models/PhoneNumbersJobUpdatePhoneNumbers.ts';
import { PhoneNumbersJobUpdatePhoneNumbersRequest } from '../models/PhoneNumbersJobUpdatePhoneNumbersRequest.ts';
import { PlayAudioUrlRequest } from '../models/PlayAudioUrlRequest.ts';
import { PlaybackStopRequest } from '../models/PlaybackStopRequest.ts';
import { PortOutSupportingDocument } from '../models/PortOutSupportingDocument.ts';
import { Portability } from '../models/Portability.ts';
import { PortabilityCheckDetails } from '../models/PortabilityCheckDetails.ts';
import { PortabilityStatus } from '../models/PortabilityStatus.ts';
import { PortingOrder } from '../models/PortingOrder.ts';
import { PortingOrderActivationSettings } from '../models/PortingOrderActivationSettings.ts';
import { PortingOrderActivationStatus } from '../models/PortingOrderActivationStatus.ts';
import { PortingOrderDocument } from '../models/PortingOrderDocument.ts';
import { PortingOrderDocuments } from '../models/PortingOrderDocuments.ts';
import { PortingOrderEndUser } from '../models/PortingOrderEndUser.ts';
import { PortingOrderEndUserAdmin } from '../models/PortingOrderEndUserAdmin.ts';
import { PortingOrderEndUserLocation } from '../models/PortingOrderEndUserLocation.ts';
import { PortingOrderMisc } from '../models/PortingOrderMisc.ts';
import { PortingOrderPhoneNumberConfiguration } from '../models/PortingOrderPhoneNumberConfiguration.ts';
import { PortingOrderRequirement } from '../models/PortingOrderRequirement.ts';
import { PortingOrderRequirementDetail } from '../models/PortingOrderRequirementDetail.ts';
import { PortingOrderRequirementDetailRequirementType } from '../models/PortingOrderRequirementDetailRequirementType.ts';
import { PortingOrderStatus } from '../models/PortingOrderStatus.ts';
import { PortingOrderType } from '../models/PortingOrderType.ts';
import { PortingOrderUserFeedback } from '../models/PortingOrderUserFeedback.ts';
import { PortingOrdersActivationJob } from '../models/PortingOrdersActivationJob.ts';
import { PortingOrdersAllowedFocWindow } from '../models/PortingOrdersAllowedFocWindow.ts';
import { PortingOrdersComment } from '../models/PortingOrdersComment.ts';
import { PortingOrdersExceptionType } from '../models/PortingOrdersExceptionType.ts';
import { PortingPhoneNumber } from '../models/PortingPhoneNumber.ts';
import { PortoutComment } from '../models/PortoutComment.ts';
import { PortoutDetails } from '../models/PortoutDetails.ts';
import { PostPortRequestComment201Response } from '../models/PostPortRequestComment201Response.ts';
import { PostPortRequestCommentRequest } from '../models/PostPortRequestCommentRequest.ts';
import { PostPortRequestSupportingDocumentsRequest } from '../models/PostPortRequestSupportingDocumentsRequest.ts';
import { PostPortRequestSupportingDocumentsRequestDocumentsInner } from '../models/PostPortRequestSupportingDocumentsRequestDocumentsInner.ts';
import { PostPortabilityCheck201Response } from '../models/PostPortabilityCheck201Response.ts';
import { PostPortabilityCheckRequest } from '../models/PostPortabilityCheckRequest.ts';
import { PostValidateRegistrationCodesRequest } from '../models/PostValidateRegistrationCodesRequest.ts';
import { PrivateWirelessGateway } from '../models/PrivateWirelessGateway.ts';
import { PrivateWirelessGatewayRequest } from '../models/PrivateWirelessGatewayRequest.ts';
import { PrivateWirelessGatewayStatus } from '../models/PrivateWirelessGatewayStatus.ts';
import { ProfileAssignmentPhoneNumbers } from '../models/ProfileAssignmentPhoneNumbers.ts';
import { PublicCompany } from '../models/PublicCompany.ts';
import { PublicCompanyRecordSet } from '../models/PublicCompanyRecordSet.ts';
import { PublicInternetGateway } from '../models/PublicInternetGateway.ts';
import { PublicInternetGateway1 } from '../models/PublicInternetGateway1.ts';
import { PublicInternetGatewayCreate } from '../models/PublicInternetGatewayCreate.ts';
import { PublicInternetGatewayCreate202Response } from '../models/PublicInternetGatewayCreate202Response.ts';
import { PublicInternetGatewayList200Response } from '../models/PublicInternetGatewayList200Response.ts';
import { PublicInternetGatewayRead } from '../models/PublicInternetGatewayRead.ts';
import { PushCredential } from '../models/PushCredential.ts';
import { Quality } from '../models/Quality.ts';
import { Queue } from '../models/Queue.ts';
import { QueueCall } from '../models/QueueCall.ts';
import { QueueCallResponse } from '../models/QueueCallResponse.ts';
import { QueueResponse } from '../models/QueueResponse.ts';
import { ReadComment } from '../models/ReadComment.ts';
import { ReadCommentAllOf } from '../models/ReadCommentAllOf.ts';
import { Record } from '../models/Record.ts';
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
import { RefreshRoomClientToken201Response } from '../models/RefreshRoomClientToken201Response.ts';
import { RefreshRoomClientToken201ResponseData } from '../models/RefreshRoomClientToken201ResponseData.ts';
import { RefreshRoomClientTokenRequest } from '../models/RefreshRoomClientTokenRequest.ts';
import { Region } from '../models/Region.ts';
import { RegionIn } from '../models/RegionIn.ts';
import { RegionInformation } from '../models/RegionInformation.ts';
import { RegionList200Response } from '../models/RegionList200Response.ts';
import { RegionOut } from '../models/RegionOut.ts';
import { RegionOutRegion } from '../models/RegionOutRegion.ts';
import { RegisterCallCommandResult } from '../models/RegisterCallCommandResult.ts';
import { RegisterCallRequest } from '../models/RegisterCallRequest.ts';
import { RegisterCallResponse } from '../models/RegisterCallResponse.ts';
import { RegulatoryRequirements } from '../models/RegulatoryRequirements.ts';
import { RegulatoryRequirementsRegionInformationInner } from '../models/RegulatoryRequirementsRegionInformationInner.ts';
import { RegulatoryRequirementsRegulatoryRequirementsInner } from '../models/RegulatoryRequirementsRegulatoryRequirementsInner.ts';
import { RegulatoryRequirementsRegulatoryRequirementsInnerAcceptanceCriteria } from '../models/RegulatoryRequirementsRegulatoryRequirementsInnerAcceptanceCriteria.ts';
import { RejectRequest } from '../models/RejectRequest.ts';
import { ReplacedLinkClick } from '../models/ReplacedLinkClick.ts';
import { ReplacedLinkClickEvent } from '../models/ReplacedLinkClickEvent.ts';
import { Reply } from '../models/Reply.ts';
import { ReservedPhoneNumber } from '../models/ReservedPhoneNumber.ts';
import { ResourceNotFoundError } from '../models/ResourceNotFoundError.ts';
import { ResourceNotFoundErrorAllOf } from '../models/ResourceNotFoundErrorAllOf.ts';
import { ResourceNotFoundErrorAllOfMeta } from '../models/ResourceNotFoundErrorAllOfMeta.ts';
import { ResponseAssignMessagingProfileToCampaignPublicPhonenumberassignmentbyprofilePost } from '../models/ResponseAssignMessagingProfileToCampaignPublicPhonenumberassignmentbyprofilePost.ts';
import { ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPhonenumberPut } from '../models/ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPhonenumberPut.ts';
import { ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPost } from '../models/ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPost.ts';
import { ResumeConferenceRecordingRequest } from '../models/ResumeConferenceRecordingRequest.ts';
import { ResumeRecordingRequest } from '../models/ResumeRecordingRequest.ts';
import { RetrieveCallStatusResponse } from '../models/RetrieveCallStatusResponse.ts';
import { RetrieveMessagingHostedNumberOrderResponse } from '../models/RetrieveMessagingHostedNumberOrderResponse.ts';
import { RetrieveMessagingHostedNumberResponse } from '../models/RetrieveMessagingHostedNumberResponse.ts';
import { RetrieveMessagingProfileMetricsResponse } from '../models/RetrieveMessagingProfileMetricsResponse.ts';
import { RetrieveMessagingSettingsResponse } from '../models/RetrieveMessagingSettingsResponse.ts';
import { RetrievePhoneNumberVoiceResponse } from '../models/RetrievePhoneNumberVoiceResponse.ts';
import { RetrieveVerificationResponse } from '../models/RetrieveVerificationResponse.ts';
import { Room } from '../models/Room.ts';
import { RoomComposition } from '../models/RoomComposition.ts';
import { RoomParticipant } from '../models/RoomParticipant.ts';
import { RoomRecording } from '../models/RoomRecording.ts';
import { RoomSession } from '../models/RoomSession.ts';
import { S3ConfigurationData } from '../models/S3ConfigurationData.ts';
import { SIMCard } from '../models/SIMCard.ts';
import { SIMCardAction } from '../models/SIMCardAction.ts';
import { SIMCardActionStatus } from '../models/SIMCardActionStatus.ts';
import { SIMCardActionsSummary } from '../models/SIMCardActionsSummary.ts';
import { SIMCardCurrentBillingPeriodConsumedData } from '../models/SIMCardCurrentBillingPeriodConsumedData.ts';
import { SIMCardCurrentDeviceLocation } from '../models/SIMCardCurrentDeviceLocation.ts';
import { SIMCardDataLimit } from '../models/SIMCardDataLimit.ts';
import { SIMCardDeviceDetails } from '../models/SIMCardDeviceDetails.ts';
import { SIMCardDeviceDetailsGet200Response } from '../models/SIMCardDeviceDetailsGet200Response.ts';
import { SIMCardGroup } from '../models/SIMCardGroup.ts';
import { SIMCardGroupAction } from '../models/SIMCardGroupAction.ts';
import { SIMCardGroupActionSettings } from '../models/SIMCardGroupActionSettings.ts';
import { SIMCardGroupCreate } from '../models/SIMCardGroupCreate.ts';
import { SIMCardGroupDataLimit } from '../models/SIMCardGroupDataLimit.ts';
import { SIMCardGroupPatch } from '../models/SIMCardGroupPatch.ts';
import { SIMCardNetworkPreference } from '../models/SIMCardNetworkPreference.ts';
import { SIMCardNetworkPreferenceWithOTAUpdates } from '../models/SIMCardNetworkPreferenceWithOTAUpdates.ts';
import { SIMCardNetworkPreferencesGet200Response } from '../models/SIMCardNetworkPreferencesGet200Response.ts';
import { SIMCardNetworkPreferencesPutRequest } from '../models/SIMCardNetworkPreferencesPutRequest.ts';
import { SIMCardOrder } from '../models/SIMCardOrder.ts';
import { SIMCardOrderCost } from '../models/SIMCardOrderCost.ts';
import { SIMCardOrderOrderAddress } from '../models/SIMCardOrderOrderAddress.ts';
import { SIMCardOrderPreview } from '../models/SIMCardOrderPreview.ts';
import { SIMCardOrderPreviewTotalCost } from '../models/SIMCardOrderPreviewTotalCost.ts';
import { SIMCardPublicIP } from '../models/SIMCardPublicIP.ts';
import { SIMCardPublicIPGet200Response } from '../models/SIMCardPublicIPGet200Response.ts';
import { SIMCardRegistration } from '../models/SIMCardRegistration.ts';
import { SIMCardRegistrationCodeValidation } from '../models/SIMCardRegistrationCodeValidation.ts';
import { SIMCardRegistrationCodeValidations } from '../models/SIMCardRegistrationCodeValidations.ts';
import { SIMCardStatus } from '../models/SIMCardStatus.ts';
import { SearchedSIMCardGroup } from '../models/SearchedSIMCardGroup.ts';
import { SendDTMFRequest } from '../models/SendDTMFRequest.ts';
import { SendFaxRequest } from '../models/SendFaxRequest.ts';
import { ServicePlan } from '../models/ServicePlan.ts';
import { SessionEnded } from '../models/SessionEnded.ts';
import { SessionEndedEvent } from '../models/SessionEndedEvent.ts';
import { SessionEndedPayload } from '../models/SessionEndedPayload.ts';
import { SessionStarted } from '../models/SessionStarted.ts';
import { SessionStartedEvent } from '../models/SessionStartedEvent.ts';
import { SessionStartedPayload } from '../models/SessionStartedPayload.ts';
import { SetSIMCardGroupPrivateWirelessGatewayRequest } from '../models/SetSIMCardGroupPrivateWirelessGatewayRequest.ts';
import { Settings } from '../models/Settings.ts';
import { SettingsDataErrorMessage } from '../models/SettingsDataErrorMessage.ts';
import { SharedCampaign } from '../models/SharedCampaign.ts';
import { SharedCampaignRecordSet } from '../models/SharedCampaignRecordSet.ts';
import { ShortCode } from '../models/ShortCode.ts';
import { ShortCodeResponse } from '../models/ShortCodeResponse.ts';
import { ShowBusinessIdentityResponse } from '../models/ShowBusinessIdentityResponse.ts';
import { ShowVerifiedCallsDisplayProfileResponse } from '../models/ShowVerifiedCallsDisplayProfileResponse.ts';
import { SimCardActionGet200Response } from '../models/SimCardActionGet200Response.ts';
import { SimCardDataUsageNotification } from '../models/SimCardDataUsageNotification.ts';
import { SimCardDataUsageNotificationsPost201Response } from '../models/SimCardDataUsageNotificationsPost201Response.ts';
import { SimCardDataUsageNotificationsPostRequest } from '../models/SimCardDataUsageNotificationsPostRequest.ts';
import { SimCardDataUsageNotificationsPostRequestThreshold } from '../models/SimCardDataUsageNotificationsPostRequestThreshold.ts';
import { SimCardGet200Response } from '../models/SimCardGet200Response.ts';
import { SimCardGroupActionGet200Response } from '../models/SimCardGroupActionGet200Response.ts';
import { SimCardGroupActionsGet200Response } from '../models/SimCardGroupActionsGet200Response.ts';
import { SimCardGroupsGetAll200Response } from '../models/SimCardGroupsGetAll200Response.ts';
import { SimCardGroupsPost200Response } from '../models/SimCardGroupsPost200Response.ts';
import { SimCardOrderCreate } from '../models/SimCardOrderCreate.ts';
import { SimCardOrdersGet200Response } from '../models/SimCardOrdersGet200Response.ts';
import { SimCardOrdersPost200Response } from '../models/SimCardOrdersPost200Response.ts';
import { SimCardOrdersPreview202Response } from '../models/SimCardOrdersPreview202Response.ts';
import { SimCardOrdersPreviewRequest } from '../models/SimCardOrdersPreviewRequest.ts';
import { SimCardRegister202Response } from '../models/SimCardRegister202Response.ts';
import { SimCardUsageDetailRecord } from '../models/SimCardUsageDetailRecord.ts';
import { SimCardsGet200Response } from '../models/SimCardsGet200Response.ts';
import { SimpleSIMCard } from '../models/SimpleSIMCard.ts';
import { SimpleSIMCardDataLimit } from '../models/SimpleSIMCardDataLimit.ts';
import { SimplifiedOTAUpdate } from '../models/SimplifiedOTAUpdate.ts';
import { SipHeader } from '../models/SipHeader.ts';
import { SoleProprietorData } from '../models/SoleProprietorData.ts';
import { SoundModifications } from '../models/SoundModifications.ts';
import { SpeakRequest } from '../models/SpeakRequest.ts';
import { StartConferenceRecordingRequest } from '../models/StartConferenceRecordingRequest.ts';
import { StartForkingRequest } from '../models/StartForkingRequest.ts';
import { StartRecordingRequest } from '../models/StartRecordingRequest.ts';
import { StartStreamingRequest } from '../models/StartStreamingRequest.ts';
import { Status } from '../models/Status.ts';
import { StockExchange } from '../models/StockExchange.ts';
import { StopForkingRequest } from '../models/StopForkingRequest.ts';
import { StopGatherRequest } from '../models/StopGatherRequest.ts';
import { StopRecordingRequest } from '../models/StopRecordingRequest.ts';
import { StopStreamingRequest } from '../models/StopStreamingRequest.ts';
import { SubNumberOrder } from '../models/SubNumberOrder.ts';
import { SubNumberOrderRegulatoryRequirement } from '../models/SubNumberOrderRegulatoryRequirement.ts';
import { SubNumberOrderResponse } from '../models/SubNumberOrderResponse.ts';
import { SuccessfulResponseUponAcceptingCancelFaxCommand } from '../models/SuccessfulResponseUponAcceptingCancelFaxCommand.ts';
import { SuccessfulResponseWithDetailsAboutTheWhatsAppMessageSent } from '../models/SuccessfulResponseWithDetailsAboutTheWhatsAppMessageSent.ts';
import { TFPhoneNumber } from '../models/TFPhoneNumber.ts';
import { TFVerificationRequest } from '../models/TFVerificationRequest.ts';
import { TFVerificationStatus } from '../models/TFVerificationStatus.ts';
import { TaskStatus } from '../models/TaskStatus.ts';
import { TeXMLRESTCommandResponse } from '../models/TeXMLRESTCommandResponse.ts';
import { TelephonyCredential } from '../models/TelephonyCredential.ts';
import { TelephonyCredentialCreateRequest } from '../models/TelephonyCredentialCreateRequest.ts';
import { TelephonyCredentialResponse } from '../models/TelephonyCredentialResponse.ts';
import { TelephonyCredentialUpdateRequest } from '../models/TelephonyCredentialUpdateRequest.ts';
import { TelnyxBrand } from '../models/TelnyxBrand.ts';
import { Template } from '../models/Template.ts';
import { TemplateButtonComponent } from '../models/TemplateButtonComponent.ts';
import { TemplateButtonParameter } from '../models/TemplateButtonParameter.ts';
import { TemplateComponent } from '../models/TemplateComponent.ts';
import { TemplateComponentType } from '../models/TemplateComponentType.ts';
import { TemplateComponents } from '../models/TemplateComponents.ts';
import { TemplateParameters } from '../models/TemplateParameters.ts';
import { TexmlApplication } from '../models/TexmlApplication.ts';
import { TexmlApplicationResponse } from '../models/TexmlApplicationResponse.ts';
import { Text } from '../models/Text.ts';
import { TrafficType } from '../models/TrafficType.ts';
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
import { UpdateAuthenticationProviderRequest } from '../models/UpdateAuthenticationProviderRequest.ts';
import { UpdateBillingGroup } from '../models/UpdateBillingGroup.ts';
import { UpdateBrand } from '../models/UpdateBrand.ts';
import { UpdateBrandRequest } from '../models/UpdateBrandRequest.ts';
import { UpdateBrandResponse } from '../models/UpdateBrandResponse.ts';
import { UpdateCallControlApplicationRequest } from '../models/UpdateCallControlApplicationRequest.ts';
import { UpdateCallRequest } from '../models/UpdateCallRequest.ts';
import { UpdateCampaign } from '../models/UpdateCampaign.ts';
import { UpdateCommandResult } from '../models/UpdateCommandResult.ts';
import { UpdateConferenceRequest } from '../models/UpdateConferenceRequest.ts';
import { UpdateCredentialConnectionRequest } from '../models/UpdateCredentialConnectionRequest.ts';
import { UpdateFaxApplicationRequest } from '../models/UpdateFaxApplicationRequest.ts';
import { UpdateFqdnConnectionRequest } from '../models/UpdateFqdnConnectionRequest.ts';
import { UpdateFqdnRequest } from '../models/UpdateFqdnRequest.ts';
import { UpdateIpConnectionRequest } from '../models/UpdateIpConnectionRequest.ts';
import { UpdateIpRequest } from '../models/UpdateIpRequest.ts';
import { UpdateManagedAccountRequest } from '../models/UpdateManagedAccountRequest.ts';
import { UpdateMediaRequest } from '../models/UpdateMediaRequest.ts';
import { UpdateMessagingProfileRequest } from '../models/UpdateMessagingProfileRequest.ts';
import { UpdateNumberOrderDocumentRequest } from '../models/UpdateNumberOrderDocumentRequest.ts';
import { UpdateNumberOrderPhoneNumberRequest } from '../models/UpdateNumberOrderPhoneNumberRequest.ts';
import { UpdateNumberOrderRequest } from '../models/UpdateNumberOrderRequest.ts';
import { UpdateOutboundChannels200Response } from '../models/UpdateOutboundChannels200Response.ts';
import { UpdateOutboundChannels200ResponseData } from '../models/UpdateOutboundChannels200ResponseData.ts';
import { UpdateOutboundChannelsDefaultResponse } from '../models/UpdateOutboundChannelsDefaultResponse.ts';
import { UpdateOutboundChannelsDefaultResponseErrorsInner } from '../models/UpdateOutboundChannelsDefaultResponseErrorsInner.ts';
import { UpdateOutboundChannelsDefaultResponseErrorsInnerSource } from '../models/UpdateOutboundChannelsDefaultResponseErrorsInnerSource.ts';
import { UpdateOutboundChannelsRequest } from '../models/UpdateOutboundChannelsRequest.ts';
import { UpdateOutboundVoiceProfileRequest } from '../models/UpdateOutboundVoiceProfileRequest.ts';
import { UpdatePhoneNumberMessagingSettingsRequest } from '../models/UpdatePhoneNumberMessagingSettingsRequest.ts';
import { UpdatePhoneNumberRequest } from '../models/UpdatePhoneNumberRequest.ts';
import { UpdatePhoneNumberVoiceSettingsRequest } from '../models/UpdatePhoneNumberVoiceSettingsRequest.ts';
import { UpdatePortingOrder } from '../models/UpdatePortingOrder.ts';
import { UpdatePortingOrder200Response } from '../models/UpdatePortingOrder200Response.ts';
import { UpdatePortingOrder200ResponseMeta } from '../models/UpdatePortingOrder200ResponseMeta.ts';
import { UpdatePortingOrderActivationSettings } from '../models/UpdatePortingOrderActivationSettings.ts';
import { UpdatePortingOrderRequirement } from '../models/UpdatePortingOrderRequirement.ts';
import { UpdatePortoutRequestRequest } from '../models/UpdatePortoutRequestRequest.ts';
import { UpdateRegulatoryRequirement } from '../models/UpdateRegulatoryRequirement.ts';
import { UpdateShortCodeRequest } from '../models/UpdateShortCodeRequest.ts';
import { UpdateSubNumberOrderRequest } from '../models/UpdateSubNumberOrderRequest.ts';
import { UpdateTexmlApplicationRequest } from '../models/UpdateTexmlApplicationRequest.ts';
import { UpdateVerifyProfileCallRequest } from '../models/UpdateVerifyProfileCallRequest.ts';
import { UpdateVerifyProfileFlashcallRequest } from '../models/UpdateVerifyProfileFlashcallRequest.ts';
import { UpdateVerifyProfilePSD2Request } from '../models/UpdateVerifyProfilePSD2Request.ts';
import { UpdateVerifyProfileRequest } from '../models/UpdateVerifyProfileRequest.ts';
import { UpdateVerifyProfileSMSRequest } from '../models/UpdateVerifyProfileSMSRequest.ts';
import { UpdateVerifyProfileWhatsappRequest } from '../models/UpdateVerifyProfileWhatsappRequest.ts';
import { UpdateWhatsappPhoneNumberAboutRequest } from '../models/UpdateWhatsappPhoneNumberAboutRequest.ts';
import { UpdateWhatsappPhoneNumberRequest } from '../models/UpdateWhatsappPhoneNumberRequest.ts';
import { UplinkData } from '../models/UplinkData.ts';
import { UploadMedia } from '../models/UploadMedia.ts';
import { UploadMediaRequest } from '../models/UploadMediaRequest.ts';
import { UploadPortingOrderDocuments201Response } from '../models/UploadPortingOrderDocuments201Response.ts';
import { UploadPortingOrderDocumentsRequest } from '../models/UploadPortingOrderDocumentsRequest.ts';
import { UploadPortingOrderDocumentsRequestDocumentsInner } from '../models/UploadPortingOrderDocumentsRequestDocumentsInner.ts';
import { Url } from '../models/Url.ts';
import { UrlShortenerSettings } from '../models/UrlShortenerSettings.ts';
import { UsagePaymentMethod } from '../models/UsagePaymentMethod.ts';
import { UseCaseCategories } from '../models/UseCaseCategories.ts';
import { Usecase } from '../models/Usecase.ts';
import { UsecaseMetadata } from '../models/UsecaseMetadata.ts';
import { UserBalance } from '../models/UserBalance.ts';
import { ValidationError } from '../models/ValidationError.ts';
import { Verification } from '../models/Verification.ts';
import { VerificationProfileRecordType } from '../models/VerificationProfileRecordType.ts';
import { VerificationRecordType } from '../models/VerificationRecordType.ts';
import { VerificationRequestEgress } from '../models/VerificationRequestEgress.ts';
import { VerificationRequestStatus } from '../models/VerificationRequestStatus.ts';
import { VerificationStatus } from '../models/VerificationStatus.ts';
import { VerificationType } from '../models/VerificationType.ts';
import { VerifiedCallsDisplayProfile } from '../models/VerifiedCallsDisplayProfile.ts';
import { VerifiedCallsDisplayProfileBusinessIdentity } from '../models/VerifiedCallsDisplayProfileBusinessIdentity.ts';
import { VerifiedCallsDisplayProfileCallReasonsInner } from '../models/VerifiedCallsDisplayProfileCallReasonsInner.ts';
import { VerifiedCallsDisplayProfilePhoneNumbersInner } from '../models/VerifiedCallsDisplayProfilePhoneNumbersInner.ts';
import { VerifiedNumberRecordType } from '../models/VerifiedNumberRecordType.ts';
import { VerifiedNumberResponse } from '../models/VerifiedNumberResponse.ts';
import { VerifiedNumberResponseDataWrapper } from '../models/VerifiedNumberResponseDataWrapper.ts';
import { VerifyDetailRecord } from '../models/VerifyDetailRecord.ts';
import { VerifyPhoneNumberCoverage201Response } from '../models/VerifyPhoneNumberCoverage201Response.ts';
import { VerifyPhoneNumberCoverage401Response } from '../models/VerifyPhoneNumberCoverage401Response.ts';
import { VerifyPhoneNumberCoverage403Response } from '../models/VerifyPhoneNumberCoverage403Response.ts';
import { VerifyPhoneNumberCoverage422Response } from '../models/VerifyPhoneNumberCoverage422Response.ts';
import { VerifyPhoneNumberCoverage500Response } from '../models/VerifyPhoneNumberCoverage500Response.ts';
import { VerifyPhoneNumberCoverageRequest } from '../models/VerifyPhoneNumberCoverageRequest.ts';
import { VerifyProfileCallResponse } from '../models/VerifyProfileCallResponse.ts';
import { VerifyProfileFlashcallResponse } from '../models/VerifyProfileFlashcallResponse.ts';
import { VerifyProfilePSD2Response } from '../models/VerifyProfilePSD2Response.ts';
import { VerifyProfileResponse } from '../models/VerifyProfileResponse.ts';
import { VerifyProfileResponseDataWrapper } from '../models/VerifyProfileResponseDataWrapper.ts';
import { VerifyProfileSMSResponse } from '../models/VerifyProfileSMSResponse.ts';
import { VerifyProfileWhatsappResponse } from '../models/VerifyProfileWhatsappResponse.ts';
import { VerifyVerificationCodeRequest } from '../models/VerifyVerificationCodeRequest.ts';
import { VerifyVerificationCodeResponse } from '../models/VerifyVerificationCodeResponse.ts';
import { VerifyVerificationCodeResponseData } from '../models/VerifyVerificationCodeResponseData.ts';
import { Vertical } from '../models/Vertical.ts';
import { VettingClass } from '../models/VettingClass.ts';
import { VettingStatus } from '../models/VettingStatus.ts';
import { Video } from '../models/Video.ts';
import { Video1 } from '../models/Video1.ts';
import { VideoRegion } from '../models/VideoRegion.ts';
import { ViewRoomParticipant200Response } from '../models/ViewRoomParticipant200Response.ts';
import { ViewRoomRecording200Response } from '../models/ViewRoomRecording200Response.ts';
import { ViewRoomSession200Response } from '../models/ViewRoomSession200Response.ts';
import { VirtaulCrossConnectList200Response } from '../models/VirtaulCrossConnectList200Response.ts';
import { VirtaulCrossConnectRegionList200Response } from '../models/VirtaulCrossConnectRegionList200Response.ts';
import { VirtualCrossConnect } from '../models/VirtualCrossConnect.ts';
import { VirtualCrossConnect1 } from '../models/VirtualCrossConnect1.ts';
import { VirtualCrossConnectCombined } from '../models/VirtualCrossConnectCombined.ts';
import { VirtualCrossConnectCreate } from '../models/VirtualCrossConnectCreate.ts';
import { VirtualCrossConnectCreate200Response } from '../models/VirtualCrossConnectCreate200Response.ts';
import { VirtualCrossConnectPatch } from '../models/VirtualCrossConnectPatch.ts';
import { VirtualCrossConnectPatch1 } from '../models/VirtualCrossConnectPatch1.ts';
import { VirtualCrossConnectRegion } from '../models/VirtualCrossConnectRegion.ts';
import { VirtualCrossConnectRegion1 } from '../models/VirtualCrossConnectRegion1.ts';
import { VirtualCrossConnectRegionGet200Response } from '../models/VirtualCrossConnectRegionGet200Response.ts';
import { Volume } from '../models/Volume.ts';
import { WdrReport } from '../models/WdrReport.ts';
import { WdrReportRequest } from '../models/WdrReportRequest.ts';
import { WebhookApiVersion } from '../models/WebhookApiVersion.ts';
import { WebhookDelivery } from '../models/WebhookDelivery.ts';
import { WebhookDeliveryWebhook } from '../models/WebhookDeliveryWebhook.ts';
import { WhatsAppBusinessAccount } from '../models/WhatsAppBusinessAccount.ts';
import { WhatsAppContactAddress } from '../models/WhatsAppContactAddress.ts';
import { WhatsAppConversationDetailRecord } from '../models/WhatsAppConversationDetailRecord.ts';
import { WhatsAppDetailRecord } from '../models/WhatsAppDetailRecord.ts';
import { WhatsAppDetailRecordReport } from '../models/WhatsAppDetailRecordReport.ts';
import { WhatsAppDetailReportResponse } from '../models/WhatsAppDetailReportResponse.ts';
import { WhatsAppGetAllDetailReportResponse } from '../models/WhatsAppGetAllDetailReportResponse.ts';
import { WhatsAppMessageTemplate } from '../models/WhatsAppMessageTemplate.ts';
import { WhatsAppMessageTemplate1 } from '../models/WhatsAppMessageTemplate1.ts';
import { WhatsAppPhoneNumber } from '../models/WhatsAppPhoneNumber.ts';
import { WhatsAppProfilePhoto } from '../models/WhatsAppProfilePhoto.ts';
import { WhatsAppReportsReq } from '../models/WhatsAppReportsReq.ts';
import { WhatsAppUsageAggregation } from '../models/WhatsAppUsageAggregation.ts';
import { WhatsAppUsageAggregationsResponseContainer } from '../models/WhatsAppUsageAggregationsResponseContainer.ts';
import { WhatsAppUser } from '../models/WhatsAppUser.ts';
import { WhatsappBusinessAccount } from '../models/WhatsappBusinessAccount.ts';
import { WhatsappBusinessAccountWhatsappSettings } from '../models/WhatsappBusinessAccountWhatsappSettings.ts';
import { WhatsappMessageTemplate } from '../models/WhatsappMessageTemplate.ts';
import { WhatsappMessageTemplateComponentsInner } from '../models/WhatsappMessageTemplateComponentsInner.ts';
import { WhatsappMessageTemplateQualityScore } from '../models/WhatsappMessageTemplateQualityScore.ts';
import { WhatsappPhoneNumber } from '../models/WhatsappPhoneNumber.ts';
import { WhatsappPhoneNumberWhatsappSettings } from '../models/WhatsappPhoneNumberWhatsappSettings.ts';
import { WhatsappProfilePhoto } from '../models/WhatsappProfilePhoto.ts';
import { WireguardAllowedIP } from '../models/WireguardAllowedIP.ts';
import { WireguardInterface } from '../models/WireguardInterface.ts';
import { WireguardInterface1 } from '../models/WireguardInterface1.ts';
import { WireguardInterfaceCreate } from '../models/WireguardInterfaceCreate.ts';
import { WireguardInterfaceCreate202Response } from '../models/WireguardInterfaceCreate202Response.ts';
import { WireguardInterfaceList200Response } from '../models/WireguardInterfaceList200Response.ts';
import { WireguardInterfaceRead } from '../models/WireguardInterfaceRead.ts';
import { WireguardPeer } from '../models/WireguardPeer.ts';
import { WireguardPeer1 } from '../models/WireguardPeer1.ts';
import { WireguardPeerAllowedIP } from '../models/WireguardPeerAllowedIP.ts';
import { WireguardPeerAllowedIPCreate } from '../models/WireguardPeerAllowedIPCreate.ts';
import { WireguardPeerAllowedIPGet200Response } from '../models/WireguardPeerAllowedIPGet200Response.ts';
import { WireguardPeerAllowedIPList200Response } from '../models/WireguardPeerAllowedIPList200Response.ts';
import { WireguardPeerCreate } from '../models/WireguardPeerCreate.ts';
import { WireguardPeerCreate202Response } from '../models/WireguardPeerCreate202Response.ts';
import { WireguardPeerList200Response } from '../models/WireguardPeerList200Response.ts';
import { WireguardPeerPatch } from '../models/WireguardPeerPatch.ts';
import { WirelessConnectivityLog } from '../models/WirelessConnectivityLog.ts';
import { WirelessConnectivityLogsGet200Response } from '../models/WirelessConnectivityLogsGet200Response.ts';
import { WirelessCost } from '../models/WirelessCost.ts';
import { WirelessRate } from '../models/WirelessRate.ts';

import { ObservableAccessTokensApi } from "./ObservableAPI.ts";
import { AccessTokensApiRequestFactory, AccessTokensApiResponseProcessor} from "../apis/AccessTokensApi.ts";

export interface AccessTokensApiCreateTelephonyCredentialTokenRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof AccessTokensApicreateTelephonyCredentialToken
     */
    id: string
}

export class ObjectAccessTokensApi {
    private api: ObservableAccessTokensApi

    public constructor(configuration: Configuration, requestFactory?: AccessTokensApiRequestFactory, responseProcessor?: AccessTokensApiResponseProcessor) {
        this.api = new ObservableAccessTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an Access Token (JWT) for the credential.
     * Create an Access Token.
     * @param param the request object
     */
    public createTelephonyCredentialToken(param: AccessTokensApiCreateTelephonyCredentialTokenRequest, options?: Configuration): Promise<string> {
        return this.api.createTelephonyCredentialToken(param.id,  options).toPromise();
    }

}

import { ObservableAdvancedOptInOptOutApi } from "./ObservableAPI.ts";
import { AdvancedOptInOptOutApiRequestFactory, AdvancedOptInOptOutApiResponseProcessor} from "../apis/AdvancedOptInOptOutApi.ts";

export interface AdvancedOptInOptOutApiCreateAutorespConfigApiV2AutorespConfigsProfileIdPostRequest {
    /**
     * 
     * @type string
     * @memberof AdvancedOptInOptOutApicreateAutorespConfigApiV2AutorespConfigsProfileIdPost
     */
    profileId: string
    /**
     * 
     * @type AutoRespConfigCreateSchema
     * @memberof AdvancedOptInOptOutApicreateAutorespConfigApiV2AutorespConfigsProfileIdPost
     */
    autoRespConfigCreateSchema: AutoRespConfigCreateSchema
}

export interface AdvancedOptInOptOutApiDeleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof AdvancedOptInOptOutApideleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete
     */
    profileId: string
    /**
     * 
     * @type string
     * @memberof AdvancedOptInOptOutApideleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete
     */
    autorespCfgId: string
}

export interface AdvancedOptInOptOutApiGetAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGetRequest {
    /**
     * 
     * @type string
     * @memberof AdvancedOptInOptOutApigetAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet
     */
    profileId: string
    /**
     * 
     * @type string
     * @memberof AdvancedOptInOptOutApigetAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet
     */
    autorespCfgId: string
}

export interface AdvancedOptInOptOutApiGetAutorespConfigsApiV2AutorespConfigsProfileIdGetRequest {
    /**
     * 
     * @type string
     * @memberof AdvancedOptInOptOutApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    profileId: string
    /**
     * 
     * @type string
     * @memberof AdvancedOptInOptOutApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    countryCode?: string
    /**
     * 
     * @type string
     * @memberof AdvancedOptInOptOutApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    createdAtGte?: string
    /**
     * 
     * @type string
     * @memberof AdvancedOptInOptOutApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    createdAtLte?: string
    /**
     * 
     * @type string
     * @memberof AdvancedOptInOptOutApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    updatedAtGte?: string
    /**
     * 
     * @type string
     * @memberof AdvancedOptInOptOutApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    updatedAtLte?: string
}

export interface AdvancedOptInOptOutApiUpdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPutRequest {
    /**
     * 
     * @type string
     * @memberof AdvancedOptInOptOutApiupdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut
     */
    profileId: string
    /**
     * 
     * @type string
     * @memberof AdvancedOptInOptOutApiupdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut
     */
    autorespCfgId: string
    /**
     * 
     * @type AutoRespConfigCreateSchema
     * @memberof AdvancedOptInOptOutApiupdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut
     */
    autoRespConfigCreateSchema: AutoRespConfigCreateSchema
}

export class ObjectAdvancedOptInOptOutApi {
    private api: ObservableAdvancedOptInOptOutApi

    public constructor(configuration: Configuration, requestFactory?: AdvancedOptInOptOutApiRequestFactory, responseProcessor?: AdvancedOptInOptOutApiResponseProcessor) {
        this.api = new ObservableAdvancedOptInOptOutApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Auto-Reponse Setting
     * @param param the request object
     */
    public createAutorespConfigApiV2AutorespConfigsProfileIdPost(param: AdvancedOptInOptOutApiCreateAutorespConfigApiV2AutorespConfigsProfileIdPostRequest, options?: Configuration): Promise<AutorespConfigResponseSchema> {
        return this.api.createAutorespConfigApiV2AutorespConfigsProfileIdPost(param.profileId, param.autoRespConfigCreateSchema,  options).toPromise();
    }

    /**
     * Delete Auto-Response Setting
     * @param param the request object
     */
    public deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(param: AdvancedOptInOptOutApiDeleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(param.profileId, param.autorespCfgId,  options).toPromise();
    }

    /**
     * Get Auto-Response Setting
     * @param param the request object
     */
    public getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(param: AdvancedOptInOptOutApiGetAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGetRequest, options?: Configuration): Promise<AutorespConfigResponseSchema> {
        return this.api.getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(param.profileId, param.autorespCfgId,  options).toPromise();
    }

    /**
     * List Auto-Response Settings
     * @param param the request object
     */
    public getAutorespConfigsApiV2AutorespConfigsProfileIdGet(param: AdvancedOptInOptOutApiGetAutorespConfigsApiV2AutorespConfigsProfileIdGetRequest, options?: Configuration): Promise<AutorespConfigsResponseSchema> {
        return this.api.getAutorespConfigsApiV2AutorespConfigsProfileIdGet(param.profileId, param.countryCode, param.createdAtGte, param.createdAtLte, param.updatedAtGte, param.updatedAtLte,  options).toPromise();
    }

    /**
     * Update Auto-Response Setting
     * @param param the request object
     */
    public updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(param: AdvancedOptInOptOutApiUpdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPutRequest, options?: Configuration): Promise<AutorespConfigResponseSchema> {
        return this.api.updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(param.profileId, param.autorespCfgId, param.autoRespConfigCreateSchema,  options).toPromise();
    }

}

import { ObservableAuthenticationProvidersApi } from "./ObservableAPI.ts";
import { AuthenticationProvidersApiRequestFactory, AuthenticationProvidersApiResponseProcessor} from "../apis/AuthenticationProvidersApi.ts";

export interface AuthenticationProvidersApiCreateAuthenticationProviderRequest {
    /**
     * Parameters that can be defined during authentication provider creation
     * @type AuthenticationProviderCreate
     * @memberof AuthenticationProvidersApicreateAuthenticationProvider
     */
    authenticationProviderCreate: AuthenticationProviderCreate
}

export interface AuthenticationProvidersApiDeleteAuthenticationProviderRequest {
    /**
     * authentication provider ID
     * @type string
     * @memberof AuthenticationProvidersApideleteAuthenticationProvider
     */
    id: string
}

export interface AuthenticationProvidersApiFindAuthenticationProvidersRequest {
    /**
     * The page number to load
     * @type number
     * @memberof AuthenticationProvidersApifindAuthenticationProviders
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof AuthenticationProvidersApifindAuthenticationProviders
     */
    pageSize?: number
    /**
     * Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;name&lt;/code&gt;: sorts the result by the     &lt;code&gt;name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-name&lt;/code&gt;: sorts the result by the     &lt;code&gt;name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     * @type &#39;name&#39; | &#39;-name&#39; | &#39;short_name&#39; | &#39;-short_name&#39; | &#39;active&#39; | &#39;-active&#39; | &#39;created_at&#39; | &#39;-created_at&#39; | &#39;updated_at&#39; | &#39;-updated_at&#39;
     * @memberof AuthenticationProvidersApifindAuthenticationProviders
     */
    sort?: 'name' | '-name' | 'short_name' | '-short_name' | 'active' | '-active' | 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
}

export interface AuthenticationProvidersApiGetAuthenticationProviderRequest {
    /**
     * authentication provider ID
     * @type string
     * @memberof AuthenticationProvidersApigetAuthenticationProvider
     */
    id: string
}

export interface AuthenticationProvidersApiUpdateAuthenticationProviderRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof AuthenticationProvidersApiupdateAuthenticationProvider
     */
    id: string
    /**
     * Parameters that can be updated in a authentication provider
     * @type UpdateAuthenticationProviderRequest
     * @memberof AuthenticationProvidersApiupdateAuthenticationProvider
     */
    updateAuthenticationProviderRequest: UpdateAuthenticationProviderRequest
}

export class ObjectAuthenticationProvidersApi {
    private api: ObservableAuthenticationProvidersApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationProvidersApiRequestFactory, responseProcessor?: AuthenticationProvidersApiResponseProcessor) {
        this.api = new ObservableAuthenticationProvidersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an authentication provider.
     * Creates an authentication provider
     * @param param the request object
     */
    public createAuthenticationProvider(param: AuthenticationProvidersApiCreateAuthenticationProviderRequest, options?: Configuration): Promise<CreateAuthenticationProvider200Response> {
        return this.api.createAuthenticationProvider(param.authenticationProviderCreate,  options).toPromise();
    }

    /**
     * Deletes an existing authentication provider.
     * Deletes an authentication provider
     * @param param the request object
     */
    public deleteAuthenticationProvider(param: AuthenticationProvidersApiDeleteAuthenticationProviderRequest, options?: Configuration): Promise<CreateAuthenticationProvider200Response> {
        return this.api.deleteAuthenticationProvider(param.id,  options).toPromise();
    }

    /**
     * Returns a list of your SSO authentication providers.
     * List all SSO authentication providers
     * @param param the request object
     */
    public findAuthenticationProviders(param: AuthenticationProvidersApiFindAuthenticationProvidersRequest = {}, options?: Configuration): Promise<FindAuthenticationProviders200Response> {
        return this.api.findAuthenticationProviders(param.pageNumber, param.pageSize, param.sort,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing authentication provider.
     * Retrieve an authentication provider
     * @param param the request object
     */
    public getAuthenticationProvider(param: AuthenticationProvidersApiGetAuthenticationProviderRequest, options?: Configuration): Promise<CreateAuthenticationProvider200Response> {
        return this.api.getAuthenticationProvider(param.id,  options).toPromise();
    }

    /**
     * Updates settings of an existing authentication provider.
     * Update a authentication provider
     * @param param the request object
     */
    public updateAuthenticationProvider(param: AuthenticationProvidersApiUpdateAuthenticationProviderRequest, options?: Configuration): Promise<CreateAuthenticationProvider200Response> {
        return this.api.updateAuthenticationProvider(param.id, param.updateAuthenticationProviderRequest,  options).toPromise();
    }

}

import { ObservableAutoResponseSettingsApi } from "./ObservableAPI.ts";
import { AutoResponseSettingsApiRequestFactory, AutoResponseSettingsApiResponseProcessor} from "../apis/AutoResponseSettingsApi.ts";

export interface AutoResponseSettingsApiGetAutorespConfigsApiV2AutorespConfigsProfileIdGetRequest {
    /**
     * 
     * @type string
     * @memberof AutoResponseSettingsApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    profileId: string
    /**
     * 
     * @type string
     * @memberof AutoResponseSettingsApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    countryCode?: string
    /**
     * 
     * @type string
     * @memberof AutoResponseSettingsApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    createdAtGte?: string
    /**
     * 
     * @type string
     * @memberof AutoResponseSettingsApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    createdAtLte?: string
    /**
     * 
     * @type string
     * @memberof AutoResponseSettingsApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    updatedAtGte?: string
    /**
     * 
     * @type string
     * @memberof AutoResponseSettingsApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    updatedAtLte?: string
}

export class ObjectAutoResponseSettingsApi {
    private api: ObservableAutoResponseSettingsApi

    public constructor(configuration: Configuration, requestFactory?: AutoResponseSettingsApiRequestFactory, responseProcessor?: AutoResponseSettingsApiResponseProcessor) {
        this.api = new ObservableAutoResponseSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List Auto-Response Settings
     * @param param the request object
     */
    public getAutorespConfigsApiV2AutorespConfigsProfileIdGet(param: AutoResponseSettingsApiGetAutorespConfigsApiV2AutorespConfigsProfileIdGetRequest, options?: Configuration): Promise<AutorespConfigsResponseSchema> {
        return this.api.getAutorespConfigsApiV2AutorespConfigsProfileIdGet(param.profileId, param.countryCode, param.createdAtGte, param.createdAtLte, param.updatedAtGte, param.updatedAtLte,  options).toPromise();
    }

}

import { ObservableAutoresponseConfigsApi } from "./ObservableAPI.ts";
import { AutoresponseConfigsApiRequestFactory, AutoresponseConfigsApiResponseProcessor} from "../apis/AutoresponseConfigsApi.ts";

export interface AutoresponseConfigsApiCreateAutorespConfigApiV2AutorespConfigsProfileIdPostRequest {
    /**
     * 
     * @type string
     * @memberof AutoresponseConfigsApicreateAutorespConfigApiV2AutorespConfigsProfileIdPost
     */
    profileId: string
    /**
     * 
     * @type AutoRespConfigCreateSchema
     * @memberof AutoresponseConfigsApicreateAutorespConfigApiV2AutorespConfigsProfileIdPost
     */
    autoRespConfigCreateSchema: AutoRespConfigCreateSchema
}

export interface AutoresponseConfigsApiDeleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof AutoresponseConfigsApideleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete
     */
    profileId: string
    /**
     * 
     * @type string
     * @memberof AutoresponseConfigsApideleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete
     */
    autorespCfgId: string
}

export interface AutoresponseConfigsApiGetAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGetRequest {
    /**
     * 
     * @type string
     * @memberof AutoresponseConfigsApigetAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet
     */
    profileId: string
    /**
     * 
     * @type string
     * @memberof AutoresponseConfigsApigetAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet
     */
    autorespCfgId: string
}

export interface AutoresponseConfigsApiUpdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPutRequest {
    /**
     * 
     * @type string
     * @memberof AutoresponseConfigsApiupdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut
     */
    profileId: string
    /**
     * 
     * @type string
     * @memberof AutoresponseConfigsApiupdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut
     */
    autorespCfgId: string
    /**
     * 
     * @type AutoRespConfigCreateSchema
     * @memberof AutoresponseConfigsApiupdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut
     */
    autoRespConfigCreateSchema: AutoRespConfigCreateSchema
}

export class ObjectAutoresponseConfigsApi {
    private api: ObservableAutoresponseConfigsApi

    public constructor(configuration: Configuration, requestFactory?: AutoresponseConfigsApiRequestFactory, responseProcessor?: AutoresponseConfigsApiResponseProcessor) {
        this.api = new ObservableAutoresponseConfigsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Auto-Reponse Setting
     * @param param the request object
     */
    public createAutorespConfigApiV2AutorespConfigsProfileIdPost(param: AutoresponseConfigsApiCreateAutorespConfigApiV2AutorespConfigsProfileIdPostRequest, options?: Configuration): Promise<AutorespConfigResponseSchema> {
        return this.api.createAutorespConfigApiV2AutorespConfigsProfileIdPost(param.profileId, param.autoRespConfigCreateSchema,  options).toPromise();
    }

    /**
     * Delete Auto-Response Setting
     * @param param the request object
     */
    public deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(param: AutoresponseConfigsApiDeleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(param.profileId, param.autorespCfgId,  options).toPromise();
    }

    /**
     * Get Auto-Response Setting
     * @param param the request object
     */
    public getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(param: AutoresponseConfigsApiGetAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGetRequest, options?: Configuration): Promise<AutorespConfigResponseSchema> {
        return this.api.getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(param.profileId, param.autorespCfgId,  options).toPromise();
    }

    /**
     * Update Auto-Response Setting
     * @param param the request object
     */
    public updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(param: AutoresponseConfigsApiUpdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPutRequest, options?: Configuration): Promise<AutorespConfigResponseSchema> {
        return this.api.updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(param.profileId, param.autorespCfgId, param.autoRespConfigCreateSchema,  options).toPromise();
    }

}

import { ObservableBillingApi } from "./ObservableAPI.ts";
import { BillingApiRequestFactory, BillingApiResponseProcessor} from "../apis/BillingApi.ts";

export interface BillingApiGetUserBalanceRequest {
}

export class ObjectBillingApi {
    private api: ObservableBillingApi

    public constructor(configuration: Configuration, requestFactory?: BillingApiRequestFactory, responseProcessor?: BillingApiResponseProcessor) {
        this.api = new ObservableBillingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve user balance details
     * @param param the request object
     */
    public getUserBalance(param: BillingApiGetUserBalanceRequest = {}, options?: Configuration): Promise<GetUserBalance200Response> {
        return this.api.getUserBalance( options).toPromise();
    }

}

import { ObservableBillingGroupsApi } from "./ObservableAPI.ts";
import { BillingGroupsApiRequestFactory, BillingGroupsApiResponseProcessor} from "../apis/BillingGroupsApi.ts";

export interface BillingGroupsApiCreateBillingGroupRequest {
    /**
     * New billing group object
     * @type NewBillingGroup
     * @memberof BillingGroupsApicreateBillingGroup
     */
    newBillingGroup: NewBillingGroup
}

export interface BillingGroupsApiDeleteBillingGroupRequest {
    /**
     * The id of the billing group
     * @type string
     * @memberof BillingGroupsApideleteBillingGroup
     */
    id: string
}

export interface BillingGroupsApiListBillingGroupsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof BillingGroupsApilistBillingGroups
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof BillingGroupsApilistBillingGroups
     */
    pageSize?: number
}

export interface BillingGroupsApiRetrieveBillingGroupRequest {
    /**
     * The id of the billing group
     * @type string
     * @memberof BillingGroupsApiretrieveBillingGroup
     */
    id: string
}

export interface BillingGroupsApiUpdateBillingGroupRequest {
    /**
     * The id of the billing group
     * @type string
     * @memberof BillingGroupsApiupdateBillingGroup
     */
    id: string
    /**
     * Update billing group object
     * @type UpdateBillingGroup
     * @memberof BillingGroupsApiupdateBillingGroup
     */
    updateBillingGroup: UpdateBillingGroup
}

export class ObjectBillingGroupsApi {
    private api: ObservableBillingGroupsApi

    public constructor(configuration: Configuration, requestFactory?: BillingGroupsApiRequestFactory, responseProcessor?: BillingGroupsApiResponseProcessor) {
        this.api = new ObservableBillingGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a billing group
     * @param param the request object
     */
    public createBillingGroup(param: BillingGroupsApiCreateBillingGroupRequest, options?: Configuration): Promise<CreateBillingGroup200Response> {
        return this.api.createBillingGroup(param.newBillingGroup,  options).toPromise();
    }

    /**
     * Delete a billing group
     * @param param the request object
     */
    public deleteBillingGroup(param: BillingGroupsApiDeleteBillingGroupRequest, options?: Configuration): Promise<CreateBillingGroup200Response> {
        return this.api.deleteBillingGroup(param.id,  options).toPromise();
    }

    /**
     * List all billing groups
     * @param param the request object
     */
    public listBillingGroups(param: BillingGroupsApiListBillingGroupsRequest = {}, options?: Configuration): Promise<ListBillingGroups200Response> {
        return this.api.listBillingGroups(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieve a billing group
     * @param param the request object
     */
    public retrieveBillingGroup(param: BillingGroupsApiRetrieveBillingGroupRequest, options?: Configuration): Promise<CreateBillingGroup200Response> {
        return this.api.retrieveBillingGroup(param.id,  options).toPromise();
    }

    /**
     * Update a billing group
     * @param param the request object
     */
    public updateBillingGroup(param: BillingGroupsApiUpdateBillingGroupRequest, options?: Configuration): Promise<CreateBillingGroup200Response> {
        return this.api.updateBillingGroup(param.id, param.updateBillingGroup,  options).toPromise();
    }

}

import { ObservableBrandsApi } from "./ObservableAPI.ts";
import { BrandsApiRequestFactory, BrandsApiResponseProcessor} from "../apis/BrandsApi.ts";

export interface BrandsApiCreateBrandBrandPostRequest {
    /**
     * 
     * @type CreateBrand
     * @memberof BrandsApicreateBrandBrandPost
     */
    createBrand: CreateBrand
}

export interface BrandsApiDeleteBrandBrandBrandIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof BrandsApideleteBrandBrandBrandIdDelete
     */
    brandId: string
}

export interface BrandsApiGetBrandBrandBrandIdGetRequest {
    /**
     * 
     * @type string
     * @memberof BrandsApigetBrandBrandBrandIdGet
     */
    brandId: string
}

export interface BrandsApiGetBrandFeedbackByIdBrandFeedbackBrandIdGetRequest {
    /**
     * 
     * @type string
     * @memberof BrandsApigetBrandFeedbackByIdBrandFeedbackBrandIdGet
     */
    brandId: string
}

export interface BrandsApiImportExternalVettingRecordBrandBrandIdExternalVettingPutRequest {
    /**
     * 
     * @type string
     * @memberof BrandsApiimportExternalVettingRecordBrandBrandIdExternalVettingPut
     */
    brandId: string
    /**
     * 
     * @type ImportExternalVetting
     * @memberof BrandsApiimportExternalVettingRecordBrandBrandIdExternalVettingPut
     */
    importExternalVetting: ImportExternalVetting
}

export interface BrandsApiListBrandsBrandGetRequest {
    /**
     * 
     * @type number
     * @memberof BrandsApilistBrandsBrandGet
     */
    page?: number
    /**
     * number of records per page. maximum of 500
     * @type number
     * @memberof BrandsApilistBrandsBrandGet
     */
    recordsPerPage?: number
    /**
     * 
     * @type string
     * @memberof BrandsApilistBrandsBrandGet
     */
    displayName?: string
    /**
     * 
     * @type string
     * @memberof BrandsApilistBrandsBrandGet
     */
    entityType?: string
    /**
     * 
     * @type string
     * @memberof BrandsApilistBrandsBrandGet
     */
    state?: string
    /**
     * 
     * @type string
     * @memberof BrandsApilistBrandsBrandGet
     */
    country?: string
}

export interface BrandsApiListExternalVettingsBrandBrandIdExternalVettingGetRequest {
    /**
     * 
     * @type string
     * @memberof BrandsApilistExternalVettingsBrandBrandIdExternalVettingGet
     */
    brandId: string
}

export interface BrandsApiOrderBrandExternalVettingBrandBrandIdExternalVettingPostRequest {
    /**
     * 
     * @type string
     * @memberof BrandsApiorderBrandExternalVettingBrandBrandIdExternalVettingPost
     */
    brandId: string
    /**
     * 
     * @type OrderExternalVetting
     * @memberof BrandsApiorderBrandExternalVettingBrandBrandIdExternalVettingPost
     */
    orderExternalVetting: OrderExternalVetting
}

export interface BrandsApiRevetBrandBrandBrandIdRevetPutRequest {
    /**
     * 
     * @type string
     * @memberof BrandsApirevetBrandBrandBrandIdRevetPut
     */
    brandId: string
}

export interface BrandsApiUpdateBrandBrandBrandIdPutRequest {
    /**
     * 
     * @type string
     * @memberof BrandsApiupdateBrandBrandBrandIdPut
     */
    brandId: string
    /**
     * 
     * @type UpdateBrand
     * @memberof BrandsApiupdateBrandBrandBrandIdPut
     */
    updateBrand: UpdateBrand
}

export class ObjectBrandsApi {
    private api: ObservableBrandsApi

    public constructor(configuration: Configuration, requestFactory?: BrandsApiRequestFactory, responseProcessor?: BrandsApiResponseProcessor) {
        this.api = new ObservableBrandsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is used to create a new brand. A brand is an entity created by The Campaign Registry (TCR) that represents an organization or a company. It is this entity that TCR created campaigns will be associated with. Each brand creation will entail an upfront, non-refundable $4 expense.
     * Create Brand
     * @param param the request object
     */
    public createBrandBrandPost(param: BrandsApiCreateBrandBrandPostRequest, options?: Configuration): Promise<any> {
        return this.api.createBrandBrandPost(param.createBrand,  options).toPromise();
    }

    /**
     * Delete Brand
     * @param param the request object
     */
    public deleteBrandBrandBrandIdDelete(param: BrandsApiDeleteBrandBrandBrandIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.deleteBrandBrandBrandIdDelete(param.brandId,  options).toPromise();
    }

    /**
     * Retrieve a brand by `brandId`.
     * Get Brand
     * @param param the request object
     */
    public getBrandBrandBrandIdGet(param: BrandsApiGetBrandBrandBrandIdGetRequest, options?: Configuration): Promise<TelnyxBrand> {
        return this.api.getBrandBrandBrandIdGet(param.brandId,  options).toPromise();
    }

    /**
     * Get feedback about a brand by ID. This endpoint can be used after creating or revetting a brand.  Possible values for `.category[].id`:  * `TAX_ID` - Data mismatch related to tax id and its associated properties. * `STOCK_SYMBOL` - Non public entity registered as a public for profit entity or   the stock information mismatch. * `GOVERNMENT_ENTITY` - Non government entity registered as a government entity.   Must be a U.S. government entity. * `NONPROFIT` - Not a recognized non-profit entity. No IRS tax-exempt status   found. * `OTHERS` - Details of the data misrepresentation if any.
     * Get Brand Feedback By Id
     * @param param the request object
     */
    public getBrandFeedbackByIdBrandFeedbackBrandIdGet(param: BrandsApiGetBrandFeedbackByIdBrandFeedbackBrandIdGetRequest, options?: Configuration): Promise<BrandFeedback> {
        return this.api.getBrandFeedbackByIdBrandFeedbackBrandIdGet(param.brandId,  options).toPromise();
    }

    /**
     * This operation can be used to import an external vetting record from a TCR-approved vetting provider. If the vetting provider confirms validity of the record, it will be saved with the brand and will be considered for future campaign qualification.
     * Import External Vetting Record
     * @param param the request object
     */
    public importExternalVettingRecordBrandBrandIdExternalVettingPut(param: BrandsApiImportExternalVettingRecordBrandBrandIdExternalVettingPutRequest, options?: Configuration): Promise<ExternalVetting> {
        return this.api.importExternalVettingRecordBrandBrandIdExternalVettingPut(param.brandId, param.importExternalVetting,  options).toPromise();
    }

    /**
     * This endpoint is used to list all brands associated with your organization.
     * List Brands
     * @param param the request object
     */
    public listBrandsBrandGet(param: BrandsApiListBrandsBrandGetRequest = {}, options?: Configuration): Promise<BrandRecordSetCSP> {
        return this.api.listBrandsBrandGet(param.page, param.recordsPerPage, param.displayName, param.entityType, param.state, param.country,  options).toPromise();
    }

    /**
     * Get list of valid external vetting record for a given brand
     * List External Vettings
     * @param param the request object
     */
    public listExternalVettingsBrandBrandIdExternalVettingGet(param: BrandsApiListExternalVettingsBrandBrandIdExternalVettingGetRequest, options?: Configuration): Promise<any> {
        return this.api.listExternalVettingsBrandBrandIdExternalVettingGet(param.brandId,  options).toPromise();
    }

    /**
     * Order new external vetting for a brand
     * Order Brand External Vetting
     * @param param the request object
     */
    public orderBrandExternalVettingBrandBrandIdExternalVettingPost(param: BrandsApiOrderBrandExternalVettingBrandBrandIdExternalVettingPostRequest, options?: Configuration): Promise<any> {
        return this.api.orderBrandExternalVettingBrandBrandIdExternalVettingPost(param.brandId, param.orderExternalVetting,  options).toPromise();
    }

    /**
     * This operation allows you to revet the brand. However, revetting is allowed once after the successful brand registration and thereafter limited to once every 3 months.
     * Revet Brand
     * @param param the request object
     */
    public revetBrandBrandBrandIdRevetPut(param: BrandsApiRevetBrandBrandBrandIdRevetPutRequest, options?: Configuration): Promise<any> {
        return this.api.revetBrandBrandBrandIdRevetPut(param.brandId,  options).toPromise();
    }

    /**
     * Update a brand\'s attributes by `brandId`.
     * Update Brand
     * @param param the request object
     */
    public updateBrandBrandBrandIdPut(param: BrandsApiUpdateBrandBrandBrandIdPutRequest, options?: Configuration): Promise<TelnyxBrand> {
        return this.api.updateBrandBrandBrandIdPut(param.brandId, param.updateBrand,  options).toPromise();
    }

}

import { ObservableBucketApi } from "./ObservableAPI.ts";
import { BucketApiRequestFactory, BucketApiResponseProcessor} from "../apis/BucketApi.ts";

export interface BucketApiCreateBucketRequest {
    /**
     * The name of the bucket.
     * @type string
     * @memberof BucketApicreateBucket
     */
    bucketName: string
    /**
     * 
     * @type CreateBucketRequest
     * @memberof BucketApicreateBucket
     */
    createBucketRequest?: CreateBucketRequest
}

export interface BucketApiDeleteBucketRequest {
    /**
     * The name of the bucket.
     * @type string
     * @memberof BucketApideleteBucket
     */
    bucketName: string
}

export interface BucketApiHeadBucketRequest {
    /**
     * The name of the bucket.
     * @type string
     * @memberof BucketApiheadBucket
     */
    bucketName: string
}

export interface BucketApiListBucketsRequest {
}

export class ObjectBucketApi {
    private api: ObservableBucketApi

    public constructor(configuration: Configuration, requestFactory?: BucketApiRequestFactory, responseProcessor?: BucketApiResponseProcessor) {
        this.api = new ObservableBucketApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a bucket.
     * CreateBucket
     * @param param the request object
     */
    public createBucket(param: BucketApiCreateBucketRequest, options?: Configuration): Promise<void> {
        return this.api.createBucket(param.bucketName, param.createBucketRequest,  options).toPromise();
    }

    /**
     * Deletes a bucket. The bucket must be empty for it to be deleted.
     * DeleteBucket
     * @param param the request object
     */
    public deleteBucket(param: BucketApiDeleteBucketRequest, options?: Configuration): Promise<void> {
        return this.api.deleteBucket(param.bucketName,  options).toPromise();
    }

    /**
     * Determines if a bucket exists and you have permission to access it.
     * HeadBucket
     * @param param the request object
     */
    public headBucket(param: BucketApiHeadBucketRequest, options?: Configuration): Promise<void> {
        return this.api.headBucket(param.bucketName,  options).toPromise();
    }

    /**
     * List all Buckets.
     * ListBuckets
     * @param param the request object
     */
    public listBuckets(param: BucketApiListBucketsRequest = {}, options?: Configuration): Promise<ListBucketsResponse> {
        return this.api.listBuckets( options).toPromise();
    }

}

import { ObservableBulkCredentialsApi } from "./ObservableAPI.ts";
import { BulkCredentialsApiRequestFactory, BulkCredentialsApiResponseProcessor} from "../apis/BulkCredentialsApi.ts";

export interface BulkCredentialsApiBulkCredentialActionRequest {
    /**
     * Identifies the action to be taken. Activate will change the status to active. Deactivate will change the status to inactive.
     * @type &#39;activate&#39; | &#39;deactivate&#39;
     * @memberof BulkCredentialsApibulkCredentialAction
     */
    action: 'activate' | 'deactivate'
    /**
     * Filter by tag, required by bulk operations.
     * @type string
     * @memberof BulkCredentialsApibulkCredentialAction
     */
    filterTag: string
}

export interface BulkCredentialsApiCreateBulkTelephonyCredentialRequest {
    /**
     * Requested parameters to create credentials on bulk
     * @type BulkCredentialRequest
     * @memberof BulkCredentialsApicreateBulkTelephonyCredential
     */
    bulkCredentialRequest: BulkCredentialRequest
}

export interface BulkCredentialsApiDeleteBulkTelephonyCredentialRequest {
    /**
     * Filter by tag, required by bulk operations.
     * @type string
     * @memberof BulkCredentialsApideleteBulkTelephonyCredential
     */
    filterTag: string
}

export interface BulkCredentialsApiUpdateBulkTelephonyCredentialRequest {
    /**
     * Filter by tag, required by bulk operations.
     * @type string
     * @memberof BulkCredentialsApiupdateBulkTelephonyCredential
     */
    filterTag: string
    /**
     * Parameters to update credentials on bulk
     * @type BulkCredentialRequest
     * @memberof BulkCredentialsApiupdateBulkTelephonyCredential
     */
    bulkCredentialRequest: BulkCredentialRequest
}

export class ObjectBulkCredentialsApi {
    private api: ObservableBulkCredentialsApi

    public constructor(configuration: Configuration, requestFactory?: BulkCredentialsApiRequestFactory, responseProcessor?: BulkCredentialsApiResponseProcessor) {
        this.api = new ObservableBulkCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Perform activate or deactivate action on all credentials filtered by the provided tag. Activate action will change the status to active, making it possible to connect calls with the credential. Deactivate action will change the status to inactive, making it impossible to connect calls with the credential.
     * Perform activate or deactivate action on all credentials filtered by the provided tag.
     * @param param the request object
     */
    public bulkCredentialAction(param: BulkCredentialsApiBulkCredentialActionRequest, options?: Configuration): Promise<BulkCredentialResponse> {
        return this.api.bulkCredentialAction(param.action, param.filterTag,  options).toPromise();
    }

    /**
     * Creates several credentials in bulk.
     * Creates several credentials
     * @param param the request object
     */
    public createBulkTelephonyCredential(param: BulkCredentialsApiCreateBulkTelephonyCredentialRequest, options?: Configuration): Promise<BulkCredentialResponse> {
        return this.api.createBulkTelephonyCredential(param.bulkCredentialRequest,  options).toPromise();
    }

    /**
     * Delete several credentials in bulk.
     * Delete several credentials
     * @param param the request object
     */
    public deleteBulkTelephonyCredential(param: BulkCredentialsApiDeleteBulkTelephonyCredentialRequest, options?: Configuration): Promise<BulkCredentialResponse> {
        return this.api.deleteBulkTelephonyCredential(param.filterTag,  options).toPromise();
    }

    /**
     * Update several credentials in bulk.
     * Update several credentials
     * @param param the request object
     */
    public updateBulkTelephonyCredential(param: BulkCredentialsApiUpdateBulkTelephonyCredentialRequest, options?: Configuration): Promise<BulkCredentialResponse> {
        return this.api.updateBulkTelephonyCredential(param.filterTag, param.bulkCredentialRequest,  options).toPromise();
    }

}

import { ObservableBulkPhoneNumberCampaignsApi } from "./ObservableAPI.ts";
import { BulkPhoneNumberCampaignsApiRequestFactory, BulkPhoneNumberCampaignsApiResponseProcessor} from "../apis/BulkPhoneNumberCampaignsApi.ts";

export interface BulkPhoneNumberCampaignsApiAssignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePostRequest {
    /**
     * 
     * @type AssignProfileToCampaignRequest
     * @memberof BulkPhoneNumberCampaignsApiassignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePost
     */
    assignProfileToCampaignRequest: AssignProfileToCampaignRequest
}

export interface BulkPhoneNumberCampaignsApiGetAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGetRequest {
    /**
     * 
     * @type string
     * @memberof BulkPhoneNumberCampaignsApigetAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGet
     */
    taskId: string
}

export interface BulkPhoneNumberCampaignsApiGetPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGetRequest {
    /**
     * 
     * @type string
     * @memberof BulkPhoneNumberCampaignsApigetPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet
     */
    taskId: string
    /**
     * 
     * @type any
     * @memberof BulkPhoneNumberCampaignsApigetPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet
     */
    recordsPerPage?: any
    /**
     * 
     * @type any
     * @memberof BulkPhoneNumberCampaignsApigetPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet
     */
    page?: any
}

export class ObjectBulkPhoneNumberCampaignsApi {
    private api: ObservableBulkPhoneNumberCampaignsApi

    public constructor(configuration: Configuration, requestFactory?: BulkPhoneNumberCampaignsApiRequestFactory, responseProcessor?: BulkPhoneNumberCampaignsApiResponseProcessor) {
        this.api = new ObservableBulkPhoneNumberCampaignsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to link all phone numbers associated with a Messaging Profile to a campaign. **Please note:** if you want to assign phone numbers to a campaign that you did not create with Telnyx 10DLC services, this endpoint allows that provided that you\'ve shared the campaign with Telnyx. In this case, only provide the parameter, `tcrCampaignId`, and not `campaignId`. In all other cases (where the campaign you\'re assigning was created with Telnyx 10DLC services), only provide `campaignId`, not `tcrCampaignId`.
     * Assign Messaging Profile To Campaign
     * @param param the request object
     */
    public assignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePost(param: BulkPhoneNumberCampaignsApiAssignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePostRequest, options?: Configuration): Promise<ResponseAssignMessagingProfileToCampaignPublicPhonenumberassignmentbyprofilePost> {
        return this.api.assignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePost(param.assignProfileToCampaignRequest,  options).toPromise();
    }

    /**
     * Check the status of the task associated with assigning all phone numbers on a messaging profile to a campaign by `taskId`.
     * Get Assignment Task Status
     * @param param the request object
     */
    public getAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGet(param: BulkPhoneNumberCampaignsApiGetAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGetRequest, options?: Configuration): Promise<AssignmentTaskStatusResponse> {
        return this.api.getAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGet(param.taskId,  options).toPromise();
    }

    /**
     * Check the status of the individual phone number/campaign assignments associated with the supplied `taskId`.
     * Get Phone Number Status
     * @param param the request object
     */
    public getPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet(param: BulkPhoneNumberCampaignsApiGetPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGetRequest, options?: Configuration): Promise<PhoneNumberStatusResponsePaginated> {
        return this.api.getPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet(param.taskId, param.recordsPerPage, param.page,  options).toPromise();
    }

}

import { ObservableBulkSoleProprietorCreationApi } from "./ObservableAPI.ts";
import { BulkSoleProprietorCreationApiRequestFactory, BulkSoleProprietorCreationApiResponseProcessor} from "../apis/BulkSoleProprietorCreationApi.ts";

export interface BulkSoleProprietorCreationApiBulkCreationBulkCreationPostRequest {
    /**
     * 
     * @type BulkCreationRequest
     * @memberof BulkSoleProprietorCreationApibulkCreationBulkCreationPost
     */
    bulkCreationRequest: BulkCreationRequest
}

export interface BulkSoleProprietorCreationApiGetAllTasksBulkCreationGetRequest {
    /**
     * 
     * @type any
     * @memberof BulkSoleProprietorCreationApigetAllTasksBulkCreationGet
     */
    recordsPerPage?: any
    /**
     * 
     * @type any
     * @memberof BulkSoleProprietorCreationApigetAllTasksBulkCreationGet
     */
    page?: any
}

export interface BulkSoleProprietorCreationApiGetDetailedTaskStatusBulkCreationTaskIdDetailedStatusGetRequest {
    /**
     * 
     * @type string
     * @memberof BulkSoleProprietorCreationApigetDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet
     */
    taskId: string
    /**
     * 
     * @type any
     * @memberof BulkSoleProprietorCreationApigetDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet
     */
    recordsPerPage?: any
    /**
     * 
     * @type any
     * @memberof BulkSoleProprietorCreationApigetDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet
     */
    page?: any
}

export interface BulkSoleProprietorCreationApiGetTaskStatusBulkCreationTaskIdGetRequest {
    /**
     * 
     * @type string
     * @memberof BulkSoleProprietorCreationApigetTaskStatusBulkCreationTaskIdGet
     */
    taskId: string
}

export class ObjectBulkSoleProprietorCreationApi {
    private api: ObservableBulkSoleProprietorCreationApi

    public constructor(configuration: Configuration, requestFactory?: BulkSoleProprietorCreationApiRequestFactory, responseProcessor?: BulkSoleProprietorCreationApiResponseProcessor) {
        this.api = new ObservableBulkSoleProprietorCreationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Submit sets of data about brands, campaigns, and phone numbers to create and assign. Please note that sub-usecases, phone numbers, and sample messages are each limited to 5 per campaign.
     * Bulk Creation
     * @param param the request object
     */
    public bulkCreationBulkCreationPost(param: BulkSoleProprietorCreationApiBulkCreationBulkCreationPostRequest, options?: Configuration): Promise<BulkCreationResponse> {
        return this.api.bulkCreationBulkCreationPost(param.bulkCreationRequest,  options).toPromise();
    }

    /**
     * Get a list of all tasks ever submitted by your organization.
     * Get All Tasks
     * @param param the request object
     */
    public getAllTasksBulkCreationGet(param: BulkSoleProprietorCreationApiGetAllTasksBulkCreationGetRequest = {}, options?: Configuration): Promise<BulkCreationTasksResponse> {
        return this.api.getAllTasksBulkCreationGet(param.recordsPerPage, param.page,  options).toPromise();
    }

    /**
     * Get detailed information about the status of a bulk creation task.
     * Get Detailed Task Status
     * @param param the request object
     */
    public getDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet(param: BulkSoleProprietorCreationApiGetDetailedTaskStatusBulkCreationTaskIdDetailedStatusGetRequest, options?: Configuration): Promise<BulkCreationDetailedStatusResponse> {
        return this.api.getDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet(param.taskId, param.recordsPerPage, param.page,  options).toPromise();
    }

    /**
     * Get a simple overview of the status of a bulk creation task.
     * Get Task Status
     * @param param the request object
     */
    public getTaskStatusBulkCreationTaskIdGet(param: BulkSoleProprietorCreationApiGetTaskStatusBulkCreationTaskIdGetRequest, options?: Configuration): Promise<BulkCreationStatusResponse> {
        return this.api.getTaskStatusBulkCreationTaskIdGet(param.taskId,  options).toPromise();
    }

}

import { ObservableBusinessIdentityApi } from "./ObservableAPI.ts";
import { BusinessIdentityApiRequestFactory, BusinessIdentityApiResponseProcessor} from "../apis/BusinessIdentityApi.ts";

export interface BusinessIdentityApiCreateBusinessIdentityRequest {
    /**
     * 
     * @type CreateOrUpdateBusinessIdentityRequest
     * @memberof BusinessIdentityApicreateBusinessIdentity
     */
    createOrUpdateBusinessIdentityRequest: CreateOrUpdateBusinessIdentityRequest
}

export interface BusinessIdentityApiDeleteBusinessIdentityRequest {
    /**
     * Identifies the Business Identity
     * @type string
     * @memberof BusinessIdentityApideleteBusinessIdentity
     */
    id: string
}

export interface BusinessIdentityApiDisplayBusinessIdentityRequest {
    /**
     * Identifies the Business Identity
     * @type string
     * @memberof BusinessIdentityApidisplayBusinessIdentity
     */
    id: string
}

export interface BusinessIdentityApiListBusinessIdentitiesRequest {
    /**
     * The page number to load
     * @type number
     * @memberof BusinessIdentityApilistBusinessIdentities
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof BusinessIdentityApilistBusinessIdentities
     */
    pageSize?: number
}

export interface BusinessIdentityApiUpdateBusinessIdentityRequest {
    /**
     * Identifies the Business Identity
     * @type string
     * @memberof BusinessIdentityApiupdateBusinessIdentity
     */
    id: string
    /**
     * 
     * @type CreateOrUpdateBusinessIdentityRequest
     * @memberof BusinessIdentityApiupdateBusinessIdentity
     */
    createOrUpdateBusinessIdentityRequest: CreateOrUpdateBusinessIdentityRequest
}

export class ObjectBusinessIdentityApi {
    private api: ObservableBusinessIdentityApi

    public constructor(configuration: Configuration, requestFactory?: BusinessIdentityApiRequestFactory, responseProcessor?: BusinessIdentityApiResponseProcessor) {
        this.api = new ObservableBusinessIdentityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Business Identity.
     * Creates a Business Identity
     * @param param the request object
     */
    public createBusinessIdentity(param: BusinessIdentityApiCreateBusinessIdentityRequest, options?: Configuration): Promise<void> {
        return this.api.createBusinessIdentity(param.createOrUpdateBusinessIdentityRequest,  options).toPromise();
    }

    /**
     * Deletes the Business Identity. This action will fail if any verification requests have been made for any associated Display Profile. Please contact support@telnyx.com in case you want to delete a Business Identity in that situation.
     * Delete a Business Identity
     * @param param the request object
     */
    public deleteBusinessIdentity(param: BusinessIdentityApiDeleteBusinessIdentityRequest, options?: Configuration): Promise<ShowBusinessIdentityResponse> {
        return this.api.deleteBusinessIdentity(param.id,  options).toPromise();
    }

    /**
     * Display the Business Identity
     * @param param the request object
     */
    public displayBusinessIdentity(param: BusinessIdentityApiDisplayBusinessIdentityRequest, options?: Configuration): Promise<ShowBusinessIdentityResponse> {
        return this.api.displayBusinessIdentity(param.id,  options).toPromise();
    }

    /**
     * Lists the Business Identities owned by the current user/organization
     * @param param the request object
     */
    public listBusinessIdentities(param: BusinessIdentityApiListBusinessIdentitiesRequest = {}, options?: Configuration): Promise<ListBusinessIdentitiesResponse> {
        return this.api.listBusinessIdentities(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Update an existing Business Identity.
     * Update a Business Identity
     * @param param the request object
     */
    public updateBusinessIdentity(param: BusinessIdentityApiUpdateBusinessIdentityRequest, options?: Configuration): Promise<void> {
        return this.api.updateBusinessIdentity(param.id, param.createOrUpdateBusinessIdentityRequest,  options).toPromise();
    }

}

import { ObservableCDRUsageReportsApi } from "./ObservableAPI.ts";
import { CDRUsageReportsApiRequestFactory, CDRUsageReportsApiResponseProcessor} from "../apis/CDRUsageReportsApi.ts";

export interface CDRUsageReportsApiGetUsageReportSyncRequest {
    /**
     * 
     * @type &#39;NO_AGGREGATION&#39; | &#39;CONNECTION&#39; | &#39;TAG&#39; | &#39;BILLING_GROUP&#39;
     * @memberof CDRUsageReportsApigetUsageReportSync
     */
    aggregationType: 'NO_AGGREGATION' | 'CONNECTION' | 'TAG' | 'BILLING_GROUP'
    /**
     * 
     * @type &#39;NO_BREAKDOWN&#39; | &#39;DID_VS_TOLL_FREE&#39; | &#39;COUNTRY&#39; | &#39;DID_VS_TOLL_FREE_PER_COUNTRY&#39;
     * @memberof CDRUsageReportsApigetUsageReportSync
     */
    productBreakdown: 'NO_BREAKDOWN' | 'DID_VS_TOLL_FREE' | 'COUNTRY' | 'DID_VS_TOLL_FREE_PER_COUNTRY'
    /**
     * 
     * @type Date
     * @memberof CDRUsageReportsApigetUsageReportSync
     */
    startDate?: Date
    /**
     * 
     * @type Date
     * @memberof CDRUsageReportsApigetUsageReportSync
     */
    endDate?: Date
    /**
     * 
     * @type Array&lt;number&gt;
     * @memberof CDRUsageReportsApigetUsageReportSync
     */
    connections?: Array<number>
}

export class ObjectCDRUsageReportsApi {
    private api: ObservableCDRUsageReportsApi

    public constructor(configuration: Configuration, requestFactory?: CDRUsageReportsApiRequestFactory, responseProcessor?: CDRUsageReportsApiResponseProcessor) {
        this.api = new ObservableCDRUsageReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate and fetch voice usage report synchronously. This endpoint will both generate and fetch the voice report over a specified time period. No polling is necessary but the response may take up to a couple of minutes. 
     * @param param the request object
     */
    public getUsageReportSync(param: CDRUsageReportsApiGetUsageReportSyncRequest, options?: Configuration): Promise<CdrGetSyncUsageReportResponse> {
        return this.api.getUsageReportSync(param.aggregationType, param.productBreakdown, param.startDate, param.endDate, param.connections,  options).toPromise();
    }

}

import { ObservableCSVDownloadsApi } from "./ObservableAPI.ts";
import { CSVDownloadsApiRequestFactory, CSVDownloadsApiResponseProcessor} from "../apis/CSVDownloadsApi.ts";

export interface CSVDownloadsApiCreateCsvDownloadRequest {
}

export interface CSVDownloadsApiListCsvDownloadsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof CSVDownloadsApilistCsvDownloads
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof CSVDownloadsApilistCsvDownloads
     */
    pageSize?: number
}

export interface CSVDownloadsApiRetrieveCsvDownloadRequest {
    /**
     * Identifies the CSV download.
     * @type string
     * @memberof CSVDownloadsApiretrieveCsvDownload
     */
    id: string
}

export class ObjectCSVDownloadsApi {
    private api: ObservableCSVDownloadsApi

    public constructor(configuration: Configuration, requestFactory?: CSVDownloadsApiRequestFactory, responseProcessor?: CSVDownloadsApiResponseProcessor) {
        this.api = new ObservableCSVDownloadsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a CSV download
     * @param param the request object
     */
    public createCsvDownload(param: CSVDownloadsApiCreateCsvDownloadRequest = {}, options?: Configuration): Promise<CSVDownloadResponse> {
        return this.api.createCsvDownload( options).toPromise();
    }

    /**
     * List CSV downloads
     * @param param the request object
     */
    public listCsvDownloads(param: CSVDownloadsApiListCsvDownloadsRequest = {}, options?: Configuration): Promise<ListCSVDownloadsResponse> {
        return this.api.listCsvDownloads(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieve a CSV download
     * @param param the request object
     */
    public retrieveCsvDownload(param: CSVDownloadsApiRetrieveCsvDownloadRequest, options?: Configuration): Promise<CSVDownloadResponse> {
        return this.api.retrieveCsvDownload(param.id,  options).toPromise();
    }

}

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

import { ObservableCallControlApplicationsApi } from "./ObservableAPI.ts";
import { CallControlApplicationsApiRequestFactory, CallControlApplicationsApiResponseProcessor} from "../apis/CallControlApplicationsApi.ts";

export interface CallControlApplicationsApiCreateCallControlApplicationRequest {
    /**
     * Create call control application request.
     * @type CreateCallControlApplicationRequest
     * @memberof CallControlApplicationsApicreateCallControlApplication
     */
    createCallControlApplicationRequest: CreateCallControlApplicationRequest
}

export interface CallControlApplicationsApiDeleteCallControlApplicationRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof CallControlApplicationsApideleteCallControlApplication
     */
    id: string
}

export interface CallControlApplicationsApiListCallControlApplicationsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof CallControlApplicationsApilistCallControlApplications
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof CallControlApplicationsApilistCallControlApplications
     */
    pageSize?: number
    /**
     * If present, applications with &lt;code&gt;application_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @type string
     * @memberof CallControlApplicationsApilistCallControlApplications
     */
    filterApplicationNameContains?: string
    /**
     * Identifies the associated outbound voice profile.
     * @type string
     * @memberof CallControlApplicationsApilistCallControlApplications
     */
    filterOutboundVoiceProfileId?: string
    /**
     * Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     * @type &#39;created_at&#39; | &#39;connection_name&#39; | &#39;active&#39;
     * @memberof CallControlApplicationsApilistCallControlApplications
     */
    sort?: 'created_at' | 'connection_name' | 'active'
}

export interface CallControlApplicationsApiRetrieveCallControlApplicationRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof CallControlApplicationsApiretrieveCallControlApplication
     */
    id: string
}

export interface CallControlApplicationsApiUpdateCallControlApplicationRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof CallControlApplicationsApiupdateCallControlApplication
     */
    id: string
    /**
     * Update call control application request.
     * @type UpdateCallControlApplicationRequest
     * @memberof CallControlApplicationsApiupdateCallControlApplication
     */
    updateCallControlApplicationRequest: UpdateCallControlApplicationRequest
}

export class ObjectCallControlApplicationsApi {
    private api: ObservableCallControlApplicationsApi

    public constructor(configuration: Configuration, requestFactory?: CallControlApplicationsApiRequestFactory, responseProcessor?: CallControlApplicationsApiResponseProcessor) {
        this.api = new ObservableCallControlApplicationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a call control application.
     * Create a call control application
     * @param param the request object
     */
    public createCallControlApplication(param: CallControlApplicationsApiCreateCallControlApplicationRequest, options?: Configuration): Promise<CallControlApplicationResponse> {
        return this.api.createCallControlApplication(param.createCallControlApplicationRequest,  options).toPromise();
    }

    /**
     * Deletes a call control application.
     * Delete a call control application
     * @param param the request object
     */
    public deleteCallControlApplication(param: CallControlApplicationsApiDeleteCallControlApplicationRequest, options?: Configuration): Promise<CallControlApplicationResponse> {
        return this.api.deleteCallControlApplication(param.id,  options).toPromise();
    }

    /**
     * Return a list of call control applications.
     * List call control applications
     * @param param the request object
     */
    public listCallControlApplications(param: CallControlApplicationsApiListCallControlApplicationsRequest = {}, options?: Configuration): Promise<ListCallControlApplicationsResponse> {
        return this.api.listCallControlApplications(param.pageNumber, param.pageSize, param.filterApplicationNameContains, param.filterOutboundVoiceProfileId, param.sort,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing call control application.
     * Retrieve a call control application
     * @param param the request object
     */
    public retrieveCallControlApplication(param: CallControlApplicationsApiRetrieveCallControlApplicationRequest, options?: Configuration): Promise<CallControlApplicationResponse> {
        return this.api.retrieveCallControlApplication(param.id,  options).toPromise();
    }

    /**
     * Updates settings of an existing call control application.
     * Update a call control application
     * @param param the request object
     */
    public updateCallControlApplication(param: CallControlApplicationsApiUpdateCallControlApplicationRequest, options?: Configuration): Promise<CallControlApplicationResponse> {
        return this.api.updateCallControlApplication(param.id, param.updateCallControlApplicationRequest,  options).toPromise();
    }

}

import { ObservableCallInformationApi } from "./ObservableAPI.ts";
import { CallInformationApiRequestFactory, CallInformationApiResponseProcessor} from "../apis/CallInformationApi.ts";

export interface CallInformationApiListConnectionActiveCallsRequest {
    /**
     * Telnyx connection id
     * @type string
     * @memberof CallInformationApilistConnectionActiveCalls
     */
    connectionId: string
    /**
     * Limit of records per single page
     * @type number
     * @memberof CallInformationApilistConnectionActiveCalls
     */
    pageLimit?: number
    /**
     * Opaque identifier of next page
     * @type string
     * @memberof CallInformationApilistConnectionActiveCalls
     */
    pageAfter?: string
    /**
     * Opaque identifier of previous page
     * @type string
     * @memberof CallInformationApilistConnectionActiveCalls
     */
    pageBefore?: string
}

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
     * Lists all active calls for given connection. Acceptable connections are either SIP connections with webhook_url or xml_request_url, call control or texml. Returned results are cursor paginated. 
     * List all active calls for given connection
     * @param param the request object
     */
    public listConnectionActiveCalls(param: CallInformationApiListConnectionActiveCallsRequest, options?: Configuration): Promise<ActiveCallsResponse> {
        return this.api.listConnectionActiveCalls(param.connectionId, param.pageLimit, param.pageAfter, param.pageBefore,  options).toPromise();
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

export interface CallRecordingsApiCreateCustomStorageCredentialsRequest {
    /**
     * Telnyx connection id
     * @type string
     * @memberof CallRecordingsApicreateCustomStorageCredentials
     */
    connectionId: string
    /**
     * Creates new credentials resource for given connection_id.
     * @type CustomStorageConfiguration
     * @memberof CallRecordingsApicreateCustomStorageCredentials
     */
    customStorageConfiguration: CustomStorageConfiguration
}

export interface CallRecordingsApiDeleteCustomStorageCredentialsRequest {
    /**
     * Telnyx connection id
     * @type string
     * @memberof CallRecordingsApideleteCustomStorageCredentials
     */
    connectionId: string
}

export interface CallRecordingsApiDeleteRecordingRequest {
    /**
     * Uniquely identifies the recording by id.
     * @type string
     * @memberof CallRecordingsApideleteRecording
     */
    recordingId: string
}

export interface CallRecordingsApiGetCustomStorageCredentialsRequest {
    /**
     * Telnyx connection id
     * @type string
     * @memberof CallRecordingsApigetCustomStorageCredentials
     */
    connectionId: string
}

export interface CallRecordingsApiGetRecordingRequest {
    /**
     * Uniquely identifies the recording by id.
     * @type string
     * @memberof CallRecordingsApigetRecording
     */
    recordingId: string
}

export interface CallRecordingsApiUpdateCustomStorageCredentialsRequest {
    /**
     * Telnyx connection id
     * @type string
     * @memberof CallRecordingsApiupdateCustomStorageCredentials
     */
    connectionId: string
    /**
     * Creates new credentials resource for given connection_id.
     * @type CustomStorageConfiguration
     * @memberof CallRecordingsApiupdateCustomStorageCredentials
     */
    customStorageConfiguration: CustomStorageConfiguration
}

export class ObjectCallRecordingsApi {
    private api: ObservableCallRecordingsApi

    public constructor(configuration: Configuration, requestFactory?: CallRecordingsApiRequestFactory, responseProcessor?: CallRecordingsApiResponseProcessor) {
        this.api = new ObservableCallRecordingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates custom storage credentials configuration.
     * Create custom storage credentials
     * @param param the request object
     */
    public createCustomStorageCredentials(param: CallRecordingsApiCreateCustomStorageCredentialsRequest, options?: Configuration): Promise<CredentialsResponse> {
        return this.api.createCustomStorageCredentials(param.connectionId, param.customStorageConfiguration,  options).toPromise();
    }

    /**
     * Deletes a stored custom credentials configuration.
     * Delete stored credentials
     * @param param the request object
     */
    public deleteCustomStorageCredentials(param: CallRecordingsApiDeleteCustomStorageCredentialsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCustomStorageCredentials(param.connectionId,  options).toPromise();
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
     * Returns the information about custom storage credentials.
     * Retrieve stored credentials
     * @param param the request object
     */
    public getCustomStorageCredentials(param: CallRecordingsApiGetCustomStorageCredentialsRequest, options?: Configuration): Promise<CredentialsResponse> {
        return this.api.getCustomStorageCredentials(param.connectionId,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing call recording.
     * Retrieve call recording
     * @param param the request object
     */
    public getRecording(param: CallRecordingsApiGetRecordingRequest, options?: Configuration): Promise<RecordingResponse> {
        return this.api.getRecording(param.recordingId,  options).toPromise();
    }

    /**
     * Updates a stored custom credentials configuration.
     * Update stored credentials
     * @param param the request object
     */
    public updateCustomStorageCredentials(param: CallRecordingsApiUpdateCustomStorageCredentialsRequest, options?: Configuration): Promise<CredentialsResponse> {
        return this.api.updateCustomStorageCredentials(param.connectionId, param.customStorageConfiguration,  options).toPromise();
    }

}

import { ObservableCampaignApi } from "./ObservableAPI.ts";
import { CampaignApiRequestFactory, CampaignApiResponseProcessor} from "../apis/CampaignApi.ts";

export interface CampaignApiAcceptSharedCampaignCampaignAcceptSharingCampaignIdPostRequest {
    /**
     * TCR\&#39;s ID for the campaign to import
     * @type string
     * @memberof CampaignApiacceptSharedCampaignCampaignAcceptSharingCampaignIdPost
     */
    campaignId: string
}

export interface CampaignApiDeactivateMyCampaignCampaignCampaignIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof CampaignApideactivateMyCampaignCampaignCampaignIdDelete
     */
    campaignId: string
}

export interface CampaignApiGetCampaignCostCampaignUsecaseCostGetRequest {
    /**
     * 
     * @type string
     * @memberof CampaignApigetCampaignCostCampaignUsecaseCostGet
     */
    usecase: string
}

export interface CampaignApiGetCampaignMnoMetadataCampaignCampaignIdMnoMetadataGetRequest {
    /**
     * ID of the campaign in question
     * @type string
     * @memberof CampaignApigetCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet
     */
    campaignId: string
}

export interface CampaignApiGetMyCampaignCampaignCampaignIdGetRequest {
    /**
     * 
     * @type string
     * @memberof CampaignApigetMyCampaignCampaignCampaignIdGet
     */
    campaignId: string
}

export interface CampaignApiGetMyCampaignOperationStatusCampaignCampaignIdOperationStatusGetRequest {
    /**
     * 
     * @type string
     * @memberof CampaignApigetMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet
     */
    campaignId: string
}

export interface CampaignApiGetMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGetRequest {
    /**
     * 
     * @type string
     * @memberof CampaignApigetMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGet
     */
    campaignId: string
}

export interface CampaignApiGetSharingStatusCampaignCampaignIdSharingGetRequest {
    /**
     * ID of the campaign in question
     * @type string
     * @memberof CampaignApigetSharingStatusCampaignCampaignIdSharingGet
     */
    campaignId: string
}

export interface CampaignApiListCampaignsCampaignGetRequest {
    /**
     * 
     * @type string
     * @memberof CampaignApilistCampaignsCampaignGet
     */
    brandId: string
    /**
     * The 1-indexed page number to get. The default value is &#x60;1&#x60;.
     * @type number
     * @memberof CampaignApilistCampaignsCampaignGet
     */
    page?: number
    /**
     * The amount of records per page, limited to between 1 and 500 inclusive. The default value is &#x60;10&#x60;.
     * @type number
     * @memberof CampaignApilistCampaignsCampaignGet
     */
    recordsPerPage?: number
}

export interface CampaignApiQualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGetRequest {
    /**
     * 
     * @type string
     * @memberof CampaignApiqualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet
     */
    usecase: string
    /**
     * 
     * @type string
     * @memberof CampaignApiqualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet
     */
    brandId: string
}

export interface CampaignApiSubmitCampaignCampaignBuilderPostRequest {
    /**
     * 
     * @type CampaignRequest
     * @memberof CampaignApisubmitCampaignCampaignBuilderPost
     */
    campaignRequest: CampaignRequest
}

export interface CampaignApiUpdateMyCampaignCampaignCampaignIdPutRequest {
    /**
     * 
     * @type string
     * @memberof CampaignApiupdateMyCampaignCampaignCampaignIdPut
     */
    campaignId: string
    /**
     * 
     * @type UpdateCampaign
     * @memberof CampaignApiupdateMyCampaignCampaignCampaignIdPut
     */
    updateCampaign: UpdateCampaign
}

export class ObjectCampaignApi {
    private api: ObservableCampaignApi

    public constructor(configuration: Configuration, requestFactory?: CampaignApiRequestFactory, responseProcessor?: CampaignApiResponseProcessor) {
        this.api = new ObservableCampaignApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Manually accept a campaign shared with Telnyx
     * Accept Shared Campaign
     * @param param the request object
     */
    public acceptSharedCampaignCampaignAcceptSharingCampaignIdPost(param: CampaignApiAcceptSharedCampaignCampaignAcceptSharingCampaignIdPostRequest, options?: Configuration): Promise<any> {
        return this.api.acceptSharedCampaignCampaignAcceptSharingCampaignIdPost(param.campaignId,  options).toPromise();
    }

    /**
     * Terminate a campaign. Note that once deactivated, a campaign cannot be restored.
     * Deactivate My Campaign
     * @param param the request object
     */
    public deactivateMyCampaignCampaignCampaignIdDelete(param: CampaignApiDeactivateMyCampaignCampaignCampaignIdDeleteRequest, options?: Configuration): Promise<CampaignDeletionResponse> {
        return this.api.deactivateMyCampaignCampaignCampaignIdDelete(param.campaignId,  options).toPromise();
    }

    /**
     * Get Campaign Cost
     * @param param the request object
     */
    public getCampaignCostCampaignUsecaseCostGet(param: CampaignApiGetCampaignCostCampaignUsecaseCostGetRequest, options?: Configuration): Promise<CampaignCost> {
        return this.api.getCampaignCostCampaignUsecaseCostGet(param.usecase,  options).toPromise();
    }

    /**
     * Get the campaign metadata for each MNO it was submitted to
     * Get Campaign Mno Metadata
     * @param param the request object
     */
    public getCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet(param: CampaignApiGetCampaignMnoMetadataCampaignCampaignIdMnoMetadataGetRequest, options?: Configuration): Promise<any> {
        return this.api.getCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieve campaign details by `campaignId`.
     * Get My Campaign
     * @param param the request object
     */
    public getMyCampaignCampaignCampaignIdGet(param: CampaignApiGetMyCampaignCampaignCampaignIdGetRequest, options?: Configuration): Promise<CampaignCSP> {
        return this.api.getMyCampaignCampaignCampaignIdGet(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieve campaign\'s operation status at MNO level.
     * Get My Campaign Operation Status
     * @param param the request object
     */
    public getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet(param: CampaignApiGetMyCampaignOperationStatusCampaignCampaignIdOperationStatusGetRequest, options?: Configuration): Promise<any> {
        return this.api.getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet(param.campaignId,  options).toPromise();
    }

    /**
     * Get My Osr Campaign Attributes
     * @param param the request object
     */
    public getMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGet(param: CampaignApiGetMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGetRequest, options?: Configuration): Promise<any> {
        return this.api.getMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGet(param.campaignId,  options).toPromise();
    }

    /**
     * Get Sharing Status
     * @param param the request object
     */
    public getSharingStatusCampaignCampaignIdSharingGet(param: CampaignApiGetSharingStatusCampaignCampaignIdSharingGetRequest, options?: Configuration): Promise<CampaignSharingChain> {
        return this.api.getSharingStatusCampaignCampaignIdSharingGet(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieve a list of campaigns associated with a supplied `brandId`.
     * List Campaigns
     * @param param the request object
     */
    public listCampaignsCampaignGet(param: CampaignApiListCampaignsCampaignGetRequest, options?: Configuration): Promise<CampaignRecordSetCSP> {
        return this.api.listCampaignsCampaignGet(param.brandId, param.page, param.recordsPerPage,  options).toPromise();
    }

    /**
     * This endpoint allows you to see whether or not the supplied brand is suitable for your desired campaign use case.
     * Qualify By Usecase
     * @param param the request object
     */
    public qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet(param: CampaignApiQualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGetRequest, options?: Configuration): Promise<UsecaseMetadata> {
        return this.api.qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet(param.usecase, param.brandId,  options).toPromise();
    }

    /**
     * Before creating a campaign, use the [Qualify By Usecase endpoint](https://developers.telnyx.com/docs/api/v2/10dlc/Campaign#qualify_by_usecase_campaignBuilder_brand__brand_id__usecase__usecase__get) to ensure that the brand you want to assign a new campaign to is qualified for the desired use case of that campaign. **Please note:** After campaign creation, you\'ll only be able to edit the campaign\'s sample messages. Creating a campaign will entail an upfront, non-refundable three month\'s cost that will depend on the campaign\'s use case ([see 10DLC Costs section for details](https://developers.telnyx.com/docs/api/v2/10dlc)).
     * Submit Campaign
     * @param param the request object
     */
    public submitCampaignCampaignBuilderPost(param: CampaignApiSubmitCampaignCampaignBuilderPostRequest, options?: Configuration): Promise<any | CampaignCSP> {
        return this.api.submitCampaignCampaignBuilderPost(param.campaignRequest,  options).toPromise();
    }

    /**
     * Update a campaign\'s properties by `campaignId`. **Please note:** only sample messages are editable.
     * Update My Campaign
     * @param param the request object
     */
    public updateMyCampaignCampaignCampaignIdPut(param: CampaignApiUpdateMyCampaignCampaignCampaignIdPutRequest, options?: Configuration): Promise<Campaign> {
        return this.api.updateMyCampaignCampaignCampaignIdPut(param.campaignId, param.updateCampaign,  options).toPromise();
    }

}

import { ObservableChannelZonesApi } from "./ObservableAPI.ts";
import { ChannelZonesApiRequestFactory, ChannelZonesApiResponseProcessor} from "../apis/ChannelZonesApi.ts";

export interface ChannelZonesApiAssignPhoneNumberRequest {
    /**
     * Channel zone identifier
     * @type string
     * @memberof ChannelZonesApiassignPhoneNumber
     */
    channelZoneId: string
    /**
     * Phone number to assign to the channel zone. The phone number should be in E.164 format.
     * @type AssignPhoneNumberRequest
     * @memberof ChannelZonesApiassignPhoneNumber
     */
    body: AssignPhoneNumberRequest
}

export interface ChannelZonesApiGetChannelZoneRequest {
    /**
     * Channel zone identifier
     * @type string
     * @memberof ChannelZonesApigetChannelZone
     */
    channelZoneId: string
}

export interface ChannelZonesApiGetChannelZonesRequest {
    /**
     * The page number to load
     * @type number
     * @memberof ChannelZonesApigetChannelZones
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof ChannelZonesApigetChannelZones
     */
    pageSize?: number
}

export interface ChannelZonesApiGetPhoneNumbersRequest {
    /**
     * Channel zone identifier
     * @type string
     * @memberof ChannelZonesApigetPhoneNumbers
     */
    channelZoneId: string
    /**
     * The page number to load
     * @type number
     * @memberof ChannelZonesApigetPhoneNumbers
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof ChannelZonesApigetPhoneNumbers
     */
    pageSize?: number
}

export interface ChannelZonesApiPatchGroupRequest {
    /**
     * Channel zone identifier
     * @type string
     * @memberof ChannelZonesApipatchGroup
     */
    channelZoneId: string
    /**
     * Quantity of reserved channels
     * @type PatchGroupRequest
     * @memberof ChannelZonesApipatchGroup
     */
    body: PatchGroupRequest
}

export interface ChannelZonesApiUnassignPhoneNumberRequest {
    /**
     * Channel zone identifier
     * @type string
     * @memberof ChannelZonesApiunassignPhoneNumber
     */
    channelZoneId: string
    /**
     * The phone number to be looked up
     * @type string
     * @memberof ChannelZonesApiunassignPhoneNumber
     */
    phoneNumber: string
}

export class ObjectChannelZonesApi {
    private api: ObservableChannelZonesApi

    public constructor(configuration: Configuration, requestFactory?: ChannelZonesApiRequestFactory, responseProcessor?: ChannelZonesApiResponseProcessor) {
        this.api = new ObservableChannelZonesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * You should own the phone number being assigned to the channel zone. Remember that you should reserve channels in this channel zone, otherwise you won\'t be able to receive incoming calls.
     * Assign a phone number to a channel zone
     * @param param the request object
     */
    public assignPhoneNumber(param: ChannelZonesApiAssignPhoneNumberRequest, options?: Configuration): Promise<GcbPhoneNumber> {
        return this.api.assignPhoneNumber(param.channelZoneId, param.body,  options).toPromise();
    }

    /**
     * Get a specific channel zone
     * Get a specific channel zone
     * @param param the request object
     */
    public getChannelZone(param: ChannelZonesApiGetChannelZoneRequest, options?: Configuration): Promise<GcbChannelZone> {
        return this.api.getChannelZone(param.channelZoneId,  options).toPromise();
    }

    /**
     * List of channel zones with their countries
     * Get list of channel zones
     * @param param the request object
     */
    public getChannelZones(param: ChannelZonesApiGetChannelZonesRequest = {}, options?: Configuration): Promise<GetChannelZones200Response> {
        return this.api.getChannelZones(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieve the assigned phone numbers in a channel zone. Phone numbers assigned to a channel zone can receive concurrent calls up to the quantity reserved in that channel zone. Additional concurrent calls are rejected with a busy signal.
     * Get the list of phone numbers assigned to a channel zone
     * @param param the request object
     */
    public getPhoneNumbers(param: ChannelZonesApiGetPhoneNumbersRequest, options?: Configuration): Promise<GetPhoneNumbers200Response> {
        return this.api.getPhoneNumbers(param.channelZoneId, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Change the amount of reserved channels at a given channel zone
     * Patch a channel zone
     * @param param the request object
     */
    public patchGroup(param: ChannelZonesApiPatchGroupRequest, options?: Configuration): Promise<GcbChannelZone> {
        return this.api.patchGroup(param.channelZoneId, param.body,  options).toPromise();
    }

    /**
     * Unassign a phone number from a channel zone
     * @param param the request object
     */
    public unassignPhoneNumber(param: ChannelZonesApiUnassignPhoneNumberRequest, options?: Configuration): Promise<void> {
        return this.api.unassignPhoneNumber(param.channelZoneId, param.phoneNumber,  options).toPromise();
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

import { ObservableConnectionsApi } from "./ObservableAPI.ts";
import { ConnectionsApiRequestFactory, ConnectionsApiResponseProcessor} from "../apis/ConnectionsApi.ts";

export interface ConnectionsApiListConnectionsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof ConnectionsApilistConnections
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof ConnectionsApilistConnections
     */
    pageSize?: number
    /**
     * If present, connections with &lt;code&gt;connection_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @type string
     * @memberof ConnectionsApilistConnections
     */
    filterConnectionNameContains?: string
    /**
     * Identifies the associated outbound voice profile.
     * @type string
     * @memberof ConnectionsApilistConnections
     */
    filterOutboundVoiceProfileId?: string
    /**
     * Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     * @type &#39;created_at&#39; | &#39;connection_name&#39; | &#39;active&#39;
     * @memberof ConnectionsApilistConnections
     */
    sort?: 'created_at' | 'connection_name' | 'active'
}

export interface ConnectionsApiRetrieveConnectionRequest {
    /**
     * IP Connection ID
     * @type string
     * @memberof ConnectionsApiretrieveConnection
     */
    id: string
}

export class ObjectConnectionsApi {
    private api: ObservableConnectionsApi

    public constructor(configuration: Configuration, requestFactory?: ConnectionsApiRequestFactory, responseProcessor?: ConnectionsApiResponseProcessor) {
        this.api = new ObservableConnectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of your connections irrespective of type.
     * List connections
     * @param param the request object
     */
    public listConnections(param: ConnectionsApiListConnectionsRequest = {}, options?: Configuration): Promise<ListConnectionsResponse> {
        return this.api.listConnections(param.pageNumber, param.pageSize, param.filterConnectionNameContains, param.filterOutboundVoiceProfileId, param.sort,  options).toPromise();
    }

    /**
     * Retrieves the high-level details of an existing connection. To retrieve specific authentication information, use the endpoint for the specific connection type.
     * Retrieve a connection
     * @param param the request object
     */
    public retrieveConnection(param: ConnectionsApiRetrieveConnectionRequest, options?: Configuration): Promise<ConnectionResponse> {
        return this.api.retrieveConnection(param.id,  options).toPromise();
    }

}

import { ObservableCredentialConnectionsApi } from "./ObservableAPI.ts";
import { CredentialConnectionsApiRequestFactory, CredentialConnectionsApiResponseProcessor} from "../apis/CredentialConnectionsApi.ts";

export interface CredentialConnectionsApiCreateCredentialConnectionRequest {
    /**
     * Parameters that can be defined during credential connection creation
     * @type CreateCredentialConnectionRequest
     * @memberof CredentialConnectionsApicreateCredentialConnection
     */
    createCredentialConnectionRequest: CreateCredentialConnectionRequest
}

export interface CredentialConnectionsApiDeleteCredentialConnectionRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof CredentialConnectionsApideleteCredentialConnection
     */
    id: string
}

export interface CredentialConnectionsApiListCredentialConnectionsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof CredentialConnectionsApilistCredentialConnections
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof CredentialConnectionsApilistCredentialConnections
     */
    pageSize?: number
    /**
     * If present, connections with &lt;code&gt;connection_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @type string
     * @memberof CredentialConnectionsApilistCredentialConnections
     */
    filterConnectionNameContains?: string
    /**
     * Identifies the associated outbound voice profile.
     * @type string
     * @memberof CredentialConnectionsApilistCredentialConnections
     */
    filterOutboundOutboundVoiceProfileId?: string
    /**
     * Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     * @type &#39;created_at&#39; | &#39;connection_name&#39; | &#39;active&#39;
     * @memberof CredentialConnectionsApilistCredentialConnections
     */
    sort?: 'created_at' | 'connection_name' | 'active'
}

export interface CredentialConnectionsApiRetrieveCredentialConnectionRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof CredentialConnectionsApiretrieveCredentialConnection
     */
    id: string
}

export interface CredentialConnectionsApiUpdateCredentialConnectionRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof CredentialConnectionsApiupdateCredentialConnection
     */
    id: string
    /**
     * Parameters that can be updated in a credential connection
     * @type UpdateCredentialConnectionRequest
     * @memberof CredentialConnectionsApiupdateCredentialConnection
     */
    updateCredentialConnectionRequest: UpdateCredentialConnectionRequest
}

export class ObjectCredentialConnectionsApi {
    private api: ObservableCredentialConnectionsApi

    public constructor(configuration: Configuration, requestFactory?: CredentialConnectionsApiRequestFactory, responseProcessor?: CredentialConnectionsApiResponseProcessor) {
        this.api = new ObservableCredentialConnectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a credential connection.
     * Create a credential connection
     * @param param the request object
     */
    public createCredentialConnection(param: CredentialConnectionsApiCreateCredentialConnectionRequest, options?: Configuration): Promise<CredentialConnectionResponse> {
        return this.api.createCredentialConnection(param.createCredentialConnectionRequest,  options).toPromise();
    }

    /**
     * Deletes an existing credential connection.
     * Delete a credential connection
     * @param param the request object
     */
    public deleteCredentialConnection(param: CredentialConnectionsApiDeleteCredentialConnectionRequest, options?: Configuration): Promise<CredentialConnectionResponse> {
        return this.api.deleteCredentialConnection(param.id,  options).toPromise();
    }

    /**
     * Returns a list of your credential connections.
     * List credential connections
     * @param param the request object
     */
    public listCredentialConnections(param: CredentialConnectionsApiListCredentialConnectionsRequest = {}, options?: Configuration): Promise<ListCredentialConnectionsResponse> {
        return this.api.listCredentialConnections(param.pageNumber, param.pageSize, param.filterConnectionNameContains, param.filterOutboundOutboundVoiceProfileId, param.sort,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing credential connection.
     * Retrieve a credential connection
     * @param param the request object
     */
    public retrieveCredentialConnection(param: CredentialConnectionsApiRetrieveCredentialConnectionRequest, options?: Configuration): Promise<CredentialConnectionResponse> {
        return this.api.retrieveCredentialConnection(param.id,  options).toPromise();
    }

    /**
     * Updates settings of an existing credential connection.
     * Update a credential connection
     * @param param the request object
     */
    public updateCredentialConnection(param: CredentialConnectionsApiUpdateCredentialConnectionRequest, options?: Configuration): Promise<CredentialConnectionResponse> {
        return this.api.updateCredentialConnection(param.id, param.updateCredentialConnectionRequest,  options).toPromise();
    }

}

import { ObservableCredentialsApi } from "./ObservableAPI.ts";
import { CredentialsApiRequestFactory, CredentialsApiResponseProcessor} from "../apis/CredentialsApi.ts";

export interface CredentialsApiCreateTelephonyCredentialRequest {
    /**
     * Parameters that can be defined during credential creation
     * @type TelephonyCredentialCreateRequest
     * @memberof CredentialsApicreateTelephonyCredential
     */
    telephonyCredentialCreateRequest: TelephonyCredentialCreateRequest
}

export interface CredentialsApiDeleteTelephonyCredentialRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof CredentialsApideleteTelephonyCredential
     */
    id: string
}

export interface CredentialsApiFindTelephonyCredentialsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof CredentialsApifindTelephonyCredentials
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof CredentialsApifindTelephonyCredentials
     */
    pageSize?: number
    /**
     * Filter by tag
     * @type string
     * @memberof CredentialsApifindTelephonyCredentials
     */
    filterTag?: string
    /**
     * Filter by name
     * @type string
     * @memberof CredentialsApifindTelephonyCredentials
     */
    filterName?: string
    /**
     * Filter by status
     * @type string
     * @memberof CredentialsApifindTelephonyCredentials
     */
    filterStatus?: string
    /**
     * Filter by resource_id
     * @type string
     * @memberof CredentialsApifindTelephonyCredentials
     */
    filterResourceId?: string
    /**
     * Filter by sip_username
     * @type string
     * @memberof CredentialsApifindTelephonyCredentials
     */
    filterSipUsername?: string
}

export interface CredentialsApiGetTelephonyCredentialRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof CredentialsApigetTelephonyCredential
     */
    id: string
}

export interface CredentialsApiListTagsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof CredentialsApilistTags
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof CredentialsApilistTags
     */
    pageSize?: number
}

export interface CredentialsApiTelephonyCredentialActionRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof CredentialsApitelephonyCredentialAction
     */
    id: string
    /**
     * Identifies the action to be taken.
     * @type &#39;activate&#39; | &#39;deactivate&#39;
     * @memberof CredentialsApitelephonyCredentialAction
     */
    action: 'activate' | 'deactivate'
}

export interface CredentialsApiUpdateTelephonyCredentialRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof CredentialsApiupdateTelephonyCredential
     */
    id: string
    /**
     * Parameters that can be updated in a credential
     * @type TelephonyCredentialUpdateRequest
     * @memberof CredentialsApiupdateTelephonyCredential
     */
    telephonyCredentialUpdateRequest: TelephonyCredentialUpdateRequest
}

export class ObjectCredentialsApi {
    private api: ObservableCredentialsApi

    public constructor(configuration: Configuration, requestFactory?: CredentialsApiRequestFactory, responseProcessor?: CredentialsApiResponseProcessor) {
        this.api = new ObservableCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a credential.
     * Create a credential
     * @param param the request object
     */
    public createTelephonyCredential(param: CredentialsApiCreateTelephonyCredentialRequest, options?: Configuration): Promise<TelephonyCredentialResponse> {
        return this.api.createTelephonyCredential(param.telephonyCredentialCreateRequest,  options).toPromise();
    }

    /**
     * Delete an existing credential.
     * Delete a credential
     * @param param the request object
     */
    public deleteTelephonyCredential(param: CredentialsApiDeleteTelephonyCredentialRequest, options?: Configuration): Promise<TelephonyCredentialResponse> {
        return this.api.deleteTelephonyCredential(param.id,  options).toPromise();
    }

    /**
     * List all On-demand Credentials.
     * List all credentials
     * @param param the request object
     */
    public findTelephonyCredentials(param: CredentialsApiFindTelephonyCredentialsRequest = {}, options?: Configuration): Promise<GetAllTelephonyCredentialResponse> {
        return this.api.findTelephonyCredentials(param.pageNumber, param.pageSize, param.filterTag, param.filterName, param.filterStatus, param.filterResourceId, param.filterSipUsername,  options).toPromise();
    }

    /**
     * Get the details of an existing On-demand Credential.
     * Get a credential
     * @param param the request object
     */
    public getTelephonyCredential(param: CredentialsApiGetTelephonyCredentialRequest, options?: Configuration): Promise<TelephonyCredentialResponse> {
        return this.api.getTelephonyCredential(param.id,  options).toPromise();
    }

    /**
     * Returns a list of tags used on Credentials
     * List all tags
     * @param param the request object
     */
    public listTags(param: CredentialsApiListTagsRequest = {}, options?: Configuration): Promise<ListTagsResponse> {
        return this.api.listTags(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Perform activate or deactivate action on provided Credential. Activate action will change the status to active, making it possible to connect calls with the credential. Deactivate action will change the status to inactive, making it impossible to connect calls with the credential.
     * Perform activate or deactivate action on provided Credential
     * @param param the request object
     */
    public telephonyCredentialAction(param: CredentialsApiTelephonyCredentialActionRequest, options?: Configuration): Promise<TelephonyCredentialResponse> {
        return this.api.telephonyCredentialAction(param.id, param.action,  options).toPromise();
    }

    /**
     * Update an existing credential.
     * Update a credential
     * @param param the request object
     */
    public updateTelephonyCredential(param: CredentialsApiUpdateTelephonyCredentialRequest, options?: Configuration): Promise<TelephonyCredentialResponse> {
        return this.api.updateTelephonyCredential(param.id, param.telephonyCredentialUpdateRequest,  options).toPromise();
    }

}

import { ObservableCustomerServiceRecordApi } from "./ObservableAPI.ts";
import { CustomerServiceRecordApiRequestFactory, CustomerServiceRecordApiResponseProcessor} from "../apis/CustomerServiceRecordApi.ts";

export interface CustomerServiceRecordApiCreateCustomerServiceRecordRequest {
    /**
     * 
     * @type UNKNOWN_BASE_TYPE
     * @memberof CustomerServiceRecordApicreateCustomerServiceRecord
     */
    UNKNOWN_BASE_TYPE: UNKNOWN_BASE_TYPE
}

export interface CustomerServiceRecordApiGetCustomerServiceRecordRequest {
    /**
     * The ID of the customer service record
     * @type string
     * @memberof CustomerServiceRecordApigetCustomerServiceRecord
     */
    customerServiceRecordId: string
}

export interface CustomerServiceRecordApiVerifyPhoneNumberCoverageRequest {
    /**
     * 
     * @type VerifyPhoneNumberCoverageRequest
     * @memberof CustomerServiceRecordApiverifyPhoneNumberCoverage
     */
    verifyPhoneNumberCoverageRequest: VerifyPhoneNumberCoverageRequest
}

export class ObjectCustomerServiceRecordApi {
    private api: ObservableCustomerServiceRecordApi

    public constructor(configuration: Configuration, requestFactory?: CustomerServiceRecordApiRequestFactory, responseProcessor?: CustomerServiceRecordApiResponseProcessor) {
        this.api = new ObservableCustomerServiceRecordApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new customer service record for the provided phone number.
     * Create a customer service record
     * @param param the request object
     */
    public createCustomerServiceRecord(param: CustomerServiceRecordApiCreateCustomerServiceRecordRequest, options?: Configuration): Promise<any> {
        return this.api.createCustomerServiceRecord(param.UNKNOWN_BASE_TYPE,  options).toPromise();
    }

    /**
     * Get a specific customer service record.
     * Get a customer service record
     * @param param the request object
     */
    public getCustomerServiceRecord(param: CustomerServiceRecordApiGetCustomerServiceRecordRequest, options?: Configuration): Promise<GetCustomerServiceRecord201Response> {
        return this.api.getCustomerServiceRecord(param.customerServiceRecordId,  options).toPromise();
    }

    /**
     * Verify the coverage for a list of phone numbers.
     * Verify CSR phone number coverage
     * @param param the request object
     */
    public verifyPhoneNumberCoverage(param: CustomerServiceRecordApiVerifyPhoneNumberCoverageRequest, options?: Configuration): Promise<VerifyPhoneNumberCoverage201Response> {
        return this.api.verifyPhoneNumberCoverage(param.verifyPhoneNumberCoverageRequest,  options).toPromise();
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

import { ObservableDefaultApi } from "./ObservableAPI.ts";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi.ts";

export interface DefaultApiCreateAccessFqdnRequest {
    /**
     * 
     * @type CustomerFacingFQDNsPost
     * @memberof DefaultApicreateAccessFqdn
     */
    customerFacingFQDNsPost: CustomerFacingFQDNsPost
}

export interface DefaultApiCreateFqdnRequest {
    /**
     * 
     * @type CreateFqdnRequest
     * @memberof DefaultApicreateFqdn
     */
    createFqdnRequest?: CreateFqdnRequest
}

export interface DefaultApiDeleteAccessFqdnRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApideleteAccessFqdn
     */
    fqdnId: string
}

export interface DefaultApiDeleteFqdnRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof DefaultApideleteFqdn
     */
    id: string
}

export interface DefaultApiListAccessFqdnByIdRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApilistAccessFqdnById
     */
    fqdnId: string
}

export interface DefaultApiListAllAccessFqdnsRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApilistAllAccessFqdns
     */
    pageNumber?: number
    /**
     * 
     * @type number
     * @memberof DefaultApilistAllAccessFqdns
     */
    pageSize?: number
}

export interface DefaultApiListAllIpsByFqdnRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApilistAllIpsByFqdn
     */
    fqdnId: string
    /**
     * 
     * @type number
     * @memberof DefaultApilistAllIpsByFqdn
     */
    pageNumber?: number
    /**
     * 
     * @type number
     * @memberof DefaultApilistAllIpsByFqdn
     */
    pageSize?: number
}

export interface DefaultApiListFqdnsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof DefaultApilistFqdns
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof DefaultApilistFqdns
     */
    pageSize?: number
    /**
     * ID of the FQDN connection to which the FQDN belongs.
     * @type string
     * @memberof DefaultApilistFqdns
     */
    filterConnectionId?: string
    /**
     * FQDN represented by the resource.
     * @type string
     * @memberof DefaultApilistFqdns
     */
    filterFqdn?: string
    /**
     * Port to use when connecting to the FQDN.
     * @type number
     * @memberof DefaultApilistFqdns
     */
    filterPort?: number
    /**
     * DNS record type used by the FQDN.
     * @type string
     * @memberof DefaultApilistFqdns
     */
    filterDnsRecordType?: string
}

export interface DefaultApiRetrieveFqdnRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof DefaultApiretrieveFqdn
     */
    id: string
}

export interface DefaultApiUpdateAccessFqdnRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateAccessFqdn
     */
    fqdnId: string
    /**
     * 
     * @type CustomerFacingFQDNsPatch
     * @memberof DefaultApiupdateAccessFqdn
     */
    customerFacingFQDNsPatch: CustomerFacingFQDNsPatch
}

export interface DefaultApiUpdateFqdnRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof DefaultApiupdateFqdn
     */
    id: string
    /**
     * 
     * @type UpdateFqdnRequest
     * @memberof DefaultApiupdateFqdn
     */
    updateFqdnRequest?: UpdateFqdnRequest
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create new Access FQDN
     * @param param the request object
     */
    public createAccessFqdn(param: DefaultApiCreateAccessFqdnRequest, options?: Configuration): Promise<CustomerFacingFQDNsResponseSchema> {
        return this.api.createAccessFqdn(param.customerFacingFQDNsPost,  options).toPromise();
    }

    /**
     * Create a new FQDN object.
     * Create an FQDN
     * @param param the request object
     */
    public createFqdn(param: DefaultApiCreateFqdnRequest = {}, options?: Configuration): Promise<FQDNResponse> {
        return this.api.createFqdn(param.createFqdnRequest,  options).toPromise();
    }

    /**
     * Delete Access FQDN
     * @param param the request object
     */
    public deleteAccessFqdn(param: DefaultApiDeleteAccessFqdnRequest, options?: Configuration): Promise<CustomerFacingFQDNsResponseSchema> {
        return this.api.deleteAccessFqdn(param.fqdnId,  options).toPromise();
    }

    /**
     * Delete an FQDN.
     * Delete an FQDN
     * @param param the request object
     */
    public deleteFqdn(param: DefaultApiDeleteFqdnRequest, options?: Configuration): Promise<FQDNResponse> {
        return this.api.deleteFqdn(param.id,  options).toPromise();
    }

    /**
     * List an Access FQDN
     * @param param the request object
     */
    public listAccessFqdnById(param: DefaultApiListAccessFqdnByIdRequest, options?: Configuration): Promise<CustomerFacingFQDNsResponseSchema> {
        return this.api.listAccessFqdnById(param.fqdnId,  options).toPromise();
    }

    /**
     * List all Access FQDNs
     * @param param the request object
     */
    public listAllAccessFqdns(param: DefaultApiListAllAccessFqdnsRequest = {}, options?: Configuration): Promise<CustomerFacingFQDNsListResponse> {
        return this.api.listAllAccessFqdns(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * List Access FQDN\'s IP Addresses
     * @param param the request object
     */
    public listAllIpsByFqdn(param: DefaultApiListAllIpsByFqdnRequest, options?: Configuration): Promise<CustomerFacingFQDNsGetIPResponse> {
        return this.api.listAllIpsByFqdn(param.fqdnId, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Get all FQDNs belonging to the user that match the given filters.
     * List FQDNs
     * @param param the request object
     */
    public listFqdns(param: DefaultApiListFqdnsRequest = {}, options?: Configuration): Promise<ListFQDNsResponse> {
        return this.api.listFqdns(param.pageNumber, param.pageSize, param.filterConnectionId, param.filterFqdn, param.filterPort, param.filterDnsRecordType,  options).toPromise();
    }

    /**
     * Return the details regarding a specific FQDN.
     * Retrieve an FQDN
     * @param param the request object
     */
    public retrieveFqdn(param: DefaultApiRetrieveFqdnRequest, options?: Configuration): Promise<FQDNResponse> {
        return this.api.retrieveFqdn(param.id,  options).toPromise();
    }

    /**
     * Update Access FQDN
     * @param param the request object
     */
    public updateAccessFqdn(param: DefaultApiUpdateAccessFqdnRequest, options?: Configuration): Promise<CustomerFacingFQDNsResponseSchema> {
        return this.api.updateAccessFqdn(param.fqdnId, param.customerFacingFQDNsPatch,  options).toPromise();
    }

    /**
     * Update the details of a specific FQDN.
     * Update an FQDN
     * @param param the request object
     */
    public updateFqdn(param: DefaultApiUpdateFqdnRequest, options?: Configuration): Promise<FQDNResponse> {
        return this.api.updateFqdn(param.id, param.updateFqdnRequest,  options).toPromise();
    }

}

import { ObservableDetailRecordsApi } from "./ObservableAPI.ts";
import { DetailRecordsApiRequestFactory, DetailRecordsApiResponseProcessor} from "../apis/DetailRecordsApi.ts";

export interface DetailRecordsApiDetailRecordsSearchRequest {
    /**
     * Filter by the given record type.
     * @type &#39;amd&#39; | &#39;conference&#39; | &#39;conference-participant&#39; | &#39;media_storage&#39; | &#39;messaging&#39; | &#39;verify&#39; | &#39;whatsapp&#39; | &#39;whatsapp-conversation&#39; | &#39;wireless&#39;
     * @memberof DetailRecordsApidetailRecordsSearch
     */
    filterRecordType: 'amd' | 'conference' | 'conference-participant' | 'media_storage' | 'messaging' | 'verify' | 'whatsapp' | 'whatsapp-conversation' | 'wireless'
    /**
     * Filter by the given user-friendly date range. You can specify one of the following enum values, or a dynamic one using this format: last_N_days.
     * @type &#39;yesterday&#39; | &#39;today&#39; | &#39;tomorrow&#39; | &#39;last_week&#39; | &#39;this_week&#39; | &#39;next_week&#39; | &#39;last_month&#39; | &#39;this_month&#39; | &#39;next_month&#39;
     * @memberof DetailRecordsApidetailRecordsSearch
     */
    filterDateRange?: 'yesterday' | 'today' | 'tomorrow' | 'last_week' | 'this_week' | 'next_week' | 'last_month' | 'this_month' | 'next_month'
    /**
     * Filter records on a given record attribute and value. &lt;br/&gt;Example: filter[status]&#x3D;delivered
     * @type { [key: string]: any; }
     * @memberof DetailRecordsApidetailRecordsSearch
     */
    filter?: { [key: string]: any; }
    /**
     * Page number
     * @type number
     * @memberof DetailRecordsApidetailRecordsSearch
     */
    pageNumber?: number
    /**
     * Page size
     * @type number
     * @memberof DetailRecordsApidetailRecordsSearch
     */
    pageSize?: number
    /**
     * Specifies the sort order for results. &lt;br/&gt;Example: sort&#x3D;-created_at
     * @type Array&lt;string&gt;
     * @memberof DetailRecordsApidetailRecordsSearch
     */
    sort?: Array<string>
}

export class ObjectDetailRecordsApi {
    private api: ObservableDetailRecordsApi

    public constructor(configuration: Configuration, requestFactory?: DetailRecordsApiRequestFactory, responseProcessor?: DetailRecordsApiResponseProcessor) {
        this.api = new ObservableDetailRecordsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search for any detail record across the Telnyx Platform. Examples and additional information found [here](/docs/v2/debugging/detail-record-search).
     * Search detail records
     * @param param the request object
     */
    public detailRecordsSearch(param: DetailRecordsApiDetailRecordsSearchRequest, options?: Configuration): Promise<DetailRecordsSearchResponse> {
        return this.api.detailRecordsSearch(param.filterRecordType, param.filterDateRange, param.filter, param.pageNumber, param.pageSize, param.sort,  options).toPromise();
    }

}

import { ObservableDialogflowIntegrationApi } from "./ObservableAPI.ts";
import { DialogflowIntegrationApiRequestFactory, DialogflowIntegrationApiResponseProcessor} from "../apis/DialogflowIntegrationApi.ts";

export interface DialogflowIntegrationApiCreateDialogflowConnectionRequest {
    /**
     * Telnyx connection id
     * @type string
     * @memberof DialogflowIntegrationApicreateDialogflowConnection
     */
    connectionId: string
    /**
     * The params expected to create/update a Dialogflow Connection for given connection_id.
     * @type DialogflowConnection
     * @memberof DialogflowIntegrationApicreateDialogflowConnection
     */
    dialogflowConnection: DialogflowConnection
}

export interface DialogflowIntegrationApiDeleteDialogflowConnectionRequest {
    /**
     * Telnyx connection id
     * @type string
     * @memberof DialogflowIntegrationApideleteDialogflowConnection
     */
    connectionId: string
}

export interface DialogflowIntegrationApiGetDialogflowConnectionRequest {
    /**
     * Telnyx connection id
     * @type string
     * @memberof DialogflowIntegrationApigetDialogflowConnection
     */
    connectionId: string
}

export interface DialogflowIntegrationApiUpdateDialogflowConnectionRequest {
    /**
     * Telnyx connection id
     * @type string
     * @memberof DialogflowIntegrationApiupdateDialogflowConnection
     */
    connectionId: string
    /**
     * The params expected to create/update a Dialogflow Connection for given connection_id.
     * @type DialogflowConnection
     * @memberof DialogflowIntegrationApiupdateDialogflowConnection
     */
    dialogflowConnection: DialogflowConnection
}

export class ObjectDialogflowIntegrationApi {
    private api: ObservableDialogflowIntegrationApi

    public constructor(configuration: Configuration, requestFactory?: DialogflowIntegrationApiRequestFactory, responseProcessor?: DialogflowIntegrationApiResponseProcessor) {
        this.api = new ObservableDialogflowIntegrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Save Dialogflow Credentiails to Telnyx, so it can be used with other Telnyx services.
     * Create a Dialogflow Connection
     * @param param the request object
     */
    public createDialogflowConnection(param: DialogflowIntegrationApiCreateDialogflowConnectionRequest, options?: Configuration): Promise<DialogflowConnectionResponse> {
        return this.api.createDialogflowConnection(param.connectionId, param.dialogflowConnection,  options).toPromise();
    }

    /**
     * Deletes a stored Dialogflow Connection.
     * Delete stored Dialogflow Connection
     * @param param the request object
     */
    public deleteDialogflowConnection(param: DialogflowIntegrationApiDeleteDialogflowConnectionRequest, options?: Configuration): Promise<void> {
        return this.api.deleteDialogflowConnection(param.connectionId,  options).toPromise();
    }

    /**
     * Return details of the Dialogflow connection associated with the given CallControl connection.
     * Retrieve stored Dialogflow Connection
     * @param param the request object
     */
    public getDialogflowConnection(param: DialogflowIntegrationApiGetDialogflowConnectionRequest, options?: Configuration): Promise<DialogflowConnectionResponse> {
        return this.api.getDialogflowConnection(param.connectionId,  options).toPromise();
    }

    /**
     * Updates a stored Dialogflow Connection.
     * Update stored Dialogflow Connection
     * @param param the request object
     */
    public updateDialogflowConnection(param: DialogflowIntegrationApiUpdateDialogflowConnectionRequest, options?: Configuration): Promise<DialogflowConnectionResponse> {
        return this.api.updateDialogflowConnection(param.connectionId, param.dialogflowConnection,  options).toPromise();
    }

}

import { ObservableDocumentsApi } from "./ObservableAPI.ts";
import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi.ts";

export interface DocumentsApiCreateDocumentRequest {
    /**
     * 
     * @type CreateDocServiceDocumentRequest
     * @memberof DocumentsApicreateDocument
     */
    createDocServiceDocumentRequest: CreateDocServiceDocumentRequest
}

export interface DocumentsApiDeleteDocumentRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof DocumentsApideleteDocument
     */
    id: string
}

export interface DocumentsApiDownloadDocServiceDocumentRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof DocumentsApidownloadDocServiceDocument
     */
    id: string
}

export interface DocumentsApiListDocumentLinksRequest {
    /**
     * The page number to load
     * @type number
     * @memberof DocumentsApilistDocumentLinks
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof DocumentsApilistDocumentLinks
     */
    pageSize?: number
    /**
     * Identifies the associated document to filter on.
     * @type string
     * @memberof DocumentsApilistDocumentLinks
     */
    filterDocumentId?: string
    /**
     * The &#x60;linked_record_type&#x60; of the document to filter on.
     * @type string
     * @memberof DocumentsApilistDocumentLinks
     */
    filterLinkedRecordType?: string
    /**
     * The &#x60;linked_resource_id&#x60; of the document to filter on.
     * @type string
     * @memberof DocumentsApilistDocumentLinks
     */
    filterLinkedResourceId?: string
}

export interface DocumentsApiListDocumentsRequest {
    /**
     * Filter by string matching part of filename.
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    filterFilenameContains?: string
    /**
     * Filter documents by a customer references.
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    filterCustomerReferenceEq?: string
    /**
     * Filter documents by a list of customer references.
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    filterCustomerReferenceIn?: string
    /**
     * Filter by created at greater than provided value.
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    filterCreatedAtGt?: string
    /**
     * Filter by created at less than provided value.
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    filterCreatedAtLt?: string
    /**
     * Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a &#x60;-&#x60; in front of the field name.
     * @type &#39;filename&#39; | &#39;created_at&#39; | &#39;updated_at&#39;
     * @memberof DocumentsApilistDocuments
     */
    sort?: 'filename' | 'created_at' | 'updated_at'
    /**
     * The page number to load
     * @type number
     * @memberof DocumentsApilistDocuments
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof DocumentsApilistDocuments
     */
    pageSize?: number
}

export interface DocumentsApiRetrieveDocumentRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof DocumentsApiretrieveDocument
     */
    id: string
}

export interface DocumentsApiUpdateDocumentRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof DocumentsApiupdateDocument
     */
    id: string
    /**
     * 
     * @type DocServiceDocument
     * @memberof DocumentsApiupdateDocument
     */
    docServiceDocument: DocServiceDocument
}

export class ObjectDocumentsApi {
    private api: ObservableDocumentsApi

    public constructor(configuration: Configuration, requestFactory?: DocumentsApiRequestFactory, responseProcessor?: DocumentsApiResponseProcessor) {
        this.api = new ObservableDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload a document.<br /><br />Uploaded files must be linked to a service within 30 minutes or they will be automatically deleted.
     * Upload a document
     * @param param the request object
     */
    public createDocument(param: DocumentsApiCreateDocumentRequest, options?: Configuration): Promise<CreateDocument200Response> {
        return this.api.createDocument(param.createDocServiceDocumentRequest,  options).toPromise();
    }

    /**
     * Delete a document.<br /><br />A document can only be deleted if it\'s not linked to a service. If it is linked to a service, it must be unlinked prior to deleting.
     * Delete a document
     * @param param the request object
     */
    public deleteDocument(param: DocumentsApiDeleteDocumentRequest, options?: Configuration): Promise<CreateDocument200Response> {
        return this.api.deleteDocument(param.id,  options).toPromise();
    }

    /**
     * Download a document.
     * Download a document
     * @param param the request object
     */
    public downloadDocServiceDocument(param: DocumentsApiDownloadDocServiceDocumentRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.downloadDocServiceDocument(param.id,  options).toPromise();
    }

    /**
     * List all documents links ordered by created_at descending.
     * List all document links
     * @param param the request object
     */
    public listDocumentLinks(param: DocumentsApiListDocumentLinksRequest = {}, options?: Configuration): Promise<ListDocumentLinks200Response> {
        return this.api.listDocumentLinks(param.pageNumber, param.pageSize, param.filterDocumentId, param.filterLinkedRecordType, param.filterLinkedResourceId,  options).toPromise();
    }

    /**
     * List all documents ordered by created_at descending.
     * List all documents
     * @param param the request object
     */
    public listDocuments(param: DocumentsApiListDocumentsRequest = {}, options?: Configuration): Promise<ListDocuments200Response> {
        return this.api.listDocuments(param.filterFilenameContains, param.filterCustomerReferenceEq, param.filterCustomerReferenceIn, param.filterCreatedAtGt, param.filterCreatedAtLt, param.sort, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieve a document.
     * Retrieve a document
     * @param param the request object
     */
    public retrieveDocument(param: DocumentsApiRetrieveDocumentRequest, options?: Configuration): Promise<CreateDocument200Response> {
        return this.api.retrieveDocument(param.id,  options).toPromise();
    }

    /**
     * Update a document.
     * Update a document
     * @param param the request object
     */
    public updateDocument(param: DocumentsApiUpdateDocumentRequest, options?: Configuration): Promise<CreateDocument200Response> {
        return this.api.updateDocument(param.id, param.docServiceDocument,  options).toPromise();
    }

}

import { ObservableDynamicEmergencyAddressesApi } from "./ObservableAPI.ts";
import { DynamicEmergencyAddressesApiRequestFactory, DynamicEmergencyAddressesApiResponseProcessor} from "../apis/DynamicEmergencyAddressesApi.ts";

export interface DynamicEmergencyAddressesApiCreateDyanmicEmergencyAddressRequest {
    /**
     * 
     * @type DynamicEmergencyAddress
     * @memberof DynamicEmergencyAddressesApicreateDyanmicEmergencyAddress
     */
    dynamicEmergencyAddress: DynamicEmergencyAddress
}

export interface DynamicEmergencyAddressesApiDeleteDynamicEmergencyAddressRequest {
    /**
     * Dynamic Emergency Address id
     * @type string
     * @memberof DynamicEmergencyAddressesApideleteDynamicEmergencyAddress
     */
    id: string
}

export interface DynamicEmergencyAddressesApiGetDynamicEmergencyAddressRequest {
    /**
     * Dynamic Emergency Address id
     * @type string
     * @memberof DynamicEmergencyAddressesApigetDynamicEmergencyAddress
     */
    id: string
}

export interface DynamicEmergencyAddressesApiListDyanmicEmergencyAddressesRequest {
    /**
     * Filter by status.
     * @type &#39;pending&#39; | &#39;activated&#39; | &#39;rejected&#39;
     * @memberof DynamicEmergencyAddressesApilistDyanmicEmergencyAddresses
     */
    filterStatus?: 'pending' | 'activated' | 'rejected'
    /**
     * Filter by country code.
     * @type string
     * @memberof DynamicEmergencyAddressesApilistDyanmicEmergencyAddresses
     */
    filterCountryCode?: string
    /**
     * The page number to load
     * @type number
     * @memberof DynamicEmergencyAddressesApilistDyanmicEmergencyAddresses
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof DynamicEmergencyAddressesApilistDyanmicEmergencyAddresses
     */
    pageSize?: number
}

export class ObjectDynamicEmergencyAddressesApi {
    private api: ObservableDynamicEmergencyAddressesApi

    public constructor(configuration: Configuration, requestFactory?: DynamicEmergencyAddressesApiRequestFactory, responseProcessor?: DynamicEmergencyAddressesApiResponseProcessor) {
        this.api = new ObservableDynamicEmergencyAddressesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a dynamic emergency address.
     * Create a dynamic emergency address.
     * @param param the request object
     */
    public createDyanmicEmergencyAddress(param: DynamicEmergencyAddressesApiCreateDyanmicEmergencyAddressRequest, options?: Configuration): Promise<CreateDyanmicEmergencyAddress201Response> {
        return this.api.createDyanmicEmergencyAddress(param.dynamicEmergencyAddress,  options).toPromise();
    }

    /**
     * Deletes the dynamic emergency address based on the ID provided
     * Delete a dynamic emergency address
     * @param param the request object
     */
    public deleteDynamicEmergencyAddress(param: DynamicEmergencyAddressesApiDeleteDynamicEmergencyAddressRequest, options?: Configuration): Promise<CreateDyanmicEmergencyAddress201Response> {
        return this.api.deleteDynamicEmergencyAddress(param.id,  options).toPromise();
    }

    /**
     * Returns the dynamic emergency address based on the ID provided
     * Get a dynamic emergency address
     * @param param the request object
     */
    public getDynamicEmergencyAddress(param: DynamicEmergencyAddressesApiGetDynamicEmergencyAddressRequest, options?: Configuration): Promise<CreateDyanmicEmergencyAddress201Response> {
        return this.api.getDynamicEmergencyAddress(param.id,  options).toPromise();
    }

    /**
     * Returns the dynamic emergency addresses according to filters
     * List dynamic emergency addresses
     * @param param the request object
     */
    public listDyanmicEmergencyAddresses(param: DynamicEmergencyAddressesApiListDyanmicEmergencyAddressesRequest = {}, options?: Configuration): Promise<ListDyanmicEmergencyAddresses200Response> {
        return this.api.listDyanmicEmergencyAddresses(param.filterStatus, param.filterCountryCode, param.pageNumber, param.pageSize,  options).toPromise();
    }

}

import { ObservableDynamicEmergencyEndpointsApi } from "./ObservableAPI.ts";
import { DynamicEmergencyEndpointsApiRequestFactory, DynamicEmergencyEndpointsApiResponseProcessor} from "../apis/DynamicEmergencyEndpointsApi.ts";

export interface DynamicEmergencyEndpointsApiCreateDyanmicEmergencyEndpointRequest {
    /**
     * 
     * @type DynamicEmergencyEndpoint
     * @memberof DynamicEmergencyEndpointsApicreateDyanmicEmergencyEndpoint
     */
    dynamicEmergencyEndpoint: DynamicEmergencyEndpoint
}

export interface DynamicEmergencyEndpointsApiDeleteDynamicEmergencyEndpointRequest {
    /**
     * Dynamic Emergency Endpoint id
     * @type string
     * @memberof DynamicEmergencyEndpointsApideleteDynamicEmergencyEndpoint
     */
    id: string
}

export interface DynamicEmergencyEndpointsApiGetDynamicEmergencyEndpointRequest {
    /**
     * Dynamic Emergency Endpoint id
     * @type string
     * @memberof DynamicEmergencyEndpointsApigetDynamicEmergencyEndpoint
     */
    id: string
}

export interface DynamicEmergencyEndpointsApiListDyanmicEmergencyEndpointsRequest {
    /**
     * Filter by status.
     * @type &#39;pending&#39; | &#39;activated&#39; | &#39;rejected&#39;
     * @memberof DynamicEmergencyEndpointsApilistDyanmicEmergencyEndpoints
     */
    filterStatus?: 'pending' | 'activated' | 'rejected'
    /**
     * Filter by country code.
     * @type string
     * @memberof DynamicEmergencyEndpointsApilistDyanmicEmergencyEndpoints
     */
    filterCountryCode?: string
    /**
     * The page number to load
     * @type number
     * @memberof DynamicEmergencyEndpointsApilistDyanmicEmergencyEndpoints
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof DynamicEmergencyEndpointsApilistDyanmicEmergencyEndpoints
     */
    pageSize?: number
}

export class ObjectDynamicEmergencyEndpointsApi {
    private api: ObservableDynamicEmergencyEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: DynamicEmergencyEndpointsApiRequestFactory, responseProcessor?: DynamicEmergencyEndpointsApiResponseProcessor) {
        this.api = new ObservableDynamicEmergencyEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a dynamic emergency endpoints.
     * Create a dynamic emergency endpoint.
     * @param param the request object
     */
    public createDyanmicEmergencyEndpoint(param: DynamicEmergencyEndpointsApiCreateDyanmicEmergencyEndpointRequest, options?: Configuration): Promise<CreateDyanmicEmergencyEndpoint201Response> {
        return this.api.createDyanmicEmergencyEndpoint(param.dynamicEmergencyEndpoint,  options).toPromise();
    }

    /**
     * Deletes the dynamic emergency endpoint based on the ID provided
     * Delete a dynamic emergency endpoint
     * @param param the request object
     */
    public deleteDynamicEmergencyEndpoint(param: DynamicEmergencyEndpointsApiDeleteDynamicEmergencyEndpointRequest, options?: Configuration): Promise<CreateDyanmicEmergencyEndpoint201Response> {
        return this.api.deleteDynamicEmergencyEndpoint(param.id,  options).toPromise();
    }

    /**
     * Returns the dynamic emergency endpoint based on the ID provided
     * Get a dynamic emergency endpoint
     * @param param the request object
     */
    public getDynamicEmergencyEndpoint(param: DynamicEmergencyEndpointsApiGetDynamicEmergencyEndpointRequest, options?: Configuration): Promise<CreateDyanmicEmergencyEndpoint201Response> {
        return this.api.getDynamicEmergencyEndpoint(param.id,  options).toPromise();
    }

    /**
     * Returns the dynamic emergency endpoints according to filters
     * List dynamic emergency endpoints
     * @param param the request object
     */
    public listDyanmicEmergencyEndpoints(param: DynamicEmergencyEndpointsApiListDyanmicEmergencyEndpointsRequest = {}, options?: Configuration): Promise<ListDyanmicEmergencyEndpoints200Response> {
        return this.api.listDyanmicEmergencyEndpoints(param.filterStatus, param.filterCountryCode, param.pageNumber, param.pageSize,  options).toPromise();
    }

}

import { ObservableEnumApi } from "./ObservableAPI.ts";
import { EnumApiRequestFactory, EnumApiResponseProcessor} from "../apis/EnumApi.ts";

export interface EnumApiGetEnumEnumEndpointGetRequest {
    /**
     * 
     * @type string
     * @memberof EnumApigetEnumEnumEndpointGet
     */
    endpoint: string
}

export class ObjectEnumApi {
    private api: ObservableEnumApi

    public constructor(configuration: Configuration, requestFactory?: EnumApiRequestFactory, responseProcessor?: EnumApiResponseProcessor) {
        this.api = new ObservableEnumApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Enum
     * @param param the request object
     */
    public getEnumEnumEndpointGet(param: EnumApiGetEnumEnumEndpointGetRequest, options?: Configuration): Promise<any> {
        return this.api.getEnumEnumEndpointGet(param.endpoint,  options).toPromise();
    }

}

import { ObservableErrorApi } from "./ObservableAPI.ts";
import { ErrorApiRequestFactory, ErrorApiResponseProcessor} from "../apis/ErrorApi.ts";

export interface ErrorApiListErrorCodesErrorGetRequest {
}

export class ObjectErrorApi {
    private api: ObservableErrorApi

    public constructor(configuration: Configuration, requestFactory?: ErrorApiRequestFactory, responseProcessor?: ErrorApiResponseProcessor) {
        this.api = new ObservableErrorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all error codes
     * List Error Codes
     * @param param the request object
     */
    public listErrorCodesErrorGet(param: ErrorApiListErrorCodesErrorGetRequest = {}, options?: Configuration): Promise<string> {
        return this.api.listErrorCodesErrorGet( options).toPromise();
    }

}

import { ObservableFQDNConnectionsApi } from "./ObservableAPI.ts";
import { FQDNConnectionsApiRequestFactory, FQDNConnectionsApiResponseProcessor} from "../apis/FQDNConnectionsApi.ts";

export interface FQDNConnectionsApiCreateFqdnConnectionRequest {
    /**
     * Parameters that can be defined during FQDN connection creation
     * @type CreateFqdnConnectionRequest
     * @memberof FQDNConnectionsApicreateFqdnConnection
     */
    createFqdnConnectionRequest: CreateFqdnConnectionRequest
}

export interface FQDNConnectionsApiDeleteFqdnConnectionRequest {
    /**
     * FQDN Connection ID
     * @type string
     * @memberof FQDNConnectionsApideleteFqdnConnection
     */
    id: string
}

export interface FQDNConnectionsApiListFqdnConnectionsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof FQDNConnectionsApilistFqdnConnections
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof FQDNConnectionsApilistFqdnConnections
     */
    pageSize?: number
    /**
     * If present, connections with &lt;code&gt;connection_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @type string
     * @memberof FQDNConnectionsApilistFqdnConnections
     */
    filterConnectionNameContains?: string
    /**
     * Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     * @type &#39;created_at&#39; | &#39;connection_name&#39; | &#39;active&#39;
     * @memberof FQDNConnectionsApilistFqdnConnections
     */
    sort?: 'created_at' | 'connection_name' | 'active'
}

export interface FQDNConnectionsApiRetrieveFqdnConnectionRequest {
    /**
     * FQDN Connection ID
     * @type string
     * @memberof FQDNConnectionsApiretrieveFqdnConnection
     */
    id: string
}

export interface FQDNConnectionsApiUpdateFqdnConnectionRequest {
    /**
     * FQDN Connection ID
     * @type string
     * @memberof FQDNConnectionsApiupdateFqdnConnection
     */
    id: string
    /**
     * Parameters that can be updated in a FQDN connection
     * @type UpdateFqdnConnectionRequest
     * @memberof FQDNConnectionsApiupdateFqdnConnection
     */
    updateFqdnConnectionRequest: UpdateFqdnConnectionRequest
}

export class ObjectFQDNConnectionsApi {
    private api: ObservableFQDNConnectionsApi

    public constructor(configuration: Configuration, requestFactory?: FQDNConnectionsApiRequestFactory, responseProcessor?: FQDNConnectionsApiResponseProcessor) {
        this.api = new ObservableFQDNConnectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a FQDN connection.
     * Create an FQDN connection
     * @param param the request object
     */
    public createFqdnConnection(param: FQDNConnectionsApiCreateFqdnConnectionRequest, options?: Configuration): Promise<FQDNConnectionResponse> {
        return this.api.createFqdnConnection(param.createFqdnConnectionRequest,  options).toPromise();
    }

    /**
     * Deletes an FQDN connection.
     * Delete an FQDN connection
     * @param param the request object
     */
    public deleteFqdnConnection(param: FQDNConnectionsApiDeleteFqdnConnectionRequest, options?: Configuration): Promise<FQDNConnectionResponse> {
        return this.api.deleteFqdnConnection(param.id,  options).toPromise();
    }

    /**
     * Returns a list of your FQDN connections.
     * List FQDN connections
     * @param param the request object
     */
    public listFqdnConnections(param: FQDNConnectionsApiListFqdnConnectionsRequest = {}, options?: Configuration): Promise<ListFQDNConnectionsResponse> {
        return this.api.listFqdnConnections(param.pageNumber, param.pageSize, param.filterConnectionNameContains, param.sort,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing FQDN connection.
     * Retrieve an FQDN connection
     * @param param the request object
     */
    public retrieveFqdnConnection(param: FQDNConnectionsApiRetrieveFqdnConnectionRequest, options?: Configuration): Promise<FQDNConnectionResponse> {
        return this.api.retrieveFqdnConnection(param.id,  options).toPromise();
    }

    /**
     * Updates settings of an existing FQDN connection.
     * Update an FQDN connection
     * @param param the request object
     */
    public updateFqdnConnection(param: FQDNConnectionsApiUpdateFqdnConnectionRequest, options?: Configuration): Promise<FQDNConnectionResponse> {
        return this.api.updateFqdnConnection(param.id, param.updateFqdnConnectionRequest,  options).toPromise();
    }

}

import { ObservableGlobalIPsApi } from "./ObservableAPI.ts";
import { GlobalIPsApiRequestFactory, GlobalIPsApiResponseProcessor} from "../apis/GlobalIPsApi.ts";

export interface GlobalIPsApiGlobalIpAllowedPortListRequest {
}

export interface GlobalIPsApiGlobalIpAssignmentCreateRequest {
    /**
     * 
     * @type GlobalIpAssignment
     * @memberof GlobalIPsApiglobalIpAssignmentCreate
     */
    globalIpAssignment: GlobalIpAssignment
}

export interface GlobalIPsApiGlobalIpAssignmentDeleteRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof GlobalIPsApiglobalIpAssignmentDelete
     */
    id: string
}

export interface GlobalIPsApiGlobalIpAssignmentGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof GlobalIPsApiglobalIpAssignmentGet
     */
    id: string
}

export interface GlobalIPsApiGlobalIpAssignmentHealthRequest {
    /**
     * Filter by Global IP ID(s) separated by commas
     * @type string
     * @memberof GlobalIPsApiglobalIpAssignmentHealth
     */
    filterGlobalIpIdIn?: string
    /**
     * Filter by Global IP Assignment ID(s) separated by commas
     * @type string
     * @memberof GlobalIPsApiglobalIpAssignmentHealth
     */
    filterGlobalIpAssignmentIdIn?: string
    /**
     * Filter by timestamp greater than
     * @type Date
     * @memberof GlobalIPsApiglobalIpAssignmentHealth
     */
    filterTimestampGt?: Date
    /**
     * Filter by timestamp less than
     * @type Date
     * @memberof GlobalIPsApiglobalIpAssignmentHealth
     */
    filterTimestampLt?: Date
}

export interface GlobalIPsApiGlobalIpAssignmentListRequest {
    /**
     * The page number to load
     * @type number
     * @memberof GlobalIPsApiglobalIpAssignmentList
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof GlobalIPsApiglobalIpAssignmentList
     */
    pageSize?: number
}

export interface GlobalIPsApiGlobalIpAssignmentUpdateRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof GlobalIPsApiglobalIpAssignmentUpdate
     */
    id: string
    /**
     * 
     * @type GlobalIpAssignmentUpdate
     * @memberof GlobalIPsApiglobalIpAssignmentUpdate
     */
    globalIpAssignmentUpdate: GlobalIpAssignmentUpdate
}

export interface GlobalIPsApiGlobalIpAssignmentUsageRequest {
    /**
     * Filter by Global IP Assignment ID(s) separated by commas
     * @type string
     * @memberof GlobalIPsApiglobalIpAssignmentUsage
     */
    filterGlobalIpAssignmentIdIn?: string
    /**
     * Filter by Global IP ID(s), separated by commas
     * @type string
     * @memberof GlobalIPsApiglobalIpAssignmentUsage
     */
    filterGlobalIpIdIn?: string
    /**
     * Filter by timestamp greater than
     * @type Date
     * @memberof GlobalIPsApiglobalIpAssignmentUsage
     */
    filterTimestampGt?: Date
    /**
     * Filter by timestamp less than
     * @type Date
     * @memberof GlobalIPsApiglobalIpAssignmentUsage
     */
    filterTimestampLt?: Date
}

export interface GlobalIPsApiGlobalIpCreateRequest {
    /**
     * 
     * @type GlobalIP
     * @memberof GlobalIPsApiglobalIpCreate
     */
    globalIP: GlobalIP
}

export interface GlobalIPsApiGlobalIpDeleteRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof GlobalIPsApiglobalIpDelete
     */
    id: string
}

export interface GlobalIPsApiGlobalIpGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof GlobalIPsApiglobalIpGet
     */
    id: string
}

export interface GlobalIPsApiGlobalIpLatencyRequest {
    /**
     * Filter by Global IP ID(s) separated by commas
     * @type string
     * @memberof GlobalIPsApiglobalIpLatency
     */
    filterGlobalIpIdIn?: string
    /**
     * Filter by timestamp greater than
     * @type Date
     * @memberof GlobalIPsApiglobalIpLatency
     */
    filterTimestampGt?: Date
    /**
     * Filter by timestamp less than
     * @type Date
     * @memberof GlobalIPsApiglobalIpLatency
     */
    filterTimestampLt?: Date
}

export interface GlobalIPsApiGlobalIpListRequest {
    /**
     * The page number to load
     * @type number
     * @memberof GlobalIPsApiglobalIpList
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof GlobalIPsApiglobalIpList
     */
    pageSize?: number
}

export interface GlobalIPsApiGlobalIpProtocolListRequest {
}

export interface GlobalIPsApiGlobalIpUsageRequest {
    /**
     * Filter by Global IP ID(s) separated by commas
     * @type string
     * @memberof GlobalIPsApiglobalIpUsage
     */
    filterGlobalIpIdIn?: string
    /**
     * Filter by timestamp greater than
     * @type Date
     * @memberof GlobalIPsApiglobalIpUsage
     */
    filterTimestampGt?: Date
    /**
     * Filter by timestamp less than
     * @type Date
     * @memberof GlobalIPsApiglobalIpUsage
     */
    filterTimestampLt?: Date
}

export class ObjectGlobalIPsApi {
    private api: ObservableGlobalIPsApi

    public constructor(configuration: Configuration, requestFactory?: GlobalIPsApiRequestFactory, responseProcessor?: GlobalIPsApiResponseProcessor) {
        this.api = new ObservableGlobalIPsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all Global IP Allowed Ports
     * List all Global IP Allowed Ports
     * @param param the request object
     */
    public globalIpAllowedPortList(param: GlobalIPsApiGlobalIpAllowedPortListRequest = {}, options?: Configuration): Promise<GlobalIpAllowedPortList200Response> {
        return this.api.globalIpAllowedPortList( options).toPromise();
    }

    /**
     * Create a Global IP assignment.
     * Create a Global IP assignment
     * @param param the request object
     */
    public globalIpAssignmentCreate(param: GlobalIPsApiGlobalIpAssignmentCreateRequest, options?: Configuration): Promise<GlobalIpAssignmentCreate202Response> {
        return this.api.globalIpAssignmentCreate(param.globalIpAssignment,  options).toPromise();
    }

    /**
     * Delete a Global IP assignment.
     * Delete a Global IP assignment
     * @param param the request object
     */
    public globalIpAssignmentDelete(param: GlobalIPsApiGlobalIpAssignmentDeleteRequest, options?: Configuration): Promise<GlobalIpAssignmentCreate202Response> {
        return this.api.globalIpAssignmentDelete(param.id,  options).toPromise();
    }

    /**
     * Retrieve a Global IP assignment.
     * Retrieve a Global IP
     * @param param the request object
     */
    public globalIpAssignmentGet(param: GlobalIPsApiGlobalIpAssignmentGetRequest, options?: Configuration): Promise<GlobalIpAssignmentCreate202Response> {
        return this.api.globalIpAssignmentGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public globalIpAssignmentHealth(param: GlobalIPsApiGlobalIpAssignmentHealthRequest = {}, options?: Configuration): Promise<GlobalIpAssignmentHealth200Response> {
        return this.api.globalIpAssignmentHealth(param.filterGlobalIpIdIn, param.filterGlobalIpAssignmentIdIn, param.filterTimestampGt, param.filterTimestampLt,  options).toPromise();
    }

    /**
     * List all Global IP assignments.
     * List all Global IP assignments
     * @param param the request object
     */
    public globalIpAssignmentList(param: GlobalIPsApiGlobalIpAssignmentListRequest = {}, options?: Configuration): Promise<GlobalIpAssignmentList200Response> {
        return this.api.globalIpAssignmentList(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Update a Global IP assignment.
     * Update a Global IP assignment
     * @param param the request object
     */
    public globalIpAssignmentUpdate(param: GlobalIPsApiGlobalIpAssignmentUpdateRequest, options?: Configuration): Promise<GlobalIpAssignmentCreate202Response> {
        return this.api.globalIpAssignmentUpdate(param.id, param.globalIpAssignmentUpdate,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public globalIpAssignmentUsage(param: GlobalIPsApiGlobalIpAssignmentUsageRequest = {}, options?: Configuration): Promise<GlobalIpAssignmentUsage200Response> {
        return this.api.globalIpAssignmentUsage(param.filterGlobalIpAssignmentIdIn, param.filterGlobalIpIdIn, param.filterTimestampGt, param.filterTimestampLt,  options).toPromise();
    }

    /**
     * Create a Global IP.
     * Create a Global IP
     * @param param the request object
     */
    public globalIpCreate(param: GlobalIPsApiGlobalIpCreateRequest, options?: Configuration): Promise<GlobalIpCreate202Response> {
        return this.api.globalIpCreate(param.globalIP,  options).toPromise();
    }

    /**
     * Delete a Global IP.
     * Delete a Global IP
     * @param param the request object
     */
    public globalIpDelete(param: GlobalIPsApiGlobalIpDeleteRequest, options?: Configuration): Promise<GlobalIpCreate202Response> {
        return this.api.globalIpDelete(param.id,  options).toPromise();
    }

    /**
     * Retrieve a Global IP.
     * Retrieve a Global IP
     * @param param the request object
     */
    public globalIpGet(param: GlobalIPsApiGlobalIpGetRequest, options?: Configuration): Promise<GlobalIpCreate202Response> {
        return this.api.globalIpGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public globalIpLatency(param: GlobalIPsApiGlobalIpLatencyRequest = {}, options?: Configuration): Promise<GlobalIpLatency200Response> {
        return this.api.globalIpLatency(param.filterGlobalIpIdIn, param.filterTimestampGt, param.filterTimestampLt,  options).toPromise();
    }

    /**
     * List all Global IPs.
     * List all Global IPs
     * @param param the request object
     */
    public globalIpList(param: GlobalIPsApiGlobalIpListRequest = {}, options?: Configuration): Promise<GlobalIpList200Response> {
        return this.api.globalIpList(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * List all Global IP Protocols
     * List all Global IP Protocols
     * @param param the request object
     */
    public globalIpProtocolList(param: GlobalIPsApiGlobalIpProtocolListRequest = {}, options?: Configuration): Promise<GlobalIpProtocolList200Response> {
        return this.api.globalIpProtocolList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public globalIpUsage(param: GlobalIPsApiGlobalIpUsageRequest = {}, options?: Configuration): Promise<GlobalIpUsage200Response> {
        return this.api.globalIpUsage(param.filterGlobalIpIdIn, param.filterTimestampGt, param.filterTimestampLt,  options).toPromise();
    }

}

import { ObservableIPAddressesApi } from "./ObservableAPI.ts";
import { IPAddressesApiRequestFactory, IPAddressesApiResponseProcessor} from "../apis/IPAddressesApi.ts";

export interface IPAddressesApiAccessIPAddressCreateRequest {
    /**
     * 
     * @type AccessIPAddressPOST
     * @memberof IPAddressesApiaccessIPAddressCreate
     */
    accessIPAddressPOST: AccessIPAddressPOST
}

export interface IPAddressesApiAccessIPAddressDeleteRequest {
    /**
     * 
     * @type string
     * @memberof IPAddressesApiaccessIPAddressDelete
     */
    accessIpAddressId: string
}

export interface IPAddressesApiAccessIPAddressGetRequest {
    /**
     * 
     * @type string
     * @memberof IPAddressesApiaccessIPAddressGet
     */
    accessIpAddressId: string
}

export interface IPAddressesApiAccessIPAddressListRequest {
    /**
     * 
     * @type string
     * @memberof IPAddressesApiaccessIPAddressList
     */
    filterIpSource?: string
    /**
     * 
     * @type string
     * @memberof IPAddressesApiaccessIPAddressList
     */
    filterIpAddress?: string
    /**
     * 
     * @type CloudflareSyncStatus
     * @memberof IPAddressesApiaccessIPAddressList
     */
    filterStatus?: CloudflareSyncStatus
    /**
     * 
     * @type Date
     * @memberof IPAddressesApiaccessIPAddressList
     */
    filterCreatedAtGt?: Date
    /**
     * 
     * @type Date
     * @memberof IPAddressesApiaccessIPAddressList
     */
    filterCreatedAtLt?: Date
    /**
     * 
     * @type number
     * @memberof IPAddressesApiaccessIPAddressList
     */
    pageNumber?: number
    /**
     * 
     * @type number
     * @memberof IPAddressesApiaccessIPAddressList
     */
    pageSize?: number
}

export class ObjectIPAddressesApi {
    private api: ObservableIPAddressesApi

    public constructor(configuration: Configuration, requestFactory?: IPAddressesApiRequestFactory, responseProcessor?: IPAddressesApiResponseProcessor) {
        this.api = new ObservableIPAddressesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create new Access IP Address
     * @param param the request object
     */
    public accessIPAddressCreate(param: IPAddressesApiAccessIPAddressCreateRequest, options?: Configuration): Promise<AccessIPAddressResponseSchema> {
        return this.api.accessIPAddressCreate(param.accessIPAddressPOST,  options).toPromise();
    }

    /**
     * Delete access IP address
     * @param param the request object
     */
    public accessIPAddressDelete(param: IPAddressesApiAccessIPAddressDeleteRequest, options?: Configuration): Promise<AccessIPAddressResponseSchema> {
        return this.api.accessIPAddressDelete(param.accessIpAddressId,  options).toPromise();
    }

    /**
     * Retrieve an access IP address
     * @param param the request object
     */
    public accessIPAddressGet(param: IPAddressesApiAccessIPAddressGetRequest, options?: Configuration): Promise<AccessIPAddressResponseSchema> {
        return this.api.accessIPAddressGet(param.accessIpAddressId,  options).toPromise();
    }

    /**
     * List all Access IP Addresses
     * @param param the request object
     */
    public accessIPAddressList(param: IPAddressesApiAccessIPAddressListRequest = {}, options?: Configuration): Promise<AccessIPAddressListResponseSchema> {
        return this.api.accessIPAddressList(param.filterIpSource, param.filterIpAddress, param.filterStatus, param.filterCreatedAtGt, param.filterCreatedAtLt, param.pageNumber, param.pageSize,  options).toPromise();
    }

}

import { ObservableIPConnectionsApi } from "./ObservableAPI.ts";
import { IPConnectionsApiRequestFactory, IPConnectionsApiResponseProcessor} from "../apis/IPConnectionsApi.ts";

export interface IPConnectionsApiCreateIpConnectionRequest {
    /**
     * Parameters that can be defined during IP connection creation
     * @type CreateIpConnectionRequest
     * @memberof IPConnectionsApicreateIpConnection
     */
    createIpConnectionRequest: CreateIpConnectionRequest
}

export interface IPConnectionsApiDeleteIpConnectionRequest {
    /**
     * Identifies the type of resource.
     * @type string
     * @memberof IPConnectionsApideleteIpConnection
     */
    id: string
}

export interface IPConnectionsApiListIpConnectionsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof IPConnectionsApilistIpConnections
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof IPConnectionsApilistIpConnections
     */
    pageSize?: number
    /**
     * If present, connections with &lt;code&gt;connection_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @type string
     * @memberof IPConnectionsApilistIpConnections
     */
    filterConnectionNameContains?: string
    /**
     * Identifies the associated outbound voice profile.
     * @type string
     * @memberof IPConnectionsApilistIpConnections
     */
    filterOutboundOutboundVoiceProfileId?: string
    /**
     * Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     * @type &#39;created_at&#39; | &#39;connection_name&#39; | &#39;active&#39;
     * @memberof IPConnectionsApilistIpConnections
     */
    sort?: 'created_at' | 'connection_name' | 'active'
}

export interface IPConnectionsApiRetrieveIpConnectionRequest {
    /**
     * IP Connection ID
     * @type string
     * @memberof IPConnectionsApiretrieveIpConnection
     */
    id: string
}

export interface IPConnectionsApiUpdateIpConnectionRequest {
    /**
     * Identifies the type of resource.
     * @type string
     * @memberof IPConnectionsApiupdateIpConnection
     */
    id: string
    /**
     * Parameters that can be updated in a IP connection
     * @type UpdateIpConnectionRequest
     * @memberof IPConnectionsApiupdateIpConnection
     */
    updateIpConnectionRequest: UpdateIpConnectionRequest
}

export class ObjectIPConnectionsApi {
    private api: ObservableIPConnectionsApi

    public constructor(configuration: Configuration, requestFactory?: IPConnectionsApiRequestFactory, responseProcessor?: IPConnectionsApiResponseProcessor) {
        this.api = new ObservableIPConnectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an IP connection.
     * Create an Ip connection
     * @param param the request object
     */
    public createIpConnection(param: IPConnectionsApiCreateIpConnectionRequest, options?: Configuration): Promise<IpConnectionResponse> {
        return this.api.createIpConnection(param.createIpConnectionRequest,  options).toPromise();
    }

    /**
     * Deletes an existing IP connection.
     * Delete an Ip connection
     * @param param the request object
     */
    public deleteIpConnection(param: IPConnectionsApiDeleteIpConnectionRequest, options?: Configuration): Promise<IpConnectionResponse> {
        return this.api.deleteIpConnection(param.id,  options).toPromise();
    }

    /**
     * Returns a list of your IP connections.
     * List Ip connections
     * @param param the request object
     */
    public listIpConnections(param: IPConnectionsApiListIpConnectionsRequest = {}, options?: Configuration): Promise<ListIpConnectionsResponse> {
        return this.api.listIpConnections(param.pageNumber, param.pageSize, param.filterConnectionNameContains, param.filterOutboundOutboundVoiceProfileId, param.sort,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing ip connection.
     * Retrieve an Ip connection
     * @param param the request object
     */
    public retrieveIpConnection(param: IPConnectionsApiRetrieveIpConnectionRequest, options?: Configuration): Promise<IpConnectionResponse> {
        return this.api.retrieveIpConnection(param.id,  options).toPromise();
    }

    /**
     * Updates settings of an existing IP connection.
     * Update an Ip connection
     * @param param the request object
     */
    public updateIpConnection(param: IPConnectionsApiUpdateIpConnectionRequest, options?: Configuration): Promise<IpConnectionResponse> {
        return this.api.updateIpConnection(param.id, param.updateIpConnectionRequest,  options).toPromise();
    }

}

import { ObservableIPRangesApi } from "./ObservableAPI.ts";
import { IPRangesApiRequestFactory, IPRangesApiResponseProcessor} from "../apis/IPRangesApi.ts";

export interface IPRangesApiAccessIPRangeCreateRequest {
    /**
     * 
     * @type AccessIPRangePOST
     * @memberof IPRangesApiaccessIPRangeCreate
     */
    accessIPRangePOST: AccessIPRangePOST
}

export interface IPRangesApiAccessIPRangeListRequest {
    /**
     * 
     * @type string
     * @memberof IPRangesApiaccessIPRangeList
     */
    filterCidrBlock?: string
    /**
     * 
     * @type string
     * @memberof IPRangesApiaccessIPRangeList
     */
    filterCidrBlockStartswith?: string
    /**
     * 
     * @type string
     * @memberof IPRangesApiaccessIPRangeList
     */
    filterCidrBlockEndswith?: string
    /**
     * 
     * @type string
     * @memberof IPRangesApiaccessIPRangeList
     */
    filterCidrBlockContains?: string
    /**
     * 
     * @type CloudflareSyncStatus
     * @memberof IPRangesApiaccessIPRangeList
     */
    filterStatus?: CloudflareSyncStatus
    /**
     * 
     * @type Date
     * @memberof IPRangesApiaccessIPRangeList
     */
    filterCreatedAtGt?: Date
    /**
     * 
     * @type Date
     * @memberof IPRangesApiaccessIPRangeList
     */
    filterCreatedAtLt?: Date
    /**
     * 
     * @type number
     * @memberof IPRangesApiaccessIPRangeList
     */
    pageNumber?: number
    /**
     * 
     * @type number
     * @memberof IPRangesApiaccessIPRangeList
     */
    pageSize?: number
}

export interface IPRangesApiAccessIpRangesAccessIpRangeIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof IPRangesApiaccessIpRangesAccessIpRangeIdDelete
     */
    accessIpRangeId: string
}

export class ObjectIPRangesApi {
    private api: ObservableIPRangesApi

    public constructor(configuration: Configuration, requestFactory?: IPRangesApiRequestFactory, responseProcessor?: IPRangesApiResponseProcessor) {
        this.api = new ObservableIPRangesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create new Access IP Range
     * @param param the request object
     */
    public accessIPRangeCreate(param: IPRangesApiAccessIPRangeCreateRequest, options?: Configuration): Promise<AccessIPRangeResponseSchema> {
        return this.api.accessIPRangeCreate(param.accessIPRangePOST,  options).toPromise();
    }

    /**
     * List all Access IP Ranges
     * @param param the request object
     */
    public accessIPRangeList(param: IPRangesApiAccessIPRangeListRequest = {}, options?: Configuration): Promise<AccessIPRangeListResponseSchema> {
        return this.api.accessIPRangeList(param.filterCidrBlock, param.filterCidrBlockStartswith, param.filterCidrBlockEndswith, param.filterCidrBlockContains, param.filterStatus, param.filterCreatedAtGt, param.filterCreatedAtLt, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Delete access IP ranges
     * @param param the request object
     */
    public accessIpRangesAccessIpRangeIdDelete(param: IPRangesApiAccessIpRangesAccessIpRangeIdDeleteRequest, options?: Configuration): Promise<AccessIPRangeResponseSchema> {
        return this.api.accessIpRangesAccessIpRangeIdDelete(param.accessIpRangeId,  options).toPromise();
    }

}

import { ObservableIPsApi } from "./ObservableAPI.ts";
import { IPsApiRequestFactory, IPsApiResponseProcessor} from "../apis/IPsApi.ts";

export interface IPsApiCreateIpRequest {
    /**
     * 
     * @type CreateIpRequest
     * @memberof IPsApicreateIp
     */
    createIpRequest?: CreateIpRequest
}

export interface IPsApiDeleteIpRequest {
    /**
     * Identifies the type of resource.
     * @type string
     * @memberof IPsApideleteIp
     */
    id: string
}

export interface IPsApiListIpsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof IPsApilistIps
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof IPsApilistIps
     */
    pageSize?: number
    /**
     * ID of the IP Connection to which this IP should be attached.
     * @type string
     * @memberof IPsApilistIps
     */
    filterConnectionId?: string
    /**
     * IP adddress represented by this resource.
     * @type string
     * @memberof IPsApilistIps
     */
    filterIpAddress?: string
    /**
     * Port to use when connecting to this IP.
     * @type number
     * @memberof IPsApilistIps
     */
    filterPort?: number
}

export interface IPsApiRetrieveIpRequest {
    /**
     * Identifies the type of resource.
     * @type string
     * @memberof IPsApiretrieveIp
     */
    id: string
}

export interface IPsApiUpdateIpRequest {
    /**
     * Identifies the type of resource.
     * @type string
     * @memberof IPsApiupdateIp
     */
    id: string
    /**
     * 
     * @type UpdateIpRequest
     * @memberof IPsApiupdateIp
     */
    updateIpRequest?: UpdateIpRequest
}

export class ObjectIPsApi {
    private api: ObservableIPsApi

    public constructor(configuration: Configuration, requestFactory?: IPsApiRequestFactory, responseProcessor?: IPsApiResponseProcessor) {
        this.api = new ObservableIPsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new IP object.
     * Create an Ip
     * @param param the request object
     */
    public createIp(param: IPsApiCreateIpRequest = {}, options?: Configuration): Promise<IpResponse> {
        return this.api.createIp(param.createIpRequest,  options).toPromise();
    }

    /**
     * Delete an IP.
     * Delete an Ip
     * @param param the request object
     */
    public deleteIp(param: IPsApiDeleteIpRequest, options?: Configuration): Promise<IpResponse> {
        return this.api.deleteIp(param.id,  options).toPromise();
    }

    /**
     * Get all IPs belonging to the user that match the given filters.
     * List Ips
     * @param param the request object
     */
    public listIps(param: IPsApiListIpsRequest = {}, options?: Configuration): Promise<ListIpsResponse> {
        return this.api.listIps(param.pageNumber, param.pageSize, param.filterConnectionId, param.filterIpAddress, param.filterPort,  options).toPromise();
    }

    /**
     * Return the details regarding a specific IP.
     * Retrieve an Ip
     * @param param the request object
     */
    public retrieveIp(param: IPsApiRetrieveIpRequest, options?: Configuration): Promise<IpResponse> {
        return this.api.retrieveIp(param.id,  options).toPromise();
    }

    /**
     * Update the details of a specific IP.
     * Update an Ip
     * @param param the request object
     */
    public updateIp(param: IPsApiUpdateIpRequest, options?: Configuration): Promise<IpResponse> {
        return this.api.updateIp(param.id, param.updateIpRequest,  options).toPromise();
    }

}

import { ObservableInboundChannelsApi } from "./ObservableAPI.ts";
import { InboundChannelsApiRequestFactory, InboundChannelsApiResponseProcessor} from "../apis/InboundChannelsApi.ts";

export interface InboundChannelsApiListOutboundChannelsRequest {
}

export interface InboundChannelsApiUpdateOutboundChannelsRequest {
    /**
     * Inbound channels update
     * @type UpdateOutboundChannelsRequest
     * @memberof InboundChannelsApiupdateOutboundChannels
     */
    updateOutboundChannelsRequest: UpdateOutboundChannelsRequest
}

export class ObjectInboundChannelsApi {
    private api: ObservableInboundChannelsApi

    public constructor(configuration: Configuration, requestFactory?: InboundChannelsApiRequestFactory, responseProcessor?: InboundChannelsApiResponseProcessor) {
        this.api = new ObservableInboundChannelsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the inbound channels for your account. Inbound channels allows you to use Channel Billing for calls to your Telnyx phone numbers. Please check the Telnyx Support Articles section for full information and examples of how to utilize Channel Billing.
     * Retrieve your inbound channels
     * @param param the request object
     */
    public listOutboundChannels(param: InboundChannelsApiListOutboundChannelsRequest = {}, options?: Configuration): Promise<ListOutboundChannels200Response> {
        return this.api.listOutboundChannels( options).toPromise();
    }

    /**
     * Update the inbound channels for the account
     * Update inbound channels
     * @param param the request object
     */
    public updateOutboundChannels(param: InboundChannelsApiUpdateOutboundChannelsRequest, options?: Configuration): Promise<UpdateOutboundChannels200Response> {
        return this.api.updateOutboundChannels(param.updateOutboundChannelsRequest,  options).toPromise();
    }

}

import { ObservableInventoryLevelApi } from "./ObservableAPI.ts";
import { InventoryLevelApiRequestFactory, InventoryLevelApiResponseProcessor} from "../apis/InventoryLevelApi.ts";

export interface InventoryLevelApiCreateInventoryCoverageRequestRequest {
    /**
     * 
     * @type &#39;locality&#39; | &#39;npa&#39; | &#39;national_destination_code&#39;
     * @memberof InventoryLevelApicreateInventoryCoverageRequest
     */
    filterGroupBy: 'locality' | 'npa' | 'national_destination_code'
    /**
     * 
     * @type number
     * @memberof InventoryLevelApicreateInventoryCoverageRequest
     */
    filterNpa?: number
    /**
     * 
     * @type number
     * @memberof InventoryLevelApicreateInventoryCoverageRequest
     */
    filterNxx?: number
    /**
     * 
     * @type string
     * @memberof InventoryLevelApicreateInventoryCoverageRequest
     */
    filterAdministrativeArea?: string
    /**
     * 
     * @type &#39;local&#39; | &#39;toll_free&#39; | &#39;national&#39; | &#39;mobile&#39; | &#39;landline&#39; | &#39;shared_cost&#39;
     * @memberof InventoryLevelApicreateInventoryCoverageRequest
     */
    filterPhoneNumberType?: 'local' | 'toll_free' | 'national' | 'mobile' | 'landline' | 'shared_cost'
    /**
     * 
     * @type &#39;US&#39; | &#39;CA&#39; | &#39;GB&#39;
     * @memberof InventoryLevelApicreateInventoryCoverageRequest
     */
    filterCountryCode?: 'US' | 'CA' | 'GB'
    /**
     * 
     * @type boolean
     * @memberof InventoryLevelApicreateInventoryCoverageRequest
     */
    filterCount?: boolean
    /**
     * Filter if the phone number should be used for voice, fax, mms, sms, emergency. Returns features in the response when used
     * @type Array&lt;&#39;sms&#39; | &#39;mms&#39; | &#39;voice&#39; | &#39;fax&#39; | &#39;emergency&#39;&gt;
     * @memberof InventoryLevelApicreateInventoryCoverageRequest
     */
    filterFeatures?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>
}

export class ObjectInventoryLevelApi {
    private api: ObservableInventoryLevelApi

    public constructor(configuration: Configuration, requestFactory?: InventoryLevelApiRequestFactory, responseProcessor?: InventoryLevelApiResponseProcessor) {
        this.api = new ObservableInventoryLevelApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an inventory coverage request. If locality, npa or national_destination_code is used in groupBy, and no region or locality filters are used, the whole paginated set is returned.
     * Create an inventory coverage request
     * @param param the request object
     */
    public createInventoryCoverageRequest(param: InventoryLevelApiCreateInventoryCoverageRequestRequest, options?: Configuration): Promise<CreateInventoryCoverageRequest200Response> {
        return this.api.createInventoryCoverageRequest(param.filterGroupBy, param.filterNpa, param.filterNxx, param.filterAdministrativeArea, param.filterPhoneNumberType, param.filterCountryCode, param.filterCount, param.filterFeatures,  options).toPromise();
    }

}

import { ObservableMDRDetailReportsApi } from "./ObservableAPI.ts";
import { MDRDetailReportsApiRequestFactory, MDRDetailReportsApiResponseProcessor} from "../apis/MDRDetailReportsApi.ts";

export interface MDRDetailReportsApiDeleteMdrRequestRequest {
    /**
     * 
     * @type string
     * @memberof MDRDetailReportsApideleteMdrRequest
     */
    id: string
}

export interface MDRDetailReportsApiGetCdrRequestsRequest {
    /**
     * Page number
     * @type number
     * @memberof MDRDetailReportsApigetCdrRequests
     */
    pageNumber?: number
    /**
     * Size of the page
     * @type number
     * @memberof MDRDetailReportsApigetCdrRequests
     */
    pageSize?: number
}

export interface MDRDetailReportsApiGetMdrRequestRequest {
    /**
     * 
     * @type string
     * @memberof MDRDetailReportsApigetMdrRequest
     */
    id: string
}

export interface MDRDetailReportsApiGetPaginatedMdrsRequest {
    /**
     * Pagination start date
     * @type string
     * @memberof MDRDetailReportsApigetPaginatedMdrs
     */
    startDate?: string
    /**
     * Pagination end date
     * @type string
     * @memberof MDRDetailReportsApigetPaginatedMdrs
     */
    endDate?: string
    /**
     * 
     * @type string
     * @memberof MDRDetailReportsApigetPaginatedMdrs
     */
    id?: string
    /**
     * 
     * @type &#39;INBOUND&#39; | &#39;OUTBOUND&#39;
     * @memberof MDRDetailReportsApigetPaginatedMdrs
     */
    direction?: 'INBOUND' | 'OUTBOUND'
    /**
     * 
     * @type string
     * @memberof MDRDetailReportsApigetPaginatedMdrs
     */
    profile?: string
    /**
     * 
     * @type string
     * @memberof MDRDetailReportsApigetPaginatedMdrs
     */
    cld?: string
    /**
     * 
     * @type string
     * @memberof MDRDetailReportsApigetPaginatedMdrs
     */
    cli?: string
    /**
     * 
     * @type &#39;GW_TIMEOUT&#39; | &#39;DELIVERED&#39; | &#39;DLR_UNCONFIRMED&#39; | &#39;DLR_TIMEOUT&#39; | &#39;RECEIVED&#39; | &#39;GW_REJECT&#39; | &#39;FAILED&#39;
     * @memberof MDRDetailReportsApigetPaginatedMdrs
     */
    status?: 'GW_TIMEOUT' | 'DELIVERED' | 'DLR_UNCONFIRMED' | 'DLR_TIMEOUT' | 'RECEIVED' | 'GW_REJECT' | 'FAILED'
    /**
     * 
     * @type &#39;SMS&#39; | &#39;MMS&#39;
     * @memberof MDRDetailReportsApigetPaginatedMdrs
     */
    messageType?: 'SMS' | 'MMS'
}

export interface MDRDetailReportsApiSubmitMdrRequestRequest {
    /**
     * Mdr detail request data
     * @type MdrPostDetailReportRequest
     * @memberof MDRDetailReportsApisubmitMdrRequest
     */
    mdrPostDetailReportRequest: MdrPostDetailReportRequest
}

export class ObjectMDRDetailReportsApi {
    private api: ObservableMDRDetailReportsApi

    public constructor(configuration: Configuration, requestFactory?: MDRDetailReportsApiRequestFactory, responseProcessor?: MDRDetailReportsApiResponseProcessor) {
        this.api = new ObservableMDRDetailReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete generated messaging detail report by id
     * @param param the request object
     */
    public deleteMdrRequest(param: MDRDetailReportsApiDeleteMdrRequestRequest, options?: Configuration): Promise<MdrDeleteDetailReportResponse> {
        return this.api.deleteMdrRequest(param.id,  options).toPromise();
    }

    /**
     * Fetch all previous requests for messaging detail reports. Messaging detail reports are reports for pulling all messaging records. 
     * @param param the request object
     */
    public getCdrRequests(param: MDRDetailReportsApiGetCdrRequestsRequest = {}, options?: Configuration): Promise<MdrGetDetailReportResponse> {
        return this.api.getCdrRequests(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Fetch single messaging detail report by id.
     * @param param the request object
     */
    public getMdrRequest(param: MDRDetailReportsApiGetMdrRequestRequest, options?: Configuration): Promise<MdrGetDetailReportByIdResponse> {
        return this.api.getMdrRequest(param.id,  options).toPromise();
    }

    /**
     * Fetch all Mdr records 
     * @param param the request object
     */
    public getPaginatedMdrs(param: MDRDetailReportsApiGetPaginatedMdrsRequest = {}, options?: Configuration): Promise<MdrGetDetailResponse> {
        return this.api.getPaginatedMdrs(param.startDate, param.endDate, param.id, param.direction, param.profile, param.cld, param.cli, param.status, param.messageType,  options).toPromise();
    }

    /**
     * Submit a request for new messaging detail report. Messaging detail report pulls all raw messaging data according to defined filters.
     * @param param the request object
     */
    public submitMdrRequest(param: MDRDetailReportsApiSubmitMdrRequestRequest, options?: Configuration): Promise<MdrPostDetailReportResponse> {
        return this.api.submitMdrRequest(param.mdrPostDetailReportRequest,  options).toPromise();
    }

}

import { ObservableMDRUsageReportsApi } from "./ObservableAPI.ts";
import { MDRUsageReportsApiRequestFactory, MDRUsageReportsApiResponseProcessor} from "../apis/MDRUsageReportsApi.ts";

export interface MDRUsageReportsApiDeleteUsageReportRequest {
    /**
     * 
     * @type string
     * @memberof MDRUsageReportsApideleteUsageReport
     */
    id: string
}

export interface MDRUsageReportsApiGetUsageReportRequest {
    /**
     * 
     * @type string
     * @memberof MDRUsageReportsApigetUsageReport
     */
    id: string
}

export interface MDRUsageReportsApiGetUsageReportSync1Request {
    /**
     * 
     * @type &#39;NO_AGGREGATION&#39; | &#39;PROFILE&#39; | &#39;TAGS&#39;
     * @memberof MDRUsageReportsApigetUsageReportSync1
     */
    aggregationType: 'NO_AGGREGATION' | 'PROFILE' | 'TAGS'
    /**
     * 
     * @type Date
     * @memberof MDRUsageReportsApigetUsageReportSync1
     */
    startDate?: Date
    /**
     * 
     * @type Date
     * @memberof MDRUsageReportsApigetUsageReportSync1
     */
    endDate?: Date
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof MDRUsageReportsApigetUsageReportSync1
     */
    profiles?: Array<string>
}

export interface MDRUsageReportsApiGetUsageReportsRequest {
    /**
     * Page number
     * @type number
     * @memberof MDRUsageReportsApigetUsageReports
     */
    pageNumber?: number
    /**
     * Size of the page
     * @type number
     * @memberof MDRUsageReportsApigetUsageReports
     */
    pageSize?: number
}

export interface MDRUsageReportsApiSubmitUsageReportRequest {
    /**
     * Mdr usage report data
     * @type MdrPostUsageReportRequest
     * @memberof MDRUsageReportsApisubmitUsageReport
     */
    mdrPostUsageReportRequest: MdrPostUsageReportRequest
}

export class ObjectMDRUsageReportsApi {
    private api: ObservableMDRUsageReportsApi

    public constructor(configuration: Configuration, requestFactory?: MDRUsageReportsApiRequestFactory, responseProcessor?: MDRUsageReportsApiResponseProcessor) {
        this.api = new ObservableMDRUsageReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete messaging usage report by id
     * @param param the request object
     */
    public deleteUsageReport(param: MDRUsageReportsApiDeleteUsageReportRequest, options?: Configuration): Promise<MdrDeleteUsageReportsResponse> {
        return this.api.deleteUsageReport(param.id,  options).toPromise();
    }

    /**
     * Fetch a single messaging usage report by id
     * @param param the request object
     */
    public getUsageReport(param: MDRUsageReportsApiGetUsageReportRequest, options?: Configuration): Promise<MdrGetUsageReportsByIdResponse> {
        return this.api.getUsageReport(param.id,  options).toPromise();
    }

    /**
     * Generate and fetch messaging usage report synchronously. This endpoint will both generate and fetch the messaging report over a specified time period. No polling is necessary but the response may take up to a couple of minutes. 
     * @param param the request object
     */
    public getUsageReportSync1(param: MDRUsageReportsApiGetUsageReportSync1Request, options?: Configuration): Promise<MdrGetSyncUsageReportResponse> {
        return this.api.getUsageReportSync1(param.aggregationType, param.startDate, param.endDate, param.profiles,  options).toPromise();
    }

    /**
     * Fetch all messaging usage reports. Usage reports are aggregated messaging data for specified time period and breakdown
     * @param param the request object
     */
    public getUsageReports(param: MDRUsageReportsApiGetUsageReportsRequest = {}, options?: Configuration): Promise<MdrGetUsageReportsResponse> {
        return this.api.getUsageReports(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Submit request for new new messaging usage report. This endpoint will pull and aggregate messaging data in specified time period. 
     * @param param the request object
     */
    public submitUsageReport(param: MDRUsageReportsApiSubmitUsageReportRequest, options?: Configuration): Promise<MdrPostUsageReportsResponse> {
        return this.api.submitUsageReport(param.mdrPostUsageReportRequest,  options).toPromise();
    }

}

import { ObservableManagedAccountsApi } from "./ObservableAPI.ts";
import { ManagedAccountsApiRequestFactory, ManagedAccountsApiResponseProcessor} from "../apis/ManagedAccountsApi.ts";

export interface ManagedAccountsApiCreateManagedAccountRequest {
    /**
     * Parameters that define the managed account to be created
     * @type CreateManagedAccountRequest
     * @memberof ManagedAccountsApicreateManagedAccount
     */
    createManagedAccountRequest: CreateManagedAccountRequest
}

export interface ManagedAccountsApiDisableManagedAccountRequest {
    /**
     * Managed Account User ID
     * @type string
     * @memberof ManagedAccountsApidisableManagedAccount
     */
    id: string
}

export interface ManagedAccountsApiEnableManagedAccountRequest {
    /**
     * Managed Account User ID
     * @type string
     * @memberof ManagedAccountsApienableManagedAccount
     */
    id: string
}

export interface ManagedAccountsApiListManagedAccountsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof ManagedAccountsApilistManagedAccounts
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof ManagedAccountsApilistManagedAccounts
     */
    pageSize?: number
    /**
     * If present, email containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @type string
     * @memberof ManagedAccountsApilistManagedAccounts
     */
    filterEmailContains?: string
    /**
     * If present, only returns results with the &lt;code&gt;email&lt;/code&gt; matching exactly the value given.
     * @type string
     * @memberof ManagedAccountsApilistManagedAccounts
     */
    filterEmailEq?: string
    /**
     * If present, only returns results with the &lt;code&gt;organization_name&lt;/code&gt; containing the given value. Matching is not case-sensitive. Requires at least three characters.
     * @type string
     * @memberof ManagedAccountsApilistManagedAccounts
     */
    filterOrganizationNameContains?: string
    /**
     * If present, only returns results with the &lt;code&gt;organization_name&lt;/code&gt; matching the exact value given.
     * @type string
     * @memberof ManagedAccountsApilistManagedAccounts
     */
    filterOrganizationNameEq?: string
    /**
     * Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;email&lt;/code&gt;: sorts the result by the     &lt;code&gt;email&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-email&lt;/code&gt;: sorts the result by the     &lt;code&gt;email&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     * @type &#39;created_at&#39; | &#39;email&#39;
     * @memberof ManagedAccountsApilistManagedAccounts
     */
    sort?: 'created_at' | 'email'
    /**
     * Specifies if cancelled accounts should be included in the results.
     * @type boolean
     * @memberof ManagedAccountsApilistManagedAccounts
     */
    includeCancelledAccounts?: boolean
}

export interface ManagedAccountsApiRetrieveManagedAccountRequest {
    /**
     * Managed Account User ID
     * @type string
     * @memberof ManagedAccountsApiretrieveManagedAccount
     */
    id: string
}

export interface ManagedAccountsApiUpdateManagedAccountRequest {
    /**
     * Managed Account User ID
     * @type string
     * @memberof ManagedAccountsApiupdateManagedAccount
     */
    id: string
    /**
     * Parameters that define the updates to the managed account
     * @type UpdateManagedAccountRequest
     * @memberof ManagedAccountsApiupdateManagedAccount
     */
    updateManagedAccountRequest: UpdateManagedAccountRequest
}

export class ObjectManagedAccountsApi {
    private api: ObservableManagedAccountsApi

    public constructor(configuration: Configuration, requestFactory?: ManagedAccountsApiRequestFactory, responseProcessor?: ManagedAccountsApiResponseProcessor) {
        this.api = new ObservableManagedAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new managed account owned by the authenticated user. You need to be explictly approved by Telnyx in order to become a manager account.
     * Create a new managed account.
     * @param param the request object
     */
    public createManagedAccount(param: ManagedAccountsApiCreateManagedAccountRequest, options?: Configuration): Promise<CreateManagedAccount200Response> {
        return this.api.createManagedAccount(param.createManagedAccountRequest,  options).toPromise();
    }

    /**
     * Disables a managed account, forbidding it to use Telnyx services, including sending or receiving phone calls and SMS messages. Ongoing phone calls will not be affected. The managed account and its sub-users will still be able to log in via the mission control portal.
     * Disables a managed account
     * @param param the request object
     */
    public disableManagedAccount(param: ManagedAccountsApiDisableManagedAccountRequest, options?: Configuration): Promise<CreateManagedAccount200Response> {
        return this.api.disableManagedAccount(param.id,  options).toPromise();
    }

    /**
     * Enables a managed account and its sub-users to use Telnyx services.
     * Enables a managed account
     * @param param the request object
     */
    public enableManagedAccount(param: ManagedAccountsApiEnableManagedAccountRequest, options?: Configuration): Promise<CreateManagedAccount200Response> {
        return this.api.enableManagedAccount(param.id,  options).toPromise();
    }

    /**
     * Lists the accounts managed by the current user. Users need to be explictly approved by Telnyx in order to become manager accounts.
     * Lists accounts managed by the current user.
     * @param param the request object
     */
    public listManagedAccounts(param: ManagedAccountsApiListManagedAccountsRequest = {}, options?: Configuration): Promise<ListManagedAccounts200Response> {
        return this.api.listManagedAccounts(param.pageNumber, param.pageSize, param.filterEmailContains, param.filterEmailEq, param.filterOrganizationNameContains, param.filterOrganizationNameEq, param.sort, param.includeCancelledAccounts,  options).toPromise();
    }

    /**
     * Retrieves the details of a single managed account.
     * Retrieve a managed account
     * @param param the request object
     */
    public retrieveManagedAccount(param: ManagedAccountsApiRetrieveManagedAccountRequest, options?: Configuration): Promise<CreateManagedAccount200Response> {
        return this.api.retrieveManagedAccount(param.id,  options).toPromise();
    }

    /**
     * Update a single managed account.
     * Update a managed account
     * @param param the request object
     */
    public updateManagedAccount(param: ManagedAccountsApiUpdateManagedAccountRequest, options?: Configuration): Promise<CreateManagedAccount200Response> {
        return this.api.updateManagedAccount(param.id, param.updateManagedAccountRequest,  options).toPromise();
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

import { ObservableMessagesApi } from "./ObservableAPI.ts";
import { MessagesApiRequestFactory, MessagesApiResponseProcessor} from "../apis/MessagesApi.ts";

export interface MessagesApiCreateLongCodeMessageRequest {
    /**
     * Message payload
     * @type CreateLongCodeMessageRequest
     * @memberof MessagesApicreateLongCodeMessage
     */
    createLongCodeMessageRequest?: CreateLongCodeMessageRequest
}

export interface MessagesApiCreateMessageRequest {
    /**
     * Message payload
     * @type CreateMessageRequest
     * @memberof MessagesApicreateMessage
     */
    createMessageRequest?: CreateMessageRequest
}

export interface MessagesApiCreateNumberPoolMessageRequest {
    /**
     * Message payload
     * @type CreateNumberPoolMessageRequest
     * @memberof MessagesApicreateNumberPoolMessage
     */
    createNumberPoolMessageRequest?: CreateNumberPoolMessageRequest
}

export interface MessagesApiCreateShortCodeMessageRequest {
    /**
     * Message payload
     * @type CreateShortCodeMessageRequest
     * @memberof MessagesApicreateShortCodeMessage
     */
    createShortCodeMessageRequest?: CreateShortCodeMessageRequest
}

export interface MessagesApiRetrieveMessageRequest {
    /**
     * The id of the message
     * @type string
     * @memberof MessagesApiretrieveMessage
     */
    id: string
}

export class ObjectMessagesApi {
    private api: ObservableMessagesApi

    public constructor(configuration: Configuration, requestFactory?: MessagesApiRequestFactory, responseProcessor?: MessagesApiResponseProcessor) {
        this.api = new ObservableMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Send a long code message
     * @param param the request object
     */
    public createLongCodeMessage(param: MessagesApiCreateLongCodeMessageRequest = {}, options?: Configuration): Promise<MessageResponse> {
        return this.api.createLongCodeMessage(param.createLongCodeMessageRequest,  options).toPromise();
    }

    /**
     * Send a message with a Phone Number, Alphanumeric Sender ID, Short Code or Number Pool.  This endpoint allows you to send a message with any messaging resource. Current messaging resources include: long-code, short-code, number-pool, and alphanumeric-sender-id. 
     * Send a message
     * @param param the request object
     */
    public createMessage(param: MessagesApiCreateMessageRequest = {}, options?: Configuration): Promise<MessageResponse> {
        return this.api.createMessage(param.createMessageRequest,  options).toPromise();
    }

    /**
     * Send a message using number pool
     * @param param the request object
     */
    public createNumberPoolMessage(param: MessagesApiCreateNumberPoolMessageRequest = {}, options?: Configuration): Promise<MessageResponse> {
        return this.api.createNumberPoolMessage(param.createNumberPoolMessageRequest,  options).toPromise();
    }

    /**
     * Send a short code message
     * @param param the request object
     */
    public createShortCodeMessage(param: MessagesApiCreateShortCodeMessageRequest = {}, options?: Configuration): Promise<MessageResponse> {
        return this.api.createShortCodeMessage(param.createShortCodeMessageRequest,  options).toPromise();
    }

    /**
     * Note: This API endpoint can only retrieve messages that are no older than 10 days since their creation. If you require messages older than this, please generate an [MDR report.](https://developers.telnyx.com/docs/api/v1/reports/MDR-Reports)
     * Retrieve a message
     * @param param the request object
     */
    public retrieveMessage(param: MessagesApiRetrieveMessageRequest, options?: Configuration): Promise<MessageResponse> {
        return this.api.retrieveMessage(param.id,  options).toPromise();
    }

}

import { ObservableMessagingHostedNumberApi } from "./ObservableAPI.ts";
import { MessagingHostedNumberApiRequestFactory, MessagingHostedNumberApiResponseProcessor} from "../apis/MessagingHostedNumberApi.ts";

export interface MessagingHostedNumberApiCreateMessagingHostedNumberOrderRequest {
    /**
     * Message payload
     * @type CreateMessagingHostedNumberOrderRequest
     * @memberof MessagingHostedNumberApicreateMessagingHostedNumberOrder
     */
    createMessagingHostedNumberOrderRequest?: CreateMessagingHostedNumberOrderRequest
}

export interface MessagingHostedNumberApiDeleteMessagingHostedNumberRequest {
    /**
     * Identifies the type of resource.
     * @type string
     * @memberof MessagingHostedNumberApideleteMessagingHostedNumber
     */
    id: string
}

export interface MessagingHostedNumberApiListMessagingHostedNumberOrderRequest {
    /**
     * The page number to load
     * @type number
     * @memberof MessagingHostedNumberApilistMessagingHostedNumberOrder
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof MessagingHostedNumberApilistMessagingHostedNumberOrder
     */
    pageSize?: number
}

export interface MessagingHostedNumberApiRetrieveMessagingHostedNumberOrderRequest {
    /**
     * Identifies the type of resource.
     * @type string
     * @memberof MessagingHostedNumberApiretrieveMessagingHostedNumberOrder
     */
    id: string
}

export interface MessagingHostedNumberApiUploadFileMessagingHostedNumberOrderRequest {
    /**
     * Identifies the type of resource.
     * @type string
     * @memberof MessagingHostedNumberApiuploadFileMessagingHostedNumberOrder
     */
    id: string
    /**
     * Must be a signed LOA for the numbers in the order in PDF format.
     * @type HttpFile
     * @memberof MessagingHostedNumberApiuploadFileMessagingHostedNumberOrder
     */
    loa?: HttpFile
    /**
     * Must be the last month\\\&#39;s bill with proof of ownership of all of the numbers in the order in PDF format.
     * @type HttpFile
     * @memberof MessagingHostedNumberApiuploadFileMessagingHostedNumberOrder
     */
    bill?: HttpFile
}

export class ObjectMessagingHostedNumberApi {
    private api: ObservableMessagingHostedNumberApi

    public constructor(configuration: Configuration, requestFactory?: MessagingHostedNumberApiRequestFactory, responseProcessor?: MessagingHostedNumberApiResponseProcessor) {
        this.api = new ObservableMessagingHostedNumberApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a messaging hosted number order
     * @param param the request object
     */
    public createMessagingHostedNumberOrder(param: MessagingHostedNumberApiCreateMessagingHostedNumberOrderRequest = {}, options?: Configuration): Promise<RetrieveMessagingHostedNumberOrderResponse> {
        return this.api.createMessagingHostedNumberOrder(param.createMessagingHostedNumberOrderRequest,  options).toPromise();
    }

    /**
     * Delete a messaging hosted number
     * @param param the request object
     */
    public deleteMessagingHostedNumber(param: MessagingHostedNumberApiDeleteMessagingHostedNumberRequest, options?: Configuration): Promise<RetrieveMessagingHostedNumberResponse> {
        return this.api.deleteMessagingHostedNumber(param.id,  options).toPromise();
    }

    /**
     * List messaging hosted number orders
     * @param param the request object
     */
    public listMessagingHostedNumberOrder(param: MessagingHostedNumberApiListMessagingHostedNumberOrderRequest = {}, options?: Configuration): Promise<ListMessagingHostedNumberOrderResponse> {
        return this.api.listMessagingHostedNumberOrder(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieve a messaging hosted number order
     * @param param the request object
     */
    public retrieveMessagingHostedNumberOrder(param: MessagingHostedNumberApiRetrieveMessagingHostedNumberOrderRequest, options?: Configuration): Promise<RetrieveMessagingHostedNumberOrderResponse> {
        return this.api.retrieveMessagingHostedNumberOrder(param.id,  options).toPromise();
    }

    /**
     * Upload file required for a messaging hosted number order
     * @param param the request object
     */
    public uploadFileMessagingHostedNumberOrder(param: MessagingHostedNumberApiUploadFileMessagingHostedNumberOrderRequest, options?: Configuration): Promise<RetrieveMessagingHostedNumberOrderResponse> {
        return this.api.uploadFileMessagingHostedNumberOrder(param.id, param.loa, param.bill,  options).toPromise();
    }

}

import { ObservableMessagingProfilesApi } from "./ObservableAPI.ts";
import { MessagingProfilesApiRequestFactory, MessagingProfilesApiResponseProcessor} from "../apis/MessagingProfilesApi.ts";

export interface MessagingProfilesApiCreateMessagingProfileRequest {
    /**
     * New Messaging Profile object
     * @type CreateMessagingProfileRequest
     * @memberof MessagingProfilesApicreateMessagingProfile
     */
    createMessagingProfileRequest: CreateMessagingProfileRequest
}

export interface MessagingProfilesApiDeleteMessagingProfileRequest {
    /**
     * The id of the messaging profile to retrieve
     * @type string
     * @memberof MessagingProfilesApideleteMessagingProfile
     */
    id: string
}

export interface MessagingProfilesApiListMessagingProfileMetricsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof MessagingProfilesApilistMessagingProfileMetrics
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof MessagingProfilesApilistMessagingProfileMetrics
     */
    pageSize?: number
    /**
     * The id of the messaging profile(s) to retrieve
     * @type string
     * @memberof MessagingProfilesApilistMessagingProfileMetrics
     */
    id?: string
    /**
     * The timeframe for which you\&#39;d like to retrieve metrics.
     * @type &#39;1h&#39; | &#39;3h&#39; | &#39;24h&#39; | &#39;3d&#39; | &#39;7d&#39; | &#39;30d&#39;
     * @memberof MessagingProfilesApilistMessagingProfileMetrics
     */
    timeFrame?: '1h' | '3h' | '24h' | '3d' | '7d' | '30d'
}

export interface MessagingProfilesApiListMessagingProfilePhoneNumbersRequest {
    /**
     * The id of the messaging profile to retrieve
     * @type string
     * @memberof MessagingProfilesApilistMessagingProfilePhoneNumbers
     */
    id: string
    /**
     * The page number to load
     * @type number
     * @memberof MessagingProfilesApilistMessagingProfilePhoneNumbers
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof MessagingProfilesApilistMessagingProfilePhoneNumbers
     */
    pageSize?: number
}

export interface MessagingProfilesApiListMessagingProfileShortCodesRequest {
    /**
     * The id of the messaging profile to retrieve
     * @type string
     * @memberof MessagingProfilesApilistMessagingProfileShortCodes
     */
    id: string
    /**
     * The page number to load
     * @type number
     * @memberof MessagingProfilesApilistMessagingProfileShortCodes
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof MessagingProfilesApilistMessagingProfileShortCodes
     */
    pageSize?: number
}

export interface MessagingProfilesApiListMessagingProfilesRequest {
    /**
     * The page number to load
     * @type number
     * @memberof MessagingProfilesApilistMessagingProfiles
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof MessagingProfilesApilistMessagingProfiles
     */
    pageSize?: number
    /**
     * Filter by name
     * @type string
     * @memberof MessagingProfilesApilistMessagingProfiles
     */
    filterName?: string
}

export interface MessagingProfilesApiRetrieveMessagingProfileRequest {
    /**
     * The id of the messaging profile to retrieve
     * @type string
     * @memberof MessagingProfilesApiretrieveMessagingProfile
     */
    id: string
}

export interface MessagingProfilesApiRetrieveMessagingProfileDetailedMetricsRequest {
    /**
     * The id of the messaging profile to retrieve
     * @type string
     * @memberof MessagingProfilesApiretrieveMessagingProfileDetailedMetrics
     */
    id: string
    /**
     * The timeframe for which you\&#39;d like to retrieve metrics.
     * @type &#39;1h&#39; | &#39;3h&#39; | &#39;24h&#39; | &#39;3d&#39; | &#39;7d&#39; | &#39;30d&#39;
     * @memberof MessagingProfilesApiretrieveMessagingProfileDetailedMetrics
     */
    timeFrame?: '1h' | '3h' | '24h' | '3d' | '7d' | '30d'
}

export interface MessagingProfilesApiUpdateMessagingProfileRequest {
    /**
     * The id of the messaging profile to retrieve
     * @type string
     * @memberof MessagingProfilesApiupdateMessagingProfile
     */
    id: string
    /**
     * New Messaging Profile object
     * @type UpdateMessagingProfileRequest
     * @memberof MessagingProfilesApiupdateMessagingProfile
     */
    updateMessagingProfileRequest: UpdateMessagingProfileRequest
}

export class ObjectMessagingProfilesApi {
    private api: ObservableMessagingProfilesApi

    public constructor(configuration: Configuration, requestFactory?: MessagingProfilesApiRequestFactory, responseProcessor?: MessagingProfilesApiResponseProcessor) {
        this.api = new ObservableMessagingProfilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a messaging profile
     * @param param the request object
     */
    public createMessagingProfile(param: MessagingProfilesApiCreateMessagingProfileRequest, options?: Configuration): Promise<MessagingProfileResponse> {
        return this.api.createMessagingProfile(param.createMessagingProfileRequest,  options).toPromise();
    }

    /**
     * Delete a messaging profile
     * @param param the request object
     */
    public deleteMessagingProfile(param: MessagingProfilesApiDeleteMessagingProfileRequest, options?: Configuration): Promise<MessagingProfileResponse> {
        return this.api.deleteMessagingProfile(param.id,  options).toPromise();
    }

    /**
     * List messaging profile metrics
     * @param param the request object
     */
    public listMessagingProfileMetrics(param: MessagingProfilesApiListMessagingProfileMetricsRequest = {}, options?: Configuration): Promise<ListMessagingProfileMetricsResponse> {
        return this.api.listMessagingProfileMetrics(param.pageNumber, param.pageSize, param.id, param.timeFrame,  options).toPromise();
    }

    /**
     * List phone numbers associated with a messaging profile
     * @param param the request object
     */
    public listMessagingProfilePhoneNumbers(param: MessagingProfilesApiListMessagingProfilePhoneNumbersRequest, options?: Configuration): Promise<ListMessagingProfilePhoneNumbersResponse> {
        return this.api.listMessagingProfilePhoneNumbers(param.id, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * List short codes associated with a messaging profile
     * @param param the request object
     */
    public listMessagingProfileShortCodes(param: MessagingProfilesApiListMessagingProfileShortCodesRequest, options?: Configuration): Promise<ListMessagingProfileShortCodesResponse> {
        return this.api.listMessagingProfileShortCodes(param.id, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * List messaging profiles
     * @param param the request object
     */
    public listMessagingProfiles(param: MessagingProfilesApiListMessagingProfilesRequest = {}, options?: Configuration): Promise<ListMessagingProfilesResponse> {
        return this.api.listMessagingProfiles(param.pageNumber, param.pageSize, param.filterName,  options).toPromise();
    }

    /**
     * Retrieve a messaging profile
     * @param param the request object
     */
    public retrieveMessagingProfile(param: MessagingProfilesApiRetrieveMessagingProfileRequest, options?: Configuration): Promise<MessagingProfileResponse> {
        return this.api.retrieveMessagingProfile(param.id,  options).toPromise();
    }

    /**
     * Retrieve messaging profile metrics
     * @param param the request object
     */
    public retrieveMessagingProfileDetailedMetrics(param: MessagingProfilesApiRetrieveMessagingProfileDetailedMetricsRequest, options?: Configuration): Promise<RetrieveMessagingProfileMetricsResponse> {
        return this.api.retrieveMessagingProfileDetailedMetrics(param.id, param.timeFrame,  options).toPromise();
    }

    /**
     * Update a messaging profile
     * @param param the request object
     */
    public updateMessagingProfile(param: MessagingProfilesApiUpdateMessagingProfileRequest, options?: Configuration): Promise<MessagingProfileResponse> {
        return this.api.updateMessagingProfile(param.id, param.updateMessagingProfileRequest,  options).toPromise();
    }

}

import { ObservableMessagingTollfreeVerificationApi } from "./ObservableAPI.ts";
import { MessagingTollfreeVerificationApiRequestFactory, MessagingTollfreeVerificationApiResponseProcessor} from "../apis/MessagingTollfreeVerificationApi.ts";

export interface MessagingTollfreeVerificationApiGetVerificationRequestRequest {
    /**
     * 
     * @type string
     * @memberof MessagingTollfreeVerificationApigetVerificationRequest
     */
    id: string
}

export interface MessagingTollfreeVerificationApiListVerificationRequestsRequest {
    /**
     * 
     * @type number
     * @memberof MessagingTollfreeVerificationApilistVerificationRequests
     */
    page: number
    /**
     *          Request this many records per page          This value is automatically clamped if the provided value is too large.         
     * @type number
     * @memberof MessagingTollfreeVerificationApilistVerificationRequests
     */
    pageSize: number
    /**
     * 
     * @type Date
     * @memberof MessagingTollfreeVerificationApilistVerificationRequests
     */
    dateStart?: Date
    /**
     * 
     * @type Date
     * @memberof MessagingTollfreeVerificationApilistVerificationRequests
     */
    dateEnd?: Date
    /**
     * 
     * @type TFVerificationStatus
     * @memberof MessagingTollfreeVerificationApilistVerificationRequests
     */
    status?: TFVerificationStatus
    /**
     * 
     * @type string
     * @memberof MessagingTollfreeVerificationApilistVerificationRequests
     */
    phoneNumber?: string
}

export interface MessagingTollfreeVerificationApiSubmitVerificationRequestRequest {
    /**
     * 
     * @type TFVerificationRequest
     * @memberof MessagingTollfreeVerificationApisubmitVerificationRequest
     */
    tFVerificationRequest: TFVerificationRequest
}

export interface MessagingTollfreeVerificationApiUpdateVerificationRequestRequest {
    /**
     * 
     * @type string
     * @memberof MessagingTollfreeVerificationApiupdateVerificationRequest
     */
    id: string
    /**
     * 
     * @type TFVerificationRequest
     * @memberof MessagingTollfreeVerificationApiupdateVerificationRequest
     */
    tFVerificationRequest: TFVerificationRequest
}

export class ObjectMessagingTollfreeVerificationApi {
    private api: ObservableMessagingTollfreeVerificationApi

    public constructor(configuration: Configuration, requestFactory?: MessagingTollfreeVerificationApiRequestFactory, responseProcessor?: MessagingTollfreeVerificationApiResponseProcessor) {
        this.api = new ObservableMessagingTollfreeVerificationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a single verification request by its ID.
     * Get Verification Request
     * @param param the request object
     */
    public getVerificationRequest(param: MessagingTollfreeVerificationApiGetVerificationRequestRequest, options?: Configuration): Promise<VerificationRequestStatus> {
        return this.api.getVerificationRequest(param.id,  options).toPromise();
    }

    /**
     * Get a list of previously-submitted tollfree verification requests
     * List Verification Requests
     * @param param the request object
     */
    public listVerificationRequests(param: MessagingTollfreeVerificationApiListVerificationRequestsRequest, options?: Configuration): Promise<PaginatedVerificationRequestStatus> {
        return this.api.listVerificationRequests(param.page, param.pageSize, param.dateStart, param.dateEnd, param.status, param.phoneNumber,  options).toPromise();
    }

    /**
     * Submit a new tollfree verification request
     * Submit Verification Request
     * @param param the request object
     */
    public submitVerificationRequest(param: MessagingTollfreeVerificationApiSubmitVerificationRequestRequest, options?: Configuration): Promise<VerificationRequestEgress> {
        return this.api.submitVerificationRequest(param.tFVerificationRequest,  options).toPromise();
    }

    /**
     * Update an existing tollfree verification request. This is particularly useful when there are pending customer actions to be taken.
     * Update Verification Request
     * @param param the request object
     */
    public updateVerificationRequest(param: MessagingTollfreeVerificationApiUpdateVerificationRequestRequest, options?: Configuration): Promise<VerificationRequestEgress> {
        return this.api.updateVerificationRequest(param.id, param.tFVerificationRequest,  options).toPromise();
    }

}

import { ObservableMessagingTollfreeVerificationsApi } from "./ObservableAPI.ts";
import { MessagingTollfreeVerificationsApiRequestFactory, MessagingTollfreeVerificationsApiResponseProcessor} from "../apis/MessagingTollfreeVerificationsApi.ts";

export interface MessagingTollfreeVerificationsApiDeleteVerificationRequestPublicApiV2RequestsIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof MessagingTollfreeVerificationsApideleteVerificationRequestPublicApiV2RequestsIdDelete
     */
    id: string
}

export class ObjectMessagingTollfreeVerificationsApi {
    private api: ObservableMessagingTollfreeVerificationsApi

    public constructor(configuration: Configuration, requestFactory?: MessagingTollfreeVerificationsApiRequestFactory, responseProcessor?: MessagingTollfreeVerificationsApiResponseProcessor) {
        this.api = new ObservableMessagingTollfreeVerificationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a verification request  A request may only be deleted when when the request is in the \"rejected\" state.  * `HTTP 200`: request successfully deleted * `HTTP 400`: request exists but can\'t be deleted (i.e. not rejected) * `HTTP 404`: request unknown or already deleted
     * Delete Verification Request
     * @param param the request object
     */
    public deleteVerificationRequestPublicApiV2RequestsIdDelete(param: MessagingTollfreeVerificationsApiDeleteVerificationRequestPublicApiV2RequestsIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.deleteVerificationRequestPublicApiV2RequestsIdDelete(param.id,  options).toPromise();
    }

}

import { ObservableMessagingURLDomainsApi } from "./ObservableAPI.ts";
import { MessagingURLDomainsApiRequestFactory, MessagingURLDomainsApiResponseProcessor} from "../apis/MessagingURLDomainsApi.ts";

export interface MessagingURLDomainsApiListMessagingUrlDomainsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof MessagingURLDomainsApilistMessagingUrlDomains
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof MessagingURLDomainsApilistMessagingUrlDomains
     */
    pageSize?: number
}

export class ObjectMessagingURLDomainsApi {
    private api: ObservableMessagingURLDomainsApi

    public constructor(configuration: Configuration, requestFactory?: MessagingURLDomainsApiRequestFactory, responseProcessor?: MessagingURLDomainsApiResponseProcessor) {
        this.api = new ObservableMessagingURLDomainsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List messaging URL domains
     * @param param the request object
     */
    public listMessagingUrlDomains(param: MessagingURLDomainsApiListMessagingUrlDomainsRequest = {}, options?: Configuration): Promise<ListMessagingProfileUrlDomainsResponse> {
        return this.api.listMessagingUrlDomains(param.pageNumber, param.pageSize,  options).toPromise();
    }

}

import { ObservableMobileOperatorNetworksApi } from "./ObservableAPI.ts";
import { MobileOperatorNetworksApiRequestFactory, MobileOperatorNetworksApiResponseProcessor} from "../apis/MobileOperatorNetworksApi.ts";

export interface MobileOperatorNetworksApiMobileOperatorNetworksGetRequest {
    /**
     * The page number to load
     * @type number
     * @memberof MobileOperatorNetworksApimobileOperatorNetworksGet
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof MobileOperatorNetworksApimobileOperatorNetworksGet
     */
    pageSize?: number
    /**
     * Filter by name starting with.
     * @type string
     * @memberof MobileOperatorNetworksApimobileOperatorNetworksGet
     */
    filterNameStartsWith?: string
    /**
     * Filter by name containing match.
     * @type string
     * @memberof MobileOperatorNetworksApimobileOperatorNetworksGet
     */
    filterNameContains?: string
    /**
     * Filter by name ending with.
     * @type string
     * @memberof MobileOperatorNetworksApimobileOperatorNetworksGet
     */
    filterNameEndsWith?: string
    /**
     * Filter by exact country_code.
     * @type string
     * @memberof MobileOperatorNetworksApimobileOperatorNetworksGet
     */
    filterCountryCode?: string
    /**
     * Filter by exact MCC.
     * @type string
     * @memberof MobileOperatorNetworksApimobileOperatorNetworksGet
     */
    filterMcc?: string
    /**
     * Filter by exact MNC.
     * @type string
     * @memberof MobileOperatorNetworksApimobileOperatorNetworksGet
     */
    filterMnc?: string
    /**
     * Filter by exact TADIG.
     * @type string
     * @memberof MobileOperatorNetworksApimobileOperatorNetworksGet
     */
    filterTadig?: string
}

export class ObjectMobileOperatorNetworksApi {
    private api: ObservableMobileOperatorNetworksApi

    public constructor(configuration: Configuration, requestFactory?: MobileOperatorNetworksApiRequestFactory, responseProcessor?: MobileOperatorNetworksApiResponseProcessor) {
        this.api = new ObservableMobileOperatorNetworksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Telnyx has a set of GSM mobile operators partners that are available through our mobile network roaming. This resource is entirely managed by Telnyx and may change over time. That means that this resource won\'t allow any write operations for it. Still, it\'s available so it can be used as a support resource that can be related to other resources or become a configuration option.
     * List mobile operator networks
     * @param param the request object
     */
    public mobileOperatorNetworksGet(param: MobileOperatorNetworksApiMobileOperatorNetworksGetRequest = {}, options?: Configuration): Promise<MobileOperatorNetworksGet200Response> {
        return this.api.mobileOperatorNetworksGet(param.pageNumber, param.pageSize, param.filterNameStartsWith, param.filterNameContains, param.filterNameEndsWith, param.filterCountryCode, param.filterMcc, param.filterMnc, param.filterTadig,  options).toPromise();
    }

}

import { ObservableNetworksApi } from "./ObservableAPI.ts";
import { NetworksApiRequestFactory, NetworksApiResponseProcessor} from "../apis/NetworksApi.ts";

export interface NetworksApiNetworkCreateRequest {
    /**
     * 
     * @type NetworkCreate
     * @memberof NetworksApinetworkCreate
     */
    networkCreate: NetworkCreate
}

export interface NetworksApiNetworkDeleteRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NetworksApinetworkDelete
     */
    id: string
}

export interface NetworksApiNetworkGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NetworksApinetworkGet
     */
    id: string
}

export interface NetworksApiNetworkInterfaceListRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NetworksApinetworkInterfaceList
     */
    id: string
    /**
     * The page number to load
     * @type number
     * @memberof NetworksApinetworkInterfaceList
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NetworksApinetworkInterfaceList
     */
    pageSize?: number
    /**
     * The interface name to filter on.
     * @type string
     * @memberof NetworksApinetworkInterfaceList
     */
    filterName?: string
    /**
     * The interface type to filter on.
     * @type string
     * @memberof NetworksApinetworkInterfaceList
     */
    filterType?: string
    /**
     * The interface status to filter on.
     * @type InterfaceStatus
     * @memberof NetworksApinetworkInterfaceList
     */
    filterStatus?: InterfaceStatus
}

export interface NetworksApiNetworkListRequest {
    /**
     * The page number to load
     * @type number
     * @memberof NetworksApinetworkList
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NetworksApinetworkList
     */
    pageSize?: number
    /**
     * The network name to filter on.
     * @type string
     * @memberof NetworksApinetworkList
     */
    filterName?: string
}

export interface NetworksApiNetworkUpdateRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NetworksApinetworkUpdate
     */
    id: string
    /**
     * 
     * @type NetworkCreate
     * @memberof NetworksApinetworkUpdate
     */
    networkCreate: NetworkCreate
}

export class ObjectNetworksApi {
    private api: ObservableNetworksApi

    public constructor(configuration: Configuration, requestFactory?: NetworksApiRequestFactory, responseProcessor?: NetworksApiResponseProcessor) {
        this.api = new ObservableNetworksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Network.
     * Create a Network
     * @param param the request object
     */
    public networkCreate(param: NetworksApiNetworkCreateRequest, options?: Configuration): Promise<NetworkCreate200Response> {
        return this.api.networkCreate(param.networkCreate,  options).toPromise();
    }

    /**
     * Delete a Network.
     * Delete a Network
     * @param param the request object
     */
    public networkDelete(param: NetworksApiNetworkDeleteRequest, options?: Configuration): Promise<NetworkCreate200Response> {
        return this.api.networkDelete(param.id,  options).toPromise();
    }

    /**
     * Retrieve a Network.
     * Retrieve a Network
     * @param param the request object
     */
    public networkGet(param: NetworksApiNetworkGetRequest, options?: Configuration): Promise<NetworkCreate200Response> {
        return this.api.networkGet(param.id,  options).toPromise();
    }

    /**
     * List all Interfaces for a Network.
     * List all Interfaces for a Network.
     * @param param the request object
     */
    public networkInterfaceList(param: NetworksApiNetworkInterfaceListRequest, options?: Configuration): Promise<NetworkInterfaceList200Response> {
        return this.api.networkInterfaceList(param.id, param.pageNumber, param.pageSize, param.filterName, param.filterType, param.filterStatus,  options).toPromise();
    }

    /**
     * List all Networks.
     * List all Networks
     * @param param the request object
     */
    public networkList(param: NetworksApiNetworkListRequest = {}, options?: Configuration): Promise<NetworkList200Response> {
        return this.api.networkList(param.pageNumber, param.pageSize, param.filterName,  options).toPromise();
    }

    /**
     * Update a Network.
     * Update a Network
     * @param param the request object
     */
    public networkUpdate(param: NetworksApiNetworkUpdateRequest, options?: Configuration): Promise<NetworkCreate200Response> {
        return this.api.networkUpdate(param.id, param.networkCreate,  options).toPromise();
    }

}

import { ObservableNotificationsApi } from "./ObservableAPI.ts";
import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor} from "../apis/NotificationsApi.ts";

export interface NotificationsApiCreateNotificationChannelsRequest {
    /**
     * Add a Notification Channel
     * @type NotificationChannel
     * @memberof NotificationsApicreateNotificationChannels
     */
    notificationChannel?: NotificationChannel
}

export interface NotificationsApiCreateNotificationProfileRequest {
    /**
     * Add a Notification Profile
     * @type NotificationProfile
     * @memberof NotificationsApicreateNotificationProfile
     */
    notificationProfile?: NotificationProfile
}

export interface NotificationsApiCreateNotificationSettingRequest {
    /**
     * 
     * @type NotificationSetting
     * @memberof NotificationsApicreateNotificationSetting
     */
    notificationSetting?: NotificationSetting
}

export interface NotificationsApiDeleteNotificationChannelRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NotificationsApideleteNotificationChannel
     */
    id: string
}

export interface NotificationsApiDeleteNotificationProfileRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NotificationsApideleteNotificationProfile
     */
    id: string
}

export interface NotificationsApiDeleteNotificationSettingRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NotificationsApideleteNotificationSetting
     */
    id: string
}

export interface NotificationsApiFindNotificationsEventsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof NotificationsApifindNotificationsEvents
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NotificationsApifindNotificationsEvents
     */
    pageSize?: number
}

export interface NotificationsApiFindNotificationsEventsConditionsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof NotificationsApifindNotificationsEventsConditions
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NotificationsApifindNotificationsEventsConditions
     */
    pageSize?: number
    /**
     * Filter by the associated record type
     * @type &#39;account&#39; | &#39;phone_number&#39;
     * @memberof NotificationsApifindNotificationsEventsConditions
     */
    filterAssociatedRecordTypeEq?: 'account' | 'phone_number'
}

export interface NotificationsApiFindNotificationsProfilesRequest {
    /**
     * The page number to load
     * @type number
     * @memberof NotificationsApifindNotificationsProfiles
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NotificationsApifindNotificationsProfiles
     */
    pageSize?: number
}

export interface NotificationsApiListNotificationChannelsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof NotificationsApilistNotificationChannels
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NotificationsApilistNotificationChannels
     */
    pageSize?: number
    /**
     * Filter by the id of a channel type
     * @type &#39;webhook&#39; | &#39;sms&#39; | &#39;email&#39; | &#39;voice&#39;
     * @memberof NotificationsApilistNotificationChannels
     */
    filterChannelTypeIdEq?: 'webhook' | 'sms' | 'email' | 'voice'
}

export interface NotificationsApiListNotificationSettingsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof NotificationsApilistNotificationSettings
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NotificationsApilistNotificationSettings
     */
    pageSize?: number
    /**
     * Filter by the id of a notification profile
     * @type string
     * @memberof NotificationsApilistNotificationSettings
     */
    filterNotificationProfileIdEq?: string
    /**
     * Filter by the id of a notification channel
     * @type string
     * @memberof NotificationsApilistNotificationSettings
     */
    filterNotificationChannelEq?: string
    /**
     * Filter by the id of a notification channel
     * @type string
     * @memberof NotificationsApilistNotificationSettings
     */
    filterNotificationEventConditionIdEq?: string
    /**
     * Filter by the associated record type
     * @type &#39;account&#39; | &#39;phone_number&#39;
     * @memberof NotificationsApilistNotificationSettings
     */
    filterAssociatedRecordTypeEq?: 'account' | 'phone_number'
    /**
     * The status of a notification setting
     * @type &#39;enabled&#39; | &#39;enable-received&#39; | &#39;enable-pending&#39; | &#39;enable-submtited&#39; | &#39;delete-received&#39; | &#39;delete-pending&#39; | &#39;delete-submitted&#39; | &#39;deleted&#39;
     * @memberof NotificationsApilistNotificationSettings
     */
    filterStatusEq?: 'enabled' | 'enable-received' | 'enable-pending' | 'enable-submtited' | 'delete-received' | 'delete-pending' | 'delete-submitted' | 'deleted'
}

export interface NotificationsApiRetrieveNotificationChannelRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NotificationsApiretrieveNotificationChannel
     */
    id: string
}

export interface NotificationsApiRetrieveNotificationProfileRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NotificationsApiretrieveNotificationProfile
     */
    id: string
}

export interface NotificationsApiRetrieveNotificationSettingRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NotificationsApiretrieveNotificationSetting
     */
    id: string
}

export interface NotificationsApiUpdateNotificationChannelRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NotificationsApiupdateNotificationChannel
     */
    id: string
    /**
     * Update notification channel object
     * @type NotificationChannel
     * @memberof NotificationsApiupdateNotificationChannel
     */
    notificationChannel: NotificationChannel
}

export interface NotificationsApiUpdateNotificationProfileRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NotificationsApiupdateNotificationProfile
     */
    id: string
    /**
     * Update notification profile object
     * @type NotificationProfile
     * @memberof NotificationsApiupdateNotificationProfile
     */
    notificationProfile: NotificationProfile
}

export class ObjectNotificationsApi {
    private api: ObservableNotificationsApi

    public constructor(configuration: Configuration, requestFactory?: NotificationsApiRequestFactory, responseProcessor?: NotificationsApiResponseProcessor) {
        this.api = new ObservableNotificationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a notification channel.
     * Create a notification channel
     * @param param the request object
     */
    public createNotificationChannels(param: NotificationsApiCreateNotificationChannelsRequest = {}, options?: Configuration): Promise<CreateNotificationChannels200Response> {
        return this.api.createNotificationChannels(param.notificationChannel,  options).toPromise();
    }

    /**
     * Create a notification profile.
     * Create a notification profile
     * @param param the request object
     */
    public createNotificationProfile(param: NotificationsApiCreateNotificationProfileRequest = {}, options?: Configuration): Promise<CreateNotificationProfile200Response> {
        return this.api.createNotificationProfile(param.notificationProfile,  options).toPromise();
    }

    /**
     * Add a notification setting.
     * Add a Notification Setting
     * @param param the request object
     */
    public createNotificationSetting(param: NotificationsApiCreateNotificationSettingRequest = {}, options?: Configuration): Promise<CreateNotificationSetting200Response> {
        return this.api.createNotificationSetting(param.notificationSetting,  options).toPromise();
    }

    /**
     * Delete a notification channel.
     * Delete a notification channel
     * @param param the request object
     */
    public deleteNotificationChannel(param: NotificationsApiDeleteNotificationChannelRequest, options?: Configuration): Promise<CreateNotificationChannels200Response> {
        return this.api.deleteNotificationChannel(param.id,  options).toPromise();
    }

    /**
     * Delete a notification profile.
     * Delete a notification profile
     * @param param the request object
     */
    public deleteNotificationProfile(param: NotificationsApiDeleteNotificationProfileRequest, options?: Configuration): Promise<CreateNotificationProfile200Response> {
        return this.api.deleteNotificationProfile(param.id,  options).toPromise();
    }

    /**
     * Delete a notification setting.
     * Delete a notification setting
     * @param param the request object
     */
    public deleteNotificationSetting(param: NotificationsApiDeleteNotificationSettingRequest, options?: Configuration): Promise<CreateNotificationSetting200Response> {
        return this.api.deleteNotificationSetting(param.id,  options).toPromise();
    }

    /**
     * Returns a list of your notifications events.
     * List all Notifications Events
     * @param param the request object
     */
    public findNotificationsEvents(param: NotificationsApiFindNotificationsEventsRequest = {}, options?: Configuration): Promise<FindNotificationsEvents200Response> {
        return this.api.findNotificationsEvents(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Returns a list of your notifications events conditions.
     * List all Notifications Events Conditions
     * @param param the request object
     */
    public findNotificationsEventsConditions(param: NotificationsApiFindNotificationsEventsConditionsRequest = {}, options?: Configuration): Promise<FindNotificationsEventsConditions200Response> {
        return this.api.findNotificationsEventsConditions(param.pageNumber, param.pageSize, param.filterAssociatedRecordTypeEq,  options).toPromise();
    }

    /**
     * Returns a list of your notifications profiles.
     * List all Notifications Profiles
     * @param param the request object
     */
    public findNotificationsProfiles(param: NotificationsApiFindNotificationsProfilesRequest = {}, options?: Configuration): Promise<FindNotificationsProfiles200Response> {
        return this.api.findNotificationsProfiles(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * List notification channels.
     * List notification channels
     * @param param the request object
     */
    public listNotificationChannels(param: NotificationsApiListNotificationChannelsRequest = {}, options?: Configuration): Promise<ListNotificationChannels200Response> {
        return this.api.listNotificationChannels(param.pageNumber, param.pageSize, param.filterChannelTypeIdEq,  options).toPromise();
    }

    /**
     * List notification settings.
     * List notification settings
     * @param param the request object
     */
    public listNotificationSettings(param: NotificationsApiListNotificationSettingsRequest = {}, options?: Configuration): Promise<ListNotificationSettings200Response> {
        return this.api.listNotificationSettings(param.pageNumber, param.pageSize, param.filterNotificationProfileIdEq, param.filterNotificationChannelEq, param.filterNotificationEventConditionIdEq, param.filterAssociatedRecordTypeEq, param.filterStatusEq,  options).toPromise();
    }

    /**
     * Retrieve a notification channel.
     * Retrieve a notification channel
     * @param param the request object
     */
    public retrieveNotificationChannel(param: NotificationsApiRetrieveNotificationChannelRequest, options?: Configuration): Promise<CreateNotificationChannels200Response> {
        return this.api.retrieveNotificationChannel(param.id,  options).toPromise();
    }

    /**
     * Retrieve a notification profile.
     * Retrieve a notification profile
     * @param param the request object
     */
    public retrieveNotificationProfile(param: NotificationsApiRetrieveNotificationProfileRequest, options?: Configuration): Promise<CreateNotificationProfile200Response> {
        return this.api.retrieveNotificationProfile(param.id,  options).toPromise();
    }

    /**
     * Retrieve a notification setting.
     * Retrieve a notification setting
     * @param param the request object
     */
    public retrieveNotificationSetting(param: NotificationsApiRetrieveNotificationSettingRequest, options?: Configuration): Promise<CreateNotificationSetting200Response> {
        return this.api.retrieveNotificationSetting(param.id,  options).toPromise();
    }

    /**
     * Update a notification channel.
     * Update a notification channel
     * @param param the request object
     */
    public updateNotificationChannel(param: NotificationsApiUpdateNotificationChannelRequest, options?: Configuration): Promise<CreateNotificationChannels200Response> {
        return this.api.updateNotificationChannel(param.id, param.notificationChannel,  options).toPromise();
    }

    /**
     * Update a notification profile.
     * Update a notification profile
     * @param param the request object
     */
    public updateNotificationProfile(param: NotificationsApiUpdateNotificationProfileRequest, options?: Configuration): Promise<CreateNotificationProfile200Response> {
        return this.api.updateNotificationProfile(param.id, param.notificationProfile,  options).toPromise();
    }

}

import { ObservableNumberBackgroundJobsApi } from "./ObservableAPI.ts";
import { NumberBackgroundJobsApiRequestFactory, NumberBackgroundJobsApiResponseProcessor} from "../apis/NumberBackgroundJobsApi.ts";

export interface NumberBackgroundJobsApiCreatePhoneNumbersJobDeletePhoneNumbersRequest {
    /**
     * 
     * @type PhoneNumbersJobDeletePhoneNumbersRequest
     * @memberof NumberBackgroundJobsApicreatePhoneNumbersJobDeletePhoneNumbers
     */
    phoneNumbersJobDeletePhoneNumbersRequest: PhoneNumbersJobDeletePhoneNumbersRequest
}

export interface NumberBackgroundJobsApiCreatePhoneNumbersJobUpdateEmergencySettingsRequest {
    /**
     * 
     * @type PhoneNumbersJobUpdateEmergencySettingsRequest
     * @memberof NumberBackgroundJobsApicreatePhoneNumbersJobUpdateEmergencySettings
     */
    phoneNumbersJobUpdateEmergencySettingsRequest: PhoneNumbersJobUpdateEmergencySettingsRequest
}

export interface NumberBackgroundJobsApiCreatePhoneNumbersJobUpdatePhoneNumberRequest {
    /**
     * 
     * @type PhoneNumbersJobUpdatePhoneNumbersRequest
     * @memberof NumberBackgroundJobsApicreatePhoneNumbersJobUpdatePhoneNumber
     */
    phoneNumbersJobUpdatePhoneNumbersRequest: PhoneNumbersJobUpdatePhoneNumbersRequest
}

export interface NumberBackgroundJobsApiListPhoneNumbersJobsRequest {
    /**
     * Filter the phone number jobs by type.
     * @type &#39;update_emergency_settings&#39; | &#39;delete_phone_numbers&#39; | &#39;update_phone_numbers&#39;
     * @memberof NumberBackgroundJobsApilistPhoneNumbersJobs
     */
    filterType?: 'update_emergency_settings' | 'delete_phone_numbers' | 'update_phone_numbers'
    /**
     * The page number to load
     * @type number
     * @memberof NumberBackgroundJobsApilistPhoneNumbersJobs
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NumberBackgroundJobsApilistPhoneNumbersJobs
     */
    pageSize?: number
    /**
     * Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     * @type &#39;created_at&#39;
     * @memberof NumberBackgroundJobsApilistPhoneNumbersJobs
     */
    sort?: 'created_at'
}

export interface NumberBackgroundJobsApiRetrievePhoneNumbersJobRequest {
    /**
     * Identifies the Phone Numbers Job.
     * @type string
     * @memberof NumberBackgroundJobsApiretrievePhoneNumbersJob
     */
    id: string
}

export class ObjectNumberBackgroundJobsApi {
    private api: ObservableNumberBackgroundJobsApi

    public constructor(configuration: Configuration, requestFactory?: NumberBackgroundJobsApiRequestFactory, responseProcessor?: NumberBackgroundJobsApiResponseProcessor) {
        this.api = new ObservableNumberBackgroundJobsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new background job to delete a batch of numbers. At most one thousand numbers can be updated per API call.
     * Delete a batch of numbers
     * @param param the request object
     */
    public createPhoneNumbersJobDeletePhoneNumbers(param: NumberBackgroundJobsApiCreatePhoneNumbersJobDeletePhoneNumbersRequest, options?: Configuration): Promise<PhoneNumbersJobDeletePhoneNumbers> {
        return this.api.createPhoneNumbersJobDeletePhoneNumbers(param.phoneNumbersJobDeletePhoneNumbersRequest,  options).toPromise();
    }

    /**
     * Creates a background job to update the emergency settings of a collection of phone numbers. At most one thousand numbers can be updated per API call.
     * Update the emergency settings from a batch of numbers
     * @param param the request object
     */
    public createPhoneNumbersJobUpdateEmergencySettings(param: NumberBackgroundJobsApiCreatePhoneNumbersJobUpdateEmergencySettingsRequest, options?: Configuration): Promise<PhoneNumbersEnableEmergency> {
        return this.api.createPhoneNumbersJobUpdateEmergencySettings(param.phoneNumbersJobUpdateEmergencySettingsRequest,  options).toPromise();
    }

    /**
     * Creates a new background job to update a batch of numbers. At most one thousand numbers can be updated per API call. At least one of the updateable fields must be submitted.
     * Update a batch of numbers
     * @param param the request object
     */
    public createPhoneNumbersJobUpdatePhoneNumber(param: NumberBackgroundJobsApiCreatePhoneNumbersJobUpdatePhoneNumberRequest, options?: Configuration): Promise<PhoneNumbersJobUpdatePhoneNumbers> {
        return this.api.createPhoneNumbersJobUpdatePhoneNumber(param.phoneNumbersJobUpdatePhoneNumbersRequest,  options).toPromise();
    }

    /**
     * Lists the phone numbers jobs
     * @param param the request object
     */
    public listPhoneNumbersJobs(param: NumberBackgroundJobsApiListPhoneNumbersJobsRequest = {}, options?: Configuration): Promise<ListPhoneNumbersBackgroundJobsResponse> {
        return this.api.listPhoneNumbersJobs(param.filterType, param.pageNumber, param.pageSize, param.sort,  options).toPromise();
    }

    /**
     * Retrieve a phone numbers job
     * @param param the request object
     */
    public retrievePhoneNumbersJob(param: NumberBackgroundJobsApiRetrievePhoneNumbersJobRequest, options?: Configuration): Promise<PhoneNumbersJob> {
        return this.api.retrievePhoneNumbersJob(param.id,  options).toPromise();
    }

}

import { ObservableNumberBlockOrdersApi } from "./ObservableAPI.ts";
import { NumberBlockOrdersApiRequestFactory, NumberBlockOrdersApiResponseProcessor} from "../apis/NumberBlockOrdersApi.ts";

export interface NumberBlockOrdersApiCreateNumberBlockOrderRequest {
    /**
     * 
     * @type CreateNumberBlockOrderRequest
     * @memberof NumberBlockOrdersApicreateNumberBlockOrder
     */
    createNumberBlockOrderRequest: CreateNumberBlockOrderRequest
}

export interface NumberBlockOrdersApiListNumberBlockOrdersRequest {
    /**
     * Filter number block orders by status.
     * @type string
     * @memberof NumberBlockOrdersApilistNumberBlockOrders
     */
    filterStatus?: string
    /**
     * Filter number block orders later than this value.
     * @type string
     * @memberof NumberBlockOrdersApilistNumberBlockOrders
     */
    filterCreatedAtGt?: string
    /**
     * Filter number block orders earlier than this value.
     * @type string
     * @memberof NumberBlockOrdersApilistNumberBlockOrders
     */
    filterCreatedAtLt?: string
    /**
     * Filter number block  orders having these phone numbers.
     * @type string
     * @memberof NumberBlockOrdersApilistNumberBlockOrders
     */
    filterPhoneNumbersStartingNumber?: string
    /**
     * The page number to load
     * @type number
     * @memberof NumberBlockOrdersApilistNumberBlockOrders
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NumberBlockOrdersApilistNumberBlockOrders
     */
    pageSize?: number
}

export interface NumberBlockOrdersApiRetrieveNumberBlockOrderRequest {
    /**
     * The number block order ID.
     * @type string
     * @memberof NumberBlockOrdersApiretrieveNumberBlockOrder
     */
    numberBlockOrderId: string
}

export class ObjectNumberBlockOrdersApi {
    private api: ObservableNumberBlockOrdersApi

    public constructor(configuration: Configuration, requestFactory?: NumberBlockOrdersApiRequestFactory, responseProcessor?: NumberBlockOrdersApiResponseProcessor) {
        this.api = new ObservableNumberBlockOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a phone number block order.
     * Create a number block order
     * @param param the request object
     */
    public createNumberBlockOrder(param: NumberBlockOrdersApiCreateNumberBlockOrderRequest, options?: Configuration): Promise<NumberBlockOrderResponse> {
        return this.api.createNumberBlockOrder(param.createNumberBlockOrderRequest,  options).toPromise();
    }

    /**
     * Get a paginated list of number block orders.
     * List number block orders
     * @param param the request object
     */
    public listNumberBlockOrders(param: NumberBlockOrdersApiListNumberBlockOrdersRequest = {}, options?: Configuration): Promise<ListNumberBlockOrdersResponse> {
        return this.api.listNumberBlockOrders(param.filterStatus, param.filterCreatedAtGt, param.filterCreatedAtLt, param.filterPhoneNumbersStartingNumber, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Get an existing phone number block order.
     * Retrieve a number block order
     * @param param the request object
     */
    public retrieveNumberBlockOrder(param: NumberBlockOrdersApiRetrieveNumberBlockOrderRequest, options?: Configuration): Promise<NumberBlockOrderResponse> {
        return this.api.retrieveNumberBlockOrder(param.numberBlockOrderId,  options).toPromise();
    }

}

import { ObservableNumberBlocksBackgroundJobsApi } from "./ObservableAPI.ts";
import { NumberBlocksBackgroundJobsApiRequestFactory, NumberBlocksBackgroundJobsApiResponseProcessor} from "../apis/NumberBlocksBackgroundJobsApi.ts";

export interface NumberBlocksBackgroundJobsApiCreatePhoneNumberBlocksJobDeletePhoneNumberBlockRequest {
    /**
     * 
     * @type PhoneNumberBlocksJobDeletePhoneNumberBlockRequest
     * @memberof NumberBlocksBackgroundJobsApicreatePhoneNumberBlocksJobDeletePhoneNumberBlock
     */
    phoneNumberBlocksJobDeletePhoneNumberBlockRequest: PhoneNumberBlocksJobDeletePhoneNumberBlockRequest
}

export interface NumberBlocksBackgroundJobsApiListPhoneNumberBlocksJobsRequest {
    /**
     * Filter the phone number blocks jobs by type.
     * @type &#39;delete_phone_number_block&#39;
     * @memberof NumberBlocksBackgroundJobsApilistPhoneNumberBlocksJobs
     */
    filterType?: 'delete_phone_number_block'
    /**
     * Filter the phone number blocks jobs by status.
     * @type &#39;pending&#39; | &#39;in_progress&#39; | &#39;completed&#39; | &#39;failed&#39;
     * @memberof NumberBlocksBackgroundJobsApilistPhoneNumberBlocksJobs
     */
    filterStatus?: 'pending' | 'in_progress' | 'completed' | 'failed'
    /**
     * The page number to load
     * @type number
     * @memberof NumberBlocksBackgroundJobsApilistPhoneNumberBlocksJobs
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NumberBlocksBackgroundJobsApilistPhoneNumberBlocksJobs
     */
    pageSize?: number
    /**
     * Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     * @type &#39;created_at&#39;
     * @memberof NumberBlocksBackgroundJobsApilistPhoneNumberBlocksJobs
     */
    sort?: 'created_at'
}

export interface NumberBlocksBackgroundJobsApiRetrievePhoneNumberBlocksJobRequest {
    /**
     * Identifies the Phone Number Blocks Job.
     * @type string
     * @memberof NumberBlocksBackgroundJobsApiretrievePhoneNumberBlocksJob
     */
    id: string
}

export class ObjectNumberBlocksBackgroundJobsApi {
    private api: ObservableNumberBlocksBackgroundJobsApi

    public constructor(configuration: Configuration, requestFactory?: NumberBlocksBackgroundJobsApiRequestFactory, responseProcessor?: NumberBlocksBackgroundJobsApiResponseProcessor) {
        this.api = new ObservableNumberBlocksBackgroundJobsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new background job to delete all the phone numbers associated with the given block. We will only consider the phone number block as deleted after all phone numbers associated with it are removed, so multiple executions of this job may be necessary in case some of the phone numbers present errors during the deletion process.
     * Deletes all numbers associated with a phone number block
     * @param param the request object
     */
    public createPhoneNumberBlocksJobDeletePhoneNumberBlock(param: NumberBlocksBackgroundJobsApiCreatePhoneNumberBlocksJobDeletePhoneNumberBlockRequest, options?: Configuration): Promise<PhoneNumberBlocksJobDeletePhoneNumberBlock> {
        return this.api.createPhoneNumberBlocksJobDeletePhoneNumberBlock(param.phoneNumberBlocksJobDeletePhoneNumberBlockRequest,  options).toPromise();
    }

    /**
     * Lists the phone number blocks jobs
     * @param param the request object
     */
    public listPhoneNumberBlocksJobs(param: NumberBlocksBackgroundJobsApiListPhoneNumberBlocksJobsRequest = {}, options?: Configuration): Promise<ListPhoneNumberBlocksBackgroundJobsResponse> {
        return this.api.listPhoneNumberBlocksJobs(param.filterType, param.filterStatus, param.pageNumber, param.pageSize, param.sort,  options).toPromise();
    }

    /**
     * Retrieves a phone number blocks job
     * @param param the request object
     */
    public retrievePhoneNumberBlocksJob(param: NumberBlocksBackgroundJobsApiRetrievePhoneNumberBlocksJobRequest, options?: Configuration): Promise<PhoneNumberBlocksJob> {
        return this.api.retrievePhoneNumberBlocksJob(param.id,  options).toPromise();
    }

}

import { ObservableNumberConfigurationsApi } from "./ObservableAPI.ts";
import { NumberConfigurationsApiRequestFactory, NumberConfigurationsApiResponseProcessor} from "../apis/NumberConfigurationsApi.ts";

export interface NumberConfigurationsApiDeletePhoneNumberRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NumberConfigurationsApideletePhoneNumber
     */
    id: string
}

export interface NumberConfigurationsApiEnableEmergencyPhoneNumberRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NumberConfigurationsApienableEmergencyPhoneNumber
     */
    id: string
    /**
     * 
     * @type PhoneNumberEnableEmergencyRequest
     * @memberof NumberConfigurationsApienableEmergencyPhoneNumber
     */
    phoneNumberEnableEmergencyRequest: PhoneNumberEnableEmergencyRequest
}

export interface NumberConfigurationsApiListPhoneNumbersRequest {
    /**
     * The page number to load
     * @type number
     * @memberof NumberConfigurationsApilistPhoneNumbers
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NumberConfigurationsApilistPhoneNumbers
     */
    pageSize?: number
    /**
     * Filter by phone number tags.
     * @type string
     * @memberof NumberConfigurationsApilistPhoneNumbers
     */
    filterTag?: string
    /**
     * Filter by phone number. Requires at least three digits.              Non-numerical characters will result in no values being returned.
     * @type string
     * @memberof NumberConfigurationsApilistPhoneNumbers
     */
    filterPhoneNumber?: string
    /**
     * Filter by phone number status.
     * @type &#39;purchase_pending&#39; | &#39;purchase_failed&#39; | &#39;port_pending&#39; | &#39;active&#39; | &#39;deleted&#39; | &#39;port_failed&#39; | &#39;emergency_only&#39; | &#39;ported_out&#39; | &#39;port_out_pending&#39;
     * @memberof NumberConfigurationsApilistPhoneNumbers
     */
    filterStatus?: 'purchase_pending' | 'purchase_failed' | 'port_pending' | 'active' | 'deleted' | 'port_failed' | 'emergency_only' | 'ported_out' | 'port_out_pending'
    /**
     * Filter by connection_id.
     * @type string
     * @memberof NumberConfigurationsApilistPhoneNumbers
     */
    filterConnectionId?: string
    /**
     * Filter contains connection name. Requires at least three characters.
     * @type string
     * @memberof NumberConfigurationsApilistPhoneNumbers
     */
    filterVoiceConnectionNameContains?: string
    /**
     * Filter starts with connection name. Requires at least three characters.
     * @type string
     * @memberof NumberConfigurationsApilistPhoneNumbers
     */
    filterVoiceConnectionNameStartsWith?: string
    /**
     * Filter ends with connection name. Requires at least three characters.
     * @type string
     * @memberof NumberConfigurationsApilistPhoneNumbers
     */
    filterVoiceConnectionNameEndsWith?: string
    /**
     * Filter by connection name.
     * @type string
     * @memberof NumberConfigurationsApilistPhoneNumbers
     */
    filterVoiceConnectionNameEq?: string
    /**
     * Filter by usage_payment_method.
     * @type &#39;pay-per-minute&#39; | &#39;channel&#39;
     * @memberof NumberConfigurationsApilistPhoneNumbers
     */
    filterUsagePaymentMethod?: 'pay-per-minute' | 'channel'
    /**
     * Filter by the billing_group_id associated with phone numbers. To filter to only phone numbers that have no billing group associated them, set the value of this filter to the string \&#39;null\&#39;.
     * @type string
     * @memberof NumberConfigurationsApilistPhoneNumbers
     */
    filterBillingGroupId?: string
    /**
     * Filter by the emergency_address_id associated with phone numbers. To filter only phone numbers that have no emergency address associated with them, set the value of this filter to the string \&#39;null\&#39;.
     * @type string
     * @memberof NumberConfigurationsApilistPhoneNumbers
     */
    filterEmergencyAddressId?: string
    /**
     * Filter numbers via the customer_reference set.
     * @type string
     * @memberof NumberConfigurationsApilistPhoneNumbers
     */
    filterCustomerReference?: string
    /**
     * Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     * @type &#39;purchased_at&#39; | &#39;phone_number&#39; | &#39;connection_name&#39; | &#39;usage_payment_method&#39;
     * @memberof NumberConfigurationsApilistPhoneNumbers
     */
    sort?: 'purchased_at' | 'phone_number' | 'connection_name' | 'usage_payment_method'
}

export interface NumberConfigurationsApiListPhoneNumbersWithMessagingSettingsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof NumberConfigurationsApilistPhoneNumbersWithMessagingSettings
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NumberConfigurationsApilistPhoneNumbersWithMessagingSettings
     */
    pageSize?: number
}

export interface NumberConfigurationsApiListPhoneNumbersWithVoiceSettingsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof NumberConfigurationsApilistPhoneNumbersWithVoiceSettings
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NumberConfigurationsApilistPhoneNumbersWithVoiceSettings
     */
    pageSize?: number
    /**
     * Filter by phone number. Requires at least three digits.              Non-numerical characters will result in no values being returned.
     * @type string
     * @memberof NumberConfigurationsApilistPhoneNumbersWithVoiceSettings
     */
    filterPhoneNumber?: string
    /**
     * Filter contains connection name. Requires at least three characters.
     * @type string
     * @memberof NumberConfigurationsApilistPhoneNumbersWithVoiceSettings
     */
    filterConnectionNameContains?: string
    /**
     * Filter numbers via the customer_reference set.
     * @type string
     * @memberof NumberConfigurationsApilistPhoneNumbersWithVoiceSettings
     */
    filterCustomerReference?: string
    /**
     * Filter by usage_payment_method.
     * @type &#39;pay-per-minute&#39; | &#39;channel&#39;
     * @memberof NumberConfigurationsApilistPhoneNumbersWithVoiceSettings
     */
    filterUsagePaymentMethod?: 'pay-per-minute' | 'channel'
    /**
     * Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     * @type &#39;purchased_at&#39; | &#39;phone_number&#39; | &#39;connection_name&#39; | &#39;usage_payment_method&#39;
     * @memberof NumberConfigurationsApilistPhoneNumbersWithVoiceSettings
     */
    sort?: 'purchased_at' | 'phone_number' | 'connection_name' | 'usage_payment_method'
}

export interface NumberConfigurationsApiRetrievePhoneNumberRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NumberConfigurationsApiretrievePhoneNumber
     */
    id: string
}

export interface NumberConfigurationsApiRetrievePhoneNumberWithMessagingSettingsRequest {
    /**
     * Identifies the type of resource.
     * @type string
     * @memberof NumberConfigurationsApiretrievePhoneNumberWithMessagingSettings
     */
    id: string
}

export interface NumberConfigurationsApiRetrievePhoneNumberWithVoiceSettingsRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NumberConfigurationsApiretrievePhoneNumberWithVoiceSettings
     */
    id: string
}

export interface NumberConfigurationsApiUpdatePhoneNumberRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NumberConfigurationsApiupdatePhoneNumber
     */
    id: string
    /**
     * Updated settings for the phone number.
     * @type UpdatePhoneNumberRequest
     * @memberof NumberConfigurationsApiupdatePhoneNumber
     */
    updatePhoneNumberRequest: UpdatePhoneNumberRequest
}

export interface NumberConfigurationsApiUpdatePhoneNumberWithMessagingSettingsRequest {
    /**
     * Identifies the type of resource.
     * @type string
     * @memberof NumberConfigurationsApiupdatePhoneNumberWithMessagingSettings
     */
    id: string
    /**
     * Updated messaging settings for the phone number
     * @type UpdatePhoneNumberMessagingSettingsRequest
     * @memberof NumberConfigurationsApiupdatePhoneNumberWithMessagingSettings
     */
    updatePhoneNumberMessagingSettingsRequest: UpdatePhoneNumberMessagingSettingsRequest
}

export interface NumberConfigurationsApiUpdatePhoneNumberWithVoiceSettingsRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof NumberConfigurationsApiupdatePhoneNumberWithVoiceSettings
     */
    id: string
    /**
     * Updated voice settings for the phone number.
     * @type UpdatePhoneNumberVoiceSettingsRequest
     * @memberof NumberConfigurationsApiupdatePhoneNumberWithVoiceSettings
     */
    updatePhoneNumberVoiceSettingsRequest: UpdatePhoneNumberVoiceSettingsRequest
}

export class ObjectNumberConfigurationsApi {
    private api: ObservableNumberConfigurationsApi

    public constructor(configuration: Configuration, requestFactory?: NumberConfigurationsApiRequestFactory, responseProcessor?: NumberConfigurationsApiResponseProcessor) {
        this.api = new ObservableNumberConfigurationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a phone number
     * @param param the request object
     */
    public deletePhoneNumber(param: NumberConfigurationsApiDeletePhoneNumberRequest, options?: Configuration): Promise<PhoneNumberResponse1> {
        return this.api.deletePhoneNumber(param.id,  options).toPromise();
    }

    /**
     * Enable emergency for a phone number
     * @param param the request object
     */
    public enableEmergencyPhoneNumber(param: NumberConfigurationsApiEnableEmergencyPhoneNumberRequest, options?: Configuration): Promise<PhoneNumberEnableEmergency> {
        return this.api.enableEmergencyPhoneNumber(param.id, param.phoneNumberEnableEmergencyRequest,  options).toPromise();
    }

    /**
     * List phone numbers
     * @param param the request object
     */
    public listPhoneNumbers(param: NumberConfigurationsApiListPhoneNumbersRequest = {}, options?: Configuration): Promise<ListPhoneNumbersResponse> {
        return this.api.listPhoneNumbers(param.pageNumber, param.pageSize, param.filterTag, param.filterPhoneNumber, param.filterStatus, param.filterConnectionId, param.filterVoiceConnectionNameContains, param.filterVoiceConnectionNameStartsWith, param.filterVoiceConnectionNameEndsWith, param.filterVoiceConnectionNameEq, param.filterUsagePaymentMethod, param.filterBillingGroupId, param.filterEmergencyAddressId, param.filterCustomerReference, param.sort,  options).toPromise();
    }

    /**
     * List phone numbers with messaging settings
     * @param param the request object
     */
    public listPhoneNumbersWithMessagingSettings(param: NumberConfigurationsApiListPhoneNumbersWithMessagingSettingsRequest = {}, options?: Configuration): Promise<ListMessagingSettingsResponse> {
        return this.api.listPhoneNumbersWithMessagingSettings(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * List phone numbers with voice settings
     * @param param the request object
     */
    public listPhoneNumbersWithVoiceSettings(param: NumberConfigurationsApiListPhoneNumbersWithVoiceSettingsRequest = {}, options?: Configuration): Promise<ListPhoneNumbersWithVoiceSettingsResponse> {
        return this.api.listPhoneNumbersWithVoiceSettings(param.pageNumber, param.pageSize, param.filterPhoneNumber, param.filterConnectionNameContains, param.filterCustomerReference, param.filterUsagePaymentMethod, param.sort,  options).toPromise();
    }

    /**
     * Retrieve a phone number
     * @param param the request object
     */
    public retrievePhoneNumber(param: NumberConfigurationsApiRetrievePhoneNumberRequest, options?: Configuration): Promise<PhoneNumberResponse> {
        return this.api.retrievePhoneNumber(param.id,  options).toPromise();
    }

    /**
     * Retrieve a phone number with messaging settings
     * @param param the request object
     */
    public retrievePhoneNumberWithMessagingSettings(param: NumberConfigurationsApiRetrievePhoneNumberWithMessagingSettingsRequest, options?: Configuration): Promise<RetrieveMessagingSettingsResponse> {
        return this.api.retrievePhoneNumberWithMessagingSettings(param.id,  options).toPromise();
    }

    /**
     * Retrieve a phone number with voice settings
     * @param param the request object
     */
    public retrievePhoneNumberWithVoiceSettings(param: NumberConfigurationsApiRetrievePhoneNumberWithVoiceSettingsRequest, options?: Configuration): Promise<RetrievePhoneNumberVoiceResponse> {
        return this.api.retrievePhoneNumberWithVoiceSettings(param.id,  options).toPromise();
    }

    /**
     * Update a phone number
     * @param param the request object
     */
    public updatePhoneNumber(param: NumberConfigurationsApiUpdatePhoneNumberRequest, options?: Configuration): Promise<PhoneNumberResponse> {
        return this.api.updatePhoneNumber(param.id, param.updatePhoneNumberRequest,  options).toPromise();
    }

    /**
     * Update a phone number with messaging settings
     * @param param the request object
     */
    public updatePhoneNumberWithMessagingSettings(param: NumberConfigurationsApiUpdatePhoneNumberWithMessagingSettingsRequest, options?: Configuration): Promise<RetrieveMessagingSettingsResponse> {
        return this.api.updatePhoneNumberWithMessagingSettings(param.id, param.updatePhoneNumberMessagingSettingsRequest,  options).toPromise();
    }

    /**
     * Update a phone number with voice settings
     * @param param the request object
     */
    public updatePhoneNumberWithVoiceSettings(param: NumberConfigurationsApiUpdatePhoneNumberWithVoiceSettingsRequest, options?: Configuration): Promise<RetrievePhoneNumberVoiceResponse> {
        return this.api.updatePhoneNumberWithVoiceSettings(param.id, param.updatePhoneNumberVoiceSettingsRequest,  options).toPromise();
    }

}

import { ObservableNumberLookupApi } from "./ObservableAPI.ts";
import { NumberLookupApiRequestFactory, NumberLookupApiResponseProcessor} from "../apis/NumberLookupApi.ts";

export interface NumberLookupApiNumberLookupRequest {
    /**
     * The phone number to be looked up
     * @type string
     * @memberof NumberLookupApinumberLookup
     */
    phoneNumber: string
    /**
     * Specifies the type of number lookup to be performed
     * @type &#39;carrier&#39; | &#39;caller-name&#39;
     * @memberof NumberLookupApinumberLookup
     */
    type?: 'carrier' | 'caller-name'
}

export class ObjectNumberLookupApi {
    private api: ObservableNumberLookupApi

    public constructor(configuration: Configuration, requestFactory?: NumberLookupApiRequestFactory, responseProcessor?: NumberLookupApiResponseProcessor) {
        this.api = new ObservableNumberLookupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns information about the provided phone number.
     * Lookup phone number data
     * @param param the request object
     */
    public numberLookup(param: NumberLookupApiNumberLookupRequest, options?: Configuration): Promise<NumberLookupResponse> {
        return this.api.numberLookup(param.phoneNumber, param.type,  options).toPromise();
    }

}

import { ObservableNumberOrderDocumentsApi } from "./ObservableAPI.ts";
import { NumberOrderDocumentsApiRequestFactory, NumberOrderDocumentsApiResponseProcessor} from "../apis/NumberOrderDocumentsApi.ts";

export interface NumberOrderDocumentsApiCreateNumberOrderDocumentRequest {
    /**
     * 
     * @type CreateNumberOrderDocumentRequest
     * @memberof NumberOrderDocumentsApicreateNumberOrderDocument
     */
    createNumberOrderDocumentRequest: CreateNumberOrderDocumentRequest
}

export interface NumberOrderDocumentsApiListNumberOrderDocumentsRequest {
    /**
     * Filter number order documents by &#x60;requirement_id&#x60;.
     * @type string
     * @memberof NumberOrderDocumentsApilistNumberOrderDocuments
     */
    filterRequirementId?: string
    /**
     * Filter number order documents after this datetime.
     * @type string
     * @memberof NumberOrderDocumentsApilistNumberOrderDocuments
     */
    filterCreatedAtGt?: string
    /**
     * Filter number order documents from before this datetime.
     * @type string
     * @memberof NumberOrderDocumentsApilistNumberOrderDocuments
     */
    filterCreatedAtLt?: string
    /**
     * The page number to load
     * @type number
     * @memberof NumberOrderDocumentsApilistNumberOrderDocuments
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NumberOrderDocumentsApilistNumberOrderDocuments
     */
    pageSize?: number
}

export interface NumberOrderDocumentsApiRetrieveNumberOrderDocumentRequest {
    /**
     * The number order document ID.
     * @type string
     * @memberof NumberOrderDocumentsApiretrieveNumberOrderDocument
     */
    numberOrderDocumentId: string
}

export interface NumberOrderDocumentsApiUpdateNumberOrderDocumentRequest {
    /**
     * The number order document ID.
     * @type string
     * @memberof NumberOrderDocumentsApiupdateNumberOrderDocument
     */
    numberOrderDocumentId: string
    /**
     * 
     * @type UpdateNumberOrderDocumentRequest
     * @memberof NumberOrderDocumentsApiupdateNumberOrderDocument
     */
    updateNumberOrderDocumentRequest: UpdateNumberOrderDocumentRequest
}

export class ObjectNumberOrderDocumentsApi {
    private api: ObservableNumberOrderDocumentsApi

    public constructor(configuration: Configuration, requestFactory?: NumberOrderDocumentsApiRequestFactory, responseProcessor?: NumberOrderDocumentsApiResponseProcessor) {
        this.api = new ObservableNumberOrderDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload a phone number order document.
     * Create a number order document
     * @param param the request object
     */
    public createNumberOrderDocument(param: NumberOrderDocumentsApiCreateNumberOrderDocumentRequest, options?: Configuration): Promise<NumberOrderDocumentResponse> {
        return this.api.createNumberOrderDocument(param.createNumberOrderDocumentRequest,  options).toPromise();
    }

    /**
     * Gets a paginated list of number order documents.
     * List number order documents
     * @param param the request object
     */
    public listNumberOrderDocuments(param: NumberOrderDocumentsApiListNumberOrderDocumentsRequest = {}, options?: Configuration): Promise<ListNumberOrderDocumentsResponse> {
        return this.api.listNumberOrderDocuments(param.filterRequirementId, param.filterCreatedAtGt, param.filterCreatedAtLt, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Gets a single number order document.
     * Retrieve a number order document
     * @param param the request object
     */
    public retrieveNumberOrderDocument(param: NumberOrderDocumentsApiRetrieveNumberOrderDocumentRequest, options?: Configuration): Promise<NumberOrderDocumentResponse> {
        return this.api.retrieveNumberOrderDocument(param.numberOrderDocumentId,  options).toPromise();
    }

    /**
     * Updates a number order document.
     * Update a number order document
     * @param param the request object
     */
    public updateNumberOrderDocument(param: NumberOrderDocumentsApiUpdateNumberOrderDocumentRequest, options?: Configuration): Promise<NumberOrderDocumentResponse> {
        return this.api.updateNumberOrderDocument(param.numberOrderDocumentId, param.updateNumberOrderDocumentRequest,  options).toPromise();
    }

}

import { ObservableNumberOrdersApi } from "./ObservableAPI.ts";
import { NumberOrdersApiRequestFactory, NumberOrdersApiResponseProcessor} from "../apis/NumberOrdersApi.ts";

export interface NumberOrdersApiCreateCommentRequest {
    /**
     * 
     * @type Comment
     * @memberof NumberOrdersApicreateComment
     */
    comment: Comment
}

export interface NumberOrdersApiCreateNumberOrderRequest {
    /**
     * 
     * @type CreateNumberOrderRequest
     * @memberof NumberOrdersApicreateNumberOrder
     */
    createNumberOrderRequest: CreateNumberOrderRequest
}

export interface NumberOrdersApiListCommentsRequest {
    /**
     * Record type that the comment relates to i.e number_order, sub_number_order or number_order_phone_number
     * @type string
     * @memberof NumberOrdersApilistComments
     */
    filterCommentRecordType: string
    /**
     * ID of the record the comments relate to
     * @type string
     * @memberof NumberOrdersApilistComments
     */
    filterCommentRecordId: string
}

export interface NumberOrdersApiListNumberOrdersRequest {
    /**
     * Filter number orders by status.
     * @type string
     * @memberof NumberOrdersApilistNumberOrders
     */
    filterStatus?: string
    /**
     * Filter number orders later than this value.
     * @type string
     * @memberof NumberOrdersApilistNumberOrders
     */
    filterCreatedAtGt?: string
    /**
     * Filter number orders earlier than this value.
     * @type string
     * @memberof NumberOrdersApilistNumberOrders
     */
    filterCreatedAtLt?: string
    /**
     * Filter number order with this amount of numbers
     * @type string
     * @memberof NumberOrdersApilistNumberOrders
     */
    filterPhoneNumbersCount?: string
    /**
     * Filter number orders via the customer reference set.
     * @type string
     * @memberof NumberOrdersApilistNumberOrders
     */
    filterCustomerReference?: string
    /**
     * Filter number orders by requirements met.
     * @type boolean
     * @memberof NumberOrdersApilistNumberOrders
     */
    filterRequirementsMet?: boolean
    /**
     * The page number to load
     * @type number
     * @memberof NumberOrdersApilistNumberOrders
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NumberOrdersApilistNumberOrders
     */
    pageSize?: number
}

export interface NumberOrdersApiListRegulartoryRequirementsRequest {
    /**
     * Record type phone number/ phone numbers
     * @type string
     * @memberof NumberOrdersApilistRegulartoryRequirements
     */
    filterPhoneNumber: string
}

export interface NumberOrdersApiListSubNumberOrdersRequest {
    /**
     * User ID of the user who owns the sub number order
     * @type string
     * @memberof NumberOrdersApilistSubNumberOrders
     */
    filterUserId?: string
    /**
     * ID of the number order the sub number order belongs to
     * @type string
     * @memberof NumberOrdersApilistSubNumberOrders
     */
    filterOrderRequestId?: string
    /**
     * ISO alpha-2 country code.
     * @type string
     * @memberof NumberOrdersApilistSubNumberOrders
     */
    filterCountryCode?: string
    /**
     * Phone Number Type
     * @type string
     * @memberof NumberOrdersApilistSubNumberOrders
     */
    filterPhoneNumberType?: string
    /**
     * Amount of numbers in the sub number order
     * @type number
     * @memberof NumberOrdersApilistSubNumberOrders
     */
    filterPhoneNumbersCount?: number
}

export interface NumberOrdersApiMarkCommentReadRequest {
    /**
     * The comment ID.
     * @type string
     * @memberof NumberOrdersApimarkCommentRead
     */
    id: string
}

export interface NumberOrdersApiRetrieveCommentRequest {
    /**
     * The comment ID.
     * @type string
     * @memberof NumberOrdersApiretrieveComment
     */
    id: string
}

export interface NumberOrdersApiRetrieveNumberOrderRequest {
    /**
     * The number order ID.
     * @type string
     * @memberof NumberOrdersApiretrieveNumberOrder
     */
    numberOrderId: string
}

export interface NumberOrdersApiRetrieveNumberOrderPhoneNumberRequest {
    /**
     * The number order phone number ID.
     * @type string
     * @memberof NumberOrdersApiretrieveNumberOrderPhoneNumber
     */
    numberOrderPhoneNumberId: string
}

export interface NumberOrdersApiRetrieveNumberOrderPhoneNumbersRequest {
}

export interface NumberOrdersApiRetrieveSubNumberOrderRequest {
    /**
     * The sub number order ID.
     * @type string
     * @memberof NumberOrdersApiretrieveSubNumberOrder
     */
    subNumberOrderId: string
    /**
     * Include the first 50 phone number objects in the results
     * @type boolean
     * @memberof NumberOrdersApiretrieveSubNumberOrder
     */
    filterIncludePhoneNumbers?: boolean
}

export interface NumberOrdersApiUpdateNumberOrderRequest {
    /**
     * The number order ID.
     * @type string
     * @memberof NumberOrdersApiupdateNumberOrder
     */
    numberOrderId: string
    /**
     * 
     * @type UpdateNumberOrderRequest
     * @memberof NumberOrdersApiupdateNumberOrder
     */
    updateNumberOrderRequest: UpdateNumberOrderRequest
}

export interface NumberOrdersApiUpdateNumberOrderPhoneNumberRequest {
    /**
     * The number order phone number ID.
     * @type string
     * @memberof NumberOrdersApiupdateNumberOrderPhoneNumber
     */
    numberOrderPhoneNumberId: string
    /**
     * 
     * @type UpdateNumberOrderPhoneNumberRequest
     * @memberof NumberOrdersApiupdateNumberOrderPhoneNumber
     */
    updateNumberOrderPhoneNumberRequest: UpdateNumberOrderPhoneNumberRequest
}

export interface NumberOrdersApiUpdateSubNumberOrderRequest {
    /**
     * The sub number order ID.
     * @type string
     * @memberof NumberOrdersApiupdateSubNumberOrder
     */
    subNumberOrderId: string
    /**
     * 
     * @type UpdateSubNumberOrderRequest
     * @memberof NumberOrdersApiupdateSubNumberOrder
     */
    updateSubNumberOrderRequest: UpdateSubNumberOrderRequest
}

export class ObjectNumberOrdersApi {
    private api: ObservableNumberOrdersApi

    public constructor(configuration: Configuration, requestFactory?: NumberOrdersApiRequestFactory, responseProcessor?: NumberOrdersApiResponseProcessor) {
        this.api = new ObservableNumberOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a comment
     * @param param the request object
     */
    public createComment(param: NumberOrdersApiCreateCommentRequest, options?: Configuration): Promise<CreateComment200Response> {
        return this.api.createComment(param.comment,  options).toPromise();
    }

    /**
     * Creates a phone number order.
     * Create a number order
     * @param param the request object
     */
    public createNumberOrder(param: NumberOrdersApiCreateNumberOrderRequest, options?: Configuration): Promise<NumberOrderResponse> {
        return this.api.createNumberOrder(param.createNumberOrderRequest,  options).toPromise();
    }

    /**
     * Retrieve all comments
     * @param param the request object
     */
    public listComments(param: NumberOrdersApiListCommentsRequest, options?: Configuration): Promise<ListComments200Response> {
        return this.api.listComments(param.filterCommentRecordType, param.filterCommentRecordId,  options).toPromise();
    }

    /**
     * Get a paginated list of number orders.
     * List number orders
     * @param param the request object
     */
    public listNumberOrders(param: NumberOrdersApiListNumberOrdersRequest = {}, options?: Configuration): Promise<ListNumberOrdersResponse> {
        return this.api.listNumberOrders(param.filterStatus, param.filterCreatedAtGt, param.filterCreatedAtLt, param.filterPhoneNumbersCount, param.filterCustomerReference, param.filterRequirementsMet, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieve regulartory requirements
     * @param param the request object
     */
    public listRegulartoryRequirements(param: NumberOrdersApiListRegulartoryRequirementsRequest, options?: Configuration): Promise<ListRegulartoryRequirements200Response> {
        return this.api.listRegulartoryRequirements(param.filterPhoneNumber,  options).toPromise();
    }

    /**
     * Get a paginated list of sub number orders.
     * List sub number orders
     * @param param the request object
     */
    public listSubNumberOrders(param: NumberOrdersApiListSubNumberOrdersRequest = {}, options?: Configuration): Promise<ListSubNumberOrdersResponse> {
        return this.api.listSubNumberOrders(param.filterUserId, param.filterOrderRequestId, param.filterCountryCode, param.filterPhoneNumberType, param.filterPhoneNumbersCount,  options).toPromise();
    }

    /**
     * Mark a comment as read
     * @param param the request object
     */
    public markCommentRead(param: NumberOrdersApiMarkCommentReadRequest, options?: Configuration): Promise<MarkCommentRead200Response> {
        return this.api.markCommentRead(param.id,  options).toPromise();
    }

    /**
     * Retrieve a comment
     * @param param the request object
     */
    public retrieveComment(param: NumberOrdersApiRetrieveCommentRequest, options?: Configuration): Promise<CreateComment200Response> {
        return this.api.retrieveComment(param.id,  options).toPromise();
    }

    /**
     * Get an existing phone number order.
     * Retrieve a number order
     * @param param the request object
     */
    public retrieveNumberOrder(param: NumberOrdersApiRetrieveNumberOrderRequest, options?: Configuration): Promise<NumberOrderResponse> {
        return this.api.retrieveNumberOrder(param.numberOrderId,  options).toPromise();
    }

    /**
     * Get an existing number order phone number.
     * Retrieve a number order phone number.
     * @param param the request object
     */
    public retrieveNumberOrderPhoneNumber(param: NumberOrdersApiRetrieveNumberOrderPhoneNumberRequest, options?: Configuration): Promise<NumberOrderPhoneNumberResponse> {
        return this.api.retrieveNumberOrderPhoneNumber(param.numberOrderPhoneNumberId,  options).toPromise();
    }

    /**
     * Get a list of phone numbers associated to orders.
     * Retrieve a list of phone numbers associated to orders
     * @param param the request object
     */
    public retrieveNumberOrderPhoneNumbers(param: NumberOrdersApiRetrieveNumberOrderPhoneNumbersRequest = {}, options?: Configuration): Promise<ListNumberOrderPhoneNumbersResponse> {
        return this.api.retrieveNumberOrderPhoneNumbers( options).toPromise();
    }

    /**
     * Get an existing sub number order.
     * Retrieve a sub number order
     * @param param the request object
     */
    public retrieveSubNumberOrder(param: NumberOrdersApiRetrieveSubNumberOrderRequest, options?: Configuration): Promise<SubNumberOrderResponse> {
        return this.api.retrieveSubNumberOrder(param.subNumberOrderId, param.filterIncludePhoneNumbers,  options).toPromise();
    }

    /**
     * Updates a phone number order.
     * Update a number order
     * @param param the request object
     */
    public updateNumberOrder(param: NumberOrdersApiUpdateNumberOrderRequest, options?: Configuration): Promise<NumberOrderResponse> {
        return this.api.updateNumberOrder(param.numberOrderId, param.updateNumberOrderRequest,  options).toPromise();
    }

    /**
     * Updates a number order phone number.
     * Update a number order phone number.
     * @param param the request object
     */
    public updateNumberOrderPhoneNumber(param: NumberOrdersApiUpdateNumberOrderPhoneNumberRequest, options?: Configuration): Promise<NumberOrderPhoneNumberResponse> {
        return this.api.updateNumberOrderPhoneNumber(param.numberOrderPhoneNumberId, param.updateNumberOrderPhoneNumberRequest,  options).toPromise();
    }

    /**
     * Updates a sub number order.
     * Update a sub number order
     * @param param the request object
     */
    public updateSubNumberOrder(param: NumberOrdersApiUpdateSubNumberOrderRequest, options?: Configuration): Promise<SubNumberOrderResponse> {
        return this.api.updateSubNumberOrder(param.subNumberOrderId, param.updateSubNumberOrderRequest,  options).toPromise();
    }

}

import { ObservableNumberPortoutApi } from "./ObservableAPI.ts";
import { NumberPortoutApiRequestFactory, NumberPortoutApiResponseProcessor} from "../apis/NumberPortoutApi.ts";

export interface NumberPortoutApiFindPortoutCommentsRequest {
    /**
     * Portout id
     * @type string
     * @memberof NumberPortoutApifindPortoutComments
     */
    id: string
}

export interface NumberPortoutApiFindPortoutRequestRequest {
    /**
     * Portout id
     * @type string
     * @memberof NumberPortoutApifindPortoutRequest
     */
    id: string
}

export interface NumberPortoutApiGetPortRequestSupportingDocumentsRequest {
    /**
     * Portout id
     * @type string
     * @memberof NumberPortoutApigetPortRequestSupportingDocuments
     */
    id: string
}

export interface NumberPortoutApiListPortoutRequestRequest {
    /**
     * Filter by new carrier name.
     * @type string
     * @memberof NumberPortoutApilistPortoutRequest
     */
    filterCarrierName?: string
    /**
     * Filter by new carrier spid.
     * @type string
     * @memberof NumberPortoutApilistPortoutRequest
     */
    filterSpid?: string
    /**
     * Filter by portout status.
     * @type &#39;pending&#39; | &#39;authorized&#39; | &#39;ported&#39; | &#39;rejected&#39; | &#39;rejected-pending&#39; | &#39;canceled&#39;
     * @memberof NumberPortoutApilistPortoutRequest
     */
    filterStatus?: 'pending' | 'authorized' | 'ported' | 'rejected' | 'rejected-pending' | 'canceled'
    /**
     * The page number to load
     * @type number
     * @memberof NumberPortoutApilistPortoutRequest
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NumberPortoutApilistPortoutRequest
     */
    pageSize?: number
}

export interface NumberPortoutApiPostPortRequestCommentRequest {
    /**
     * Portout id
     * @type string
     * @memberof NumberPortoutApipostPortRequestComment
     */
    id: string
    /**
     * 
     * @type PostPortRequestCommentRequest
     * @memberof NumberPortoutApipostPortRequestComment
     */
    postPortRequestCommentRequest: PostPortRequestCommentRequest
}

export interface NumberPortoutApiPostPortRequestSupportingDocumentsRequest {
    /**
     * Portout id
     * @type string
     * @memberof NumberPortoutApipostPortRequestSupportingDocuments
     */
    id: string
    /**
     * 
     * @type PostPortRequestSupportingDocumentsRequest
     * @memberof NumberPortoutApipostPortRequestSupportingDocuments
     */
    postPortRequestSupportingDocumentsRequest: PostPortRequestSupportingDocumentsRequest
}

export interface NumberPortoutApiUpdatePortoutRequestRequest {
    /**
     * Portout id
     * @type string
     * @memberof NumberPortoutApiupdatePortoutRequest
     */
    id: string
    /**
     * Updated portout status
     * @type &#39;authorized&#39; | &#39;rejected-pending&#39;
     * @memberof NumberPortoutApiupdatePortoutRequest
     */
    status: 'authorized' | 'rejected-pending'
    /**
     * 
     * @type UpdatePortoutRequestRequest
     * @memberof NumberPortoutApiupdatePortoutRequest
     */
    updatePortoutRequestRequest: UpdatePortoutRequestRequest
}

export class ObjectNumberPortoutApi {
    private api: ObservableNumberPortoutApi

    public constructor(configuration: Configuration, requestFactory?: NumberPortoutApiRequestFactory, responseProcessor?: NumberPortoutApiResponseProcessor) {
        this.api = new ObservableNumberPortoutApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of comments for a portout request.
     * List all comments for a portout request
     * @param param the request object
     */
    public findPortoutComments(param: NumberPortoutApiFindPortoutCommentsRequest, options?: Configuration): Promise<FindPortoutComments200Response> {
        return this.api.findPortoutComments(param.id,  options).toPromise();
    }

    /**
     * Returns the portout request based on the ID provided
     * Get a portout request
     * @param param the request object
     */
    public findPortoutRequest(param: NumberPortoutApiFindPortoutRequestRequest, options?: Configuration): Promise<FindPortoutRequest200Response> {
        return this.api.findPortoutRequest(param.id,  options).toPromise();
    }

    /**
     * List every supporting documents for a portout request.
     * List supporting documents on a portout request
     * @param param the request object
     */
    public getPortRequestSupportingDocuments(param: NumberPortoutApiGetPortRequestSupportingDocumentsRequest, options?: Configuration): Promise<GetPortRequestSupportingDocuments201Response> {
        return this.api.getPortRequestSupportingDocuments(param.id,  options).toPromise();
    }

    /**
     * Returns the portout requests according to filters
     * List portout requests
     * @param param the request object
     */
    public listPortoutRequest(param: NumberPortoutApiListPortoutRequestRequest = {}, options?: Configuration): Promise<ListPortoutRequest200Response> {
        return this.api.listPortoutRequest(param.filterCarrierName, param.filterSpid, param.filterStatus, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Creates a comment on a portout request.
     * Create a comment on a portout request
     * @param param the request object
     */
    public postPortRequestComment(param: NumberPortoutApiPostPortRequestCommentRequest, options?: Configuration): Promise<PostPortRequestComment201Response> {
        return this.api.postPortRequestComment(param.id, param.postPortRequestCommentRequest,  options).toPromise();
    }

    /**
     * Creates a list of supporting documents on a portout request.
     * Create a list of supporting documents on a portout request
     * @param param the request object
     */
    public postPortRequestSupportingDocuments(param: NumberPortoutApiPostPortRequestSupportingDocumentsRequest, options?: Configuration): Promise<GetPortRequestSupportingDocuments201Response> {
        return this.api.postPortRequestSupportingDocuments(param.id, param.postPortRequestSupportingDocumentsRequest,  options).toPromise();
    }

    /**
     * Authorize or reject portout request
     * Update Status
     * @param param the request object
     */
    public updatePortoutRequest(param: NumberPortoutApiUpdatePortoutRequestRequest, options?: Configuration): Promise<FindPortoutRequest200Response> {
        return this.api.updatePortoutRequest(param.id, param.status, param.updatePortoutRequestRequest,  options).toPromise();
    }

}

import { ObservableNumberReservationsApi } from "./ObservableAPI.ts";
import { NumberReservationsApiRequestFactory, NumberReservationsApiResponseProcessor} from "../apis/NumberReservationsApi.ts";

export interface NumberReservationsApiCreateNumberReservationRequest {
    /**
     * 
     * @type CreateNumberReservationRequest
     * @memberof NumberReservationsApicreateNumberReservation
     */
    createNumberReservationRequest: CreateNumberReservationRequest
}

export interface NumberReservationsApiExtendNumberReservationExpiryTimeRequest {
    /**
     * The number reservation ID.
     * @type string
     * @memberof NumberReservationsApiextendNumberReservationExpiryTime
     */
    numberReservationId: string
}

export interface NumberReservationsApiListNumberReservationsRequest {
    /**
     * Filter number reservations by status.
     * @type string
     * @memberof NumberReservationsApilistNumberReservations
     */
    filterStatus?: string
    /**
     * Filter number reservations later than this value.
     * @type string
     * @memberof NumberReservationsApilistNumberReservations
     */
    filterCreatedAtGt?: string
    /**
     * Filter number reservations earlier than this value.
     * @type string
     * @memberof NumberReservationsApilistNumberReservations
     */
    filterCreatedAtLt?: string
    /**
     * Filter number reservations having these phone numbers.
     * @type string
     * @memberof NumberReservationsApilistNumberReservations
     */
    filterPhoneNumbersPhoneNumber?: string
    /**
     * Filter number reservations via the customer reference set.
     * @type string
     * @memberof NumberReservationsApilistNumberReservations
     */
    filterCustomerReference?: string
    /**
     * The page number to load
     * @type number
     * @memberof NumberReservationsApilistNumberReservations
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof NumberReservationsApilistNumberReservations
     */
    pageSize?: number
}

export interface NumberReservationsApiRetrieveNumberReservationRequest {
    /**
     * The number reservation ID.
     * @type string
     * @memberof NumberReservationsApiretrieveNumberReservation
     */
    numberReservationId: string
}

export class ObjectNumberReservationsApi {
    private api: ObservableNumberReservationsApi

    public constructor(configuration: Configuration, requestFactory?: NumberReservationsApiRequestFactory, responseProcessor?: NumberReservationsApiResponseProcessor) {
        this.api = new ObservableNumberReservationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Phone Number Reservation for multiple numbers.
     * Create a number reservation
     * @param param the request object
     */
    public createNumberReservation(param: NumberReservationsApiCreateNumberReservationRequest, options?: Configuration): Promise<NumberReservationResponse> {
        return this.api.createNumberReservation(param.createNumberReservationRequest,  options).toPromise();
    }

    /**
     * Extends reservation expiry time on all phone numbers.
     * Extend a number reservation
     * @param param the request object
     */
    public extendNumberReservationExpiryTime(param: NumberReservationsApiExtendNumberReservationExpiryTimeRequest, options?: Configuration): Promise<NumberReservationResponse> {
        return this.api.extendNumberReservationExpiryTime(param.numberReservationId,  options).toPromise();
    }

    /**
     * Gets a paginated list of phone number reservations.
     * List number reservations
     * @param param the request object
     */
    public listNumberReservations(param: NumberReservationsApiListNumberReservationsRequest = {}, options?: Configuration): Promise<ListNumberReservationsResponse> {
        return this.api.listNumberReservations(param.filterStatus, param.filterCreatedAtGt, param.filterCreatedAtLt, param.filterPhoneNumbersPhoneNumber, param.filterCustomerReference, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Gets a single phone number reservation.
     * Retrieve a number reservation
     * @param param the request object
     */
    public retrieveNumberReservation(param: NumberReservationsApiRetrieveNumberReservationRequest, options?: Configuration): Promise<NumberReservationResponse> {
        return this.api.retrieveNumberReservation(param.numberReservationId,  options).toPromise();
    }

}

import { ObservableNumberSearchApi } from "./ObservableAPI.ts";
import { NumberSearchApiRequestFactory, NumberSearchApiResponseProcessor} from "../apis/NumberSearchApi.ts";

export interface NumberSearchApiListAvailablePhoneNumberBlocksRequest {
    /**
     * Filter number blocks that start with a pattern (meant to be used after &#x60;national_destination_code&#x60; filter has been set).
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumberBlocks
     */
    filterPhoneNumberStartsWith?: string
    /**
     * Filter numbers ending with a pattern.
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumberBlocks
     */
    filterPhoneNumberEndsWith?: string
    /**
     * Filter numbers containing a pattern.
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumberBlocks
     */
    filterPhoneNumberContains?: string
    /**
     * Filter phone numbers by city.
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumberBlocks
     */
    filterLocality?: string
    /**
     * Filter phone numbers by US state/CA province.
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumberBlocks
     */
    filterAdministrativeArea?: string
    /**
     * Filter phone numbers by ISO alpha-2 country code.
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumberBlocks
     */
    filterCountryCode?: string
    /**
     * Filter by the national destination code of the number. This filter is only applicable to North American numbers.
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumberBlocks
     */
    filterNationalDestinationCode?: string
    /**
     * Filter phone numbers by NANP rate center. This filter is only applicable to North American numbers.
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumberBlocks
     */
    filterRateCenter?: string
    /**
     * Filter phone numbers by number type.
     * @type &#39;toll-free&#39;
     * @memberof NumberSearchApilistAvailablePhoneNumberBlocks
     */
    filterNumberType?: 'toll-free'
    /**
     * Filter if the phone number should be used for voice, fax, mms, sms, emergency.
     * @type Array&lt;&#39;sms&#39; | &#39;mms&#39; | &#39;voice&#39; | &#39;fax&#39; | &#39;emergency&#39;&gt;
     * @memberof NumberSearchApilistAvailablePhoneNumberBlocks
     */
    filterFeatures?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>
    /**
     * Filter number blocks by minimum blocks size
     * @type number
     * @memberof NumberSearchApilistAvailablePhoneNumberBlocks
     */
    filterMinimumBlockSize?: number
    /**
     * Limits the number of results.
     * @type number
     * @memberof NumberSearchApilistAvailablePhoneNumberBlocks
     */
    filterLimit?: number
}

export interface NumberSearchApiListAvailablePhoneNumbersRequest {
    /**
     * Filter numbers starting with a pattern (exclude NDC from start of this filter if used with &#x60;national_destination_code&#x60; filter).
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumbers
     */
    filterPhoneNumberStartsWith?: string
    /**
     * Filter numbers ending with a pattern (max length of 4 digits if used with &#x60;national_destination_code&#x60; filter).
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumbers
     */
    filterPhoneNumberEndsWith?: string
    /**
     * Filter numbers containing a pattern (must be used with &#x60;national_destination_code&#x60; filter and only searches within last 4 digits).
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumbers
     */
    filterPhoneNumberContains?: string
    /**
     * Filter phone numbers by city.
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumbers
     */
    filterLocality?: string
    /**
     * Filter phone numbers by US state/CA province.
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumbers
     */
    filterAdministrativeArea?: string
    /**
     * Filter phone numbers by ISO alpha-2 country code.
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumbers
     */
    filterCountryCode?: string
    /**
     * Filter by the national destination code of the number. This filter is only applicable to North American numbers.
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumbers
     */
    filterNationalDestinationCode?: string
    /**
     * Filter phone numbers by NANP rate center. This filter is only applicable to North American numbers.
     * @type string
     * @memberof NumberSearchApilistAvailablePhoneNumbers
     */
    filterRateCenter?: string
    /**
     * Filter phone numbers by number type.
     * @type &#39;local&#39; | &#39;toll_free&#39; | &#39;mobile&#39; | &#39;national&#39; | &#39;shared_cost&#39; | &#39;landline&#39;
     * @memberof NumberSearchApilistAvailablePhoneNumbers
     */
    filterPhoneNumberType?: 'local' | 'toll_free' | 'mobile' | 'national' | 'shared_cost' | 'landline'
    /**
     * Filter if the phone number should be used for voice, fax, mms, sms, emergency.
     * @type Array&lt;&#39;sms&#39; | &#39;mms&#39; | &#39;voice&#39; | &#39;fax&#39; | &#39;emergency&#39;&gt;
     * @memberof NumberSearchApilistAvailablePhoneNumbers
     */
    filterFeatures?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>
    /**
     * Limits the number of results.
     * @type number
     * @memberof NumberSearchApilistAvailablePhoneNumbers
     */
    filterLimit?: number
    /**
     * Filter to determine if best effort results should be included. Only available in NANPA countries.
     * @type boolean
     * @memberof NumberSearchApilistAvailablePhoneNumbers
     */
    filterBestEffort?: boolean
    /**
     * Filter to exclude phone numbers that need additional time after to purchase to receive phone calls. Only available for toll-free numbers.
     * @type boolean
     * @memberof NumberSearchApilistAvailablePhoneNumbers
     */
    filterQuickship?: boolean
    /**
     * Filter to exclude phone numbers that cannot be reserved before purchase.
     * @type boolean
     * @memberof NumberSearchApilistAvailablePhoneNumbers
     */
    filterReservable?: boolean
    /**
     * Filter to exclude phone numbers that are currently on hold for your account.
     * @type boolean
     * @memberof NumberSearchApilistAvailablePhoneNumbers
     */
    filterExcludeHeldNumbers?: boolean
}

export class ObjectNumberSearchApi {
    private api: ObservableNumberSearchApi

    public constructor(configuration: Configuration, requestFactory?: NumberSearchApiRequestFactory, responseProcessor?: NumberSearchApiResponseProcessor) {
        this.api = new ObservableNumberSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List available phone number blocks
     * @param param the request object
     */
    public listAvailablePhoneNumberBlocks(param: NumberSearchApiListAvailablePhoneNumberBlocksRequest = {}, options?: Configuration): Promise<ListAvailablePhoneNumbersBlocksResponse> {
        return this.api.listAvailablePhoneNumberBlocks(param.filterPhoneNumberStartsWith, param.filterPhoneNumberEndsWith, param.filterPhoneNumberContains, param.filterLocality, param.filterAdministrativeArea, param.filterCountryCode, param.filterNationalDestinationCode, param.filterRateCenter, param.filterNumberType, param.filterFeatures, param.filterMinimumBlockSize, param.filterLimit,  options).toPromise();
    }

    /**
     * List available phone numbers
     * @param param the request object
     */
    public listAvailablePhoneNumbers(param: NumberSearchApiListAvailablePhoneNumbersRequest = {}, options?: Configuration): Promise<ListAvailablePhoneNumbersResponse> {
        return this.api.listAvailablePhoneNumbers(param.filterPhoneNumberStartsWith, param.filterPhoneNumberEndsWith, param.filterPhoneNumberContains, param.filterLocality, param.filterAdministrativeArea, param.filterCountryCode, param.filterNationalDestinationCode, param.filterRateCenter, param.filterPhoneNumberType, param.filterFeatures, param.filterLimit, param.filterBestEffort, param.filterQuickship, param.filterReservable, param.filterExcludeHeldNumbers,  options).toPromise();
    }

}

import { ObservableOTAUpdatesApi } from "./ObservableAPI.ts";
import { OTAUpdatesApiRequestFactory, OTAUpdatesApiResponseProcessor} from "../apis/OTAUpdatesApi.ts";

export interface OTAUpdatesApiOTAUpdateGETRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof OTAUpdatesApioTAUpdateGET
     */
    id: string
}

export interface OTAUpdatesApiOTAUpdatesListRequest {
    /**
     * The page number to load
     * @type number
     * @memberof OTAUpdatesApioTAUpdatesList
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof OTAUpdatesApioTAUpdatesList
     */
    pageSize?: number
    /**
     * Filter by a specific status of the resource\&#39;s lifecycle.
     * @type &#39;in-progress&#39; | &#39;completed&#39; | &#39;failed&#39;
     * @memberof OTAUpdatesApioTAUpdatesList
     */
    filterStatus?: 'in-progress' | 'completed' | 'failed'
    /**
     * The SIM card identification UUID.
     * @type string
     * @memberof OTAUpdatesApioTAUpdatesList
     */
    filterSimCardId?: string
    /**
     * Filter by type.
     * @type &#39;sim_card_network_preferences&#39;
     * @memberof OTAUpdatesApioTAUpdatesList
     */
    filterType?: 'sim_card_network_preferences'
}

export class ObjectOTAUpdatesApi {
    private api: ObservableOTAUpdatesApi

    public constructor(configuration: Configuration, requestFactory?: OTAUpdatesApiRequestFactory, responseProcessor?: OTAUpdatesApiResponseProcessor) {
        this.api = new ObservableOTAUpdatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API returns the details of an Over the Air (OTA) update.
     * Get OTA update
     * @param param the request object
     */
    public oTAUpdateGET(param: OTAUpdatesApiOTAUpdateGETRequest, options?: Configuration): Promise<OTAUpdateGET200Response> {
        return this.api.oTAUpdateGET(param.id,  options).toPromise();
    }

    /**
     * List OTA updates
     * @param param the request object
     */
    public oTAUpdatesList(param: OTAUpdatesApiOTAUpdatesListRequest = {}, options?: Configuration): Promise<OTAUpdatesList200Response> {
        return this.api.oTAUpdatesList(param.pageNumber, param.pageSize, param.filterStatus, param.filterSimCardId, param.filterType,  options).toPromise();
    }

}

import { ObservableObjectApi } from "./ObservableAPI.ts";
import { ObjectApiRequestFactory, ObjectApiResponseProcessor} from "../apis/ObjectApi.ts";

export interface ObjectApiDeleteObjectRequest {
    /**
     * The bucket name.
     * @type string
     * @memberof ObjectApideleteObject
     */
    bucketName: string
    /**
     * The object name.
     * @type string
     * @memberof ObjectApideleteObject
     */
    objectName: string
}

export interface ObjectApiDeleteObjectsRequest {
    /**
     * The bucket name.
     * @type string
     * @memberof ObjectApideleteObjects
     */
    bucketName: string
    /**
     * 
     * @type boolean
     * @memberof ObjectApideleteObjects
     */
    _delete: boolean
    /**
     * 
     * @type Array&lt;DeleteObjectsRequestInner&gt;
     * @memberof ObjectApideleteObjects
     */
    deleteObjectsRequestInner: Array<DeleteObjectsRequestInner>
}

export interface ObjectApiGetObjectRequest {
    /**
     * The bucket name.
     * @type string
     * @memberof ObjectApigetObject
     */
    bucketName: string
    /**
     * The object name.
     * @type string
     * @memberof ObjectApigetObject
     */
    objectName: string
    /**
     * 
     * @type string
     * @memberof ObjectApigetObject
     */
    uploadId?: string
}

export interface ObjectApiHeadObjectRequest {
    /**
     * The bucket name.
     * @type string
     * @memberof ObjectApiheadObject
     */
    bucketName: string
    /**
     * The object name.
     * @type string
     * @memberof ObjectApiheadObject
     */
    objectName: string
}

export interface ObjectApiListObjectsV2Request {
    /**
     * The name of the bucket.
     * @type string
     * @memberof ObjectApilistObjectsV2
     */
    bucketName: string
    /**
     * 
     * @type 2
     * @memberof ObjectApilistObjectsV2
     */
    listType?: 2
}

export interface ObjectApiPutObjectRequest {
    /**
     * The bucket name.
     * @type string
     * @memberof ObjectApiputObject
     */
    bucketName: string
    /**
     * The object name.
     * @type string
     * @memberof ObjectApiputObject
     */
    objectName: string
    /**
     * 
     * @type HttpFile
     * @memberof ObjectApiputObject
     */
    body: HttpFile
    /**
     * 
     * @type string
     * @memberof ObjectApiputObject
     */
    contentType?: string
    /**
     * 
     * @type string
     * @memberof ObjectApiputObject
     */
    partNumber?: string
    /**
     * 
     * @type string
     * @memberof ObjectApiputObject
     */
    uploadId?: string
}

export class ObjectObjectApi {
    private api: ObservableObjectApi

    public constructor(configuration: Configuration, requestFactory?: ObjectApiRequestFactory, responseProcessor?: ObjectApiResponseProcessor) {
        this.api = new ObservableObjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an object from a given bucket.
     * DeleteObject
     * @param param the request object
     */
    public deleteObject(param: ObjectApiDeleteObjectRequest, options?: Configuration): Promise<void> {
        return this.api.deleteObject(param.bucketName, param.objectName,  options).toPromise();
    }

    /**
     * Deletes one or multiple objects from a given bucket.
     * DeleteObjects
     * @param param the request object
     */
    public deleteObjects(param: ObjectApiDeleteObjectsRequest, options?: Configuration): Promise<any> {
        return this.api.deleteObjects(param.bucketName, param._delete, param.deleteObjectsRequestInner,  options).toPromise();
    }

    /**
     * Retrieves an object from a given bucket.
     * GetObject
     * @param param the request object
     */
    public getObject(param: ObjectApiGetObjectRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.getObject(param.bucketName, param.objectName, param.uploadId,  options).toPromise();
    }

    /**
     * Retrieves metadata from an object without returning the object itself.
     * HeadObject
     * @param param the request object
     */
    public headObject(param: ObjectApiHeadObjectRequest, options?: Configuration): Promise<void> {
        return this.api.headObject(param.bucketName, param.objectName,  options).toPromise();
    }

    /**
     * List all objects contained in a given bucket.
     * ListObjectsV2
     * @param param the request object
     */
    public listObjectsV2(param: ObjectApiListObjectsV2Request, options?: Configuration): Promise<ListObjectsResponse> {
        return this.api.listObjectsV2(param.bucketName, param.listType,  options).toPromise();
    }

    /**
     * Add an object to a bucket.
     * PutObject
     * @param param the request object
     */
    public putObject(param: ObjectApiPutObjectRequest, options?: Configuration): Promise<void> {
        return this.api.putObject(param.bucketName, param.objectName, param.body, param.contentType, param.partNumber, param.uploadId,  options).toPromise();
    }

}

import { ObservableOutboundVoiceProfilesApi } from "./ObservableAPI.ts";
import { OutboundVoiceProfilesApiRequestFactory, OutboundVoiceProfilesApiResponseProcessor} from "../apis/OutboundVoiceProfilesApi.ts";

export interface OutboundVoiceProfilesApiCreateOutboundVoiceProfileRequest {
    /**
     * Parameters that can be defined when creating an outbound voice profile
     * @type CreateOutboundVoiceProfileRequest
     * @memberof OutboundVoiceProfilesApicreateOutboundVoiceProfile
     */
    createOutboundVoiceProfileRequest: CreateOutboundVoiceProfileRequest
}

export interface OutboundVoiceProfilesApiDeleteOutboundVoiceProfileRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof OutboundVoiceProfilesApideleteOutboundVoiceProfile
     */
    id: string
}

export interface OutboundVoiceProfilesApiListOutboundVoiceProfilesRequest {
    /**
     * The page number to load
     * @type number
     * @memberof OutboundVoiceProfilesApilistOutboundVoiceProfiles
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof OutboundVoiceProfilesApilistOutboundVoiceProfiles
     */
    pageSize?: number
    /**
     * Optional filter on outbound voice profile name.
     * @type string
     * @memberof OutboundVoiceProfilesApilistOutboundVoiceProfiles
     */
    filterNameContains?: string
    /**
     * Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt;-&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;name&lt;/code&gt;: sorts the result by the     &lt;code&gt;name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-name&lt;/code&gt;: sorts the result by the     &lt;code&gt;name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt;
     * @type &#39;enabled&#39; | &#39;-enabled&#39; | &#39;created_at&#39; | &#39;-created_at&#39; | &#39;name&#39; | &#39;-name&#39; | &#39;service_plan&#39; | &#39;-service_plan&#39; | &#39;traffic_type&#39; | &#39;-traffic_type&#39; | &#39;usage_payment_method&#39; | &#39;-usage_payment_method&#39;
     * @memberof OutboundVoiceProfilesApilistOutboundVoiceProfiles
     */
    sort?: 'enabled' | '-enabled' | 'created_at' | '-created_at' | 'name' | '-name' | 'service_plan' | '-service_plan' | 'traffic_type' | '-traffic_type' | 'usage_payment_method' | '-usage_payment_method'
}

export interface OutboundVoiceProfilesApiRetrieveOutboundVoiceProfileRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof OutboundVoiceProfilesApiretrieveOutboundVoiceProfile
     */
    id: string
}

export interface OutboundVoiceProfilesApiUpdateOutboundVoiceProfileRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof OutboundVoiceProfilesApiupdateOutboundVoiceProfile
     */
    id: string
    /**
     * Parameters that can be updated on an outbound voice profile
     * @type UpdateOutboundVoiceProfileRequest
     * @memberof OutboundVoiceProfilesApiupdateOutboundVoiceProfile
     */
    updateOutboundVoiceProfileRequest: UpdateOutboundVoiceProfileRequest
}

export class ObjectOutboundVoiceProfilesApi {
    private api: ObservableOutboundVoiceProfilesApi

    public constructor(configuration: Configuration, requestFactory?: OutboundVoiceProfilesApiRequestFactory, responseProcessor?: OutboundVoiceProfilesApiResponseProcessor) {
        this.api = new ObservableOutboundVoiceProfilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an outbound voice profile.
     * Create an outbound voice profile
     * @param param the request object
     */
    public createOutboundVoiceProfile(param: OutboundVoiceProfilesApiCreateOutboundVoiceProfileRequest, options?: Configuration): Promise<OutboundVoiceProfileResponse> {
        return this.api.createOutboundVoiceProfile(param.createOutboundVoiceProfileRequest,  options).toPromise();
    }

    /**
     * Deletes an existing outbound voice profile.
     * Delete an outbound voice profile
     * @param param the request object
     */
    public deleteOutboundVoiceProfile(param: OutboundVoiceProfilesApiDeleteOutboundVoiceProfileRequest, options?: Configuration): Promise<OutboundVoiceProfileResponse> {
        return this.api.deleteOutboundVoiceProfile(param.id,  options).toPromise();
    }

    /**
     * Get all outbound voice profiles belonging to the user that match the given filters.
     * Get all outbound voice profiles
     * @param param the request object
     */
    public listOutboundVoiceProfiles(param: OutboundVoiceProfilesApiListOutboundVoiceProfilesRequest = {}, options?: Configuration): Promise<ListOutboundVoiceProfilesResponse> {
        return this.api.listOutboundVoiceProfiles(param.pageNumber, param.pageSize, param.filterNameContains, param.sort,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing outbound voice profile.
     * Retrieve an outbound voice profile
     * @param param the request object
     */
    public retrieveOutboundVoiceProfile(param: OutboundVoiceProfilesApiRetrieveOutboundVoiceProfileRequest, options?: Configuration): Promise<OutboundVoiceProfileResponse> {
        return this.api.retrieveOutboundVoiceProfile(param.id,  options).toPromise();
    }

    /**
     * Updates an existing outbound voice profile.
     * Updates an existing outbound voice profile.
     * @param param the request object
     */
    public updateOutboundVoiceProfile(param: OutboundVoiceProfilesApiUpdateOutboundVoiceProfileRequest, options?: Configuration): Promise<OutboundVoiceProfileResponse> {
        return this.api.updateOutboundVoiceProfile(param.id, param.updateOutboundVoiceProfileRequest,  options).toPromise();
    }

}

import { ObservablePhoneNumberCampaignsApi } from "./ObservableAPI.ts";
import { PhoneNumberCampaignsApiRequestFactory, PhoneNumberCampaignsApiResponseProcessor} from "../apis/PhoneNumberCampaignsApi.ts";

export interface PhoneNumberCampaignsApiCreateNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPutRequest {
    /**
     * 
     * @type string
     * @memberof PhoneNumberCampaignsApicreateNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut
     */
    phoneNumber: string
    /**
     * 
     * @type PhoneNumberCampaignCreate
     * @memberof PhoneNumberCampaignsApicreateNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut
     */
    phoneNumberCampaignCreate: PhoneNumberCampaignCreate
}

export interface PhoneNumberCampaignsApiCreateNewPhoneNumberCampaignPhoneNumberCampaignPostRequest {
    /**
     * 
     * @type PhoneNumberCampaignCreate
     * @memberof PhoneNumberCampaignsApicreateNewPhoneNumberCampaignPhoneNumberCampaignPost
     */
    phoneNumberCampaignCreate: PhoneNumberCampaignCreate
}

export interface PhoneNumberCampaignsApiCreateNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPutRequest {
    /**
     * 
     * @type string
     * @memberof PhoneNumberCampaignsApicreateNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut
     */
    phoneNumber: string
    /**
     * 
     * @type PhoneNumberCampaignCreate
     * @memberof PhoneNumberCampaignsApicreateNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut
     */
    phoneNumberCampaignCreate: PhoneNumberCampaignCreate
}

export interface PhoneNumberCampaignsApiCreateNewPhoneNumberCampaignPhoneNumberCampaignsPostRequest {
    /**
     * 
     * @type PhoneNumberCampaignCreate
     * @memberof PhoneNumberCampaignsApicreateNewPhoneNumberCampaignPhoneNumberCampaignsPost
     */
    phoneNumberCampaignCreate: PhoneNumberCampaignCreate
}

export interface PhoneNumberCampaignsApiDeletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDeleteRequest {
    /**
     * 
     * @type string
     * @memberof PhoneNumberCampaignsApideletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDelete
     */
    phoneNumber: string
}

export interface PhoneNumberCampaignsApiDeletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDeleteRequest {
    /**
     * 
     * @type string
     * @memberof PhoneNumberCampaignsApideletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDelete
     */
    phoneNumber: string
}

export interface PhoneNumberCampaignsApiGetSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGetRequest {
    /**
     * 
     * @type string
     * @memberof PhoneNumberCampaignsApigetSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGet
     */
    phoneNumber: string
}

export interface PhoneNumberCampaignsApiGetSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGetRequest {
    /**
     * 
     * @type string
     * @memberof PhoneNumberCampaignsApigetSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGet
     */
    phoneNumber: string
}

export interface PhoneNumberCampaignsApiRetrieveAllPhoneNumberCampaignsPhoneNumberCampaignGetRequest {
    /**
     * 
     * @type any
     * @memberof PhoneNumberCampaignsApiretrieveAllPhoneNumberCampaignsPhoneNumberCampaignGet
     */
    recordsPerPage?: any
    /**
     * 
     * @type any
     * @memberof PhoneNumberCampaignsApiretrieveAllPhoneNumberCampaignsPhoneNumberCampaignGet
     */
    page?: any
}

export interface PhoneNumberCampaignsApiRetrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGetRequest {
    /**
     * 
     * @type any
     * @memberof PhoneNumberCampaignsApiretrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGet
     */
    recordsPerPage?: any
    /**
     * 
     * @type any
     * @memberof PhoneNumberCampaignsApiretrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGet
     */
    page?: any
}

export class ObjectPhoneNumberCampaignsApi {
    private api: ObservablePhoneNumberCampaignsApi

    public constructor(configuration: Configuration, requestFactory?: PhoneNumberCampaignsApiRequestFactory, responseProcessor?: PhoneNumberCampaignsApiResponseProcessor) {
        this.api = new ObservablePhoneNumberCampaignsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to assign a different campaign to a supplied `phoneNumber`.
     * Create New Phone Number Campaign
     * @param param the request object
     */
    public createNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut(param: PhoneNumberCampaignsApiCreateNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPutRequest, options?: Configuration): Promise<ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPhonenumberPut> {
        return this.api.createNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut(param.phoneNumber, param.phoneNumberCampaignCreate,  options).toPromise();
    }

    /**
     * Assign an individual phone number to campaign.
     * Create New Phone Number Campaign
     * @param param the request object
     */
    public createNewPhoneNumberCampaignPhoneNumberCampaignPost(param: PhoneNumberCampaignsApiCreateNewPhoneNumberCampaignPhoneNumberCampaignPostRequest, options?: Configuration): Promise<ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPost> {
        return this.api.createNewPhoneNumberCampaignPhoneNumberCampaignPost(param.phoneNumberCampaignCreate,  options).toPromise();
    }

    /**
     * Create New Phone Number Campaign
     * @param param the request object
     */
    public createNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut(param: PhoneNumberCampaignsApiCreateNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPutRequest, options?: Configuration): Promise<any> {
        return this.api.createNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut(param.phoneNumber, param.phoneNumberCampaignCreate,  options).toPromise();
    }

    /**
     * Create New Phone Number Campaign
     * @param param the request object
     */
    public createNewPhoneNumberCampaignPhoneNumberCampaignsPost(param: PhoneNumberCampaignsApiCreateNewPhoneNumberCampaignPhoneNumberCampaignsPostRequest, options?: Configuration): Promise<any> {
        return this.api.createNewPhoneNumberCampaignPhoneNumberCampaignsPost(param.phoneNumberCampaignCreate,  options).toPromise();
    }

    /**
     * This endpoint allows you to remove a campaign assignment from the supplied `phoneNumber`.
     * Delete Phone Number Campaign
     * @param param the request object
     */
    public deletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDelete(param: PhoneNumberCampaignsApiDeletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDeleteRequest, options?: Configuration): Promise<PhoneNumberCampaign> {
        return this.api.deletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDelete(param.phoneNumber,  options).toPromise();
    }

    /**
     * Delete Phone Number Campaign
     * @param param the request object
     */
    public deletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDelete(param: PhoneNumberCampaignsApiDeletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.deletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDelete(param.phoneNumber,  options).toPromise();
    }

    /**
     * Retrieve an individual phone number/campaign assignment by `phoneNumber`.
     * Get Single Phone Number Campaign
     * @param param the request object
     */
    public getSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGet(param: PhoneNumberCampaignsApiGetSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGetRequest, options?: Configuration): Promise<PhoneNumberCampaign> {
        return this.api.getSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGet(param.phoneNumber,  options).toPromise();
    }

    /**
     * Get Single Phone Number Campaign
     * @param param the request object
     */
    public getSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGet(param: PhoneNumberCampaignsApiGetSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGetRequest, options?: Configuration): Promise<any> {
        return this.api.getSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGet(param.phoneNumber,  options).toPromise();
    }

    /**
     * Retrieve all of your organization\'s phone number/campaign assignments.
     * Retrieve All Phone Number Campaigns
     * @param param the request object
     */
    public retrieveAllPhoneNumberCampaignsPhoneNumberCampaignGet(param: PhoneNumberCampaignsApiRetrieveAllPhoneNumberCampaignsPhoneNumberCampaignGetRequest = {}, options?: Configuration): Promise<PhoneNumberCampaignPaginated> {
        return this.api.retrieveAllPhoneNumberCampaignsPhoneNumberCampaignGet(param.recordsPerPage, param.page,  options).toPromise();
    }

    /**
     * Retrieve All Phone Number Campaigns
     * @param param the request object
     */
    public retrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGet(param: PhoneNumberCampaignsApiRetrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.retrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGet(param.recordsPerPage, param.page,  options).toPromise();
    }

}

import { ObservablePhoneNumberPortingApi } from "./ObservableAPI.ts";
import { PhoneNumberPortingApiRequestFactory, PhoneNumberPortingApiResponseProcessor} from "../apis/PhoneNumberPortingApi.ts";

export interface PhoneNumberPortingApiPostPortabilityCheckRequest {
    /**
     * 
     * @type PostPortabilityCheckRequest
     * @memberof PhoneNumberPortingApipostPortabilityCheck
     */
    postPortabilityCheckRequest: PostPortabilityCheckRequest
}

export class ObjectPhoneNumberPortingApi {
    private api: ObservablePhoneNumberPortingApi

    public constructor(configuration: Configuration, requestFactory?: PhoneNumberPortingApiRequestFactory, responseProcessor?: PhoneNumberPortingApiResponseProcessor) {
        this.api = new ObservablePhoneNumberPortingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Runs a portability check, returning the results immediately.
     * Run a portability check
     * @param param the request object
     */
    public postPortabilityCheck(param: PhoneNumberPortingApiPostPortabilityCheckRequest, options?: Configuration): Promise<PostPortabilityCheck201Response> {
        return this.api.postPortabilityCheck(param.postPortabilityCheckRequest,  options).toPromise();
    }

}

import { ObservablePortingOrderApi } from "./ObservableAPI.ts";
import { PortingOrderApiRequestFactory, PortingOrderApiResponseProcessor} from "../apis/PortingOrderApi.ts";

export interface PortingOrderApiActivatePortingOrderRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApiactivatePortingOrder
     */
    id: string
}

export interface PortingOrderApiCancelPortingOrderRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApicancelPortingOrder
     */
    id: string
}

export interface PortingOrderApiConfirmPortingOrderRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApiconfirmPortingOrder
     */
    id: string
}

export interface PortingOrderApiCreatePortingOrderRequest {
    /**
     * 
     * @type CreatePortingOrder
     * @memberof PortingOrderApicreatePortingOrder
     */
    createPortingOrder: CreatePortingOrder
}

export interface PortingOrderApiCreatePortingOrderCommentRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApicreatePortingOrderComment
     */
    id: string
    /**
     * 
     * @type CreatePortingOrderComment
     * @memberof PortingOrderApicreatePortingOrderComment
     */
    createPortingOrderComment: CreatePortingOrderComment
}

export interface PortingOrderApiDeletePortingOrderRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApideletePortingOrder
     */
    id: string
}

export interface PortingOrderApiGetPortingOrderRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApigetPortingOrder
     */
    id: string
    /**
     * Include the first 50 phone number objects in the results
     * @type boolean
     * @memberof PortingOrderApigetPortingOrder
     */
    includePhoneNumbers?: boolean
}

export interface PortingOrderApiGetPortingOrderLOATemplateRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApigetPortingOrderLOATemplate
     */
    id: string
}

export interface PortingOrderApiGetPortingOrderSubRequestRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApigetPortingOrderSubRequest
     */
    id: string
}

export interface PortingOrderApiGetPortingOrdersActivationJobRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApigetPortingOrdersActivationJob
     */
    id: string
    /**
     * Activation Job Identifier
     * @type string
     * @memberof PortingOrderApigetPortingOrdersActivationJob
     */
    activationJobId: string
}

export interface PortingOrderApiListAllowedFocWindowsRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApilistAllowedFocWindows
     */
    id: string
}

export interface PortingOrderApiListPortingOrderDocumentsRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApilistPortingOrderDocuments
     */
    id: string
    /**
     * The page number to load
     * @type number
     * @memberof PortingOrderApilistPortingOrderDocuments
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof PortingOrderApilistPortingOrderDocuments
     */
    pageSize?: number
}

export interface PortingOrderApiListPortingOrderRequirementsRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApilistPortingOrderRequirements
     */
    id: string
    /**
     * The page number to load
     * @type number
     * @memberof PortingOrderApilistPortingOrderRequirements
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof PortingOrderApilistPortingOrderRequirements
     */
    pageSize?: number
}

export interface PortingOrderApiListPortingOrdersRequest {
    /**
     * The page number to load
     * @type number
     * @memberof PortingOrderApilistPortingOrders
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof PortingOrderApilistPortingOrders
     */
    pageSize?: number
    /**
     * Include the first 50 phone number objects in the results
     * @type boolean
     * @memberof PortingOrderApilistPortingOrders
     */
    includePhoneNumbers?: boolean
    /**
     * Filter results by status
     * @type &#39;draft&#39; | &#39;in-process&#39; | &#39;submitted&#39; | &#39;exception&#39; | &#39;foc-date-confirmed&#39; | &#39;cancel-pending&#39; | &#39;ported&#39; | &#39;cancelled&#39;
     * @memberof PortingOrderApilistPortingOrders
     */
    filterStatus?: 'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled'
    /**
     * Filter porting orders by multiple statuses
     * @type &#39;draft&#39; | &#39;in-process&#39; | &#39;submitted&#39; | &#39;exception&#39; | &#39;foc-date-confirmed&#39; | &#39;cancel-pending&#39; | &#39;ported&#39; | &#39;cancelled&#39;
     * @memberof PortingOrderApilistPortingOrders
     */
    filterStatusIn?: 'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled'
    /**
     * Filter results by customer_reference
     * @type string
     * @memberof PortingOrderApilistPortingOrders
     */
    filterCustomerReference?: string
    /**
     * Filter results by parent_support_key
     * @type string
     * @memberof PortingOrderApilistPortingOrders
     */
    filterParentSupportKey?: string
    /**
     * Filter results by country ISO 3166-1 alpha-2 code
     * @type string
     * @memberof PortingOrderApilistPortingOrders
     */
    filterPhoneNumbersCountryCode?: string
    /**
     * Filter results by old service provider
     * @type string
     * @memberof PortingOrderApilistPortingOrders
     */
    filterPhoneNumbersCarrierName?: string
    /**
     * Filter results by porting order type
     * @type PortingOrderType
     * @memberof PortingOrderApilistPortingOrders
     */
    filterMiscType?: PortingOrderType
    /**
     * Filter results by person or company name
     * @type string
     * @memberof PortingOrderApilistPortingOrders
     */
    filterEndUserAdminEntityName?: string
    /**
     * Filter results by authorized person
     * @type string
     * @memberof PortingOrderApilistPortingOrders
     */
    filterEndUserAdminAuthPersonName?: string
    /**
     * Filter results by fast port eligible
     * @type boolean
     * @memberof PortingOrderApilistPortingOrders
     */
    filterActivationSettingsFastPortEligible?: boolean
    /**
     * Filter results by foc date later than this value
     * @type string
     * @memberof PortingOrderApilistPortingOrders
     */
    filterActivationSettingsFocDatetimeRequestedGt?: string
    /**
     * Filter results by foc date earlier than this value
     * @type string
     * @memberof PortingOrderApilistPortingOrders
     */
    filterActivationSettingsFocDatetimeRequestedLt?: string
    /**
     * Filter results by full or partial phone_number
     * @type string
     * @memberof PortingOrderApilistPortingOrders
     */
    filterPhoneNumbersPhoneNumberContains?: string
    /**
     * Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     * @type &#39;created_at&#39; | &#39;-created_at&#39; | &#39;activation_settings.foc_datetime_requested&#39; | &#39;-activation_settings.foc_datetime_requested&#39;
     * @memberof PortingOrderApilistPortingOrders
     */
    sort?: 'created_at' | '-created_at' | 'activation_settings.foc_datetime_requested' | '-activation_settings.foc_datetime_requested'
}

export interface PortingOrderApiListPortingOrdersActivationJobsRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApilistPortingOrdersActivationJobs
     */
    id: string
    /**
     * The page number to load
     * @type number
     * @memberof PortingOrderApilistPortingOrdersActivationJobs
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof PortingOrderApilistPortingOrdersActivationJobs
     */
    pageSize?: number
}

export interface PortingOrderApiListPortingOrdersCommentsRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApilistPortingOrdersComments
     */
    id: string
    /**
     * The page number to load
     * @type number
     * @memberof PortingOrderApilistPortingOrdersComments
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof PortingOrderApilistPortingOrdersComments
     */
    pageSize?: number
}

export interface PortingOrderApiListPortingOrdersExceptionTypesRequest {
}

export interface PortingOrderApiListPortingPhoneNumbersRequest {
    /**
     * The page number to load
     * @type number
     * @memberof PortingOrderApilistPortingPhoneNumbers
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof PortingOrderApilistPortingPhoneNumbers
     */
    pageSize?: number
    /**
     * Filter results by porting order id
     * @type string
     * @memberof PortingOrderApilistPortingPhoneNumbers
     */
    filterPortingOrderId?: string
    /**
     * Filter results by a list of porting order ids
     * @type Array&lt;string&gt;
     * @memberof PortingOrderApilistPortingPhoneNumbers
     */
    filterPortingOrderIdIn?: Array<string>
    /**
     * Filter results by support key
     * @type string
     * @memberof PortingOrderApilistPortingPhoneNumbers
     */
    filterSupportKeyEq?: string
    /**
     * Filter results by a list of support keys
     * @type Array&lt;string&gt;
     * @memberof PortingOrderApilistPortingPhoneNumbers
     */
    filterSupportKeyIn?: Array<string>
    /**
     * Filter results by phone number
     * @type string
     * @memberof PortingOrderApilistPortingPhoneNumbers
     */
    filterPhoneNumber?: string
    /**
     * Filter results by a list of phone numbers
     * @type Array&lt;string&gt;
     * @memberof PortingOrderApilistPortingPhoneNumbers
     */
    filterPhoneNumberIn?: Array<string>
    /**
     * Filter results by porting order status
     * @type &#39;draft&#39; | &#39;in-process&#39; | &#39;submitted&#39; | &#39;exception&#39; | &#39;foc-date-confirmed&#39; | &#39;cancel-pending&#39; | &#39;ported&#39; | &#39;cancelled&#39;
     * @memberof PortingOrderApilistPortingPhoneNumbers
     */
    filterPortingOrderStatus?: 'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled'
    /**
     * Filter results by activation status
     * @type PortingOrderActivationStatus
     * @memberof PortingOrderApilistPortingPhoneNumbers
     */
    filterActivationStatus?: PortingOrderActivationStatus
    /**
     * Filter results by portability status
     * @type PortabilityStatus
     * @memberof PortingOrderApilistPortingPhoneNumbers
     */
    filterPortabilityStatus?: PortabilityStatus
}

export interface PortingOrderApiUpdatePortingOrderRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApiupdatePortingOrder
     */
    id: string
    /**
     * 
     * @type UpdatePortingOrder
     * @memberof PortingOrderApiupdatePortingOrder
     */
    updatePortingOrder: UpdatePortingOrder
}

export interface PortingOrderApiUploadPortingOrderDocumentsRequest {
    /**
     * Porting Order id
     * @type string
     * @memberof PortingOrderApiuploadPortingOrderDocuments
     */
    id: string
    /**
     * 
     * @type UploadPortingOrderDocumentsRequest
     * @memberof PortingOrderApiuploadPortingOrderDocuments
     */
    uploadPortingOrderDocumentsRequest: UploadPortingOrderDocumentsRequest
}

export class ObjectPortingOrderApi {
    private api: ObservablePortingOrderApi

    public constructor(configuration: Configuration, requestFactory?: PortingOrderApiRequestFactory, responseProcessor?: PortingOrderApiResponseProcessor) {
        this.api = new ObservablePortingOrderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Activate each number in a porting order asynchronously. This operation is limited to US FastPort orders only.
     * Activate every number in a porting order asynchronously.
     * @param param the request object
     */
    public activatePortingOrder(param: PortingOrderApiActivatePortingOrderRequest, options?: Configuration): Promise<ActivatePortingOrder202Response> {
        return this.api.activatePortingOrder(param.id,  options).toPromise();
    }

    /**
     * Cancel a porting order
     * Cancel a porting order
     * @param param the request object
     */
    public cancelPortingOrder(param: PortingOrderApiCancelPortingOrderRequest, options?: Configuration): Promise<CancelPortingOrder200Response> {
        return this.api.cancelPortingOrder(param.id,  options).toPromise();
    }

    /**
     * Confirm and submit your porting order.
     * Submit a porting order.
     * @param param the request object
     */
    public confirmPortingOrder(param: PortingOrderApiConfirmPortingOrderRequest, options?: Configuration): Promise<ConfirmPortingOrder200Response> {
        return this.api.confirmPortingOrder(param.id,  options).toPromise();
    }

    /**
     * Creates a new porting order object.
     * Create a porting order
     * @param param the request object
     */
    public createPortingOrder(param: PortingOrderApiCreatePortingOrderRequest, options?: Configuration): Promise<CreatePortingOrder201Response> {
        return this.api.createPortingOrder(param.createPortingOrder,  options).toPromise();
    }

    /**
     * Creates a new comment for a porting order.
     * Create a comment for a porting order
     * @param param the request object
     */
    public createPortingOrderComment(param: PortingOrderApiCreatePortingOrderCommentRequest, options?: Configuration): Promise<CreatePortingOrderComment201Response> {
        return this.api.createPortingOrderComment(param.id, param.createPortingOrderComment,  options).toPromise();
    }

    /**
     * Deletes an existing porting order. This operation is restrict to porting orders in draft state.
     * Delete a porting order
     * @param param the request object
     */
    public deletePortingOrder(param: PortingOrderApiDeletePortingOrderRequest, options?: Configuration): Promise<void> {
        return this.api.deletePortingOrder(param.id,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing porting order.
     * Retrieve a porting order
     * @param param the request object
     */
    public getPortingOrder(param: PortingOrderApiGetPortingOrderRequest, options?: Configuration): Promise<GetPortingOrder200Response> {
        return this.api.getPortingOrder(param.id, param.includePhoneNumbers,  options).toPromise();
    }

    /**
     * Download a porting order loa template
     * Download a porting order loa template
     * @param param the request object
     */
    public getPortingOrderLOATemplate(param: PortingOrderApiGetPortingOrderLOATemplateRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.getPortingOrderLOATemplate(param.id,  options).toPromise();
    }

    /**
     * Retrieve the associated V1 sub_request_id and port_request_id
     * Retrieve the associated V1 sub_request_id and port_request_id
     * @param param the request object
     */
    public getPortingOrderSubRequest(param: PortingOrderApiGetPortingOrderSubRequestRequest, options?: Configuration): Promise<GetPortingOrderSubRequest200Response> {
        return this.api.getPortingOrderSubRequest(param.id,  options).toPromise();
    }

    /**
     * Returns a porting activation job.
     * Retrieve a porting activation job
     * @param param the request object
     */
    public getPortingOrdersActivationJob(param: PortingOrderApiGetPortingOrdersActivationJobRequest, options?: Configuration): Promise<ActivatePortingOrder202Response> {
        return this.api.getPortingOrdersActivationJob(param.id, param.activationJobId,  options).toPromise();
    }

    /**
     * Returns a list of allowed FOC dates for a porting order.
     * List allowed FOC dates
     * @param param the request object
     */
    public listAllowedFocWindows(param: PortingOrderApiListAllowedFocWindowsRequest, options?: Configuration): Promise<ListAllowedFocWindows200Response> {
        return this.api.listAllowedFocWindows(param.id,  options).toPromise();
    }

    /**
     * Returns a list of all documents associated with a porting order.
     * List all documents associated with a porting order
     * @param param the request object
     */
    public listPortingOrderDocuments(param: PortingOrderApiListPortingOrderDocumentsRequest, options?: Configuration): Promise<ListPortingOrderDocuments200Response> {
        return this.api.listPortingOrderDocuments(param.id, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Returns a list of all requirements based on country/number type for this porting order.
     * List porting order requirements
     * @param param the request object
     */
    public listPortingOrderRequirements(param: PortingOrderApiListPortingOrderRequirementsRequest, options?: Configuration): Promise<ListPortingOrderRequirements200Response> {
        return this.api.listPortingOrderRequirements(param.id, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Returns a list of your porting order.
     * List all porting orders
     * @param param the request object
     */
    public listPortingOrders(param: PortingOrderApiListPortingOrdersRequest = {}, options?: Configuration): Promise<ListPortingOrders200Response> {
        return this.api.listPortingOrders(param.pageNumber, param.pageSize, param.includePhoneNumbers, param.filterStatus, param.filterStatusIn, param.filterCustomerReference, param.filterParentSupportKey, param.filterPhoneNumbersCountryCode, param.filterPhoneNumbersCarrierName, param.filterMiscType, param.filterEndUserAdminEntityName, param.filterEndUserAdminAuthPersonName, param.filterActivationSettingsFastPortEligible, param.filterActivationSettingsFocDatetimeRequestedGt, param.filterActivationSettingsFocDatetimeRequestedLt, param.filterPhoneNumbersPhoneNumberContains, param.sort,  options).toPromise();
    }

    /**
     * Returns a list of your porting activation jobs.
     * List all porting activation jobs
     * @param param the request object
     */
    public listPortingOrdersActivationJobs(param: PortingOrderApiListPortingOrdersActivationJobsRequest, options?: Configuration): Promise<ListPortingOrdersActivationJobs200Response> {
        return this.api.listPortingOrdersActivationJobs(param.id, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Returns a list of all comments of a porting order.
     * List all comments of a porting order
     * @param param the request object
     */
    public listPortingOrdersComments(param: PortingOrderApiListPortingOrdersCommentsRequest, options?: Configuration): Promise<ListPortingOrdersComments200Response> {
        return this.api.listPortingOrdersComments(param.id, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Returns a list of all possible exception types for a porting order.
     * List all exception types
     * @param param the request object
     */
    public listPortingOrdersExceptionTypes(param: PortingOrderApiListPortingOrdersExceptionTypesRequest = {}, options?: Configuration): Promise<ListPortingOrdersExceptionTypes200Response> {
        return this.api.listPortingOrdersExceptionTypes( options).toPromise();
    }

    /**
     * Returns a list of your porting phone numbers.
     * List all porting phone numbers
     * @param param the request object
     */
    public listPortingPhoneNumbers(param: PortingOrderApiListPortingPhoneNumbersRequest = {}, options?: Configuration): Promise<ListPortingPhoneNumbers200Response> {
        return this.api.listPortingPhoneNumbers(param.pageNumber, param.pageSize, param.filterPortingOrderId, param.filterPortingOrderIdIn, param.filterSupportKeyEq, param.filterSupportKeyIn, param.filterPhoneNumber, param.filterPhoneNumberIn, param.filterPortingOrderStatus, param.filterActivationStatus, param.filterPortabilityStatus,  options).toPromise();
    }

    /**
     * Edits the details of an existing porting order.  Any or all of a porting order’s attributes may be included in the resource object included in a PATCH request.  If a request does not include all of the attributes for a resource, the system will interpret the missing attributes as if they were included with their current values. To explicitly set something to null, it must be included in the request with a null value.
     * Edit a porting order
     * @param param the request object
     */
    public updatePortingOrder(param: PortingOrderApiUpdatePortingOrderRequest, options?: Configuration): Promise<UpdatePortingOrder200Response> {
        return this.api.updatePortingOrder(param.id, param.updatePortingOrder,  options).toPromise();
    }

    /**
     * Associate a list of documents with a porting order.
     * Associate a list of documents with a porting order
     * @param param the request object
     */
    public uploadPortingOrderDocuments(param: PortingOrderApiUploadPortingOrderDocumentsRequest, options?: Configuration): Promise<UploadPortingOrderDocuments201Response> {
        return this.api.uploadPortingOrderDocuments(param.id, param.uploadPortingOrderDocumentsRequest,  options).toPromise();
    }

}

import { ObservablePrivateWirelessGatewaysApi } from "./ObservableAPI.ts";
import { PrivateWirelessGatewaysApiRequestFactory, PrivateWirelessGatewaysApiResponseProcessor} from "../apis/PrivateWirelessGatewaysApi.ts";

export interface PrivateWirelessGatewaysApiCreatePrivateWirelessGatewayRequest {
    /**
     * 
     * @type CreatePrivateWirelessGatewayRequest
     * @memberof PrivateWirelessGatewaysApicreatePrivateWirelessGateway
     */
    createPrivateWirelessGatewayRequest: CreatePrivateWirelessGatewayRequest
}

export interface PrivateWirelessGatewaysApiDeletePrivateWirelessGatewayRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof PrivateWirelessGatewaysApideletePrivateWirelessGateway
     */
    id: string
}

export interface PrivateWirelessGatewaysApiGetPrivateWirelessGatewayRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof PrivateWirelessGatewaysApigetPrivateWirelessGateway
     */
    id: string
}

export interface PrivateWirelessGatewaysApiGetPrivateWirelessGatewaysRequest {
    /**
     * The page number to load
     * @type number
     * @memberof PrivateWirelessGatewaysApigetPrivateWirelessGateways
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof PrivateWirelessGatewaysApigetPrivateWirelessGateways
     */
    pageSize?: number
    /**
     * The name of the Private Wireless Gateway.
     * @type string
     * @memberof PrivateWirelessGatewaysApigetPrivateWirelessGateways
     */
    filterName?: string
    /**
     * The IP address range of the Private Wireless Gateway.
     * @type string
     * @memberof PrivateWirelessGatewaysApigetPrivateWirelessGateways
     */
    filterIpRange?: string
    /**
     * The name of the region where the Private Wireless Gateway is deployed.
     * @type string
     * @memberof PrivateWirelessGatewaysApigetPrivateWirelessGateways
     */
    filterRegionCode?: string
    /**
     * Private Wireless Gateway resource creation date.
     * @type string
     * @memberof PrivateWirelessGatewaysApigetPrivateWirelessGateways
     */
    filterCreatedAt?: string
    /**
     * When the Private Wireless Gateway was last updated.
     * @type string
     * @memberof PrivateWirelessGatewaysApigetPrivateWirelessGateways
     */
    filterUpdatedAt?: string
}

export class ObjectPrivateWirelessGatewaysApi {
    private api: ObservablePrivateWirelessGatewaysApi

    public constructor(configuration: Configuration, requestFactory?: PrivateWirelessGatewaysApiRequestFactory, responseProcessor?: PrivateWirelessGatewaysApiResponseProcessor) {
        this.api = new ObservablePrivateWirelessGatewaysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Asynchronously create a Private Wireless Gateway for SIM cards for a previously created network.
     * Create a Private Wireless Gateway
     * @param param the request object
     */
    public createPrivateWirelessGateway(param: PrivateWirelessGatewaysApiCreatePrivateWirelessGatewayRequest, options?: Configuration): Promise<CreatePrivateWirelessGateway202Response> {
        return this.api.createPrivateWirelessGateway(param.createPrivateWirelessGatewayRequest,  options).toPromise();
    }

    /**
     * Deletes the Private Wireless Gateway.
     * Delete a Private Wireless Gateway
     * @param param the request object
     */
    public deletePrivateWirelessGateway(param: PrivateWirelessGatewaysApiDeletePrivateWirelessGatewayRequest, options?: Configuration): Promise<CreatePrivateWirelessGateway202Response> {
        return this.api.deletePrivateWirelessGateway(param.id,  options).toPromise();
    }

    /**
     * Retrieve information about a Private Wireless Gateway.
     * Get a Private Wireless Gateway
     * @param param the request object
     */
    public getPrivateWirelessGateway(param: PrivateWirelessGatewaysApiGetPrivateWirelessGatewayRequest, options?: Configuration): Promise<CreatePrivateWirelessGateway202Response> {
        return this.api.getPrivateWirelessGateway(param.id,  options).toPromise();
    }

    /**
     * Get all Private Wireless Gateways belonging to the user.
     * Get all Private Wireless Gateways
     * @param param the request object
     */
    public getPrivateWirelessGateways(param: PrivateWirelessGatewaysApiGetPrivateWirelessGatewaysRequest = {}, options?: Configuration): Promise<GetPrivateWirelessGateways200Response> {
        return this.api.getPrivateWirelessGateways(param.pageNumber, param.pageSize, param.filterName, param.filterIpRange, param.filterRegionCode, param.filterCreatedAt, param.filterUpdatedAt,  options).toPromise();
    }

}

import { ObservableProgrammableFaxApplicationsApi } from "./ObservableAPI.ts";
import { ProgrammableFaxApplicationsApiRequestFactory, ProgrammableFaxApplicationsApiResponseProcessor} from "../apis/ProgrammableFaxApplicationsApi.ts";

export interface ProgrammableFaxApplicationsApiCreateFaxApplicationRequest {
    /**
     * Parameters that can be set when creating a Fax Application
     * @type CreateFaxApplicationRequest
     * @memberof ProgrammableFaxApplicationsApicreateFaxApplication
     */
    createFaxApplicationRequest: CreateFaxApplicationRequest
}

export interface ProgrammableFaxApplicationsApiDeleteFaxApplicationRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof ProgrammableFaxApplicationsApideleteFaxApplication
     */
    id: string
}

export interface ProgrammableFaxApplicationsApiGetFaxApplicationRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof ProgrammableFaxApplicationsApigetFaxApplication
     */
    id: string
}

export interface ProgrammableFaxApplicationsApiListFaxApplicationsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof ProgrammableFaxApplicationsApilistFaxApplications
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof ProgrammableFaxApplicationsApilistFaxApplications
     */
    pageSize?: number
    /**
     * If present, applications with &lt;code&gt;application_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @type string
     * @memberof ProgrammableFaxApplicationsApilistFaxApplications
     */
    filterApplicationNameContains?: string
    /**
     * Identifies the associated outbound voice profile.
     * @type string
     * @memberof ProgrammableFaxApplicationsApilistFaxApplications
     */
    filterOutboundVoiceProfileId?: string
    /**
     * Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     * @type &#39;created_at&#39; | &#39;connection_name&#39; | &#39;active&#39;
     * @memberof ProgrammableFaxApplicationsApilistFaxApplications
     */
    sort?: 'created_at' | 'connection_name' | 'active'
}

export interface ProgrammableFaxApplicationsApiUpdateFaxApplicationRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof ProgrammableFaxApplicationsApiupdateFaxApplication
     */
    id: string
    /**
     * Parameters to be updated for the Fax Application
     * @type UpdateFaxApplicationRequest
     * @memberof ProgrammableFaxApplicationsApiupdateFaxApplication
     */
    updateFaxApplicationRequest: UpdateFaxApplicationRequest
}

export class ObjectProgrammableFaxApplicationsApi {
    private api: ObservableProgrammableFaxApplicationsApi

    public constructor(configuration: Configuration, requestFactory?: ProgrammableFaxApplicationsApiRequestFactory, responseProcessor?: ProgrammableFaxApplicationsApiResponseProcessor) {
        this.api = new ObservableProgrammableFaxApplicationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Fax Application based on the parameters sent in the request. The application name and webhook URL are required. Once created, you can assign phone numbers to your application using the `/phone_numbers` endpoint.
     * Creates a Fax Application
     * @param param the request object
     */
    public createFaxApplication(param: ProgrammableFaxApplicationsApiCreateFaxApplicationRequest, options?: Configuration): Promise<FaxApplicationResponse> {
        return this.api.createFaxApplication(param.createFaxApplicationRequest,  options).toPromise();
    }

    /**
     * Permanently deletes a Fax Application. Deletion may be prevented if the application is in use by phone numbers.
     * Deletes a Fax Application
     * @param param the request object
     */
    public deleteFaxApplication(param: ProgrammableFaxApplicationsApiDeleteFaxApplicationRequest, options?: Configuration): Promise<FaxApplicationResponse> {
        return this.api.deleteFaxApplication(param.id,  options).toPromise();
    }

    /**
     * Return the details of an existing Fax Application inside the \'data\' attribute of the response.
     * Retrieve a Fax Application
     * @param param the request object
     */
    public getFaxApplication(param: ProgrammableFaxApplicationsApiGetFaxApplicationRequest, options?: Configuration): Promise<FaxApplicationResponse> {
        return this.api.getFaxApplication(param.id,  options).toPromise();
    }

    /**
     * This endpoint returns a list of your Fax Applications inside the \'data\' attribute of the response. You can adjust which applications are listed by using filters. Fax Applications are used to configure how you send and receive faxes using the Programmable Fax API with Telnyx.
     * List all Fax Applications
     * @param param the request object
     */
    public listFaxApplications(param: ProgrammableFaxApplicationsApiListFaxApplicationsRequest = {}, options?: Configuration): Promise<GetAllFaxApplicationsResponse> {
        return this.api.listFaxApplications(param.pageNumber, param.pageSize, param.filterApplicationNameContains, param.filterOutboundVoiceProfileId, param.sort,  options).toPromise();
    }

    /**
     * Updates settings of an existing Fax Application based on the parameters of the request.
     * Update a Fax Application
     * @param param the request object
     */
    public updateFaxApplication(param: ProgrammableFaxApplicationsApiUpdateFaxApplicationRequest, options?: Configuration): Promise<FaxApplicationResponse> {
        return this.api.updateFaxApplication(param.id, param.updateFaxApplicationRequest,  options).toPromise();
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

import { ObservablePublicInternetGatewaysApi } from "./ObservableAPI.ts";
import { PublicInternetGatewaysApiRequestFactory, PublicInternetGatewaysApiResponseProcessor} from "../apis/PublicInternetGatewaysApi.ts";

export interface PublicInternetGatewaysApiPublicInternetGatewayCreateRequest {
    /**
     * 
     * @type PublicInternetGatewayCreate
     * @memberof PublicInternetGatewaysApipublicInternetGatewayCreate
     */
    publicInternetGatewayCreate: PublicInternetGatewayCreate
}

export interface PublicInternetGatewaysApiPublicInternetGatewayDeleteRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof PublicInternetGatewaysApipublicInternetGatewayDelete
     */
    id: string
}

export interface PublicInternetGatewaysApiPublicInternetGatewayGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof PublicInternetGatewaysApipublicInternetGatewayGet
     */
    id: string
}

export interface PublicInternetGatewaysApiPublicInternetGatewayListRequest {
    /**
     * The page number to load
     * @type number
     * @memberof PublicInternetGatewaysApipublicInternetGatewayList
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof PublicInternetGatewaysApipublicInternetGatewayList
     */
    pageSize?: number
    /**
     * The associated network id to filter on.
     * @type string
     * @memberof PublicInternetGatewaysApipublicInternetGatewayList
     */
    filterNetworkId?: string
}

export class ObjectPublicInternetGatewaysApi {
    private api: ObservablePublicInternetGatewaysApi

    public constructor(configuration: Configuration, requestFactory?: PublicInternetGatewaysApiRequestFactory, responseProcessor?: PublicInternetGatewaysApiResponseProcessor) {
        this.api = new ObservablePublicInternetGatewaysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Public Internet Gateway.
     * Create a Public Internet Gateway
     * @param param the request object
     */
    public publicInternetGatewayCreate(param: PublicInternetGatewaysApiPublicInternetGatewayCreateRequest, options?: Configuration): Promise<PublicInternetGatewayCreate202Response> {
        return this.api.publicInternetGatewayCreate(param.publicInternetGatewayCreate,  options).toPromise();
    }

    /**
     * Delete a Public Internet Gateway.
     * Delete a Public Internet Gateway
     * @param param the request object
     */
    public publicInternetGatewayDelete(param: PublicInternetGatewaysApiPublicInternetGatewayDeleteRequest, options?: Configuration): Promise<PublicInternetGatewayCreate202Response> {
        return this.api.publicInternetGatewayDelete(param.id,  options).toPromise();
    }

    /**
     * Retrieve a Public Internet Gateway.
     * Retrieve a Public Internet Gateway
     * @param param the request object
     */
    public publicInternetGatewayGet(param: PublicInternetGatewaysApiPublicInternetGatewayGetRequest, options?: Configuration): Promise<PublicInternetGatewayCreate202Response> {
        return this.api.publicInternetGatewayGet(param.id,  options).toPromise();
    }

    /**
     * List all Public Internet Gateways.
     * List all Public Internet Gateways
     * @param param the request object
     */
    public publicInternetGatewayList(param: PublicInternetGatewaysApiPublicInternetGatewayListRequest = {}, options?: Configuration): Promise<PublicInternetGatewayList200Response> {
        return this.api.publicInternetGatewayList(param.pageNumber, param.pageSize, param.filterNetworkId,  options).toPromise();
    }

}

import { ObservablePushCredentialsApi } from "./ObservableAPI.ts";
import { PushCredentialsApiRequestFactory, PushCredentialsApiResponseProcessor} from "../apis/PushCredentialsApi.ts";

export interface PushCredentialsApiCreatePushCredentialRequest {
    /**
     * Mobile push credential parameters that need to be sent in the request
     * @type CreatePushCredentialRequest
     * @memberof PushCredentialsApicreatePushCredential
     */
    createPushCredentialRequest: CreatePushCredentialRequest
}

export interface PushCredentialsApiDeletePushCredentialByIdRequest {
    /**
     * The unique identifier of a mobile push credential
     * @type string
     * @memberof PushCredentialsApideletePushCredentialById
     */
    pushCredentialId: string
}

export interface PushCredentialsApiGetPushCredentialByIdRequest {
    /**
     * The unique identifier of a mobile push credential
     * @type string
     * @memberof PushCredentialsApigetPushCredentialById
     */
    pushCredentialId: string
}

export interface PushCredentialsApiListPushCredentialsRequest {
    /**
     * type of mobile push credentials
     * @type &#39;ios&#39; | &#39;android&#39;
     * @memberof PushCredentialsApilistPushCredentials
     */
    filterType?: 'ios' | 'android'
    /**
     * Unique mobile push credential alias
     * @type string
     * @memberof PushCredentialsApilistPushCredentials
     */
    filterAlias?: string
    /**
     * The size of the page
     * @type number
     * @memberof PushCredentialsApilistPushCredentials
     */
    pageSize?: number
    /**
     * The page number to load
     * @type number
     * @memberof PushCredentialsApilistPushCredentials
     */
    pageNumber?: number
}

export class ObjectPushCredentialsApi {
    private api: ObservablePushCredentialsApi

    public constructor(configuration: Configuration, requestFactory?: PushCredentialsApiRequestFactory, responseProcessor?: PushCredentialsApiResponseProcessor) {
        this.api = new ObservablePushCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new mobile push credential
     * Creates a new mobile push credential
     * @param param the request object
     */
    public createPushCredential(param: PushCredentialsApiCreatePushCredentialRequest, options?: Configuration): Promise<void> {
        return this.api.createPushCredential(param.createPushCredentialRequest,  options).toPromise();
    }

    /**
     * Deletes a mobile push credential based on the given `push_credential_id`
     * Deletes a mobile push credential
     * @param param the request object
     */
    public deletePushCredentialById(param: PushCredentialsApiDeletePushCredentialByIdRequest, options?: Configuration): Promise<void> {
        return this.api.deletePushCredentialById(param.pushCredentialId,  options).toPromise();
    }

    /**
     * Retrieves mobile push credential based on the given `push_credential_id`
     * Retrieves a mobile push credential
     * @param param the request object
     */
    public getPushCredentialById(param: PushCredentialsApiGetPushCredentialByIdRequest, options?: Configuration): Promise<void> {
        return this.api.getPushCredentialById(param.pushCredentialId,  options).toPromise();
    }

    /**
     * List mobile push credentials
     * List mobile push credentials
     * @param param the request object
     */
    public listPushCredentials(param: PushCredentialsApiListPushCredentialsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.listPushCredentials(param.filterType, param.filterAlias, param.pageSize, param.pageNumber,  options).toPromise();
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

import { ObservableRegionsApi } from "./ObservableAPI.ts";
import { RegionsApiRequestFactory, RegionsApiResponseProcessor} from "../apis/RegionsApi.ts";

export interface RegionsApiRegionListRequest {
}

export class ObjectRegionsApi {
    private api: ObservableRegionsApi

    public constructor(configuration: Configuration, requestFactory?: RegionsApiRequestFactory, responseProcessor?: RegionsApiResponseProcessor) {
        this.api = new ObservableRegionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all regions and the interfaces that region supports
     * List all Regions
     * @param param the request object
     */
    public regionList(param: RegionsApiRegionListRequest = {}, options?: Configuration): Promise<RegionList200Response> {
        return this.api.regionList( options).toPromise();
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

import { ObservableReportingApi } from "./ObservableAPI.ts";
import { ReportingApiRequestFactory, ReportingApiResponseProcessor} from "../apis/ReportingApi.ts";

export interface ReportingApiCreateWdrReportRequest {
    /**
     * 
     * @type WdrReportRequest
     * @memberof ReportingApicreateWdrReport
     */
    wdrReportRequest: WdrReportRequest
}

export interface ReportingApiDeleteWdrReportRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof ReportingApideleteWdrReport
     */
    id: string
}

export interface ReportingApiGetWdrReportRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof ReportingApigetWdrReport
     */
    id: string
}

export interface ReportingApiGetWdrReportsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof ReportingApigetWdrReports
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof ReportingApigetWdrReports
     */
    pageSize?: number
}

export class ObjectReportingApi {
    private api: ObservableReportingApi

    public constructor(configuration: Configuration, requestFactory?: ReportingApiRequestFactory, responseProcessor?: ReportingApiResponseProcessor) {
        this.api = new ObservableReportingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Asynchronously create a report containing Wireless Detail Records (WDRs) for the SIM cards that consumed wireless data in the given time period. 
     * Create a Wireless Detail Records (WDRs) Report
     * @param param the request object
     */
    public createWdrReport(param: ReportingApiCreateWdrReportRequest, options?: Configuration): Promise<CreateWdrReport201Response> {
        return this.api.createWdrReport(param.wdrReportRequest,  options).toPromise();
    }

    /**
     * Deletes one specific WDR report
     * Delete a Wireless Detail Record (WDR) Report
     * @param param the request object
     */
    public deleteWdrReport(param: ReportingApiDeleteWdrReportRequest, options?: Configuration): Promise<CreateWdrReport201Response> {
        return this.api.deleteWdrReport(param.id,  options).toPromise();
    }

    /**
     * Returns one specific WDR report
     * Get a Wireless Detail Record (WDR) Report
     * @param param the request object
     */
    public getWdrReport(param: ReportingApiGetWdrReportRequest, options?: Configuration): Promise<CreateWdrReport201Response> {
        return this.api.getWdrReport(param.id,  options).toPromise();
    }

    /**
     * Returns the WDR Reports that match the given parameters.
     * Get all Wireless Detail Records (WDRs) Reports
     * @param param the request object
     */
    public getWdrReports(param: ReportingApiGetWdrReportsRequest = {}, options?: Configuration): Promise<GetWdrReports200Response> {
        return this.api.getWdrReports(param.pageNumber, param.pageSize,  options).toPromise();
    }

}

import { ObservableReportsApi } from "./ObservableAPI.ts";
import { ReportsApiRequestFactory, ReportsApiResponseProcessor} from "../apis/ReportsApi.ts";

export interface ReportsApiCreateLedgerBillingGroupReportRequest {
    /**
     * New ledger billing group report parameters
     * @type NewLedgerBillingGroupReport
     * @memberof ReportsApicreateLedgerBillingGroupReport
     */
    newLedgerBillingGroupReport: NewLedgerBillingGroupReport
}

export interface ReportsApiRetrieveLedgerBillingGroupReportRequest {
    /**
     * The id of the ledger billing group report
     * @type string
     * @memberof ReportsApiretrieveLedgerBillingGroupReport
     */
    id: string
}

export class ObjectReportsApi {
    private api: ObservableReportsApi

    public constructor(configuration: Configuration, requestFactory?: ReportsApiRequestFactory, responseProcessor?: ReportsApiResponseProcessor) {
        this.api = new ObservableReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a ledger billing group report
     * @param param the request object
     */
    public createLedgerBillingGroupReport(param: ReportsApiCreateLedgerBillingGroupReportRequest, options?: Configuration): Promise<CreateLedgerBillingGroupReport200Response> {
        return this.api.createLedgerBillingGroupReport(param.newLedgerBillingGroupReport,  options).toPromise();
    }

    /**
     * Retrieve a ledger billing group report
     * @param param the request object
     */
    public retrieveLedgerBillingGroupReport(param: ReportsApiRetrieveLedgerBillingGroupReportRequest, options?: Configuration): Promise<CreateLedgerBillingGroupReport200Response> {
        return this.api.retrieveLedgerBillingGroupReport(param.id,  options).toPromise();
    }

}

import { ObservableRequirementTypesApi } from "./ObservableAPI.ts";
import { RequirementTypesApiRequestFactory, RequirementTypesApiResponseProcessor} from "../apis/RequirementTypesApi.ts";

export interface RequirementTypesApiDocReqsListRequirementTypesRequest {
    /**
     * Filters requirement types to those whose name contains a certain string.
     * @type string
     * @memberof RequirementTypesApidocReqsListRequirementTypes
     */
    filterNameContains?: string
    /**
     * Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a &#x60;-&#x60; in front of the field name.
     * @type &#39;created_at&#39; | &#39;name&#39; | &#39;updated_at&#39;
     * @memberof RequirementTypesApidocReqsListRequirementTypes
     */
    sort?: 'created_at' | 'name' | 'updated_at'
}

export interface RequirementTypesApiDocReqsRetrieveRequirementTypeRequest {
    /**
     * Uniquely identifies the requirement_type record
     * @type string
     * @memberof RequirementTypesApidocReqsRetrieveRequirementType
     */
    id: string
}

export class ObjectRequirementTypesApi {
    private api: ObservableRequirementTypesApi

    public constructor(configuration: Configuration, requestFactory?: RequirementTypesApiRequestFactory, responseProcessor?: RequirementTypesApiResponseProcessor) {
        this.api = new ObservableRequirementTypesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all requirement types ordered by created_at descending
     * List all requirement types
     * @param param the request object
     */
    public docReqsListRequirementTypes(param: RequirementTypesApiDocReqsListRequirementTypesRequest = {}, options?: Configuration): Promise<DocReqsListRequirementTypes200Response> {
        return this.api.docReqsListRequirementTypes(param.filterNameContains, param.sort,  options).toPromise();
    }

    /**
     * Retrieve a requirement type by id
     * Retrieve a requirement types
     * @param param the request object
     */
    public docReqsRetrieveRequirementType(param: RequirementTypesApiDocReqsRetrieveRequirementTypeRequest, options?: Configuration): Promise<DocReqsRetrieveRequirementType200Response> {
        return this.api.docReqsRetrieveRequirementType(param.id,  options).toPromise();
    }

}

import { ObservableRequirementsApi } from "./ObservableAPI.ts";
import { RequirementsApiRequestFactory, RequirementsApiResponseProcessor} from "../apis/RequirementsApi.ts";

export interface RequirementsApiDocReqsRetrieveDocumentRequirementsRequest {
    /**
     * Uniquely identifies the requirement_type record
     * @type string
     * @memberof RequirementsApidocReqsRetrieveDocumentRequirements
     */
    id: string
}

export interface RequirementsApiListRequirementsRequest {
    /**
     * Filters results to those applying to a 2-character (ISO 3166-1 alpha-2) country code
     * @type string
     * @memberof RequirementsApilistRequirements
     */
    filterCountryCode?: string
    /**
     * Filters results to those applying to a specific &#x60;phone_number_type&#x60;
     * @type &#39;local&#39; | &#39;national&#39; | &#39;toll-free&#39;
     * @memberof RequirementsApilistRequirements
     */
    filterPhoneNumberType?: 'local' | 'national' | 'toll-free'
    /**
     * Filters requirements to those applying to a specific action.
     * @type &#39;ordering&#39; | &#39;porting&#39;
     * @memberof RequirementsApilistRequirements
     */
    filterAction?: 'ordering' | 'porting'
    /**
     * Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a &#x60;-&#x60; in front of the field name.
     * @type &#39;action&#39; | &#39;country_code&#39; | &#39;locality&#39; | &#39;phone_number_type&#39;
     * @memberof RequirementsApilistRequirements
     */
    sort?: 'action' | 'country_code' | 'locality' | 'phone_number_type'
    /**
     * The page number to load
     * @type number
     * @memberof RequirementsApilistRequirements
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof RequirementsApilistRequirements
     */
    pageSize?: number
}

export class ObjectRequirementsApi {
    private api: ObservableRequirementsApi

    public constructor(configuration: Configuration, requestFactory?: RequirementsApiRequestFactory, responseProcessor?: RequirementsApiResponseProcessor) {
        this.api = new ObservableRequirementsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a document requirement record
     * Retrieve a document requirement
     * @param param the request object
     */
    public docReqsRetrieveDocumentRequirements(param: RequirementsApiDocReqsRetrieveDocumentRequirementsRequest, options?: Configuration): Promise<DocReqsRetrieveDocumentRequirements200Response> {
        return this.api.docReqsRetrieveDocumentRequirements(param.id,  options).toPromise();
    }

    /**
     * List all requirements with filtering, sorting, and pagination
     * List all requirements
     * @param param the request object
     */
    public listRequirements(param: RequirementsApiListRequirementsRequest = {}, options?: Configuration): Promise<ListRequirements200Response> {
        return this.api.listRequirements(param.filterCountryCode, param.filterPhoneNumberType, param.filterAction, param.sort, param.pageNumber, param.pageSize,  options).toPromise();
    }

}

import { ObservableRoomCompositionsApi } from "./ObservableAPI.ts";
import { RoomCompositionsApiRequestFactory, RoomCompositionsApiResponseProcessor} from "../apis/RoomCompositionsApi.ts";

export interface RoomCompositionsApiCreateRoomCompositionRequest {
    /**
     * Parameters that can be defined during room composition creation.
     * @type CreateRoomCompositionRequest
     * @memberof RoomCompositionsApicreateRoomComposition
     */
    createRoomCompositionRequest: CreateRoomCompositionRequest
}

export interface RoomCompositionsApiDeleteRoomCompositionRequest {
    /**
     * The unique identifier of a room composition.
     * @type string
     * @memberof RoomCompositionsApideleteRoomComposition
     */
    roomCompositionId: string
}

export interface RoomCompositionsApiListRoomCompositionsRequest {
    /**
     * ISO 8601 date for filtering room compositions created on that date.
     * @type string
     * @memberof RoomCompositionsApilistRoomCompositions
     */
    filterDateCreatedAtEq?: string
    /**
     * ISO 8601 date for filtering room compositions created after that date.
     * @type string
     * @memberof RoomCompositionsApilistRoomCompositions
     */
    filterDateCreatedAtGte?: string
    /**
     * ISO 8601 date for filtering room compositions created before that date.
     * @type string
     * @memberof RoomCompositionsApilistRoomCompositions
     */
    filterDateCreatedAtLte?: string
    /**
     * The session_id for filtering room compositions.
     * @type string
     * @memberof RoomCompositionsApilistRoomCompositions
     */
    filterSessionId?: string
    /**
     * The status for filtering room compositions.
     * @type &#39;completed&#39; | &#39;processing&#39; | &#39;enqueued&#39;
     * @memberof RoomCompositionsApilistRoomCompositions
     */
    filterStatus?: 'completed' | 'processing' | 'enqueued'
    /**
     * The size of the page
     * @type number
     * @memberof RoomCompositionsApilistRoomCompositions
     */
    pageSize?: number
    /**
     * The page number to load
     * @type number
     * @memberof RoomCompositionsApilistRoomCompositions
     */
    pageNumber?: number
}

export interface RoomCompositionsApiViewRoomCompositionRequest {
    /**
     * The unique identifier of a room composition.
     * @type string
     * @memberof RoomCompositionsApiviewRoomComposition
     */
    roomCompositionId: string
}

export class ObjectRoomCompositionsApi {
    private api: ObservableRoomCompositionsApi

    public constructor(configuration: Configuration, requestFactory?: RoomCompositionsApiRequestFactory, responseProcessor?: RoomCompositionsApiResponseProcessor) {
        this.api = new ObservableRoomCompositionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Asynchronously create a room composition.
     * Create a room composition.
     * @param param the request object
     */
    public createRoomComposition(param: RoomCompositionsApiCreateRoomCompositionRequest, options?: Configuration): Promise<CreateRoomComposition202Response> {
        return this.api.createRoomComposition(param.createRoomCompositionRequest,  options).toPromise();
    }

    /**
     * Synchronously delete a room composition.
     * Delete a room composition.
     * @param param the request object
     */
    public deleteRoomComposition(param: RoomCompositionsApiDeleteRoomCompositionRequest, options?: Configuration): Promise<void> {
        return this.api.deleteRoomComposition(param.roomCompositionId,  options).toPromise();
    }

    /**
     * 
     * View a list of room compositions.
     * @param param the request object
     */
    public listRoomCompositions(param: RoomCompositionsApiListRoomCompositionsRequest = {}, options?: Configuration): Promise<ListRoomCompositions200Response> {
        return this.api.listRoomCompositions(param.filterDateCreatedAtEq, param.filterDateCreatedAtGte, param.filterDateCreatedAtLte, param.filterSessionId, param.filterStatus, param.pageSize, param.pageNumber,  options).toPromise();
    }

    /**
     * View a room composition.
     * @param param the request object
     */
    public viewRoomComposition(param: RoomCompositionsApiViewRoomCompositionRequest, options?: Configuration): Promise<CreateRoomComposition202Response> {
        return this.api.viewRoomComposition(param.roomCompositionId,  options).toPromise();
    }

}

import { ObservableRoomParticipantsApi } from "./ObservableAPI.ts";
import { RoomParticipantsApiRequestFactory, RoomParticipantsApiResponseProcessor} from "../apis/RoomParticipantsApi.ts";

export interface RoomParticipantsApiListRoomParticipantsRequest {
    /**
     * ISO 8601 date for filtering room participants that joined on that date.
     * @type string
     * @memberof RoomParticipantsApilistRoomParticipants
     */
    filterDateJoinedAtEq?: string
    /**
     * ISO 8601 date for filtering room participants that joined after that date.
     * @type string
     * @memberof RoomParticipantsApilistRoomParticipants
     */
    filterDateJoinedAtGte?: string
    /**
     * ISO 8601 date for filtering room participants that joined before that date.
     * @type string
     * @memberof RoomParticipantsApilistRoomParticipants
     */
    filterDateJoinedAtLte?: string
    /**
     * ISO 8601 date for filtering room participants updated on that date.
     * @type string
     * @memberof RoomParticipantsApilistRoomParticipants
     */
    filterDateUpdatedAtEq?: string
    /**
     * ISO 8601 date for filtering room participants updated after that date.
     * @type string
     * @memberof RoomParticipantsApilistRoomParticipants
     */
    filterDateUpdatedAtGte?: string
    /**
     * ISO 8601 date for filtering room participants updated before that date.
     * @type string
     * @memberof RoomParticipantsApilistRoomParticipants
     */
    filterDateUpdatedAtLte?: string
    /**
     * ISO 8601 date for filtering room participants that left on that date.
     * @type string
     * @memberof RoomParticipantsApilistRoomParticipants
     */
    filterDateLeftAtEq?: string
    /**
     * ISO 8601 date for filtering room participants that left after that date.
     * @type string
     * @memberof RoomParticipantsApilistRoomParticipants
     */
    filterDateLeftAtGte?: string
    /**
     * ISO 8601 date for filtering room participants that left before that date.
     * @type string
     * @memberof RoomParticipantsApilistRoomParticipants
     */
    filterDateLeftAtLte?: string
    /**
     * Filter room participants based on the context.
     * @type string
     * @memberof RoomParticipantsApilistRoomParticipants
     */
    filterContext?: string
    /**
     * Session_id for filtering room participants.
     * @type string
     * @memberof RoomParticipantsApilistRoomParticipants
     */
    filterSessionId?: string
    /**
     * The size of the page
     * @type number
     * @memberof RoomParticipantsApilistRoomParticipants
     */
    pageSize?: number
    /**
     * The page number to load
     * @type number
     * @memberof RoomParticipantsApilistRoomParticipants
     */
    pageNumber?: number
}

export interface RoomParticipantsApiViewRoomParticipantRequest {
    /**
     * The unique identifier of a room participant.
     * @type string
     * @memberof RoomParticipantsApiviewRoomParticipant
     */
    roomParticipantId: string
}

export class ObjectRoomParticipantsApi {
    private api: ObservableRoomParticipantsApi

    public constructor(configuration: Configuration, requestFactory?: RoomParticipantsApiRequestFactory, responseProcessor?: RoomParticipantsApiResponseProcessor) {
        this.api = new ObservableRoomParticipantsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * View a list of room participants.
     * @param param the request object
     */
    public listRoomParticipants(param: RoomParticipantsApiListRoomParticipantsRequest = {}, options?: Configuration): Promise<ListRoomParticipants200Response> {
        return this.api.listRoomParticipants(param.filterDateJoinedAtEq, param.filterDateJoinedAtGte, param.filterDateJoinedAtLte, param.filterDateUpdatedAtEq, param.filterDateUpdatedAtGte, param.filterDateUpdatedAtLte, param.filterDateLeftAtEq, param.filterDateLeftAtGte, param.filterDateLeftAtLte, param.filterContext, param.filterSessionId, param.pageSize, param.pageNumber,  options).toPromise();
    }

    /**
     * View a room participant.
     * @param param the request object
     */
    public viewRoomParticipant(param: RoomParticipantsApiViewRoomParticipantRequest, options?: Configuration): Promise<ViewRoomParticipant200Response> {
        return this.api.viewRoomParticipant(param.roomParticipantId,  options).toPromise();
    }

}

import { ObservableRoomRecordingsApi } from "./ObservableAPI.ts";
import { RoomRecordingsApiRequestFactory, RoomRecordingsApiResponseProcessor} from "../apis/RoomRecordingsApi.ts";

export interface RoomRecordingsApiDeleteRoomRecordingRequest {
    /**
     * The unique identifier of a room recording.
     * @type string
     * @memberof RoomRecordingsApideleteRoomRecording
     */
    roomRecordingId: string
}

export interface RoomRecordingsApiDeleteRoomRecordingsRequest {
    /**
     * ISO 8601 date for filtering room recordings ended on that date.
     * @type string
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    filterDateEndedAtEq?: string
    /**
     * ISO 8601 date for filtering room recordings ended after that date.
     * @type string
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    filterDateEndedAtGte?: string
    /**
     * ISO 8601 date for filtering room recordings ended before that date.
     * @type string
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    filterDateEndedAtLte?: string
    /**
     * ISO 8601 date for filtering room recordings started on that date.
     * @type string
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    filterDateStartedAtEq?: string
    /**
     * ISO 8601 date for filtering room recordings started after that date.
     * @type string
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    filterDateStartedAtGte?: string
    /**
     * ISO 8601 date for filtering room recordings started before that date.
     * @type string
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    filterDateStartedAtLte?: string
    /**
     * room_id for filtering room recordings.
     * @type string
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    filterRoomId?: string
    /**
     * participant_id for filtering room recordings.
     * @type string
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    filterParticipantId?: string
    /**
     * session_id for filtering room recordings.
     * @type string
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    filterSessionId?: string
    /**
     * status for filtering room recordings.
     * @type string
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    filterStatus?: string
    /**
     * type for filtering room recordings.
     * @type string
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    filterType?: string
    /**
     * duration_secs equal for filtering room recordings.
     * @type number
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    filterDurationSecsEq?: number
    /**
     * duration_secs less or equal for filtering room recordings.
     * @type number
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    filterDurationSecsLte?: number
    /**
     * duration_secs greater or equal for filtering room recordings.
     * @type number
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    filterDurationSecsGte?: number
    /**
     * The size of the page
     * @type number
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    pageSize?: number
    /**
     * The page number to load
     * @type number
     * @memberof RoomRecordingsApideleteRoomRecordings
     */
    pageNumber?: number
}

export interface RoomRecordingsApiListRoomRecordingsRequest {
    /**
     * ISO 8601 date for filtering room recordings ended on that date.
     * @type string
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    filterDateEndedAtEq?: string
    /**
     * ISO 8601 date for filtering room recordings ended after that date.
     * @type string
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    filterDateEndedAtGte?: string
    /**
     * ISO 8601 date for filtering room recordings ended before that date.
     * @type string
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    filterDateEndedAtLte?: string
    /**
     * ISO 8601 date for filtering room recordings started on that date.
     * @type string
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    filterDateStartedAtEq?: string
    /**
     * ISO 8601 date for filtering room recordings started after that date.
     * @type string
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    filterDateStartedAtGte?: string
    /**
     * ISO 8601 date for filtering room recordings started before that date.
     * @type string
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    filterDateStartedAtLte?: string
    /**
     * room_id for filtering room recordings.
     * @type string
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    filterRoomId?: string
    /**
     * participant_id for filtering room recordings.
     * @type string
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    filterParticipantId?: string
    /**
     * session_id for filtering room recordings.
     * @type string
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    filterSessionId?: string
    /**
     * status for filtering room recordings.
     * @type string
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    filterStatus?: string
    /**
     * type for filtering room recordings.
     * @type string
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    filterType?: string
    /**
     * duration_secs equal for filtering room recordings.
     * @type number
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    filterDurationSecsEq?: number
    /**
     * duration_secs less or equal for filtering room recordings.
     * @type number
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    filterDurationSecsLte?: number
    /**
     * duration_secs greater or equal for filtering room recordings.
     * @type number
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    filterDurationSecsGte?: number
    /**
     * The size of the page
     * @type number
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    pageSize?: number
    /**
     * The page number to load
     * @type number
     * @memberof RoomRecordingsApilistRoomRecordings
     */
    pageNumber?: number
}

export interface RoomRecordingsApiViewRoomRecordingRequest {
    /**
     * The unique identifier of a room recording.
     * @type string
     * @memberof RoomRecordingsApiviewRoomRecording
     */
    roomRecordingId: string
}

export class ObjectRoomRecordingsApi {
    private api: ObservableRoomRecordingsApi

    public constructor(configuration: Configuration, requestFactory?: RoomRecordingsApiRequestFactory, responseProcessor?: RoomRecordingsApiResponseProcessor) {
        this.api = new ObservableRoomRecordingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Synchronously delete a Room Recording.
     * Delete a room recording.
     * @param param the request object
     */
    public deleteRoomRecording(param: RoomRecordingsApiDeleteRoomRecordingRequest, options?: Configuration): Promise<void> {
        return this.api.deleteRoomRecording(param.roomRecordingId,  options).toPromise();
    }

    /**
     * 
     * Delete several room recordings in a bulk.
     * @param param the request object
     */
    public deleteRoomRecordings(param: RoomRecordingsApiDeleteRoomRecordingsRequest = {}, options?: Configuration): Promise<BulkRoomRecordingsDeleteResponse> {
        return this.api.deleteRoomRecordings(param.filterDateEndedAtEq, param.filterDateEndedAtGte, param.filterDateEndedAtLte, param.filterDateStartedAtEq, param.filterDateStartedAtGte, param.filterDateStartedAtLte, param.filterRoomId, param.filterParticipantId, param.filterSessionId, param.filterStatus, param.filterType, param.filterDurationSecsEq, param.filterDurationSecsLte, param.filterDurationSecsGte, param.pageSize, param.pageNumber,  options).toPromise();
    }

    /**
     * 
     * View a list of room recordings.
     * @param param the request object
     */
    public listRoomRecordings(param: RoomRecordingsApiListRoomRecordingsRequest = {}, options?: Configuration): Promise<ListRoomRecordings200Response> {
        return this.api.listRoomRecordings(param.filterDateEndedAtEq, param.filterDateEndedAtGte, param.filterDateEndedAtLte, param.filterDateStartedAtEq, param.filterDateStartedAtGte, param.filterDateStartedAtLte, param.filterRoomId, param.filterParticipantId, param.filterSessionId, param.filterStatus, param.filterType, param.filterDurationSecsEq, param.filterDurationSecsLte, param.filterDurationSecsGte, param.pageSize, param.pageNumber,  options).toPromise();
    }

    /**
     * View a room recording.
     * @param param the request object
     */
    public viewRoomRecording(param: RoomRecordingsApiViewRoomRecordingRequest, options?: Configuration): Promise<ViewRoomRecording200Response> {
        return this.api.viewRoomRecording(param.roomRecordingId,  options).toPromise();
    }

}

import { ObservableRoomSessionsApi } from "./ObservableAPI.ts";
import { RoomSessionsApiRequestFactory, RoomSessionsApiResponseProcessor} from "../apis/RoomSessionsApi.ts";

export interface RoomSessionsApiEndSessionRequest {
    /**
     * The unique identifier of a room session.
     * @type string
     * @memberof RoomSessionsApiendSession
     */
    roomSessionId: string
}

export interface RoomSessionsApiKickParticipantInSessionRequest {
    /**
     * The unique identifier of a room session.
     * @type string
     * @memberof RoomSessionsApikickParticipantInSession
     */
    roomSessionId: string
    /**
     * Parameters that can be defined during Kick action.
     * @type ActionsParticipantsRequest
     * @memberof RoomSessionsApikickParticipantInSession
     */
    actionsParticipantsRequest: ActionsParticipantsRequest
}

export interface RoomSessionsApiListRoomSessionsRequest {
    /**
     * ISO 8601 date for filtering room sessions created on that date.
     * @type string
     * @memberof RoomSessionsApilistRoomSessions
     */
    filterDateCreatedAtEq?: string
    /**
     * ISO 8601 date for filtering room sessions created after that date.
     * @type string
     * @memberof RoomSessionsApilistRoomSessions
     */
    filterDateCreatedAtGte?: string
    /**
     * ISO 8601 date for filtering room sessions created before that date.
     * @type string
     * @memberof RoomSessionsApilistRoomSessions
     */
    filterDateCreatedAtLte?: string
    /**
     * ISO 8601 date for filtering room sessions updated on that date.
     * @type string
     * @memberof RoomSessionsApilistRoomSessions
     */
    filterDateUpdatedAtEq?: string
    /**
     * ISO 8601 date for filtering room sessions updated after that date.
     * @type string
     * @memberof RoomSessionsApilistRoomSessions
     */
    filterDateUpdatedAtGte?: string
    /**
     * ISO 8601 date for filtering room sessions updated before that date.
     * @type string
     * @memberof RoomSessionsApilistRoomSessions
     */
    filterDateUpdatedAtLte?: string
    /**
     * ISO 8601 date for filtering room sessions ended on that date.
     * @type string
     * @memberof RoomSessionsApilistRoomSessions
     */
    filterDateEndedAtEq?: string
    /**
     * ISO 8601 date for filtering room sessions ended after that date.
     * @type string
     * @memberof RoomSessionsApilistRoomSessions
     */
    filterDateEndedAtGte?: string
    /**
     * ISO 8601 date for filtering room sessions ended before that date.
     * @type string
     * @memberof RoomSessionsApilistRoomSessions
     */
    filterDateEndedAtLte?: string
    /**
     * Room_id for filtering room sessions.
     * @type string
     * @memberof RoomSessionsApilistRoomSessions
     */
    filterRoomId?: string
    /**
     * Filter active or inactive room sessions.
     * @type boolean
     * @memberof RoomSessionsApilistRoomSessions
     */
    filterActive?: boolean
    /**
     * To decide if room participants should be included in the response.
     * @type boolean
     * @memberof RoomSessionsApilistRoomSessions
     */
    includeParticipants?: boolean
    /**
     * The size of the page
     * @type number
     * @memberof RoomSessionsApilistRoomSessions
     */
    pageSize?: number
    /**
     * The page number to load
     * @type number
     * @memberof RoomSessionsApilistRoomSessions
     */
    pageNumber?: number
}

export interface RoomSessionsApiMuteParticipantInSessionRequest {
    /**
     * The unique identifier of a room session.
     * @type string
     * @memberof RoomSessionsApimuteParticipantInSession
     */
    roomSessionId: string
    /**
     * Parameters that can be defined during Mute action.
     * @type ActionsParticipantsRequest
     * @memberof RoomSessionsApimuteParticipantInSession
     */
    actionsParticipantsRequest: ActionsParticipantsRequest
}

export interface RoomSessionsApiNestedListRoomParticipantsRequest {
    /**
     * The unique identifier of a room session.
     * @type string
     * @memberof RoomSessionsApinestedListRoomParticipants
     */
    roomSessionId: string
    /**
     * ISO 8601 date for filtering room participants that joined on that date.
     * @type string
     * @memberof RoomSessionsApinestedListRoomParticipants
     */
    filterDateJoinedAtEq?: string
    /**
     * ISO 8601 date for filtering room participants that joined after that date.
     * @type string
     * @memberof RoomSessionsApinestedListRoomParticipants
     */
    filterDateJoinedAtGte?: string
    /**
     * ISO 8601 date for filtering room participants that joined before that date.
     * @type string
     * @memberof RoomSessionsApinestedListRoomParticipants
     */
    filterDateJoinedAtLte?: string
    /**
     * ISO 8601 date for filtering room participants updated on that date.
     * @type string
     * @memberof RoomSessionsApinestedListRoomParticipants
     */
    filterDateUpdatedAtEq?: string
    /**
     * ISO 8601 date for filtering room participants updated after that date.
     * @type string
     * @memberof RoomSessionsApinestedListRoomParticipants
     */
    filterDateUpdatedAtGte?: string
    /**
     * ISO 8601 date for filtering room participants updated before that date.
     * @type string
     * @memberof RoomSessionsApinestedListRoomParticipants
     */
    filterDateUpdatedAtLte?: string
    /**
     * ISO 8601 date for filtering room participants that left on that date.
     * @type string
     * @memberof RoomSessionsApinestedListRoomParticipants
     */
    filterDateLeftAtEq?: string
    /**
     * ISO 8601 date for filtering room participants that left after that date.
     * @type string
     * @memberof RoomSessionsApinestedListRoomParticipants
     */
    filterDateLeftAtGte?: string
    /**
     * ISO 8601 date for filtering room participants that left before that date.
     * @type string
     * @memberof RoomSessionsApinestedListRoomParticipants
     */
    filterDateLeftAtLte?: string
    /**
     * Filter room participants based on the context.
     * @type string
     * @memberof RoomSessionsApinestedListRoomParticipants
     */
    filterContext?: string
    /**
     * The size of the page
     * @type number
     * @memberof RoomSessionsApinestedListRoomParticipants
     */
    pageSize?: number
    /**
     * The page number to load
     * @type number
     * @memberof RoomSessionsApinestedListRoomParticipants
     */
    pageNumber?: number
}

export interface RoomSessionsApiUnmuteParticipantInSessionRequest {
    /**
     * The unique identifier of a room session.
     * @type string
     * @memberof RoomSessionsApiunmuteParticipantInSession
     */
    roomSessionId: string
    /**
     * Parameters that can be defined during Unmute action.
     * @type ActionsParticipantsRequest
     * @memberof RoomSessionsApiunmuteParticipantInSession
     */
    actionsParticipantsRequest: ActionsParticipantsRequest
}

export interface RoomSessionsApiViewRoomSessionRequest {
    /**
     * The unique identifier of a room session.
     * @type string
     * @memberof RoomSessionsApiviewRoomSession
     */
    roomSessionId: string
    /**
     * To decide if room participants should be included in the response.
     * @type boolean
     * @memberof RoomSessionsApiviewRoomSession
     */
    includeParticipants?: boolean
}

export class ObjectRoomSessionsApi {
    private api: ObservableRoomSessionsApi

    public constructor(configuration: Configuration, requestFactory?: RoomSessionsApiRequestFactory, responseProcessor?: RoomSessionsApiResponseProcessor) {
        this.api = new ObservableRoomSessionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Note: this will also kick all participants currently present in the room
     * End a room session.
     * @param param the request object
     */
    public endSession(param: RoomSessionsApiEndSessionRequest, options?: Configuration): Promise<EndSession200Response> {
        return this.api.endSession(param.roomSessionId,  options).toPromise();
    }

    /**
     * 
     * Kick participants from a room session.
     * @param param the request object
     */
    public kickParticipantInSession(param: RoomSessionsApiKickParticipantInSessionRequest, options?: Configuration): Promise<EndSession200Response> {
        return this.api.kickParticipantInSession(param.roomSessionId, param.actionsParticipantsRequest,  options).toPromise();
    }

    /**
     * 
     * View a list of room sessions.
     * @param param the request object
     */
    public listRoomSessions(param: RoomSessionsApiListRoomSessionsRequest = {}, options?: Configuration): Promise<ListRoomSessions200Response> {
        return this.api.listRoomSessions(param.filterDateCreatedAtEq, param.filterDateCreatedAtGte, param.filterDateCreatedAtLte, param.filterDateUpdatedAtEq, param.filterDateUpdatedAtGte, param.filterDateUpdatedAtLte, param.filterDateEndedAtEq, param.filterDateEndedAtGte, param.filterDateEndedAtLte, param.filterRoomId, param.filterActive, param.includeParticipants, param.pageSize, param.pageNumber,  options).toPromise();
    }

    /**
     * 
     * Mute participants in room session.
     * @param param the request object
     */
    public muteParticipantInSession(param: RoomSessionsApiMuteParticipantInSessionRequest, options?: Configuration): Promise<EndSession200Response> {
        return this.api.muteParticipantInSession(param.roomSessionId, param.actionsParticipantsRequest,  options).toPromise();
    }

    /**
     * 
     * View a list of room participants.
     * @param param the request object
     */
    public nestedListRoomParticipants(param: RoomSessionsApiNestedListRoomParticipantsRequest, options?: Configuration): Promise<ListRoomParticipants200Response> {
        return this.api.nestedListRoomParticipants(param.roomSessionId, param.filterDateJoinedAtEq, param.filterDateJoinedAtGte, param.filterDateJoinedAtLte, param.filterDateUpdatedAtEq, param.filterDateUpdatedAtGte, param.filterDateUpdatedAtLte, param.filterDateLeftAtEq, param.filterDateLeftAtGte, param.filterDateLeftAtLte, param.filterContext, param.pageSize, param.pageNumber,  options).toPromise();
    }

    /**
     * 
     * Unmute participants in room session.
     * @param param the request object
     */
    public unmuteParticipantInSession(param: RoomSessionsApiUnmuteParticipantInSessionRequest, options?: Configuration): Promise<EndSession200Response> {
        return this.api.unmuteParticipantInSession(param.roomSessionId, param.actionsParticipantsRequest,  options).toPromise();
    }

    /**
     * View a room session.
     * @param param the request object
     */
    public viewRoomSession(param: RoomSessionsApiViewRoomSessionRequest, options?: Configuration): Promise<ViewRoomSession200Response> {
        return this.api.viewRoomSession(param.roomSessionId, param.includeParticipants,  options).toPromise();
    }

}

import { ObservableRoomsApi } from "./ObservableAPI.ts";
import { RoomsApiRequestFactory, RoomsApiResponseProcessor} from "../apis/RoomsApi.ts";

export interface RoomsApiCreateRoomRequest {
    /**
     * Parameters that can be defined during room creation.
     * @type CreateRoomRequest
     * @memberof RoomsApicreateRoom
     */
    createRoomRequest: CreateRoomRequest
}

export interface RoomsApiDeleteRoomRequest {
    /**
     * The unique identifier of a room.
     * @type string
     * @memberof RoomsApideleteRoom
     */
    roomId: string
}

export interface RoomsApiListRoomsRequest {
    /**
     * ISO 8601 date for filtering rooms created on that date.
     * @type string
     * @memberof RoomsApilistRooms
     */
    filterDateCreatedAtEq?: string
    /**
     * ISO 8601 date for filtering rooms created after that date.
     * @type string
     * @memberof RoomsApilistRooms
     */
    filterDateCreatedAtGte?: string
    /**
     * ISO 8601 date for filtering rooms created before that date.
     * @type string
     * @memberof RoomsApilistRooms
     */
    filterDateCreatedAtLte?: string
    /**
     * ISO 8601 date for filtering rooms updated on that date.
     * @type string
     * @memberof RoomsApilistRooms
     */
    filterDateUpdatedAtEq?: string
    /**
     * ISO 8601 date for filtering rooms updated after that date.
     * @type string
     * @memberof RoomsApilistRooms
     */
    filterDateUpdatedAtGte?: string
    /**
     * ISO 8601 date for filtering rooms updated before that date.
     * @type string
     * @memberof RoomsApilistRooms
     */
    filterDateUpdatedAtLte?: string
    /**
     * Unique_name for filtering rooms.
     * @type string
     * @memberof RoomsApilistRooms
     */
    filterUniqueName?: string
    /**
     * To decide if room sessions should be included in the response.
     * @type boolean
     * @memberof RoomsApilistRooms
     */
    includeSessions?: boolean
    /**
     * The size of the page
     * @type number
     * @memberof RoomsApilistRooms
     */
    pageSize?: number
    /**
     * The page number to load
     * @type number
     * @memberof RoomsApilistRooms
     */
    pageNumber?: number
}

export interface RoomsApiNestedListRoomSessionsRequest {
    /**
     * The unique identifier of a room.
     * @type string
     * @memberof RoomsApinestedListRoomSessions
     */
    roomId: string
    /**
     * ISO 8601 date for filtering room sessions created on that date.
     * @type string
     * @memberof RoomsApinestedListRoomSessions
     */
    filterDateCreatedAtEq?: string
    /**
     * ISO 8601 date for filtering room sessions created after that date.
     * @type string
     * @memberof RoomsApinestedListRoomSessions
     */
    filterDateCreatedAtGte?: string
    /**
     * ISO 8601 date for filtering room sessions created before that date.
     * @type string
     * @memberof RoomsApinestedListRoomSessions
     */
    filterDateCreatedAtLte?: string
    /**
     * ISO 8601 date for filtering room sessions updated on that date.
     * @type string
     * @memberof RoomsApinestedListRoomSessions
     */
    filterDateUpdatedAtEq?: string
    /**
     * ISO 8601 date for filtering room sessions updated after that date.
     * @type string
     * @memberof RoomsApinestedListRoomSessions
     */
    filterDateUpdatedAtGte?: string
    /**
     * ISO 8601 date for filtering room sessions updated before that date.
     * @type string
     * @memberof RoomsApinestedListRoomSessions
     */
    filterDateUpdatedAtLte?: string
    /**
     * ISO 8601 date for filtering room sessions ended on that date.
     * @type string
     * @memberof RoomsApinestedListRoomSessions
     */
    filterDateEndedAtEq?: string
    /**
     * ISO 8601 date for filtering room sessions ended after that date.
     * @type string
     * @memberof RoomsApinestedListRoomSessions
     */
    filterDateEndedAtGte?: string
    /**
     * ISO 8601 date for filtering room sessions ended before that date.
     * @type string
     * @memberof RoomsApinestedListRoomSessions
     */
    filterDateEndedAtLte?: string
    /**
     * Filter active or inactive room sessions.
     * @type boolean
     * @memberof RoomsApinestedListRoomSessions
     */
    filterActive?: boolean
    /**
     * To decide if room participants should be included in the response.
     * @type boolean
     * @memberof RoomsApinestedListRoomSessions
     */
    includeParticipants?: boolean
    /**
     * The size of the page
     * @type number
     * @memberof RoomsApinestedListRoomSessions
     */
    pageSize?: number
    /**
     * The page number to load
     * @type number
     * @memberof RoomsApinestedListRoomSessions
     */
    pageNumber?: number
}

export interface RoomsApiPatchRoomRequest {
    /**
     * The unique identifier of a room.
     * @type string
     * @memberof RoomsApipatchRoom
     */
    roomId: string
    /**
     * Parameters that can be defined during room update.
     * @type PatchRoomRequest
     * @memberof RoomsApipatchRoom
     */
    patchRoomRequest: PatchRoomRequest
}

export interface RoomsApiViewRoomRequest {
    /**
     * The unique identifier of a room.
     * @type string
     * @memberof RoomsApiviewRoom
     */
    roomId: string
    /**
     * To decide if room sessions should be included in the response.
     * @type boolean
     * @memberof RoomsApiviewRoom
     */
    includeSessions?: boolean
}

export class ObjectRoomsApi {
    private api: ObservableRoomsApi

    public constructor(configuration: Configuration, requestFactory?: RoomsApiRequestFactory, responseProcessor?: RoomsApiResponseProcessor) {
        this.api = new ObservableRoomsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Synchronously create a Room.
     * Create a room.
     * @param param the request object
     */
    public createRoom(param: RoomsApiCreateRoomRequest, options?: Configuration): Promise<CreateRoom201Response> {
        return this.api.createRoom(param.createRoomRequest,  options).toPromise();
    }

    /**
     * Synchronously delete a Room. Participants from that room will be kicked out, they won\'t be able to join that room anymore, and you won\'t be charged anymore for that room.
     * Delete a room.
     * @param param the request object
     */
    public deleteRoom(param: RoomsApiDeleteRoomRequest, options?: Configuration): Promise<void> {
        return this.api.deleteRoom(param.roomId,  options).toPromise();
    }

    /**
     * 
     * View a list of rooms.
     * @param param the request object
     */
    public listRooms(param: RoomsApiListRoomsRequest = {}, options?: Configuration): Promise<ListRooms200Response> {
        return this.api.listRooms(param.filterDateCreatedAtEq, param.filterDateCreatedAtGte, param.filterDateCreatedAtLte, param.filterDateUpdatedAtEq, param.filterDateUpdatedAtGte, param.filterDateUpdatedAtLte, param.filterUniqueName, param.includeSessions, param.pageSize, param.pageNumber,  options).toPromise();
    }

    /**
     * 
     * View a list of room sessions.
     * @param param the request object
     */
    public nestedListRoomSessions(param: RoomsApiNestedListRoomSessionsRequest, options?: Configuration): Promise<ListRoomSessions200Response> {
        return this.api.nestedListRoomSessions(param.roomId, param.filterDateCreatedAtEq, param.filterDateCreatedAtGte, param.filterDateCreatedAtLte, param.filterDateUpdatedAtEq, param.filterDateUpdatedAtGte, param.filterDateUpdatedAtLte, param.filterDateEndedAtEq, param.filterDateEndedAtGte, param.filterDateEndedAtLte, param.filterActive, param.includeParticipants, param.pageSize, param.pageNumber,  options).toPromise();
    }

    /**
     * Synchronously update a Room.
     * Update a room.
     * @param param the request object
     */
    public patchRoom(param: RoomsApiPatchRoomRequest, options?: Configuration): Promise<CreateRoom201Response> {
        return this.api.patchRoom(param.roomId, param.patchRoomRequest,  options).toPromise();
    }

    /**
     * View a room.
     * @param param the request object
     */
    public viewRoom(param: RoomsApiViewRoomRequest, options?: Configuration): Promise<CreateRoom201Response> {
        return this.api.viewRoom(param.roomId, param.includeSessions,  options).toPromise();
    }

}

import { ObservableRoomsClientTokensApi } from "./ObservableAPI.ts";
import { RoomsClientTokensApiRequestFactory, RoomsClientTokensApiResponseProcessor} from "../apis/RoomsClientTokensApi.ts";

export interface RoomsClientTokensApiCreateRoomClientTokenRequest {
    /**
     * The unique identifier of a room.
     * @type string
     * @memberof RoomsClientTokensApicreateRoomClientToken
     */
    roomId: string
    /**
     * Parameters that can be defined during Room Client Token creation.
     * @type CreateRoomClientTokenRequest
     * @memberof RoomsClientTokensApicreateRoomClientToken
     */
    createRoomClientTokenRequest: CreateRoomClientTokenRequest
}

export interface RoomsClientTokensApiRefreshRoomClientTokenRequest {
    /**
     * The unique identifier of a room.
     * @type string
     * @memberof RoomsClientTokensApirefreshRoomClientToken
     */
    roomId: string
    /**
     * Parameters that can be defined during Room Client Token refresh.
     * @type RefreshRoomClientTokenRequest
     * @memberof RoomsClientTokensApirefreshRoomClientToken
     */
    refreshRoomClientTokenRequest: RefreshRoomClientTokenRequest
}

export class ObjectRoomsClientTokensApi {
    private api: ObservableRoomsClientTokensApi

    public constructor(configuration: Configuration, requestFactory?: RoomsClientTokensApiRequestFactory, responseProcessor?: RoomsClientTokensApiResponseProcessor) {
        this.api = new ObservableRoomsClientTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Synchronously create an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`, a Refresh Token is also provided to refresh a Client Token, the Refresh Token expires after `refresh_token_ttl_secs`.
     * Create Client Token to join a room.
     * @param param the request object
     */
    public createRoomClientToken(param: RoomsClientTokensApiCreateRoomClientTokenRequest, options?: Configuration): Promise<CreateRoomClientToken201Response> {
        return this.api.createRoomClientToken(param.roomId, param.createRoomClientTokenRequest,  options).toPromise();
    }

    /**
     * Synchronously refresh an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`.
     * Refresh Client Token to join a room.
     * @param param the request object
     */
    public refreshRoomClientToken(param: RoomsClientTokensApiRefreshRoomClientTokenRequest, options?: Configuration): Promise<RefreshRoomClientToken201Response> {
        return this.api.refreshRoomClientToken(param.roomId, param.refreshRoomClientTokenRequest,  options).toPromise();
    }

}

import { ObservableSIMCardActionsApi } from "./ObservableAPI.ts";
import { SIMCardActionsApiRequestFactory, SIMCardActionsApiResponseProcessor} from "../apis/SIMCardActionsApi.ts";

export interface SIMCardActionsApiBulkSimCardActionGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardActionsApibulkSimCardActionGet
     */
    id: string
}

export interface SIMCardActionsApiListBulkSIMCardActionsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof SIMCardActionsApilistBulkSIMCardActions
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof SIMCardActionsApilistBulkSIMCardActions
     */
    pageSize?: number
    /**
     * Filter by action type.
     * @type &#39;bulk_set_public_ips&#39;
     * @memberof SIMCardActionsApilistBulkSIMCardActions
     */
    filterActionType?: 'bulk_set_public_ips'
}

export interface SIMCardActionsApiListSIMCardActionsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof SIMCardActionsApilistSIMCardActions
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof SIMCardActionsApilistSIMCardActions
     */
    pageSize?: number
    /**
     * A valid SIM card ID.
     * @type string
     * @memberof SIMCardActionsApilistSIMCardActions
     */
    filterSimCardId?: string
    /**
     * Filter by a specific status of the resource\&#39;s lifecycle.
     * @type &#39;in-progress&#39; | &#39;completed&#39; | &#39;failed&#39;
     * @memberof SIMCardActionsApilistSIMCardActions
     */
    filterStatus?: 'in-progress' | 'completed' | 'failed'
    /**
     * Filter by a bulk SIM card action ID.
     * @type string
     * @memberof SIMCardActionsApilistSIMCardActions
     */
    filterBulkSimCardActionId?: string
    /**
     * Filter by action type.
     * @type &#39;enable&#39; | &#39;enable_standby_sim_card&#39; | &#39;disable&#39; | &#39;set_standby&#39; | &#39;remove_public_ip&#39; | &#39;set_public_ip&#39;
     * @memberof SIMCardActionsApilistSIMCardActions
     */
    filterActionType?: 'enable' | 'enable_standby_sim_card' | 'disable' | 'set_standby' | 'remove_public_ip' | 'set_public_ip'
}

export interface SIMCardActionsApiSimCardActionGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardActionsApisimCardActionGet
     */
    id: string
}

export class ObjectSIMCardActionsApi {
    private api: ObservableSIMCardActionsApi

    public constructor(configuration: Configuration, requestFactory?: SIMCardActionsApiRequestFactory, responseProcessor?: SIMCardActionsApiResponseProcessor) {
        this.api = new ObservableSIMCardActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API fetches information about a bulk SIM card action. A bulk SIM card action contains details about a collection of individual SIM card actions.
     * Get bulk SIM card action details
     * @param param the request object
     */
    public bulkSimCardActionGet(param: SIMCardActionsApiBulkSimCardActionGetRequest, options?: Configuration): Promise<BulkSimCardActionGet200Response> {
        return this.api.bulkSimCardActionGet(param.id,  options).toPromise();
    }

    /**
     * This API lists a paginated collection of bulk SIM card actions. A bulk SIM card action contains details about a collection of individual SIM card actions.
     * List bulk SIM card actions
     * @param param the request object
     */
    public listBulkSIMCardActions(param: SIMCardActionsApiListBulkSIMCardActionsRequest = {}, options?: Configuration): Promise<ListBulkSIMCardActions200Response> {
        return this.api.listBulkSIMCardActions(param.pageNumber, param.pageSize, param.filterActionType,  options).toPromise();
    }

    /**
     * This API lists a paginated collection of SIM card actions. It enables exploring a collection of existing asynchronous operations using specific filters.
     * List SIM card actions
     * @param param the request object
     */
    public listSIMCardActions(param: SIMCardActionsApiListSIMCardActionsRequest = {}, options?: Configuration): Promise<ListSIMCardActions200Response> {
        return this.api.listSIMCardActions(param.pageNumber, param.pageSize, param.filterSimCardId, param.filterStatus, param.filterBulkSimCardActionId, param.filterActionType,  options).toPromise();
    }

    /**
     * This API fetches detailed information about a SIM card action to follow-up on an existing asynchronous operation.
     * Get SIM card action details
     * @param param the request object
     */
    public simCardActionGet(param: SIMCardActionsApiSimCardActionGetRequest, options?: Configuration): Promise<SimCardActionGet200Response> {
        return this.api.simCardActionGet(param.id,  options).toPromise();
    }

}

import { ObservableSIMCardGroupActionsApi } from "./ObservableAPI.ts";
import { SIMCardGroupActionsApiRequestFactory, SIMCardGroupActionsApiResponseProcessor} from "../apis/SIMCardGroupActionsApi.ts";

export interface SIMCardGroupActionsApiSimCardGroupActionGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardGroupActionsApisimCardGroupActionGet
     */
    id: string
}

export interface SIMCardGroupActionsApiSimCardGroupActionsGetRequest {
    /**
     * The page number to load
     * @type number
     * @memberof SIMCardGroupActionsApisimCardGroupActionsGet
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof SIMCardGroupActionsApisimCardGroupActionsGet
     */
    pageSize?: number
    /**
     * A valid SIM card group ID.
     * @type string
     * @memberof SIMCardGroupActionsApisimCardGroupActionsGet
     */
    filterSimCardGroupId?: string
    /**
     * Filter by a specific status of the resource\&#39;s lifecycle.
     * @type &#39;in-progress&#39; | &#39;completed&#39; | &#39;failed&#39;
     * @memberof SIMCardGroupActionsApisimCardGroupActionsGet
     */
    filterStatus?: 'in-progress' | 'completed' | 'failed'
    /**
     * Filter by action type.
     * @type &#39;set_private_wireless_gateway&#39; | &#39;remove_private_wireless_gateway&#39;
     * @memberof SIMCardGroupActionsApisimCardGroupActionsGet
     */
    filterType?: 'set_private_wireless_gateway' | 'remove_private_wireless_gateway'
}

export class ObjectSIMCardGroupActionsApi {
    private api: ObservableSIMCardGroupActionsApi

    public constructor(configuration: Configuration, requestFactory?: SIMCardGroupActionsApiRequestFactory, responseProcessor?: SIMCardGroupActionsApiResponseProcessor) {
        this.api = new ObservableSIMCardGroupActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows fetching detailed information about a SIM card group action resource to make follow-ups in an existing asynchronous operation.
     * Get SIM card group action details
     * @param param the request object
     */
    public simCardGroupActionGet(param: SIMCardGroupActionsApiSimCardGroupActionGetRequest, options?: Configuration): Promise<SimCardGroupActionGet200Response> {
        return this.api.simCardGroupActionGet(param.id,  options).toPromise();
    }

    /**
     * This API allows listing a paginated collection a SIM card group actions. It allows to explore a collection of existing asynchronous operation using specific filters.
     * List SIM card group actions
     * @param param the request object
     */
    public simCardGroupActionsGet(param: SIMCardGroupActionsApiSimCardGroupActionsGetRequest = {}, options?: Configuration): Promise<SimCardGroupActionsGet200Response> {
        return this.api.simCardGroupActionsGet(param.pageNumber, param.pageSize, param.filterSimCardGroupId, param.filterStatus, param.filterType,  options).toPromise();
    }

}

import { ObservableSIMCardGroupsApi } from "./ObservableAPI.ts";
import { SIMCardGroupsApiRequestFactory, SIMCardGroupsApiResponseProcessor} from "../apis/SIMCardGroupsApi.ts";

export interface SIMCardGroupsApiRemoveSIMCardGroupPrivateWirelessGatewayRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardGroupsApiremoveSIMCardGroupPrivateWirelessGateway
     */
    id: string
}

export interface SIMCardGroupsApiSetSIMCardGroupPrivateWirelessGatewayRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardGroupsApisetSIMCardGroupPrivateWirelessGateway
     */
    id: string
    /**
     * 
     * @type SetSIMCardGroupPrivateWirelessGatewayRequest
     * @memberof SIMCardGroupsApisetSIMCardGroupPrivateWirelessGateway
     */
    setSIMCardGroupPrivateWirelessGatewayRequest: SetSIMCardGroupPrivateWirelessGatewayRequest
}

export interface SIMCardGroupsApiSimCardGroupDeleteRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardGroupsApisimCardGroupDelete
     */
    id: string
}

export interface SIMCardGroupsApiSimCardGroupUpdateRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardGroupsApisimCardGroupUpdate
     */
    id: string
    /**
     * 
     * @type SIMCardGroupPatch
     * @memberof SIMCardGroupsApisimCardGroupUpdate
     */
    sIMCardGroupPatch: SIMCardGroupPatch
}

export interface SIMCardGroupsApiSimCardGroupsGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardGroupsApisimCardGroupsGet
     */
    id: string
}

export interface SIMCardGroupsApiSimCardGroupsGetAllRequest {
    /**
     * The page number to load
     * @type number
     * @memberof SIMCardGroupsApisimCardGroupsGetAll
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof SIMCardGroupsApisimCardGroupsGetAll
     */
    pageSize?: number
    /**
     * A valid SIM card group name.
     * @type string
     * @memberof SIMCardGroupsApisimCardGroupsGetAll
     */
    filterName?: string
    /**
     * A Private Wireless Gateway ID associated with the group.
     * @type string
     * @memberof SIMCardGroupsApisimCardGroupsGetAll
     */
    filterPrivateWirelessGatewayId?: string
}

export interface SIMCardGroupsApiSimCardGroupsPostRequest {
    /**
     * 
     * @type SIMCardGroupCreate
     * @memberof SIMCardGroupsApisimCardGroupsPost
     */
    sIMCardGroupCreate: SIMCardGroupCreate
}

export class ObjectSIMCardGroupsApi {
    private api: ObservableSIMCardGroupsApi

    public constructor(configuration: Configuration, requestFactory?: SIMCardGroupsApiRequestFactory, responseProcessor?: SIMCardGroupsApiResponseProcessor) {
        this.api = new ObservableSIMCardGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This action will asynchronously remove an existing Private Wireless Gateway definition from a SIM card group. Completing this operation defines that all SIM cards in the SIM card group will get their traffic handled by Telnyx\'s default mobile network configuration.
     * Request Private Wireless Gateway removal from SIM card group
     * @param param the request object
     */
    public removeSIMCardGroupPrivateWirelessGateway(param: SIMCardGroupsApiRemoveSIMCardGroupPrivateWirelessGatewayRequest, options?: Configuration): Promise<SimCardGroupActionGet200Response> {
        return this.api.removeSIMCardGroupPrivateWirelessGateway(param.id,  options).toPromise();
    }

    /**
     * This action will asynchronously assign a provisioned Private Wireless Gateway to the SIM card group. Completing this operation defines that all SIM cards in the SIM card group will get their traffic controlled by the associated Private Wireless Gateway. This operation will also imply that new SIM cards assigned to a group will inherit its network definitions. If it\'s moved to a different group that doesn\'t have a Private Wireless Gateway, it\'ll use Telnyx\'s default mobile network configuration.
     * Request Private Wireless Gateway assignment for SIM card group
     * @param param the request object
     */
    public setSIMCardGroupPrivateWirelessGateway(param: SIMCardGroupsApiSetSIMCardGroupPrivateWirelessGatewayRequest, options?: Configuration): Promise<SimCardGroupActionGet200Response> {
        return this.api.setSIMCardGroupPrivateWirelessGateway(param.id, param.setSIMCardGroupPrivateWirelessGatewayRequest,  options).toPromise();
    }

    /**
     * Permanently deletes a SIM card group
     * Delete a SIM card group
     * @param param the request object
     */
    public simCardGroupDelete(param: SIMCardGroupsApiSimCardGroupDeleteRequest, options?: Configuration): Promise<SimCardGroupsPost200Response> {
        return this.api.simCardGroupDelete(param.id,  options).toPromise();
    }

    /**
     * Updates a SIM card group
     * Update a SIM card group
     * @param param the request object
     */
    public simCardGroupUpdate(param: SIMCardGroupsApiSimCardGroupUpdateRequest, options?: Configuration): Promise<SimCardGroupsPost200Response> {
        return this.api.simCardGroupUpdate(param.id, param.sIMCardGroupPatch,  options).toPromise();
    }

    /**
     * Returns the details regarding a specific SIM card group
     * Get SIM card group
     * @param param the request object
     */
    public simCardGroupsGet(param: SIMCardGroupsApiSimCardGroupsGetRequest, options?: Configuration): Promise<SimCardGroupsPost200Response> {
        return this.api.simCardGroupsGet(param.id,  options).toPromise();
    }

    /**
     * Get all SIM card groups belonging to the user that match the given filters.
     * Get all SIM card groups
     * @param param the request object
     */
    public simCardGroupsGetAll(param: SIMCardGroupsApiSimCardGroupsGetAllRequest = {}, options?: Configuration): Promise<SimCardGroupsGetAll200Response> {
        return this.api.simCardGroupsGetAll(param.pageNumber, param.pageSize, param.filterName, param.filterPrivateWirelessGatewayId,  options).toPromise();
    }

    /**
     * Creates a new SIM card group object
     * Create a SIM card group
     * @param param the request object
     */
    public simCardGroupsPost(param: SIMCardGroupsApiSimCardGroupsPostRequest, options?: Configuration): Promise<SimCardGroupsPost200Response> {
        return this.api.simCardGroupsPost(param.sIMCardGroupCreate,  options).toPromise();
    }

}

import { ObservableSIMCardOrdersApi } from "./ObservableAPI.ts";
import { SIMCardOrdersApiRequestFactory, SIMCardOrdersApiResponseProcessor} from "../apis/SIMCardOrdersApi.ts";

export interface SIMCardOrdersApiSimCardOrderGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardOrdersApisimCardOrderGet
     */
    id: string
}

export interface SIMCardOrdersApiSimCardOrdersGetRequest {
    /**
     * Filter by ISO 8601 formatted date-time string matching resource creation date-time.
     * @type string
     * @memberof SIMCardOrdersApisimCardOrdersGet
     */
    filterCreatedAt?: string
    /**
     * Filter by ISO 8601 formatted date-time string matching resource last update date-time.
     * @type string
     * @memberof SIMCardOrdersApisimCardOrdersGet
     */
    filterUpdatedAt?: string
    /**
     * Filter orders by how many SIM cards were ordered.
     * @type number
     * @memberof SIMCardOrdersApisimCardOrdersGet
     */
    filterQuantity?: number
    /**
     * The total monetary amount of the order.
     * @type string
     * @memberof SIMCardOrdersApisimCardOrdersGet
     */
    filterCostAmount?: string
    /**
     * Filter by ISO 4217 currency string.
     * @type string
     * @memberof SIMCardOrdersApisimCardOrdersGet
     */
    filterCostCurrency?: string
    /**
     * Uniquely identifies the address for the order.
     * @type string
     * @memberof SIMCardOrdersApisimCardOrdersGet
     */
    filterAddressId?: string
    /**
     * Returns entries with matching name of the street where the address is located.
     * @type string
     * @memberof SIMCardOrdersApisimCardOrdersGet
     */
    filterAddressStreetAddress?: string
    /**
     * Returns entries with matching name of the supplemental field for address information.
     * @type string
     * @memberof SIMCardOrdersApisimCardOrdersGet
     */
    filterAddressExtendedAddress?: string
    /**
     * Filter by the name of the city where the address is located.
     * @type string
     * @memberof SIMCardOrdersApisimCardOrdersGet
     */
    filterAddressLocality?: string
    /**
     * Filter by state or province where the address is located.
     * @type string
     * @memberof SIMCardOrdersApisimCardOrdersGet
     */
    filterAddressAdministrativeArea?: string
    /**
     * Filter by the mobile operator two-character (ISO 3166-1 alpha-2) origin country code.
     * @type string
     * @memberof SIMCardOrdersApisimCardOrdersGet
     */
    filterAddressCountryCode?: string
    /**
     * Filter by postal code for the address.
     * @type string
     * @memberof SIMCardOrdersApisimCardOrdersGet
     */
    filterAddressPostalCode?: string
    /**
     * The page number to load
     * @type number
     * @memberof SIMCardOrdersApisimCardOrdersGet
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof SIMCardOrdersApisimCardOrdersGet
     */
    pageSize?: number
}

export interface SIMCardOrdersApiSimCardOrdersPostRequest {
    /**
     * 
     * @type SimCardOrderCreate
     * @memberof SIMCardOrdersApisimCardOrdersPost
     */
    simCardOrderCreate: SimCardOrderCreate
}

export interface SIMCardOrdersApiSimCardOrdersPreviewRequest {
    /**
     * 
     * @type SimCardOrdersPreviewRequest
     * @memberof SIMCardOrdersApisimCardOrdersPreview
     */
    simCardOrdersPreviewRequest?: SimCardOrdersPreviewRequest
}

export class ObjectSIMCardOrdersApi {
    private api: ObservableSIMCardOrdersApi

    public constructor(configuration: Configuration, requestFactory?: SIMCardOrdersApiRequestFactory, responseProcessor?: SIMCardOrdersApiResponseProcessor) {
        this.api = new ObservableSIMCardOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a single SIM card order by its ID.
     * Get a single SIM card order
     * @param param the request object
     */
    public simCardOrderGet(param: SIMCardOrdersApiSimCardOrderGetRequest, options?: Configuration): Promise<SimCardOrdersPost200Response> {
        return this.api.simCardOrderGet(param.id,  options).toPromise();
    }

    /**
     * Get all SIM card orders according to filters.
     * Get all SIM card orders
     * @param param the request object
     */
    public simCardOrdersGet(param: SIMCardOrdersApiSimCardOrdersGetRequest = {}, options?: Configuration): Promise<SimCardOrdersGet200Response> {
        return this.api.simCardOrdersGet(param.filterCreatedAt, param.filterUpdatedAt, param.filterQuantity, param.filterCostAmount, param.filterCostCurrency, param.filterAddressId, param.filterAddressStreetAddress, param.filterAddressExtendedAddress, param.filterAddressLocality, param.filterAddressAdministrativeArea, param.filterAddressCountryCode, param.filterAddressPostalCode, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Creates a new order for SIM cards.
     * Create a SIM card order
     * @param param the request object
     */
    public simCardOrdersPost(param: SIMCardOrdersApiSimCardOrdersPostRequest, options?: Configuration): Promise<SimCardOrdersPost200Response> {
        return this.api.simCardOrdersPost(param.simCardOrderCreate,  options).toPromise();
    }

    /**
     * Preview SIM card order purchases.
     * Preview SIM card orders
     * @param param the request object
     */
    public simCardOrdersPreview(param: SIMCardOrdersApiSimCardOrdersPreviewRequest = {}, options?: Configuration): Promise<SimCardOrdersPreview202Response> {
        return this.api.simCardOrdersPreview(param.simCardOrdersPreviewRequest,  options).toPromise();
    }

}

import { ObservableSIMCardsApi } from "./ObservableAPI.ts";
import { SIMCardsApiRequestFactory, SIMCardsApiResponseProcessor} from "../apis/SIMCardsApi.ts";

export interface SIMCardsApiBulkSIMCardNetworkPreferencesRequest {
    /**
     * 
     * @type BulkSIMCardNetworkPreferencesRequest
     * @memberof SIMCardsApibulkSIMCardNetworkPreferences
     */
    bulkSIMCardNetworkPreferencesRequest?: BulkSIMCardNetworkPreferencesRequest
}

export interface SIMCardsApiBulkSetPublicIPsRequest {
    /**
     * 
     * @type BulkSetPublicIPsRequest
     * @memberof SIMCardsApibulkSetPublicIPs
     */
    bulkSetPublicIPsRequest?: BulkSetPublicIPsRequest
}

export interface SIMCardsApiDeleteNetworkPreferenceRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardsApideleteNetworkPreference
     */
    id: string
}

export interface SIMCardsApiListSimCardDataUsageNotificationsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof SIMCardsApilistSimCardDataUsageNotifications
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof SIMCardsApilistSimCardDataUsageNotifications
     */
    pageSize?: number
    /**
     * A valid SIM card ID.
     * @type string
     * @memberof SIMCardsApilistSimCardDataUsageNotifications
     */
    filterSimCardId?: string
}

export interface SIMCardsApiPostValidateRegistrationCodesRequest {
    /**
     * 
     * @type PostValidateRegistrationCodesRequest
     * @memberof SIMCardsApipostValidateRegistrationCodes
     */
    postValidateRegistrationCodesRequest: PostValidateRegistrationCodesRequest
}

export interface SIMCardsApiRemoveSIMCardPublicIPRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardsApiremoveSIMCardPublicIP
     */
    id: string
}

export interface SIMCardsApiSIMCardDeviceDetailsGetRequest {
    /**
     * Identifies a SIM card.
     * @type string
     * @memberof SIMCardsApisIMCardDeviceDetailsGet
     */
    simCardId: string
}

export interface SIMCardsApiSIMCardNetworkPreferencesDeleteRequest {
    /**
     * Identifies a SIM card.
     * @type string
     * @memberof SIMCardsApisIMCardNetworkPreferencesDelete
     */
    simCardId: string
}

export interface SIMCardsApiSIMCardNetworkPreferencesGetRequest {
    /**
     * Identifies a SIM card.
     * @type string
     * @memberof SIMCardsApisIMCardNetworkPreferencesGet
     */
    simCardId: string
    /**
     * It includes the associated OTA update objects in the response when present.
     * @type boolean
     * @memberof SIMCardsApisIMCardNetworkPreferencesGet
     */
    includeOtaUpdates?: boolean
}

export interface SIMCardsApiSIMCardNetworkPreferencesPutRequest {
    /**
     * Identifies a SIM card.
     * @type string
     * @memberof SIMCardsApisIMCardNetworkPreferencesPut
     */
    simCardId: string
    /**
     * 
     * @type SIMCardNetworkPreferencesPutRequest
     * @memberof SIMCardsApisIMCardNetworkPreferencesPut
     */
    sIMCardNetworkPreferencesPutRequest?: SIMCardNetworkPreferencesPutRequest
}

export interface SIMCardsApiSIMCardPublicIPGetRequest {
    /**
     * Identifies a SIM card.
     * @type string
     * @memberof SIMCardsApisIMCardPublicIPGet
     */
    simCardId: string
}

export interface SIMCardsApiSetNetworkPreferenceRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardsApisetNetworkPreference
     */
    id: string
}

export interface SIMCardsApiSetSIMCardPublicIPRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardsApisetSIMCardPublicIP
     */
    id: string
}

export interface SIMCardsApiSimCardDataUsageNotificationsDeleteRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardsApisimCardDataUsageNotificationsDelete
     */
    id: string
}

export interface SIMCardsApiSimCardDataUsageNotificationsGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardsApisimCardDataUsageNotificationsGet
     */
    id: string
}

export interface SIMCardsApiSimCardDataUsageNotificationsPatchRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardsApisimCardDataUsageNotificationsPatch
     */
    id: string
    /**
     * 
     * @type SimCardDataUsageNotification
     * @memberof SIMCardsApisimCardDataUsageNotificationsPatch
     */
    simCardDataUsageNotification: SimCardDataUsageNotification
}

export interface SIMCardsApiSimCardDataUsageNotificationsPostRequest {
    /**
     * 
     * @type SimCardDataUsageNotificationsPostRequest
     * @memberof SIMCardsApisimCardDataUsageNotificationsPost
     */
    simCardDataUsageNotificationsPostRequest: SimCardDataUsageNotificationsPostRequest
}

export interface SIMCardsApiSimCardDeleteRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardsApisimCardDelete
     */
    id: string
}

export interface SIMCardsApiSimCardDisableRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardsApisimCardDisable
     */
    id: string
}

export interface SIMCardsApiSimCardEnableRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardsApisimCardEnable
     */
    id: string
}

export interface SIMCardsApiSimCardGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardsApisimCardGet
     */
    id: string
    /**
     * It includes the associated SIM card group object in the response when present.
     * @type boolean
     * @memberof SIMCardsApisimCardGet
     */
    includeSimCardGroup?: boolean
}

export interface SIMCardsApiSimCardRegisterRequest {
    /**
     * 
     * @type SIMCardRegistration
     * @memberof SIMCardsApisimCardRegister
     */
    sIMCardRegistration: SIMCardRegistration
}

export interface SIMCardsApiSimCardSetStandbyRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardsApisimCardSetStandby
     */
    id: string
}

export interface SIMCardsApiSimCardUpdateRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof SIMCardsApisimCardUpdate
     */
    id: string
    /**
     * 
     * @type SIMCard
     * @memberof SIMCardsApisimCardUpdate
     */
    sIMCard: SIMCard
}

export interface SIMCardsApiSimCardsGetRequest {
    /**
     * The page number to load
     * @type number
     * @memberof SIMCardsApisimCardsGet
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof SIMCardsApisimCardsGet
     */
    pageSize?: number
    /**
     * It includes the associated SIM card group object in the response when present.
     * @type boolean
     * @memberof SIMCardsApisimCardsGet
     */
    includeSimCardGroup?: boolean
    /**
     * A valid SIM card group ID.
     * @type string
     * @memberof SIMCardsApisimCardsGet
     */
    filterSimCardGroupId?: string
    /**
     * A list of SIM card tags to filter on.&lt;br/&gt;&lt;br/&gt; If the SIM card contains &lt;b&gt;&lt;i&gt;all&lt;/i&gt;&lt;/b&gt; of the given &lt;code&gt;tags&lt;/code&gt; they will be found.&lt;br/&gt;&lt;br/&gt; For example, if the SIM cards have the following tags: &lt;ul&gt;   &lt;li&gt;&lt;code&gt;[\&#39;customers\&#39;, \&#39;staff\&#39;, \&#39;test\&#39;]&lt;/code&gt;   &lt;li&gt;&lt;code&gt;[\&#39;test\&#39;]&lt;/code&gt;&lt;/li&gt;   &lt;li&gt;&lt;code&gt;[\&#39;customers\&#39;]&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt; Searching for &lt;code&gt;[\&#39;customers\&#39;, \&#39;test\&#39;]&lt;/code&gt; returns only the first because it\&#39;s the only one with both tags.&lt;br/&gt; Searching for &lt;code&gt;test&lt;/code&gt; returns the first two SIMs, because both of them have such tag.&lt;br/&gt; Searching for &lt;code&gt;customers&lt;/code&gt; returns the first and last SIMs.&lt;br/&gt; 
     * @type Array&lt;string&gt;
     * @memberof SIMCardsApisimCardsGet
     */
    filterTags?: Array<string>
    /**
     * A search string to partially match for the SIM card\&#39;s ICCID.
     * @type string
     * @memberof SIMCardsApisimCardsGet
     */
    filterIccid?: string
    /**
     * Filter by a SIM card\&#39;s status.
     * @type Array&lt;&#39;enabled&#39; | &#39;disabled&#39; | &#39;standby&#39; | &#39;data_limit_exceeded&#39; | &#39;unauthorized_imei&#39;&gt;
     * @memberof SIMCardsApisimCardsGet
     */
    filterStatus?: Array<'enabled' | 'disabled' | 'standby' | 'data_limit_exceeded' | 'unauthorized_imei'>
}

export interface SIMCardsApiWirelessConnectivityLogsGetRequest {
    /**
     * Identifies a SIM card.
     * @type string
     * @memberof SIMCardsApiwirelessConnectivityLogsGet
     */
    simCardId: string
    /**
     * The page number to load
     * @type number
     * @memberof SIMCardsApiwirelessConnectivityLogsGet
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof SIMCardsApiwirelessConnectivityLogsGet
     */
    pageSize?: number
}

export class ObjectSIMCardsApi {
    private api: ObservableSIMCardsApi

    public constructor(configuration: Configuration, requestFactory?: SIMCardsApiRequestFactory, responseProcessor?: SIMCardsApiResponseProcessor) {
        this.api = new ObservableSIMCardsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows dispatching the same operation described for the PUT sim_cards/:sim_card_id/network_preferences API for multiple SIM cards at once.<br/><br/> Although, a SIM card network preference may fail individually under any validation triggered as a consequence of its state. For example, a SIM can\'t have an in-progress OTA update for applying a Network Preference, so they\'ll fail when requested in this API. In that scenario, the specific error will be present in the response along with the successful definitions in the \"errors\" response node. 
     * Bulk Network Preferences for SIM cards
     * @param param the request object
     */
    public bulkSIMCardNetworkPreferences(param: SIMCardsApiBulkSIMCardNetworkPreferencesRequest = {}, options?: Configuration): Promise<BulkSIMCardNetworkPreferences202Response> {
        return this.api.bulkSIMCardNetworkPreferences(param.bulkSIMCardNetworkPreferencesRequest,  options).toPromise();
    }

    /**
     * This API triggers an asynchronous operation to set a public IP for each of the specified SIM cards.<br/> For each SIM Card a SIM Card Action will be generated. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Request bulk setting SIM card public IPs.
     * @param param the request object
     */
    public bulkSetPublicIPs(param: SIMCardsApiBulkSetPublicIPsRequest = {}, options?: Configuration): Promise<BulkSetPublicIPs202Response> {
        return this.api.bulkSetPublicIPs(param.bulkSetPublicIPsRequest,  options).toPromise();
    }

    /**
     * This API deletes network preferences for a SIM card.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Creating network preferences may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Delete network preferences for a SIM card
     * @param param the request object
     */
    public deleteNetworkPreference(param: SIMCardsApiDeleteNetworkPreferenceRequest, options?: Configuration): Promise<SimCardActionGet200Response> {
        return this.api.deleteNetworkPreference(param.id,  options).toPromise();
    }

    /**
     * Lists a paginated collection of SIM card data usage notifications. It enables exploring the collection using specific filters.
     * List SIM card data usage notifications
     * @param param the request object
     */
    public listSimCardDataUsageNotifications(param: SIMCardsApiListSimCardDataUsageNotificationsRequest = {}, options?: Configuration): Promise<ListSimCardDataUsageNotifications200Response> {
        return this.api.listSimCardDataUsageNotifications(param.pageNumber, param.pageSize, param.filterSimCardId,  options).toPromise();
    }

    /**
     * It validates whether SIM card registration codes are valid or not.
     * Validate SIM cards registration codes
     * @param param the request object
     */
    public postValidateRegistrationCodes(param: SIMCardsApiPostValidateRegistrationCodesRequest, options?: Configuration): Promise<SIMCardRegistrationCodeValidations> {
        return this.api.postValidateRegistrationCodes(param.postValidateRegistrationCodesRequest,  options).toPromise();
    }

    /**
     * This API removes an existing public IP from a SIM card. <br/><br/>  The API will trigger an asynchronous operation called a SIM Card Action. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API.
     * Request removing a SIM card public IP
     * @param param the request object
     */
    public removeSIMCardPublicIP(param: SIMCardsApiRemoveSIMCardPublicIPRequest, options?: Configuration): Promise<SimCardActionGet200Response> {
        return this.api.removeSIMCardPublicIP(param.id,  options).toPromise();
    }

    /**
     * It returns the device details where a SIM card is currently being used. 
     * Get SIM card device details
     * @param param the request object
     */
    public sIMCardDeviceDetailsGet(param: SIMCardsApiSIMCardDeviceDetailsGetRequest, options?: Configuration): Promise<SIMCardDeviceDetailsGet200Response> {
        return this.api.sIMCardDeviceDetailsGet(param.simCardId,  options).toPromise();
    }

    /**
     * This API asynchronously removes the custom-defined network preferences settings. After this operation is done the Telnyx default settings, the same applied for an unaltered SIM card, will be in place. 
     * DELETE network preferences
     * @param param the request object
     */
    public sIMCardNetworkPreferencesDelete(param: SIMCardsApiSIMCardNetworkPreferencesDeleteRequest, options?: Configuration): Promise<SIMCardNetworkPreferencesGet200Response> {
        return this.api.sIMCardNetworkPreferencesDelete(param.simCardId,  options).toPromise();
    }

    /**
     * It returns the network preferences currently applied in the SIM card. 
     * Get network preferences
     * @param param the request object
     */
    public sIMCardNetworkPreferencesGet(param: SIMCardsApiSIMCardNetworkPreferencesGetRequest, options?: Configuration): Promise<SIMCardNetworkPreferencesGet200Response> {
        return this.api.sIMCardNetworkPreferencesGet(param.simCardId, param.includeOtaUpdates,  options).toPromise();
    }

    /**
     * This API allows setting or updating a SIM card network preference. <br/><br/> Every SIM card has default network preferences defined on Telnyx. These preferences will determine how a SIMCard will connect to the network by considering a list of preferable operators.<br/><br/> There can be multiple scenarios where an operator can be preferred over another, for example, when a specific mobile operator can provide better network latency or better pricing. 
     * Set network preferences
     * @param param the request object
     */
    public sIMCardNetworkPreferencesPut(param: SIMCardsApiSIMCardNetworkPreferencesPutRequest, options?: Configuration): Promise<SIMCardNetworkPreferencesGet200Response> {
        return this.api.sIMCardNetworkPreferencesPut(param.simCardId, param.sIMCardNetworkPreferencesPutRequest,  options).toPromise();
    }

    /**
     * It returns the public IP requested for a SIM card. 
     * Get SIM card public IP definition
     * @param param the request object
     */
    public sIMCardPublicIPGet(param: SIMCardsApiSIMCardPublicIPGetRequest, options?: Configuration): Promise<SIMCardPublicIPGet200Response> {
        return this.api.sIMCardPublicIPGet(param.simCardId,  options).toPromise();
    }

    /**
     * This API sets network preferences for a SIM card.<br/> Every SIM card has default network preferences defined on Telnyx. These preferences will determine how a SIMCard will connect to the network by considering a list of preferable operators.<br/><br/> The SIM card needs to be attached to the network so this can connect and SMS must be available, otherwise, the operation will fail. This preference will only be respected if the network is available, otherwise the strongest signal will be used. <br/><br/> The API will trigger an asynchronous operation called a SIM Card Action. Creating network preferences may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Create or update network preferences for a SIM card
     * @param param the request object
     */
    public setNetworkPreference(param: SIMCardsApiSetNetworkPreferenceRequest, options?: Configuration): Promise<SimCardActionGet200Response> {
        return this.api.setNetworkPreference(param.id,  options).toPromise();
    }

    /**
     * This API makes a SIM card reachable on the public internet by mapping a random public IP to the SIM card. <br/><br/>  The API will trigger an asynchronous operation called a SIM Card Action. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. <br/><br/>  Setting a Public IP to a SIM Card incurs a charge and will only succeed if the account has sufficient funds.
     * Request setting a SIM card public IP
     * @param param the request object
     */
    public setSIMCardPublicIP(param: SIMCardsApiSetSIMCardPublicIPRequest, options?: Configuration): Promise<SimCardActionGet200Response> {
        return this.api.setSIMCardPublicIP(param.id,  options).toPromise();
    }

    /**
     * Delete the SIM Card Data Usage Notification.
     * Delete SIM card data usage notifications
     * @param param the request object
     */
    public simCardDataUsageNotificationsDelete(param: SIMCardsApiSimCardDataUsageNotificationsDeleteRequest, options?: Configuration): Promise<SimCardDataUsageNotificationsPost201Response> {
        return this.api.simCardDataUsageNotificationsDelete(param.id,  options).toPromise();
    }

    /**
     * Get a single SIM Card Data Usage Notification.
     * Get a single SIM card data usage notification
     * @param param the request object
     */
    public simCardDataUsageNotificationsGet(param: SIMCardsApiSimCardDataUsageNotificationsGetRequest, options?: Configuration): Promise<SimCardDataUsageNotificationsPost201Response> {
        return this.api.simCardDataUsageNotificationsGet(param.id,  options).toPromise();
    }

    /**
     * Updates information for a SIM Card Data Usage Notification.
     * Updates information for a SIM Card Data Usage Notification
     * @param param the request object
     */
    public simCardDataUsageNotificationsPatch(param: SIMCardsApiSimCardDataUsageNotificationsPatchRequest, options?: Configuration): Promise<SimCardDataUsageNotificationsPost201Response> {
        return this.api.simCardDataUsageNotificationsPatch(param.id, param.simCardDataUsageNotification,  options).toPromise();
    }

    /**
     * Creates a new SIM card data usage notification.
     * Create a new SIM card data usage notification
     * @param param the request object
     */
    public simCardDataUsageNotificationsPost(param: SIMCardsApiSimCardDataUsageNotificationsPostRequest, options?: Configuration): Promise<SimCardDataUsageNotificationsPost201Response> {
        return this.api.simCardDataUsageNotificationsPost(param.simCardDataUsageNotificationsPostRequest,  options).toPromise();
    }

    /**
     * The SIM card will be decommissioned, removed from your account and you will stop being charged.<br />The SIM card won\'t be able to connect to the network after the deletion is completed, thus making it impossible to consume data.<br/> Transitioning to the disabled state may take a period of time.</br> Until the transition is completed, the SIM card status will be disabling <code>disabling</code>.<br />In order to re-enable the SIM card, you will need to re-register it.
     * Deletes a SIM card
     * @param param the request object
     */
    public simCardDelete(param: SIMCardsApiSimCardDeleteRequest, options?: Configuration): Promise<SimCardGet200Response> {
        return this.api.simCardDelete(param.id,  options).toPromise();
    }

    /**
     * This API disables a SIM card, disconnecting it from the network and making it impossible to consume data.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the disabled state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Request a SIM card disable
     * @param param the request object
     */
    public simCardDisable(param: SIMCardsApiSimCardDisableRequest, options?: Configuration): Promise<SimCardActionGet200Response> {
        return this.api.simCardDisable(param.id,  options).toPromise();
    }

    /**
     * This API enables a SIM card, connecting it to the network and making it possible to consume data.<br/> To enable a SIM card, it must be associated with a SIM card group.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the enabled state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Request a SIM card enable
     * @param param the request object
     */
    public simCardEnable(param: SIMCardsApiSimCardEnableRequest, options?: Configuration): Promise<SimCardActionGet200Response> {
        return this.api.simCardEnable(param.id,  options).toPromise();
    }

    /**
     * Returns the details regarding a specific SIM card.
     * Get SIM card
     * @param param the request object
     */
    public simCardGet(param: SIMCardsApiSimCardGetRequest, options?: Configuration): Promise<SimCardGet200Response> {
        return this.api.simCardGet(param.id, param.includeSimCardGroup,  options).toPromise();
    }

    /**
     * Register the SIM cards associated with the provided registration codes to the current user\'s account.<br/><br/> If <code>sim_card_group_id</code> is provided, the SIM cards will be associated with that group. Otherwise, the default group for the current user will be used.<br/><br/> 
     * Register SIM cards
     * @param param the request object
     */
    public simCardRegister(param: SIMCardsApiSimCardRegisterRequest, options?: Configuration): Promise<SimCardRegister202Response> {
        return this.api.simCardRegister(param.sIMCardRegistration,  options).toPromise();
    }

    /**
     * The SIM card will be able to connect to the network once the process to set it to standby has been completed, thus making it possible to consume data.<br/> To set a SIM card to standby, it must be associated with SIM card group.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the standby state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Request setting a SIM card to standby
     * @param param the request object
     */
    public simCardSetStandby(param: SIMCardsApiSimCardSetStandbyRequest, options?: Configuration): Promise<SimCardActionGet200Response> {
        return this.api.simCardSetStandby(param.id,  options).toPromise();
    }

    /**
     * Updates SIM card data
     * Update a SIM card
     * @param param the request object
     */
    public simCardUpdate(param: SIMCardsApiSimCardUpdateRequest, options?: Configuration): Promise<SimCardGet200Response> {
        return this.api.simCardUpdate(param.id, param.sIMCard,  options).toPromise();
    }

    /**
     * Get all SIM cards belonging to the user that match the given filters.
     * Get all SIM cards
     * @param param the request object
     */
    public simCardsGet(param: SIMCardsApiSimCardsGetRequest = {}, options?: Configuration): Promise<SimCardsGet200Response> {
        return this.api.simCardsGet(param.pageNumber, param.pageSize, param.includeSimCardGroup, param.filterSimCardGroupId, param.filterTags, param.filterIccid, param.filterStatus,  options).toPromise();
    }

    /**
     * This API allows listing a paginated collection of Wireless Connectivity Logs associated with a SIM Card, for troubleshooting purposes.
     * List wireless connectivity logs
     * @param param the request object
     */
    public wirelessConnectivityLogsGet(param: SIMCardsApiWirelessConnectivityLogsGetRequest, options?: Configuration): Promise<WirelessConnectivityLogsGet200Response> {
        return this.api.wirelessConnectivityLogsGet(param.simCardId, param.pageNumber, param.pageSize,  options).toPromise();
    }

}

import { ObservableSharedCampaignsApi } from "./ObservableAPI.ts";
import { SharedCampaignsApiRequestFactory, SharedCampaignsApiResponseProcessor} from "../apis/SharedCampaignsApi.ts";

export interface SharedCampaignsApiGetPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGetRequest {
    /**
     * The 1-indexed page number to get. The default value is &#x60;1&#x60;.
     * @type number
     * @memberof SharedCampaignsApigetPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGet
     */
    page?: number
    /**
     * The amount of records per page, limited to between 1 and 500 inclusive. The default value is &#x60;10&#x60;.
     * @type number
     * @memberof SharedCampaignsApigetPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGet
     */
    recordsPerPage?: number
}

export interface SharedCampaignsApiGetSharingStatusPartnerCampaignCampaignIdSharingGetRequest {
    /**
     * ID of the campaign in question
     * @type string
     * @memberof SharedCampaignsApigetSharingStatusPartnerCampaignCampaignIdSharingGet
     */
    campaignId: string
}

export class ObjectSharedCampaignsApi {
    private api: ObservableSharedCampaignsApi

    public constructor(configuration: Configuration, requestFactory?: SharedCampaignsApiRequestFactory, responseProcessor?: SharedCampaignsApiResponseProcessor) {
        this.api = new ObservableSharedCampaignsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all partner campaigns you have shared to Telnyx in a paginated fashion  This endpoint is currently limited to only returning shared campaigns that Telnyx has accepted. In other words, shared but pending campaigns are currently omitted from the response from this endpoint.
     * Get Partner Campaigns Shared By User
     * @param param the request object
     */
    public getPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGet(param: SharedCampaignsApiGetPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGetRequest = {}, options?: Configuration): Promise<SharedCampaignRecordSet> {
        return this.api.getPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGet(param.page, param.recordsPerPage,  options).toPromise();
    }

    /**
     * Get Sharing Status
     * @param param the request object
     */
    public getSharingStatusPartnerCampaignCampaignIdSharingGet(param: SharedCampaignsApiGetSharingStatusPartnerCampaignCampaignIdSharingGetRequest, options?: Configuration): Promise<{ [key: string]: CampaignSharingStatus; }> {
        return this.api.getSharingStatusPartnerCampaignCampaignIdSharingGet(param.campaignId,  options).toPromise();
    }

}

import { ObservableShortCodesApi } from "./ObservableAPI.ts";
import { ShortCodesApiRequestFactory, ShortCodesApiResponseProcessor} from "../apis/ShortCodesApi.ts";

export interface ShortCodesApiListShortCodesRequest {
    /**
     * The page number to load
     * @type number
     * @memberof ShortCodesApilistShortCodes
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof ShortCodesApilistShortCodes
     */
    pageSize?: number
    /**
     * Filter by Messaging Profile ID. Use the string &#x60;null&#x60; for phone numbers without assigned profiles. A synonym for the &#x60;/messaging_profiles/{id}/short_codes&#x60; endpoint when querying about an extant profile.
     * @type string
     * @memberof ShortCodesApilistShortCodes
     */
    filterMessagingProfileId?: string
}

export interface ShortCodesApiRetrieveShortCodeRequest {
    /**
     * The id of the short code
     * @type string
     * @memberof ShortCodesApiretrieveShortCode
     */
    id: string
}

export interface ShortCodesApiUpdateShortCodeRequest {
    /**
     * The id of the short code
     * @type string
     * @memberof ShortCodesApiupdateShortCode
     */
    id: string
    /**
     * Short code update
     * @type UpdateShortCodeRequest
     * @memberof ShortCodesApiupdateShortCode
     */
    updateShortCodeRequest: UpdateShortCodeRequest
}

export class ObjectShortCodesApi {
    private api: ObservableShortCodesApi

    public constructor(configuration: Configuration, requestFactory?: ShortCodesApiRequestFactory, responseProcessor?: ShortCodesApiResponseProcessor) {
        this.api = new ObservableShortCodesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List short codes
     * @param param the request object
     */
    public listShortCodes(param: ShortCodesApiListShortCodesRequest = {}, options?: Configuration): Promise<ListShortCodesResponse> {
        return this.api.listShortCodes(param.pageNumber, param.pageSize, param.filterMessagingProfileId,  options).toPromise();
    }

    /**
     * Retrieve a short code
     * @param param the request object
     */
    public retrieveShortCode(param: ShortCodesApiRetrieveShortCodeRequest, options?: Configuration): Promise<ShortCodeResponse> {
        return this.api.retrieveShortCode(param.id,  options).toPromise();
    }

    /**
     * Update the settings for a specific short code. To unbind a short code from a profile, set the `messaging_profile_id` to `null` or an empty string.
     * Update short code
     * @param param the request object
     */
    public updateShortCode(param: ShortCodesApiUpdateShortCodeRequest, options?: Configuration): Promise<ShortCodeResponse> {
        return this.api.updateShortCode(param.id, param.updateShortCodeRequest,  options).toPromise();
    }

}

import { ObservableTeXMLApplicationsApi } from "./ObservableAPI.ts";
import { TeXMLApplicationsApiRequestFactory, TeXMLApplicationsApiResponseProcessor} from "../apis/TeXMLApplicationsApi.ts";

export interface TeXMLApplicationsApiCreateTexmlApplicationRequest {
    /**
     * Parameters that can be set when creating a TeXML Application
     * @type CreateTexmlApplicationRequest
     * @memberof TeXMLApplicationsApicreateTexmlApplication
     */
    createTexmlApplicationRequest: CreateTexmlApplicationRequest
}

export interface TeXMLApplicationsApiDeleteTexmlApplicationRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof TeXMLApplicationsApideleteTexmlApplication
     */
    id: string
}

export interface TeXMLApplicationsApiFindTexmlApplicationsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof TeXMLApplicationsApifindTexmlApplications
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof TeXMLApplicationsApifindTexmlApplications
     */
    pageSize?: number
    /**
     * If present, applications with &lt;code&gt;friendly_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @type string
     * @memberof TeXMLApplicationsApifindTexmlApplications
     */
    filterFriendlyNameContains?: string
    /**
     * Identifies the associated outbound voice profile.
     * @type string
     * @memberof TeXMLApplicationsApifindTexmlApplications
     */
    filterOutboundVoiceProfileId?: string
    /**
     * Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     * @type &#39;created_at&#39; | &#39;connection_name&#39; | &#39;active&#39;
     * @memberof TeXMLApplicationsApifindTexmlApplications
     */
    sort?: 'created_at' | 'connection_name' | 'active'
}

export interface TeXMLApplicationsApiGetTexmlApplicationRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof TeXMLApplicationsApigetTexmlApplication
     */
    id: string
}

export interface TeXMLApplicationsApiUpdateTexmlApplicationRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof TeXMLApplicationsApiupdateTexmlApplication
     */
    id: string
    /**
     * Parameters that can be updated in a TeXML Application
     * @type UpdateTexmlApplicationRequest
     * @memberof TeXMLApplicationsApiupdateTexmlApplication
     */
    updateTexmlApplicationRequest: UpdateTexmlApplicationRequest
}

export class ObjectTeXMLApplicationsApi {
    private api: ObservableTeXMLApplicationsApi

    public constructor(configuration: Configuration, requestFactory?: TeXMLApplicationsApiRequestFactory, responseProcessor?: TeXMLApplicationsApiResponseProcessor) {
        this.api = new ObservableTeXMLApplicationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a TeXML Application.
     * Creates a TeXML Application
     * @param param the request object
     */
    public createTexmlApplication(param: TeXMLApplicationsApiCreateTexmlApplicationRequest, options?: Configuration): Promise<TexmlApplicationResponse> {
        return this.api.createTexmlApplication(param.createTexmlApplicationRequest,  options).toPromise();
    }

    /**
     * Deletes a TeXML Application.
     * Deletes a TeXML Application
     * @param param the request object
     */
    public deleteTexmlApplication(param: TeXMLApplicationsApiDeleteTexmlApplicationRequest, options?: Configuration): Promise<TexmlApplicationResponse> {
        return this.api.deleteTexmlApplication(param.id,  options).toPromise();
    }

    /**
     * Returns a list of your TeXML Applications.
     * List all TeXML Applications
     * @param param the request object
     */
    public findTexmlApplications(param: TeXMLApplicationsApiFindTexmlApplicationsRequest = {}, options?: Configuration): Promise<GetAllTexmlApplicationsResponse> {
        return this.api.findTexmlApplications(param.pageNumber, param.pageSize, param.filterFriendlyNameContains, param.filterOutboundVoiceProfileId, param.sort,  options).toPromise();
    }

    /**
     * Retrieves the details of an existing TeXML Application.
     * Retrieve a TeXML Application
     * @param param the request object
     */
    public getTexmlApplication(param: TeXMLApplicationsApiGetTexmlApplicationRequest, options?: Configuration): Promise<TexmlApplicationResponse> {
        return this.api.getTexmlApplication(param.id,  options).toPromise();
    }

    /**
     * Updates settings of an existing TeXML Application.
     * Update a TeXML Application
     * @param param the request object
     */
    public updateTexmlApplication(param: TeXMLApplicationsApiUpdateTexmlApplicationRequest, options?: Configuration): Promise<TexmlApplicationResponse> {
        return this.api.updateTexmlApplication(param.id, param.updateTexmlApplicationRequest,  options).toPromise();
    }

}

import { ObservableTeXMLRESTCommandsApi } from "./ObservableAPI.ts";
import { TeXMLRESTCommandsApiRequestFactory, TeXMLRESTCommandsApiResponseProcessor} from "../apis/TeXMLRESTCommandsApi.ts";

export interface TeXMLRESTCommandsApiCreateTeXMLSecretRequest {
    /**
     * Create TeXML secret request object
     * @type CreateTeXMLSecretRequest
     * @memberof TeXMLRESTCommandsApicreateTeXMLSecret
     */
    createTeXMLSecretRequest: CreateTeXMLSecretRequest
}

export interface TeXMLRESTCommandsApiInitiateTeXMLCallRequest {
    /**
     * The ID of the TeXML application used for the call.
     * @type string
     * @memberof TeXMLRESTCommandsApiinitiateTeXMLCall
     */
    applicationId: string
    /**
     * Iniatiate Call request object
     * @type InitiateCallRequest
     * @memberof TeXMLRESTCommandsApiinitiateTeXMLCall
     */
    initiateCallRequest: InitiateCallRequest
}

export interface TeXMLRESTCommandsApiUpdateTeXMLCallRequest {
    /**
     * The CallSid that identifies the call to update.
     * @type string
     * @memberof TeXMLRESTCommandsApiupdateTeXMLCall
     */
    callSid: string
    /**
     * Update Call request object
     * @type UpdateCallRequest
     * @memberof TeXMLRESTCommandsApiupdateTeXMLCall
     */
    updateCallRequest: UpdateCallRequest
}

export class ObjectTeXMLRESTCommandsApi {
    private api: ObservableTeXMLRESTCommandsApi

    public constructor(configuration: Configuration, requestFactory?: TeXMLRESTCommandsApiRequestFactory, responseProcessor?: TeXMLRESTCommandsApiResponseProcessor) {
        this.api = new ObservableTeXMLRESTCommandsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a TeXML secret which can be later used as a Dynamic Parameter for TeXML when using Mustache Templates in your TeXML. In your TeXML you will be able to use your secret name, and this name will be replaced by the actual secret value when processing the TeXML on Telnyx side.  The secrets are not visible in any logs.
     * Create a TeXML secret
     * @param param the request object
     */
    public createTeXMLSecret(param: TeXMLRESTCommandsApiCreateTeXMLSecretRequest, options?: Configuration): Promise<CreateTeXMLSecretRequest> {
        return this.api.createTeXMLSecret(param.createTeXMLSecretRequest,  options).toPromise();
    }

    /**
     * Initiate an outbound TeXML call. Telnyx will request TeXML from the XML Request URL configured for the connection in the Mission Control Portal.
     * Initiate an outbound call
     * @param param the request object
     */
    public initiateTeXMLCall(param: TeXMLRESTCommandsApiInitiateTeXMLCallRequest, options?: Configuration): Promise<InitiateTeXMLCallResponse> {
        return this.api.initiateTeXMLCall(param.applicationId, param.initiateCallRequest,  options).toPromise();
    }

    /**
     * Update TeXML call. Please note that the keys present in the payload MUST BE formatted in CamelCase as specified in the example.
     * Update call
     * @param param the request object
     */
    public updateTeXMLCall(param: TeXMLRESTCommandsApiUpdateTeXMLCallRequest, options?: Configuration): Promise<TeXMLRESTCommandResponse> {
        return this.api.updateTeXMLCall(param.callSid, param.updateCallRequest,  options).toPromise();
    }

}

import { ObservableV2Api } from "./ObservableAPI.ts";
import { V2ApiRequestFactory, V2ApiResponseProcessor} from "../apis/V2Api.ts";

export interface V2ApiCreateAutorespConfigApiV2AutorespConfigsProfileIdPostRequest {
    /**
     * 
     * @type string
     * @memberof V2ApicreateAutorespConfigApiV2AutorespConfigsProfileIdPost
     */
    profileId: string
    /**
     * 
     * @type AutoRespConfigCreateSchema
     * @memberof V2ApicreateAutorespConfigApiV2AutorespConfigsProfileIdPost
     */
    autoRespConfigCreateSchema: AutoRespConfigCreateSchema
}

export interface V2ApiDeleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof V2ApideleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete
     */
    profileId: string
    /**
     * 
     * @type string
     * @memberof V2ApideleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete
     */
    autorespCfgId: string
}

export interface V2ApiGetAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGetRequest {
    /**
     * 
     * @type string
     * @memberof V2ApigetAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet
     */
    profileId: string
    /**
     * 
     * @type string
     * @memberof V2ApigetAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet
     */
    autorespCfgId: string
}

export interface V2ApiGetAutorespConfigsApiV2AutorespConfigsProfileIdGetRequest {
    /**
     * 
     * @type string
     * @memberof V2ApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    profileId: string
    /**
     * 
     * @type string
     * @memberof V2ApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    countryCode?: string
    /**
     * 
     * @type string
     * @memberof V2ApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    createdAtGte?: string
    /**
     * 
     * @type string
     * @memberof V2ApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    createdAtLte?: string
    /**
     * 
     * @type string
     * @memberof V2ApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    updatedAtGte?: string
    /**
     * 
     * @type string
     * @memberof V2ApigetAutorespConfigsApiV2AutorespConfigsProfileIdGet
     */
    updatedAtLte?: string
}

export interface V2ApiUpdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPutRequest {
    /**
     * 
     * @type string
     * @memberof V2ApiupdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut
     */
    profileId: string
    /**
     * 
     * @type string
     * @memberof V2ApiupdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut
     */
    autorespCfgId: string
    /**
     * 
     * @type AutoRespConfigCreateSchema
     * @memberof V2ApiupdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut
     */
    autoRespConfigCreateSchema: AutoRespConfigCreateSchema
}

export class ObjectV2Api {
    private api: ObservableV2Api

    public constructor(configuration: Configuration, requestFactory?: V2ApiRequestFactory, responseProcessor?: V2ApiResponseProcessor) {
        this.api = new ObservableV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Auto-Reponse Setting
     * @param param the request object
     */
    public createAutorespConfigApiV2AutorespConfigsProfileIdPost(param: V2ApiCreateAutorespConfigApiV2AutorespConfigsProfileIdPostRequest, options?: Configuration): Promise<AutorespConfigResponseSchema> {
        return this.api.createAutorespConfigApiV2AutorespConfigsProfileIdPost(param.profileId, param.autoRespConfigCreateSchema,  options).toPromise();
    }

    /**
     * Delete Auto-Response Setting
     * @param param the request object
     */
    public deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(param: V2ApiDeleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(param.profileId, param.autorespCfgId,  options).toPromise();
    }

    /**
     * Get Auto-Response Setting
     * @param param the request object
     */
    public getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(param: V2ApiGetAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGetRequest, options?: Configuration): Promise<AutorespConfigResponseSchema> {
        return this.api.getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(param.profileId, param.autorespCfgId,  options).toPromise();
    }

    /**
     * List Auto-Response Settings
     * @param param the request object
     */
    public getAutorespConfigsApiV2AutorespConfigsProfileIdGet(param: V2ApiGetAutorespConfigsApiV2AutorespConfigsProfileIdGetRequest, options?: Configuration): Promise<AutorespConfigsResponseSchema> {
        return this.api.getAutorespConfigsApiV2AutorespConfigsProfileIdGet(param.profileId, param.countryCode, param.createdAtGte, param.createdAtLte, param.updatedAtGte, param.updatedAtLte,  options).toPromise();
    }

    /**
     * Update Auto-Response Setting
     * @param param the request object
     */
    public updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(param: V2ApiUpdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPutRequest, options?: Configuration): Promise<AutorespConfigResponseSchema> {
        return this.api.updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(param.profileId, param.autorespCfgId, param.autoRespConfigCreateSchema,  options).toPromise();
    }

}

import { ObservableVerifiedCallsDisplayProfileApi } from "./ObservableAPI.ts";
import { VerifiedCallsDisplayProfileApiRequestFactory, VerifiedCallsDisplayProfileApiResponseProcessor} from "../apis/VerifiedCallsDisplayProfileApi.ts";

export interface VerifiedCallsDisplayProfileApiCreateVerifiedCallsDisplayProfileRequest {
    /**
     * 
     * @type CreateVerifiedCallsDisplayProfileRequest
     * @memberof VerifiedCallsDisplayProfileApicreateVerifiedCallsDisplayProfile
     */
    createVerifiedCallsDisplayProfileRequest: CreateVerifiedCallsDisplayProfileRequest
}

export interface VerifiedCallsDisplayProfileApiCreateVerifiedCallsDisplayProfileVerificationRequestRequest {
    /**
     * Identifies the Verified Calls Display Profile
     * @type string
     * @memberof VerifiedCallsDisplayProfileApicreateVerifiedCallsDisplayProfileVerificationRequest
     */
    id: string
}

export interface VerifiedCallsDisplayProfileApiDeleteVerifiedCallsDisplayProfileRequest {
    /**
     * Identifies the Verified Calls Display Profile
     * @type string
     * @memberof VerifiedCallsDisplayProfileApideleteVerifiedCallsDisplayProfile
     */
    id: string
}

export interface VerifiedCallsDisplayProfileApiDisplayVerifiedCallsDisplayProfileRequest {
    /**
     * Identifies the Verified Calls Display Profile
     * @type string
     * @memberof VerifiedCallsDisplayProfileApidisplayVerifiedCallsDisplayProfile
     */
    id: string
}

export interface VerifiedCallsDisplayProfileApiListVerifiedCallsDisplayProfilesRequest {
    /**
     * The page number to load
     * @type number
     * @memberof VerifiedCallsDisplayProfileApilistVerifiedCallsDisplayProfiles
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof VerifiedCallsDisplayProfileApilistVerifiedCallsDisplayProfiles
     */
    pageSize?: number
}

export interface VerifiedCallsDisplayProfileApiUpdateVerifiedCallsDisplayProfileRequest {
    /**
     * Identifies the Verified Calls Display Profile
     * @type string
     * @memberof VerifiedCallsDisplayProfileApiupdateVerifiedCallsDisplayProfile
     */
    id: string
    /**
     * 
     * @type any
     * @memberof VerifiedCallsDisplayProfileApiupdateVerifiedCallsDisplayProfile
     */
    body: any
}

export class ObjectVerifiedCallsDisplayProfileApi {
    private api: ObservableVerifiedCallsDisplayProfileApi

    public constructor(configuration: Configuration, requestFactory?: VerifiedCallsDisplayProfileApiRequestFactory, responseProcessor?: VerifiedCallsDisplayProfileApiResponseProcessor) {
        this.api = new ObservableVerifiedCallsDisplayProfileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Verified Calls Display Profile associated with the given Business Identity
     * Creates a Verified Calls Display Profile
     * @param param the request object
     */
    public createVerifiedCallsDisplayProfile(param: VerifiedCallsDisplayProfileApiCreateVerifiedCallsDisplayProfileRequest, options?: Configuration): Promise<ShowVerifiedCallsDisplayProfileResponse> {
        return this.api.createVerifiedCallsDisplayProfile(param.createVerifiedCallsDisplayProfileRequest,  options).toPromise();
    }

    /**
     * Starts a new Verified Calls Display Profile verification process.
     * Creates a Verification Request
     * @param param the request object
     */
    public createVerifiedCallsDisplayProfileVerificationRequest(param: VerifiedCallsDisplayProfileApiCreateVerifiedCallsDisplayProfileVerificationRequestRequest, options?: Configuration): Promise<void> {
        return this.api.createVerifiedCallsDisplayProfileVerificationRequest(param.id,  options).toPromise();
    }

    /**
     * Deletes the Verified Calls Display Profile. This action will fail if any verification requests have been made for this Verified Calls Display Profile. Please contact support@telnyx.com in case you want to delete a Verified Calls Display Profile in that situation.
     * Deletes the Verified Calls Display Profile
     * @param param the request object
     */
    public deleteVerifiedCallsDisplayProfile(param: VerifiedCallsDisplayProfileApiDeleteVerifiedCallsDisplayProfileRequest, options?: Configuration): Promise<ShowVerifiedCallsDisplayProfileResponse> {
        return this.api.deleteVerifiedCallsDisplayProfile(param.id,  options).toPromise();
    }

    /**
     * Display the Verified Calls Display Profile
     * @param param the request object
     */
    public displayVerifiedCallsDisplayProfile(param: VerifiedCallsDisplayProfileApiDisplayVerifiedCallsDisplayProfileRequest, options?: Configuration): Promise<ShowVerifiedCallsDisplayProfileResponse> {
        return this.api.displayVerifiedCallsDisplayProfile(param.id,  options).toPromise();
    }

    /**
     * Lists the Verified Calls Display Profiles owned by the current user/organization
     * @param param the request object
     */
    public listVerifiedCallsDisplayProfiles(param: VerifiedCallsDisplayProfileApiListVerifiedCallsDisplayProfilesRequest = {}, options?: Configuration): Promise<ListVerifiedCallsDisplayProfilesResponse> {
        return this.api.listVerifiedCallsDisplayProfiles(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Update an existing Verified Calls Display Profile and allows adding/removing nested Call Reasons and Phone Numbers. Different attributes can be updated depending on the Verified Calls Display Profile\'s status: For the VERIFICATION_STATE_PENDING status, no fields can be updated. For the VERIFICATION_STATE_VERIFIED status, it is allowed only to add/remove Call Reaons and Phone Numbers. For the other statuses, all fields can be updated. All existing Call Reasons and Phone Numbers must be sent during the request, or the update will fail.
     * Update a Verified Calls Display Profile
     * @param param the request object
     */
    public updateVerifiedCallsDisplayProfile(param: VerifiedCallsDisplayProfileApiUpdateVerifiedCallsDisplayProfileRequest, options?: Configuration): Promise<void> {
        return this.api.updateVerifiedCallsDisplayProfile(param.id, param.body,  options).toPromise();
    }

}

import { ObservableVerifiedNumbersApi } from "./ObservableAPI.ts";
import { VerifiedNumbersApiRequestFactory, VerifiedNumbersApiResponseProcessor} from "../apis/VerifiedNumbersApi.ts";

export interface VerifiedNumbersApiCreateVerifiedNumberRequest {
    /**
     * 
     * @type CreateVerifiedNumberRequest
     * @memberof VerifiedNumbersApicreateVerifiedNumber
     */
    createVerifiedNumberRequest: CreateVerifiedNumberRequest
}

export interface VerifiedNumbersApiDeleteVerifiedNumberRequest {
    /**
     * The phone number being deleted.
     * @type string
     * @memberof VerifiedNumbersApideleteVerifiedNumber
     */
    phoneNumber: string
}

export interface VerifiedNumbersApiListVerifiedNumbersRequest {
    /**
     * 
     * @type number
     * @memberof VerifiedNumbersApilistVerifiedNumbers
     */
    pageSize?: number
    /**
     * 
     * @type number
     * @memberof VerifiedNumbersApilistVerifiedNumbers
     */
    pageNumber?: number
}

export interface VerifiedNumbersApiRetrieveVerifiedNumberRequest {
    /**
     * The phone number being requested.
     * @type string
     * @memberof VerifiedNumbersApiretrieveVerifiedNumber
     */
    phoneNumber: string
}

export interface VerifiedNumbersApiVerifiedNumbersPhoneNumberActionsVerifyPostRequest {
    /**
     * The phone number being verified.
     * @type string
     * @memberof VerifiedNumbersApiverifiedNumbersPhoneNumberActionsVerifyPost
     */
    phoneNumber: string
    /**
     * 
     * @type VerifyVerificationCodeRequest
     * @memberof VerifiedNumbersApiverifiedNumbersPhoneNumberActionsVerifyPost
     */
    verifyVerificationCodeRequest: VerifyVerificationCodeRequest
}

export class ObjectVerifiedNumbersApi {
    private api: ObservableVerifiedNumbersApi

    public constructor(configuration: Configuration, requestFactory?: VerifiedNumbersApiRequestFactory, responseProcessor?: VerifiedNumbersApiResponseProcessor) {
        this.api = new ObservableVerifiedNumbersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Initiates phone number verification procedure.
     * Request phone number verification
     * @param param the request object
     */
    public createVerifiedNumber(param: VerifiedNumbersApiCreateVerifiedNumberRequest, options?: Configuration): Promise<CreateVerifiedNumberResponse> {
        return this.api.createVerifiedNumber(param.createVerifiedNumberRequest,  options).toPromise();
    }

    /**
     * Delete a verified number
     * @param param the request object
     */
    public deleteVerifiedNumber(param: VerifiedNumbersApiDeleteVerifiedNumberRequest, options?: Configuration): Promise<VerifiedNumberResponseDataWrapper> {
        return this.api.deleteVerifiedNumber(param.phoneNumber,  options).toPromise();
    }

    /**
     * Gets a paginated list of Verified Numbers.
     * List all Verified Numbers
     * @param param the request object
     */
    public listVerifiedNumbers(param: VerifiedNumbersApiListVerifiedNumbersRequest = {}, options?: Configuration): Promise<ListVerifiedNumbersResponse> {
        return this.api.listVerifiedNumbers(param.pageSize, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve a verified number
     * @param param the request object
     */
    public retrieveVerifiedNumber(param: VerifiedNumbersApiRetrieveVerifiedNumberRequest, options?: Configuration): Promise<VerifiedNumberResponseDataWrapper> {
        return this.api.retrieveVerifiedNumber(param.phoneNumber,  options).toPromise();
    }

    /**
     * Submit verification code
     * @param param the request object
     */
    public verifiedNumbersPhoneNumberActionsVerifyPost(param: VerifiedNumbersApiVerifiedNumbersPhoneNumberActionsVerifyPostRequest, options?: Configuration): Promise<VerifiedNumberResponseDataWrapper> {
        return this.api.verifiedNumbersPhoneNumberActionsVerifyPost(param.phoneNumber, param.verifyVerificationCodeRequest,  options).toPromise();
    }

}

import { ObservableVerifyApi } from "./ObservableAPI.ts";
import { VerifyApiRequestFactory, VerifyApiResponseProcessor} from "../apis/VerifyApi.ts";

export interface VerifyApiCreateVerificationCallRequest {
    /**
     * 
     * @type CreateVerificationRequestCall
     * @memberof VerifyApicreateVerificationCall
     */
    createVerificationRequestCall: CreateVerificationRequestCall
}

export interface VerifyApiCreateVerificationFlashcallRequest {
    /**
     * 
     * @type CreateVerificationRequestFlashcall
     * @memberof VerifyApicreateVerificationFlashcall
     */
    createVerificationRequestFlashcall: CreateVerificationRequestFlashcall
}

export interface VerifyApiCreateVerificationPSD2Request {
    /**
     * 
     * @type CreateVerificationRequestPSD2
     * @memberof VerifyApicreateVerificationPSD2
     */
    createVerificationRequestPSD2: CreateVerificationRequestPSD2
}

export interface VerifyApiCreateVerificationSMSRequest {
    /**
     * 
     * @type CreateVerificationRequestSMS
     * @memberof VerifyApicreateVerificationSMS
     */
    createVerificationRequestSMS: CreateVerificationRequestSMS
}

export interface VerifyApiCreateVerificationWhatsappRequest {
    /**
     * 
     * @type CreateVerificationRequestWhatsapp
     * @memberof VerifyApicreateVerificationWhatsapp
     */
    createVerificationRequestWhatsapp: CreateVerificationRequestWhatsapp
}

export interface VerifyApiCreateVerifyProfileRequest {
    /**
     * 
     * @type CreateVerifyProfileRequest
     * @memberof VerifyApicreateVerifyProfile
     */
    createVerifyProfileRequest: CreateVerifyProfileRequest
}

export interface VerifyApiDeleteVerifyProfileRequest {
    /**
     * The identifier of the Verify profile to delete.
     * @type string
     * @memberof VerifyApideleteVerifyProfile
     */
    verifyProfileId: string
}

export interface VerifyApiListVerificationsRequest {
    /**
     * The phone number associated with the verifications to retrieve.
     * @type string
     * @memberof VerifyApilistVerifications
     */
    phoneNumber: string
}

export interface VerifyApiListVerifyProfilesRequest {
    /**
     * 
     * @type string
     * @memberof VerifyApilistVerifyProfiles
     */
    filterName?: string
    /**
     * 
     * @type number
     * @memberof VerifyApilistVerifyProfiles
     */
    pageSize?: number
    /**
     * 
     * @type number
     * @memberof VerifyApilistVerifyProfiles
     */
    pageNumber?: number
}

export interface VerifyApiRetrieveVerificationRequest {
    /**
     * The identifier of the verification to retrieve.
     * @type string
     * @memberof VerifyApiretrieveVerification
     */
    verificationId: string
}

export interface VerifyApiRetrieveVerifyProfileRequest {
    /**
     * The identifier of the Verify profile to retrieve.
     * @type string
     * @memberof VerifyApiretrieveVerifyProfile
     */
    verifyProfileId: string
}

export interface VerifyApiUpdateVerifyProfileRequest {
    /**
     * The identifier of the Verify profile to update.
     * @type string
     * @memberof VerifyApiupdateVerifyProfile
     */
    verifyProfileId: string
    /**
     * 
     * @type UpdateVerifyProfileRequest
     * @memberof VerifyApiupdateVerifyProfile
     */
    updateVerifyProfileRequest: UpdateVerifyProfileRequest
}

export interface VerifyApiVerifyVerificationCodeRequest {
    /**
     * The phone number associated with the verification code being verified.
     * @type string
     * @memberof VerifyApiverifyVerificationCode
     */
    phoneNumber: string
    /**
     * 
     * @type VerifyVerificationCodeRequest
     * @memberof VerifyApiverifyVerificationCode
     */
    verifyVerificationCodeRequest: VerifyVerificationCodeRequest
}

export class ObjectVerifyApi {
    private api: ObservableVerifyApi

    public constructor(configuration: Configuration, requestFactory?: VerifyApiRequestFactory, responseProcessor?: VerifyApiResponseProcessor) {
        this.api = new ObservableVerifyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Trigger a Call verification
     * @param param the request object
     */
    public createVerificationCall(param: VerifyApiCreateVerificationCallRequest, options?: Configuration): Promise<CreateVerificationResponse> {
        return this.api.createVerificationCall(param.createVerificationRequestCall,  options).toPromise();
    }

    /**
     * Trigger a Flash call verification
     * @param param the request object
     */
    public createVerificationFlashcall(param: VerifyApiCreateVerificationFlashcallRequest, options?: Configuration): Promise<CreateVerificationResponse> {
        return this.api.createVerificationFlashcall(param.createVerificationRequestFlashcall,  options).toPromise();
    }

    /**
     * Trigger a PSD2 verification
     * @param param the request object
     */
    public createVerificationPSD2(param: VerifyApiCreateVerificationPSD2Request, options?: Configuration): Promise<CreateVerificationResponse> {
        return this.api.createVerificationPSD2(param.createVerificationRequestPSD2,  options).toPromise();
    }

    /**
     * Trigger a SMS verification
     * @param param the request object
     */
    public createVerificationSMS(param: VerifyApiCreateVerificationSMSRequest, options?: Configuration): Promise<CreateVerificationResponse> {
        return this.api.createVerificationSMS(param.createVerificationRequestSMS,  options).toPromise();
    }

    /**
     * Trigger a Whatsapp verification
     * @param param the request object
     */
    public createVerificationWhatsapp(param: VerifyApiCreateVerificationWhatsappRequest, options?: Configuration): Promise<CreateVerificationResponse> {
        return this.api.createVerificationWhatsapp(param.createVerificationRequestWhatsapp,  options).toPromise();
    }

    /**
     * Creates a new Verify profile to associate verifications with.
     * Create a Verify profile
     * @param param the request object
     */
    public createVerifyProfile(param: VerifyApiCreateVerifyProfileRequest, options?: Configuration): Promise<VerifyProfileResponseDataWrapper> {
        return this.api.createVerifyProfile(param.createVerifyProfileRequest,  options).toPromise();
    }

    /**
     * Delete a Verify profile
     * @param param the request object
     */
    public deleteVerifyProfile(param: VerifyApiDeleteVerifyProfileRequest, options?: Configuration): Promise<VerifyProfileResponseDataWrapper> {
        return this.api.deleteVerifyProfile(param.verifyProfileId,  options).toPromise();
    }

    /**
     * List verifications by phone number
     * @param param the request object
     */
    public listVerifications(param: VerifyApiListVerificationsRequest, options?: Configuration): Promise<ListVerificationsResponse> {
        return this.api.listVerifications(param.phoneNumber,  options).toPromise();
    }

    /**
     * Gets a paginated list of Verify profiles.
     * List all Verify profiles
     * @param param the request object
     */
    public listVerifyProfiles(param: VerifyApiListVerifyProfilesRequest = {}, options?: Configuration): Promise<ListVerifyProfilesResponse> {
        return this.api.listVerifyProfiles(param.filterName, param.pageSize, param.pageNumber,  options).toPromise();
    }

    /**
     * Retrieve a verification
     * @param param the request object
     */
    public retrieveVerification(param: VerifyApiRetrieveVerificationRequest, options?: Configuration): Promise<RetrieveVerificationResponse> {
        return this.api.retrieveVerification(param.verificationId,  options).toPromise();
    }

    /**
     * Gets a single Verify profile.
     * Retrieve a Verify profile
     * @param param the request object
     */
    public retrieveVerifyProfile(param: VerifyApiRetrieveVerifyProfileRequest, options?: Configuration): Promise<VerifyProfileResponseDataWrapper> {
        return this.api.retrieveVerifyProfile(param.verifyProfileId,  options).toPromise();
    }

    /**
     * Update a Verify profile
     * @param param the request object
     */
    public updateVerifyProfile(param: VerifyApiUpdateVerifyProfileRequest, options?: Configuration): Promise<VerifyProfileResponseDataWrapper> {
        return this.api.updateVerifyProfile(param.verifyProfileId, param.updateVerifyProfileRequest,  options).toPromise();
    }

    /**
     * Submit a verification code. Deprecation notice: `verify_profile_id\' is now a mandatory field. The sunset date for this change is 2022-04-02 00:00:00.
     * @param param the request object
     */
    public verifyVerificationCode(param: VerifyApiVerifyVerificationCodeRequest, options?: Configuration): Promise<VerifyVerificationCodeResponse> {
        return this.api.verifyVerificationCode(param.phoneNumber, param.verifyVerificationCodeRequest,  options).toPromise();
    }

}

import { ObservableVirtualCrossConnectsApi } from "./ObservableAPI.ts";
import { VirtualCrossConnectsApiRequestFactory, VirtualCrossConnectsApiResponseProcessor} from "../apis/VirtualCrossConnectsApi.ts";

export interface VirtualCrossConnectsApiVirtaulCrossConnectListRequest {
    /**
     * The page number to load
     * @type number
     * @memberof VirtualCrossConnectsApivirtaulCrossConnectList
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof VirtualCrossConnectsApivirtaulCrossConnectList
     */
    pageSize?: number
    /**
     * The associated network id to filter on.
     * @type string
     * @memberof VirtualCrossConnectsApivirtaulCrossConnectList
     */
    filterNetworkId?: string
}

export interface VirtualCrossConnectsApiVirtaulCrossConnectRegionListRequest {
    /**
     * The page number to load
     * @type number
     * @memberof VirtualCrossConnectsApivirtaulCrossConnectRegionList
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof VirtualCrossConnectsApivirtaulCrossConnectRegionList
     */
    pageSize?: number
    /**
     * The Telnyx region code
     * @type string
     * @memberof VirtualCrossConnectsApivirtaulCrossConnectRegionList
     */
    filterRegionCode?: string
    /**
     * The Telnyx region code
     * @type &#39;aws&#39; | &#39;azure&#39; | &#39;gce&#39;
     * @memberof VirtualCrossConnectsApivirtaulCrossConnectRegionList
     */
    filterCloudProvider?: 'aws' | 'azure' | 'gce'
}

export interface VirtualCrossConnectsApiVirtualCrossConnectCreateRequest {
    /**
     * 
     * @type VirtualCrossConnectCreate
     * @memberof VirtualCrossConnectsApivirtualCrossConnectCreate
     */
    virtualCrossConnectCreate: VirtualCrossConnectCreate
}

export interface VirtualCrossConnectsApiVirtualCrossConnectDeleteRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof VirtualCrossConnectsApivirtualCrossConnectDelete
     */
    id: string
}

export interface VirtualCrossConnectsApiVirtualCrossConnectGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof VirtualCrossConnectsApivirtualCrossConnectGet
     */
    id: string
}

export interface VirtualCrossConnectsApiVirtualCrossConnectProvisionRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof VirtualCrossConnectsApivirtualCrossConnectProvision
     */
    id: string
}

export interface VirtualCrossConnectsApiVirtualCrossConnectRegionGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof VirtualCrossConnectsApivirtualCrossConnectRegionGet
     */
    id: string
}

export interface VirtualCrossConnectsApiVirtualCrossConnectUpdateRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof VirtualCrossConnectsApivirtualCrossConnectUpdate
     */
    id: string
    /**
     * 
     * @type VirtualCrossConnectPatch
     * @memberof VirtualCrossConnectsApivirtualCrossConnectUpdate
     */
    virtualCrossConnectPatch: VirtualCrossConnectPatch
}

export class ObjectVirtualCrossConnectsApi {
    private api: ObservableVirtualCrossConnectsApi

    public constructor(configuration: Configuration, requestFactory?: VirtualCrossConnectsApiRequestFactory, responseProcessor?: VirtualCrossConnectsApiResponseProcessor) {
        this.api = new ObservableVirtualCrossConnectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all Virtual Cross Connects.
     * List all Virtual Cross Connects
     * @param param the request object
     */
    public virtaulCrossConnectList(param: VirtualCrossConnectsApiVirtaulCrossConnectListRequest = {}, options?: Configuration): Promise<VirtaulCrossConnectList200Response> {
        return this.api.virtaulCrossConnectList(param.pageNumber, param.pageSize, param.filterNetworkId,  options).toPromise();
    }

    /**
     * List all Virtual Cross Connects Cloud Regions.<br /><br />This endpoint shows which cloud regions are available for the `region_code` your Virtual Cross Connect will be provisioned in.
     * List all Virtual Cross Connect Cloud Regions
     * @param param the request object
     */
    public virtaulCrossConnectRegionList(param: VirtualCrossConnectsApiVirtaulCrossConnectRegionListRequest = {}, options?: Configuration): Promise<VirtaulCrossConnectRegionList200Response> {
        return this.api.virtaulCrossConnectRegionList(param.pageNumber, param.pageSize, param.filterRegionCode, param.filterCloudProvider,  options).toPromise();
    }

    /**
     * Create a new Virtual Cross Connect.<br /><br />For AWS and GCE, you have the option of creating the primary connection first and the secondary connection later. You also have the option of disabling the primary and/or secondary connections at any time and later re-enabling them. With Azure, you do not have this option. Azure requires both the primary and secondary connections to be created at the same time and they can not be independantly disabled.
     * Create a Virtual Cross Connect
     * @param param the request object
     */
    public virtualCrossConnectCreate(param: VirtualCrossConnectsApiVirtualCrossConnectCreateRequest, options?: Configuration): Promise<VirtualCrossConnectCreate200Response> {
        return this.api.virtualCrossConnectCreate(param.virtualCrossConnectCreate,  options).toPromise();
    }

    /**
     * Delete a Virtual Cross Connect.
     * Delete a Virtual Cross Connect
     * @param param the request object
     */
    public virtualCrossConnectDelete(param: VirtualCrossConnectsApiVirtualCrossConnectDeleteRequest, options?: Configuration): Promise<VirtualCrossConnectCreate200Response> {
        return this.api.virtualCrossConnectDelete(param.id,  options).toPromise();
    }

    /**
     * Retrieve a Virtual Cross Connect.
     * Retrieve a Virtual Cross Connect
     * @param param the request object
     */
    public virtualCrossConnectGet(param: VirtualCrossConnectsApiVirtualCrossConnectGetRequest, options?: Configuration): Promise<VirtualCrossConnectCreate200Response> {
        return this.api.virtualCrossConnectGet(param.id,  options).toPromise();
    }

    /**
     * Provision a new Virtual Cross Connect.<br /><br />This endpoint is only necessary for GCE cloud regions. Once you have patched your Cloud IPs, you must POST this request to trigger the provision.
     * Provision a Virtual Cross Connect
     * @param param the request object
     */
    public virtualCrossConnectProvision(param: VirtualCrossConnectsApiVirtualCrossConnectProvisionRequest, options?: Configuration): Promise<VirtualCrossConnectCreate200Response> {
        return this.api.virtualCrossConnectProvision(param.id,  options).toPromise();
    }

    /**
     * Retrieve a Virtual Cross Connect Cloud Regions.
     * Retrieve a Virtual Cross Connect Cloud Regions
     * @param param the request object
     */
    public virtualCrossConnectRegionGet(param: VirtualCrossConnectsApiVirtualCrossConnectRegionGetRequest, options?: Configuration): Promise<VirtualCrossConnectRegionGet200Response> {
        return this.api.virtualCrossConnectRegionGet(param.id,  options).toPromise();
    }

    /**
     * Update the Virtual Cross Connect.<br /><br />Cloud IPs can only be patched during the `created` state, as GCE will only inform you of your generated IP once the pending connection requested has been accepted. Once the Virtual Cross Connect has moved to `provisioning`, the IPs can no longer be patched.<br /><br />Once the Virtual Cross Connect has moved to `provisioned` and you are ready to enable routing, you can toggle the routing announcements to `true`.
     * Update the Virtual Cross Connect
     * @param param the request object
     */
    public virtualCrossConnectUpdate(param: VirtualCrossConnectsApiVirtualCrossConnectUpdateRequest, options?: Configuration): Promise<VirtualCrossConnectCreate200Response> {
        return this.api.virtualCrossConnectUpdate(param.id, param.virtualCrossConnectPatch,  options).toPromise();
    }

}

import { ObservableWDRDetailReportsApi } from "./ObservableAPI.ts";
import { WDRDetailReportsApiRequestFactory, WDRDetailReportsApiResponseProcessor} from "../apis/WDRDetailReportsApi.ts";

export interface WDRDetailReportsApiGetPaginatedWdrsRequest {
    /**
     * Start date
     * @type string
     * @memberof WDRDetailReportsApigetPaginatedWdrs
     */
    startDate?: string
    /**
     * End date
     * @type string
     * @memberof WDRDetailReportsApigetPaginatedWdrs
     */
    endDate?: string
    /**
     * 
     * @type string
     * @memberof WDRDetailReportsApigetPaginatedWdrs
     */
    id?: string
    /**
     * 
     * @type string
     * @memberof WDRDetailReportsApigetPaginatedWdrs
     */
    mcc?: string
    /**
     * 
     * @type string
     * @memberof WDRDetailReportsApigetPaginatedWdrs
     */
    mnc?: string
    /**
     * 
     * @type string
     * @memberof WDRDetailReportsApigetPaginatedWdrs
     */
    imsi?: string
    /**
     * 
     * @type string
     * @memberof WDRDetailReportsApigetPaginatedWdrs
     */
    simGroupName?: string
    /**
     * 
     * @type string
     * @memberof WDRDetailReportsApigetPaginatedWdrs
     */
    simGroupId?: string
    /**
     * 
     * @type string
     * @memberof WDRDetailReportsApigetPaginatedWdrs
     */
    simCardId?: string
    /**
     * 
     * @type string
     * @memberof WDRDetailReportsApigetPaginatedWdrs
     */
    phoneNumber?: string
    /**
     * Page number
     * @type number
     * @memberof WDRDetailReportsApigetPaginatedWdrs
     */
    pageNumber?: number
    /**
     * Size of the page
     * @type number
     * @memberof WDRDetailReportsApigetPaginatedWdrs
     */
    pageSize?: number
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof WDRDetailReportsApigetPaginatedWdrs
     */
    sort?: Array<string>
}

export class ObjectWDRDetailReportsApi {
    private api: ObservableWDRDetailReportsApi

    public constructor(configuration: Configuration, requestFactory?: WDRDetailReportsApiRequestFactory, responseProcessor?: WDRDetailReportsApiResponseProcessor) {
        this.api = new ObservableWDRDetailReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch all Wdr records 
     * @param param the request object
     */
    public getPaginatedWdrs(param: WDRDetailReportsApiGetPaginatedWdrsRequest = {}, options?: Configuration): Promise<ExternalWdrGetDetailResponse> {
        return this.api.getPaginatedWdrs(param.startDate, param.endDate, param.id, param.mcc, param.mnc, param.imsi, param.simGroupName, param.simGroupId, param.simCardId, param.phoneNumber, param.pageNumber, param.pageSize, param.sort,  options).toPromise();
    }

}

import { ObservableWebhooksApi } from "./ObservableAPI.ts";
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor} from "../apis/WebhooksApi.ts";

export interface WebhooksApiGetWebhookDeliveriesRequest {
    /**
     * Return only webhook_deliveries matching the given &#x60;status&#x60;
     * @type &#39;delivered&#39; | &#39;failed&#39;
     * @memberof WebhooksApigetWebhookDeliveries
     */
    filterStatusEq?: 'delivered' | 'failed'
    /**
     * Return only webhook_deliveries matching the given value of &#x60;event_type&#x60;. Accepts multiple values separated by a &#x60;,&#x60;.
     * @type string
     * @memberof WebhooksApigetWebhookDeliveries
     */
    filterEventType?: string
    /**
     * Return only webhook deliveries whose &#x60;webhook&#x60; component contains the given text
     * @type string
     * @memberof WebhooksApigetWebhookDeliveries
     */
    filterWebhookContains?: string
    /**
     * Return only webhook_deliveries whose &#x60;attempts&#x60; component contains the given text
     * @type string
     * @memberof WebhooksApigetWebhookDeliveries
     */
    filterAttemptsContains?: string
    /**
     * Return only webhook_deliveries whose delivery started later than or at given ISO 8601 datetime
     * @type string
     * @memberof WebhooksApigetWebhookDeliveries
     */
    filterStartedAtGte?: string
    /**
     * Return only webhook_deliveries whose delivery started earlier than or at given ISO 8601 datetime
     * @type string
     * @memberof WebhooksApigetWebhookDeliveries
     */
    filterStartedAtLte?: string
    /**
     * Return only webhook_deliveries whose delivery finished later than or at given ISO 8601 datetime
     * @type string
     * @memberof WebhooksApigetWebhookDeliveries
     */
    filterFinishedAtGte?: string
    /**
     * Return only webhook_deliveries whose delivery finished earlier than or at given ISO 8601 datetime
     * @type string
     * @memberof WebhooksApigetWebhookDeliveries
     */
    filterFinishedAtLte?: string
    /**
     * The page number to load
     * @type number
     * @memberof WebhooksApigetWebhookDeliveries
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof WebhooksApigetWebhookDeliveries
     */
    pageSize?: number
}

export interface WebhooksApiGetWebhookDeliveryRequest {
    /**
     * Uniquely identifies the webhook_delivery.
     * @type string
     * @memberof WebhooksApigetWebhookDelivery
     */
    id: string
}

export class ObjectWebhooksApi {
    private api: ObservableWebhooksApi

    public constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor) {
        this.api = new ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Lists webhook_deliveries for the authenticated user
     * List webhook deliveries
     * @param param the request object
     */
    public getWebhookDeliveries(param: WebhooksApiGetWebhookDeliveriesRequest = {}, options?: Configuration): Promise<GetWebhookDeliveries200Response> {
        return this.api.getWebhookDeliveries(param.filterStatusEq, param.filterEventType, param.filterWebhookContains, param.filterAttemptsContains, param.filterStartedAtGte, param.filterStartedAtLte, param.filterFinishedAtGte, param.filterFinishedAtLte, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Provides webhook_delivery debug data, such as timestamps, delivery status and attempts.
     * Find webhook_delivery details by ID
     * @param param the request object
     */
    public getWebhookDelivery(param: WebhooksApiGetWebhookDeliveryRequest, options?: Configuration): Promise<GetWebhookDelivery200Response> {
        return this.api.getWebhookDelivery(param.id,  options).toPromise();
    }

}

import { ObservableWhatsAppBusinessAccountApi } from "./ObservableAPI.ts";
import { WhatsAppBusinessAccountApiRequestFactory, WhatsAppBusinessAccountApiResponseProcessor} from "../apis/WhatsAppBusinessAccountApi.ts";

export interface WhatsAppBusinessAccountApiListWhatsappBusinessAccountsRequest {
    /**
     * The page number to load
     * @type number
     * @memberof WhatsAppBusinessAccountApilistWhatsappBusinessAccounts
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof WhatsAppBusinessAccountApilistWhatsappBusinessAccounts
     */
    pageSize?: number
}

export interface WhatsAppBusinessAccountApiRetrieveWhatsappBusinessAccountRequest {
    /**
     * Identifies the WhatsApp Business Account
     * @type string
     * @memberof WhatsAppBusinessAccountApiretrieveWhatsappBusinessAccount
     */
    id: string
}

export interface WhatsAppBusinessAccountApiRetrieveWhatsappBusinessAccountPhoneNumbersRequest {
    /**
     * Identifies the WhatsApp Business Account
     * @type string
     * @memberof WhatsAppBusinessAccountApiretrieveWhatsappBusinessAccountPhoneNumbers
     */
    id: string
}

export class ObjectWhatsAppBusinessAccountApi {
    private api: ObservableWhatsAppBusinessAccountApi

    public constructor(configuration: Configuration, requestFactory?: WhatsAppBusinessAccountApiRequestFactory, responseProcessor?: WhatsAppBusinessAccountApiResponseProcessor) {
        this.api = new ObservableWhatsAppBusinessAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Lists the WhatsApp Business Accounts owned by the current organization
     * @param param the request object
     */
    public listWhatsappBusinessAccounts(param: WhatsAppBusinessAccountApiListWhatsappBusinessAccountsRequest = {}, options?: Configuration): Promise<ListWhatsAppBusinessAccountsResponse> {
        return this.api.listWhatsappBusinessAccounts(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves a WhatsApp Business Account
     * @param param the request object
     */
    public retrieveWhatsappBusinessAccount(param: WhatsAppBusinessAccountApiRetrieveWhatsappBusinessAccountRequest, options?: Configuration): Promise<WhatsAppBusinessAccount> {
        return this.api.retrieveWhatsappBusinessAccount(param.id,  options).toPromise();
    }

    /**
     * Retrieves the phone numbers from a WhatsApp Business Account
     * @param param the request object
     */
    public retrieveWhatsappBusinessAccountPhoneNumbers(param: WhatsAppBusinessAccountApiRetrieveWhatsappBusinessAccountPhoneNumbersRequest, options?: Configuration): Promise<ListWhatsAppPhoneNumbersResponse> {
        return this.api.retrieveWhatsappBusinessAccountPhoneNumbers(param.id,  options).toPromise();
    }

}

import { ObservableWhatsAppContactsApi } from "./ObservableAPI.ts";
import { WhatsAppContactsApiRequestFactory, WhatsAppContactsApiResponseProcessor} from "../apis/WhatsAppContactsApi.ts";

export interface WhatsAppContactsApiCheckContactRequest {
    /**
     * 
     * @type CheckContactRequestBody
     * @memberof WhatsAppContactsApicheckContact
     */
    checkContactRequestBody: CheckContactRequestBody
}

export class ObjectWhatsAppContactsApi {
    private api: ObservableWhatsAppContactsApi

    public constructor(configuration: Configuration, requestFactory?: WhatsAppContactsApiRequestFactory, responseProcessor?: WhatsAppContactsApiResponseProcessor) {
        this.api = new ObservableWhatsAppContactsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Verify that a phone number belongs to a valid WhatsApp account. You must ensure that the status is valid before you can message a user, and you\'ll get their WhatsApp ID to use for messaging.
     * Check Contact
     * @param param the request object
     */
    public checkContact(param: WhatsAppContactsApiCheckContactRequest, options?: Configuration): Promise<CheckContactResponse> {
        return this.api.checkContact(param.checkContactRequestBody,  options).toPromise();
    }

}

import { ObservableWhatsAppDetailReportsApi } from "./ObservableAPI.ts";
import { WhatsAppDetailReportsApiRequestFactory, WhatsAppDetailReportsApiResponseProcessor} from "../apis/WhatsAppDetailReportsApi.ts";

export interface WhatsAppDetailReportsApiDeleteRequestRequest {
    /**
     * 
     * @type string
     * @memberof WhatsAppDetailReportsApideleteRequest
     */
    id: string
}

export interface WhatsAppDetailReportsApiGetRequestRequest {
    /**
     * 
     * @type string
     * @memberof WhatsAppDetailReportsApigetRequest
     */
    id: string
}

export interface WhatsAppDetailReportsApiGetRequestsRequest {
    /**
     * Page number
     * @type number
     * @memberof WhatsAppDetailReportsApigetRequests
     */
    pageNumber?: number
    /**
     * Size of the page
     * @type number
     * @memberof WhatsAppDetailReportsApigetRequests
     */
    pageSize?: number
}

export interface WhatsAppDetailReportsApiSubmitRequestRequest {
    /**
     * WhatsApp detail request data
     * @type WhatsAppReportsReq
     * @memberof WhatsAppDetailReportsApisubmitRequest
     */
    whatsAppReportsReq: WhatsAppReportsReq
}

export class ObjectWhatsAppDetailReportsApi {
    private api: ObservableWhatsAppDetailReportsApi

    public constructor(configuration: Configuration, requestFactory?: WhatsAppDetailReportsApiRequestFactory, responseProcessor?: WhatsAppDetailReportsApiResponseProcessor) {
        this.api = new ObservableWhatsAppDetailReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete generated WhatsApp detail report by id
     * @param param the request object
     */
    public deleteRequest(param: WhatsAppDetailReportsApiDeleteRequestRequest, options?: Configuration): Promise<WhatsAppDetailReportResponse> {
        return this.api.deleteRequest(param.id,  options).toPromise();
    }

    /**
     * Fetch single whatsapp detail report by id.
     * @param param the request object
     */
    public getRequest(param: WhatsAppDetailReportsApiGetRequestRequest, options?: Configuration): Promise<WhatsAppDetailReportResponse> {
        return this.api.getRequest(param.id,  options).toPromise();
    }

    /**
     * Fetch all previous requests for WhatsApp detail reports. WhatsApp detail reports are reports for pulling all WhatsApp records. 
     * @param param the request object
     */
    public getRequests(param: WhatsAppDetailReportsApiGetRequestsRequest = {}, options?: Configuration): Promise<WhatsAppGetAllDetailReportResponse> {
        return this.api.getRequests(param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Submit a request for new WhatsApp detail report. WhatsApp detail report pulls all raw WhatsApp data according to defined filters.
     * @param param the request object
     */
    public submitRequest(param: WhatsAppDetailReportsApiSubmitRequestRequest, options?: Configuration): Promise<WhatsAppDetailReportResponse> {
        return this.api.submitRequest(param.whatsAppReportsReq,  options).toPromise();
    }

}

import { ObservableWhatsAppMediaApi } from "./ObservableAPI.ts";
import { WhatsAppMediaApiRequestFactory, WhatsAppMediaApiResponseProcessor} from "../apis/WhatsAppMediaApi.ts";

export interface WhatsAppMediaApiDeleteMediaRequest {
    /**
     * User\&#39;s WhatsApp ID
     * @type string
     * @memberof WhatsAppMediaApideleteMedia
     */
    whatsappUserId: string
    /**
     * WhatsApp\&#39;s Media ID
     * @type string
     * @memberof WhatsAppMediaApideleteMedia
     */
    mediaId: string
}

export interface WhatsAppMediaApiDownloadMediaRequest {
    /**
     * User\&#39;s WhatsApp ID
     * @type string
     * @memberof WhatsAppMediaApidownloadMedia
     */
    whatsappUserId: string
    /**
     * WhatsApp\&#39;s Media ID
     * @type string
     * @memberof WhatsAppMediaApidownloadMedia
     */
    mediaId: string
}

export interface WhatsAppMediaApiUploadMediaRequest {
    /**
     * The user\\\&#39;s WhatsApp ID.
     * @type string
     * @memberof WhatsAppMediaApiuploadMedia
     */
    whatsappUserId: string
    /**
     * The content-type of the uplaoded media.
     * @type string
     * @memberof WhatsAppMediaApiuploadMedia
     */
    mediaContentType: string
    /**
     * The media to store with WhatsApp.
     * @type HttpFile
     * @memberof WhatsAppMediaApiuploadMedia
     */
    uploadFile: HttpFile
}

export class ObjectWhatsAppMediaApi {
    private api: ObservableWhatsAppMediaApi

    public constructor(configuration: Configuration, requestFactory?: WhatsAppMediaApiRequestFactory, responseProcessor?: WhatsAppMediaApiResponseProcessor) {
        this.api = new ObservableWhatsAppMediaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete uploaded media.
     * Delete Media
     * @param param the request object
     */
    public deleteMedia(param: WhatsAppMediaApiDeleteMediaRequest, options?: Configuration): Promise<void> {
        return this.api.deleteMedia(param.whatsappUserId, param.mediaId,  options).toPromise();
    }

    /**
     * Retrieve uploaded media. Media is typically available for 30 days after uploading.
     * Download Media
     * @param param the request object
     */
    public downloadMedia(param: WhatsAppMediaApiDownloadMediaRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.downloadMedia(param.whatsappUserId, param.mediaId,  options).toPromise();
    }

    /**
     * Upload media. Accepted media types include image/jpeg, image/png, video/mp4, video/3gpp, audio/aac, audio/ogg.
     * Upload Media
     * @param param the request object
     */
    public uploadMedia(param: WhatsAppMediaApiUploadMediaRequest, options?: Configuration): Promise<UploadMedia> {
        return this.api.uploadMedia(param.whatsappUserId, param.mediaContentType, param.uploadFile,  options).toPromise();
    }

}

import { ObservableWhatsAppMessageTemplateApi } from "./ObservableAPI.ts";
import { WhatsAppMessageTemplateApiRequestFactory, WhatsAppMessageTemplateApiResponseProcessor} from "../apis/WhatsAppMessageTemplateApi.ts";

export interface WhatsAppMessageTemplateApiCreateWhatsappMessageTemplatesRequest {
    /**
     * Identifies the WhatsApp Business Account
     * @type string
     * @memberof WhatsAppMessageTemplateApicreateWhatsappMessageTemplates
     */
    id: string
    /**
     * 
     * @type CreateWhatsappMessageTemplateRequestBody
     * @memberof WhatsAppMessageTemplateApicreateWhatsappMessageTemplates
     */
    createWhatsappMessageTemplateRequestBody?: CreateWhatsappMessageTemplateRequestBody
}

export interface WhatsAppMessageTemplateApiDeleteWhatsappMessageTemplatesRequest {
    /**
     * Identifies the WhatsApp Business Account
     * @type string
     * @memberof WhatsAppMessageTemplateApideleteWhatsappMessageTemplates
     */
    id: string
    /**
     * The name of the Whatsapp Message Template
     * @type string
     * @memberof WhatsAppMessageTemplateApideleteWhatsappMessageTemplates
     */
    name: string
}

export interface WhatsAppMessageTemplateApiListWhatsappMessageTemplatesRequest {
    /**
     * Identifies the WhatsApp Business Account
     * @type string
     * @memberof WhatsAppMessageTemplateApilistWhatsappMessageTemplates
     */
    id: string
    /**
     * The template category
     * @type &#39;ACCOUNT_UPDATE&#39; | &#39;PAYMENT_UPDATE&#39; | &#39;PERSONAL_FINANCE_UPDATE&#39; | &#39;SHIPPING_UPDATE&#39; | &#39;RESERVATION_UPDATE&#39; | &#39;ISSUE_RESOLUTION&#39; | &#39;APPOINTMENT_UPDATE&#39; | &#39;TRANSPORTATION_UPDATE&#39; | &#39;TICKET_UPDATE&#39; | &#39;ALERT_UPDATE&#39; | &#39;AUTO_REPLY&#39;
     * @memberof WhatsAppMessageTemplateApilistWhatsappMessageTemplates
     */
    category?: 'ACCOUNT_UPDATE' | 'PAYMENT_UPDATE' | 'PERSONAL_FINANCE_UPDATE' | 'SHIPPING_UPDATE' | 'RESERVATION_UPDATE' | 'ISSUE_RESOLUTION' | 'APPOINTMENT_UPDATE' | 'TRANSPORTATION_UPDATE' | 'TICKET_UPDATE' | 'ALERT_UPDATE' | 'AUTO_REPLY'
    /**
     * The language of the whatsapp message template
     * @type &#39;af&#39; | &#39;sq&#39; | &#39;ar&#39; | &#39;az&#39; | &#39;bn&#39; | &#39;bg&#39; | &#39;ca&#39; | &#39;zh_CN&#39; | &#39;zh_HK&#39; | &#39;zh_TW&#39; | &#39;hr&#39; | &#39;cs&#39; | &#39;da&#39; | &#39;nl&#39; | &#39;en&#39; | &#39;en_GB&#39; | &#39;en_US&#39; | &#39;et&#39; | &#39;fil&#39; | &#39;fi&#39; | &#39;fr&#39; | &#39;ka&#39; | &#39;de&#39; | &#39;el&#39; | &#39;gu&#39; | &#39;ha&#39; | &#39;he&#39; | &#39;hi&#39; | &#39;hu&#39; | &#39;id&#39; | &#39;ga&#39; | &#39;it&#39; | &#39;ja&#39; | &#39;kn&#39; | &#39;kk&#39; | &#39;rw_RW&#39; | &#39;ko&#39; | &#39;ky_KG&#39; | &#39;lo&#39; | &#39;lv&#39; | &#39;lt&#39; | &#39;mk&#39; | &#39;ms&#39; | &#39;ml&#39; | &#39;mr&#39; | &#39;nb&#39; | &#39;fa&#39; | &#39;pl&#39; | &#39;pt_BR&#39; | &#39;pt_PT&#39; | &#39;pa&#39; | &#39;ro&#39; | &#39;ru&#39; | &#39;sr&#39; | &#39;sk&#39; | &#39;sl&#39; | &#39;es&#39; | &#39;es_AR&#39; | &#39;es_ES&#39; | &#39;es_MX&#39; | &#39;sw&#39; | &#39;sv&#39; | &#39;ta&#39; | &#39;te&#39; | &#39;th&#39; | &#39;tr&#39; | &#39;uk&#39; | &#39;ur&#39; | &#39;uz&#39; | &#39;vi&#39; | &#39;zu&#39;
     * @memberof WhatsAppMessageTemplateApilistWhatsappMessageTemplates
     */
    language?: 'af' | 'sq' | 'ar' | 'az' | 'bn' | 'bg' | 'ca' | 'zh_CN' | 'zh_HK' | 'zh_TW' | 'hr' | 'cs' | 'da' | 'nl' | 'en' | 'en_GB' | 'en_US' | 'et' | 'fil' | 'fi' | 'fr' | 'ka' | 'de' | 'el' | 'gu' | 'ha' | 'he' | 'hi' | 'hu' | 'id' | 'ga' | 'it' | 'ja' | 'kn' | 'kk' | 'rw_RW' | 'ko' | 'ky_KG' | 'lo' | 'lv' | 'lt' | 'mk' | 'ms' | 'ml' | 'mr' | 'nb' | 'fa' | 'pl' | 'pt_BR' | 'pt_PT' | 'pa' | 'ro' | 'ru' | 'sr' | 'sk' | 'sl' | 'es' | 'es_AR' | 'es_ES' | 'es_MX' | 'sw' | 'sv' | 'ta' | 'te' | 'th' | 'tr' | 'uk' | 'ur' | 'uz' | 'vi' | 'zu'
    /**
     * A name identifying this whatsapp message template
     * @type string
     * @memberof WhatsAppMessageTemplateApilistWhatsappMessageTemplates
     */
    name?: string
    /**
     * The score of the whatsapp message template
     * @type string
     * @memberof WhatsAppMessageTemplateApilistWhatsappMessageTemplates
     */
    qualityScore?: string
    /**
     * The reason why a message template was rejected by Whatsapp
     * @type string
     * @memberof WhatsAppMessageTemplateApilistWhatsappMessageTemplates
     */
    rejectedReason?: string
    /**
     * The maximum number of message_templates to be returned on a query, we may return less than the limit number even if more pages are available.
     * @type string
     * @memberof WhatsAppMessageTemplateApilistWhatsappMessageTemplates
     */
    limit?: string
    /**
     * Indicates that this is a query for entries before the given cursor
     * @type string
     * @memberof WhatsAppMessageTemplateApilistWhatsappMessageTemplates
     */
    before?: string
    /**
     * Indicates that this is a query for entries after the given cursor
     * @type string
     * @memberof WhatsAppMessageTemplateApilistWhatsappMessageTemplates
     */
    after?: string
    /**
     * Identifies the whatsApp Message Template status
     * @type string
     * @memberof WhatsAppMessageTemplateApilistWhatsappMessageTemplates
     */
    status?: string
}

export class ObjectWhatsAppMessageTemplateApi {
    private api: ObservableWhatsAppMessageTemplateApi

    public constructor(configuration: Configuration, requestFactory?: WhatsAppMessageTemplateApiRequestFactory, responseProcessor?: WhatsAppMessageTemplateApiResponseProcessor) {
        this.api = new ObservableWhatsAppMessageTemplateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create WhatsApp Message Templates
     * @param param the request object
     */
    public createWhatsappMessageTemplates(param: WhatsAppMessageTemplateApiCreateWhatsappMessageTemplatesRequest, options?: Configuration): Promise<WhatsAppMessageTemplate1> {
        return this.api.createWhatsappMessageTemplates(param.id, param.createWhatsappMessageTemplateRequestBody,  options).toPromise();
    }

    /**
     * Deletes all of the message templates with the given name and business account
     * Delete WhatsApp Message Templates
     * @param param the request object
     */
    public deleteWhatsappMessageTemplates(param: WhatsAppMessageTemplateApiDeleteWhatsappMessageTemplatesRequest, options?: Configuration): Promise<void> {
        return this.api.deleteWhatsappMessageTemplates(param.id, param.name,  options).toPromise();
    }

    /**
     * List WhatsApp Message Templates
     * @param param the request object
     */
    public listWhatsappMessageTemplates(param: WhatsAppMessageTemplateApiListWhatsappMessageTemplatesRequest, options?: Configuration): Promise<WhatsAppMessageTemplate> {
        return this.api.listWhatsappMessageTemplates(param.id, param.category, param.language, param.name, param.qualityScore, param.rejectedReason, param.limit, param.before, param.after, param.status,  options).toPromise();
    }

}

import { ObservableWhatsAppMessagesApi } from "./ObservableAPI.ts";
import { WhatsAppMessagesApiRequestFactory, WhatsAppMessagesApiResponseProcessor} from "../apis/WhatsAppMessagesApi.ts";

export interface WhatsAppMessagesApiMarkMessageAsReadRequest {
    /**
     * Message ID from Webhook
     * @type string
     * @memberof WhatsAppMessagesApimarkMessageAsRead
     */
    messageId: string
    /**
     * 
     * @type MarkMessageAsReadRequestBody
     * @memberof WhatsAppMessagesApimarkMessageAsRead
     */
    markMessageAsReadRequestBody: MarkMessageAsReadRequestBody
}

export interface WhatsAppMessagesApiSendMessageRequest {
    /**
     * 
     * @type CreateWhatsAppMessageRequest
     * @memberof WhatsAppMessagesApisendMessage
     */
    createWhatsAppMessageRequest: CreateWhatsAppMessageRequest
}

export class ObjectWhatsAppMessagesApi {
    private api: ObservableWhatsAppMessagesApi

    public constructor(configuration: Configuration, requestFactory?: WhatsAppMessagesApiRequestFactory, responseProcessor?: WhatsAppMessagesApiResponseProcessor) {
        this.api = new ObservableWhatsAppMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Mark a message as read.
     * Mark Message As Read
     * @param param the request object
     */
    public markMessageAsRead(param: WhatsAppMessagesApiMarkMessageAsReadRequest, options?: Configuration): Promise<void> {
        return this.api.markMessageAsRead(param.messageId, param.markMessageAsReadRequestBody,  options).toPromise();
    }

    /**
     * Send text messages, media/documents, and message templates to your customers.
     * Send Message
     * @param param the request object
     */
    public sendMessage(param: WhatsAppMessagesApiSendMessageRequest, options?: Configuration): Promise<SuccessfulResponseWithDetailsAboutTheWhatsAppMessageSent> {
        return this.api.sendMessage(param.createWhatsAppMessageRequest,  options).toPromise();
    }

}

import { ObservableWhatsAppPhoneNumberApi } from "./ObservableAPI.ts";
import { WhatsAppPhoneNumberApiRequestFactory, WhatsAppPhoneNumberApiResponseProcessor} from "../apis/WhatsAppPhoneNumberApi.ts";

export interface WhatsAppPhoneNumberApiPatchWhatsappPhoneNumberRequest {
    /**
     * Identifies the WhatsApp Phone Number
     * @type string
     * @memberof WhatsAppPhoneNumberApipatchWhatsappPhoneNumber
     */
    id: string
    /**
     * 
     * @type UpdateWhatsappPhoneNumberRequest
     * @memberof WhatsAppPhoneNumberApipatchWhatsappPhoneNumber
     */
    updateWhatsappPhoneNumberRequest: UpdateWhatsappPhoneNumberRequest
}

export interface WhatsAppPhoneNumberApiPatchWhatsappPhoneNumberAboutRequest {
    /**
     * Identifies the WhatsApp Phone Number
     * @type string
     * @memberof WhatsAppPhoneNumberApipatchWhatsappPhoneNumberAbout
     */
    id: string
    /**
     * 
     * @type UpdateWhatsappPhoneNumberAboutRequest
     * @memberof WhatsAppPhoneNumberApipatchWhatsappPhoneNumberAbout
     */
    updateWhatsappPhoneNumberAboutRequest: UpdateWhatsappPhoneNumberAboutRequest
}

export interface WhatsAppPhoneNumberApiPatchWhatsappProfilePhotoRequest {
    /**
     * Identifies the WhatsApp Phone Number
     * @type string
     * @memberof WhatsAppPhoneNumberApipatchWhatsappProfilePhoto
     */
    id: string
    /**
     * Must be an image with exactly 640x640px dimensions.
     * @type HttpFile
     * @memberof WhatsAppPhoneNumberApipatchWhatsappProfilePhoto
     */
    photo: HttpFile
}

export interface WhatsAppPhoneNumberApiRetrieveWhatsappPhoneNumberRequest {
    /**
     * Identifies the WhatsApp Phone Number
     * @type string
     * @memberof WhatsAppPhoneNumberApiretrieveWhatsappPhoneNumber
     */
    id: string
}

export interface WhatsAppPhoneNumberApiRetrieveWhatsappProfilePhotoRequest {
    /**
     * Identifies the WhatsApp Phone Number
     * @type string
     * @memberof WhatsAppPhoneNumberApiretrieveWhatsappProfilePhoto
     */
    id: string
}

export class ObjectWhatsAppPhoneNumberApi {
    private api: ObservableWhatsAppPhoneNumberApi

    public constructor(configuration: Configuration, requestFactory?: WhatsAppPhoneNumberApiRequestFactory, responseProcessor?: WhatsAppPhoneNumberApiResponseProcessor) {
        this.api = new ObservableWhatsAppPhoneNumberApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Update a WhatsApp Phone Number webhook
     * @param param the request object
     */
    public patchWhatsappPhoneNumber(param: WhatsAppPhoneNumberApiPatchWhatsappPhoneNumberRequest, options?: Configuration): Promise<WhatsAppPhoneNumber> {
        return this.api.patchWhatsappPhoneNumber(param.id, param.updateWhatsappPhoneNumberRequest,  options).toPromise();
    }

    /**
     * Update a WhatsApp Phone Number about text
     * @param param the request object
     */
    public patchWhatsappPhoneNumberAbout(param: WhatsAppPhoneNumberApiPatchWhatsappPhoneNumberAboutRequest, options?: Configuration): Promise<void> {
        return this.api.patchWhatsappPhoneNumberAbout(param.id, param.updateWhatsappPhoneNumberAboutRequest,  options).toPromise();
    }

    /**
     * Update the Whatsapp Profile Photo for a given Whatsapp Phone Number
     * @param param the request object
     */
    public patchWhatsappProfilePhoto(param: WhatsAppPhoneNumberApiPatchWhatsappProfilePhotoRequest, options?: Configuration): Promise<WhatsAppProfilePhoto> {
        return this.api.patchWhatsappProfilePhoto(param.id, param.photo,  options).toPromise();
    }

    /**
     * Retrieves a WhatsApp Phone Number
     * @param param the request object
     */
    public retrieveWhatsappPhoneNumber(param: WhatsAppPhoneNumberApiRetrieveWhatsappPhoneNumberRequest, options?: Configuration): Promise<WhatsAppPhoneNumber> {
        return this.api.retrieveWhatsappPhoneNumber(param.id,  options).toPromise();
    }

    /**
     * Retrieves a Whatsapp Profile Photo for a WhatsApp Phone Number
     * @param param the request object
     */
    public retrieveWhatsappProfilePhoto(param: WhatsAppPhoneNumberApiRetrieveWhatsappProfilePhotoRequest, options?: Configuration): Promise<WhatsAppProfilePhoto> {
        return this.api.retrieveWhatsappProfilePhoto(param.id,  options).toPromise();
    }

}

import { ObservableWhatsAppUsageAggregationsApi } from "./ObservableAPI.ts";
import { WhatsAppUsageAggregationsApiRequestFactory, WhatsAppUsageAggregationsApiResponseProcessor} from "../apis/WhatsAppUsageAggregationsApi.ts";

export interface WhatsAppUsageAggregationsApiGetUsageAggregationsSyncRequest {
    /**
     * 
     * @type Date
     * @memberof WhatsAppUsageAggregationsApigetUsageAggregationsSync
     */
    startDate?: Date
    /**
     * 
     * @type Date
     * @memberof WhatsAppUsageAggregationsApigetUsageAggregationsSync
     */
    endDate?: Date
}

export class ObjectWhatsAppUsageAggregationsApi {
    private api: ObservableWhatsAppUsageAggregationsApi

    public constructor(configuration: Configuration, requestFactory?: WhatsAppUsageAggregationsApiRequestFactory, responseProcessor?: WhatsAppUsageAggregationsApiResponseProcessor) {
        this.api = new ObservableWhatsAppUsageAggregationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate and fetch WhatsApp usage aggregations synchronously. This endpoint will both generate and fetch the WhatsApp aggregations over a specified time period. 
     * @param param the request object
     */
    public getUsageAggregationsSync(param: WhatsAppUsageAggregationsApiGetUsageAggregationsSyncRequest = {}, options?: Configuration): Promise<WhatsAppUsageAggregationsResponseContainer> {
        return this.api.getUsageAggregationsSync(param.startDate, param.endDate,  options).toPromise();
    }

}

import { ObservableWireGuardInterfacesApi } from "./ObservableAPI.ts";
import { WireGuardInterfacesApiRequestFactory, WireGuardInterfacesApiResponseProcessor} from "../apis/WireGuardInterfacesApi.ts";

export interface WireGuardInterfacesApiWireguardInterfaceCreateRequest {
    /**
     * 
     * @type WireguardInterfaceCreate
     * @memberof WireGuardInterfacesApiwireguardInterfaceCreate
     */
    wireguardInterfaceCreate: WireguardInterfaceCreate
}

export interface WireGuardInterfacesApiWireguardInterfaceDeleteRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof WireGuardInterfacesApiwireguardInterfaceDelete
     */
    id: string
}

export interface WireGuardInterfacesApiWireguardInterfaceGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof WireGuardInterfacesApiwireguardInterfaceGet
     */
    id: string
}

export interface WireGuardInterfacesApiWireguardInterfaceListRequest {
    /**
     * The page number to load
     * @type number
     * @memberof WireGuardInterfacesApiwireguardInterfaceList
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof WireGuardInterfacesApiwireguardInterfaceList
     */
    pageSize?: number
    /**
     * The associated network id to filter on.
     * @type string
     * @memberof WireGuardInterfacesApiwireguardInterfaceList
     */
    filterNetworkId?: string
}

export interface WireGuardInterfacesApiWireguardPeerAllowedIPGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof WireGuardInterfacesApiwireguardPeerAllowedIPGet
     */
    id: string
    /**
     * Identifies the child resource
     * @type string
     * @memberof WireGuardInterfacesApiwireguardPeerAllowedIPGet
     */
    childId: string
}

export interface WireGuardInterfacesApiWireguardPeerAllowedIPListRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof WireGuardInterfacesApiwireguardPeerAllowedIPList
     */
    id: string
    /**
     * The page number to load
     * @type number
     * @memberof WireGuardInterfacesApiwireguardPeerAllowedIPList
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof WireGuardInterfacesApiwireguardPeerAllowedIPList
     */
    pageSize?: number
}

export interface WireGuardInterfacesApiWireguardPeerConfigRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof WireGuardInterfacesApiwireguardPeerConfig
     */
    id: string
}

export interface WireGuardInterfacesApiWireguardPeerCreateRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof WireGuardInterfacesApiwireguardPeerCreate
     */
    id: string
    /**
     * 
     * @type WireguardPeerCreate
     * @memberof WireGuardInterfacesApiwireguardPeerCreate
     */
    wireguardPeerCreate: WireguardPeerCreate
}

export interface WireGuardInterfacesApiWireguardPeerDeleteRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof WireGuardInterfacesApiwireguardPeerDelete
     */
    id: string
}

export interface WireGuardInterfacesApiWireguardPeerGetRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof WireGuardInterfacesApiwireguardPeerGet
     */
    id: string
}

export interface WireGuardInterfacesApiWireguardPeerListRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof WireGuardInterfacesApiwireguardPeerList
     */
    id: string
    /**
     * The page number to load
     * @type number
     * @memberof WireGuardInterfacesApiwireguardPeerList
     */
    pageNumber?: number
    /**
     * The size of the page
     * @type number
     * @memberof WireGuardInterfacesApiwireguardPeerList
     */
    pageSize?: number
    /**
     * The id of the associated WireGuard interface to filter on.
     * @type string
     * @memberof WireGuardInterfacesApiwireguardPeerList
     */
    filterWireguardInterfaceId?: string
}

export interface WireGuardInterfacesApiWireguardPeerUpdateRequest {
    /**
     * Identifies the resource.
     * @type string
     * @memberof WireGuardInterfacesApiwireguardPeerUpdate
     */
    id: string
    /**
     * 
     * @type WireguardPeerPatch
     * @memberof WireGuardInterfacesApiwireguardPeerUpdate
     */
    wireguardPeerPatch: WireguardPeerPatch
}

export class ObjectWireGuardInterfacesApi {
    private api: ObservableWireGuardInterfacesApi

    public constructor(configuration: Configuration, requestFactory?: WireGuardInterfacesApiRequestFactory, responseProcessor?: WireGuardInterfacesApiResponseProcessor) {
        this.api = new ObservableWireGuardInterfacesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new WireGuard Interface. Current limitation of 10 interfaces per user can be created.
     * Create a WireGuard Interface
     * @param param the request object
     */
    public wireguardInterfaceCreate(param: WireGuardInterfacesApiWireguardInterfaceCreateRequest, options?: Configuration): Promise<WireguardInterfaceCreate202Response> {
        return this.api.wireguardInterfaceCreate(param.wireguardInterfaceCreate,  options).toPromise();
    }

    /**
     * Delete a WireGuard Interface.
     * Delete a WireGuard Interface
     * @param param the request object
     */
    public wireguardInterfaceDelete(param: WireGuardInterfacesApiWireguardInterfaceDeleteRequest, options?: Configuration): Promise<WireguardInterfaceCreate202Response> {
        return this.api.wireguardInterfaceDelete(param.id,  options).toPromise();
    }

    /**
     * Retrieve a WireGuard Interfaces.
     * Retrieve a WireGuard Interfaces
     * @param param the request object
     */
    public wireguardInterfaceGet(param: WireGuardInterfacesApiWireguardInterfaceGetRequest, options?: Configuration): Promise<WireguardInterfaceCreate202Response> {
        return this.api.wireguardInterfaceGet(param.id,  options).toPromise();
    }

    /**
     * List all WireGuard Interfaces.
     * List all WireGuard Interfaces
     * @param param the request object
     */
    public wireguardInterfaceList(param: WireGuardInterfacesApiWireguardInterfaceListRequest = {}, options?: Configuration): Promise<WireguardInterfaceList200Response> {
        return this.api.wireguardInterfaceList(param.pageNumber, param.pageSize, param.filterNetworkId,  options).toPromise();
    }

    /**
     * Retrieve the Allowed IP.
     * Retrieve the Allowed IP
     * @param param the request object
     */
    public wireguardPeerAllowedIPGet(param: WireGuardInterfacesApiWireguardPeerAllowedIPGetRequest, options?: Configuration): Promise<WireguardPeerAllowedIPGet200Response> {
        return this.api.wireguardPeerAllowedIPGet(param.id, param.childId,  options).toPromise();
    }

    /**
     * List all Allowed IPs for a WireGuard peer.
     * List all Allowed IPs for a WireGuard Peer
     * @param param the request object
     */
    public wireguardPeerAllowedIPList(param: WireGuardInterfacesApiWireguardPeerAllowedIPListRequest, options?: Configuration): Promise<WireguardPeerAllowedIPList200Response> {
        return this.api.wireguardPeerAllowedIPList(param.id, param.pageNumber, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieve Wireguard config template for Peer
     * Retrieve Wireguard config template for Peer
     * @param param the request object
     */
    public wireguardPeerConfig(param: WireGuardInterfacesApiWireguardPeerConfigRequest, options?: Configuration): Promise<string> {
        return this.api.wireguardPeerConfig(param.id,  options).toPromise();
    }

    /**
     * Create a new WireGuard Peer. Current limitation of 5 peers per interface can be created.
     * Create a WireGuard Peer
     * @param param the request object
     */
    public wireguardPeerCreate(param: WireGuardInterfacesApiWireguardPeerCreateRequest, options?: Configuration): Promise<WireguardPeerCreate202Response> {
        return this.api.wireguardPeerCreate(param.id, param.wireguardPeerCreate,  options).toPromise();
    }

    /**
     * Delete the WireGuard peer.
     * Delete the WireGuard Peer
     * @param param the request object
     */
    public wireguardPeerDelete(param: WireGuardInterfacesApiWireguardPeerDeleteRequest, options?: Configuration): Promise<WireguardPeerCreate202Response> {
        return this.api.wireguardPeerDelete(param.id,  options).toPromise();
    }

    /**
     * Retrieve the WireGuard peer.
     * Retrieve the WireGuard Peer
     * @param param the request object
     */
    public wireguardPeerGet(param: WireGuardInterfacesApiWireguardPeerGetRequest, options?: Configuration): Promise<WireguardPeerCreate202Response> {
        return this.api.wireguardPeerGet(param.id,  options).toPromise();
    }

    /**
     * List all WireGuard peers.
     * List all WireGuard Peers
     * @param param the request object
     */
    public wireguardPeerList(param: WireGuardInterfacesApiWireguardPeerListRequest, options?: Configuration): Promise<WireguardPeerList200Response> {
        return this.api.wireguardPeerList(param.id, param.pageNumber, param.pageSize, param.filterWireguardInterfaceId,  options).toPromise();
    }

    /**
     * Update the WireGuard peer.
     * Update the WireGuard Peer
     * @param param the request object
     */
    public wireguardPeerUpdate(param: WireGuardInterfacesApiWireguardPeerUpdateRequest, options?: Configuration): Promise<WireguardPeerCreate202Response> {
        return this.api.wireguardPeerUpdate(param.id, param.wireguardPeerPatch,  options).toPromise();
    }

}

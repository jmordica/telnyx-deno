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
import { ObservableAccessTokensApi } from './ObservableAPI.ts';

import { AccessTokensApiRequestFactory, AccessTokensApiResponseProcessor} from "../apis/AccessTokensApi.ts";
export class PromiseAccessTokensApi {
    private api: ObservableAccessTokensApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccessTokensApiRequestFactory,
        responseProcessor?: AccessTokensApiResponseProcessor
    ) {
        this.api = new ObservableAccessTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an Access Token (JWT) for the credential.
     * Create an Access Token.
     * @param id Identifies the resource.
     */
    public createTelephonyCredentialToken(id: string, _options?: Configuration): Promise<string> {
        const result = this.api.createTelephonyCredentialToken(id, _options);
        return result.toPromise();
    }


}



import { ObservableAdvancedOptInOptOutApi } from './ObservableAPI.ts';

import { AdvancedOptInOptOutApiRequestFactory, AdvancedOptInOptOutApiResponseProcessor} from "../apis/AdvancedOptInOptOutApi.ts";
export class PromiseAdvancedOptInOptOutApi {
    private api: ObservableAdvancedOptInOptOutApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AdvancedOptInOptOutApiRequestFactory,
        responseProcessor?: AdvancedOptInOptOutApiResponseProcessor
    ) {
        this.api = new ObservableAdvancedOptInOptOutApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Auto-Reponse Setting
     * @param profileId 
     * @param autoRespConfigCreateSchema 
     */
    public createAutorespConfigApiV2AutorespConfigsProfileIdPost(profileId: string, autoRespConfigCreateSchema: AutoRespConfigCreateSchema, _options?: Configuration): Promise<AutorespConfigResponseSchema> {
        const result = this.api.createAutorespConfigApiV2AutorespConfigsProfileIdPost(profileId, autoRespConfigCreateSchema, _options);
        return result.toPromise();
    }

    /**
     * Delete Auto-Response Setting
     * @param profileId 
     * @param autorespCfgId 
     */
    public deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(profileId: string, autorespCfgId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(profileId, autorespCfgId, _options);
        return result.toPromise();
    }

    /**
     * Get Auto-Response Setting
     * @param profileId 
     * @param autorespCfgId 
     */
    public getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(profileId: string, autorespCfgId: string, _options?: Configuration): Promise<AutorespConfigResponseSchema> {
        const result = this.api.getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(profileId, autorespCfgId, _options);
        return result.toPromise();
    }

    /**
     * List Auto-Response Settings
     * @param profileId 
     * @param countryCode 
     * @param createdAtGte 
     * @param createdAtLte 
     * @param updatedAtGte 
     * @param updatedAtLte 
     */
    public getAutorespConfigsApiV2AutorespConfigsProfileIdGet(profileId: string, countryCode?: string, createdAtGte?: string, createdAtLte?: string, updatedAtGte?: string, updatedAtLte?: string, _options?: Configuration): Promise<AutorespConfigsResponseSchema> {
        const result = this.api.getAutorespConfigsApiV2AutorespConfigsProfileIdGet(profileId, countryCode, createdAtGte, createdAtLte, updatedAtGte, updatedAtLte, _options);
        return result.toPromise();
    }

    /**
     * Update Auto-Response Setting
     * @param profileId 
     * @param autorespCfgId 
     * @param autoRespConfigCreateSchema 
     */
    public updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(profileId: string, autorespCfgId: string, autoRespConfigCreateSchema: AutoRespConfigCreateSchema, _options?: Configuration): Promise<AutorespConfigResponseSchema> {
        const result = this.api.updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(profileId, autorespCfgId, autoRespConfigCreateSchema, _options);
        return result.toPromise();
    }


}



import { ObservableAuthenticationProvidersApi } from './ObservableAPI.ts';

import { AuthenticationProvidersApiRequestFactory, AuthenticationProvidersApiResponseProcessor} from "../apis/AuthenticationProvidersApi.ts";
export class PromiseAuthenticationProvidersApi {
    private api: ObservableAuthenticationProvidersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationProvidersApiRequestFactory,
        responseProcessor?: AuthenticationProvidersApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationProvidersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an authentication provider.
     * Creates an authentication provider
     * @param authenticationProviderCreate Parameters that can be defined during authentication provider creation
     */
    public createAuthenticationProvider(authenticationProviderCreate: AuthenticationProviderCreate, _options?: Configuration): Promise<CreateAuthenticationProvider200Response> {
        const result = this.api.createAuthenticationProvider(authenticationProviderCreate, _options);
        return result.toPromise();
    }

    /**
     * Deletes an existing authentication provider.
     * Deletes an authentication provider
     * @param id authentication provider ID
     */
    public deleteAuthenticationProvider(id: string, _options?: Configuration): Promise<CreateAuthenticationProvider200Response> {
        const result = this.api.deleteAuthenticationProvider(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your SSO authentication providers.
     * List all SSO authentication providers
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;name&lt;/code&gt;: sorts the result by the     &lt;code&gt;name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-name&lt;/code&gt;: sorts the result by the     &lt;code&gt;name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     */
    public findAuthenticationProviders(pageNumber?: number, pageSize?: number, sort?: 'name' | '-name' | 'short_name' | '-short_name' | 'active' | '-active' | 'created_at' | '-created_at' | 'updated_at' | '-updated_at', _options?: Configuration): Promise<FindAuthenticationProviders200Response> {
        const result = this.api.findAuthenticationProviders(pageNumber, pageSize, sort, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing authentication provider.
     * Retrieve an authentication provider
     * @param id authentication provider ID
     */
    public getAuthenticationProvider(id: string, _options?: Configuration): Promise<CreateAuthenticationProvider200Response> {
        const result = this.api.getAuthenticationProvider(id, _options);
        return result.toPromise();
    }

    /**
     * Updates settings of an existing authentication provider.
     * Update a authentication provider
     * @param id Identifies the resource.
     * @param updateAuthenticationProviderRequest Parameters that can be updated in a authentication provider
     */
    public updateAuthenticationProvider(id: string, updateAuthenticationProviderRequest: UpdateAuthenticationProviderRequest, _options?: Configuration): Promise<CreateAuthenticationProvider200Response> {
        const result = this.api.updateAuthenticationProvider(id, updateAuthenticationProviderRequest, _options);
        return result.toPromise();
    }


}



import { ObservableAutoResponseSettingsApi } from './ObservableAPI.ts';

import { AutoResponseSettingsApiRequestFactory, AutoResponseSettingsApiResponseProcessor} from "../apis/AutoResponseSettingsApi.ts";
export class PromiseAutoResponseSettingsApi {
    private api: ObservableAutoResponseSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AutoResponseSettingsApiRequestFactory,
        responseProcessor?: AutoResponseSettingsApiResponseProcessor
    ) {
        this.api = new ObservableAutoResponseSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List Auto-Response Settings
     * @param profileId 
     * @param countryCode 
     * @param createdAtGte 
     * @param createdAtLte 
     * @param updatedAtGte 
     * @param updatedAtLte 
     */
    public getAutorespConfigsApiV2AutorespConfigsProfileIdGet(profileId: string, countryCode?: string, createdAtGte?: string, createdAtLte?: string, updatedAtGte?: string, updatedAtLte?: string, _options?: Configuration): Promise<AutorespConfigsResponseSchema> {
        const result = this.api.getAutorespConfigsApiV2AutorespConfigsProfileIdGet(profileId, countryCode, createdAtGte, createdAtLte, updatedAtGte, updatedAtLte, _options);
        return result.toPromise();
    }


}



import { ObservableAutoresponseConfigsApi } from './ObservableAPI.ts';

import { AutoresponseConfigsApiRequestFactory, AutoresponseConfigsApiResponseProcessor} from "../apis/AutoresponseConfigsApi.ts";
export class PromiseAutoresponseConfigsApi {
    private api: ObservableAutoresponseConfigsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AutoresponseConfigsApiRequestFactory,
        responseProcessor?: AutoresponseConfigsApiResponseProcessor
    ) {
        this.api = new ObservableAutoresponseConfigsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Auto-Reponse Setting
     * @param profileId 
     * @param autoRespConfigCreateSchema 
     */
    public createAutorespConfigApiV2AutorespConfigsProfileIdPost(profileId: string, autoRespConfigCreateSchema: AutoRespConfigCreateSchema, _options?: Configuration): Promise<AutorespConfigResponseSchema> {
        const result = this.api.createAutorespConfigApiV2AutorespConfigsProfileIdPost(profileId, autoRespConfigCreateSchema, _options);
        return result.toPromise();
    }

    /**
     * Delete Auto-Response Setting
     * @param profileId 
     * @param autorespCfgId 
     */
    public deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(profileId: string, autorespCfgId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(profileId, autorespCfgId, _options);
        return result.toPromise();
    }

    /**
     * Get Auto-Response Setting
     * @param profileId 
     * @param autorespCfgId 
     */
    public getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(profileId: string, autorespCfgId: string, _options?: Configuration): Promise<AutorespConfigResponseSchema> {
        const result = this.api.getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(profileId, autorespCfgId, _options);
        return result.toPromise();
    }

    /**
     * Update Auto-Response Setting
     * @param profileId 
     * @param autorespCfgId 
     * @param autoRespConfigCreateSchema 
     */
    public updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(profileId: string, autorespCfgId: string, autoRespConfigCreateSchema: AutoRespConfigCreateSchema, _options?: Configuration): Promise<AutorespConfigResponseSchema> {
        const result = this.api.updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(profileId, autorespCfgId, autoRespConfigCreateSchema, _options);
        return result.toPromise();
    }


}



import { ObservableBillingApi } from './ObservableAPI.ts';

import { BillingApiRequestFactory, BillingApiResponseProcessor} from "../apis/BillingApi.ts";
export class PromiseBillingApi {
    private api: ObservableBillingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingApiRequestFactory,
        responseProcessor?: BillingApiResponseProcessor
    ) {
        this.api = new ObservableBillingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve user balance details
     */
    public getUserBalance(_options?: Configuration): Promise<GetUserBalance200Response> {
        const result = this.api.getUserBalance(_options);
        return result.toPromise();
    }


}



import { ObservableBillingGroupsApi } from './ObservableAPI.ts';

import { BillingGroupsApiRequestFactory, BillingGroupsApiResponseProcessor} from "../apis/BillingGroupsApi.ts";
export class PromiseBillingGroupsApi {
    private api: ObservableBillingGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingGroupsApiRequestFactory,
        responseProcessor?: BillingGroupsApiResponseProcessor
    ) {
        this.api = new ObservableBillingGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a billing group
     * @param newBillingGroup New billing group object
     */
    public createBillingGroup(newBillingGroup: NewBillingGroup, _options?: Configuration): Promise<CreateBillingGroup200Response> {
        const result = this.api.createBillingGroup(newBillingGroup, _options);
        return result.toPromise();
    }

    /**
     * Delete a billing group
     * @param id The id of the billing group
     */
    public deleteBillingGroup(id: string, _options?: Configuration): Promise<CreateBillingGroup200Response> {
        const result = this.api.deleteBillingGroup(id, _options);
        return result.toPromise();
    }

    /**
     * List all billing groups
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listBillingGroups(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListBillingGroups200Response> {
        const result = this.api.listBillingGroups(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a billing group
     * @param id The id of the billing group
     */
    public retrieveBillingGroup(id: string, _options?: Configuration): Promise<CreateBillingGroup200Response> {
        const result = this.api.retrieveBillingGroup(id, _options);
        return result.toPromise();
    }

    /**
     * Update a billing group
     * @param id The id of the billing group
     * @param updateBillingGroup Update billing group object
     */
    public updateBillingGroup(id: string, updateBillingGroup: UpdateBillingGroup, _options?: Configuration): Promise<CreateBillingGroup200Response> {
        const result = this.api.updateBillingGroup(id, updateBillingGroup, _options);
        return result.toPromise();
    }


}



import { ObservableBrandsApi } from './ObservableAPI.ts';

import { BrandsApiRequestFactory, BrandsApiResponseProcessor} from "../apis/BrandsApi.ts";
export class PromiseBrandsApi {
    private api: ObservableBrandsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BrandsApiRequestFactory,
        responseProcessor?: BrandsApiResponseProcessor
    ) {
        this.api = new ObservableBrandsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is used to create a new brand. A brand is an entity created by The Campaign Registry (TCR) that represents an organization or a company. It is this entity that TCR created campaigns will be associated with. Each brand creation will entail an upfront, non-refundable $4 expense.
     * Create Brand
     * @param createBrand 
     */
    public createBrandBrandPost(createBrand: CreateBrand, _options?: Configuration): Promise<any> {
        const result = this.api.createBrandBrandPost(createBrand, _options);
        return result.toPromise();
    }

    /**
     * Delete Brand
     * @param brandId 
     */
    public deleteBrandBrandBrandIdDelete(brandId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteBrandBrandBrandIdDelete(brandId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a brand by `brandId`.
     * Get Brand
     * @param brandId 
     */
    public getBrandBrandBrandIdGet(brandId: string, _options?: Configuration): Promise<TelnyxBrand> {
        const result = this.api.getBrandBrandBrandIdGet(brandId, _options);
        return result.toPromise();
    }

    /**
     * Get feedback about a brand by ID. This endpoint can be used after creating or revetting a brand.  Possible values for `.category[].id`:  * `TAX_ID` - Data mismatch related to tax id and its associated properties. * `STOCK_SYMBOL` - Non public entity registered as a public for profit entity or   the stock information mismatch. * `GOVERNMENT_ENTITY` - Non government entity registered as a government entity.   Must be a U.S. government entity. * `NONPROFIT` - Not a recognized non-profit entity. No IRS tax-exempt status   found. * `OTHERS` - Details of the data misrepresentation if any.
     * Get Brand Feedback By Id
     * @param brandId 
     */
    public getBrandFeedbackByIdBrandFeedbackBrandIdGet(brandId: string, _options?: Configuration): Promise<BrandFeedback> {
        const result = this.api.getBrandFeedbackByIdBrandFeedbackBrandIdGet(brandId, _options);
        return result.toPromise();
    }

    /**
     * This operation can be used to import an external vetting record from a TCR-approved vetting provider. If the vetting provider confirms validity of the record, it will be saved with the brand and will be considered for future campaign qualification.
     * Import External Vetting Record
     * @param brandId 
     * @param importExternalVetting 
     */
    public importExternalVettingRecordBrandBrandIdExternalVettingPut(brandId: string, importExternalVetting: ImportExternalVetting, _options?: Configuration): Promise<ExternalVetting> {
        const result = this.api.importExternalVettingRecordBrandBrandIdExternalVettingPut(brandId, importExternalVetting, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is used to list all brands associated with your organization.
     * List Brands
     * @param page 
     * @param recordsPerPage number of records per page. maximum of 500
     * @param displayName 
     * @param entityType 
     * @param state 
     * @param country 
     */
    public listBrandsBrandGet(page?: number, recordsPerPage?: number, displayName?: string, entityType?: string, state?: string, country?: string, _options?: Configuration): Promise<BrandRecordSetCSP> {
        const result = this.api.listBrandsBrandGet(page, recordsPerPage, displayName, entityType, state, country, _options);
        return result.toPromise();
    }

    /**
     * Get list of valid external vetting record for a given brand
     * List External Vettings
     * @param brandId 
     */
    public listExternalVettingsBrandBrandIdExternalVettingGet(brandId: string, _options?: Configuration): Promise<any> {
        const result = this.api.listExternalVettingsBrandBrandIdExternalVettingGet(brandId, _options);
        return result.toPromise();
    }

    /**
     * Order new external vetting for a brand
     * Order Brand External Vetting
     * @param brandId 
     * @param orderExternalVetting 
     */
    public orderBrandExternalVettingBrandBrandIdExternalVettingPost(brandId: string, orderExternalVetting: OrderExternalVetting, _options?: Configuration): Promise<any> {
        const result = this.api.orderBrandExternalVettingBrandBrandIdExternalVettingPost(brandId, orderExternalVetting, _options);
        return result.toPromise();
    }

    /**
     * This operation allows you to revet the brand. However, revetting is allowed once after the successful brand registration and thereafter limited to once every 3 months.
     * Revet Brand
     * @param brandId 
     */
    public revetBrandBrandBrandIdRevetPut(brandId: string, _options?: Configuration): Promise<any> {
        const result = this.api.revetBrandBrandBrandIdRevetPut(brandId, _options);
        return result.toPromise();
    }

    /**
     * Update a brand\'s attributes by `brandId`.
     * Update Brand
     * @param brandId 
     * @param updateBrand 
     */
    public updateBrandBrandBrandIdPut(brandId: string, updateBrand: UpdateBrand, _options?: Configuration): Promise<TelnyxBrand> {
        const result = this.api.updateBrandBrandBrandIdPut(brandId, updateBrand, _options);
        return result.toPromise();
    }


}



import { ObservableBucketApi } from './ObservableAPI.ts';

import { BucketApiRequestFactory, BucketApiResponseProcessor} from "../apis/BucketApi.ts";
export class PromiseBucketApi {
    private api: ObservableBucketApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BucketApiRequestFactory,
        responseProcessor?: BucketApiResponseProcessor
    ) {
        this.api = new ObservableBucketApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a bucket.
     * CreateBucket
     * @param bucketName The name of the bucket.
     * @param createBucketRequest 
     */
    public createBucket(bucketName: string, createBucketRequest?: CreateBucketRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createBucket(bucketName, createBucketRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes a bucket. The bucket must be empty for it to be deleted.
     * DeleteBucket
     * @param bucketName The name of the bucket.
     */
    public deleteBucket(bucketName: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteBucket(bucketName, _options);
        return result.toPromise();
    }

    /**
     * Determines if a bucket exists and you have permission to access it.
     * HeadBucket
     * @param bucketName The name of the bucket.
     */
    public headBucket(bucketName: string, _options?: Configuration): Promise<void> {
        const result = this.api.headBucket(bucketName, _options);
        return result.toPromise();
    }

    /**
     * List all Buckets.
     * ListBuckets
     */
    public listBuckets(_options?: Configuration): Promise<ListBucketsResponse> {
        const result = this.api.listBuckets(_options);
        return result.toPromise();
    }


}



import { ObservableBulkCredentialsApi } from './ObservableAPI.ts';

import { BulkCredentialsApiRequestFactory, BulkCredentialsApiResponseProcessor} from "../apis/BulkCredentialsApi.ts";
export class PromiseBulkCredentialsApi {
    private api: ObservableBulkCredentialsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BulkCredentialsApiRequestFactory,
        responseProcessor?: BulkCredentialsApiResponseProcessor
    ) {
        this.api = new ObservableBulkCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Perform activate or deactivate action on all credentials filtered by the provided tag. Activate action will change the status to active, making it possible to connect calls with the credential. Deactivate action will change the status to inactive, making it impossible to connect calls with the credential.
     * Perform activate or deactivate action on all credentials filtered by the provided tag.
     * @param action Identifies the action to be taken. Activate will change the status to active. Deactivate will change the status to inactive.
     * @param filterTag Filter by tag, required by bulk operations.
     */
    public bulkCredentialAction(action: 'activate' | 'deactivate', filterTag: string, _options?: Configuration): Promise<BulkCredentialResponse> {
        const result = this.api.bulkCredentialAction(action, filterTag, _options);
        return result.toPromise();
    }

    /**
     * Creates several credentials in bulk.
     * Creates several credentials
     * @param bulkCredentialRequest Requested parameters to create credentials on bulk
     */
    public createBulkTelephonyCredential(bulkCredentialRequest: BulkCredentialRequest, _options?: Configuration): Promise<BulkCredentialResponse> {
        const result = this.api.createBulkTelephonyCredential(bulkCredentialRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete several credentials in bulk.
     * Delete several credentials
     * @param filterTag Filter by tag, required by bulk operations.
     */
    public deleteBulkTelephonyCredential(filterTag: string, _options?: Configuration): Promise<BulkCredentialResponse> {
        const result = this.api.deleteBulkTelephonyCredential(filterTag, _options);
        return result.toPromise();
    }

    /**
     * Update several credentials in bulk.
     * Update several credentials
     * @param filterTag Filter by tag, required by bulk operations.
     * @param bulkCredentialRequest Parameters to update credentials on bulk
     */
    public updateBulkTelephonyCredential(filterTag: string, bulkCredentialRequest: BulkCredentialRequest, _options?: Configuration): Promise<BulkCredentialResponse> {
        const result = this.api.updateBulkTelephonyCredential(filterTag, bulkCredentialRequest, _options);
        return result.toPromise();
    }


}



import { ObservableBulkPhoneNumberCampaignsApi } from './ObservableAPI.ts';

import { BulkPhoneNumberCampaignsApiRequestFactory, BulkPhoneNumberCampaignsApiResponseProcessor} from "../apis/BulkPhoneNumberCampaignsApi.ts";
export class PromiseBulkPhoneNumberCampaignsApi {
    private api: ObservableBulkPhoneNumberCampaignsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BulkPhoneNumberCampaignsApiRequestFactory,
        responseProcessor?: BulkPhoneNumberCampaignsApiResponseProcessor
    ) {
        this.api = new ObservableBulkPhoneNumberCampaignsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to link all phone numbers associated with a Messaging Profile to a campaign. **Please note:** if you want to assign phone numbers to a campaign that you did not create with Telnyx 10DLC services, this endpoint allows that provided that you\'ve shared the campaign with Telnyx. In this case, only provide the parameter, `tcrCampaignId`, and not `campaignId`. In all other cases (where the campaign you\'re assigning was created with Telnyx 10DLC services), only provide `campaignId`, not `tcrCampaignId`.
     * Assign Messaging Profile To Campaign
     * @param assignProfileToCampaignRequest 
     */
    public assignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePost(assignProfileToCampaignRequest: AssignProfileToCampaignRequest, _options?: Configuration): Promise<ResponseAssignMessagingProfileToCampaignPublicPhonenumberassignmentbyprofilePost> {
        const result = this.api.assignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePost(assignProfileToCampaignRequest, _options);
        return result.toPromise();
    }

    /**
     * Check the status of the task associated with assigning all phone numbers on a messaging profile to a campaign by `taskId`.
     * Get Assignment Task Status
     * @param taskId 
     */
    public getAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGet(taskId: string, _options?: Configuration): Promise<AssignmentTaskStatusResponse> {
        const result = this.api.getAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGet(taskId, _options);
        return result.toPromise();
    }

    /**
     * Check the status of the individual phone number/campaign assignments associated with the supplied `taskId`.
     * Get Phone Number Status
     * @param taskId 
     * @param recordsPerPage 
     * @param page 
     */
    public getPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet(taskId: string, recordsPerPage?: any, page?: any, _options?: Configuration): Promise<PhoneNumberStatusResponsePaginated> {
        const result = this.api.getPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet(taskId, recordsPerPage, page, _options);
        return result.toPromise();
    }


}



import { ObservableBulkSoleProprietorCreationApi } from './ObservableAPI.ts';

import { BulkSoleProprietorCreationApiRequestFactory, BulkSoleProprietorCreationApiResponseProcessor} from "../apis/BulkSoleProprietorCreationApi.ts";
export class PromiseBulkSoleProprietorCreationApi {
    private api: ObservableBulkSoleProprietorCreationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BulkSoleProprietorCreationApiRequestFactory,
        responseProcessor?: BulkSoleProprietorCreationApiResponseProcessor
    ) {
        this.api = new ObservableBulkSoleProprietorCreationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Submit sets of data about brands, campaigns, and phone numbers to create and assign. Please note that sub-usecases, phone numbers, and sample messages are each limited to 5 per campaign.
     * Bulk Creation
     * @param bulkCreationRequest 
     */
    public bulkCreationBulkCreationPost(bulkCreationRequest: BulkCreationRequest, _options?: Configuration): Promise<BulkCreationResponse> {
        const result = this.api.bulkCreationBulkCreationPost(bulkCreationRequest, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all tasks ever submitted by your organization.
     * Get All Tasks
     * @param recordsPerPage 
     * @param page 
     */
    public getAllTasksBulkCreationGet(recordsPerPage?: any, page?: any, _options?: Configuration): Promise<BulkCreationTasksResponse> {
        const result = this.api.getAllTasksBulkCreationGet(recordsPerPage, page, _options);
        return result.toPromise();
    }

    /**
     * Get detailed information about the status of a bulk creation task.
     * Get Detailed Task Status
     * @param taskId 
     * @param recordsPerPage 
     * @param page 
     */
    public getDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet(taskId: string, recordsPerPage?: any, page?: any, _options?: Configuration): Promise<BulkCreationDetailedStatusResponse> {
        const result = this.api.getDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet(taskId, recordsPerPage, page, _options);
        return result.toPromise();
    }

    /**
     * Get a simple overview of the status of a bulk creation task.
     * Get Task Status
     * @param taskId 
     */
    public getTaskStatusBulkCreationTaskIdGet(taskId: string, _options?: Configuration): Promise<BulkCreationStatusResponse> {
        const result = this.api.getTaskStatusBulkCreationTaskIdGet(taskId, _options);
        return result.toPromise();
    }


}



import { ObservableBusinessIdentityApi } from './ObservableAPI.ts';

import { BusinessIdentityApiRequestFactory, BusinessIdentityApiResponseProcessor} from "../apis/BusinessIdentityApi.ts";
export class PromiseBusinessIdentityApi {
    private api: ObservableBusinessIdentityApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BusinessIdentityApiRequestFactory,
        responseProcessor?: BusinessIdentityApiResponseProcessor
    ) {
        this.api = new ObservableBusinessIdentityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Business Identity.
     * Creates a Business Identity
     * @param createOrUpdateBusinessIdentityRequest 
     */
    public createBusinessIdentity(createOrUpdateBusinessIdentityRequest: CreateOrUpdateBusinessIdentityRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createBusinessIdentity(createOrUpdateBusinessIdentityRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes the Business Identity. This action will fail if any verification requests have been made for any associated Display Profile. Please contact support@telnyx.com in case you want to delete a Business Identity in that situation.
     * Delete a Business Identity
     * @param id Identifies the Business Identity
     */
    public deleteBusinessIdentity(id: string, _options?: Configuration): Promise<ShowBusinessIdentityResponse> {
        const result = this.api.deleteBusinessIdentity(id, _options);
        return result.toPromise();
    }

    /**
     * Display the Business Identity
     * @param id Identifies the Business Identity
     */
    public displayBusinessIdentity(id: string, _options?: Configuration): Promise<ShowBusinessIdentityResponse> {
        const result = this.api.displayBusinessIdentity(id, _options);
        return result.toPromise();
    }

    /**
     * Lists the Business Identities owned by the current user/organization
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listBusinessIdentities(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListBusinessIdentitiesResponse> {
        const result = this.api.listBusinessIdentities(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Update an existing Business Identity.
     * Update a Business Identity
     * @param id Identifies the Business Identity
     * @param createOrUpdateBusinessIdentityRequest 
     */
    public updateBusinessIdentity(id: string, createOrUpdateBusinessIdentityRequest: CreateOrUpdateBusinessIdentityRequest, _options?: Configuration): Promise<void> {
        const result = this.api.updateBusinessIdentity(id, createOrUpdateBusinessIdentityRequest, _options);
        return result.toPromise();
    }


}



import { ObservableCDRUsageReportsApi } from './ObservableAPI.ts';

import { CDRUsageReportsApiRequestFactory, CDRUsageReportsApiResponseProcessor} from "../apis/CDRUsageReportsApi.ts";
export class PromiseCDRUsageReportsApi {
    private api: ObservableCDRUsageReportsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CDRUsageReportsApiRequestFactory,
        responseProcessor?: CDRUsageReportsApiResponseProcessor
    ) {
        this.api = new ObservableCDRUsageReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate and fetch voice usage report synchronously. This endpoint will both generate and fetch the voice report over a specified time period. No polling is necessary but the response may take up to a couple of minutes. 
     * @param aggregationType 
     * @param productBreakdown 
     * @param startDate 
     * @param endDate 
     * @param connections 
     */
    public getUsageReportSync(aggregationType: 'NO_AGGREGATION' | 'CONNECTION' | 'TAG' | 'BILLING_GROUP', productBreakdown: 'NO_BREAKDOWN' | 'DID_VS_TOLL_FREE' | 'COUNTRY' | 'DID_VS_TOLL_FREE_PER_COUNTRY', startDate?: Date, endDate?: Date, connections?: Array<number>, _options?: Configuration): Promise<CdrGetSyncUsageReportResponse> {
        const result = this.api.getUsageReportSync(aggregationType, productBreakdown, startDate, endDate, connections, _options);
        return result.toPromise();
    }


}



import { ObservableCSVDownloadsApi } from './ObservableAPI.ts';

import { CSVDownloadsApiRequestFactory, CSVDownloadsApiResponseProcessor} from "../apis/CSVDownloadsApi.ts";
export class PromiseCSVDownloadsApi {
    private api: ObservableCSVDownloadsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CSVDownloadsApiRequestFactory,
        responseProcessor?: CSVDownloadsApiResponseProcessor
    ) {
        this.api = new ObservableCSVDownloadsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a CSV download
     */
    public createCsvDownload(_options?: Configuration): Promise<CSVDownloadResponse> {
        const result = this.api.createCsvDownload(_options);
        return result.toPromise();
    }

    /**
     * List CSV downloads
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listCsvDownloads(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListCSVDownloadsResponse> {
        const result = this.api.listCsvDownloads(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a CSV download
     * @param id Identifies the CSV download.
     */
    public retrieveCsvDownload(id: string, _options?: Configuration): Promise<CSVDownloadResponse> {
        const result = this.api.retrieveCsvDownload(id, _options);
        return result.toPromise();
    }


}



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



import { ObservableCallControlApplicationsApi } from './ObservableAPI.ts';

import { CallControlApplicationsApiRequestFactory, CallControlApplicationsApiResponseProcessor} from "../apis/CallControlApplicationsApi.ts";
export class PromiseCallControlApplicationsApi {
    private api: ObservableCallControlApplicationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CallControlApplicationsApiRequestFactory,
        responseProcessor?: CallControlApplicationsApiResponseProcessor
    ) {
        this.api = new ObservableCallControlApplicationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a call control application.
     * Create a call control application
     * @param createCallControlApplicationRequest Create call control application request.
     */
    public createCallControlApplication(createCallControlApplicationRequest: CreateCallControlApplicationRequest, _options?: Configuration): Promise<CallControlApplicationResponse> {
        const result = this.api.createCallControlApplication(createCallControlApplicationRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes a call control application.
     * Delete a call control application
     * @param id Identifies the resource.
     */
    public deleteCallControlApplication(id: string, _options?: Configuration): Promise<CallControlApplicationResponse> {
        const result = this.api.deleteCallControlApplication(id, _options);
        return result.toPromise();
    }

    /**
     * Return a list of call control applications.
     * List call control applications
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterApplicationNameContains If present, applications with &lt;code&gt;application_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @param filterOutboundVoiceProfileId Identifies the associated outbound voice profile.
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     */
    public listCallControlApplications(pageNumber?: number, pageSize?: number, filterApplicationNameContains?: string, filterOutboundVoiceProfileId?: string, sort?: 'created_at' | 'connection_name' | 'active', _options?: Configuration): Promise<ListCallControlApplicationsResponse> {
        const result = this.api.listCallControlApplications(pageNumber, pageSize, filterApplicationNameContains, filterOutboundVoiceProfileId, sort, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing call control application.
     * Retrieve a call control application
     * @param id Identifies the resource.
     */
    public retrieveCallControlApplication(id: string, _options?: Configuration): Promise<CallControlApplicationResponse> {
        const result = this.api.retrieveCallControlApplication(id, _options);
        return result.toPromise();
    }

    /**
     * Updates settings of an existing call control application.
     * Update a call control application
     * @param id Identifies the resource.
     * @param updateCallControlApplicationRequest Update call control application request.
     */
    public updateCallControlApplication(id: string, updateCallControlApplicationRequest: UpdateCallControlApplicationRequest, _options?: Configuration): Promise<CallControlApplicationResponse> {
        const result = this.api.updateCallControlApplication(id, updateCallControlApplicationRequest, _options);
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
     * Lists all active calls for given connection. Acceptable connections are either SIP connections with webhook_url or xml_request_url, call control or texml. Returned results are cursor paginated. 
     * List all active calls for given connection
     * @param connectionId Telnyx connection id
     * @param pageLimit Limit of records per single page
     * @param pageAfter Opaque identifier of next page
     * @param pageBefore Opaque identifier of previous page
     */
    public listConnectionActiveCalls(connectionId: string, pageLimit?: number, pageAfter?: string, pageBefore?: string, _options?: Configuration): Promise<ActiveCallsResponse> {
        const result = this.api.listConnectionActiveCalls(connectionId, pageLimit, pageAfter, pageBefore, _options);
        return result.toPromise();
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
     * Creates custom storage credentials configuration.
     * Create custom storage credentials
     * @param connectionId Telnyx connection id
     * @param customStorageConfiguration Creates new credentials resource for given connection_id.
     */
    public createCustomStorageCredentials(connectionId: string, customStorageConfiguration: CustomStorageConfiguration, _options?: Configuration): Promise<CredentialsResponse> {
        const result = this.api.createCustomStorageCredentials(connectionId, customStorageConfiguration, _options);
        return result.toPromise();
    }

    /**
     * Deletes a stored custom credentials configuration.
     * Delete stored credentials
     * @param connectionId Telnyx connection id
     */
    public deleteCustomStorageCredentials(connectionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCustomStorageCredentials(connectionId, _options);
        return result.toPromise();
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
     * Returns the information about custom storage credentials.
     * Retrieve stored credentials
     * @param connectionId Telnyx connection id
     */
    public getCustomStorageCredentials(connectionId: string, _options?: Configuration): Promise<CredentialsResponse> {
        const result = this.api.getCustomStorageCredentials(connectionId, _options);
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

    /**
     * Updates a stored custom credentials configuration.
     * Update stored credentials
     * @param connectionId Telnyx connection id
     * @param customStorageConfiguration Creates new credentials resource for given connection_id.
     */
    public updateCustomStorageCredentials(connectionId: string, customStorageConfiguration: CustomStorageConfiguration, _options?: Configuration): Promise<CredentialsResponse> {
        const result = this.api.updateCustomStorageCredentials(connectionId, customStorageConfiguration, _options);
        return result.toPromise();
    }


}



import { ObservableCampaignApi } from './ObservableAPI.ts';

import { CampaignApiRequestFactory, CampaignApiResponseProcessor} from "../apis/CampaignApi.ts";
export class PromiseCampaignApi {
    private api: ObservableCampaignApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CampaignApiRequestFactory,
        responseProcessor?: CampaignApiResponseProcessor
    ) {
        this.api = new ObservableCampaignApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Manually accept a campaign shared with Telnyx
     * Accept Shared Campaign
     * @param campaignId TCR\&#39;s ID for the campaign to import
     */
    public acceptSharedCampaignCampaignAcceptSharingCampaignIdPost(campaignId: string, _options?: Configuration): Promise<any> {
        const result = this.api.acceptSharedCampaignCampaignAcceptSharingCampaignIdPost(campaignId, _options);
        return result.toPromise();
    }

    /**
     * Terminate a campaign. Note that once deactivated, a campaign cannot be restored.
     * Deactivate My Campaign
     * @param campaignId 
     */
    public deactivateMyCampaignCampaignCampaignIdDelete(campaignId: string, _options?: Configuration): Promise<CampaignDeletionResponse> {
        const result = this.api.deactivateMyCampaignCampaignCampaignIdDelete(campaignId, _options);
        return result.toPromise();
    }

    /**
     * Get Campaign Cost
     * @param usecase 
     */
    public getCampaignCostCampaignUsecaseCostGet(usecase: string, _options?: Configuration): Promise<CampaignCost> {
        const result = this.api.getCampaignCostCampaignUsecaseCostGet(usecase, _options);
        return result.toPromise();
    }

    /**
     * Get the campaign metadata for each MNO it was submitted to
     * Get Campaign Mno Metadata
     * @param campaignId ID of the campaign in question
     */
    public getCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet(campaignId: string, _options?: Configuration): Promise<any> {
        const result = this.api.getCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet(campaignId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve campaign details by `campaignId`.
     * Get My Campaign
     * @param campaignId 
     */
    public getMyCampaignCampaignCampaignIdGet(campaignId: string, _options?: Configuration): Promise<CampaignCSP> {
        const result = this.api.getMyCampaignCampaignCampaignIdGet(campaignId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve campaign\'s operation status at MNO level.
     * Get My Campaign Operation Status
     * @param campaignId 
     */
    public getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet(campaignId: string, _options?: Configuration): Promise<any> {
        const result = this.api.getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet(campaignId, _options);
        return result.toPromise();
    }

    /**
     * Get My Osr Campaign Attributes
     * @param campaignId 
     */
    public getMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGet(campaignId: string, _options?: Configuration): Promise<any> {
        const result = this.api.getMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGet(campaignId, _options);
        return result.toPromise();
    }

    /**
     * Get Sharing Status
     * @param campaignId ID of the campaign in question
     */
    public getSharingStatusCampaignCampaignIdSharingGet(campaignId: string, _options?: Configuration): Promise<CampaignSharingChain> {
        const result = this.api.getSharingStatusCampaignCampaignIdSharingGet(campaignId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of campaigns associated with a supplied `brandId`.
     * List Campaigns
     * @param brandId 
     * @param page The 1-indexed page number to get. The default value is &#x60;1&#x60;.
     * @param recordsPerPage The amount of records per page, limited to between 1 and 500 inclusive. The default value is &#x60;10&#x60;.
     */
    public listCampaignsCampaignGet(brandId: string, page?: number, recordsPerPage?: number, _options?: Configuration): Promise<CampaignRecordSetCSP> {
        const result = this.api.listCampaignsCampaignGet(brandId, page, recordsPerPage, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to see whether or not the supplied brand is suitable for your desired campaign use case.
     * Qualify By Usecase
     * @param usecase 
     * @param brandId 
     */
    public qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet(usecase: string, brandId: string, _options?: Configuration): Promise<UsecaseMetadata> {
        const result = this.api.qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet(usecase, brandId, _options);
        return result.toPromise();
    }

    /**
     * Before creating a campaign, use the [Qualify By Usecase endpoint](https://developers.telnyx.com/docs/api/v2/10dlc/Campaign#qualify_by_usecase_campaignBuilder_brand__brand_id__usecase__usecase__get) to ensure that the brand you want to assign a new campaign to is qualified for the desired use case of that campaign. **Please note:** After campaign creation, you\'ll only be able to edit the campaign\'s sample messages. Creating a campaign will entail an upfront, non-refundable three month\'s cost that will depend on the campaign\'s use case ([see 10DLC Costs section for details](https://developers.telnyx.com/docs/api/v2/10dlc)).
     * Submit Campaign
     * @param campaignRequest 
     */
    public submitCampaignCampaignBuilderPost(campaignRequest: CampaignRequest, _options?: Configuration): Promise<any | CampaignCSP> {
        const result = this.api.submitCampaignCampaignBuilderPost(campaignRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a campaign\'s properties by `campaignId`. **Please note:** only sample messages are editable.
     * Update My Campaign
     * @param campaignId 
     * @param updateCampaign 
     */
    public updateMyCampaignCampaignCampaignIdPut(campaignId: string, updateCampaign: UpdateCampaign, _options?: Configuration): Promise<Campaign> {
        const result = this.api.updateMyCampaignCampaignCampaignIdPut(campaignId, updateCampaign, _options);
        return result.toPromise();
    }


}



import { ObservableChannelZonesApi } from './ObservableAPI.ts';

import { ChannelZonesApiRequestFactory, ChannelZonesApiResponseProcessor} from "../apis/ChannelZonesApi.ts";
export class PromiseChannelZonesApi {
    private api: ObservableChannelZonesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ChannelZonesApiRequestFactory,
        responseProcessor?: ChannelZonesApiResponseProcessor
    ) {
        this.api = new ObservableChannelZonesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * You should own the phone number being assigned to the channel zone. Remember that you should reserve channels in this channel zone, otherwise you won\'t be able to receive incoming calls.
     * Assign a phone number to a channel zone
     * @param channelZoneId Channel zone identifier
     * @param body Phone number to assign to the channel zone. The phone number should be in E.164 format.
     */
    public assignPhoneNumber(channelZoneId: string, body: AssignPhoneNumberRequest, _options?: Configuration): Promise<GcbPhoneNumber> {
        const result = this.api.assignPhoneNumber(channelZoneId, body, _options);
        return result.toPromise();
    }

    /**
     * Get a specific channel zone
     * Get a specific channel zone
     * @param channelZoneId Channel zone identifier
     */
    public getChannelZone(channelZoneId: string, _options?: Configuration): Promise<GcbChannelZone> {
        const result = this.api.getChannelZone(channelZoneId, _options);
        return result.toPromise();
    }

    /**
     * List of channel zones with their countries
     * Get list of channel zones
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public getChannelZones(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<GetChannelZones200Response> {
        const result = this.api.getChannelZones(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the assigned phone numbers in a channel zone. Phone numbers assigned to a channel zone can receive concurrent calls up to the quantity reserved in that channel zone. Additional concurrent calls are rejected with a busy signal.
     * Get the list of phone numbers assigned to a channel zone
     * @param channelZoneId Channel zone identifier
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public getPhoneNumbers(channelZoneId: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<GetPhoneNumbers200Response> {
        const result = this.api.getPhoneNumbers(channelZoneId, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Change the amount of reserved channels at a given channel zone
     * Patch a channel zone
     * @param channelZoneId Channel zone identifier
     * @param body Quantity of reserved channels
     */
    public patchGroup(channelZoneId: string, body: PatchGroupRequest, _options?: Configuration): Promise<GcbChannelZone> {
        const result = this.api.patchGroup(channelZoneId, body, _options);
        return result.toPromise();
    }

    /**
     * Unassign a phone number from a channel zone
     * @param channelZoneId Channel zone identifier
     * @param phoneNumber The phone number to be looked up
     */
    public unassignPhoneNumber(channelZoneId: string, phoneNumber: string, _options?: Configuration): Promise<void> {
        const result = this.api.unassignPhoneNumber(channelZoneId, phoneNumber, _options);
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



import { ObservableConnectionsApi } from './ObservableAPI.ts';

import { ConnectionsApiRequestFactory, ConnectionsApiResponseProcessor} from "../apis/ConnectionsApi.ts";
export class PromiseConnectionsApi {
    private api: ObservableConnectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConnectionsApiRequestFactory,
        responseProcessor?: ConnectionsApiResponseProcessor
    ) {
        this.api = new ObservableConnectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of your connections irrespective of type.
     * List connections
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterConnectionNameContains If present, connections with &lt;code&gt;connection_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @param filterOutboundVoiceProfileId Identifies the associated outbound voice profile.
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     */
    public listConnections(pageNumber?: number, pageSize?: number, filterConnectionNameContains?: string, filterOutboundVoiceProfileId?: string, sort?: 'created_at' | 'connection_name' | 'active', _options?: Configuration): Promise<ListConnectionsResponse> {
        const result = this.api.listConnections(pageNumber, pageSize, filterConnectionNameContains, filterOutboundVoiceProfileId, sort, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the high-level details of an existing connection. To retrieve specific authentication information, use the endpoint for the specific connection type.
     * Retrieve a connection
     * @param id IP Connection ID
     */
    public retrieveConnection(id: string, _options?: Configuration): Promise<ConnectionResponse> {
        const result = this.api.retrieveConnection(id, _options);
        return result.toPromise();
    }


}



import { ObservableCredentialConnectionsApi } from './ObservableAPI.ts';

import { CredentialConnectionsApiRequestFactory, CredentialConnectionsApiResponseProcessor} from "../apis/CredentialConnectionsApi.ts";
export class PromiseCredentialConnectionsApi {
    private api: ObservableCredentialConnectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CredentialConnectionsApiRequestFactory,
        responseProcessor?: CredentialConnectionsApiResponseProcessor
    ) {
        this.api = new ObservableCredentialConnectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a credential connection.
     * Create a credential connection
     * @param createCredentialConnectionRequest Parameters that can be defined during credential connection creation
     */
    public createCredentialConnection(createCredentialConnectionRequest: CreateCredentialConnectionRequest, _options?: Configuration): Promise<CredentialConnectionResponse> {
        const result = this.api.createCredentialConnection(createCredentialConnectionRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes an existing credential connection.
     * Delete a credential connection
     * @param id Identifies the resource.
     */
    public deleteCredentialConnection(id: string, _options?: Configuration): Promise<CredentialConnectionResponse> {
        const result = this.api.deleteCredentialConnection(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your credential connections.
     * List credential connections
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterConnectionNameContains If present, connections with &lt;code&gt;connection_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @param filterOutboundOutboundVoiceProfileId Identifies the associated outbound voice profile.
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     */
    public listCredentialConnections(pageNumber?: number, pageSize?: number, filterConnectionNameContains?: string, filterOutboundOutboundVoiceProfileId?: string, sort?: 'created_at' | 'connection_name' | 'active', _options?: Configuration): Promise<ListCredentialConnectionsResponse> {
        const result = this.api.listCredentialConnections(pageNumber, pageSize, filterConnectionNameContains, filterOutboundOutboundVoiceProfileId, sort, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing credential connection.
     * Retrieve a credential connection
     * @param id Identifies the resource.
     */
    public retrieveCredentialConnection(id: string, _options?: Configuration): Promise<CredentialConnectionResponse> {
        const result = this.api.retrieveCredentialConnection(id, _options);
        return result.toPromise();
    }

    /**
     * Updates settings of an existing credential connection.
     * Update a credential connection
     * @param id Identifies the resource.
     * @param updateCredentialConnectionRequest Parameters that can be updated in a credential connection
     */
    public updateCredentialConnection(id: string, updateCredentialConnectionRequest: UpdateCredentialConnectionRequest, _options?: Configuration): Promise<CredentialConnectionResponse> {
        const result = this.api.updateCredentialConnection(id, updateCredentialConnectionRequest, _options);
        return result.toPromise();
    }


}



import { ObservableCredentialsApi } from './ObservableAPI.ts';

import { CredentialsApiRequestFactory, CredentialsApiResponseProcessor} from "../apis/CredentialsApi.ts";
export class PromiseCredentialsApi {
    private api: ObservableCredentialsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CredentialsApiRequestFactory,
        responseProcessor?: CredentialsApiResponseProcessor
    ) {
        this.api = new ObservableCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a credential.
     * Create a credential
     * @param telephonyCredentialCreateRequest Parameters that can be defined during credential creation
     */
    public createTelephonyCredential(telephonyCredentialCreateRequest: TelephonyCredentialCreateRequest, _options?: Configuration): Promise<TelephonyCredentialResponse> {
        const result = this.api.createTelephonyCredential(telephonyCredentialCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete an existing credential.
     * Delete a credential
     * @param id Identifies the resource.
     */
    public deleteTelephonyCredential(id: string, _options?: Configuration): Promise<TelephonyCredentialResponse> {
        const result = this.api.deleteTelephonyCredential(id, _options);
        return result.toPromise();
    }

    /**
     * List all On-demand Credentials.
     * List all credentials
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterTag Filter by tag
     * @param filterName Filter by name
     * @param filterStatus Filter by status
     * @param filterResourceId Filter by resource_id
     * @param filterSipUsername Filter by sip_username
     */
    public findTelephonyCredentials(pageNumber?: number, pageSize?: number, filterTag?: string, filterName?: string, filterStatus?: string, filterResourceId?: string, filterSipUsername?: string, _options?: Configuration): Promise<GetAllTelephonyCredentialResponse> {
        const result = this.api.findTelephonyCredentials(pageNumber, pageSize, filterTag, filterName, filterStatus, filterResourceId, filterSipUsername, _options);
        return result.toPromise();
    }

    /**
     * Get the details of an existing On-demand Credential.
     * Get a credential
     * @param id Identifies the resource.
     */
    public getTelephonyCredential(id: string, _options?: Configuration): Promise<TelephonyCredentialResponse> {
        const result = this.api.getTelephonyCredential(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of tags used on Credentials
     * List all tags
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listTags(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListTagsResponse> {
        const result = this.api.listTags(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Perform activate or deactivate action on provided Credential. Activate action will change the status to active, making it possible to connect calls with the credential. Deactivate action will change the status to inactive, making it impossible to connect calls with the credential.
     * Perform activate or deactivate action on provided Credential
     * @param id Identifies the resource.
     * @param action Identifies the action to be taken.
     */
    public telephonyCredentialAction(id: string, action: 'activate' | 'deactivate', _options?: Configuration): Promise<TelephonyCredentialResponse> {
        const result = this.api.telephonyCredentialAction(id, action, _options);
        return result.toPromise();
    }

    /**
     * Update an existing credential.
     * Update a credential
     * @param id Identifies the resource.
     * @param telephonyCredentialUpdateRequest Parameters that can be updated in a credential
     */
    public updateTelephonyCredential(id: string, telephonyCredentialUpdateRequest: TelephonyCredentialUpdateRequest, _options?: Configuration): Promise<TelephonyCredentialResponse> {
        const result = this.api.updateTelephonyCredential(id, telephonyCredentialUpdateRequest, _options);
        return result.toPromise();
    }


}



import { ObservableCustomerServiceRecordApi } from './ObservableAPI.ts';

import { CustomerServiceRecordApiRequestFactory, CustomerServiceRecordApiResponseProcessor} from "../apis/CustomerServiceRecordApi.ts";
export class PromiseCustomerServiceRecordApi {
    private api: ObservableCustomerServiceRecordApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomerServiceRecordApiRequestFactory,
        responseProcessor?: CustomerServiceRecordApiResponseProcessor
    ) {
        this.api = new ObservableCustomerServiceRecordApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new customer service record for the provided phone number.
     * Create a customer service record
     * @param UNKNOWN_BASE_TYPE 
     */
    public createCustomerServiceRecord(UNKNOWN_BASE_TYPE: UNKNOWN_BASE_TYPE, _options?: Configuration): Promise<any> {
        const result = this.api.createCustomerServiceRecord(UNKNOWN_BASE_TYPE, _options);
        return result.toPromise();
    }

    /**
     * Get a specific customer service record.
     * Get a customer service record
     * @param customerServiceRecordId The ID of the customer service record
     */
    public getCustomerServiceRecord(customerServiceRecordId: string, _options?: Configuration): Promise<GetCustomerServiceRecord201Response> {
        const result = this.api.getCustomerServiceRecord(customerServiceRecordId, _options);
        return result.toPromise();
    }

    /**
     * Verify the coverage for a list of phone numbers.
     * Verify CSR phone number coverage
     * @param verifyPhoneNumberCoverageRequest 
     */
    public verifyPhoneNumberCoverage(verifyPhoneNumberCoverageRequest: VerifyPhoneNumberCoverageRequest, _options?: Configuration): Promise<VerifyPhoneNumberCoverage201Response> {
        const result = this.api.verifyPhoneNumberCoverage(verifyPhoneNumberCoverageRequest, _options);
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



import { ObservableDefaultApi } from './ObservableAPI.ts';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi.ts";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create new Access FQDN
     * @param customerFacingFQDNsPost 
     */
    public createAccessFqdn(customerFacingFQDNsPost: CustomerFacingFQDNsPost, _options?: Configuration): Promise<CustomerFacingFQDNsResponseSchema> {
        const result = this.api.createAccessFqdn(customerFacingFQDNsPost, _options);
        return result.toPromise();
    }

    /**
     * Create a new FQDN object.
     * Create an FQDN
     * @param createFqdnRequest 
     */
    public createFqdn(createFqdnRequest?: CreateFqdnRequest, _options?: Configuration): Promise<FQDNResponse> {
        const result = this.api.createFqdn(createFqdnRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete Access FQDN
     * @param fqdnId 
     */
    public deleteAccessFqdn(fqdnId: string, _options?: Configuration): Promise<CustomerFacingFQDNsResponseSchema> {
        const result = this.api.deleteAccessFqdn(fqdnId, _options);
        return result.toPromise();
    }

    /**
     * Delete an FQDN.
     * Delete an FQDN
     * @param id Identifies the resource.
     */
    public deleteFqdn(id: string, _options?: Configuration): Promise<FQDNResponse> {
        const result = this.api.deleteFqdn(id, _options);
        return result.toPromise();
    }

    /**
     * List an Access FQDN
     * @param fqdnId 
     */
    public listAccessFqdnById(fqdnId: string, _options?: Configuration): Promise<CustomerFacingFQDNsResponseSchema> {
        const result = this.api.listAccessFqdnById(fqdnId, _options);
        return result.toPromise();
    }

    /**
     * List all Access FQDNs
     * @param pageNumber 
     * @param pageSize 
     */
    public listAllAccessFqdns(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<CustomerFacingFQDNsListResponse> {
        const result = this.api.listAllAccessFqdns(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * List Access FQDN\'s IP Addresses
     * @param fqdnId 
     * @param pageNumber 
     * @param pageSize 
     */
    public listAllIpsByFqdn(fqdnId: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<CustomerFacingFQDNsGetIPResponse> {
        const result = this.api.listAllIpsByFqdn(fqdnId, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Get all FQDNs belonging to the user that match the given filters.
     * List FQDNs
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterConnectionId ID of the FQDN connection to which the FQDN belongs.
     * @param filterFqdn FQDN represented by the resource.
     * @param filterPort Port to use when connecting to the FQDN.
     * @param filterDnsRecordType DNS record type used by the FQDN.
     */
    public listFqdns(pageNumber?: number, pageSize?: number, filterConnectionId?: string, filterFqdn?: string, filterPort?: number, filterDnsRecordType?: string, _options?: Configuration): Promise<ListFQDNsResponse> {
        const result = this.api.listFqdns(pageNumber, pageSize, filterConnectionId, filterFqdn, filterPort, filterDnsRecordType, _options);
        return result.toPromise();
    }

    /**
     * Return the details regarding a specific FQDN.
     * Retrieve an FQDN
     * @param id Identifies the resource.
     */
    public retrieveFqdn(id: string, _options?: Configuration): Promise<FQDNResponse> {
        const result = this.api.retrieveFqdn(id, _options);
        return result.toPromise();
    }

    /**
     * Update Access FQDN
     * @param fqdnId 
     * @param customerFacingFQDNsPatch 
     */
    public updateAccessFqdn(fqdnId: string, customerFacingFQDNsPatch: CustomerFacingFQDNsPatch, _options?: Configuration): Promise<CustomerFacingFQDNsResponseSchema> {
        const result = this.api.updateAccessFqdn(fqdnId, customerFacingFQDNsPatch, _options);
        return result.toPromise();
    }

    /**
     * Update the details of a specific FQDN.
     * Update an FQDN
     * @param id Identifies the resource.
     * @param updateFqdnRequest 
     */
    public updateFqdn(id: string, updateFqdnRequest?: UpdateFqdnRequest, _options?: Configuration): Promise<FQDNResponse> {
        const result = this.api.updateFqdn(id, updateFqdnRequest, _options);
        return result.toPromise();
    }


}



import { ObservableDetailRecordsApi } from './ObservableAPI.ts';

import { DetailRecordsApiRequestFactory, DetailRecordsApiResponseProcessor} from "../apis/DetailRecordsApi.ts";
export class PromiseDetailRecordsApi {
    private api: ObservableDetailRecordsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DetailRecordsApiRequestFactory,
        responseProcessor?: DetailRecordsApiResponseProcessor
    ) {
        this.api = new ObservableDetailRecordsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search for any detail record across the Telnyx Platform. Examples and additional information found [here](/docs/v2/debugging/detail-record-search).
     * Search detail records
     * @param filterRecordType Filter by the given record type.
     * @param filterDateRange Filter by the given user-friendly date range. You can specify one of the following enum values, or a dynamic one using this format: last_N_days.
     * @param filter Filter records on a given record attribute and value. &lt;br/&gt;Example: filter[status]&#x3D;delivered
     * @param pageNumber Page number
     * @param pageSize Page size
     * @param sort Specifies the sort order for results. &lt;br/&gt;Example: sort&#x3D;-created_at
     */
    public detailRecordsSearch(filterRecordType: 'amd' | 'conference' | 'conference-participant' | 'media_storage' | 'messaging' | 'verify' | 'whatsapp' | 'whatsapp-conversation' | 'wireless', filterDateRange?: 'yesterday' | 'today' | 'tomorrow' | 'last_week' | 'this_week' | 'next_week' | 'last_month' | 'this_month' | 'next_month', filter?: { [key: string]: any; }, pageNumber?: number, pageSize?: number, sort?: Array<string>, _options?: Configuration): Promise<DetailRecordsSearchResponse> {
        const result = this.api.detailRecordsSearch(filterRecordType, filterDateRange, filter, pageNumber, pageSize, sort, _options);
        return result.toPromise();
    }


}



import { ObservableDialogflowIntegrationApi } from './ObservableAPI.ts';

import { DialogflowIntegrationApiRequestFactory, DialogflowIntegrationApiResponseProcessor} from "../apis/DialogflowIntegrationApi.ts";
export class PromiseDialogflowIntegrationApi {
    private api: ObservableDialogflowIntegrationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DialogflowIntegrationApiRequestFactory,
        responseProcessor?: DialogflowIntegrationApiResponseProcessor
    ) {
        this.api = new ObservableDialogflowIntegrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Save Dialogflow Credentiails to Telnyx, so it can be used with other Telnyx services.
     * Create a Dialogflow Connection
     * @param connectionId Telnyx connection id
     * @param dialogflowConnection The params expected to create/update a Dialogflow Connection for given connection_id.
     */
    public createDialogflowConnection(connectionId: string, dialogflowConnection: DialogflowConnection, _options?: Configuration): Promise<DialogflowConnectionResponse> {
        const result = this.api.createDialogflowConnection(connectionId, dialogflowConnection, _options);
        return result.toPromise();
    }

    /**
     * Deletes a stored Dialogflow Connection.
     * Delete stored Dialogflow Connection
     * @param connectionId Telnyx connection id
     */
    public deleteDialogflowConnection(connectionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDialogflowConnection(connectionId, _options);
        return result.toPromise();
    }

    /**
     * Return details of the Dialogflow connection associated with the given CallControl connection.
     * Retrieve stored Dialogflow Connection
     * @param connectionId Telnyx connection id
     */
    public getDialogflowConnection(connectionId: string, _options?: Configuration): Promise<DialogflowConnectionResponse> {
        const result = this.api.getDialogflowConnection(connectionId, _options);
        return result.toPromise();
    }

    /**
     * Updates a stored Dialogflow Connection.
     * Update stored Dialogflow Connection
     * @param connectionId Telnyx connection id
     * @param dialogflowConnection The params expected to create/update a Dialogflow Connection for given connection_id.
     */
    public updateDialogflowConnection(connectionId: string, dialogflowConnection: DialogflowConnection, _options?: Configuration): Promise<DialogflowConnectionResponse> {
        const result = this.api.updateDialogflowConnection(connectionId, dialogflowConnection, _options);
        return result.toPromise();
    }


}



import { ObservableDocumentsApi } from './ObservableAPI.ts';

import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi.ts";
export class PromiseDocumentsApi {
    private api: ObservableDocumentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentsApiRequestFactory,
        responseProcessor?: DocumentsApiResponseProcessor
    ) {
        this.api = new ObservableDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload a document.<br /><br />Uploaded files must be linked to a service within 30 minutes or they will be automatically deleted.
     * Upload a document
     * @param createDocServiceDocumentRequest 
     */
    public createDocument(createDocServiceDocumentRequest: CreateDocServiceDocumentRequest, _options?: Configuration): Promise<CreateDocument200Response> {
        const result = this.api.createDocument(createDocServiceDocumentRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a document.<br /><br />A document can only be deleted if it\'s not linked to a service. If it is linked to a service, it must be unlinked prior to deleting.
     * Delete a document
     * @param id Identifies the resource.
     */
    public deleteDocument(id: string, _options?: Configuration): Promise<CreateDocument200Response> {
        const result = this.api.deleteDocument(id, _options);
        return result.toPromise();
    }

    /**
     * Download a document.
     * Download a document
     * @param id Identifies the resource.
     */
    public downloadDocServiceDocument(id: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.downloadDocServiceDocument(id, _options);
        return result.toPromise();
    }

    /**
     * List all documents links ordered by created_at descending.
     * List all document links
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterDocumentId Identifies the associated document to filter on.
     * @param filterLinkedRecordType The &#x60;linked_record_type&#x60; of the document to filter on.
     * @param filterLinkedResourceId The &#x60;linked_resource_id&#x60; of the document to filter on.
     */
    public listDocumentLinks(pageNumber?: number, pageSize?: number, filterDocumentId?: string, filterLinkedRecordType?: string, filterLinkedResourceId?: string, _options?: Configuration): Promise<ListDocumentLinks200Response> {
        const result = this.api.listDocumentLinks(pageNumber, pageSize, filterDocumentId, filterLinkedRecordType, filterLinkedResourceId, _options);
        return result.toPromise();
    }

    /**
     * List all documents ordered by created_at descending.
     * List all documents
     * @param filterFilenameContains Filter by string matching part of filename.
     * @param filterCustomerReferenceEq Filter documents by a customer references.
     * @param filterCustomerReferenceIn Filter documents by a list of customer references.
     * @param filterCreatedAtGt Filter by created at greater than provided value.
     * @param filterCreatedAtLt Filter by created at less than provided value.
     * @param sort Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a &#x60;-&#x60; in front of the field name.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listDocuments(filterFilenameContains?: string, filterCustomerReferenceEq?: string, filterCustomerReferenceIn?: string, filterCreatedAtGt?: string, filterCreatedAtLt?: string, sort?: 'filename' | 'created_at' | 'updated_at', pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListDocuments200Response> {
        const result = this.api.listDocuments(filterFilenameContains, filterCustomerReferenceEq, filterCustomerReferenceIn, filterCreatedAtGt, filterCreatedAtLt, sort, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a document.
     * Retrieve a document
     * @param id Identifies the resource.
     */
    public retrieveDocument(id: string, _options?: Configuration): Promise<CreateDocument200Response> {
        const result = this.api.retrieveDocument(id, _options);
        return result.toPromise();
    }

    /**
     * Update a document.
     * Update a document
     * @param id Identifies the resource.
     * @param docServiceDocument 
     */
    public updateDocument(id: string, docServiceDocument: DocServiceDocument, _options?: Configuration): Promise<CreateDocument200Response> {
        const result = this.api.updateDocument(id, docServiceDocument, _options);
        return result.toPromise();
    }


}



import { ObservableDynamicEmergencyAddressesApi } from './ObservableAPI.ts';

import { DynamicEmergencyAddressesApiRequestFactory, DynamicEmergencyAddressesApiResponseProcessor} from "../apis/DynamicEmergencyAddressesApi.ts";
export class PromiseDynamicEmergencyAddressesApi {
    private api: ObservableDynamicEmergencyAddressesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DynamicEmergencyAddressesApiRequestFactory,
        responseProcessor?: DynamicEmergencyAddressesApiResponseProcessor
    ) {
        this.api = new ObservableDynamicEmergencyAddressesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a dynamic emergency address.
     * Create a dynamic emergency address.
     * @param dynamicEmergencyAddress 
     */
    public createDyanmicEmergencyAddress(dynamicEmergencyAddress: DynamicEmergencyAddress, _options?: Configuration): Promise<CreateDyanmicEmergencyAddress201Response> {
        const result = this.api.createDyanmicEmergencyAddress(dynamicEmergencyAddress, _options);
        return result.toPromise();
    }

    /**
     * Deletes the dynamic emergency address based on the ID provided
     * Delete a dynamic emergency address
     * @param id Dynamic Emergency Address id
     */
    public deleteDynamicEmergencyAddress(id: string, _options?: Configuration): Promise<CreateDyanmicEmergencyAddress201Response> {
        const result = this.api.deleteDynamicEmergencyAddress(id, _options);
        return result.toPromise();
    }

    /**
     * Returns the dynamic emergency address based on the ID provided
     * Get a dynamic emergency address
     * @param id Dynamic Emergency Address id
     */
    public getDynamicEmergencyAddress(id: string, _options?: Configuration): Promise<CreateDyanmicEmergencyAddress201Response> {
        const result = this.api.getDynamicEmergencyAddress(id, _options);
        return result.toPromise();
    }

    /**
     * Returns the dynamic emergency addresses according to filters
     * List dynamic emergency addresses
     * @param filterStatus Filter by status.
     * @param filterCountryCode Filter by country code.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listDyanmicEmergencyAddresses(filterStatus?: 'pending' | 'activated' | 'rejected', filterCountryCode?: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListDyanmicEmergencyAddresses200Response> {
        const result = this.api.listDyanmicEmergencyAddresses(filterStatus, filterCountryCode, pageNumber, pageSize, _options);
        return result.toPromise();
    }


}



import { ObservableDynamicEmergencyEndpointsApi } from './ObservableAPI.ts';

import { DynamicEmergencyEndpointsApiRequestFactory, DynamicEmergencyEndpointsApiResponseProcessor} from "../apis/DynamicEmergencyEndpointsApi.ts";
export class PromiseDynamicEmergencyEndpointsApi {
    private api: ObservableDynamicEmergencyEndpointsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DynamicEmergencyEndpointsApiRequestFactory,
        responseProcessor?: DynamicEmergencyEndpointsApiResponseProcessor
    ) {
        this.api = new ObservableDynamicEmergencyEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a dynamic emergency endpoints.
     * Create a dynamic emergency endpoint.
     * @param dynamicEmergencyEndpoint 
     */
    public createDyanmicEmergencyEndpoint(dynamicEmergencyEndpoint: DynamicEmergencyEndpoint, _options?: Configuration): Promise<CreateDyanmicEmergencyEndpoint201Response> {
        const result = this.api.createDyanmicEmergencyEndpoint(dynamicEmergencyEndpoint, _options);
        return result.toPromise();
    }

    /**
     * Deletes the dynamic emergency endpoint based on the ID provided
     * Delete a dynamic emergency endpoint
     * @param id Dynamic Emergency Endpoint id
     */
    public deleteDynamicEmergencyEndpoint(id: string, _options?: Configuration): Promise<CreateDyanmicEmergencyEndpoint201Response> {
        const result = this.api.deleteDynamicEmergencyEndpoint(id, _options);
        return result.toPromise();
    }

    /**
     * Returns the dynamic emergency endpoint based on the ID provided
     * Get a dynamic emergency endpoint
     * @param id Dynamic Emergency Endpoint id
     */
    public getDynamicEmergencyEndpoint(id: string, _options?: Configuration): Promise<CreateDyanmicEmergencyEndpoint201Response> {
        const result = this.api.getDynamicEmergencyEndpoint(id, _options);
        return result.toPromise();
    }

    /**
     * Returns the dynamic emergency endpoints according to filters
     * List dynamic emergency endpoints
     * @param filterStatus Filter by status.
     * @param filterCountryCode Filter by country code.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listDyanmicEmergencyEndpoints(filterStatus?: 'pending' | 'activated' | 'rejected', filterCountryCode?: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListDyanmicEmergencyEndpoints200Response> {
        const result = this.api.listDyanmicEmergencyEndpoints(filterStatus, filterCountryCode, pageNumber, pageSize, _options);
        return result.toPromise();
    }


}



import { ObservableEnumApi } from './ObservableAPI.ts';

import { EnumApiRequestFactory, EnumApiResponseProcessor} from "../apis/EnumApi.ts";
export class PromiseEnumApi {
    private api: ObservableEnumApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EnumApiRequestFactory,
        responseProcessor?: EnumApiResponseProcessor
    ) {
        this.api = new ObservableEnumApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Enum
     * @param endpoint 
     */
    public getEnumEnumEndpointGet(endpoint: string, _options?: Configuration): Promise<any> {
        const result = this.api.getEnumEnumEndpointGet(endpoint, _options);
        return result.toPromise();
    }


}



import { ObservableErrorApi } from './ObservableAPI.ts';

import { ErrorApiRequestFactory, ErrorApiResponseProcessor} from "../apis/ErrorApi.ts";
export class PromiseErrorApi {
    private api: ObservableErrorApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ErrorApiRequestFactory,
        responseProcessor?: ErrorApiResponseProcessor
    ) {
        this.api = new ObservableErrorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all error codes
     * List Error Codes
     */
    public listErrorCodesErrorGet(_options?: Configuration): Promise<string> {
        const result = this.api.listErrorCodesErrorGet(_options);
        return result.toPromise();
    }


}



import { ObservableFQDNConnectionsApi } from './ObservableAPI.ts';

import { FQDNConnectionsApiRequestFactory, FQDNConnectionsApiResponseProcessor} from "../apis/FQDNConnectionsApi.ts";
export class PromiseFQDNConnectionsApi {
    private api: ObservableFQDNConnectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FQDNConnectionsApiRequestFactory,
        responseProcessor?: FQDNConnectionsApiResponseProcessor
    ) {
        this.api = new ObservableFQDNConnectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a FQDN connection.
     * Create an FQDN connection
     * @param createFqdnConnectionRequest Parameters that can be defined during FQDN connection creation
     */
    public createFqdnConnection(createFqdnConnectionRequest: CreateFqdnConnectionRequest, _options?: Configuration): Promise<FQDNConnectionResponse> {
        const result = this.api.createFqdnConnection(createFqdnConnectionRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes an FQDN connection.
     * Delete an FQDN connection
     * @param id FQDN Connection ID
     */
    public deleteFqdnConnection(id: string, _options?: Configuration): Promise<FQDNConnectionResponse> {
        const result = this.api.deleteFqdnConnection(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your FQDN connections.
     * List FQDN connections
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterConnectionNameContains If present, connections with &lt;code&gt;connection_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     */
    public listFqdnConnections(pageNumber?: number, pageSize?: number, filterConnectionNameContains?: string, sort?: 'created_at' | 'connection_name' | 'active', _options?: Configuration): Promise<ListFQDNConnectionsResponse> {
        const result = this.api.listFqdnConnections(pageNumber, pageSize, filterConnectionNameContains, sort, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing FQDN connection.
     * Retrieve an FQDN connection
     * @param id FQDN Connection ID
     */
    public retrieveFqdnConnection(id: string, _options?: Configuration): Promise<FQDNConnectionResponse> {
        const result = this.api.retrieveFqdnConnection(id, _options);
        return result.toPromise();
    }

    /**
     * Updates settings of an existing FQDN connection.
     * Update an FQDN connection
     * @param id FQDN Connection ID
     * @param updateFqdnConnectionRequest Parameters that can be updated in a FQDN connection
     */
    public updateFqdnConnection(id: string, updateFqdnConnectionRequest: UpdateFqdnConnectionRequest, _options?: Configuration): Promise<FQDNConnectionResponse> {
        const result = this.api.updateFqdnConnection(id, updateFqdnConnectionRequest, _options);
        return result.toPromise();
    }


}



import { ObservableGlobalIPsApi } from './ObservableAPI.ts';

import { GlobalIPsApiRequestFactory, GlobalIPsApiResponseProcessor} from "../apis/GlobalIPsApi.ts";
export class PromiseGlobalIPsApi {
    private api: ObservableGlobalIPsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GlobalIPsApiRequestFactory,
        responseProcessor?: GlobalIPsApiResponseProcessor
    ) {
        this.api = new ObservableGlobalIPsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all Global IP Allowed Ports
     * List all Global IP Allowed Ports
     */
    public globalIpAllowedPortList(_options?: Configuration): Promise<GlobalIpAllowedPortList200Response> {
        const result = this.api.globalIpAllowedPortList(_options);
        return result.toPromise();
    }

    /**
     * Create a Global IP assignment.
     * Create a Global IP assignment
     * @param globalIpAssignment 
     */
    public globalIpAssignmentCreate(globalIpAssignment: GlobalIpAssignment, _options?: Configuration): Promise<GlobalIpAssignmentCreate202Response> {
        const result = this.api.globalIpAssignmentCreate(globalIpAssignment, _options);
        return result.toPromise();
    }

    /**
     * Delete a Global IP assignment.
     * Delete a Global IP assignment
     * @param id Identifies the resource.
     */
    public globalIpAssignmentDelete(id: string, _options?: Configuration): Promise<GlobalIpAssignmentCreate202Response> {
        const result = this.api.globalIpAssignmentDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a Global IP assignment.
     * Retrieve a Global IP
     * @param id Identifies the resource.
     */
    public globalIpAssignmentGet(id: string, _options?: Configuration): Promise<GlobalIpAssignmentCreate202Response> {
        const result = this.api.globalIpAssignmentGet(id, _options);
        return result.toPromise();
    }

    /**
     * @param filterGlobalIpIdIn Filter by Global IP ID(s) separated by commas
     * @param filterGlobalIpAssignmentIdIn Filter by Global IP Assignment ID(s) separated by commas
     * @param filterTimestampGt Filter by timestamp greater than
     * @param filterTimestampLt Filter by timestamp less than
     */
    public globalIpAssignmentHealth(filterGlobalIpIdIn?: string, filterGlobalIpAssignmentIdIn?: string, filterTimestampGt?: Date, filterTimestampLt?: Date, _options?: Configuration): Promise<GlobalIpAssignmentHealth200Response> {
        const result = this.api.globalIpAssignmentHealth(filterGlobalIpIdIn, filterGlobalIpAssignmentIdIn, filterTimestampGt, filterTimestampLt, _options);
        return result.toPromise();
    }

    /**
     * List all Global IP assignments.
     * List all Global IP assignments
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public globalIpAssignmentList(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<GlobalIpAssignmentList200Response> {
        const result = this.api.globalIpAssignmentList(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Update a Global IP assignment.
     * Update a Global IP assignment
     * @param id Identifies the resource.
     * @param globalIpAssignmentUpdate 
     */
    public globalIpAssignmentUpdate(id: string, globalIpAssignmentUpdate: GlobalIpAssignmentUpdate, _options?: Configuration): Promise<GlobalIpAssignmentCreate202Response> {
        const result = this.api.globalIpAssignmentUpdate(id, globalIpAssignmentUpdate, _options);
        return result.toPromise();
    }

    /**
     * @param filterGlobalIpAssignmentIdIn Filter by Global IP Assignment ID(s) separated by commas
     * @param filterGlobalIpIdIn Filter by Global IP ID(s), separated by commas
     * @param filterTimestampGt Filter by timestamp greater than
     * @param filterTimestampLt Filter by timestamp less than
     */
    public globalIpAssignmentUsage(filterGlobalIpAssignmentIdIn?: string, filterGlobalIpIdIn?: string, filterTimestampGt?: Date, filterTimestampLt?: Date, _options?: Configuration): Promise<GlobalIpAssignmentUsage200Response> {
        const result = this.api.globalIpAssignmentUsage(filterGlobalIpAssignmentIdIn, filterGlobalIpIdIn, filterTimestampGt, filterTimestampLt, _options);
        return result.toPromise();
    }

    /**
     * Create a Global IP.
     * Create a Global IP
     * @param globalIP 
     */
    public globalIpCreate(globalIP: GlobalIP, _options?: Configuration): Promise<GlobalIpCreate202Response> {
        const result = this.api.globalIpCreate(globalIP, _options);
        return result.toPromise();
    }

    /**
     * Delete a Global IP.
     * Delete a Global IP
     * @param id Identifies the resource.
     */
    public globalIpDelete(id: string, _options?: Configuration): Promise<GlobalIpCreate202Response> {
        const result = this.api.globalIpDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a Global IP.
     * Retrieve a Global IP
     * @param id Identifies the resource.
     */
    public globalIpGet(id: string, _options?: Configuration): Promise<GlobalIpCreate202Response> {
        const result = this.api.globalIpGet(id, _options);
        return result.toPromise();
    }

    /**
     * @param filterGlobalIpIdIn Filter by Global IP ID(s) separated by commas
     * @param filterTimestampGt Filter by timestamp greater than
     * @param filterTimestampLt Filter by timestamp less than
     */
    public globalIpLatency(filterGlobalIpIdIn?: string, filterTimestampGt?: Date, filterTimestampLt?: Date, _options?: Configuration): Promise<GlobalIpLatency200Response> {
        const result = this.api.globalIpLatency(filterGlobalIpIdIn, filterTimestampGt, filterTimestampLt, _options);
        return result.toPromise();
    }

    /**
     * List all Global IPs.
     * List all Global IPs
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public globalIpList(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<GlobalIpList200Response> {
        const result = this.api.globalIpList(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * List all Global IP Protocols
     * List all Global IP Protocols
     */
    public globalIpProtocolList(_options?: Configuration): Promise<GlobalIpProtocolList200Response> {
        const result = this.api.globalIpProtocolList(_options);
        return result.toPromise();
    }

    /**
     * @param filterGlobalIpIdIn Filter by Global IP ID(s) separated by commas
     * @param filterTimestampGt Filter by timestamp greater than
     * @param filterTimestampLt Filter by timestamp less than
     */
    public globalIpUsage(filterGlobalIpIdIn?: string, filterTimestampGt?: Date, filterTimestampLt?: Date, _options?: Configuration): Promise<GlobalIpUsage200Response> {
        const result = this.api.globalIpUsage(filterGlobalIpIdIn, filterTimestampGt, filterTimestampLt, _options);
        return result.toPromise();
    }


}



import { ObservableIPAddressesApi } from './ObservableAPI.ts';

import { IPAddressesApiRequestFactory, IPAddressesApiResponseProcessor} from "../apis/IPAddressesApi.ts";
export class PromiseIPAddressesApi {
    private api: ObservableIPAddressesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IPAddressesApiRequestFactory,
        responseProcessor?: IPAddressesApiResponseProcessor
    ) {
        this.api = new ObservableIPAddressesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create new Access IP Address
     * @param accessIPAddressPOST 
     */
    public accessIPAddressCreate(accessIPAddressPOST: AccessIPAddressPOST, _options?: Configuration): Promise<AccessIPAddressResponseSchema> {
        const result = this.api.accessIPAddressCreate(accessIPAddressPOST, _options);
        return result.toPromise();
    }

    /**
     * Delete access IP address
     * @param accessIpAddressId 
     */
    public accessIPAddressDelete(accessIpAddressId: string, _options?: Configuration): Promise<AccessIPAddressResponseSchema> {
        const result = this.api.accessIPAddressDelete(accessIpAddressId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve an access IP address
     * @param accessIpAddressId 
     */
    public accessIPAddressGet(accessIpAddressId: string, _options?: Configuration): Promise<AccessIPAddressResponseSchema> {
        const result = this.api.accessIPAddressGet(accessIpAddressId, _options);
        return result.toPromise();
    }

    /**
     * List all Access IP Addresses
     * @param filterIpSource 
     * @param filterIpAddress 
     * @param filterStatus 
     * @param filterCreatedAtGt 
     * @param filterCreatedAtLt 
     * @param pageNumber 
     * @param pageSize 
     */
    public accessIPAddressList(filterIpSource?: string, filterIpAddress?: string, filterStatus?: CloudflareSyncStatus, filterCreatedAtGt?: Date, filterCreatedAtLt?: Date, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<AccessIPAddressListResponseSchema> {
        const result = this.api.accessIPAddressList(filterIpSource, filterIpAddress, filterStatus, filterCreatedAtGt, filterCreatedAtLt, pageNumber, pageSize, _options);
        return result.toPromise();
    }


}



import { ObservableIPConnectionsApi } from './ObservableAPI.ts';

import { IPConnectionsApiRequestFactory, IPConnectionsApiResponseProcessor} from "../apis/IPConnectionsApi.ts";
export class PromiseIPConnectionsApi {
    private api: ObservableIPConnectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IPConnectionsApiRequestFactory,
        responseProcessor?: IPConnectionsApiResponseProcessor
    ) {
        this.api = new ObservableIPConnectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an IP connection.
     * Create an Ip connection
     * @param createIpConnectionRequest Parameters that can be defined during IP connection creation
     */
    public createIpConnection(createIpConnectionRequest: CreateIpConnectionRequest, _options?: Configuration): Promise<IpConnectionResponse> {
        const result = this.api.createIpConnection(createIpConnectionRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes an existing IP connection.
     * Delete an Ip connection
     * @param id Identifies the type of resource.
     */
    public deleteIpConnection(id: string, _options?: Configuration): Promise<IpConnectionResponse> {
        const result = this.api.deleteIpConnection(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your IP connections.
     * List Ip connections
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterConnectionNameContains If present, connections with &lt;code&gt;connection_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @param filterOutboundOutboundVoiceProfileId Identifies the associated outbound voice profile.
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     */
    public listIpConnections(pageNumber?: number, pageSize?: number, filterConnectionNameContains?: string, filterOutboundOutboundVoiceProfileId?: string, sort?: 'created_at' | 'connection_name' | 'active', _options?: Configuration): Promise<ListIpConnectionsResponse> {
        const result = this.api.listIpConnections(pageNumber, pageSize, filterConnectionNameContains, filterOutboundOutboundVoiceProfileId, sort, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing ip connection.
     * Retrieve an Ip connection
     * @param id IP Connection ID
     */
    public retrieveIpConnection(id: string, _options?: Configuration): Promise<IpConnectionResponse> {
        const result = this.api.retrieveIpConnection(id, _options);
        return result.toPromise();
    }

    /**
     * Updates settings of an existing IP connection.
     * Update an Ip connection
     * @param id Identifies the type of resource.
     * @param updateIpConnectionRequest Parameters that can be updated in a IP connection
     */
    public updateIpConnection(id: string, updateIpConnectionRequest: UpdateIpConnectionRequest, _options?: Configuration): Promise<IpConnectionResponse> {
        const result = this.api.updateIpConnection(id, updateIpConnectionRequest, _options);
        return result.toPromise();
    }


}



import { ObservableIPRangesApi } from './ObservableAPI.ts';

import { IPRangesApiRequestFactory, IPRangesApiResponseProcessor} from "../apis/IPRangesApi.ts";
export class PromiseIPRangesApi {
    private api: ObservableIPRangesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IPRangesApiRequestFactory,
        responseProcessor?: IPRangesApiResponseProcessor
    ) {
        this.api = new ObservableIPRangesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create new Access IP Range
     * @param accessIPRangePOST 
     */
    public accessIPRangeCreate(accessIPRangePOST: AccessIPRangePOST, _options?: Configuration): Promise<AccessIPRangeResponseSchema> {
        const result = this.api.accessIPRangeCreate(accessIPRangePOST, _options);
        return result.toPromise();
    }

    /**
     * List all Access IP Ranges
     * @param filterCidrBlock 
     * @param filterCidrBlockStartswith 
     * @param filterCidrBlockEndswith 
     * @param filterCidrBlockContains 
     * @param filterStatus 
     * @param filterCreatedAtGt 
     * @param filterCreatedAtLt 
     * @param pageNumber 
     * @param pageSize 
     */
    public accessIPRangeList(filterCidrBlock?: string, filterCidrBlockStartswith?: string, filterCidrBlockEndswith?: string, filterCidrBlockContains?: string, filterStatus?: CloudflareSyncStatus, filterCreatedAtGt?: Date, filterCreatedAtLt?: Date, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<AccessIPRangeListResponseSchema> {
        const result = this.api.accessIPRangeList(filterCidrBlock, filterCidrBlockStartswith, filterCidrBlockEndswith, filterCidrBlockContains, filterStatus, filterCreatedAtGt, filterCreatedAtLt, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Delete access IP ranges
     * @param accessIpRangeId 
     */
    public accessIpRangesAccessIpRangeIdDelete(accessIpRangeId: string, _options?: Configuration): Promise<AccessIPRangeResponseSchema> {
        const result = this.api.accessIpRangesAccessIpRangeIdDelete(accessIpRangeId, _options);
        return result.toPromise();
    }


}



import { ObservableIPsApi } from './ObservableAPI.ts';

import { IPsApiRequestFactory, IPsApiResponseProcessor} from "../apis/IPsApi.ts";
export class PromiseIPsApi {
    private api: ObservableIPsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IPsApiRequestFactory,
        responseProcessor?: IPsApiResponseProcessor
    ) {
        this.api = new ObservableIPsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new IP object.
     * Create an Ip
     * @param createIpRequest 
     */
    public createIp(createIpRequest?: CreateIpRequest, _options?: Configuration): Promise<IpResponse> {
        const result = this.api.createIp(createIpRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete an IP.
     * Delete an Ip
     * @param id Identifies the type of resource.
     */
    public deleteIp(id: string, _options?: Configuration): Promise<IpResponse> {
        const result = this.api.deleteIp(id, _options);
        return result.toPromise();
    }

    /**
     * Get all IPs belonging to the user that match the given filters.
     * List Ips
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterConnectionId ID of the IP Connection to which this IP should be attached.
     * @param filterIpAddress IP adddress represented by this resource.
     * @param filterPort Port to use when connecting to this IP.
     */
    public listIps(pageNumber?: number, pageSize?: number, filterConnectionId?: string, filterIpAddress?: string, filterPort?: number, _options?: Configuration): Promise<ListIpsResponse> {
        const result = this.api.listIps(pageNumber, pageSize, filterConnectionId, filterIpAddress, filterPort, _options);
        return result.toPromise();
    }

    /**
     * Return the details regarding a specific IP.
     * Retrieve an Ip
     * @param id Identifies the type of resource.
     */
    public retrieveIp(id: string, _options?: Configuration): Promise<IpResponse> {
        const result = this.api.retrieveIp(id, _options);
        return result.toPromise();
    }

    /**
     * Update the details of a specific IP.
     * Update an Ip
     * @param id Identifies the type of resource.
     * @param updateIpRequest 
     */
    public updateIp(id: string, updateIpRequest?: UpdateIpRequest, _options?: Configuration): Promise<IpResponse> {
        const result = this.api.updateIp(id, updateIpRequest, _options);
        return result.toPromise();
    }


}



import { ObservableInboundChannelsApi } from './ObservableAPI.ts';

import { InboundChannelsApiRequestFactory, InboundChannelsApiResponseProcessor} from "../apis/InboundChannelsApi.ts";
export class PromiseInboundChannelsApi {
    private api: ObservableInboundChannelsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InboundChannelsApiRequestFactory,
        responseProcessor?: InboundChannelsApiResponseProcessor
    ) {
        this.api = new ObservableInboundChannelsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the inbound channels for your account. Inbound channels allows you to use Channel Billing for calls to your Telnyx phone numbers. Please check the Telnyx Support Articles section for full information and examples of how to utilize Channel Billing.
     * Retrieve your inbound channels
     */
    public listOutboundChannels(_options?: Configuration): Promise<ListOutboundChannels200Response> {
        const result = this.api.listOutboundChannels(_options);
        return result.toPromise();
    }

    /**
     * Update the inbound channels for the account
     * Update inbound channels
     * @param updateOutboundChannelsRequest Inbound channels update
     */
    public updateOutboundChannels(updateOutboundChannelsRequest: UpdateOutboundChannelsRequest, _options?: Configuration): Promise<UpdateOutboundChannels200Response> {
        const result = this.api.updateOutboundChannels(updateOutboundChannelsRequest, _options);
        return result.toPromise();
    }


}



import { ObservableInventoryLevelApi } from './ObservableAPI.ts';

import { InventoryLevelApiRequestFactory, InventoryLevelApiResponseProcessor} from "../apis/InventoryLevelApi.ts";
export class PromiseInventoryLevelApi {
    private api: ObservableInventoryLevelApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InventoryLevelApiRequestFactory,
        responseProcessor?: InventoryLevelApiResponseProcessor
    ) {
        this.api = new ObservableInventoryLevelApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an inventory coverage request. If locality, npa or national_destination_code is used in groupBy, and no region or locality filters are used, the whole paginated set is returned.
     * Create an inventory coverage request
     * @param filterGroupBy 
     * @param filterNpa 
     * @param filterNxx 
     * @param filterAdministrativeArea 
     * @param filterPhoneNumberType 
     * @param filterCountryCode 
     * @param filterCount 
     * @param filterFeatures Filter if the phone number should be used for voice, fax, mms, sms, emergency. Returns features in the response when used
     */
    public createInventoryCoverageRequest(filterGroupBy: 'locality' | 'npa' | 'national_destination_code', filterNpa?: number, filterNxx?: number, filterAdministrativeArea?: string, filterPhoneNumberType?: 'local' | 'toll_free' | 'national' | 'mobile' | 'landline' | 'shared_cost', filterCountryCode?: 'US' | 'CA' | 'GB', filterCount?: boolean, filterFeatures?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>, _options?: Configuration): Promise<CreateInventoryCoverageRequest200Response> {
        const result = this.api.createInventoryCoverageRequest(filterGroupBy, filterNpa, filterNxx, filterAdministrativeArea, filterPhoneNumberType, filterCountryCode, filterCount, filterFeatures, _options);
        return result.toPromise();
    }


}



import { ObservableMDRDetailReportsApi } from './ObservableAPI.ts';

import { MDRDetailReportsApiRequestFactory, MDRDetailReportsApiResponseProcessor} from "../apis/MDRDetailReportsApi.ts";
export class PromiseMDRDetailReportsApi {
    private api: ObservableMDRDetailReportsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MDRDetailReportsApiRequestFactory,
        responseProcessor?: MDRDetailReportsApiResponseProcessor
    ) {
        this.api = new ObservableMDRDetailReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete generated messaging detail report by id
     * @param id 
     */
    public deleteMdrRequest(id: string, _options?: Configuration): Promise<MdrDeleteDetailReportResponse> {
        const result = this.api.deleteMdrRequest(id, _options);
        return result.toPromise();
    }

    /**
     * Fetch all previous requests for messaging detail reports. Messaging detail reports are reports for pulling all messaging records. 
     * @param pageNumber Page number
     * @param pageSize Size of the page
     */
    public getCdrRequests(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<MdrGetDetailReportResponse> {
        const result = this.api.getCdrRequests(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Fetch single messaging detail report by id.
     * @param id 
     */
    public getMdrRequest(id: string, _options?: Configuration): Promise<MdrGetDetailReportByIdResponse> {
        const result = this.api.getMdrRequest(id, _options);
        return result.toPromise();
    }

    /**
     * Fetch all Mdr records 
     * @param startDate Pagination start date
     * @param endDate Pagination end date
     * @param id 
     * @param direction 
     * @param profile 
     * @param cld 
     * @param cli 
     * @param status 
     * @param messageType 
     */
    public getPaginatedMdrs(startDate?: string, endDate?: string, id?: string, direction?: 'INBOUND' | 'OUTBOUND', profile?: string, cld?: string, cli?: string, status?: 'GW_TIMEOUT' | 'DELIVERED' | 'DLR_UNCONFIRMED' | 'DLR_TIMEOUT' | 'RECEIVED' | 'GW_REJECT' | 'FAILED', messageType?: 'SMS' | 'MMS', _options?: Configuration): Promise<MdrGetDetailResponse> {
        const result = this.api.getPaginatedMdrs(startDate, endDate, id, direction, profile, cld, cli, status, messageType, _options);
        return result.toPromise();
    }

    /**
     * Submit a request for new messaging detail report. Messaging detail report pulls all raw messaging data according to defined filters.
     * @param mdrPostDetailReportRequest Mdr detail request data
     */
    public submitMdrRequest(mdrPostDetailReportRequest: MdrPostDetailReportRequest, _options?: Configuration): Promise<MdrPostDetailReportResponse> {
        const result = this.api.submitMdrRequest(mdrPostDetailReportRequest, _options);
        return result.toPromise();
    }


}



import { ObservableMDRUsageReportsApi } from './ObservableAPI.ts';

import { MDRUsageReportsApiRequestFactory, MDRUsageReportsApiResponseProcessor} from "../apis/MDRUsageReportsApi.ts";
export class PromiseMDRUsageReportsApi {
    private api: ObservableMDRUsageReportsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MDRUsageReportsApiRequestFactory,
        responseProcessor?: MDRUsageReportsApiResponseProcessor
    ) {
        this.api = new ObservableMDRUsageReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete messaging usage report by id
     * @param id 
     */
    public deleteUsageReport(id: string, _options?: Configuration): Promise<MdrDeleteUsageReportsResponse> {
        const result = this.api.deleteUsageReport(id, _options);
        return result.toPromise();
    }

    /**
     * Fetch a single messaging usage report by id
     * @param id 
     */
    public getUsageReport(id: string, _options?: Configuration): Promise<MdrGetUsageReportsByIdResponse> {
        const result = this.api.getUsageReport(id, _options);
        return result.toPromise();
    }

    /**
     * Generate and fetch messaging usage report synchronously. This endpoint will both generate and fetch the messaging report over a specified time period. No polling is necessary but the response may take up to a couple of minutes. 
     * @param aggregationType 
     * @param startDate 
     * @param endDate 
     * @param profiles 
     */
    public getUsageReportSync1(aggregationType: 'NO_AGGREGATION' | 'PROFILE' | 'TAGS', startDate?: Date, endDate?: Date, profiles?: Array<string>, _options?: Configuration): Promise<MdrGetSyncUsageReportResponse> {
        const result = this.api.getUsageReportSync1(aggregationType, startDate, endDate, profiles, _options);
        return result.toPromise();
    }

    /**
     * Fetch all messaging usage reports. Usage reports are aggregated messaging data for specified time period and breakdown
     * @param pageNumber Page number
     * @param pageSize Size of the page
     */
    public getUsageReports(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<MdrGetUsageReportsResponse> {
        const result = this.api.getUsageReports(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Submit request for new new messaging usage report. This endpoint will pull and aggregate messaging data in specified time period. 
     * @param mdrPostUsageReportRequest Mdr usage report data
     */
    public submitUsageReport(mdrPostUsageReportRequest: MdrPostUsageReportRequest, _options?: Configuration): Promise<MdrPostUsageReportsResponse> {
        const result = this.api.submitUsageReport(mdrPostUsageReportRequest, _options);
        return result.toPromise();
    }


}



import { ObservableManagedAccountsApi } from './ObservableAPI.ts';

import { ManagedAccountsApiRequestFactory, ManagedAccountsApiResponseProcessor} from "../apis/ManagedAccountsApi.ts";
export class PromiseManagedAccountsApi {
    private api: ObservableManagedAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ManagedAccountsApiRequestFactory,
        responseProcessor?: ManagedAccountsApiResponseProcessor
    ) {
        this.api = new ObservableManagedAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new managed account owned by the authenticated user. You need to be explictly approved by Telnyx in order to become a manager account.
     * Create a new managed account.
     * @param createManagedAccountRequest Parameters that define the managed account to be created
     */
    public createManagedAccount(createManagedAccountRequest: CreateManagedAccountRequest, _options?: Configuration): Promise<CreateManagedAccount200Response> {
        const result = this.api.createManagedAccount(createManagedAccountRequest, _options);
        return result.toPromise();
    }

    /**
     * Disables a managed account, forbidding it to use Telnyx services, including sending or receiving phone calls and SMS messages. Ongoing phone calls will not be affected. The managed account and its sub-users will still be able to log in via the mission control portal.
     * Disables a managed account
     * @param id Managed Account User ID
     */
    public disableManagedAccount(id: string, _options?: Configuration): Promise<CreateManagedAccount200Response> {
        const result = this.api.disableManagedAccount(id, _options);
        return result.toPromise();
    }

    /**
     * Enables a managed account and its sub-users to use Telnyx services.
     * Enables a managed account
     * @param id Managed Account User ID
     */
    public enableManagedAccount(id: string, _options?: Configuration): Promise<CreateManagedAccount200Response> {
        const result = this.api.enableManagedAccount(id, _options);
        return result.toPromise();
    }

    /**
     * Lists the accounts managed by the current user. Users need to be explictly approved by Telnyx in order to become manager accounts.
     * Lists accounts managed by the current user.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterEmailContains If present, email containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @param filterEmailEq If present, only returns results with the &lt;code&gt;email&lt;/code&gt; matching exactly the value given.
     * @param filterOrganizationNameContains If present, only returns results with the &lt;code&gt;organization_name&lt;/code&gt; containing the given value. Matching is not case-sensitive. Requires at least three characters.
     * @param filterOrganizationNameEq If present, only returns results with the &lt;code&gt;organization_name&lt;/code&gt; matching the exact value given.
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;email&lt;/code&gt;: sorts the result by the     &lt;code&gt;email&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-email&lt;/code&gt;: sorts the result by the     &lt;code&gt;email&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     * @param includeCancelledAccounts Specifies if cancelled accounts should be included in the results.
     */
    public listManagedAccounts(pageNumber?: number, pageSize?: number, filterEmailContains?: string, filterEmailEq?: string, filterOrganizationNameContains?: string, filterOrganizationNameEq?: string, sort?: 'created_at' | 'email', includeCancelledAccounts?: boolean, _options?: Configuration): Promise<ListManagedAccounts200Response> {
        const result = this.api.listManagedAccounts(pageNumber, pageSize, filterEmailContains, filterEmailEq, filterOrganizationNameContains, filterOrganizationNameEq, sort, includeCancelledAccounts, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of a single managed account.
     * Retrieve a managed account
     * @param id Managed Account User ID
     */
    public retrieveManagedAccount(id: string, _options?: Configuration): Promise<CreateManagedAccount200Response> {
        const result = this.api.retrieveManagedAccount(id, _options);
        return result.toPromise();
    }

    /**
     * Update a single managed account.
     * Update a managed account
     * @param id Managed Account User ID
     * @param updateManagedAccountRequest Parameters that define the updates to the managed account
     */
    public updateManagedAccount(id: string, updateManagedAccountRequest: UpdateManagedAccountRequest, _options?: Configuration): Promise<CreateManagedAccount200Response> {
        const result = this.api.updateManagedAccount(id, updateManagedAccountRequest, _options);
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



import { ObservableMessagesApi } from './ObservableAPI.ts';

import { MessagesApiRequestFactory, MessagesApiResponseProcessor} from "../apis/MessagesApi.ts";
export class PromiseMessagesApi {
    private api: ObservableMessagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MessagesApiRequestFactory,
        responseProcessor?: MessagesApiResponseProcessor
    ) {
        this.api = new ObservableMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Send a long code message
     * @param createLongCodeMessageRequest Message payload
     */
    public createLongCodeMessage(createLongCodeMessageRequest?: CreateLongCodeMessageRequest, _options?: Configuration): Promise<MessageResponse> {
        const result = this.api.createLongCodeMessage(createLongCodeMessageRequest, _options);
        return result.toPromise();
    }

    /**
     * Send a message with a Phone Number, Alphanumeric Sender ID, Short Code or Number Pool.  This endpoint allows you to send a message with any messaging resource. Current messaging resources include: long-code, short-code, number-pool, and alphanumeric-sender-id. 
     * Send a message
     * @param createMessageRequest Message payload
     */
    public createMessage(createMessageRequest?: CreateMessageRequest, _options?: Configuration): Promise<MessageResponse> {
        const result = this.api.createMessage(createMessageRequest, _options);
        return result.toPromise();
    }

    /**
     * Send a message using number pool
     * @param createNumberPoolMessageRequest Message payload
     */
    public createNumberPoolMessage(createNumberPoolMessageRequest?: CreateNumberPoolMessageRequest, _options?: Configuration): Promise<MessageResponse> {
        const result = this.api.createNumberPoolMessage(createNumberPoolMessageRequest, _options);
        return result.toPromise();
    }

    /**
     * Send a short code message
     * @param createShortCodeMessageRequest Message payload
     */
    public createShortCodeMessage(createShortCodeMessageRequest?: CreateShortCodeMessageRequest, _options?: Configuration): Promise<MessageResponse> {
        const result = this.api.createShortCodeMessage(createShortCodeMessageRequest, _options);
        return result.toPromise();
    }

    /**
     * Note: This API endpoint can only retrieve messages that are no older than 10 days since their creation. If you require messages older than this, please generate an [MDR report.](https://developers.telnyx.com/docs/api/v1/reports/MDR-Reports)
     * Retrieve a message
     * @param id The id of the message
     */
    public retrieveMessage(id: string, _options?: Configuration): Promise<MessageResponse> {
        const result = this.api.retrieveMessage(id, _options);
        return result.toPromise();
    }


}



import { ObservableMessagingHostedNumberApi } from './ObservableAPI.ts';

import { MessagingHostedNumberApiRequestFactory, MessagingHostedNumberApiResponseProcessor} from "../apis/MessagingHostedNumberApi.ts";
export class PromiseMessagingHostedNumberApi {
    private api: ObservableMessagingHostedNumberApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MessagingHostedNumberApiRequestFactory,
        responseProcessor?: MessagingHostedNumberApiResponseProcessor
    ) {
        this.api = new ObservableMessagingHostedNumberApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a messaging hosted number order
     * @param createMessagingHostedNumberOrderRequest Message payload
     */
    public createMessagingHostedNumberOrder(createMessagingHostedNumberOrderRequest?: CreateMessagingHostedNumberOrderRequest, _options?: Configuration): Promise<RetrieveMessagingHostedNumberOrderResponse> {
        const result = this.api.createMessagingHostedNumberOrder(createMessagingHostedNumberOrderRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a messaging hosted number
     * @param id Identifies the type of resource.
     */
    public deleteMessagingHostedNumber(id: string, _options?: Configuration): Promise<RetrieveMessagingHostedNumberResponse> {
        const result = this.api.deleteMessagingHostedNumber(id, _options);
        return result.toPromise();
    }

    /**
     * List messaging hosted number orders
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listMessagingHostedNumberOrder(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListMessagingHostedNumberOrderResponse> {
        const result = this.api.listMessagingHostedNumberOrder(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a messaging hosted number order
     * @param id Identifies the type of resource.
     */
    public retrieveMessagingHostedNumberOrder(id: string, _options?: Configuration): Promise<RetrieveMessagingHostedNumberOrderResponse> {
        const result = this.api.retrieveMessagingHostedNumberOrder(id, _options);
        return result.toPromise();
    }

    /**
     * Upload file required for a messaging hosted number order
     * @param id Identifies the type of resource.
     * @param loa Must be a signed LOA for the numbers in the order in PDF format.
     * @param bill Must be the last month\\\&#39;s bill with proof of ownership of all of the numbers in the order in PDF format.
     */
    public uploadFileMessagingHostedNumberOrder(id: string, loa?: HttpFile, bill?: HttpFile, _options?: Configuration): Promise<RetrieveMessagingHostedNumberOrderResponse> {
        const result = this.api.uploadFileMessagingHostedNumberOrder(id, loa, bill, _options);
        return result.toPromise();
    }


}



import { ObservableMessagingProfilesApi } from './ObservableAPI.ts';

import { MessagingProfilesApiRequestFactory, MessagingProfilesApiResponseProcessor} from "../apis/MessagingProfilesApi.ts";
export class PromiseMessagingProfilesApi {
    private api: ObservableMessagingProfilesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MessagingProfilesApiRequestFactory,
        responseProcessor?: MessagingProfilesApiResponseProcessor
    ) {
        this.api = new ObservableMessagingProfilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a messaging profile
     * @param createMessagingProfileRequest New Messaging Profile object
     */
    public createMessagingProfile(createMessagingProfileRequest: CreateMessagingProfileRequest, _options?: Configuration): Promise<MessagingProfileResponse> {
        const result = this.api.createMessagingProfile(createMessagingProfileRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a messaging profile
     * @param id The id of the messaging profile to retrieve
     */
    public deleteMessagingProfile(id: string, _options?: Configuration): Promise<MessagingProfileResponse> {
        const result = this.api.deleteMessagingProfile(id, _options);
        return result.toPromise();
    }

    /**
     * List messaging profile metrics
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param id The id of the messaging profile(s) to retrieve
     * @param timeFrame The timeframe for which you\&#39;d like to retrieve metrics.
     */
    public listMessagingProfileMetrics(pageNumber?: number, pageSize?: number, id?: string, timeFrame?: '1h' | '3h' | '24h' | '3d' | '7d' | '30d', _options?: Configuration): Promise<ListMessagingProfileMetricsResponse> {
        const result = this.api.listMessagingProfileMetrics(pageNumber, pageSize, id, timeFrame, _options);
        return result.toPromise();
    }

    /**
     * List phone numbers associated with a messaging profile
     * @param id The id of the messaging profile to retrieve
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listMessagingProfilePhoneNumbers(id: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListMessagingProfilePhoneNumbersResponse> {
        const result = this.api.listMessagingProfilePhoneNumbers(id, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * List short codes associated with a messaging profile
     * @param id The id of the messaging profile to retrieve
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listMessagingProfileShortCodes(id: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListMessagingProfileShortCodesResponse> {
        const result = this.api.listMessagingProfileShortCodes(id, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * List messaging profiles
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterName Filter by name
     */
    public listMessagingProfiles(pageNumber?: number, pageSize?: number, filterName?: string, _options?: Configuration): Promise<ListMessagingProfilesResponse> {
        const result = this.api.listMessagingProfiles(pageNumber, pageSize, filterName, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a messaging profile
     * @param id The id of the messaging profile to retrieve
     */
    public retrieveMessagingProfile(id: string, _options?: Configuration): Promise<MessagingProfileResponse> {
        const result = this.api.retrieveMessagingProfile(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve messaging profile metrics
     * @param id The id of the messaging profile to retrieve
     * @param timeFrame The timeframe for which you\&#39;d like to retrieve metrics.
     */
    public retrieveMessagingProfileDetailedMetrics(id: string, timeFrame?: '1h' | '3h' | '24h' | '3d' | '7d' | '30d', _options?: Configuration): Promise<RetrieveMessagingProfileMetricsResponse> {
        const result = this.api.retrieveMessagingProfileDetailedMetrics(id, timeFrame, _options);
        return result.toPromise();
    }

    /**
     * Update a messaging profile
     * @param id The id of the messaging profile to retrieve
     * @param updateMessagingProfileRequest New Messaging Profile object
     */
    public updateMessagingProfile(id: string, updateMessagingProfileRequest: UpdateMessagingProfileRequest, _options?: Configuration): Promise<MessagingProfileResponse> {
        const result = this.api.updateMessagingProfile(id, updateMessagingProfileRequest, _options);
        return result.toPromise();
    }


}



import { ObservableMessagingTollfreeVerificationApi } from './ObservableAPI.ts';

import { MessagingTollfreeVerificationApiRequestFactory, MessagingTollfreeVerificationApiResponseProcessor} from "../apis/MessagingTollfreeVerificationApi.ts";
export class PromiseMessagingTollfreeVerificationApi {
    private api: ObservableMessagingTollfreeVerificationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MessagingTollfreeVerificationApiRequestFactory,
        responseProcessor?: MessagingTollfreeVerificationApiResponseProcessor
    ) {
        this.api = new ObservableMessagingTollfreeVerificationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a single verification request by its ID.
     * Get Verification Request
     * @param id 
     */
    public getVerificationRequest(id: string, _options?: Configuration): Promise<VerificationRequestStatus> {
        const result = this.api.getVerificationRequest(id, _options);
        return result.toPromise();
    }

    /**
     * Get a list of previously-submitted tollfree verification requests
     * List Verification Requests
     * @param page 
     * @param pageSize          Request this many records per page          This value is automatically clamped if the provided value is too large.         
     * @param dateStart 
     * @param dateEnd 
     * @param status 
     * @param phoneNumber 
     */
    public listVerificationRequests(page: number, pageSize: number, dateStart?: Date, dateEnd?: Date, status?: TFVerificationStatus, phoneNumber?: string, _options?: Configuration): Promise<PaginatedVerificationRequestStatus> {
        const result = this.api.listVerificationRequests(page, pageSize, dateStart, dateEnd, status, phoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Submit a new tollfree verification request
     * Submit Verification Request
     * @param tFVerificationRequest 
     */
    public submitVerificationRequest(tFVerificationRequest: TFVerificationRequest, _options?: Configuration): Promise<VerificationRequestEgress> {
        const result = this.api.submitVerificationRequest(tFVerificationRequest, _options);
        return result.toPromise();
    }

    /**
     * Update an existing tollfree verification request. This is particularly useful when there are pending customer actions to be taken.
     * Update Verification Request
     * @param id 
     * @param tFVerificationRequest 
     */
    public updateVerificationRequest(id: string, tFVerificationRequest: TFVerificationRequest, _options?: Configuration): Promise<VerificationRequestEgress> {
        const result = this.api.updateVerificationRequest(id, tFVerificationRequest, _options);
        return result.toPromise();
    }


}



import { ObservableMessagingTollfreeVerificationsApi } from './ObservableAPI.ts';

import { MessagingTollfreeVerificationsApiRequestFactory, MessagingTollfreeVerificationsApiResponseProcessor} from "../apis/MessagingTollfreeVerificationsApi.ts";
export class PromiseMessagingTollfreeVerificationsApi {
    private api: ObservableMessagingTollfreeVerificationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MessagingTollfreeVerificationsApiRequestFactory,
        responseProcessor?: MessagingTollfreeVerificationsApiResponseProcessor
    ) {
        this.api = new ObservableMessagingTollfreeVerificationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a verification request  A request may only be deleted when when the request is in the \"rejected\" state.  * `HTTP 200`: request successfully deleted * `HTTP 400`: request exists but can\'t be deleted (i.e. not rejected) * `HTTP 404`: request unknown or already deleted
     * Delete Verification Request
     * @param id 
     */
    public deleteVerificationRequestPublicApiV2RequestsIdDelete(id: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteVerificationRequestPublicApiV2RequestsIdDelete(id, _options);
        return result.toPromise();
    }


}



import { ObservableMessagingURLDomainsApi } from './ObservableAPI.ts';

import { MessagingURLDomainsApiRequestFactory, MessagingURLDomainsApiResponseProcessor} from "../apis/MessagingURLDomainsApi.ts";
export class PromiseMessagingURLDomainsApi {
    private api: ObservableMessagingURLDomainsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MessagingURLDomainsApiRequestFactory,
        responseProcessor?: MessagingURLDomainsApiResponseProcessor
    ) {
        this.api = new ObservableMessagingURLDomainsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List messaging URL domains
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listMessagingUrlDomains(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListMessagingProfileUrlDomainsResponse> {
        const result = this.api.listMessagingUrlDomains(pageNumber, pageSize, _options);
        return result.toPromise();
    }


}



import { ObservableMobileOperatorNetworksApi } from './ObservableAPI.ts';

import { MobileOperatorNetworksApiRequestFactory, MobileOperatorNetworksApiResponseProcessor} from "../apis/MobileOperatorNetworksApi.ts";
export class PromiseMobileOperatorNetworksApi {
    private api: ObservableMobileOperatorNetworksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MobileOperatorNetworksApiRequestFactory,
        responseProcessor?: MobileOperatorNetworksApiResponseProcessor
    ) {
        this.api = new ObservableMobileOperatorNetworksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Telnyx has a set of GSM mobile operators partners that are available through our mobile network roaming. This resource is entirely managed by Telnyx and may change over time. That means that this resource won\'t allow any write operations for it. Still, it\'s available so it can be used as a support resource that can be related to other resources or become a configuration option.
     * List mobile operator networks
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterNameStartsWith Filter by name starting with.
     * @param filterNameContains Filter by name containing match.
     * @param filterNameEndsWith Filter by name ending with.
     * @param filterCountryCode Filter by exact country_code.
     * @param filterMcc Filter by exact MCC.
     * @param filterMnc Filter by exact MNC.
     * @param filterTadig Filter by exact TADIG.
     */
    public mobileOperatorNetworksGet(pageNumber?: number, pageSize?: number, filterNameStartsWith?: string, filterNameContains?: string, filterNameEndsWith?: string, filterCountryCode?: string, filterMcc?: string, filterMnc?: string, filterTadig?: string, _options?: Configuration): Promise<MobileOperatorNetworksGet200Response> {
        const result = this.api.mobileOperatorNetworksGet(pageNumber, pageSize, filterNameStartsWith, filterNameContains, filterNameEndsWith, filterCountryCode, filterMcc, filterMnc, filterTadig, _options);
        return result.toPromise();
    }


}



import { ObservableNetworksApi } from './ObservableAPI.ts';

import { NetworksApiRequestFactory, NetworksApiResponseProcessor} from "../apis/NetworksApi.ts";
export class PromiseNetworksApi {
    private api: ObservableNetworksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NetworksApiRequestFactory,
        responseProcessor?: NetworksApiResponseProcessor
    ) {
        this.api = new ObservableNetworksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Network.
     * Create a Network
     * @param networkCreate 
     */
    public networkCreate(networkCreate: NetworkCreate, _options?: Configuration): Promise<NetworkCreate200Response> {
        const result = this.api.networkCreate(networkCreate, _options);
        return result.toPromise();
    }

    /**
     * Delete a Network.
     * Delete a Network
     * @param id Identifies the resource.
     */
    public networkDelete(id: string, _options?: Configuration): Promise<NetworkCreate200Response> {
        const result = this.api.networkDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a Network.
     * Retrieve a Network
     * @param id Identifies the resource.
     */
    public networkGet(id: string, _options?: Configuration): Promise<NetworkCreate200Response> {
        const result = this.api.networkGet(id, _options);
        return result.toPromise();
    }

    /**
     * List all Interfaces for a Network.
     * List all Interfaces for a Network.
     * @param id Identifies the resource.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterName The interface name to filter on.
     * @param filterType The interface type to filter on.
     * @param filterStatus The interface status to filter on.
     */
    public networkInterfaceList(id: string, pageNumber?: number, pageSize?: number, filterName?: string, filterType?: string, filterStatus?: InterfaceStatus, _options?: Configuration): Promise<NetworkInterfaceList200Response> {
        const result = this.api.networkInterfaceList(id, pageNumber, pageSize, filterName, filterType, filterStatus, _options);
        return result.toPromise();
    }

    /**
     * List all Networks.
     * List all Networks
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterName The network name to filter on.
     */
    public networkList(pageNumber?: number, pageSize?: number, filterName?: string, _options?: Configuration): Promise<NetworkList200Response> {
        const result = this.api.networkList(pageNumber, pageSize, filterName, _options);
        return result.toPromise();
    }

    /**
     * Update a Network.
     * Update a Network
     * @param id Identifies the resource.
     * @param networkCreate 
     */
    public networkUpdate(id: string, networkCreate: NetworkCreate, _options?: Configuration): Promise<NetworkCreate200Response> {
        const result = this.api.networkUpdate(id, networkCreate, _options);
        return result.toPromise();
    }


}



import { ObservableNotificationsApi } from './ObservableAPI.ts';

import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor} from "../apis/NotificationsApi.ts";
export class PromiseNotificationsApi {
    private api: ObservableNotificationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NotificationsApiRequestFactory,
        responseProcessor?: NotificationsApiResponseProcessor
    ) {
        this.api = new ObservableNotificationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a notification channel.
     * Create a notification channel
     * @param notificationChannel Add a Notification Channel
     */
    public createNotificationChannels(notificationChannel?: NotificationChannel, _options?: Configuration): Promise<CreateNotificationChannels200Response> {
        const result = this.api.createNotificationChannels(notificationChannel, _options);
        return result.toPromise();
    }

    /**
     * Create a notification profile.
     * Create a notification profile
     * @param notificationProfile Add a Notification Profile
     */
    public createNotificationProfile(notificationProfile?: NotificationProfile, _options?: Configuration): Promise<CreateNotificationProfile200Response> {
        const result = this.api.createNotificationProfile(notificationProfile, _options);
        return result.toPromise();
    }

    /**
     * Add a notification setting.
     * Add a Notification Setting
     * @param notificationSetting 
     */
    public createNotificationSetting(notificationSetting?: NotificationSetting, _options?: Configuration): Promise<CreateNotificationSetting200Response> {
        const result = this.api.createNotificationSetting(notificationSetting, _options);
        return result.toPromise();
    }

    /**
     * Delete a notification channel.
     * Delete a notification channel
     * @param id Identifies the resource.
     */
    public deleteNotificationChannel(id: string, _options?: Configuration): Promise<CreateNotificationChannels200Response> {
        const result = this.api.deleteNotificationChannel(id, _options);
        return result.toPromise();
    }

    /**
     * Delete a notification profile.
     * Delete a notification profile
     * @param id Identifies the resource.
     */
    public deleteNotificationProfile(id: string, _options?: Configuration): Promise<CreateNotificationProfile200Response> {
        const result = this.api.deleteNotificationProfile(id, _options);
        return result.toPromise();
    }

    /**
     * Delete a notification setting.
     * Delete a notification setting
     * @param id Identifies the resource.
     */
    public deleteNotificationSetting(id: string, _options?: Configuration): Promise<CreateNotificationSetting200Response> {
        const result = this.api.deleteNotificationSetting(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your notifications events.
     * List all Notifications Events
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public findNotificationsEvents(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<FindNotificationsEvents200Response> {
        const result = this.api.findNotificationsEvents(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your notifications events conditions.
     * List all Notifications Events Conditions
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterAssociatedRecordTypeEq Filter by the associated record type
     */
    public findNotificationsEventsConditions(pageNumber?: number, pageSize?: number, filterAssociatedRecordTypeEq?: 'account' | 'phone_number', _options?: Configuration): Promise<FindNotificationsEventsConditions200Response> {
        const result = this.api.findNotificationsEventsConditions(pageNumber, pageSize, filterAssociatedRecordTypeEq, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your notifications profiles.
     * List all Notifications Profiles
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public findNotificationsProfiles(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<FindNotificationsProfiles200Response> {
        const result = this.api.findNotificationsProfiles(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * List notification channels.
     * List notification channels
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterChannelTypeIdEq Filter by the id of a channel type
     */
    public listNotificationChannels(pageNumber?: number, pageSize?: number, filterChannelTypeIdEq?: 'webhook' | 'sms' | 'email' | 'voice', _options?: Configuration): Promise<ListNotificationChannels200Response> {
        const result = this.api.listNotificationChannels(pageNumber, pageSize, filterChannelTypeIdEq, _options);
        return result.toPromise();
    }

    /**
     * List notification settings.
     * List notification settings
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterNotificationProfileIdEq Filter by the id of a notification profile
     * @param filterNotificationChannelEq Filter by the id of a notification channel
     * @param filterNotificationEventConditionIdEq Filter by the id of a notification channel
     * @param filterAssociatedRecordTypeEq Filter by the associated record type
     * @param filterStatusEq The status of a notification setting
     */
    public listNotificationSettings(pageNumber?: number, pageSize?: number, filterNotificationProfileIdEq?: string, filterNotificationChannelEq?: string, filterNotificationEventConditionIdEq?: string, filterAssociatedRecordTypeEq?: 'account' | 'phone_number', filterStatusEq?: 'enabled' | 'enable-received' | 'enable-pending' | 'enable-submtited' | 'delete-received' | 'delete-pending' | 'delete-submitted' | 'deleted', _options?: Configuration): Promise<ListNotificationSettings200Response> {
        const result = this.api.listNotificationSettings(pageNumber, pageSize, filterNotificationProfileIdEq, filterNotificationChannelEq, filterNotificationEventConditionIdEq, filterAssociatedRecordTypeEq, filterStatusEq, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a notification channel.
     * Retrieve a notification channel
     * @param id Identifies the resource.
     */
    public retrieveNotificationChannel(id: string, _options?: Configuration): Promise<CreateNotificationChannels200Response> {
        const result = this.api.retrieveNotificationChannel(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a notification profile.
     * Retrieve a notification profile
     * @param id Identifies the resource.
     */
    public retrieveNotificationProfile(id: string, _options?: Configuration): Promise<CreateNotificationProfile200Response> {
        const result = this.api.retrieveNotificationProfile(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a notification setting.
     * Retrieve a notification setting
     * @param id Identifies the resource.
     */
    public retrieveNotificationSetting(id: string, _options?: Configuration): Promise<CreateNotificationSetting200Response> {
        const result = this.api.retrieveNotificationSetting(id, _options);
        return result.toPromise();
    }

    /**
     * Update a notification channel.
     * Update a notification channel
     * @param id Identifies the resource.
     * @param notificationChannel Update notification channel object
     */
    public updateNotificationChannel(id: string, notificationChannel: NotificationChannel, _options?: Configuration): Promise<CreateNotificationChannels200Response> {
        const result = this.api.updateNotificationChannel(id, notificationChannel, _options);
        return result.toPromise();
    }

    /**
     * Update a notification profile.
     * Update a notification profile
     * @param id Identifies the resource.
     * @param notificationProfile Update notification profile object
     */
    public updateNotificationProfile(id: string, notificationProfile: NotificationProfile, _options?: Configuration): Promise<CreateNotificationProfile200Response> {
        const result = this.api.updateNotificationProfile(id, notificationProfile, _options);
        return result.toPromise();
    }


}



import { ObservableNumberBackgroundJobsApi } from './ObservableAPI.ts';

import { NumberBackgroundJobsApiRequestFactory, NumberBackgroundJobsApiResponseProcessor} from "../apis/NumberBackgroundJobsApi.ts";
export class PromiseNumberBackgroundJobsApi {
    private api: ObservableNumberBackgroundJobsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NumberBackgroundJobsApiRequestFactory,
        responseProcessor?: NumberBackgroundJobsApiResponseProcessor
    ) {
        this.api = new ObservableNumberBackgroundJobsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new background job to delete a batch of numbers. At most one thousand numbers can be updated per API call.
     * Delete a batch of numbers
     * @param phoneNumbersJobDeletePhoneNumbersRequest 
     */
    public createPhoneNumbersJobDeletePhoneNumbers(phoneNumbersJobDeletePhoneNumbersRequest: PhoneNumbersJobDeletePhoneNumbersRequest, _options?: Configuration): Promise<PhoneNumbersJobDeletePhoneNumbers> {
        const result = this.api.createPhoneNumbersJobDeletePhoneNumbers(phoneNumbersJobDeletePhoneNumbersRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a background job to update the emergency settings of a collection of phone numbers. At most one thousand numbers can be updated per API call.
     * Update the emergency settings from a batch of numbers
     * @param phoneNumbersJobUpdateEmergencySettingsRequest 
     */
    public createPhoneNumbersJobUpdateEmergencySettings(phoneNumbersJobUpdateEmergencySettingsRequest: PhoneNumbersJobUpdateEmergencySettingsRequest, _options?: Configuration): Promise<PhoneNumbersEnableEmergency> {
        const result = this.api.createPhoneNumbersJobUpdateEmergencySettings(phoneNumbersJobUpdateEmergencySettingsRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a new background job to update a batch of numbers. At most one thousand numbers can be updated per API call. At least one of the updateable fields must be submitted.
     * Update a batch of numbers
     * @param phoneNumbersJobUpdatePhoneNumbersRequest 
     */
    public createPhoneNumbersJobUpdatePhoneNumber(phoneNumbersJobUpdatePhoneNumbersRequest: PhoneNumbersJobUpdatePhoneNumbersRequest, _options?: Configuration): Promise<PhoneNumbersJobUpdatePhoneNumbers> {
        const result = this.api.createPhoneNumbersJobUpdatePhoneNumber(phoneNumbersJobUpdatePhoneNumbersRequest, _options);
        return result.toPromise();
    }

    /**
     * Lists the phone numbers jobs
     * @param filterType Filter the phone number jobs by type.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param sort Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     */
    public listPhoneNumbersJobs(filterType?: 'update_emergency_settings' | 'delete_phone_numbers' | 'update_phone_numbers', pageNumber?: number, pageSize?: number, sort?: 'created_at', _options?: Configuration): Promise<ListPhoneNumbersBackgroundJobsResponse> {
        const result = this.api.listPhoneNumbersJobs(filterType, pageNumber, pageSize, sort, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a phone numbers job
     * @param id Identifies the Phone Numbers Job.
     */
    public retrievePhoneNumbersJob(id: string, _options?: Configuration): Promise<PhoneNumbersJob> {
        const result = this.api.retrievePhoneNumbersJob(id, _options);
        return result.toPromise();
    }


}



import { ObservableNumberBlockOrdersApi } from './ObservableAPI.ts';

import { NumberBlockOrdersApiRequestFactory, NumberBlockOrdersApiResponseProcessor} from "../apis/NumberBlockOrdersApi.ts";
export class PromiseNumberBlockOrdersApi {
    private api: ObservableNumberBlockOrdersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NumberBlockOrdersApiRequestFactory,
        responseProcessor?: NumberBlockOrdersApiResponseProcessor
    ) {
        this.api = new ObservableNumberBlockOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a phone number block order.
     * Create a number block order
     * @param createNumberBlockOrderRequest 
     */
    public createNumberBlockOrder(createNumberBlockOrderRequest: CreateNumberBlockOrderRequest, _options?: Configuration): Promise<NumberBlockOrderResponse> {
        const result = this.api.createNumberBlockOrder(createNumberBlockOrderRequest, _options);
        return result.toPromise();
    }

    /**
     * Get a paginated list of number block orders.
     * List number block orders
     * @param filterStatus Filter number block orders by status.
     * @param filterCreatedAtGt Filter number block orders later than this value.
     * @param filterCreatedAtLt Filter number block orders earlier than this value.
     * @param filterPhoneNumbersStartingNumber Filter number block  orders having these phone numbers.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listNumberBlockOrders(filterStatus?: string, filterCreatedAtGt?: string, filterCreatedAtLt?: string, filterPhoneNumbersStartingNumber?: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListNumberBlockOrdersResponse> {
        const result = this.api.listNumberBlockOrders(filterStatus, filterCreatedAtGt, filterCreatedAtLt, filterPhoneNumbersStartingNumber, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Get an existing phone number block order.
     * Retrieve a number block order
     * @param numberBlockOrderId The number block order ID.
     */
    public retrieveNumberBlockOrder(numberBlockOrderId: string, _options?: Configuration): Promise<NumberBlockOrderResponse> {
        const result = this.api.retrieveNumberBlockOrder(numberBlockOrderId, _options);
        return result.toPromise();
    }


}



import { ObservableNumberBlocksBackgroundJobsApi } from './ObservableAPI.ts';

import { NumberBlocksBackgroundJobsApiRequestFactory, NumberBlocksBackgroundJobsApiResponseProcessor} from "../apis/NumberBlocksBackgroundJobsApi.ts";
export class PromiseNumberBlocksBackgroundJobsApi {
    private api: ObservableNumberBlocksBackgroundJobsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NumberBlocksBackgroundJobsApiRequestFactory,
        responseProcessor?: NumberBlocksBackgroundJobsApiResponseProcessor
    ) {
        this.api = new ObservableNumberBlocksBackgroundJobsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new background job to delete all the phone numbers associated with the given block. We will only consider the phone number block as deleted after all phone numbers associated with it are removed, so multiple executions of this job may be necessary in case some of the phone numbers present errors during the deletion process.
     * Deletes all numbers associated with a phone number block
     * @param phoneNumberBlocksJobDeletePhoneNumberBlockRequest 
     */
    public createPhoneNumberBlocksJobDeletePhoneNumberBlock(phoneNumberBlocksJobDeletePhoneNumberBlockRequest: PhoneNumberBlocksJobDeletePhoneNumberBlockRequest, _options?: Configuration): Promise<PhoneNumberBlocksJobDeletePhoneNumberBlock> {
        const result = this.api.createPhoneNumberBlocksJobDeletePhoneNumberBlock(phoneNumberBlocksJobDeletePhoneNumberBlockRequest, _options);
        return result.toPromise();
    }

    /**
     * Lists the phone number blocks jobs
     * @param filterType Filter the phone number blocks jobs by type.
     * @param filterStatus Filter the phone number blocks jobs by status.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param sort Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     */
    public listPhoneNumberBlocksJobs(filterType?: 'delete_phone_number_block', filterStatus?: 'pending' | 'in_progress' | 'completed' | 'failed', pageNumber?: number, pageSize?: number, sort?: 'created_at', _options?: Configuration): Promise<ListPhoneNumberBlocksBackgroundJobsResponse> {
        const result = this.api.listPhoneNumberBlocksJobs(filterType, filterStatus, pageNumber, pageSize, sort, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a phone number blocks job
     * @param id Identifies the Phone Number Blocks Job.
     */
    public retrievePhoneNumberBlocksJob(id: string, _options?: Configuration): Promise<PhoneNumberBlocksJob> {
        const result = this.api.retrievePhoneNumberBlocksJob(id, _options);
        return result.toPromise();
    }


}



import { ObservableNumberConfigurationsApi } from './ObservableAPI.ts';

import { NumberConfigurationsApiRequestFactory, NumberConfigurationsApiResponseProcessor} from "../apis/NumberConfigurationsApi.ts";
export class PromiseNumberConfigurationsApi {
    private api: ObservableNumberConfigurationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NumberConfigurationsApiRequestFactory,
        responseProcessor?: NumberConfigurationsApiResponseProcessor
    ) {
        this.api = new ObservableNumberConfigurationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a phone number
     * @param id Identifies the resource.
     */
    public deletePhoneNumber(id: string, _options?: Configuration): Promise<PhoneNumberResponse1> {
        const result = this.api.deletePhoneNumber(id, _options);
        return result.toPromise();
    }

    /**
     * Enable emergency for a phone number
     * @param id Identifies the resource.
     * @param phoneNumberEnableEmergencyRequest 
     */
    public enableEmergencyPhoneNumber(id: string, phoneNumberEnableEmergencyRequest: PhoneNumberEnableEmergencyRequest, _options?: Configuration): Promise<PhoneNumberEnableEmergency> {
        const result = this.api.enableEmergencyPhoneNumber(id, phoneNumberEnableEmergencyRequest, _options);
        return result.toPromise();
    }

    /**
     * List phone numbers
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterTag Filter by phone number tags.
     * @param filterPhoneNumber Filter by phone number. Requires at least three digits.              Non-numerical characters will result in no values being returned.
     * @param filterStatus Filter by phone number status.
     * @param filterConnectionId Filter by connection_id.
     * @param filterVoiceConnectionNameContains Filter contains connection name. Requires at least three characters.
     * @param filterVoiceConnectionNameStartsWith Filter starts with connection name. Requires at least three characters.
     * @param filterVoiceConnectionNameEndsWith Filter ends with connection name. Requires at least three characters.
     * @param filterVoiceConnectionNameEq Filter by connection name.
     * @param filterUsagePaymentMethod Filter by usage_payment_method.
     * @param filterBillingGroupId Filter by the billing_group_id associated with phone numbers. To filter to only phone numbers that have no billing group associated them, set the value of this filter to the string \&#39;null\&#39;.
     * @param filterEmergencyAddressId Filter by the emergency_address_id associated with phone numbers. To filter only phone numbers that have no emergency address associated with them, set the value of this filter to the string \&#39;null\&#39;.
     * @param filterCustomerReference Filter numbers via the customer_reference set.
     * @param sort Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     */
    public listPhoneNumbers(pageNumber?: number, pageSize?: number, filterTag?: string, filterPhoneNumber?: string, filterStatus?: 'purchase_pending' | 'purchase_failed' | 'port_pending' | 'active' | 'deleted' | 'port_failed' | 'emergency_only' | 'ported_out' | 'port_out_pending', filterConnectionId?: string, filterVoiceConnectionNameContains?: string, filterVoiceConnectionNameStartsWith?: string, filterVoiceConnectionNameEndsWith?: string, filterVoiceConnectionNameEq?: string, filterUsagePaymentMethod?: 'pay-per-minute' | 'channel', filterBillingGroupId?: string, filterEmergencyAddressId?: string, filterCustomerReference?: string, sort?: 'purchased_at' | 'phone_number' | 'connection_name' | 'usage_payment_method', _options?: Configuration): Promise<ListPhoneNumbersResponse> {
        const result = this.api.listPhoneNumbers(pageNumber, pageSize, filterTag, filterPhoneNumber, filterStatus, filterConnectionId, filterVoiceConnectionNameContains, filterVoiceConnectionNameStartsWith, filterVoiceConnectionNameEndsWith, filterVoiceConnectionNameEq, filterUsagePaymentMethod, filterBillingGroupId, filterEmergencyAddressId, filterCustomerReference, sort, _options);
        return result.toPromise();
    }

    /**
     * List phone numbers with messaging settings
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listPhoneNumbersWithMessagingSettings(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListMessagingSettingsResponse> {
        const result = this.api.listPhoneNumbersWithMessagingSettings(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * List phone numbers with voice settings
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterPhoneNumber Filter by phone number. Requires at least three digits.              Non-numerical characters will result in no values being returned.
     * @param filterConnectionNameContains Filter contains connection name. Requires at least three characters.
     * @param filterCustomerReference Filter numbers via the customer_reference set.
     * @param filterUsagePaymentMethod Filter by usage_payment_method.
     * @param sort Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     */
    public listPhoneNumbersWithVoiceSettings(pageNumber?: number, pageSize?: number, filterPhoneNumber?: string, filterConnectionNameContains?: string, filterCustomerReference?: string, filterUsagePaymentMethod?: 'pay-per-minute' | 'channel', sort?: 'purchased_at' | 'phone_number' | 'connection_name' | 'usage_payment_method', _options?: Configuration): Promise<ListPhoneNumbersWithVoiceSettingsResponse> {
        const result = this.api.listPhoneNumbersWithVoiceSettings(pageNumber, pageSize, filterPhoneNumber, filterConnectionNameContains, filterCustomerReference, filterUsagePaymentMethod, sort, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a phone number
     * @param id Identifies the resource.
     */
    public retrievePhoneNumber(id: string, _options?: Configuration): Promise<PhoneNumberResponse> {
        const result = this.api.retrievePhoneNumber(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a phone number with messaging settings
     * @param id Identifies the type of resource.
     */
    public retrievePhoneNumberWithMessagingSettings(id: string, _options?: Configuration): Promise<RetrieveMessagingSettingsResponse> {
        const result = this.api.retrievePhoneNumberWithMessagingSettings(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a phone number with voice settings
     * @param id Identifies the resource.
     */
    public retrievePhoneNumberWithVoiceSettings(id: string, _options?: Configuration): Promise<RetrievePhoneNumberVoiceResponse> {
        const result = this.api.retrievePhoneNumberWithVoiceSettings(id, _options);
        return result.toPromise();
    }

    /**
     * Update a phone number
     * @param id Identifies the resource.
     * @param updatePhoneNumberRequest Updated settings for the phone number.
     */
    public updatePhoneNumber(id: string, updatePhoneNumberRequest: UpdatePhoneNumberRequest, _options?: Configuration): Promise<PhoneNumberResponse> {
        const result = this.api.updatePhoneNumber(id, updatePhoneNumberRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a phone number with messaging settings
     * @param id Identifies the type of resource.
     * @param updatePhoneNumberMessagingSettingsRequest Updated messaging settings for the phone number
     */
    public updatePhoneNumberWithMessagingSettings(id: string, updatePhoneNumberMessagingSettingsRequest: UpdatePhoneNumberMessagingSettingsRequest, _options?: Configuration): Promise<RetrieveMessagingSettingsResponse> {
        const result = this.api.updatePhoneNumberWithMessagingSettings(id, updatePhoneNumberMessagingSettingsRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a phone number with voice settings
     * @param id Identifies the resource.
     * @param updatePhoneNumberVoiceSettingsRequest Updated voice settings for the phone number.
     */
    public updatePhoneNumberWithVoiceSettings(id: string, updatePhoneNumberVoiceSettingsRequest: UpdatePhoneNumberVoiceSettingsRequest, _options?: Configuration): Promise<RetrievePhoneNumberVoiceResponse> {
        const result = this.api.updatePhoneNumberWithVoiceSettings(id, updatePhoneNumberVoiceSettingsRequest, _options);
        return result.toPromise();
    }


}



import { ObservableNumberLookupApi } from './ObservableAPI.ts';

import { NumberLookupApiRequestFactory, NumberLookupApiResponseProcessor} from "../apis/NumberLookupApi.ts";
export class PromiseNumberLookupApi {
    private api: ObservableNumberLookupApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NumberLookupApiRequestFactory,
        responseProcessor?: NumberLookupApiResponseProcessor
    ) {
        this.api = new ObservableNumberLookupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns information about the provided phone number.
     * Lookup phone number data
     * @param phoneNumber The phone number to be looked up
     * @param type Specifies the type of number lookup to be performed
     */
    public numberLookup(phoneNumber: string, type?: 'carrier' | 'caller-name', _options?: Configuration): Promise<NumberLookupResponse> {
        const result = this.api.numberLookup(phoneNumber, type, _options);
        return result.toPromise();
    }


}



import { ObservableNumberOrderDocumentsApi } from './ObservableAPI.ts';

import { NumberOrderDocumentsApiRequestFactory, NumberOrderDocumentsApiResponseProcessor} from "../apis/NumberOrderDocumentsApi.ts";
export class PromiseNumberOrderDocumentsApi {
    private api: ObservableNumberOrderDocumentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NumberOrderDocumentsApiRequestFactory,
        responseProcessor?: NumberOrderDocumentsApiResponseProcessor
    ) {
        this.api = new ObservableNumberOrderDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload a phone number order document.
     * Create a number order document
     * @param createNumberOrderDocumentRequest 
     */
    public createNumberOrderDocument(createNumberOrderDocumentRequest: CreateNumberOrderDocumentRequest, _options?: Configuration): Promise<NumberOrderDocumentResponse> {
        const result = this.api.createNumberOrderDocument(createNumberOrderDocumentRequest, _options);
        return result.toPromise();
    }

    /**
     * Gets a paginated list of number order documents.
     * List number order documents
     * @param filterRequirementId Filter number order documents by &#x60;requirement_id&#x60;.
     * @param filterCreatedAtGt Filter number order documents after this datetime.
     * @param filterCreatedAtLt Filter number order documents from before this datetime.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listNumberOrderDocuments(filterRequirementId?: string, filterCreatedAtGt?: string, filterCreatedAtLt?: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListNumberOrderDocumentsResponse> {
        const result = this.api.listNumberOrderDocuments(filterRequirementId, filterCreatedAtGt, filterCreatedAtLt, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Gets a single number order document.
     * Retrieve a number order document
     * @param numberOrderDocumentId The number order document ID.
     */
    public retrieveNumberOrderDocument(numberOrderDocumentId: string, _options?: Configuration): Promise<NumberOrderDocumentResponse> {
        const result = this.api.retrieveNumberOrderDocument(numberOrderDocumentId, _options);
        return result.toPromise();
    }

    /**
     * Updates a number order document.
     * Update a number order document
     * @param numberOrderDocumentId The number order document ID.
     * @param updateNumberOrderDocumentRequest 
     */
    public updateNumberOrderDocument(numberOrderDocumentId: string, updateNumberOrderDocumentRequest: UpdateNumberOrderDocumentRequest, _options?: Configuration): Promise<NumberOrderDocumentResponse> {
        const result = this.api.updateNumberOrderDocument(numberOrderDocumentId, updateNumberOrderDocumentRequest, _options);
        return result.toPromise();
    }


}



import { ObservableNumberOrdersApi } from './ObservableAPI.ts';

import { NumberOrdersApiRequestFactory, NumberOrdersApiResponseProcessor} from "../apis/NumberOrdersApi.ts";
export class PromiseNumberOrdersApi {
    private api: ObservableNumberOrdersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NumberOrdersApiRequestFactory,
        responseProcessor?: NumberOrdersApiResponseProcessor
    ) {
        this.api = new ObservableNumberOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a comment
     * @param comment 
     */
    public createComment(comment: Comment, _options?: Configuration): Promise<CreateComment200Response> {
        const result = this.api.createComment(comment, _options);
        return result.toPromise();
    }

    /**
     * Creates a phone number order.
     * Create a number order
     * @param createNumberOrderRequest 
     */
    public createNumberOrder(createNumberOrderRequest: CreateNumberOrderRequest, _options?: Configuration): Promise<NumberOrderResponse> {
        const result = this.api.createNumberOrder(createNumberOrderRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieve all comments
     * @param filterCommentRecordType Record type that the comment relates to i.e number_order, sub_number_order or number_order_phone_number
     * @param filterCommentRecordId ID of the record the comments relate to
     */
    public listComments(filterCommentRecordType: string, filterCommentRecordId: string, _options?: Configuration): Promise<ListComments200Response> {
        const result = this.api.listComments(filterCommentRecordType, filterCommentRecordId, _options);
        return result.toPromise();
    }

    /**
     * Get a paginated list of number orders.
     * List number orders
     * @param filterStatus Filter number orders by status.
     * @param filterCreatedAtGt Filter number orders later than this value.
     * @param filterCreatedAtLt Filter number orders earlier than this value.
     * @param filterPhoneNumbersCount Filter number order with this amount of numbers
     * @param filterCustomerReference Filter number orders via the customer reference set.
     * @param filterRequirementsMet Filter number orders by requirements met.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listNumberOrders(filterStatus?: string, filterCreatedAtGt?: string, filterCreatedAtLt?: string, filterPhoneNumbersCount?: string, filterCustomerReference?: string, filterRequirementsMet?: boolean, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListNumberOrdersResponse> {
        const result = this.api.listNumberOrders(filterStatus, filterCreatedAtGt, filterCreatedAtLt, filterPhoneNumbersCount, filterCustomerReference, filterRequirementsMet, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Retrieve regulartory requirements
     * @param filterPhoneNumber Record type phone number/ phone numbers
     */
    public listRegulartoryRequirements(filterPhoneNumber: string, _options?: Configuration): Promise<ListRegulartoryRequirements200Response> {
        const result = this.api.listRegulartoryRequirements(filterPhoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Get a paginated list of sub number orders.
     * List sub number orders
     * @param filterUserId User ID of the user who owns the sub number order
     * @param filterOrderRequestId ID of the number order the sub number order belongs to
     * @param filterCountryCode ISO alpha-2 country code.
     * @param filterPhoneNumberType Phone Number Type
     * @param filterPhoneNumbersCount Amount of numbers in the sub number order
     */
    public listSubNumberOrders(filterUserId?: string, filterOrderRequestId?: string, filterCountryCode?: string, filterPhoneNumberType?: string, filterPhoneNumbersCount?: number, _options?: Configuration): Promise<ListSubNumberOrdersResponse> {
        const result = this.api.listSubNumberOrders(filterUserId, filterOrderRequestId, filterCountryCode, filterPhoneNumberType, filterPhoneNumbersCount, _options);
        return result.toPromise();
    }

    /**
     * Mark a comment as read
     * @param id The comment ID.
     */
    public markCommentRead(id: string, _options?: Configuration): Promise<MarkCommentRead200Response> {
        const result = this.api.markCommentRead(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a comment
     * @param id The comment ID.
     */
    public retrieveComment(id: string, _options?: Configuration): Promise<CreateComment200Response> {
        const result = this.api.retrieveComment(id, _options);
        return result.toPromise();
    }

    /**
     * Get an existing phone number order.
     * Retrieve a number order
     * @param numberOrderId The number order ID.
     */
    public retrieveNumberOrder(numberOrderId: string, _options?: Configuration): Promise<NumberOrderResponse> {
        const result = this.api.retrieveNumberOrder(numberOrderId, _options);
        return result.toPromise();
    }

    /**
     * Get an existing number order phone number.
     * Retrieve a number order phone number.
     * @param numberOrderPhoneNumberId The number order phone number ID.
     */
    public retrieveNumberOrderPhoneNumber(numberOrderPhoneNumberId: string, _options?: Configuration): Promise<NumberOrderPhoneNumberResponse> {
        const result = this.api.retrieveNumberOrderPhoneNumber(numberOrderPhoneNumberId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of phone numbers associated to orders.
     * Retrieve a list of phone numbers associated to orders
     */
    public retrieveNumberOrderPhoneNumbers(_options?: Configuration): Promise<ListNumberOrderPhoneNumbersResponse> {
        const result = this.api.retrieveNumberOrderPhoneNumbers(_options);
        return result.toPromise();
    }

    /**
     * Get an existing sub number order.
     * Retrieve a sub number order
     * @param subNumberOrderId The sub number order ID.
     * @param filterIncludePhoneNumbers Include the first 50 phone number objects in the results
     */
    public retrieveSubNumberOrder(subNumberOrderId: string, filterIncludePhoneNumbers?: boolean, _options?: Configuration): Promise<SubNumberOrderResponse> {
        const result = this.api.retrieveSubNumberOrder(subNumberOrderId, filterIncludePhoneNumbers, _options);
        return result.toPromise();
    }

    /**
     * Updates a phone number order.
     * Update a number order
     * @param numberOrderId The number order ID.
     * @param updateNumberOrderRequest 
     */
    public updateNumberOrder(numberOrderId: string, updateNumberOrderRequest: UpdateNumberOrderRequest, _options?: Configuration): Promise<NumberOrderResponse> {
        const result = this.api.updateNumberOrder(numberOrderId, updateNumberOrderRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a number order phone number.
     * Update a number order phone number.
     * @param numberOrderPhoneNumberId The number order phone number ID.
     * @param updateNumberOrderPhoneNumberRequest 
     */
    public updateNumberOrderPhoneNumber(numberOrderPhoneNumberId: string, updateNumberOrderPhoneNumberRequest: UpdateNumberOrderPhoneNumberRequest, _options?: Configuration): Promise<NumberOrderPhoneNumberResponse> {
        const result = this.api.updateNumberOrderPhoneNumber(numberOrderPhoneNumberId, updateNumberOrderPhoneNumberRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a sub number order.
     * Update a sub number order
     * @param subNumberOrderId The sub number order ID.
     * @param updateSubNumberOrderRequest 
     */
    public updateSubNumberOrder(subNumberOrderId: string, updateSubNumberOrderRequest: UpdateSubNumberOrderRequest, _options?: Configuration): Promise<SubNumberOrderResponse> {
        const result = this.api.updateSubNumberOrder(subNumberOrderId, updateSubNumberOrderRequest, _options);
        return result.toPromise();
    }


}



import { ObservableNumberPortoutApi } from './ObservableAPI.ts';

import { NumberPortoutApiRequestFactory, NumberPortoutApiResponseProcessor} from "../apis/NumberPortoutApi.ts";
export class PromiseNumberPortoutApi {
    private api: ObservableNumberPortoutApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NumberPortoutApiRequestFactory,
        responseProcessor?: NumberPortoutApiResponseProcessor
    ) {
        this.api = new ObservableNumberPortoutApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of comments for a portout request.
     * List all comments for a portout request
     * @param id Portout id
     */
    public findPortoutComments(id: string, _options?: Configuration): Promise<FindPortoutComments200Response> {
        const result = this.api.findPortoutComments(id, _options);
        return result.toPromise();
    }

    /**
     * Returns the portout request based on the ID provided
     * Get a portout request
     * @param id Portout id
     */
    public findPortoutRequest(id: string, _options?: Configuration): Promise<FindPortoutRequest200Response> {
        const result = this.api.findPortoutRequest(id, _options);
        return result.toPromise();
    }

    /**
     * List every supporting documents for a portout request.
     * List supporting documents on a portout request
     * @param id Portout id
     */
    public getPortRequestSupportingDocuments(id: string, _options?: Configuration): Promise<GetPortRequestSupportingDocuments201Response> {
        const result = this.api.getPortRequestSupportingDocuments(id, _options);
        return result.toPromise();
    }

    /**
     * Returns the portout requests according to filters
     * List portout requests
     * @param filterCarrierName Filter by new carrier name.
     * @param filterSpid Filter by new carrier spid.
     * @param filterStatus Filter by portout status.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listPortoutRequest(filterCarrierName?: string, filterSpid?: string, filterStatus?: 'pending' | 'authorized' | 'ported' | 'rejected' | 'rejected-pending' | 'canceled', pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListPortoutRequest200Response> {
        const result = this.api.listPortoutRequest(filterCarrierName, filterSpid, filterStatus, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Creates a comment on a portout request.
     * Create a comment on a portout request
     * @param id Portout id
     * @param postPortRequestCommentRequest 
     */
    public postPortRequestComment(id: string, postPortRequestCommentRequest: PostPortRequestCommentRequest, _options?: Configuration): Promise<PostPortRequestComment201Response> {
        const result = this.api.postPortRequestComment(id, postPortRequestCommentRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a list of supporting documents on a portout request.
     * Create a list of supporting documents on a portout request
     * @param id Portout id
     * @param postPortRequestSupportingDocumentsRequest 
     */
    public postPortRequestSupportingDocuments(id: string, postPortRequestSupportingDocumentsRequest: PostPortRequestSupportingDocumentsRequest, _options?: Configuration): Promise<GetPortRequestSupportingDocuments201Response> {
        const result = this.api.postPortRequestSupportingDocuments(id, postPortRequestSupportingDocumentsRequest, _options);
        return result.toPromise();
    }

    /**
     * Authorize or reject portout request
     * Update Status
     * @param id Portout id
     * @param status Updated portout status
     * @param updatePortoutRequestRequest 
     */
    public updatePortoutRequest(id: string, status: 'authorized' | 'rejected-pending', updatePortoutRequestRequest: UpdatePortoutRequestRequest, _options?: Configuration): Promise<FindPortoutRequest200Response> {
        const result = this.api.updatePortoutRequest(id, status, updatePortoutRequestRequest, _options);
        return result.toPromise();
    }


}



import { ObservableNumberReservationsApi } from './ObservableAPI.ts';

import { NumberReservationsApiRequestFactory, NumberReservationsApiResponseProcessor} from "../apis/NumberReservationsApi.ts";
export class PromiseNumberReservationsApi {
    private api: ObservableNumberReservationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NumberReservationsApiRequestFactory,
        responseProcessor?: NumberReservationsApiResponseProcessor
    ) {
        this.api = new ObservableNumberReservationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Phone Number Reservation for multiple numbers.
     * Create a number reservation
     * @param createNumberReservationRequest 
     */
    public createNumberReservation(createNumberReservationRequest: CreateNumberReservationRequest, _options?: Configuration): Promise<NumberReservationResponse> {
        const result = this.api.createNumberReservation(createNumberReservationRequest, _options);
        return result.toPromise();
    }

    /**
     * Extends reservation expiry time on all phone numbers.
     * Extend a number reservation
     * @param numberReservationId The number reservation ID.
     */
    public extendNumberReservationExpiryTime(numberReservationId: string, _options?: Configuration): Promise<NumberReservationResponse> {
        const result = this.api.extendNumberReservationExpiryTime(numberReservationId, _options);
        return result.toPromise();
    }

    /**
     * Gets a paginated list of phone number reservations.
     * List number reservations
     * @param filterStatus Filter number reservations by status.
     * @param filterCreatedAtGt Filter number reservations later than this value.
     * @param filterCreatedAtLt Filter number reservations earlier than this value.
     * @param filterPhoneNumbersPhoneNumber Filter number reservations having these phone numbers.
     * @param filterCustomerReference Filter number reservations via the customer reference set.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listNumberReservations(filterStatus?: string, filterCreatedAtGt?: string, filterCreatedAtLt?: string, filterPhoneNumbersPhoneNumber?: string, filterCustomerReference?: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListNumberReservationsResponse> {
        const result = this.api.listNumberReservations(filterStatus, filterCreatedAtGt, filterCreatedAtLt, filterPhoneNumbersPhoneNumber, filterCustomerReference, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Gets a single phone number reservation.
     * Retrieve a number reservation
     * @param numberReservationId The number reservation ID.
     */
    public retrieveNumberReservation(numberReservationId: string, _options?: Configuration): Promise<NumberReservationResponse> {
        const result = this.api.retrieveNumberReservation(numberReservationId, _options);
        return result.toPromise();
    }


}



import { ObservableNumberSearchApi } from './ObservableAPI.ts';

import { NumberSearchApiRequestFactory, NumberSearchApiResponseProcessor} from "../apis/NumberSearchApi.ts";
export class PromiseNumberSearchApi {
    private api: ObservableNumberSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NumberSearchApiRequestFactory,
        responseProcessor?: NumberSearchApiResponseProcessor
    ) {
        this.api = new ObservableNumberSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List available phone number blocks
     * @param filterPhoneNumberStartsWith Filter number blocks that start with a pattern (meant to be used after &#x60;national_destination_code&#x60; filter has been set).
     * @param filterPhoneNumberEndsWith Filter numbers ending with a pattern.
     * @param filterPhoneNumberContains Filter numbers containing a pattern.
     * @param filterLocality Filter phone numbers by city.
     * @param filterAdministrativeArea Filter phone numbers by US state/CA province.
     * @param filterCountryCode Filter phone numbers by ISO alpha-2 country code.
     * @param filterNationalDestinationCode Filter by the national destination code of the number. This filter is only applicable to North American numbers.
     * @param filterRateCenter Filter phone numbers by NANP rate center. This filter is only applicable to North American numbers.
     * @param filterNumberType Filter phone numbers by number type.
     * @param filterFeatures Filter if the phone number should be used for voice, fax, mms, sms, emergency.
     * @param filterMinimumBlockSize Filter number blocks by minimum blocks size
     * @param filterLimit Limits the number of results.
     */
    public listAvailablePhoneNumberBlocks(filterPhoneNumberStartsWith?: string, filterPhoneNumberEndsWith?: string, filterPhoneNumberContains?: string, filterLocality?: string, filterAdministrativeArea?: string, filterCountryCode?: string, filterNationalDestinationCode?: string, filterRateCenter?: string, filterNumberType?: 'toll-free', filterFeatures?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>, filterMinimumBlockSize?: number, filterLimit?: number, _options?: Configuration): Promise<ListAvailablePhoneNumbersBlocksResponse> {
        const result = this.api.listAvailablePhoneNumberBlocks(filterPhoneNumberStartsWith, filterPhoneNumberEndsWith, filterPhoneNumberContains, filterLocality, filterAdministrativeArea, filterCountryCode, filterNationalDestinationCode, filterRateCenter, filterNumberType, filterFeatures, filterMinimumBlockSize, filterLimit, _options);
        return result.toPromise();
    }

    /**
     * List available phone numbers
     * @param filterPhoneNumberStartsWith Filter numbers starting with a pattern (exclude NDC from start of this filter if used with &#x60;national_destination_code&#x60; filter).
     * @param filterPhoneNumberEndsWith Filter numbers ending with a pattern (max length of 4 digits if used with &#x60;national_destination_code&#x60; filter).
     * @param filterPhoneNumberContains Filter numbers containing a pattern (must be used with &#x60;national_destination_code&#x60; filter and only searches within last 4 digits).
     * @param filterLocality Filter phone numbers by city.
     * @param filterAdministrativeArea Filter phone numbers by US state/CA province.
     * @param filterCountryCode Filter phone numbers by ISO alpha-2 country code.
     * @param filterNationalDestinationCode Filter by the national destination code of the number. This filter is only applicable to North American numbers.
     * @param filterRateCenter Filter phone numbers by NANP rate center. This filter is only applicable to North American numbers.
     * @param filterPhoneNumberType Filter phone numbers by number type.
     * @param filterFeatures Filter if the phone number should be used for voice, fax, mms, sms, emergency.
     * @param filterLimit Limits the number of results.
     * @param filterBestEffort Filter to determine if best effort results should be included. Only available in NANPA countries.
     * @param filterQuickship Filter to exclude phone numbers that need additional time after to purchase to receive phone calls. Only available for toll-free numbers.
     * @param filterReservable Filter to exclude phone numbers that cannot be reserved before purchase.
     * @param filterExcludeHeldNumbers Filter to exclude phone numbers that are currently on hold for your account.
     */
    public listAvailablePhoneNumbers(filterPhoneNumberStartsWith?: string, filterPhoneNumberEndsWith?: string, filterPhoneNumberContains?: string, filterLocality?: string, filterAdministrativeArea?: string, filterCountryCode?: string, filterNationalDestinationCode?: string, filterRateCenter?: string, filterPhoneNumberType?: 'local' | 'toll_free' | 'mobile' | 'national' | 'shared_cost' | 'landline', filterFeatures?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>, filterLimit?: number, filterBestEffort?: boolean, filterQuickship?: boolean, filterReservable?: boolean, filterExcludeHeldNumbers?: boolean, _options?: Configuration): Promise<ListAvailablePhoneNumbersResponse> {
        const result = this.api.listAvailablePhoneNumbers(filterPhoneNumberStartsWith, filterPhoneNumberEndsWith, filterPhoneNumberContains, filterLocality, filterAdministrativeArea, filterCountryCode, filterNationalDestinationCode, filterRateCenter, filterPhoneNumberType, filterFeatures, filterLimit, filterBestEffort, filterQuickship, filterReservable, filterExcludeHeldNumbers, _options);
        return result.toPromise();
    }


}



import { ObservableOTAUpdatesApi } from './ObservableAPI.ts';

import { OTAUpdatesApiRequestFactory, OTAUpdatesApiResponseProcessor} from "../apis/OTAUpdatesApi.ts";
export class PromiseOTAUpdatesApi {
    private api: ObservableOTAUpdatesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OTAUpdatesApiRequestFactory,
        responseProcessor?: OTAUpdatesApiResponseProcessor
    ) {
        this.api = new ObservableOTAUpdatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API returns the details of an Over the Air (OTA) update.
     * Get OTA update
     * @param id Identifies the resource.
     */
    public oTAUpdateGET(id: string, _options?: Configuration): Promise<OTAUpdateGET200Response> {
        const result = this.api.oTAUpdateGET(id, _options);
        return result.toPromise();
    }

    /**
     * List OTA updates
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterStatus Filter by a specific status of the resource\&#39;s lifecycle.
     * @param filterSimCardId The SIM card identification UUID.
     * @param filterType Filter by type.
     */
    public oTAUpdatesList(pageNumber?: number, pageSize?: number, filterStatus?: 'in-progress' | 'completed' | 'failed', filterSimCardId?: string, filterType?: 'sim_card_network_preferences', _options?: Configuration): Promise<OTAUpdatesList200Response> {
        const result = this.api.oTAUpdatesList(pageNumber, pageSize, filterStatus, filterSimCardId, filterType, _options);
        return result.toPromise();
    }


}



import { ObservableObjectApi } from './ObservableAPI.ts';

import { ObjectApiRequestFactory, ObjectApiResponseProcessor} from "../apis/ObjectApi.ts";
export class PromiseObjectApi {
    private api: ObservableObjectApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ObjectApiRequestFactory,
        responseProcessor?: ObjectApiResponseProcessor
    ) {
        this.api = new ObservableObjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an object from a given bucket.
     * DeleteObject
     * @param bucketName The bucket name.
     * @param objectName The object name.
     */
    public deleteObject(bucketName: string, objectName: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteObject(bucketName, objectName, _options);
        return result.toPromise();
    }

    /**
     * Deletes one or multiple objects from a given bucket.
     * DeleteObjects
     * @param bucketName The bucket name.
     * @param _delete 
     * @param deleteObjectsRequestInner 
     */
    public deleteObjects(bucketName: string, _delete: boolean, deleteObjectsRequestInner: Array<DeleteObjectsRequestInner>, _options?: Configuration): Promise<any> {
        const result = this.api.deleteObjects(bucketName, _delete, deleteObjectsRequestInner, _options);
        return result.toPromise();
    }

    /**
     * Retrieves an object from a given bucket.
     * GetObject
     * @param bucketName The bucket name.
     * @param objectName The object name.
     * @param uploadId 
     */
    public getObject(bucketName: string, objectName: string, uploadId?: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.getObject(bucketName, objectName, uploadId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves metadata from an object without returning the object itself.
     * HeadObject
     * @param bucketName The bucket name.
     * @param objectName The object name.
     */
    public headObject(bucketName: string, objectName: string, _options?: Configuration): Promise<void> {
        const result = this.api.headObject(bucketName, objectName, _options);
        return result.toPromise();
    }

    /**
     * List all objects contained in a given bucket.
     * ListObjectsV2
     * @param bucketName The name of the bucket.
     * @param listType 
     */
    public listObjectsV2(bucketName: string, listType?: 2, _options?: Configuration): Promise<ListObjectsResponse> {
        const result = this.api.listObjectsV2(bucketName, listType, _options);
        return result.toPromise();
    }

    /**
     * Add an object to a bucket.
     * PutObject
     * @param bucketName The bucket name.
     * @param objectName The object name.
     * @param body 
     * @param contentType 
     * @param partNumber 
     * @param uploadId 
     */
    public putObject(bucketName: string, objectName: string, body: HttpFile, contentType?: string, partNumber?: string, uploadId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.putObject(bucketName, objectName, body, contentType, partNumber, uploadId, _options);
        return result.toPromise();
    }


}



import { ObservableOutboundVoiceProfilesApi } from './ObservableAPI.ts';

import { OutboundVoiceProfilesApiRequestFactory, OutboundVoiceProfilesApiResponseProcessor} from "../apis/OutboundVoiceProfilesApi.ts";
export class PromiseOutboundVoiceProfilesApi {
    private api: ObservableOutboundVoiceProfilesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OutboundVoiceProfilesApiRequestFactory,
        responseProcessor?: OutboundVoiceProfilesApiResponseProcessor
    ) {
        this.api = new ObservableOutboundVoiceProfilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an outbound voice profile.
     * Create an outbound voice profile
     * @param createOutboundVoiceProfileRequest Parameters that can be defined when creating an outbound voice profile
     */
    public createOutboundVoiceProfile(createOutboundVoiceProfileRequest: CreateOutboundVoiceProfileRequest, _options?: Configuration): Promise<OutboundVoiceProfileResponse> {
        const result = this.api.createOutboundVoiceProfile(createOutboundVoiceProfileRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes an existing outbound voice profile.
     * Delete an outbound voice profile
     * @param id Identifies the resource.
     */
    public deleteOutboundVoiceProfile(id: string, _options?: Configuration): Promise<OutboundVoiceProfileResponse> {
        const result = this.api.deleteOutboundVoiceProfile(id, _options);
        return result.toPromise();
    }

    /**
     * Get all outbound voice profiles belonging to the user that match the given filters.
     * Get all outbound voice profiles
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterNameContains Optional filter on outbound voice profile name.
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt;-&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;name&lt;/code&gt;: sorts the result by the     &lt;code&gt;name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-name&lt;/code&gt;: sorts the result by the     &lt;code&gt;name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt;
     */
    public listOutboundVoiceProfiles(pageNumber?: number, pageSize?: number, filterNameContains?: string, sort?: 'enabled' | '-enabled' | 'created_at' | '-created_at' | 'name' | '-name' | 'service_plan' | '-service_plan' | 'traffic_type' | '-traffic_type' | 'usage_payment_method' | '-usage_payment_method', _options?: Configuration): Promise<ListOutboundVoiceProfilesResponse> {
        const result = this.api.listOutboundVoiceProfiles(pageNumber, pageSize, filterNameContains, sort, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing outbound voice profile.
     * Retrieve an outbound voice profile
     * @param id Identifies the resource.
     */
    public retrieveOutboundVoiceProfile(id: string, _options?: Configuration): Promise<OutboundVoiceProfileResponse> {
        const result = this.api.retrieveOutboundVoiceProfile(id, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing outbound voice profile.
     * Updates an existing outbound voice profile.
     * @param id Identifies the resource.
     * @param updateOutboundVoiceProfileRequest Parameters that can be updated on an outbound voice profile
     */
    public updateOutboundVoiceProfile(id: string, updateOutboundVoiceProfileRequest: UpdateOutboundVoiceProfileRequest, _options?: Configuration): Promise<OutboundVoiceProfileResponse> {
        const result = this.api.updateOutboundVoiceProfile(id, updateOutboundVoiceProfileRequest, _options);
        return result.toPromise();
    }


}



import { ObservablePhoneNumberCampaignsApi } from './ObservableAPI.ts';

import { PhoneNumberCampaignsApiRequestFactory, PhoneNumberCampaignsApiResponseProcessor} from "../apis/PhoneNumberCampaignsApi.ts";
export class PromisePhoneNumberCampaignsApi {
    private api: ObservablePhoneNumberCampaignsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PhoneNumberCampaignsApiRequestFactory,
        responseProcessor?: PhoneNumberCampaignsApiResponseProcessor
    ) {
        this.api = new ObservablePhoneNumberCampaignsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to assign a different campaign to a supplied `phoneNumber`.
     * Create New Phone Number Campaign
     * @param phoneNumber 
     * @param phoneNumberCampaignCreate 
     */
    public createNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut(phoneNumber: string, phoneNumberCampaignCreate: PhoneNumberCampaignCreate, _options?: Configuration): Promise<ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPhonenumberPut> {
        const result = this.api.createNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut(phoneNumber, phoneNumberCampaignCreate, _options);
        return result.toPromise();
    }

    /**
     * Assign an individual phone number to campaign.
     * Create New Phone Number Campaign
     * @param phoneNumberCampaignCreate 
     */
    public createNewPhoneNumberCampaignPhoneNumberCampaignPost(phoneNumberCampaignCreate: PhoneNumberCampaignCreate, _options?: Configuration): Promise<ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPost> {
        const result = this.api.createNewPhoneNumberCampaignPhoneNumberCampaignPost(phoneNumberCampaignCreate, _options);
        return result.toPromise();
    }

    /**
     * Create New Phone Number Campaign
     * @param phoneNumber 
     * @param phoneNumberCampaignCreate 
     */
    public createNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut(phoneNumber: string, phoneNumberCampaignCreate: PhoneNumberCampaignCreate, _options?: Configuration): Promise<any> {
        const result = this.api.createNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut(phoneNumber, phoneNumberCampaignCreate, _options);
        return result.toPromise();
    }

    /**
     * Create New Phone Number Campaign
     * @param phoneNumberCampaignCreate 
     */
    public createNewPhoneNumberCampaignPhoneNumberCampaignsPost(phoneNumberCampaignCreate: PhoneNumberCampaignCreate, _options?: Configuration): Promise<any> {
        const result = this.api.createNewPhoneNumberCampaignPhoneNumberCampaignsPost(phoneNumberCampaignCreate, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to remove a campaign assignment from the supplied `phoneNumber`.
     * Delete Phone Number Campaign
     * @param phoneNumber 
     */
    public deletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDelete(phoneNumber: string, _options?: Configuration): Promise<PhoneNumberCampaign> {
        const result = this.api.deletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDelete(phoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Delete Phone Number Campaign
     * @param phoneNumber 
     */
    public deletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDelete(phoneNumber: string, _options?: Configuration): Promise<any> {
        const result = this.api.deletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDelete(phoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Retrieve an individual phone number/campaign assignment by `phoneNumber`.
     * Get Single Phone Number Campaign
     * @param phoneNumber 
     */
    public getSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGet(phoneNumber: string, _options?: Configuration): Promise<PhoneNumberCampaign> {
        const result = this.api.getSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGet(phoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Get Single Phone Number Campaign
     * @param phoneNumber 
     */
    public getSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGet(phoneNumber: string, _options?: Configuration): Promise<any> {
        const result = this.api.getSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGet(phoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Retrieve all of your organization\'s phone number/campaign assignments.
     * Retrieve All Phone Number Campaigns
     * @param recordsPerPage 
     * @param page 
     */
    public retrieveAllPhoneNumberCampaignsPhoneNumberCampaignGet(recordsPerPage?: any, page?: any, _options?: Configuration): Promise<PhoneNumberCampaignPaginated> {
        const result = this.api.retrieveAllPhoneNumberCampaignsPhoneNumberCampaignGet(recordsPerPage, page, _options);
        return result.toPromise();
    }

    /**
     * Retrieve All Phone Number Campaigns
     * @param recordsPerPage 
     * @param page 
     */
    public retrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGet(recordsPerPage?: any, page?: any, _options?: Configuration): Promise<any> {
        const result = this.api.retrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGet(recordsPerPage, page, _options);
        return result.toPromise();
    }


}



import { ObservablePhoneNumberPortingApi } from './ObservableAPI.ts';

import { PhoneNumberPortingApiRequestFactory, PhoneNumberPortingApiResponseProcessor} from "../apis/PhoneNumberPortingApi.ts";
export class PromisePhoneNumberPortingApi {
    private api: ObservablePhoneNumberPortingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PhoneNumberPortingApiRequestFactory,
        responseProcessor?: PhoneNumberPortingApiResponseProcessor
    ) {
        this.api = new ObservablePhoneNumberPortingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Runs a portability check, returning the results immediately.
     * Run a portability check
     * @param postPortabilityCheckRequest 
     */
    public postPortabilityCheck(postPortabilityCheckRequest: PostPortabilityCheckRequest, _options?: Configuration): Promise<PostPortabilityCheck201Response> {
        const result = this.api.postPortabilityCheck(postPortabilityCheckRequest, _options);
        return result.toPromise();
    }


}



import { ObservablePortingOrderApi } from './ObservableAPI.ts';

import { PortingOrderApiRequestFactory, PortingOrderApiResponseProcessor} from "../apis/PortingOrderApi.ts";
export class PromisePortingOrderApi {
    private api: ObservablePortingOrderApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PortingOrderApiRequestFactory,
        responseProcessor?: PortingOrderApiResponseProcessor
    ) {
        this.api = new ObservablePortingOrderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Activate each number in a porting order asynchronously. This operation is limited to US FastPort orders only.
     * Activate every number in a porting order asynchronously.
     * @param id Porting Order id
     */
    public activatePortingOrder(id: string, _options?: Configuration): Promise<ActivatePortingOrder202Response> {
        const result = this.api.activatePortingOrder(id, _options);
        return result.toPromise();
    }

    /**
     * Cancel a porting order
     * Cancel a porting order
     * @param id Porting Order id
     */
    public cancelPortingOrder(id: string, _options?: Configuration): Promise<CancelPortingOrder200Response> {
        const result = this.api.cancelPortingOrder(id, _options);
        return result.toPromise();
    }

    /**
     * Confirm and submit your porting order.
     * Submit a porting order.
     * @param id Porting Order id
     */
    public confirmPortingOrder(id: string, _options?: Configuration): Promise<ConfirmPortingOrder200Response> {
        const result = this.api.confirmPortingOrder(id, _options);
        return result.toPromise();
    }

    /**
     * Creates a new porting order object.
     * Create a porting order
     * @param createPortingOrder 
     */
    public createPortingOrder(createPortingOrder: CreatePortingOrder, _options?: Configuration): Promise<CreatePortingOrder201Response> {
        const result = this.api.createPortingOrder(createPortingOrder, _options);
        return result.toPromise();
    }

    /**
     * Creates a new comment for a porting order.
     * Create a comment for a porting order
     * @param id Porting Order id
     * @param createPortingOrderComment 
     */
    public createPortingOrderComment(id: string, createPortingOrderComment: CreatePortingOrderComment, _options?: Configuration): Promise<CreatePortingOrderComment201Response> {
        const result = this.api.createPortingOrderComment(id, createPortingOrderComment, _options);
        return result.toPromise();
    }

    /**
     * Deletes an existing porting order. This operation is restrict to porting orders in draft state.
     * Delete a porting order
     * @param id Porting Order id
     */
    public deletePortingOrder(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deletePortingOrder(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing porting order.
     * Retrieve a porting order
     * @param id Porting Order id
     * @param includePhoneNumbers Include the first 50 phone number objects in the results
     */
    public getPortingOrder(id: string, includePhoneNumbers?: boolean, _options?: Configuration): Promise<GetPortingOrder200Response> {
        const result = this.api.getPortingOrder(id, includePhoneNumbers, _options);
        return result.toPromise();
    }

    /**
     * Download a porting order loa template
     * Download a porting order loa template
     * @param id Porting Order id
     */
    public getPortingOrderLOATemplate(id: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.getPortingOrderLOATemplate(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the associated V1 sub_request_id and port_request_id
     * Retrieve the associated V1 sub_request_id and port_request_id
     * @param id Porting Order id
     */
    public getPortingOrderSubRequest(id: string, _options?: Configuration): Promise<GetPortingOrderSubRequest200Response> {
        const result = this.api.getPortingOrderSubRequest(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a porting activation job.
     * Retrieve a porting activation job
     * @param id Porting Order id
     * @param activationJobId Activation Job Identifier
     */
    public getPortingOrdersActivationJob(id: string, activationJobId: string, _options?: Configuration): Promise<ActivatePortingOrder202Response> {
        const result = this.api.getPortingOrdersActivationJob(id, activationJobId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of allowed FOC dates for a porting order.
     * List allowed FOC dates
     * @param id Porting Order id
     */
    public listAllowedFocWindows(id: string, _options?: Configuration): Promise<ListAllowedFocWindows200Response> {
        const result = this.api.listAllowedFocWindows(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all documents associated with a porting order.
     * List all documents associated with a porting order
     * @param id Porting Order id
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listPortingOrderDocuments(id: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListPortingOrderDocuments200Response> {
        const result = this.api.listPortingOrderDocuments(id, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all requirements based on country/number type for this porting order.
     * List porting order requirements
     * @param id Porting Order id
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listPortingOrderRequirements(id: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListPortingOrderRequirements200Response> {
        const result = this.api.listPortingOrderRequirements(id, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your porting order.
     * List all porting orders
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param includePhoneNumbers Include the first 50 phone number objects in the results
     * @param filterStatus Filter results by status
     * @param filterStatusIn Filter porting orders by multiple statuses
     * @param filterCustomerReference Filter results by customer_reference
     * @param filterParentSupportKey Filter results by parent_support_key
     * @param filterPhoneNumbersCountryCode Filter results by country ISO 3166-1 alpha-2 code
     * @param filterPhoneNumbersCarrierName Filter results by old service provider
     * @param filterMiscType Filter results by porting order type
     * @param filterEndUserAdminEntityName Filter results by person or company name
     * @param filterEndUserAdminAuthPersonName Filter results by authorized person
     * @param filterActivationSettingsFastPortEligible Filter results by fast port eligible
     * @param filterActivationSettingsFocDatetimeRequestedGt Filter results by foc date later than this value
     * @param filterActivationSettingsFocDatetimeRequestedLt Filter results by foc date earlier than this value
     * @param filterPhoneNumbersPhoneNumberContains Filter results by full or partial phone_number
     * @param sort Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     */
    public listPortingOrders(pageNumber?: number, pageSize?: number, includePhoneNumbers?: boolean, filterStatus?: 'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled', filterStatusIn?: 'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled', filterCustomerReference?: string, filterParentSupportKey?: string, filterPhoneNumbersCountryCode?: string, filterPhoneNumbersCarrierName?: string, filterMiscType?: PortingOrderType, filterEndUserAdminEntityName?: string, filterEndUserAdminAuthPersonName?: string, filterActivationSettingsFastPortEligible?: boolean, filterActivationSettingsFocDatetimeRequestedGt?: string, filterActivationSettingsFocDatetimeRequestedLt?: string, filterPhoneNumbersPhoneNumberContains?: string, sort?: 'created_at' | '-created_at' | 'activation_settings.foc_datetime_requested' | '-activation_settings.foc_datetime_requested', _options?: Configuration): Promise<ListPortingOrders200Response> {
        const result = this.api.listPortingOrders(pageNumber, pageSize, includePhoneNumbers, filterStatus, filterStatusIn, filterCustomerReference, filterParentSupportKey, filterPhoneNumbersCountryCode, filterPhoneNumbersCarrierName, filterMiscType, filterEndUserAdminEntityName, filterEndUserAdminAuthPersonName, filterActivationSettingsFastPortEligible, filterActivationSettingsFocDatetimeRequestedGt, filterActivationSettingsFocDatetimeRequestedLt, filterPhoneNumbersPhoneNumberContains, sort, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your porting activation jobs.
     * List all porting activation jobs
     * @param id Porting Order id
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listPortingOrdersActivationJobs(id: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListPortingOrdersActivationJobs200Response> {
        const result = this.api.listPortingOrdersActivationJobs(id, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all comments of a porting order.
     * List all comments of a porting order
     * @param id Porting Order id
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listPortingOrdersComments(id: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListPortingOrdersComments200Response> {
        const result = this.api.listPortingOrdersComments(id, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all possible exception types for a porting order.
     * List all exception types
     */
    public listPortingOrdersExceptionTypes(_options?: Configuration): Promise<ListPortingOrdersExceptionTypes200Response> {
        const result = this.api.listPortingOrdersExceptionTypes(_options);
        return result.toPromise();
    }

    /**
     * Returns a list of your porting phone numbers.
     * List all porting phone numbers
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterPortingOrderId Filter results by porting order id
     * @param filterPortingOrderIdIn Filter results by a list of porting order ids
     * @param filterSupportKeyEq Filter results by support key
     * @param filterSupportKeyIn Filter results by a list of support keys
     * @param filterPhoneNumber Filter results by phone number
     * @param filterPhoneNumberIn Filter results by a list of phone numbers
     * @param filterPortingOrderStatus Filter results by porting order status
     * @param filterActivationStatus Filter results by activation status
     * @param filterPortabilityStatus Filter results by portability status
     */
    public listPortingPhoneNumbers(pageNumber?: number, pageSize?: number, filterPortingOrderId?: string, filterPortingOrderIdIn?: Array<string>, filterSupportKeyEq?: string, filterSupportKeyIn?: Array<string>, filterPhoneNumber?: string, filterPhoneNumberIn?: Array<string>, filterPortingOrderStatus?: 'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled', filterActivationStatus?: PortingOrderActivationStatus, filterPortabilityStatus?: PortabilityStatus, _options?: Configuration): Promise<ListPortingPhoneNumbers200Response> {
        const result = this.api.listPortingPhoneNumbers(pageNumber, pageSize, filterPortingOrderId, filterPortingOrderIdIn, filterSupportKeyEq, filterSupportKeyIn, filterPhoneNumber, filterPhoneNumberIn, filterPortingOrderStatus, filterActivationStatus, filterPortabilityStatus, _options);
        return result.toPromise();
    }

    /**
     * Edits the details of an existing porting order.  Any or all of a porting order’s attributes may be included in the resource object included in a PATCH request.  If a request does not include all of the attributes for a resource, the system will interpret the missing attributes as if they were included with their current values. To explicitly set something to null, it must be included in the request with a null value.
     * Edit a porting order
     * @param id Porting Order id
     * @param updatePortingOrder 
     */
    public updatePortingOrder(id: string, updatePortingOrder: UpdatePortingOrder, _options?: Configuration): Promise<UpdatePortingOrder200Response> {
        const result = this.api.updatePortingOrder(id, updatePortingOrder, _options);
        return result.toPromise();
    }

    /**
     * Associate a list of documents with a porting order.
     * Associate a list of documents with a porting order
     * @param id Porting Order id
     * @param uploadPortingOrderDocumentsRequest 
     */
    public uploadPortingOrderDocuments(id: string, uploadPortingOrderDocumentsRequest: UploadPortingOrderDocumentsRequest, _options?: Configuration): Promise<UploadPortingOrderDocuments201Response> {
        const result = this.api.uploadPortingOrderDocuments(id, uploadPortingOrderDocumentsRequest, _options);
        return result.toPromise();
    }


}



import { ObservablePrivateWirelessGatewaysApi } from './ObservableAPI.ts';

import { PrivateWirelessGatewaysApiRequestFactory, PrivateWirelessGatewaysApiResponseProcessor} from "../apis/PrivateWirelessGatewaysApi.ts";
export class PromisePrivateWirelessGatewaysApi {
    private api: ObservablePrivateWirelessGatewaysApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PrivateWirelessGatewaysApiRequestFactory,
        responseProcessor?: PrivateWirelessGatewaysApiResponseProcessor
    ) {
        this.api = new ObservablePrivateWirelessGatewaysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Asynchronously create a Private Wireless Gateway for SIM cards for a previously created network.
     * Create a Private Wireless Gateway
     * @param createPrivateWirelessGatewayRequest 
     */
    public createPrivateWirelessGateway(createPrivateWirelessGatewayRequest: CreatePrivateWirelessGatewayRequest, _options?: Configuration): Promise<CreatePrivateWirelessGateway202Response> {
        const result = this.api.createPrivateWirelessGateway(createPrivateWirelessGatewayRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes the Private Wireless Gateway.
     * Delete a Private Wireless Gateway
     * @param id Identifies the resource.
     */
    public deletePrivateWirelessGateway(id: string, _options?: Configuration): Promise<CreatePrivateWirelessGateway202Response> {
        const result = this.api.deletePrivateWirelessGateway(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve information about a Private Wireless Gateway.
     * Get a Private Wireless Gateway
     * @param id Identifies the resource.
     */
    public getPrivateWirelessGateway(id: string, _options?: Configuration): Promise<CreatePrivateWirelessGateway202Response> {
        const result = this.api.getPrivateWirelessGateway(id, _options);
        return result.toPromise();
    }

    /**
     * Get all Private Wireless Gateways belonging to the user.
     * Get all Private Wireless Gateways
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterName The name of the Private Wireless Gateway.
     * @param filterIpRange The IP address range of the Private Wireless Gateway.
     * @param filterRegionCode The name of the region where the Private Wireless Gateway is deployed.
     * @param filterCreatedAt Private Wireless Gateway resource creation date.
     * @param filterUpdatedAt When the Private Wireless Gateway was last updated.
     */
    public getPrivateWirelessGateways(pageNumber?: number, pageSize?: number, filterName?: string, filterIpRange?: string, filterRegionCode?: string, filterCreatedAt?: string, filterUpdatedAt?: string, _options?: Configuration): Promise<GetPrivateWirelessGateways200Response> {
        const result = this.api.getPrivateWirelessGateways(pageNumber, pageSize, filterName, filterIpRange, filterRegionCode, filterCreatedAt, filterUpdatedAt, _options);
        return result.toPromise();
    }


}



import { ObservableProgrammableFaxApplicationsApi } from './ObservableAPI.ts';

import { ProgrammableFaxApplicationsApiRequestFactory, ProgrammableFaxApplicationsApiResponseProcessor} from "../apis/ProgrammableFaxApplicationsApi.ts";
export class PromiseProgrammableFaxApplicationsApi {
    private api: ObservableProgrammableFaxApplicationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProgrammableFaxApplicationsApiRequestFactory,
        responseProcessor?: ProgrammableFaxApplicationsApiResponseProcessor
    ) {
        this.api = new ObservableProgrammableFaxApplicationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Fax Application based on the parameters sent in the request. The application name and webhook URL are required. Once created, you can assign phone numbers to your application using the `/phone_numbers` endpoint.
     * Creates a Fax Application
     * @param createFaxApplicationRequest Parameters that can be set when creating a Fax Application
     */
    public createFaxApplication(createFaxApplicationRequest: CreateFaxApplicationRequest, _options?: Configuration): Promise<FaxApplicationResponse> {
        const result = this.api.createFaxApplication(createFaxApplicationRequest, _options);
        return result.toPromise();
    }

    /**
     * Permanently deletes a Fax Application. Deletion may be prevented if the application is in use by phone numbers.
     * Deletes a Fax Application
     * @param id Identifies the resource.
     */
    public deleteFaxApplication(id: string, _options?: Configuration): Promise<FaxApplicationResponse> {
        const result = this.api.deleteFaxApplication(id, _options);
        return result.toPromise();
    }

    /**
     * Return the details of an existing Fax Application inside the \'data\' attribute of the response.
     * Retrieve a Fax Application
     * @param id Identifies the resource.
     */
    public getFaxApplication(id: string, _options?: Configuration): Promise<FaxApplicationResponse> {
        const result = this.api.getFaxApplication(id, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a list of your Fax Applications inside the \'data\' attribute of the response. You can adjust which applications are listed by using filters. Fax Applications are used to configure how you send and receive faxes using the Programmable Fax API with Telnyx.
     * List all Fax Applications
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterApplicationNameContains If present, applications with &lt;code&gt;application_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @param filterOutboundVoiceProfileId Identifies the associated outbound voice profile.
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     */
    public listFaxApplications(pageNumber?: number, pageSize?: number, filterApplicationNameContains?: string, filterOutboundVoiceProfileId?: string, sort?: 'created_at' | 'connection_name' | 'active', _options?: Configuration): Promise<GetAllFaxApplicationsResponse> {
        const result = this.api.listFaxApplications(pageNumber, pageSize, filterApplicationNameContains, filterOutboundVoiceProfileId, sort, _options);
        return result.toPromise();
    }

    /**
     * Updates settings of an existing Fax Application based on the parameters of the request.
     * Update a Fax Application
     * @param id Identifies the resource.
     * @param updateFaxApplicationRequest Parameters to be updated for the Fax Application
     */
    public updateFaxApplication(id: string, updateFaxApplicationRequest: UpdateFaxApplicationRequest, _options?: Configuration): Promise<FaxApplicationResponse> {
        const result = this.api.updateFaxApplication(id, updateFaxApplicationRequest, _options);
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



import { ObservablePublicInternetGatewaysApi } from './ObservableAPI.ts';

import { PublicInternetGatewaysApiRequestFactory, PublicInternetGatewaysApiResponseProcessor} from "../apis/PublicInternetGatewaysApi.ts";
export class PromisePublicInternetGatewaysApi {
    private api: ObservablePublicInternetGatewaysApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicInternetGatewaysApiRequestFactory,
        responseProcessor?: PublicInternetGatewaysApiResponseProcessor
    ) {
        this.api = new ObservablePublicInternetGatewaysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Public Internet Gateway.
     * Create a Public Internet Gateway
     * @param publicInternetGatewayCreate 
     */
    public publicInternetGatewayCreate(publicInternetGatewayCreate: PublicInternetGatewayCreate, _options?: Configuration): Promise<PublicInternetGatewayCreate202Response> {
        const result = this.api.publicInternetGatewayCreate(publicInternetGatewayCreate, _options);
        return result.toPromise();
    }

    /**
     * Delete a Public Internet Gateway.
     * Delete a Public Internet Gateway
     * @param id Identifies the resource.
     */
    public publicInternetGatewayDelete(id: string, _options?: Configuration): Promise<PublicInternetGatewayCreate202Response> {
        const result = this.api.publicInternetGatewayDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a Public Internet Gateway.
     * Retrieve a Public Internet Gateway
     * @param id Identifies the resource.
     */
    public publicInternetGatewayGet(id: string, _options?: Configuration): Promise<PublicInternetGatewayCreate202Response> {
        const result = this.api.publicInternetGatewayGet(id, _options);
        return result.toPromise();
    }

    /**
     * List all Public Internet Gateways.
     * List all Public Internet Gateways
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterNetworkId The associated network id to filter on.
     */
    public publicInternetGatewayList(pageNumber?: number, pageSize?: number, filterNetworkId?: string, _options?: Configuration): Promise<PublicInternetGatewayList200Response> {
        const result = this.api.publicInternetGatewayList(pageNumber, pageSize, filterNetworkId, _options);
        return result.toPromise();
    }


}



import { ObservablePushCredentialsApi } from './ObservableAPI.ts';

import { PushCredentialsApiRequestFactory, PushCredentialsApiResponseProcessor} from "../apis/PushCredentialsApi.ts";
export class PromisePushCredentialsApi {
    private api: ObservablePushCredentialsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PushCredentialsApiRequestFactory,
        responseProcessor?: PushCredentialsApiResponseProcessor
    ) {
        this.api = new ObservablePushCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new mobile push credential
     * Creates a new mobile push credential
     * @param createPushCredentialRequest Mobile push credential parameters that need to be sent in the request
     */
    public createPushCredential(createPushCredentialRequest: CreatePushCredentialRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createPushCredential(createPushCredentialRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes a mobile push credential based on the given `push_credential_id`
     * Deletes a mobile push credential
     * @param pushCredentialId The unique identifier of a mobile push credential
     */
    public deletePushCredentialById(pushCredentialId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deletePushCredentialById(pushCredentialId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves mobile push credential based on the given `push_credential_id`
     * Retrieves a mobile push credential
     * @param pushCredentialId The unique identifier of a mobile push credential
     */
    public getPushCredentialById(pushCredentialId: string, _options?: Configuration): Promise<void> {
        const result = this.api.getPushCredentialById(pushCredentialId, _options);
        return result.toPromise();
    }

    /**
     * List mobile push credentials
     * List mobile push credentials
     * @param filterType type of mobile push credentials
     * @param filterAlias Unique mobile push credential alias
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public listPushCredentials(filterType?: 'ios' | 'android', filterAlias?: string, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<void> {
        const result = this.api.listPushCredentials(filterType, filterAlias, pageSize, pageNumber, _options);
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



import { ObservableRegionsApi } from './ObservableAPI.ts';

import { RegionsApiRequestFactory, RegionsApiResponseProcessor} from "../apis/RegionsApi.ts";
export class PromiseRegionsApi {
    private api: ObservableRegionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RegionsApiRequestFactory,
        responseProcessor?: RegionsApiResponseProcessor
    ) {
        this.api = new ObservableRegionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all regions and the interfaces that region supports
     * List all Regions
     */
    public regionList(_options?: Configuration): Promise<RegionList200Response> {
        const result = this.api.regionList(_options);
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



import { ObservableReportingApi } from './ObservableAPI.ts';

import { ReportingApiRequestFactory, ReportingApiResponseProcessor} from "../apis/ReportingApi.ts";
export class PromiseReportingApi {
    private api: ObservableReportingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportingApiRequestFactory,
        responseProcessor?: ReportingApiResponseProcessor
    ) {
        this.api = new ObservableReportingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Asynchronously create a report containing Wireless Detail Records (WDRs) for the SIM cards that consumed wireless data in the given time period. 
     * Create a Wireless Detail Records (WDRs) Report
     * @param wdrReportRequest 
     */
    public createWdrReport(wdrReportRequest: WdrReportRequest, _options?: Configuration): Promise<CreateWdrReport201Response> {
        const result = this.api.createWdrReport(wdrReportRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes one specific WDR report
     * Delete a Wireless Detail Record (WDR) Report
     * @param id Identifies the resource.
     */
    public deleteWdrReport(id: string, _options?: Configuration): Promise<CreateWdrReport201Response> {
        const result = this.api.deleteWdrReport(id, _options);
        return result.toPromise();
    }

    /**
     * Returns one specific WDR report
     * Get a Wireless Detail Record (WDR) Report
     * @param id Identifies the resource.
     */
    public getWdrReport(id: string, _options?: Configuration): Promise<CreateWdrReport201Response> {
        const result = this.api.getWdrReport(id, _options);
        return result.toPromise();
    }

    /**
     * Returns the WDR Reports that match the given parameters.
     * Get all Wireless Detail Records (WDRs) Reports
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public getWdrReports(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<GetWdrReports200Response> {
        const result = this.api.getWdrReports(pageNumber, pageSize, _options);
        return result.toPromise();
    }


}



import { ObservableReportsApi } from './ObservableAPI.ts';

import { ReportsApiRequestFactory, ReportsApiResponseProcessor} from "../apis/ReportsApi.ts";
export class PromiseReportsApi {
    private api: ObservableReportsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportsApiRequestFactory,
        responseProcessor?: ReportsApiResponseProcessor
    ) {
        this.api = new ObservableReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a ledger billing group report
     * @param newLedgerBillingGroupReport New ledger billing group report parameters
     */
    public createLedgerBillingGroupReport(newLedgerBillingGroupReport: NewLedgerBillingGroupReport, _options?: Configuration): Promise<CreateLedgerBillingGroupReport200Response> {
        const result = this.api.createLedgerBillingGroupReport(newLedgerBillingGroupReport, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a ledger billing group report
     * @param id The id of the ledger billing group report
     */
    public retrieveLedgerBillingGroupReport(id: string, _options?: Configuration): Promise<CreateLedgerBillingGroupReport200Response> {
        const result = this.api.retrieveLedgerBillingGroupReport(id, _options);
        return result.toPromise();
    }


}



import { ObservableRequirementTypesApi } from './ObservableAPI.ts';

import { RequirementTypesApiRequestFactory, RequirementTypesApiResponseProcessor} from "../apis/RequirementTypesApi.ts";
export class PromiseRequirementTypesApi {
    private api: ObservableRequirementTypesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RequirementTypesApiRequestFactory,
        responseProcessor?: RequirementTypesApiResponseProcessor
    ) {
        this.api = new ObservableRequirementTypesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all requirement types ordered by created_at descending
     * List all requirement types
     * @param filterNameContains Filters requirement types to those whose name contains a certain string.
     * @param sort Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a &#x60;-&#x60; in front of the field name.
     */
    public docReqsListRequirementTypes(filterNameContains?: string, sort?: 'created_at' | 'name' | 'updated_at', _options?: Configuration): Promise<DocReqsListRequirementTypes200Response> {
        const result = this.api.docReqsListRequirementTypes(filterNameContains, sort, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a requirement type by id
     * Retrieve a requirement types
     * @param id Uniquely identifies the requirement_type record
     */
    public docReqsRetrieveRequirementType(id: string, _options?: Configuration): Promise<DocReqsRetrieveRequirementType200Response> {
        const result = this.api.docReqsRetrieveRequirementType(id, _options);
        return result.toPromise();
    }


}



import { ObservableRequirementsApi } from './ObservableAPI.ts';

import { RequirementsApiRequestFactory, RequirementsApiResponseProcessor} from "../apis/RequirementsApi.ts";
export class PromiseRequirementsApi {
    private api: ObservableRequirementsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RequirementsApiRequestFactory,
        responseProcessor?: RequirementsApiResponseProcessor
    ) {
        this.api = new ObservableRequirementsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a document requirement record
     * Retrieve a document requirement
     * @param id Uniquely identifies the requirement_type record
     */
    public docReqsRetrieveDocumentRequirements(id: string, _options?: Configuration): Promise<DocReqsRetrieveDocumentRequirements200Response> {
        const result = this.api.docReqsRetrieveDocumentRequirements(id, _options);
        return result.toPromise();
    }

    /**
     * List all requirements with filtering, sorting, and pagination
     * List all requirements
     * @param filterCountryCode Filters results to those applying to a 2-character (ISO 3166-1 alpha-2) country code
     * @param filterPhoneNumberType Filters results to those applying to a specific &#x60;phone_number_type&#x60;
     * @param filterAction Filters requirements to those applying to a specific action.
     * @param sort Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a &#x60;-&#x60; in front of the field name.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listRequirements(filterCountryCode?: string, filterPhoneNumberType?: 'local' | 'national' | 'toll-free', filterAction?: 'ordering' | 'porting', sort?: 'action' | 'country_code' | 'locality' | 'phone_number_type', pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListRequirements200Response> {
        const result = this.api.listRequirements(filterCountryCode, filterPhoneNumberType, filterAction, sort, pageNumber, pageSize, _options);
        return result.toPromise();
    }


}



import { ObservableRoomCompositionsApi } from './ObservableAPI.ts';

import { RoomCompositionsApiRequestFactory, RoomCompositionsApiResponseProcessor} from "../apis/RoomCompositionsApi.ts";
export class PromiseRoomCompositionsApi {
    private api: ObservableRoomCompositionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RoomCompositionsApiRequestFactory,
        responseProcessor?: RoomCompositionsApiResponseProcessor
    ) {
        this.api = new ObservableRoomCompositionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Asynchronously create a room composition.
     * Create a room composition.
     * @param createRoomCompositionRequest Parameters that can be defined during room composition creation.
     */
    public createRoomComposition(createRoomCompositionRequest: CreateRoomCompositionRequest, _options?: Configuration): Promise<CreateRoomComposition202Response> {
        const result = this.api.createRoomComposition(createRoomCompositionRequest, _options);
        return result.toPromise();
    }

    /**
     * Synchronously delete a room composition.
     * Delete a room composition.
     * @param roomCompositionId The unique identifier of a room composition.
     */
    public deleteRoomComposition(roomCompositionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteRoomComposition(roomCompositionId, _options);
        return result.toPromise();
    }

    /**
     * 
     * View a list of room compositions.
     * @param filterDateCreatedAtEq ISO 8601 date for filtering room compositions created on that date.
     * @param filterDateCreatedAtGte ISO 8601 date for filtering room compositions created after that date.
     * @param filterDateCreatedAtLte ISO 8601 date for filtering room compositions created before that date.
     * @param filterSessionId The session_id for filtering room compositions.
     * @param filterStatus The status for filtering room compositions.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public listRoomCompositions(filterDateCreatedAtEq?: string, filterDateCreatedAtGte?: string, filterDateCreatedAtLte?: string, filterSessionId?: string, filterStatus?: 'completed' | 'processing' | 'enqueued', pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<ListRoomCompositions200Response> {
        const result = this.api.listRoomCompositions(filterDateCreatedAtEq, filterDateCreatedAtGte, filterDateCreatedAtLte, filterSessionId, filterStatus, pageSize, pageNumber, _options);
        return result.toPromise();
    }

    /**
     * View a room composition.
     * @param roomCompositionId The unique identifier of a room composition.
     */
    public viewRoomComposition(roomCompositionId: string, _options?: Configuration): Promise<CreateRoomComposition202Response> {
        const result = this.api.viewRoomComposition(roomCompositionId, _options);
        return result.toPromise();
    }


}



import { ObservableRoomParticipantsApi } from './ObservableAPI.ts';

import { RoomParticipantsApiRequestFactory, RoomParticipantsApiResponseProcessor} from "../apis/RoomParticipantsApi.ts";
export class PromiseRoomParticipantsApi {
    private api: ObservableRoomParticipantsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RoomParticipantsApiRequestFactory,
        responseProcessor?: RoomParticipantsApiResponseProcessor
    ) {
        this.api = new ObservableRoomParticipantsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * View a list of room participants.
     * @param filterDateJoinedAtEq ISO 8601 date for filtering room participants that joined on that date.
     * @param filterDateJoinedAtGte ISO 8601 date for filtering room participants that joined after that date.
     * @param filterDateJoinedAtLte ISO 8601 date for filtering room participants that joined before that date.
     * @param filterDateUpdatedAtEq ISO 8601 date for filtering room participants updated on that date.
     * @param filterDateUpdatedAtGte ISO 8601 date for filtering room participants updated after that date.
     * @param filterDateUpdatedAtLte ISO 8601 date for filtering room participants updated before that date.
     * @param filterDateLeftAtEq ISO 8601 date for filtering room participants that left on that date.
     * @param filterDateLeftAtGte ISO 8601 date for filtering room participants that left after that date.
     * @param filterDateLeftAtLte ISO 8601 date for filtering room participants that left before that date.
     * @param filterContext Filter room participants based on the context.
     * @param filterSessionId Session_id for filtering room participants.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public listRoomParticipants(filterDateJoinedAtEq?: string, filterDateJoinedAtGte?: string, filterDateJoinedAtLte?: string, filterDateUpdatedAtEq?: string, filterDateUpdatedAtGte?: string, filterDateUpdatedAtLte?: string, filterDateLeftAtEq?: string, filterDateLeftAtGte?: string, filterDateLeftAtLte?: string, filterContext?: string, filterSessionId?: string, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<ListRoomParticipants200Response> {
        const result = this.api.listRoomParticipants(filterDateJoinedAtEq, filterDateJoinedAtGte, filterDateJoinedAtLte, filterDateUpdatedAtEq, filterDateUpdatedAtGte, filterDateUpdatedAtLte, filterDateLeftAtEq, filterDateLeftAtGte, filterDateLeftAtLte, filterContext, filterSessionId, pageSize, pageNumber, _options);
        return result.toPromise();
    }

    /**
     * View a room participant.
     * @param roomParticipantId The unique identifier of a room participant.
     */
    public viewRoomParticipant(roomParticipantId: string, _options?: Configuration): Promise<ViewRoomParticipant200Response> {
        const result = this.api.viewRoomParticipant(roomParticipantId, _options);
        return result.toPromise();
    }


}



import { ObservableRoomRecordingsApi } from './ObservableAPI.ts';

import { RoomRecordingsApiRequestFactory, RoomRecordingsApiResponseProcessor} from "../apis/RoomRecordingsApi.ts";
export class PromiseRoomRecordingsApi {
    private api: ObservableRoomRecordingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RoomRecordingsApiRequestFactory,
        responseProcessor?: RoomRecordingsApiResponseProcessor
    ) {
        this.api = new ObservableRoomRecordingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Synchronously delete a Room Recording.
     * Delete a room recording.
     * @param roomRecordingId The unique identifier of a room recording.
     */
    public deleteRoomRecording(roomRecordingId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteRoomRecording(roomRecordingId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete several room recordings in a bulk.
     * @param filterDateEndedAtEq ISO 8601 date for filtering room recordings ended on that date.
     * @param filterDateEndedAtGte ISO 8601 date for filtering room recordings ended after that date.
     * @param filterDateEndedAtLte ISO 8601 date for filtering room recordings ended before that date.
     * @param filterDateStartedAtEq ISO 8601 date for filtering room recordings started on that date.
     * @param filterDateStartedAtGte ISO 8601 date for filtering room recordings started after that date.
     * @param filterDateStartedAtLte ISO 8601 date for filtering room recordings started before that date.
     * @param filterRoomId room_id for filtering room recordings.
     * @param filterParticipantId participant_id for filtering room recordings.
     * @param filterSessionId session_id for filtering room recordings.
     * @param filterStatus status for filtering room recordings.
     * @param filterType type for filtering room recordings.
     * @param filterDurationSecsEq duration_secs equal for filtering room recordings.
     * @param filterDurationSecsLte duration_secs less or equal for filtering room recordings.
     * @param filterDurationSecsGte duration_secs greater or equal for filtering room recordings.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public deleteRoomRecordings(filterDateEndedAtEq?: string, filterDateEndedAtGte?: string, filterDateEndedAtLte?: string, filterDateStartedAtEq?: string, filterDateStartedAtGte?: string, filterDateStartedAtLte?: string, filterRoomId?: string, filterParticipantId?: string, filterSessionId?: string, filterStatus?: string, filterType?: string, filterDurationSecsEq?: number, filterDurationSecsLte?: number, filterDurationSecsGte?: number, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<BulkRoomRecordingsDeleteResponse> {
        const result = this.api.deleteRoomRecordings(filterDateEndedAtEq, filterDateEndedAtGte, filterDateEndedAtLte, filterDateStartedAtEq, filterDateStartedAtGte, filterDateStartedAtLte, filterRoomId, filterParticipantId, filterSessionId, filterStatus, filterType, filterDurationSecsEq, filterDurationSecsLte, filterDurationSecsGte, pageSize, pageNumber, _options);
        return result.toPromise();
    }

    /**
     * 
     * View a list of room recordings.
     * @param filterDateEndedAtEq ISO 8601 date for filtering room recordings ended on that date.
     * @param filterDateEndedAtGte ISO 8601 date for filtering room recordings ended after that date.
     * @param filterDateEndedAtLte ISO 8601 date for filtering room recordings ended before that date.
     * @param filterDateStartedAtEq ISO 8601 date for filtering room recordings started on that date.
     * @param filterDateStartedAtGte ISO 8601 date for filtering room recordings started after that date.
     * @param filterDateStartedAtLte ISO 8601 date for filtering room recordings started before that date.
     * @param filterRoomId room_id for filtering room recordings.
     * @param filterParticipantId participant_id for filtering room recordings.
     * @param filterSessionId session_id for filtering room recordings.
     * @param filterStatus status for filtering room recordings.
     * @param filterType type for filtering room recordings.
     * @param filterDurationSecsEq duration_secs equal for filtering room recordings.
     * @param filterDurationSecsLte duration_secs less or equal for filtering room recordings.
     * @param filterDurationSecsGte duration_secs greater or equal for filtering room recordings.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public listRoomRecordings(filterDateEndedAtEq?: string, filterDateEndedAtGte?: string, filterDateEndedAtLte?: string, filterDateStartedAtEq?: string, filterDateStartedAtGte?: string, filterDateStartedAtLte?: string, filterRoomId?: string, filterParticipantId?: string, filterSessionId?: string, filterStatus?: string, filterType?: string, filterDurationSecsEq?: number, filterDurationSecsLte?: number, filterDurationSecsGte?: number, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<ListRoomRecordings200Response> {
        const result = this.api.listRoomRecordings(filterDateEndedAtEq, filterDateEndedAtGte, filterDateEndedAtLte, filterDateStartedAtEq, filterDateStartedAtGte, filterDateStartedAtLte, filterRoomId, filterParticipantId, filterSessionId, filterStatus, filterType, filterDurationSecsEq, filterDurationSecsLte, filterDurationSecsGte, pageSize, pageNumber, _options);
        return result.toPromise();
    }

    /**
     * View a room recording.
     * @param roomRecordingId The unique identifier of a room recording.
     */
    public viewRoomRecording(roomRecordingId: string, _options?: Configuration): Promise<ViewRoomRecording200Response> {
        const result = this.api.viewRoomRecording(roomRecordingId, _options);
        return result.toPromise();
    }


}



import { ObservableRoomSessionsApi } from './ObservableAPI.ts';

import { RoomSessionsApiRequestFactory, RoomSessionsApiResponseProcessor} from "../apis/RoomSessionsApi.ts";
export class PromiseRoomSessionsApi {
    private api: ObservableRoomSessionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RoomSessionsApiRequestFactory,
        responseProcessor?: RoomSessionsApiResponseProcessor
    ) {
        this.api = new ObservableRoomSessionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Note: this will also kick all participants currently present in the room
     * End a room session.
     * @param roomSessionId The unique identifier of a room session.
     */
    public endSession(roomSessionId: string, _options?: Configuration): Promise<EndSession200Response> {
        const result = this.api.endSession(roomSessionId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Kick participants from a room session.
     * @param roomSessionId The unique identifier of a room session.
     * @param actionsParticipantsRequest Parameters that can be defined during Kick action.
     */
    public kickParticipantInSession(roomSessionId: string, actionsParticipantsRequest: ActionsParticipantsRequest, _options?: Configuration): Promise<EndSession200Response> {
        const result = this.api.kickParticipantInSession(roomSessionId, actionsParticipantsRequest, _options);
        return result.toPromise();
    }

    /**
     * 
     * View a list of room sessions.
     * @param filterDateCreatedAtEq ISO 8601 date for filtering room sessions created on that date.
     * @param filterDateCreatedAtGte ISO 8601 date for filtering room sessions created after that date.
     * @param filterDateCreatedAtLte ISO 8601 date for filtering room sessions created before that date.
     * @param filterDateUpdatedAtEq ISO 8601 date for filtering room sessions updated on that date.
     * @param filterDateUpdatedAtGte ISO 8601 date for filtering room sessions updated after that date.
     * @param filterDateUpdatedAtLte ISO 8601 date for filtering room sessions updated before that date.
     * @param filterDateEndedAtEq ISO 8601 date for filtering room sessions ended on that date.
     * @param filterDateEndedAtGte ISO 8601 date for filtering room sessions ended after that date.
     * @param filterDateEndedAtLte ISO 8601 date for filtering room sessions ended before that date.
     * @param filterRoomId Room_id for filtering room sessions.
     * @param filterActive Filter active or inactive room sessions.
     * @param includeParticipants To decide if room participants should be included in the response.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public listRoomSessions(filterDateCreatedAtEq?: string, filterDateCreatedAtGte?: string, filterDateCreatedAtLte?: string, filterDateUpdatedAtEq?: string, filterDateUpdatedAtGte?: string, filterDateUpdatedAtLte?: string, filterDateEndedAtEq?: string, filterDateEndedAtGte?: string, filterDateEndedAtLte?: string, filterRoomId?: string, filterActive?: boolean, includeParticipants?: boolean, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<ListRoomSessions200Response> {
        const result = this.api.listRoomSessions(filterDateCreatedAtEq, filterDateCreatedAtGte, filterDateCreatedAtLte, filterDateUpdatedAtEq, filterDateUpdatedAtGte, filterDateUpdatedAtLte, filterDateEndedAtEq, filterDateEndedAtGte, filterDateEndedAtLte, filterRoomId, filterActive, includeParticipants, pageSize, pageNumber, _options);
        return result.toPromise();
    }

    /**
     * 
     * Mute participants in room session.
     * @param roomSessionId The unique identifier of a room session.
     * @param actionsParticipantsRequest Parameters that can be defined during Mute action.
     */
    public muteParticipantInSession(roomSessionId: string, actionsParticipantsRequest: ActionsParticipantsRequest, _options?: Configuration): Promise<EndSession200Response> {
        const result = this.api.muteParticipantInSession(roomSessionId, actionsParticipantsRequest, _options);
        return result.toPromise();
    }

    /**
     * 
     * View a list of room participants.
     * @param roomSessionId The unique identifier of a room session.
     * @param filterDateJoinedAtEq ISO 8601 date for filtering room participants that joined on that date.
     * @param filterDateJoinedAtGte ISO 8601 date for filtering room participants that joined after that date.
     * @param filterDateJoinedAtLte ISO 8601 date for filtering room participants that joined before that date.
     * @param filterDateUpdatedAtEq ISO 8601 date for filtering room participants updated on that date.
     * @param filterDateUpdatedAtGte ISO 8601 date for filtering room participants updated after that date.
     * @param filterDateUpdatedAtLte ISO 8601 date for filtering room participants updated before that date.
     * @param filterDateLeftAtEq ISO 8601 date for filtering room participants that left on that date.
     * @param filterDateLeftAtGte ISO 8601 date for filtering room participants that left after that date.
     * @param filterDateLeftAtLte ISO 8601 date for filtering room participants that left before that date.
     * @param filterContext Filter room participants based on the context.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public nestedListRoomParticipants(roomSessionId: string, filterDateJoinedAtEq?: string, filterDateJoinedAtGte?: string, filterDateJoinedAtLte?: string, filterDateUpdatedAtEq?: string, filterDateUpdatedAtGte?: string, filterDateUpdatedAtLte?: string, filterDateLeftAtEq?: string, filterDateLeftAtGte?: string, filterDateLeftAtLte?: string, filterContext?: string, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<ListRoomParticipants200Response> {
        const result = this.api.nestedListRoomParticipants(roomSessionId, filterDateJoinedAtEq, filterDateJoinedAtGte, filterDateJoinedAtLte, filterDateUpdatedAtEq, filterDateUpdatedAtGte, filterDateUpdatedAtLte, filterDateLeftAtEq, filterDateLeftAtGte, filterDateLeftAtLte, filterContext, pageSize, pageNumber, _options);
        return result.toPromise();
    }

    /**
     * 
     * Unmute participants in room session.
     * @param roomSessionId The unique identifier of a room session.
     * @param actionsParticipantsRequest Parameters that can be defined during Unmute action.
     */
    public unmuteParticipantInSession(roomSessionId: string, actionsParticipantsRequest: ActionsParticipantsRequest, _options?: Configuration): Promise<EndSession200Response> {
        const result = this.api.unmuteParticipantInSession(roomSessionId, actionsParticipantsRequest, _options);
        return result.toPromise();
    }

    /**
     * View a room session.
     * @param roomSessionId The unique identifier of a room session.
     * @param includeParticipants To decide if room participants should be included in the response.
     */
    public viewRoomSession(roomSessionId: string, includeParticipants?: boolean, _options?: Configuration): Promise<ViewRoomSession200Response> {
        const result = this.api.viewRoomSession(roomSessionId, includeParticipants, _options);
        return result.toPromise();
    }


}



import { ObservableRoomsApi } from './ObservableAPI.ts';

import { RoomsApiRequestFactory, RoomsApiResponseProcessor} from "../apis/RoomsApi.ts";
export class PromiseRoomsApi {
    private api: ObservableRoomsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RoomsApiRequestFactory,
        responseProcessor?: RoomsApiResponseProcessor
    ) {
        this.api = new ObservableRoomsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Synchronously create a Room.
     * Create a room.
     * @param createRoomRequest Parameters that can be defined during room creation.
     */
    public createRoom(createRoomRequest: CreateRoomRequest, _options?: Configuration): Promise<CreateRoom201Response> {
        const result = this.api.createRoom(createRoomRequest, _options);
        return result.toPromise();
    }

    /**
     * Synchronously delete a Room. Participants from that room will be kicked out, they won\'t be able to join that room anymore, and you won\'t be charged anymore for that room.
     * Delete a room.
     * @param roomId The unique identifier of a room.
     */
    public deleteRoom(roomId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteRoom(roomId, _options);
        return result.toPromise();
    }

    /**
     * 
     * View a list of rooms.
     * @param filterDateCreatedAtEq ISO 8601 date for filtering rooms created on that date.
     * @param filterDateCreatedAtGte ISO 8601 date for filtering rooms created after that date.
     * @param filterDateCreatedAtLte ISO 8601 date for filtering rooms created before that date.
     * @param filterDateUpdatedAtEq ISO 8601 date for filtering rooms updated on that date.
     * @param filterDateUpdatedAtGte ISO 8601 date for filtering rooms updated after that date.
     * @param filterDateUpdatedAtLte ISO 8601 date for filtering rooms updated before that date.
     * @param filterUniqueName Unique_name for filtering rooms.
     * @param includeSessions To decide if room sessions should be included in the response.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public listRooms(filterDateCreatedAtEq?: string, filterDateCreatedAtGte?: string, filterDateCreatedAtLte?: string, filterDateUpdatedAtEq?: string, filterDateUpdatedAtGte?: string, filterDateUpdatedAtLte?: string, filterUniqueName?: string, includeSessions?: boolean, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<ListRooms200Response> {
        const result = this.api.listRooms(filterDateCreatedAtEq, filterDateCreatedAtGte, filterDateCreatedAtLte, filterDateUpdatedAtEq, filterDateUpdatedAtGte, filterDateUpdatedAtLte, filterUniqueName, includeSessions, pageSize, pageNumber, _options);
        return result.toPromise();
    }

    /**
     * 
     * View a list of room sessions.
     * @param roomId The unique identifier of a room.
     * @param filterDateCreatedAtEq ISO 8601 date for filtering room sessions created on that date.
     * @param filterDateCreatedAtGte ISO 8601 date for filtering room sessions created after that date.
     * @param filterDateCreatedAtLte ISO 8601 date for filtering room sessions created before that date.
     * @param filterDateUpdatedAtEq ISO 8601 date for filtering room sessions updated on that date.
     * @param filterDateUpdatedAtGte ISO 8601 date for filtering room sessions updated after that date.
     * @param filterDateUpdatedAtLte ISO 8601 date for filtering room sessions updated before that date.
     * @param filterDateEndedAtEq ISO 8601 date for filtering room sessions ended on that date.
     * @param filterDateEndedAtGte ISO 8601 date for filtering room sessions ended after that date.
     * @param filterDateEndedAtLte ISO 8601 date for filtering room sessions ended before that date.
     * @param filterActive Filter active or inactive room sessions.
     * @param includeParticipants To decide if room participants should be included in the response.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public nestedListRoomSessions(roomId: string, filterDateCreatedAtEq?: string, filterDateCreatedAtGte?: string, filterDateCreatedAtLte?: string, filterDateUpdatedAtEq?: string, filterDateUpdatedAtGte?: string, filterDateUpdatedAtLte?: string, filterDateEndedAtEq?: string, filterDateEndedAtGte?: string, filterDateEndedAtLte?: string, filterActive?: boolean, includeParticipants?: boolean, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<ListRoomSessions200Response> {
        const result = this.api.nestedListRoomSessions(roomId, filterDateCreatedAtEq, filterDateCreatedAtGte, filterDateCreatedAtLte, filterDateUpdatedAtEq, filterDateUpdatedAtGte, filterDateUpdatedAtLte, filterDateEndedAtEq, filterDateEndedAtGte, filterDateEndedAtLte, filterActive, includeParticipants, pageSize, pageNumber, _options);
        return result.toPromise();
    }

    /**
     * Synchronously update a Room.
     * Update a room.
     * @param roomId The unique identifier of a room.
     * @param patchRoomRequest Parameters that can be defined during room update.
     */
    public patchRoom(roomId: string, patchRoomRequest: PatchRoomRequest, _options?: Configuration): Promise<CreateRoom201Response> {
        const result = this.api.patchRoom(roomId, patchRoomRequest, _options);
        return result.toPromise();
    }

    /**
     * View a room.
     * @param roomId The unique identifier of a room.
     * @param includeSessions To decide if room sessions should be included in the response.
     */
    public viewRoom(roomId: string, includeSessions?: boolean, _options?: Configuration): Promise<CreateRoom201Response> {
        const result = this.api.viewRoom(roomId, includeSessions, _options);
        return result.toPromise();
    }


}



import { ObservableRoomsClientTokensApi } from './ObservableAPI.ts';

import { RoomsClientTokensApiRequestFactory, RoomsClientTokensApiResponseProcessor} from "../apis/RoomsClientTokensApi.ts";
export class PromiseRoomsClientTokensApi {
    private api: ObservableRoomsClientTokensApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RoomsClientTokensApiRequestFactory,
        responseProcessor?: RoomsClientTokensApiResponseProcessor
    ) {
        this.api = new ObservableRoomsClientTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Synchronously create an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`, a Refresh Token is also provided to refresh a Client Token, the Refresh Token expires after `refresh_token_ttl_secs`.
     * Create Client Token to join a room.
     * @param roomId The unique identifier of a room.
     * @param createRoomClientTokenRequest Parameters that can be defined during Room Client Token creation.
     */
    public createRoomClientToken(roomId: string, createRoomClientTokenRequest: CreateRoomClientTokenRequest, _options?: Configuration): Promise<CreateRoomClientToken201Response> {
        const result = this.api.createRoomClientToken(roomId, createRoomClientTokenRequest, _options);
        return result.toPromise();
    }

    /**
     * Synchronously refresh an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`.
     * Refresh Client Token to join a room.
     * @param roomId The unique identifier of a room.
     * @param refreshRoomClientTokenRequest Parameters that can be defined during Room Client Token refresh.
     */
    public refreshRoomClientToken(roomId: string, refreshRoomClientTokenRequest: RefreshRoomClientTokenRequest, _options?: Configuration): Promise<RefreshRoomClientToken201Response> {
        const result = this.api.refreshRoomClientToken(roomId, refreshRoomClientTokenRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSIMCardActionsApi } from './ObservableAPI.ts';

import { SIMCardActionsApiRequestFactory, SIMCardActionsApiResponseProcessor} from "../apis/SIMCardActionsApi.ts";
export class PromiseSIMCardActionsApi {
    private api: ObservableSIMCardActionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SIMCardActionsApiRequestFactory,
        responseProcessor?: SIMCardActionsApiResponseProcessor
    ) {
        this.api = new ObservableSIMCardActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API fetches information about a bulk SIM card action. A bulk SIM card action contains details about a collection of individual SIM card actions.
     * Get bulk SIM card action details
     * @param id Identifies the resource.
     */
    public bulkSimCardActionGet(id: string, _options?: Configuration): Promise<BulkSimCardActionGet200Response> {
        const result = this.api.bulkSimCardActionGet(id, _options);
        return result.toPromise();
    }

    /**
     * This API lists a paginated collection of bulk SIM card actions. A bulk SIM card action contains details about a collection of individual SIM card actions.
     * List bulk SIM card actions
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterActionType Filter by action type.
     */
    public listBulkSIMCardActions(pageNumber?: number, pageSize?: number, filterActionType?: 'bulk_set_public_ips', _options?: Configuration): Promise<ListBulkSIMCardActions200Response> {
        const result = this.api.listBulkSIMCardActions(pageNumber, pageSize, filterActionType, _options);
        return result.toPromise();
    }

    /**
     * This API lists a paginated collection of SIM card actions. It enables exploring a collection of existing asynchronous operations using specific filters.
     * List SIM card actions
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterSimCardId A valid SIM card ID.
     * @param filterStatus Filter by a specific status of the resource\&#39;s lifecycle.
     * @param filterBulkSimCardActionId Filter by a bulk SIM card action ID.
     * @param filterActionType Filter by action type.
     */
    public listSIMCardActions(pageNumber?: number, pageSize?: number, filterSimCardId?: string, filterStatus?: 'in-progress' | 'completed' | 'failed', filterBulkSimCardActionId?: string, filterActionType?: 'enable' | 'enable_standby_sim_card' | 'disable' | 'set_standby' | 'remove_public_ip' | 'set_public_ip', _options?: Configuration): Promise<ListSIMCardActions200Response> {
        const result = this.api.listSIMCardActions(pageNumber, pageSize, filterSimCardId, filterStatus, filterBulkSimCardActionId, filterActionType, _options);
        return result.toPromise();
    }

    /**
     * This API fetches detailed information about a SIM card action to follow-up on an existing asynchronous operation.
     * Get SIM card action details
     * @param id Identifies the resource.
     */
    public simCardActionGet(id: string, _options?: Configuration): Promise<SimCardActionGet200Response> {
        const result = this.api.simCardActionGet(id, _options);
        return result.toPromise();
    }


}



import { ObservableSIMCardGroupActionsApi } from './ObservableAPI.ts';

import { SIMCardGroupActionsApiRequestFactory, SIMCardGroupActionsApiResponseProcessor} from "../apis/SIMCardGroupActionsApi.ts";
export class PromiseSIMCardGroupActionsApi {
    private api: ObservableSIMCardGroupActionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SIMCardGroupActionsApiRequestFactory,
        responseProcessor?: SIMCardGroupActionsApiResponseProcessor
    ) {
        this.api = new ObservableSIMCardGroupActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows fetching detailed information about a SIM card group action resource to make follow-ups in an existing asynchronous operation.
     * Get SIM card group action details
     * @param id Identifies the resource.
     */
    public simCardGroupActionGet(id: string, _options?: Configuration): Promise<SimCardGroupActionGet200Response> {
        const result = this.api.simCardGroupActionGet(id, _options);
        return result.toPromise();
    }

    /**
     * This API allows listing a paginated collection a SIM card group actions. It allows to explore a collection of existing asynchronous operation using specific filters.
     * List SIM card group actions
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterSimCardGroupId A valid SIM card group ID.
     * @param filterStatus Filter by a specific status of the resource\&#39;s lifecycle.
     * @param filterType Filter by action type.
     */
    public simCardGroupActionsGet(pageNumber?: number, pageSize?: number, filterSimCardGroupId?: string, filterStatus?: 'in-progress' | 'completed' | 'failed', filterType?: 'set_private_wireless_gateway' | 'remove_private_wireless_gateway', _options?: Configuration): Promise<SimCardGroupActionsGet200Response> {
        const result = this.api.simCardGroupActionsGet(pageNumber, pageSize, filterSimCardGroupId, filterStatus, filterType, _options);
        return result.toPromise();
    }


}



import { ObservableSIMCardGroupsApi } from './ObservableAPI.ts';

import { SIMCardGroupsApiRequestFactory, SIMCardGroupsApiResponseProcessor} from "../apis/SIMCardGroupsApi.ts";
export class PromiseSIMCardGroupsApi {
    private api: ObservableSIMCardGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SIMCardGroupsApiRequestFactory,
        responseProcessor?: SIMCardGroupsApiResponseProcessor
    ) {
        this.api = new ObservableSIMCardGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This action will asynchronously remove an existing Private Wireless Gateway definition from a SIM card group. Completing this operation defines that all SIM cards in the SIM card group will get their traffic handled by Telnyx\'s default mobile network configuration.
     * Request Private Wireless Gateway removal from SIM card group
     * @param id Identifies the resource.
     */
    public removeSIMCardGroupPrivateWirelessGateway(id: string, _options?: Configuration): Promise<SimCardGroupActionGet200Response> {
        const result = this.api.removeSIMCardGroupPrivateWirelessGateway(id, _options);
        return result.toPromise();
    }

    /**
     * This action will asynchronously assign a provisioned Private Wireless Gateway to the SIM card group. Completing this operation defines that all SIM cards in the SIM card group will get their traffic controlled by the associated Private Wireless Gateway. This operation will also imply that new SIM cards assigned to a group will inherit its network definitions. If it\'s moved to a different group that doesn\'t have a Private Wireless Gateway, it\'ll use Telnyx\'s default mobile network configuration.
     * Request Private Wireless Gateway assignment for SIM card group
     * @param id Identifies the resource.
     * @param setSIMCardGroupPrivateWirelessGatewayRequest 
     */
    public setSIMCardGroupPrivateWirelessGateway(id: string, setSIMCardGroupPrivateWirelessGatewayRequest: SetSIMCardGroupPrivateWirelessGatewayRequest, _options?: Configuration): Promise<SimCardGroupActionGet200Response> {
        const result = this.api.setSIMCardGroupPrivateWirelessGateway(id, setSIMCardGroupPrivateWirelessGatewayRequest, _options);
        return result.toPromise();
    }

    /**
     * Permanently deletes a SIM card group
     * Delete a SIM card group
     * @param id Identifies the resource.
     */
    public simCardGroupDelete(id: string, _options?: Configuration): Promise<SimCardGroupsPost200Response> {
        const result = this.api.simCardGroupDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Updates a SIM card group
     * Update a SIM card group
     * @param id Identifies the resource.
     * @param sIMCardGroupPatch 
     */
    public simCardGroupUpdate(id: string, sIMCardGroupPatch: SIMCardGroupPatch, _options?: Configuration): Promise<SimCardGroupsPost200Response> {
        const result = this.api.simCardGroupUpdate(id, sIMCardGroupPatch, _options);
        return result.toPromise();
    }

    /**
     * Returns the details regarding a specific SIM card group
     * Get SIM card group
     * @param id Identifies the resource.
     */
    public simCardGroupsGet(id: string, _options?: Configuration): Promise<SimCardGroupsPost200Response> {
        const result = this.api.simCardGroupsGet(id, _options);
        return result.toPromise();
    }

    /**
     * Get all SIM card groups belonging to the user that match the given filters.
     * Get all SIM card groups
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterName A valid SIM card group name.
     * @param filterPrivateWirelessGatewayId A Private Wireless Gateway ID associated with the group.
     */
    public simCardGroupsGetAll(pageNumber?: number, pageSize?: number, filterName?: string, filterPrivateWirelessGatewayId?: string, _options?: Configuration): Promise<SimCardGroupsGetAll200Response> {
        const result = this.api.simCardGroupsGetAll(pageNumber, pageSize, filterName, filterPrivateWirelessGatewayId, _options);
        return result.toPromise();
    }

    /**
     * Creates a new SIM card group object
     * Create a SIM card group
     * @param sIMCardGroupCreate 
     */
    public simCardGroupsPost(sIMCardGroupCreate: SIMCardGroupCreate, _options?: Configuration): Promise<SimCardGroupsPost200Response> {
        const result = this.api.simCardGroupsPost(sIMCardGroupCreate, _options);
        return result.toPromise();
    }


}



import { ObservableSIMCardOrdersApi } from './ObservableAPI.ts';

import { SIMCardOrdersApiRequestFactory, SIMCardOrdersApiResponseProcessor} from "../apis/SIMCardOrdersApi.ts";
export class PromiseSIMCardOrdersApi {
    private api: ObservableSIMCardOrdersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SIMCardOrdersApiRequestFactory,
        responseProcessor?: SIMCardOrdersApiResponseProcessor
    ) {
        this.api = new ObservableSIMCardOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a single SIM card order by its ID.
     * Get a single SIM card order
     * @param id Identifies the resource.
     */
    public simCardOrderGet(id: string, _options?: Configuration): Promise<SimCardOrdersPost200Response> {
        const result = this.api.simCardOrderGet(id, _options);
        return result.toPromise();
    }

    /**
     * Get all SIM card orders according to filters.
     * Get all SIM card orders
     * @param filterCreatedAt Filter by ISO 8601 formatted date-time string matching resource creation date-time.
     * @param filterUpdatedAt Filter by ISO 8601 formatted date-time string matching resource last update date-time.
     * @param filterQuantity Filter orders by how many SIM cards were ordered.
     * @param filterCostAmount The total monetary amount of the order.
     * @param filterCostCurrency Filter by ISO 4217 currency string.
     * @param filterAddressId Uniquely identifies the address for the order.
     * @param filterAddressStreetAddress Returns entries with matching name of the street where the address is located.
     * @param filterAddressExtendedAddress Returns entries with matching name of the supplemental field for address information.
     * @param filterAddressLocality Filter by the name of the city where the address is located.
     * @param filterAddressAdministrativeArea Filter by state or province where the address is located.
     * @param filterAddressCountryCode Filter by the mobile operator two-character (ISO 3166-1 alpha-2) origin country code.
     * @param filterAddressPostalCode Filter by postal code for the address.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public simCardOrdersGet(filterCreatedAt?: string, filterUpdatedAt?: string, filterQuantity?: number, filterCostAmount?: string, filterCostCurrency?: string, filterAddressId?: string, filterAddressStreetAddress?: string, filterAddressExtendedAddress?: string, filterAddressLocality?: string, filterAddressAdministrativeArea?: string, filterAddressCountryCode?: string, filterAddressPostalCode?: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<SimCardOrdersGet200Response> {
        const result = this.api.simCardOrdersGet(filterCreatedAt, filterUpdatedAt, filterQuantity, filterCostAmount, filterCostCurrency, filterAddressId, filterAddressStreetAddress, filterAddressExtendedAddress, filterAddressLocality, filterAddressAdministrativeArea, filterAddressCountryCode, filterAddressPostalCode, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Creates a new order for SIM cards.
     * Create a SIM card order
     * @param simCardOrderCreate 
     */
    public simCardOrdersPost(simCardOrderCreate: SimCardOrderCreate, _options?: Configuration): Promise<SimCardOrdersPost200Response> {
        const result = this.api.simCardOrdersPost(simCardOrderCreate, _options);
        return result.toPromise();
    }

    /**
     * Preview SIM card order purchases.
     * Preview SIM card orders
     * @param simCardOrdersPreviewRequest 
     */
    public simCardOrdersPreview(simCardOrdersPreviewRequest?: SimCardOrdersPreviewRequest, _options?: Configuration): Promise<SimCardOrdersPreview202Response> {
        const result = this.api.simCardOrdersPreview(simCardOrdersPreviewRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSIMCardsApi } from './ObservableAPI.ts';

import { SIMCardsApiRequestFactory, SIMCardsApiResponseProcessor} from "../apis/SIMCardsApi.ts";
export class PromiseSIMCardsApi {
    private api: ObservableSIMCardsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SIMCardsApiRequestFactory,
        responseProcessor?: SIMCardsApiResponseProcessor
    ) {
        this.api = new ObservableSIMCardsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows dispatching the same operation described for the PUT sim_cards/:sim_card_id/network_preferences API for multiple SIM cards at once.<br/><br/> Although, a SIM card network preference may fail individually under any validation triggered as a consequence of its state. For example, a SIM can\'t have an in-progress OTA update for applying a Network Preference, so they\'ll fail when requested in this API. In that scenario, the specific error will be present in the response along with the successful definitions in the \"errors\" response node. 
     * Bulk Network Preferences for SIM cards
     * @param bulkSIMCardNetworkPreferencesRequest 
     */
    public bulkSIMCardNetworkPreferences(bulkSIMCardNetworkPreferencesRequest?: BulkSIMCardNetworkPreferencesRequest, _options?: Configuration): Promise<BulkSIMCardNetworkPreferences202Response> {
        const result = this.api.bulkSIMCardNetworkPreferences(bulkSIMCardNetworkPreferencesRequest, _options);
        return result.toPromise();
    }

    /**
     * This API triggers an asynchronous operation to set a public IP for each of the specified SIM cards.<br/> For each SIM Card a SIM Card Action will be generated. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Request bulk setting SIM card public IPs.
     * @param bulkSetPublicIPsRequest 
     */
    public bulkSetPublicIPs(bulkSetPublicIPsRequest?: BulkSetPublicIPsRequest, _options?: Configuration): Promise<BulkSetPublicIPs202Response> {
        const result = this.api.bulkSetPublicIPs(bulkSetPublicIPsRequest, _options);
        return result.toPromise();
    }

    /**
     * This API deletes network preferences for a SIM card.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Creating network preferences may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Delete network preferences for a SIM card
     * @param id Identifies the resource.
     */
    public deleteNetworkPreference(id: string, _options?: Configuration): Promise<SimCardActionGet200Response> {
        const result = this.api.deleteNetworkPreference(id, _options);
        return result.toPromise();
    }

    /**
     * Lists a paginated collection of SIM card data usage notifications. It enables exploring the collection using specific filters.
     * List SIM card data usage notifications
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterSimCardId A valid SIM card ID.
     */
    public listSimCardDataUsageNotifications(pageNumber?: number, pageSize?: number, filterSimCardId?: string, _options?: Configuration): Promise<ListSimCardDataUsageNotifications200Response> {
        const result = this.api.listSimCardDataUsageNotifications(pageNumber, pageSize, filterSimCardId, _options);
        return result.toPromise();
    }

    /**
     * It validates whether SIM card registration codes are valid or not.
     * Validate SIM cards registration codes
     * @param postValidateRegistrationCodesRequest 
     */
    public postValidateRegistrationCodes(postValidateRegistrationCodesRequest: PostValidateRegistrationCodesRequest, _options?: Configuration): Promise<SIMCardRegistrationCodeValidations> {
        const result = this.api.postValidateRegistrationCodes(postValidateRegistrationCodesRequest, _options);
        return result.toPromise();
    }

    /**
     * This API removes an existing public IP from a SIM card. <br/><br/>  The API will trigger an asynchronous operation called a SIM Card Action. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API.
     * Request removing a SIM card public IP
     * @param id Identifies the resource.
     */
    public removeSIMCardPublicIP(id: string, _options?: Configuration): Promise<SimCardActionGet200Response> {
        const result = this.api.removeSIMCardPublicIP(id, _options);
        return result.toPromise();
    }

    /**
     * It returns the device details where a SIM card is currently being used. 
     * Get SIM card device details
     * @param simCardId Identifies a SIM card.
     */
    public sIMCardDeviceDetailsGet(simCardId: string, _options?: Configuration): Promise<SIMCardDeviceDetailsGet200Response> {
        const result = this.api.sIMCardDeviceDetailsGet(simCardId, _options);
        return result.toPromise();
    }

    /**
     * This API asynchronously removes the custom-defined network preferences settings. After this operation is done the Telnyx default settings, the same applied for an unaltered SIM card, will be in place. 
     * DELETE network preferences
     * @param simCardId Identifies a SIM card.
     */
    public sIMCardNetworkPreferencesDelete(simCardId: string, _options?: Configuration): Promise<SIMCardNetworkPreferencesGet200Response> {
        const result = this.api.sIMCardNetworkPreferencesDelete(simCardId, _options);
        return result.toPromise();
    }

    /**
     * It returns the network preferences currently applied in the SIM card. 
     * Get network preferences
     * @param simCardId Identifies a SIM card.
     * @param includeOtaUpdates It includes the associated OTA update objects in the response when present.
     */
    public sIMCardNetworkPreferencesGet(simCardId: string, includeOtaUpdates?: boolean, _options?: Configuration): Promise<SIMCardNetworkPreferencesGet200Response> {
        const result = this.api.sIMCardNetworkPreferencesGet(simCardId, includeOtaUpdates, _options);
        return result.toPromise();
    }

    /**
     * This API allows setting or updating a SIM card network preference. <br/><br/> Every SIM card has default network preferences defined on Telnyx. These preferences will determine how a SIMCard will connect to the network by considering a list of preferable operators.<br/><br/> There can be multiple scenarios where an operator can be preferred over another, for example, when a specific mobile operator can provide better network latency or better pricing. 
     * Set network preferences
     * @param simCardId Identifies a SIM card.
     * @param sIMCardNetworkPreferencesPutRequest 
     */
    public sIMCardNetworkPreferencesPut(simCardId: string, sIMCardNetworkPreferencesPutRequest?: SIMCardNetworkPreferencesPutRequest, _options?: Configuration): Promise<SIMCardNetworkPreferencesGet200Response> {
        const result = this.api.sIMCardNetworkPreferencesPut(simCardId, sIMCardNetworkPreferencesPutRequest, _options);
        return result.toPromise();
    }

    /**
     * It returns the public IP requested for a SIM card. 
     * Get SIM card public IP definition
     * @param simCardId Identifies a SIM card.
     */
    public sIMCardPublicIPGet(simCardId: string, _options?: Configuration): Promise<SIMCardPublicIPGet200Response> {
        const result = this.api.sIMCardPublicIPGet(simCardId, _options);
        return result.toPromise();
    }

    /**
     * This API sets network preferences for a SIM card.<br/> Every SIM card has default network preferences defined on Telnyx. These preferences will determine how a SIMCard will connect to the network by considering a list of preferable operators.<br/><br/> The SIM card needs to be attached to the network so this can connect and SMS must be available, otherwise, the operation will fail. This preference will only be respected if the network is available, otherwise the strongest signal will be used. <br/><br/> The API will trigger an asynchronous operation called a SIM Card Action. Creating network preferences may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Create or update network preferences for a SIM card
     * @param id Identifies the resource.
     */
    public setNetworkPreference(id: string, _options?: Configuration): Promise<SimCardActionGet200Response> {
        const result = this.api.setNetworkPreference(id, _options);
        return result.toPromise();
    }

    /**
     * This API makes a SIM card reachable on the public internet by mapping a random public IP to the SIM card. <br/><br/>  The API will trigger an asynchronous operation called a SIM Card Action. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. <br/><br/>  Setting a Public IP to a SIM Card incurs a charge and will only succeed if the account has sufficient funds.
     * Request setting a SIM card public IP
     * @param id Identifies the resource.
     */
    public setSIMCardPublicIP(id: string, _options?: Configuration): Promise<SimCardActionGet200Response> {
        const result = this.api.setSIMCardPublicIP(id, _options);
        return result.toPromise();
    }

    /**
     * Delete the SIM Card Data Usage Notification.
     * Delete SIM card data usage notifications
     * @param id Identifies the resource.
     */
    public simCardDataUsageNotificationsDelete(id: string, _options?: Configuration): Promise<SimCardDataUsageNotificationsPost201Response> {
        const result = this.api.simCardDataUsageNotificationsDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Get a single SIM Card Data Usage Notification.
     * Get a single SIM card data usage notification
     * @param id Identifies the resource.
     */
    public simCardDataUsageNotificationsGet(id: string, _options?: Configuration): Promise<SimCardDataUsageNotificationsPost201Response> {
        const result = this.api.simCardDataUsageNotificationsGet(id, _options);
        return result.toPromise();
    }

    /**
     * Updates information for a SIM Card Data Usage Notification.
     * Updates information for a SIM Card Data Usage Notification
     * @param id Identifies the resource.
     * @param simCardDataUsageNotification 
     */
    public simCardDataUsageNotificationsPatch(id: string, simCardDataUsageNotification: SimCardDataUsageNotification, _options?: Configuration): Promise<SimCardDataUsageNotificationsPost201Response> {
        const result = this.api.simCardDataUsageNotificationsPatch(id, simCardDataUsageNotification, _options);
        return result.toPromise();
    }

    /**
     * Creates a new SIM card data usage notification.
     * Create a new SIM card data usage notification
     * @param simCardDataUsageNotificationsPostRequest 
     */
    public simCardDataUsageNotificationsPost(simCardDataUsageNotificationsPostRequest: SimCardDataUsageNotificationsPostRequest, _options?: Configuration): Promise<SimCardDataUsageNotificationsPost201Response> {
        const result = this.api.simCardDataUsageNotificationsPost(simCardDataUsageNotificationsPostRequest, _options);
        return result.toPromise();
    }

    /**
     * The SIM card will be decommissioned, removed from your account and you will stop being charged.<br />The SIM card won\'t be able to connect to the network after the deletion is completed, thus making it impossible to consume data.<br/> Transitioning to the disabled state may take a period of time.</br> Until the transition is completed, the SIM card status will be disabling <code>disabling</code>.<br />In order to re-enable the SIM card, you will need to re-register it.
     * Deletes a SIM card
     * @param id Identifies the resource.
     */
    public simCardDelete(id: string, _options?: Configuration): Promise<SimCardGet200Response> {
        const result = this.api.simCardDelete(id, _options);
        return result.toPromise();
    }

    /**
     * This API disables a SIM card, disconnecting it from the network and making it impossible to consume data.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the disabled state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Request a SIM card disable
     * @param id Identifies the resource.
     */
    public simCardDisable(id: string, _options?: Configuration): Promise<SimCardActionGet200Response> {
        const result = this.api.simCardDisable(id, _options);
        return result.toPromise();
    }

    /**
     * This API enables a SIM card, connecting it to the network and making it possible to consume data.<br/> To enable a SIM card, it must be associated with a SIM card group.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the enabled state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Request a SIM card enable
     * @param id Identifies the resource.
     */
    public simCardEnable(id: string, _options?: Configuration): Promise<SimCardActionGet200Response> {
        const result = this.api.simCardEnable(id, _options);
        return result.toPromise();
    }

    /**
     * Returns the details regarding a specific SIM card.
     * Get SIM card
     * @param id Identifies the resource.
     * @param includeSimCardGroup It includes the associated SIM card group object in the response when present.
     */
    public simCardGet(id: string, includeSimCardGroup?: boolean, _options?: Configuration): Promise<SimCardGet200Response> {
        const result = this.api.simCardGet(id, includeSimCardGroup, _options);
        return result.toPromise();
    }

    /**
     * Register the SIM cards associated with the provided registration codes to the current user\'s account.<br/><br/> If <code>sim_card_group_id</code> is provided, the SIM cards will be associated with that group. Otherwise, the default group for the current user will be used.<br/><br/> 
     * Register SIM cards
     * @param sIMCardRegistration 
     */
    public simCardRegister(sIMCardRegistration: SIMCardRegistration, _options?: Configuration): Promise<SimCardRegister202Response> {
        const result = this.api.simCardRegister(sIMCardRegistration, _options);
        return result.toPromise();
    }

    /**
     * The SIM card will be able to connect to the network once the process to set it to standby has been completed, thus making it possible to consume data.<br/> To set a SIM card to standby, it must be associated with SIM card group.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the standby state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Request setting a SIM card to standby
     * @param id Identifies the resource.
     */
    public simCardSetStandby(id: string, _options?: Configuration): Promise<SimCardActionGet200Response> {
        const result = this.api.simCardSetStandby(id, _options);
        return result.toPromise();
    }

    /**
     * Updates SIM card data
     * Update a SIM card
     * @param id Identifies the resource.
     * @param sIMCard 
     */
    public simCardUpdate(id: string, sIMCard: SIMCard, _options?: Configuration): Promise<SimCardGet200Response> {
        const result = this.api.simCardUpdate(id, sIMCard, _options);
        return result.toPromise();
    }

    /**
     * Get all SIM cards belonging to the user that match the given filters.
     * Get all SIM cards
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param includeSimCardGroup It includes the associated SIM card group object in the response when present.
     * @param filterSimCardGroupId A valid SIM card group ID.
     * @param filterTags A list of SIM card tags to filter on.&lt;br/&gt;&lt;br/&gt; If the SIM card contains &lt;b&gt;&lt;i&gt;all&lt;/i&gt;&lt;/b&gt; of the given &lt;code&gt;tags&lt;/code&gt; they will be found.&lt;br/&gt;&lt;br/&gt; For example, if the SIM cards have the following tags: &lt;ul&gt;   &lt;li&gt;&lt;code&gt;[\&#39;customers\&#39;, \&#39;staff\&#39;, \&#39;test\&#39;]&lt;/code&gt;   &lt;li&gt;&lt;code&gt;[\&#39;test\&#39;]&lt;/code&gt;&lt;/li&gt;   &lt;li&gt;&lt;code&gt;[\&#39;customers\&#39;]&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt; Searching for &lt;code&gt;[\&#39;customers\&#39;, \&#39;test\&#39;]&lt;/code&gt; returns only the first because it\&#39;s the only one with both tags.&lt;br/&gt; Searching for &lt;code&gt;test&lt;/code&gt; returns the first two SIMs, because both of them have such tag.&lt;br/&gt; Searching for &lt;code&gt;customers&lt;/code&gt; returns the first and last SIMs.&lt;br/&gt; 
     * @param filterIccid A search string to partially match for the SIM card\&#39;s ICCID.
     * @param filterStatus Filter by a SIM card\&#39;s status.
     */
    public simCardsGet(pageNumber?: number, pageSize?: number, includeSimCardGroup?: boolean, filterSimCardGroupId?: string, filterTags?: Array<string>, filterIccid?: string, filterStatus?: Array<'enabled' | 'disabled' | 'standby' | 'data_limit_exceeded' | 'unauthorized_imei'>, _options?: Configuration): Promise<SimCardsGet200Response> {
        const result = this.api.simCardsGet(pageNumber, pageSize, includeSimCardGroup, filterSimCardGroupId, filterTags, filterIccid, filterStatus, _options);
        return result.toPromise();
    }

    /**
     * This API allows listing a paginated collection of Wireless Connectivity Logs associated with a SIM Card, for troubleshooting purposes.
     * List wireless connectivity logs
     * @param simCardId Identifies a SIM card.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public wirelessConnectivityLogsGet(simCardId: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<WirelessConnectivityLogsGet200Response> {
        const result = this.api.wirelessConnectivityLogsGet(simCardId, pageNumber, pageSize, _options);
        return result.toPromise();
    }


}



import { ObservableSharedCampaignsApi } from './ObservableAPI.ts';

import { SharedCampaignsApiRequestFactory, SharedCampaignsApiResponseProcessor} from "../apis/SharedCampaignsApi.ts";
export class PromiseSharedCampaignsApi {
    private api: ObservableSharedCampaignsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SharedCampaignsApiRequestFactory,
        responseProcessor?: SharedCampaignsApiResponseProcessor
    ) {
        this.api = new ObservableSharedCampaignsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all partner campaigns you have shared to Telnyx in a paginated fashion  This endpoint is currently limited to only returning shared campaigns that Telnyx has accepted. In other words, shared but pending campaigns are currently omitted from the response from this endpoint.
     * Get Partner Campaigns Shared By User
     * @param page The 1-indexed page number to get. The default value is &#x60;1&#x60;.
     * @param recordsPerPage The amount of records per page, limited to between 1 and 500 inclusive. The default value is &#x60;10&#x60;.
     */
    public getPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGet(page?: number, recordsPerPage?: number, _options?: Configuration): Promise<SharedCampaignRecordSet> {
        const result = this.api.getPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGet(page, recordsPerPage, _options);
        return result.toPromise();
    }

    /**
     * Get Sharing Status
     * @param campaignId ID of the campaign in question
     */
    public getSharingStatusPartnerCampaignCampaignIdSharingGet(campaignId: string, _options?: Configuration): Promise<{ [key: string]: CampaignSharingStatus; }> {
        const result = this.api.getSharingStatusPartnerCampaignCampaignIdSharingGet(campaignId, _options);
        return result.toPromise();
    }


}



import { ObservableShortCodesApi } from './ObservableAPI.ts';

import { ShortCodesApiRequestFactory, ShortCodesApiResponseProcessor} from "../apis/ShortCodesApi.ts";
export class PromiseShortCodesApi {
    private api: ObservableShortCodesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ShortCodesApiRequestFactory,
        responseProcessor?: ShortCodesApiResponseProcessor
    ) {
        this.api = new ObservableShortCodesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List short codes
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterMessagingProfileId Filter by Messaging Profile ID. Use the string &#x60;null&#x60; for phone numbers without assigned profiles. A synonym for the &#x60;/messaging_profiles/{id}/short_codes&#x60; endpoint when querying about an extant profile.
     */
    public listShortCodes(pageNumber?: number, pageSize?: number, filterMessagingProfileId?: string, _options?: Configuration): Promise<ListShortCodesResponse> {
        const result = this.api.listShortCodes(pageNumber, pageSize, filterMessagingProfileId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a short code
     * @param id The id of the short code
     */
    public retrieveShortCode(id: string, _options?: Configuration): Promise<ShortCodeResponse> {
        const result = this.api.retrieveShortCode(id, _options);
        return result.toPromise();
    }

    /**
     * Update the settings for a specific short code. To unbind a short code from a profile, set the `messaging_profile_id` to `null` or an empty string.
     * Update short code
     * @param id The id of the short code
     * @param updateShortCodeRequest Short code update
     */
    public updateShortCode(id: string, updateShortCodeRequest: UpdateShortCodeRequest, _options?: Configuration): Promise<ShortCodeResponse> {
        const result = this.api.updateShortCode(id, updateShortCodeRequest, _options);
        return result.toPromise();
    }


}



import { ObservableTeXMLApplicationsApi } from './ObservableAPI.ts';

import { TeXMLApplicationsApiRequestFactory, TeXMLApplicationsApiResponseProcessor} from "../apis/TeXMLApplicationsApi.ts";
export class PromiseTeXMLApplicationsApi {
    private api: ObservableTeXMLApplicationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TeXMLApplicationsApiRequestFactory,
        responseProcessor?: TeXMLApplicationsApiResponseProcessor
    ) {
        this.api = new ObservableTeXMLApplicationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a TeXML Application.
     * Creates a TeXML Application
     * @param createTexmlApplicationRequest Parameters that can be set when creating a TeXML Application
     */
    public createTexmlApplication(createTexmlApplicationRequest: CreateTexmlApplicationRequest, _options?: Configuration): Promise<TexmlApplicationResponse> {
        const result = this.api.createTexmlApplication(createTexmlApplicationRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes a TeXML Application.
     * Deletes a TeXML Application
     * @param id Identifies the resource.
     */
    public deleteTexmlApplication(id: string, _options?: Configuration): Promise<TexmlApplicationResponse> {
        const result = this.api.deleteTexmlApplication(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of your TeXML Applications.
     * List all TeXML Applications
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterFriendlyNameContains If present, applications with &lt;code&gt;friendly_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @param filterOutboundVoiceProfileId Identifies the associated outbound voice profile.
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     */
    public findTexmlApplications(pageNumber?: number, pageSize?: number, filterFriendlyNameContains?: string, filterOutboundVoiceProfileId?: string, sort?: 'created_at' | 'connection_name' | 'active', _options?: Configuration): Promise<GetAllTexmlApplicationsResponse> {
        const result = this.api.findTexmlApplications(pageNumber, pageSize, filterFriendlyNameContains, filterOutboundVoiceProfileId, sort, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the details of an existing TeXML Application.
     * Retrieve a TeXML Application
     * @param id Identifies the resource.
     */
    public getTexmlApplication(id: string, _options?: Configuration): Promise<TexmlApplicationResponse> {
        const result = this.api.getTexmlApplication(id, _options);
        return result.toPromise();
    }

    /**
     * Updates settings of an existing TeXML Application.
     * Update a TeXML Application
     * @param id Identifies the resource.
     * @param updateTexmlApplicationRequest Parameters that can be updated in a TeXML Application
     */
    public updateTexmlApplication(id: string, updateTexmlApplicationRequest: UpdateTexmlApplicationRequest, _options?: Configuration): Promise<TexmlApplicationResponse> {
        const result = this.api.updateTexmlApplication(id, updateTexmlApplicationRequest, _options);
        return result.toPromise();
    }


}



import { ObservableTeXMLRESTCommandsApi } from './ObservableAPI.ts';

import { TeXMLRESTCommandsApiRequestFactory, TeXMLRESTCommandsApiResponseProcessor} from "../apis/TeXMLRESTCommandsApi.ts";
export class PromiseTeXMLRESTCommandsApi {
    private api: ObservableTeXMLRESTCommandsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TeXMLRESTCommandsApiRequestFactory,
        responseProcessor?: TeXMLRESTCommandsApiResponseProcessor
    ) {
        this.api = new ObservableTeXMLRESTCommandsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a TeXML secret which can be later used as a Dynamic Parameter for TeXML when using Mustache Templates in your TeXML. In your TeXML you will be able to use your secret name, and this name will be replaced by the actual secret value when processing the TeXML on Telnyx side.  The secrets are not visible in any logs.
     * Create a TeXML secret
     * @param createTeXMLSecretRequest Create TeXML secret request object
     */
    public createTeXMLSecret(createTeXMLSecretRequest: CreateTeXMLSecretRequest, _options?: Configuration): Promise<CreateTeXMLSecretRequest> {
        const result = this.api.createTeXMLSecret(createTeXMLSecretRequest, _options);
        return result.toPromise();
    }

    /**
     * Initiate an outbound TeXML call. Telnyx will request TeXML from the XML Request URL configured for the connection in the Mission Control Portal.
     * Initiate an outbound call
     * @param applicationId The ID of the TeXML application used for the call.
     * @param initiateCallRequest Iniatiate Call request object
     */
    public initiateTeXMLCall(applicationId: string, initiateCallRequest: InitiateCallRequest, _options?: Configuration): Promise<InitiateTeXMLCallResponse> {
        const result = this.api.initiateTeXMLCall(applicationId, initiateCallRequest, _options);
        return result.toPromise();
    }

    /**
     * Update TeXML call. Please note that the keys present in the payload MUST BE formatted in CamelCase as specified in the example.
     * Update call
     * @param callSid The CallSid that identifies the call to update.
     * @param updateCallRequest Update Call request object
     */
    public updateTeXMLCall(callSid: string, updateCallRequest: UpdateCallRequest, _options?: Configuration): Promise<TeXMLRESTCommandResponse> {
        const result = this.api.updateTeXMLCall(callSid, updateCallRequest, _options);
        return result.toPromise();
    }


}



import { ObservableV2Api } from './ObservableAPI.ts';

import { V2ApiRequestFactory, V2ApiResponseProcessor} from "../apis/V2Api.ts";
export class PromiseV2Api {
    private api: ObservableV2Api

    public constructor(
        configuration: Configuration,
        requestFactory?: V2ApiRequestFactory,
        responseProcessor?: V2ApiResponseProcessor
    ) {
        this.api = new ObservableV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Auto-Reponse Setting
     * @param profileId 
     * @param autoRespConfigCreateSchema 
     */
    public createAutorespConfigApiV2AutorespConfigsProfileIdPost(profileId: string, autoRespConfigCreateSchema: AutoRespConfigCreateSchema, _options?: Configuration): Promise<AutorespConfigResponseSchema> {
        const result = this.api.createAutorespConfigApiV2AutorespConfigsProfileIdPost(profileId, autoRespConfigCreateSchema, _options);
        return result.toPromise();
    }

    /**
     * Delete Auto-Response Setting
     * @param profileId 
     * @param autorespCfgId 
     */
    public deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(profileId: string, autorespCfgId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(profileId, autorespCfgId, _options);
        return result.toPromise();
    }

    /**
     * Get Auto-Response Setting
     * @param profileId 
     * @param autorespCfgId 
     */
    public getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(profileId: string, autorespCfgId: string, _options?: Configuration): Promise<AutorespConfigResponseSchema> {
        const result = this.api.getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(profileId, autorespCfgId, _options);
        return result.toPromise();
    }

    /**
     * List Auto-Response Settings
     * @param profileId 
     * @param countryCode 
     * @param createdAtGte 
     * @param createdAtLte 
     * @param updatedAtGte 
     * @param updatedAtLte 
     */
    public getAutorespConfigsApiV2AutorespConfigsProfileIdGet(profileId: string, countryCode?: string, createdAtGte?: string, createdAtLte?: string, updatedAtGte?: string, updatedAtLte?: string, _options?: Configuration): Promise<AutorespConfigsResponseSchema> {
        const result = this.api.getAutorespConfigsApiV2AutorespConfigsProfileIdGet(profileId, countryCode, createdAtGte, createdAtLte, updatedAtGte, updatedAtLte, _options);
        return result.toPromise();
    }

    /**
     * Update Auto-Response Setting
     * @param profileId 
     * @param autorespCfgId 
     * @param autoRespConfigCreateSchema 
     */
    public updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(profileId: string, autorespCfgId: string, autoRespConfigCreateSchema: AutoRespConfigCreateSchema, _options?: Configuration): Promise<AutorespConfigResponseSchema> {
        const result = this.api.updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(profileId, autorespCfgId, autoRespConfigCreateSchema, _options);
        return result.toPromise();
    }


}



import { ObservableVerifiedCallsDisplayProfileApi } from './ObservableAPI.ts';

import { VerifiedCallsDisplayProfileApiRequestFactory, VerifiedCallsDisplayProfileApiResponseProcessor} from "../apis/VerifiedCallsDisplayProfileApi.ts";
export class PromiseVerifiedCallsDisplayProfileApi {
    private api: ObservableVerifiedCallsDisplayProfileApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VerifiedCallsDisplayProfileApiRequestFactory,
        responseProcessor?: VerifiedCallsDisplayProfileApiResponseProcessor
    ) {
        this.api = new ObservableVerifiedCallsDisplayProfileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Verified Calls Display Profile associated with the given Business Identity
     * Creates a Verified Calls Display Profile
     * @param createVerifiedCallsDisplayProfileRequest 
     */
    public createVerifiedCallsDisplayProfile(createVerifiedCallsDisplayProfileRequest: CreateVerifiedCallsDisplayProfileRequest, _options?: Configuration): Promise<ShowVerifiedCallsDisplayProfileResponse> {
        const result = this.api.createVerifiedCallsDisplayProfile(createVerifiedCallsDisplayProfileRequest, _options);
        return result.toPromise();
    }

    /**
     * Starts a new Verified Calls Display Profile verification process.
     * Creates a Verification Request
     * @param id Identifies the Verified Calls Display Profile
     */
    public createVerifiedCallsDisplayProfileVerificationRequest(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.createVerifiedCallsDisplayProfileVerificationRequest(id, _options);
        return result.toPromise();
    }

    /**
     * Deletes the Verified Calls Display Profile. This action will fail if any verification requests have been made for this Verified Calls Display Profile. Please contact support@telnyx.com in case you want to delete a Verified Calls Display Profile in that situation.
     * Deletes the Verified Calls Display Profile
     * @param id Identifies the Verified Calls Display Profile
     */
    public deleteVerifiedCallsDisplayProfile(id: string, _options?: Configuration): Promise<ShowVerifiedCallsDisplayProfileResponse> {
        const result = this.api.deleteVerifiedCallsDisplayProfile(id, _options);
        return result.toPromise();
    }

    /**
     * Display the Verified Calls Display Profile
     * @param id Identifies the Verified Calls Display Profile
     */
    public displayVerifiedCallsDisplayProfile(id: string, _options?: Configuration): Promise<ShowVerifiedCallsDisplayProfileResponse> {
        const result = this.api.displayVerifiedCallsDisplayProfile(id, _options);
        return result.toPromise();
    }

    /**
     * Lists the Verified Calls Display Profiles owned by the current user/organization
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listVerifiedCallsDisplayProfiles(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListVerifiedCallsDisplayProfilesResponse> {
        const result = this.api.listVerifiedCallsDisplayProfiles(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Update an existing Verified Calls Display Profile and allows adding/removing nested Call Reasons and Phone Numbers. Different attributes can be updated depending on the Verified Calls Display Profile\'s status: For the VERIFICATION_STATE_PENDING status, no fields can be updated. For the VERIFICATION_STATE_VERIFIED status, it is allowed only to add/remove Call Reaons and Phone Numbers. For the other statuses, all fields can be updated. All existing Call Reasons and Phone Numbers must be sent during the request, or the update will fail.
     * Update a Verified Calls Display Profile
     * @param id Identifies the Verified Calls Display Profile
     * @param body 
     */
    public updateVerifiedCallsDisplayProfile(id: string, body: any, _options?: Configuration): Promise<void> {
        const result = this.api.updateVerifiedCallsDisplayProfile(id, body, _options);
        return result.toPromise();
    }


}



import { ObservableVerifiedNumbersApi } from './ObservableAPI.ts';

import { VerifiedNumbersApiRequestFactory, VerifiedNumbersApiResponseProcessor} from "../apis/VerifiedNumbersApi.ts";
export class PromiseVerifiedNumbersApi {
    private api: ObservableVerifiedNumbersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VerifiedNumbersApiRequestFactory,
        responseProcessor?: VerifiedNumbersApiResponseProcessor
    ) {
        this.api = new ObservableVerifiedNumbersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Initiates phone number verification procedure.
     * Request phone number verification
     * @param createVerifiedNumberRequest 
     */
    public createVerifiedNumber(createVerifiedNumberRequest: CreateVerifiedNumberRequest, _options?: Configuration): Promise<CreateVerifiedNumberResponse> {
        const result = this.api.createVerifiedNumber(createVerifiedNumberRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a verified number
     * @param phoneNumber The phone number being deleted.
     */
    public deleteVerifiedNumber(phoneNumber: string, _options?: Configuration): Promise<VerifiedNumberResponseDataWrapper> {
        const result = this.api.deleteVerifiedNumber(phoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Gets a paginated list of Verified Numbers.
     * List all Verified Numbers
     * @param pageSize 
     * @param pageNumber 
     */
    public listVerifiedNumbers(pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<ListVerifiedNumbersResponse> {
        const result = this.api.listVerifiedNumbers(pageSize, pageNumber, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a verified number
     * @param phoneNumber The phone number being requested.
     */
    public retrieveVerifiedNumber(phoneNumber: string, _options?: Configuration): Promise<VerifiedNumberResponseDataWrapper> {
        const result = this.api.retrieveVerifiedNumber(phoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Submit verification code
     * @param phoneNumber The phone number being verified.
     * @param verifyVerificationCodeRequest 
     */
    public verifiedNumbersPhoneNumberActionsVerifyPost(phoneNumber: string, verifyVerificationCodeRequest: VerifyVerificationCodeRequest, _options?: Configuration): Promise<VerifiedNumberResponseDataWrapper> {
        const result = this.api.verifiedNumbersPhoneNumberActionsVerifyPost(phoneNumber, verifyVerificationCodeRequest, _options);
        return result.toPromise();
    }


}



import { ObservableVerifyApi } from './ObservableAPI.ts';

import { VerifyApiRequestFactory, VerifyApiResponseProcessor} from "../apis/VerifyApi.ts";
export class PromiseVerifyApi {
    private api: ObservableVerifyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VerifyApiRequestFactory,
        responseProcessor?: VerifyApiResponseProcessor
    ) {
        this.api = new ObservableVerifyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Trigger a Call verification
     * @param createVerificationRequestCall 
     */
    public createVerificationCall(createVerificationRequestCall: CreateVerificationRequestCall, _options?: Configuration): Promise<CreateVerificationResponse> {
        const result = this.api.createVerificationCall(createVerificationRequestCall, _options);
        return result.toPromise();
    }

    /**
     * Trigger a Flash call verification
     * @param createVerificationRequestFlashcall 
     */
    public createVerificationFlashcall(createVerificationRequestFlashcall: CreateVerificationRequestFlashcall, _options?: Configuration): Promise<CreateVerificationResponse> {
        const result = this.api.createVerificationFlashcall(createVerificationRequestFlashcall, _options);
        return result.toPromise();
    }

    /**
     * Trigger a PSD2 verification
     * @param createVerificationRequestPSD2 
     */
    public createVerificationPSD2(createVerificationRequestPSD2: CreateVerificationRequestPSD2, _options?: Configuration): Promise<CreateVerificationResponse> {
        const result = this.api.createVerificationPSD2(createVerificationRequestPSD2, _options);
        return result.toPromise();
    }

    /**
     * Trigger a SMS verification
     * @param createVerificationRequestSMS 
     */
    public createVerificationSMS(createVerificationRequestSMS: CreateVerificationRequestSMS, _options?: Configuration): Promise<CreateVerificationResponse> {
        const result = this.api.createVerificationSMS(createVerificationRequestSMS, _options);
        return result.toPromise();
    }

    /**
     * Trigger a Whatsapp verification
     * @param createVerificationRequestWhatsapp 
     */
    public createVerificationWhatsapp(createVerificationRequestWhatsapp: CreateVerificationRequestWhatsapp, _options?: Configuration): Promise<CreateVerificationResponse> {
        const result = this.api.createVerificationWhatsapp(createVerificationRequestWhatsapp, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Verify profile to associate verifications with.
     * Create a Verify profile
     * @param createVerifyProfileRequest 
     */
    public createVerifyProfile(createVerifyProfileRequest: CreateVerifyProfileRequest, _options?: Configuration): Promise<VerifyProfileResponseDataWrapper> {
        const result = this.api.createVerifyProfile(createVerifyProfileRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a Verify profile
     * @param verifyProfileId The identifier of the Verify profile to delete.
     */
    public deleteVerifyProfile(verifyProfileId: string, _options?: Configuration): Promise<VerifyProfileResponseDataWrapper> {
        const result = this.api.deleteVerifyProfile(verifyProfileId, _options);
        return result.toPromise();
    }

    /**
     * List verifications by phone number
     * @param phoneNumber The phone number associated with the verifications to retrieve.
     */
    public listVerifications(phoneNumber: string, _options?: Configuration): Promise<ListVerificationsResponse> {
        const result = this.api.listVerifications(phoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Gets a paginated list of Verify profiles.
     * List all Verify profiles
     * @param filterName 
     * @param pageSize 
     * @param pageNumber 
     */
    public listVerifyProfiles(filterName?: string, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<ListVerifyProfilesResponse> {
        const result = this.api.listVerifyProfiles(filterName, pageSize, pageNumber, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a verification
     * @param verificationId The identifier of the verification to retrieve.
     */
    public retrieveVerification(verificationId: string, _options?: Configuration): Promise<RetrieveVerificationResponse> {
        const result = this.api.retrieveVerification(verificationId, _options);
        return result.toPromise();
    }

    /**
     * Gets a single Verify profile.
     * Retrieve a Verify profile
     * @param verifyProfileId The identifier of the Verify profile to retrieve.
     */
    public retrieveVerifyProfile(verifyProfileId: string, _options?: Configuration): Promise<VerifyProfileResponseDataWrapper> {
        const result = this.api.retrieveVerifyProfile(verifyProfileId, _options);
        return result.toPromise();
    }

    /**
     * Update a Verify profile
     * @param verifyProfileId The identifier of the Verify profile to update.
     * @param updateVerifyProfileRequest 
     */
    public updateVerifyProfile(verifyProfileId: string, updateVerifyProfileRequest: UpdateVerifyProfileRequest, _options?: Configuration): Promise<VerifyProfileResponseDataWrapper> {
        const result = this.api.updateVerifyProfile(verifyProfileId, updateVerifyProfileRequest, _options);
        return result.toPromise();
    }

    /**
     * Submit a verification code. Deprecation notice: `verify_profile_id\' is now a mandatory field. The sunset date for this change is 2022-04-02 00:00:00.
     * @param phoneNumber The phone number associated with the verification code being verified.
     * @param verifyVerificationCodeRequest 
     */
    public verifyVerificationCode(phoneNumber: string, verifyVerificationCodeRequest: VerifyVerificationCodeRequest, _options?: Configuration): Promise<VerifyVerificationCodeResponse> {
        const result = this.api.verifyVerificationCode(phoneNumber, verifyVerificationCodeRequest, _options);
        return result.toPromise();
    }


}



import { ObservableVirtualCrossConnectsApi } from './ObservableAPI.ts';

import { VirtualCrossConnectsApiRequestFactory, VirtualCrossConnectsApiResponseProcessor} from "../apis/VirtualCrossConnectsApi.ts";
export class PromiseVirtualCrossConnectsApi {
    private api: ObservableVirtualCrossConnectsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VirtualCrossConnectsApiRequestFactory,
        responseProcessor?: VirtualCrossConnectsApiResponseProcessor
    ) {
        this.api = new ObservableVirtualCrossConnectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all Virtual Cross Connects.
     * List all Virtual Cross Connects
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterNetworkId The associated network id to filter on.
     */
    public virtaulCrossConnectList(pageNumber?: number, pageSize?: number, filterNetworkId?: string, _options?: Configuration): Promise<VirtaulCrossConnectList200Response> {
        const result = this.api.virtaulCrossConnectList(pageNumber, pageSize, filterNetworkId, _options);
        return result.toPromise();
    }

    /**
     * List all Virtual Cross Connects Cloud Regions.<br /><br />This endpoint shows which cloud regions are available for the `region_code` your Virtual Cross Connect will be provisioned in.
     * List all Virtual Cross Connect Cloud Regions
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterRegionCode The Telnyx region code
     * @param filterCloudProvider The Telnyx region code
     */
    public virtaulCrossConnectRegionList(pageNumber?: number, pageSize?: number, filterRegionCode?: string, filterCloudProvider?: 'aws' | 'azure' | 'gce', _options?: Configuration): Promise<VirtaulCrossConnectRegionList200Response> {
        const result = this.api.virtaulCrossConnectRegionList(pageNumber, pageSize, filterRegionCode, filterCloudProvider, _options);
        return result.toPromise();
    }

    /**
     * Create a new Virtual Cross Connect.<br /><br />For AWS and GCE, you have the option of creating the primary connection first and the secondary connection later. You also have the option of disabling the primary and/or secondary connections at any time and later re-enabling them. With Azure, you do not have this option. Azure requires both the primary and secondary connections to be created at the same time and they can not be independantly disabled.
     * Create a Virtual Cross Connect
     * @param virtualCrossConnectCreate 
     */
    public virtualCrossConnectCreate(virtualCrossConnectCreate: VirtualCrossConnectCreate, _options?: Configuration): Promise<VirtualCrossConnectCreate200Response> {
        const result = this.api.virtualCrossConnectCreate(virtualCrossConnectCreate, _options);
        return result.toPromise();
    }

    /**
     * Delete a Virtual Cross Connect.
     * Delete a Virtual Cross Connect
     * @param id Identifies the resource.
     */
    public virtualCrossConnectDelete(id: string, _options?: Configuration): Promise<VirtualCrossConnectCreate200Response> {
        const result = this.api.virtualCrossConnectDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a Virtual Cross Connect.
     * Retrieve a Virtual Cross Connect
     * @param id Identifies the resource.
     */
    public virtualCrossConnectGet(id: string, _options?: Configuration): Promise<VirtualCrossConnectCreate200Response> {
        const result = this.api.virtualCrossConnectGet(id, _options);
        return result.toPromise();
    }

    /**
     * Provision a new Virtual Cross Connect.<br /><br />This endpoint is only necessary for GCE cloud regions. Once you have patched your Cloud IPs, you must POST this request to trigger the provision.
     * Provision a Virtual Cross Connect
     * @param id Identifies the resource.
     */
    public virtualCrossConnectProvision(id: string, _options?: Configuration): Promise<VirtualCrossConnectCreate200Response> {
        const result = this.api.virtualCrossConnectProvision(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a Virtual Cross Connect Cloud Regions.
     * Retrieve a Virtual Cross Connect Cloud Regions
     * @param id Identifies the resource.
     */
    public virtualCrossConnectRegionGet(id: string, _options?: Configuration): Promise<VirtualCrossConnectRegionGet200Response> {
        const result = this.api.virtualCrossConnectRegionGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update the Virtual Cross Connect.<br /><br />Cloud IPs can only be patched during the `created` state, as GCE will only inform you of your generated IP once the pending connection requested has been accepted. Once the Virtual Cross Connect has moved to `provisioning`, the IPs can no longer be patched.<br /><br />Once the Virtual Cross Connect has moved to `provisioned` and you are ready to enable routing, you can toggle the routing announcements to `true`.
     * Update the Virtual Cross Connect
     * @param id Identifies the resource.
     * @param virtualCrossConnectPatch 
     */
    public virtualCrossConnectUpdate(id: string, virtualCrossConnectPatch: VirtualCrossConnectPatch, _options?: Configuration): Promise<VirtualCrossConnectCreate200Response> {
        const result = this.api.virtualCrossConnectUpdate(id, virtualCrossConnectPatch, _options);
        return result.toPromise();
    }


}



import { ObservableWDRDetailReportsApi } from './ObservableAPI.ts';

import { WDRDetailReportsApiRequestFactory, WDRDetailReportsApiResponseProcessor} from "../apis/WDRDetailReportsApi.ts";
export class PromiseWDRDetailReportsApi {
    private api: ObservableWDRDetailReportsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WDRDetailReportsApiRequestFactory,
        responseProcessor?: WDRDetailReportsApiResponseProcessor
    ) {
        this.api = new ObservableWDRDetailReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch all Wdr records 
     * @param startDate Start date
     * @param endDate End date
     * @param id 
     * @param mcc 
     * @param mnc 
     * @param imsi 
     * @param simGroupName 
     * @param simGroupId 
     * @param simCardId 
     * @param phoneNumber 
     * @param pageNumber Page number
     * @param pageSize Size of the page
     * @param sort 
     */
    public getPaginatedWdrs(startDate?: string, endDate?: string, id?: string, mcc?: string, mnc?: string, imsi?: string, simGroupName?: string, simGroupId?: string, simCardId?: string, phoneNumber?: string, pageNumber?: number, pageSize?: number, sort?: Array<string>, _options?: Configuration): Promise<ExternalWdrGetDetailResponse> {
        const result = this.api.getPaginatedWdrs(startDate, endDate, id, mcc, mnc, imsi, simGroupName, simGroupId, simCardId, phoneNumber, pageNumber, pageSize, sort, _options);
        return result.toPromise();
    }


}



import { ObservableWebhooksApi } from './ObservableAPI.ts';

import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor} from "../apis/WebhooksApi.ts";
export class PromiseWebhooksApi {
    private api: ObservableWebhooksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhooksApiRequestFactory,
        responseProcessor?: WebhooksApiResponseProcessor
    ) {
        this.api = new ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Lists webhook_deliveries for the authenticated user
     * List webhook deliveries
     * @param filterStatusEq Return only webhook_deliveries matching the given &#x60;status&#x60;
     * @param filterEventType Return only webhook_deliveries matching the given value of &#x60;event_type&#x60;. Accepts multiple values separated by a &#x60;,&#x60;.
     * @param filterWebhookContains Return only webhook deliveries whose &#x60;webhook&#x60; component contains the given text
     * @param filterAttemptsContains Return only webhook_deliveries whose &#x60;attempts&#x60; component contains the given text
     * @param filterStartedAtGte Return only webhook_deliveries whose delivery started later than or at given ISO 8601 datetime
     * @param filterStartedAtLte Return only webhook_deliveries whose delivery started earlier than or at given ISO 8601 datetime
     * @param filterFinishedAtGte Return only webhook_deliveries whose delivery finished later than or at given ISO 8601 datetime
     * @param filterFinishedAtLte Return only webhook_deliveries whose delivery finished earlier than or at given ISO 8601 datetime
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public getWebhookDeliveries(filterStatusEq?: 'delivered' | 'failed', filterEventType?: string, filterWebhookContains?: string, filterAttemptsContains?: string, filterStartedAtGte?: string, filterStartedAtLte?: string, filterFinishedAtGte?: string, filterFinishedAtLte?: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<GetWebhookDeliveries200Response> {
        const result = this.api.getWebhookDeliveries(filterStatusEq, filterEventType, filterWebhookContains, filterAttemptsContains, filterStartedAtGte, filterStartedAtLte, filterFinishedAtGte, filterFinishedAtLte, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Provides webhook_delivery debug data, such as timestamps, delivery status and attempts.
     * Find webhook_delivery details by ID
     * @param id Uniquely identifies the webhook_delivery.
     */
    public getWebhookDelivery(id: string, _options?: Configuration): Promise<GetWebhookDelivery200Response> {
        const result = this.api.getWebhookDelivery(id, _options);
        return result.toPromise();
    }


}



import { ObservableWhatsAppBusinessAccountApi } from './ObservableAPI.ts';

import { WhatsAppBusinessAccountApiRequestFactory, WhatsAppBusinessAccountApiResponseProcessor} from "../apis/WhatsAppBusinessAccountApi.ts";
export class PromiseWhatsAppBusinessAccountApi {
    private api: ObservableWhatsAppBusinessAccountApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WhatsAppBusinessAccountApiRequestFactory,
        responseProcessor?: WhatsAppBusinessAccountApiResponseProcessor
    ) {
        this.api = new ObservableWhatsAppBusinessAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Lists the WhatsApp Business Accounts owned by the current organization
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public listWhatsappBusinessAccounts(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<ListWhatsAppBusinessAccountsResponse> {
        const result = this.api.listWhatsappBusinessAccounts(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a WhatsApp Business Account
     * @param id Identifies the WhatsApp Business Account
     */
    public retrieveWhatsappBusinessAccount(id: string, _options?: Configuration): Promise<WhatsAppBusinessAccount> {
        const result = this.api.retrieveWhatsappBusinessAccount(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the phone numbers from a WhatsApp Business Account
     * @param id Identifies the WhatsApp Business Account
     */
    public retrieveWhatsappBusinessAccountPhoneNumbers(id: string, _options?: Configuration): Promise<ListWhatsAppPhoneNumbersResponse> {
        const result = this.api.retrieveWhatsappBusinessAccountPhoneNumbers(id, _options);
        return result.toPromise();
    }


}



import { ObservableWhatsAppContactsApi } from './ObservableAPI.ts';

import { WhatsAppContactsApiRequestFactory, WhatsAppContactsApiResponseProcessor} from "../apis/WhatsAppContactsApi.ts";
export class PromiseWhatsAppContactsApi {
    private api: ObservableWhatsAppContactsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WhatsAppContactsApiRequestFactory,
        responseProcessor?: WhatsAppContactsApiResponseProcessor
    ) {
        this.api = new ObservableWhatsAppContactsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Verify that a phone number belongs to a valid WhatsApp account. You must ensure that the status is valid before you can message a user, and you\'ll get their WhatsApp ID to use for messaging.
     * Check Contact
     * @param checkContactRequestBody 
     */
    public checkContact(checkContactRequestBody: CheckContactRequestBody, _options?: Configuration): Promise<CheckContactResponse> {
        const result = this.api.checkContact(checkContactRequestBody, _options);
        return result.toPromise();
    }


}



import { ObservableWhatsAppDetailReportsApi } from './ObservableAPI.ts';

import { WhatsAppDetailReportsApiRequestFactory, WhatsAppDetailReportsApiResponseProcessor} from "../apis/WhatsAppDetailReportsApi.ts";
export class PromiseWhatsAppDetailReportsApi {
    private api: ObservableWhatsAppDetailReportsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WhatsAppDetailReportsApiRequestFactory,
        responseProcessor?: WhatsAppDetailReportsApiResponseProcessor
    ) {
        this.api = new ObservableWhatsAppDetailReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete generated WhatsApp detail report by id
     * @param id 
     */
    public deleteRequest(id: string, _options?: Configuration): Promise<WhatsAppDetailReportResponse> {
        const result = this.api.deleteRequest(id, _options);
        return result.toPromise();
    }

    /**
     * Fetch single whatsapp detail report by id.
     * @param id 
     */
    public getRequest(id: string, _options?: Configuration): Promise<WhatsAppDetailReportResponse> {
        const result = this.api.getRequest(id, _options);
        return result.toPromise();
    }

    /**
     * Fetch all previous requests for WhatsApp detail reports. WhatsApp detail reports are reports for pulling all WhatsApp records. 
     * @param pageNumber Page number
     * @param pageSize Size of the page
     */
    public getRequests(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<WhatsAppGetAllDetailReportResponse> {
        const result = this.api.getRequests(pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Submit a request for new WhatsApp detail report. WhatsApp detail report pulls all raw WhatsApp data according to defined filters.
     * @param whatsAppReportsReq WhatsApp detail request data
     */
    public submitRequest(whatsAppReportsReq: WhatsAppReportsReq, _options?: Configuration): Promise<WhatsAppDetailReportResponse> {
        const result = this.api.submitRequest(whatsAppReportsReq, _options);
        return result.toPromise();
    }


}



import { ObservableWhatsAppMediaApi } from './ObservableAPI.ts';

import { WhatsAppMediaApiRequestFactory, WhatsAppMediaApiResponseProcessor} from "../apis/WhatsAppMediaApi.ts";
export class PromiseWhatsAppMediaApi {
    private api: ObservableWhatsAppMediaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WhatsAppMediaApiRequestFactory,
        responseProcessor?: WhatsAppMediaApiResponseProcessor
    ) {
        this.api = new ObservableWhatsAppMediaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete uploaded media.
     * Delete Media
     * @param whatsappUserId User\&#39;s WhatsApp ID
     * @param mediaId WhatsApp\&#39;s Media ID
     */
    public deleteMedia(whatsappUserId: string, mediaId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteMedia(whatsappUserId, mediaId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve uploaded media. Media is typically available for 30 days after uploading.
     * Download Media
     * @param whatsappUserId User\&#39;s WhatsApp ID
     * @param mediaId WhatsApp\&#39;s Media ID
     */
    public downloadMedia(whatsappUserId: string, mediaId: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.downloadMedia(whatsappUserId, mediaId, _options);
        return result.toPromise();
    }

    /**
     * Upload media. Accepted media types include image/jpeg, image/png, video/mp4, video/3gpp, audio/aac, audio/ogg.
     * Upload Media
     * @param whatsappUserId The user\\\&#39;s WhatsApp ID.
     * @param mediaContentType The content-type of the uplaoded media.
     * @param uploadFile The media to store with WhatsApp.
     */
    public uploadMedia(whatsappUserId: string, mediaContentType: string, uploadFile: HttpFile, _options?: Configuration): Promise<UploadMedia> {
        const result = this.api.uploadMedia(whatsappUserId, mediaContentType, uploadFile, _options);
        return result.toPromise();
    }


}



import { ObservableWhatsAppMessageTemplateApi } from './ObservableAPI.ts';

import { WhatsAppMessageTemplateApiRequestFactory, WhatsAppMessageTemplateApiResponseProcessor} from "../apis/WhatsAppMessageTemplateApi.ts";
export class PromiseWhatsAppMessageTemplateApi {
    private api: ObservableWhatsAppMessageTemplateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WhatsAppMessageTemplateApiRequestFactory,
        responseProcessor?: WhatsAppMessageTemplateApiResponseProcessor
    ) {
        this.api = new ObservableWhatsAppMessageTemplateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create WhatsApp Message Templates
     * @param id Identifies the WhatsApp Business Account
     * @param createWhatsappMessageTemplateRequestBody 
     */
    public createWhatsappMessageTemplates(id: string, createWhatsappMessageTemplateRequestBody?: CreateWhatsappMessageTemplateRequestBody, _options?: Configuration): Promise<WhatsAppMessageTemplate1> {
        const result = this.api.createWhatsappMessageTemplates(id, createWhatsappMessageTemplateRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Deletes all of the message templates with the given name and business account
     * Delete WhatsApp Message Templates
     * @param id Identifies the WhatsApp Business Account
     * @param name The name of the Whatsapp Message Template
     */
    public deleteWhatsappMessageTemplates(id: string, name: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteWhatsappMessageTemplates(id, name, _options);
        return result.toPromise();
    }

    /**
     * List WhatsApp Message Templates
     * @param id Identifies the WhatsApp Business Account
     * @param category The template category
     * @param language The language of the whatsapp message template
     * @param name A name identifying this whatsapp message template
     * @param qualityScore The score of the whatsapp message template
     * @param rejectedReason The reason why a message template was rejected by Whatsapp
     * @param limit The maximum number of message_templates to be returned on a query, we may return less than the limit number even if more pages are available.
     * @param before Indicates that this is a query for entries before the given cursor
     * @param after Indicates that this is a query for entries after the given cursor
     * @param status Identifies the whatsApp Message Template status
     */
    public listWhatsappMessageTemplates(id: string, category?: 'ACCOUNT_UPDATE' | 'PAYMENT_UPDATE' | 'PERSONAL_FINANCE_UPDATE' | 'SHIPPING_UPDATE' | 'RESERVATION_UPDATE' | 'ISSUE_RESOLUTION' | 'APPOINTMENT_UPDATE' | 'TRANSPORTATION_UPDATE' | 'TICKET_UPDATE' | 'ALERT_UPDATE' | 'AUTO_REPLY', language?: 'af' | 'sq' | 'ar' | 'az' | 'bn' | 'bg' | 'ca' | 'zh_CN' | 'zh_HK' | 'zh_TW' | 'hr' | 'cs' | 'da' | 'nl' | 'en' | 'en_GB' | 'en_US' | 'et' | 'fil' | 'fi' | 'fr' | 'ka' | 'de' | 'el' | 'gu' | 'ha' | 'he' | 'hi' | 'hu' | 'id' | 'ga' | 'it' | 'ja' | 'kn' | 'kk' | 'rw_RW' | 'ko' | 'ky_KG' | 'lo' | 'lv' | 'lt' | 'mk' | 'ms' | 'ml' | 'mr' | 'nb' | 'fa' | 'pl' | 'pt_BR' | 'pt_PT' | 'pa' | 'ro' | 'ru' | 'sr' | 'sk' | 'sl' | 'es' | 'es_AR' | 'es_ES' | 'es_MX' | 'sw' | 'sv' | 'ta' | 'te' | 'th' | 'tr' | 'uk' | 'ur' | 'uz' | 'vi' | 'zu', name?: string, qualityScore?: string, rejectedReason?: string, limit?: string, before?: string, after?: string, status?: string, _options?: Configuration): Promise<WhatsAppMessageTemplate> {
        const result = this.api.listWhatsappMessageTemplates(id, category, language, name, qualityScore, rejectedReason, limit, before, after, status, _options);
        return result.toPromise();
    }


}



import { ObservableWhatsAppMessagesApi } from './ObservableAPI.ts';

import { WhatsAppMessagesApiRequestFactory, WhatsAppMessagesApiResponseProcessor} from "../apis/WhatsAppMessagesApi.ts";
export class PromiseWhatsAppMessagesApi {
    private api: ObservableWhatsAppMessagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WhatsAppMessagesApiRequestFactory,
        responseProcessor?: WhatsAppMessagesApiResponseProcessor
    ) {
        this.api = new ObservableWhatsAppMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Mark a message as read.
     * Mark Message As Read
     * @param messageId Message ID from Webhook
     * @param markMessageAsReadRequestBody 
     */
    public markMessageAsRead(messageId: string, markMessageAsReadRequestBody: MarkMessageAsReadRequestBody, _options?: Configuration): Promise<void> {
        const result = this.api.markMessageAsRead(messageId, markMessageAsReadRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Send text messages, media/documents, and message templates to your customers.
     * Send Message
     * @param createWhatsAppMessageRequest 
     */
    public sendMessage(createWhatsAppMessageRequest: CreateWhatsAppMessageRequest, _options?: Configuration): Promise<SuccessfulResponseWithDetailsAboutTheWhatsAppMessageSent> {
        const result = this.api.sendMessage(createWhatsAppMessageRequest, _options);
        return result.toPromise();
    }


}



import { ObservableWhatsAppPhoneNumberApi } from './ObservableAPI.ts';

import { WhatsAppPhoneNumberApiRequestFactory, WhatsAppPhoneNumberApiResponseProcessor} from "../apis/WhatsAppPhoneNumberApi.ts";
export class PromiseWhatsAppPhoneNumberApi {
    private api: ObservableWhatsAppPhoneNumberApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WhatsAppPhoneNumberApiRequestFactory,
        responseProcessor?: WhatsAppPhoneNumberApiResponseProcessor
    ) {
        this.api = new ObservableWhatsAppPhoneNumberApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Update a WhatsApp Phone Number webhook
     * @param id Identifies the WhatsApp Phone Number
     * @param updateWhatsappPhoneNumberRequest 
     */
    public patchWhatsappPhoneNumber(id: string, updateWhatsappPhoneNumberRequest: UpdateWhatsappPhoneNumberRequest, _options?: Configuration): Promise<WhatsAppPhoneNumber> {
        const result = this.api.patchWhatsappPhoneNumber(id, updateWhatsappPhoneNumberRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a WhatsApp Phone Number about text
     * @param id Identifies the WhatsApp Phone Number
     * @param updateWhatsappPhoneNumberAboutRequest 
     */
    public patchWhatsappPhoneNumberAbout(id: string, updateWhatsappPhoneNumberAboutRequest: UpdateWhatsappPhoneNumberAboutRequest, _options?: Configuration): Promise<void> {
        const result = this.api.patchWhatsappPhoneNumberAbout(id, updateWhatsappPhoneNumberAboutRequest, _options);
        return result.toPromise();
    }

    /**
     * Update the Whatsapp Profile Photo for a given Whatsapp Phone Number
     * @param id Identifies the WhatsApp Phone Number
     * @param photo Must be an image with exactly 640x640px dimensions.
     */
    public patchWhatsappProfilePhoto(id: string, photo: HttpFile, _options?: Configuration): Promise<WhatsAppProfilePhoto> {
        const result = this.api.patchWhatsappProfilePhoto(id, photo, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a WhatsApp Phone Number
     * @param id Identifies the WhatsApp Phone Number
     */
    public retrieveWhatsappPhoneNumber(id: string, _options?: Configuration): Promise<WhatsAppPhoneNumber> {
        const result = this.api.retrieveWhatsappPhoneNumber(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a Whatsapp Profile Photo for a WhatsApp Phone Number
     * @param id Identifies the WhatsApp Phone Number
     */
    public retrieveWhatsappProfilePhoto(id: string, _options?: Configuration): Promise<WhatsAppProfilePhoto> {
        const result = this.api.retrieveWhatsappProfilePhoto(id, _options);
        return result.toPromise();
    }


}



import { ObservableWhatsAppUsageAggregationsApi } from './ObservableAPI.ts';

import { WhatsAppUsageAggregationsApiRequestFactory, WhatsAppUsageAggregationsApiResponseProcessor} from "../apis/WhatsAppUsageAggregationsApi.ts";
export class PromiseWhatsAppUsageAggregationsApi {
    private api: ObservableWhatsAppUsageAggregationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WhatsAppUsageAggregationsApiRequestFactory,
        responseProcessor?: WhatsAppUsageAggregationsApiResponseProcessor
    ) {
        this.api = new ObservableWhatsAppUsageAggregationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate and fetch WhatsApp usage aggregations synchronously. This endpoint will both generate and fetch the WhatsApp aggregations over a specified time period. 
     * @param startDate 
     * @param endDate 
     */
    public getUsageAggregationsSync(startDate?: Date, endDate?: Date, _options?: Configuration): Promise<WhatsAppUsageAggregationsResponseContainer> {
        const result = this.api.getUsageAggregationsSync(startDate, endDate, _options);
        return result.toPromise();
    }


}



import { ObservableWireGuardInterfacesApi } from './ObservableAPI.ts';

import { WireGuardInterfacesApiRequestFactory, WireGuardInterfacesApiResponseProcessor} from "../apis/WireGuardInterfacesApi.ts";
export class PromiseWireGuardInterfacesApi {
    private api: ObservableWireGuardInterfacesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WireGuardInterfacesApiRequestFactory,
        responseProcessor?: WireGuardInterfacesApiResponseProcessor
    ) {
        this.api = new ObservableWireGuardInterfacesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new WireGuard Interface. Current limitation of 10 interfaces per user can be created.
     * Create a WireGuard Interface
     * @param wireguardInterfaceCreate 
     */
    public wireguardInterfaceCreate(wireguardInterfaceCreate: WireguardInterfaceCreate, _options?: Configuration): Promise<WireguardInterfaceCreate202Response> {
        const result = this.api.wireguardInterfaceCreate(wireguardInterfaceCreate, _options);
        return result.toPromise();
    }

    /**
     * Delete a WireGuard Interface.
     * Delete a WireGuard Interface
     * @param id Identifies the resource.
     */
    public wireguardInterfaceDelete(id: string, _options?: Configuration): Promise<WireguardInterfaceCreate202Response> {
        const result = this.api.wireguardInterfaceDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a WireGuard Interfaces.
     * Retrieve a WireGuard Interfaces
     * @param id Identifies the resource.
     */
    public wireguardInterfaceGet(id: string, _options?: Configuration): Promise<WireguardInterfaceCreate202Response> {
        const result = this.api.wireguardInterfaceGet(id, _options);
        return result.toPromise();
    }

    /**
     * List all WireGuard Interfaces.
     * List all WireGuard Interfaces
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterNetworkId The associated network id to filter on.
     */
    public wireguardInterfaceList(pageNumber?: number, pageSize?: number, filterNetworkId?: string, _options?: Configuration): Promise<WireguardInterfaceList200Response> {
        const result = this.api.wireguardInterfaceList(pageNumber, pageSize, filterNetworkId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Allowed IP.
     * Retrieve the Allowed IP
     * @param id Identifies the resource.
     * @param childId Identifies the child resource
     */
    public wireguardPeerAllowedIPGet(id: string, childId: string, _options?: Configuration): Promise<WireguardPeerAllowedIPGet200Response> {
        const result = this.api.wireguardPeerAllowedIPGet(id, childId, _options);
        return result.toPromise();
    }

    /**
     * List all Allowed IPs for a WireGuard peer.
     * List all Allowed IPs for a WireGuard Peer
     * @param id Identifies the resource.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public wireguardPeerAllowedIPList(id: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<WireguardPeerAllowedIPList200Response> {
        const result = this.api.wireguardPeerAllowedIPList(id, pageNumber, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Wireguard config template for Peer
     * Retrieve Wireguard config template for Peer
     * @param id Identifies the resource.
     */
    public wireguardPeerConfig(id: string, _options?: Configuration): Promise<string> {
        const result = this.api.wireguardPeerConfig(id, _options);
        return result.toPromise();
    }

    /**
     * Create a new WireGuard Peer. Current limitation of 5 peers per interface can be created.
     * Create a WireGuard Peer
     * @param id Identifies the resource.
     * @param wireguardPeerCreate 
     */
    public wireguardPeerCreate(id: string, wireguardPeerCreate: WireguardPeerCreate, _options?: Configuration): Promise<WireguardPeerCreate202Response> {
        const result = this.api.wireguardPeerCreate(id, wireguardPeerCreate, _options);
        return result.toPromise();
    }

    /**
     * Delete the WireGuard peer.
     * Delete the WireGuard Peer
     * @param id Identifies the resource.
     */
    public wireguardPeerDelete(id: string, _options?: Configuration): Promise<WireguardPeerCreate202Response> {
        const result = this.api.wireguardPeerDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the WireGuard peer.
     * Retrieve the WireGuard Peer
     * @param id Identifies the resource.
     */
    public wireguardPeerGet(id: string, _options?: Configuration): Promise<WireguardPeerCreate202Response> {
        const result = this.api.wireguardPeerGet(id, _options);
        return result.toPromise();
    }

    /**
     * List all WireGuard peers.
     * List all WireGuard Peers
     * @param id Identifies the resource.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterWireguardInterfaceId The id of the associated WireGuard interface to filter on.
     */
    public wireguardPeerList(id: string, pageNumber?: number, pageSize?: number, filterWireguardInterfaceId?: string, _options?: Configuration): Promise<WireguardPeerList200Response> {
        const result = this.api.wireguardPeerList(id, pageNumber, pageSize, filterWireguardInterfaceId, _options);
        return result.toPromise();
    }

    /**
     * Update the WireGuard peer.
     * Update the WireGuard Peer
     * @param id Identifies the resource.
     * @param wireguardPeerPatch 
     */
    public wireguardPeerUpdate(id: string, wireguardPeerPatch: WireguardPeerPatch, _options?: Configuration): Promise<WireguardPeerCreate202Response> {
        const result = this.api.wireguardPeerUpdate(id, wireguardPeerPatch, _options);
        return result.toPromise();
    }


}




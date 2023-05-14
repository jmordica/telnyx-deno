import * as Tnx from "./index.ts";
import {
  TokenProvider,
  AuthMethods,
  AuthMethodsConfiguration,
  configureAuthMethods,
} from "./auth/auth.ts";
import { createConfiguration } from './configuration.ts';

class FixedTokenProvider implements TokenProvider {
  constructor(private token: string) {}

  getToken(): string {
    return this.token;
  }
}

export class Telnyx {
  private configuration: Tnx.Configuration;
  private authMethods: AuthMethods;
  public callCommands: Tnx.CallCommandsApi;
  public accessTokens: Tnx.AccessTokensApi;
  public advancedOptInOptOut: Tnx.AdvancedOptInOptOutApi;
  public authenticationProviders: Tnx.AuthenticationProvidersApi;
  public autoResponseSettings: Tnx.AutoResponseSettingsApi;
  public autoresponseConfigs: Tnx.AutoresponseConfigsApi;
  public billing: Tnx.BillingApi;
  public billingGroups: Tnx.BillingGroupsApi;
  public brands: Tnx.BrandsApi;
  public bucket: Tnx.BucketApi;
  public bulkCredentials: Tnx.BulkCredentialsApi;
  public bulkPhoneNumberCampaigns: Tnx.BulkPhoneNumberCampaignsApi;
  public bulkSoleProprietorCreation: Tnx.BulkSoleProprietorCreationApi;
  public businessIdentity: Tnx.BusinessIdentityApi;
  public cDRUsageReports: Tnx.CDRUsageReportsApi;
  public cSVDownloads: Tnx.CSVDownloadsApi;
  public callControlApplications: Tnx.CallControlApplicationsApi;
  public callInformation: Tnx.CallInformationApi;
  public callRecordings: Tnx.CallRecordingsApi;
  public campaign: Tnx.CampaignApi;
  public channelZones: Tnx.ChannelZonesApi;
  public conferenceCommands: Tnx.ConferenceCommandsApi;
  public connections: Tnx.ConnectionsApi;
  public credentialConnections: Tnx.CredentialConnectionsApi;
  public credentials: Tnx.CredentialsApi;
  public customerServiceRecord: Tnx.CustomerServiceRecordApi;
  public debugging: Tnx.DebuggingApi;
  public default: Tnx.DefaultApi;
  public detailRecords: Tnx.DetailRecordsApi;
  public dialogflowIntegration: Tnx.DialogflowIntegrationApi;
  public documents: Tnx.DocumentsApi;
  public dynamicEmergencyAddresses: Tnx.DynamicEmergencyAddressesApi;
  public dynamicEmergencyEndpoints: Tnx.DynamicEmergencyEndpointsApi;
  public enum: Tnx.EnumApi;
  public error: Tnx.ErrorApi;
  public fQDNConnections: Tnx.FQDNConnectionsApi;
  public globalIPs: Tnx.GlobalIPsApi;
  public iPAddresses: Tnx.IPAddressesApi;
  public iPConnections: Tnx.IPConnectionsApi;
  public iPs: Tnx.IPsApi;
  public inboundChannels: Tnx.InboundChannelsApi;
  public inventoryLevel: Tnx.InventoryLevelApi;
  public mDRDetailReports: Tnx.MDRDetailReportsApi;
  public mDRUsageReports: Tnx.MDRUsageReportsApi;
  public managedAccounts: Tnx.ManagedAccountsApi;
  public mediaStorageAPI: Tnx.MediaStorageAPIApi;
  public messages: Tnx.MessagesApi;
  public messagingHostedNumber: Tnx.MessagingHostedNumberApi;
  public messagingProfiles: Tnx.MessagingProfilesApi;
  public messagingTollfreeVerification: Tnx.MessagingTollfreeVerificationApi;
  public messagingTollfreeVerifications: Tnx.MessagingTollfreeVerificationsApi;
  public messagingURLDomains: Tnx.MessagingURLDomainsApi;
  public mobileOperatorNetworks: Tnx.MobileOperatorNetworksApi;
  public networks: Tnx.NetworksApi;
  public notifications: Tnx.NotificationsApi;
  public numberBackgroundJobs: Tnx.NumberBackgroundJobsApi;
  public numberBlockOrders: Tnx.NumberBlockOrdersApi;
  public numberBlocksBackgroundJobs: Tnx.NumberBlocksBackgroundJobsApi;
  public numberConfigurations: Tnx.NumberConfigurationsApi;
  public numberLookup: Tnx.NumberLookupApi;
  public numberOrderDocuments: Tnx.NumberOrderDocumentsApi;
  public numberOrders: Tnx.NumberOrdersApi;
  public numberPortout: Tnx.NumberPortoutApi;
  public numberReservations: Tnx.NumberReservationsApi;
  public numberSearch: Tnx.NumberSearchApi;
  public oTAUpdates: Tnx.OTAUpdatesApi;
  public object: Tnx.ObjectApi;
  public outboundVoiceProfiles: Tnx.OutboundVoiceProfilesApi;
  public phoneNumberCampaigns: Tnx.PhoneNumberCampaignsApi;
  public phoneNumberPorting: Tnx.PhoneNumberPortingApi;
  public portingOrder: Tnx.PortingOrderApi;
  public privateWirelessGateways: Tnx.PrivateWirelessGatewaysApi;
  public programmableFaxApplications: Tnx.ProgrammableFaxApplicationsApi;
  public programmableFaxCommands: Tnx.ProgrammableFaxCommandsApi;
  public publicInternetGateways: Tnx.PublicInternetGatewaysApi;
  public pushCredentials: Tnx.PushCredentialsApi;
  public queueCommands: Tnx.QueueCommandsApi;
  public recordingsCommands: Tnx.RecordingsCommandsApi;
  public regions: Tnx.RegionsApi;
  public registerCall: Tnx.RegisterCallApi;
  public reporting: Tnx.ReportingApi;
  public reports: Tnx.ReportsApi;
  public requirementTypes: Tnx.RequirementTypesApi;
  public requirements: Tnx.RequirementsApi;
  public roomCompositions: Tnx.RoomCompositionsApi;
  public roomParticipants: Tnx.RoomParticipantsApi;
  public roomRecordings: Tnx.RoomRecordingsApi;
  public roomSessions: Tnx.RoomSessionsApi;
  public rooms: Tnx.RoomsApi;
  public roomsClientTokens: Tnx.RoomsClientTokensApi;
  public sIMCardActions: Tnx.SIMCardActionsApi;
  public sIMCardGroupActions: Tnx.SIMCardGroupActionsApi;
  public sIMCardGroups: Tnx.SIMCardGroupsApi;
  public sIMCardOrders: Tnx.SIMCardOrdersApi;
  public sIMCards: Tnx.SIMCardsApi;
  public sharedCampaigns: Tnx.SharedCampaignsApi;
  public shortCodes: Tnx.ShortCodesApi;
  public teXMLApplications: Tnx.TeXMLApplicationsApi;
  public teXMLRESTCommands: Tnx.TeXMLRESTCommandsApi;
  public v2: Tnx.V2Api;
  public verifiedCallsDisplayProfile: Tnx.VerifiedCallsDisplayProfileApi;
  public verifiedNumbers: Tnx.VerifiedNumbersApi;
  public verify: Tnx.VerifyApi;
  public virtualCrossConnects: Tnx.VirtualCrossConnectsApi;
  public wDRDetailReports: Tnx.WDRDetailReportsApi;
  public webhooks: Tnx.WebhooksApi;
  public whatsAppBusinessAccount: Tnx.WhatsAppBusinessAccountApi;
  public whatsAppContacts: Tnx.WhatsAppContactsApi;
  public whatsAppDetailReports: Tnx.WhatsAppDetailReportsApi;
  public whatsAppMedia: Tnx.WhatsAppMediaApi;
  public whatsAppMessageTemplate: Tnx.WhatsAppMessageTemplateApi;
  public whatsAppMessages: Tnx.WhatsAppMessagesApi;
  public whatsAppPhoneNumber: Tnx.WhatsAppPhoneNumberApi;
  public whatsAppUsageAggregations: Tnx.WhatsAppUsageAggregationsApi;
  public wireGuardInterfaces: Tnx.WireGuardInterfacesApi;

  constructor(bearerToken: string) {
    const fixedTokenProvider = new FixedTokenProvider(bearerToken);
    const authMethodsConfiguration: AuthMethodsConfiguration = {
      bearerAuth: { tokenProvider: fixedTokenProvider },
    };
    this.authMethods = configureAuthMethods(authMethodsConfiguration);
    this.configuration = createConfiguration({ authMethods: authMethodsConfiguration });

    this.callCommands = new Tnx.CallCommandsApi(this.configuration);
    this.accessTokens = new Tnx.AccessTokensApi(this.configuration);
    this.advancedOptInOptOut = new Tnx.AdvancedOptInOptOutApi(this.configuration);
    this.authenticationProviders = new Tnx.AuthenticationProvidersApi(this.configuration);
    this.autoResponseSettings = new Tnx.AutoResponseSettingsApi(this.configuration);
    this.autoresponseConfigs = new Tnx.AutoresponseConfigsApi(this.configuration);
    this.billing = new Tnx.BillingApi(this.configuration);
    this.billingGroups = new Tnx.BillingGroupsApi(this.configuration);
    this.brands = new Tnx.BrandsApi(this.configuration);
    this.bucket = new Tnx.BucketApi(this.configuration);
    this.bulkCredentials = new Tnx.BulkCredentialsApi(this.configuration);
    this.bulkPhoneNumberCampaigns = new Tnx.BulkPhoneNumberCampaignsApi(this.configuration);
    this.bulkSoleProprietorCreation = new Tnx.BulkSoleProprietorCreationApi(this.configuration);
    this.businessIdentity = new Tnx.BusinessIdentityApi(this.configuration);
    this.cDRUsageReports = new Tnx.CDRUsageReportsApi(this.configuration);
    this.cSVDownloads = new Tnx.CSVDownloadsApi(this.configuration);
    this.callControlApplications = new Tnx.CallControlApplicationsApi(this.configuration);
    this.callInformation = new Tnx.CallInformationApi(this.configuration);
    this.callRecordings = new Tnx.CallRecordingsApi(this.configuration);
    this.campaign = new Tnx.CampaignApi(this.configuration);
    this.channelZones = new Tnx.ChannelZonesApi(this.configuration);
    this.conferenceCommands = new Tnx.ConferenceCommandsApi(this.configuration);
    this.connections = new Tnx.ConnectionsApi(this.configuration);
    this.credentialConnections = new Tnx.CredentialConnectionsApi(this.configuration);
    this.credentials = new Tnx.CredentialsApi(this.configuration);
    this.customerServiceRecord = new Tnx.CustomerServiceRecordApi(this.configuration);
    this.debugging = new Tnx.DebuggingApi(this.configuration);
    this.default = new Tnx.DefaultApi(this.configuration);
    this.detailRecords = new Tnx.DetailRecordsApi(this.configuration);
    this.dialogflowIntegration = new Tnx.DialogflowIntegrationApi(this.configuration);
    this.documents = new Tnx.DocumentsApi(this.configuration);
    this.dynamicEmergencyAddresses = new Tnx.DynamicEmergencyAddressesApi(this.configuration);
    this.dynamicEmergencyEndpoints = new Tnx.DynamicEmergencyEndpointsApi(this.configuration);
    this.enum = new Tnx.EnumApi(this.configuration);
    this.error = new Tnx.ErrorApi(this.configuration);
    this.fQDNConnections = new Tnx.FQDNConnectionsApi(this.configuration);
    this.globalIPs = new Tnx.GlobalIPsApi(this.configuration);
    this.iPAddresses = new Tnx.IPAddressesApi(this.configuration);
    this.iPConnections = new Tnx.IPConnectionsApi(this.configuration);
    this.iPs = new Tnx.IPsApi(this.configuration);
    this.inboundChannels = new Tnx.InboundChannelsApi(this.configuration);
    this.inventoryLevel = new Tnx.InventoryLevelApi(this.configuration);
    this.mDRDetailReports = new Tnx.MDRDetailReportsApi(this.configuration);
    this.mDRUsageReports = new Tnx.MDRUsageReportsApi(this.configuration);
    this.managedAccounts = new Tnx.ManagedAccountsApi(this.configuration);
    this.mediaStorageAPI = new Tnx.MediaStorageAPIApi(this.configuration);
    this.messages = new Tnx.MessagesApi(this.configuration);
    this.messagingHostedNumber = new Tnx.MessagingHostedNumberApi(this.configuration);
    this.messagingProfiles = new Tnx.MessagingProfilesApi(this.configuration);
    this.messagingTollfreeVerification = new Tnx.MessagingTollfreeVerificationApi(this.configuration);
    this.messagingTollfreeVerifications = new Tnx.MessagingTollfreeVerificationsApi(this.configuration);
    this.messagingURLDomains = new Tnx.MessagingURLDomainsApi(this.configuration);
    this.mobileOperatorNetworks = new Tnx.MobileOperatorNetworksApi(this.configuration);
    this.networks = new Tnx.NetworksApi(this.configuration);
    this.notifications = new Tnx.NotificationsApi(this.configuration);
    this.numberBackgroundJobs = new Tnx.NumberBackgroundJobsApi(this.configuration);
    this.numberBlockOrders = new Tnx.NumberBlockOrdersApi(this.configuration);
    this.numberBlocksBackgroundJobs = new Tnx.NumberBlocksBackgroundJobsApi(this.configuration);
    this.numberConfigurations = new Tnx.NumberConfigurationsApi(this.configuration);
    this.numberLookup = new Tnx.NumberLookupApi(this.configuration);
    this.numberOrderDocuments = new Tnx.NumberOrderDocumentsApi(this.configuration);
    this.numberOrders = new Tnx.NumberOrdersApi(this.configuration);
    this.numberPortout = new Tnx.NumberPortoutApi(this.configuration);
    this.numberReservations = new Tnx.NumberReservationsApi(this.configuration);
    this.numberSearch = new Tnx.NumberSearchApi(this.configuration);
    this.oTAUpdates = new Tnx.OTAUpdatesApi(this.configuration);
    this.object = new Tnx.ObjectApi(this.configuration);
    this.outboundVoiceProfiles = new Tnx.OutboundVoiceProfilesApi(this.configuration);
    this.phoneNumberCampaigns = new Tnx.PhoneNumberCampaignsApi(this.configuration);
    this.phoneNumberPorting = new Tnx.PhoneNumberPortingApi(this.configuration);
    this.portingOrder = new Tnx.PortingOrderApi(this.configuration);
    this.privateWirelessGateways = new Tnx.PrivateWirelessGatewaysApi(this.configuration);
    this.programmableFaxApplications = new Tnx.ProgrammableFaxApplicationsApi(this.configuration);
    this.programmableFaxCommands = new Tnx.ProgrammableFaxCommandsApi(this.configuration);
    this.publicInternetGateways = new Tnx.PublicInternetGatewaysApi(this.configuration);
    this.pushCredentials = new Tnx.PushCredentialsApi(this.configuration);
    this.queueCommands = new Tnx.QueueCommandsApi(this.configuration);
    this.recordingsCommands = new Tnx.RecordingsCommandsApi(this.configuration);
    this.regions = new Tnx.RegionsApi(this.configuration);
    this.registerCall = new Tnx.RegisterCallApi(this.configuration);
    this.reporting = new Tnx.ReportingApi(this.configuration);
    this.reports = new Tnx.ReportsApi(this.configuration);
    this.requirementTypes = new Tnx.RequirementTypesApi(this.configuration);
    this.requirements = new Tnx.RequirementsApi(this.configuration);
    this.roomCompositions = new Tnx.RoomCompositionsApi(this.configuration);
    this.roomParticipants = new Tnx.RoomParticipantsApi(this.configuration);
    this.roomRecordings = new Tnx.RoomRecordingsApi(this.configuration);
    this.roomSessions = new Tnx.RoomSessionsApi(this.configuration);
    this.rooms = new Tnx.RoomsApi(this.configuration);
    this.roomsClientTokens = new Tnx.RoomsClientTokensApi(this.configuration);
    this.sIMCardActions = new Tnx.SIMCardActionsApi(this.configuration);
    this.sIMCardGroupActions = new Tnx.SIMCardGroupActionsApi(this.configuration);
    this.sIMCardGroups = new Tnx.SIMCardGroupsApi(this.configuration);
    this.sIMCardOrders = new Tnx.SIMCardOrdersApi(this.configuration);
    this.sIMCards = new Tnx.SIMCardsApi(this.configuration);
    this.sharedCampaigns = new Tnx.SharedCampaignsApi(this.configuration);
    this.shortCodes = new Tnx.ShortCodesApi(this.configuration);
    this.teXMLApplications = new Tnx.TeXMLApplicationsApi(this.configuration);
    this.teXMLRESTCommands = new Tnx.TeXMLRESTCommandsApi(this.configuration);
    this.v2 = new Tnx.V2Api(this.configuration);
    this.verifiedCallsDisplayProfile = new Tnx.VerifiedCallsDisplayProfileApi(this.configuration);
    this.verifiedNumbers = new Tnx.VerifiedNumbersApi(this.configuration);
    this.verify = new Tnx.VerifyApi(this.configuration);
    this.virtualCrossConnects = new Tnx.VirtualCrossConnectsApi(this.configuration);
    this.wDRDetailReports = new Tnx.WDRDetailReportsApi(this.configuration);
    this.webhooks = new Tnx.WebhooksApi(this.configuration);
    this.whatsAppBusinessAccount = new Tnx.WhatsAppBusinessAccountApi(this.configuration);
    this.whatsAppContacts = new Tnx.WhatsAppContactsApi(this.configuration);
    this.whatsAppDetailReports = new Tnx.WhatsAppDetailReportsApi(this.configuration);
    this.whatsAppMedia = new Tnx.WhatsAppMediaApi(this.configuration);
    this.whatsAppMessageTemplate = new Tnx.WhatsAppMessageTemplateApi(this.configuration);
    this.whatsAppMessages = new Tnx.WhatsAppMessagesApi(this.configuration);
    this.whatsAppPhoneNumber = new Tnx.WhatsAppPhoneNumberApi(this.configuration);
    this.whatsAppUsageAggregations = new Tnx.WhatsAppUsageAggregationsApi(this.configuration);
    this.wireGuardInterfaces = new Tnx.WireGuardInterfacesApi(this.configuration);
  }
}
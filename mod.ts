import {
  Configuration,
  CallCommandsApi,
  AccessTokensApi,
  AdvancedOptInOptOutApi,
  AuthenticationProvidersApi,
  AutoResponseSettingsApi,
  AutoresponseConfigsApi,
  BillingApi,
  BillingGroupsApi,
  BrandsApi,
  BucketApi,
  BulkCredentialsApi,
  BulkPhoneNumberCampaignsApi,
  BulkSoleProprietorCreationApi,
  BusinessIdentityApi,
  CDRUsageReportsApi,
  CSVDownloadsApi,
  CallControlApplicationsApi,
  CallInformationApi,
  CallRecordingsApi,
  CampaignApi,
  ChannelZonesApi,
  ConferenceCommandsApi,
  ConnectionsApi,
  CredentialConnectionsApi,
  CredentialsApi,
  CustomerServiceRecordApi,
  DebuggingApi,
  DefaultApi,
  DetailRecordsApi,
  DialogflowIntegrationApi,
  DocumentsApi,
  DynamicEmergencyAddressesApi,
  DynamicEmergencyEndpointsApi,
  EnumApi,
  ErrorApi,
  FQDNConnectionsApi,
  GlobalIPsApi,
  IPAddressesApi,
  IPConnectionsApi,
  IPsApi,
  InboundChannelsApi,
  InventoryLevelApi,
  MDRDetailReportsApi,
  MDRUsageReportsApi,
  ManagedAccountsApi,
  MediaStorageAPIApi,
  MessagesApi,
  MessagingHostedNumberApi,
  MessagingProfilesApi,
  MessagingTollfreeVerificationApi,
  MessagingTollfreeVerificationsApi,
  MessagingURLDomainsApi,
  MobileOperatorNetworksApi,
  NetworksApi,
  NotificationsApi,
  NumberBackgroundJobsApi,
  NumberBlockOrdersApi,
  NumberBlocksBackgroundJobsApi,
  NumberConfigurationsApi,
  NumberLookupApi,
  NumberOrderDocumentsApi,
  NumberOrdersApi,
  NumberPortoutApi,
  NumberReservationsApi,
  NumberSearchApi,
  OTAUpdatesApi,
  ObjectApi,
  OutboundVoiceProfilesApi,
  PhoneNumberCampaignsApi,
  PhoneNumberPortingApi,
  PortingOrderApi,
  PrivateWirelessGatewaysApi,
  ProgrammableFaxApplicationsApi,
  ProgrammableFaxCommandsApi,
  PublicInternetGatewaysApi,
  PushCredentialsApi,
  QueueCommandsApi,
  RecordingsCommandsApi,
  RegionsApi,
  RegisterCallApi,
  ReportingApi,
  ReportsApi,
  RequirementTypesApi,
  RequirementsApi,
  RoomCompositionsApi,
  RoomParticipantsApi,
  RoomRecordingsApi,
  RoomSessionsApi,
  RoomsApi,
  RoomsClientTokensApi,
  SIMCardActionsApi,
  SIMCardGroupActionsApi,
  SIMCardGroupsApi,
  SIMCardOrdersApi,
  SIMCardsApi,
  SharedCampaignsApi,
  ShortCodesApi,
  TeXMLApplicationsApi,
  TeXMLRESTCommandsApi,
  V2Api,
  VerifiedCallsDisplayProfileApi,
  VerifiedNumbersApi,
  VerifyApi,
  VirtualCrossConnectsApi,
  WDRDetailReportsApi,
  WebhooksApi
 } from "./index.ts";
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
  private configuration: Configuration;
  private authMethods: AuthMethods;
  public callCommands: CallCommandsApi;
  public accessTokens: AccessTokensApi;
  public advancedOptInOptOut: AdvancedOptInOptOutApi;
  public authenticationProviders: AuthenticationProvidersApi;
  public autoResponseSettings: AutoResponseSettingsApi;
  public autoresponseConfigs: AutoresponseConfigsApi;
  public billing: BillingApi;
  public billingGroups: BillingGroupsApi;
  public brands: BrandsApi;
  public bucket: BucketApi;
  public bulkCredentials: BulkCredentialsApi;
  public bulkPhoneNumberCampaigns: BulkPhoneNumberCampaignsApi;
  public bulkSoleProprietorCreation: BulkSoleProprietorCreationApi;
  public businessIdentity: BusinessIdentityApi;
  public cDRUsageReports: CDRUsageReportsApi;
  public cSVDownloads: CSVDownloadsApi;
  public callControlApplications: CallControlApplicationsApi;
  public callInformation: CallInformationApi;
  public callRecordings: CallRecordingsApi;
  public campaign: CampaignApi;
  public channelZones: ChannelZonesApi;
  public conferenceCommands: ConferenceCommandsApi;
  public connections: ConnectionsApi;
  public credentialConnections: CredentialConnectionsApi;
  public credentials: CredentialsApi;
  public customerServiceRecord: CustomerServiceRecordApi;
  public debugging: DebuggingApi;
  public default: DefaultApi;
  public detailRecords: DetailRecordsApi;
  public dialogflowIntegration: DialogflowIntegrationApi;
  public documents: DocumentsApi;
  public dynamicEmergencyAddresses: DynamicEmergencyAddressesApi;
  public dynamicEmergencyEndpoints: DynamicEmergencyEndpointsApi;
  public enum: EnumApi;
  public error: ErrorApi;
  public fQDNConnections: FQDNConnectionsApi;
  public globalIPs: GlobalIPsApi;
  public iPAddresses: IPAddressesApi;
  public iPConnections: IPConnectionsApi;
  public iPs: IPsApi;
  public inboundChannels: InboundChannelsApi;
  public inventoryLevel: InventoryLevelApi;
  public mDRDetailReports: MDRDetailReportsApi;
  public mDRUsageReports: MDRUsageReportsApi;
  public managedAccounts: ManagedAccountsApi;
  public mediaStorageAPI: MediaStorageAPIApi;
  public messages: MessagesApi;
  public messagingHostedNumber: MessagingHostedNumberApi;
  public messagingProfiles: MessagingProfilesApi;
  public messagingTollfreeVerification: MessagingTollfreeVerificationApi;
  public messagingTollfreeVerifications: MessagingTollfreeVerificationsApi;
  public messagingURLDomains: MessagingURLDomainsApi;
  public mobileOperatorNetworks: MobileOperatorNetworksApi;
  public networks: NetworksApi;
  public notifications: NotificationsApi;
  public numberBackgroundJobs: NumberBackgroundJobsApi;
  public numberBlockOrders: NumberBlockOrdersApi;
  public numberBlocksBackgroundJobs: NumberBlocksBackgroundJobsApi;
  public numberConfigurations: NumberConfigurationsApi;
  public numberLookup: NumberLookupApi;
  public numberOrderDocuments: NumberOrderDocumentsApi;
  public numberOrders: NumberOrdersApi;
  public numberPortout: NumberPortoutApi;
  public numberReservations: NumberReservationsApi;
  public numberSearch: NumberSearchApi;
  public oTAUpdates: OTAUpdatesApi;
  public object: ObjectApi;
  public outboundVoiceProfiles: OutboundVoiceProfilesApi;
  public phoneNumberCampaigns: PhoneNumberCampaignsApi;
  public phoneNumberPorting: PhoneNumberPortingApi;
  public portingOrder: PortingOrderApi;
  public privateWirelessGateways: PrivateWirelessGatewaysApi;
  public programmableFaxApplications: ProgrammableFaxApplicationsApi;
  public programmableFaxCommands: ProgrammableFaxCommandsApi;
  public publicInternetGateways: PublicInternetGatewaysApi;
  public pushCredentials: PushCredentialsApi;
  public queueCommands: QueueCommandsApi;
  public recordingsCommands: RecordingsCommandsApi;
  public regions: RegionsApi;
  public registerCall: RegisterCallApi;
  public reporting: ReportingApi;
  public reports: ReportsApi;
  public requirementTypes: RequirementTypesApi;
  public requirements: RequirementsApi;
  public roomCompositions: RoomCompositionsApi;
  public roomParticipants: RoomParticipantsApi;
  public roomRecordings: RoomRecordingsApi;
  public roomSessions: RoomSessionsApi;
  public rooms: RoomsApi;
  public roomsClientTokens: RoomsClientTokensApi;
  public sIMCardActions: SIMCardActionsApi;
  public sIMCardGroupActions: SIMCardGroupActionsApi;
  public sIMCardGroups: SIMCardGroupsApi;
  public sIMCardOrders: SIMCardOrdersApi;
  public sIMCards: SIMCardsApi;
  public sharedCampaigns: SharedCampaignsApi;
  public shortCodes: ShortCodesApi;
  public teXMLApplications: TeXMLApplicationsApi;
  public teXMLRESTCommands: TeXMLRESTCommandsApi;
  public v2: V2Api;
  public verifiedCallsDisplayProfile: VerifiedCallsDisplayProfileApi;
  public verifiedNumbers: VerifiedNumbersApi;
  public verify: VerifyApi;
  public virtualCrossConnects: VirtualCrossConnectsApi;
  public wDRDetailReports: WDRDetailReportsApi;
  public webhooks: WebhooksApi;

  constructor(bearerToken: string) {
    const fixedTokenProvider = new FixedTokenProvider(bearerToken);
    const authMethodsConfiguration: AuthMethodsConfiguration = {
      bearerAuth: { tokenProvider: fixedTokenProvider },
    };
    this.authMethods = configureAuthMethods(authMethodsConfiguration);
    this.configuration = createConfiguration({ authMethods: authMethodsConfiguration });

    this.callCommands = new CallCommandsApi(this.configuration);
    this.accessTokens = new AccessTokensApi(this.configuration);
    this.advancedOptInOptOut = new AdvancedOptInOptOutApi(this.configuration);
    this.authenticationProviders = new AuthenticationProvidersApi(this.configuration);
    this.autoResponseSettings = new AutoResponseSettingsApi(this.configuration);
    this.autoresponseConfigs = new AutoresponseConfigsApi(this.configuration);
    this.billing = new BillingApi(this.configuration);
    this.billingGroups = new BillingGroupsApi(this.configuration);
    this.brands = new BrandsApi(this.configuration);
    this.bucket = new BucketApi(this.configuration);
    this.bulkCredentials = new BulkCredentialsApi(this.configuration);
    this.bulkPhoneNumberCampaigns = new BulkPhoneNumberCampaignsApi(this.configuration);
    this.bulkSoleProprietorCreation = new BulkSoleProprietorCreationApi(this.configuration);
    this.businessIdentity = new BusinessIdentityApi(this.configuration);
    this.cDRUsageReports = new CDRUsageReportsApi(this.configuration);
    this.cSVDownloads = new CSVDownloadsApi(this.configuration);
    this.callControlApplications = new CallControlApplicationsApi(this.configuration);
    this.callInformation = new CallInformationApi(this.configuration);
    this.callRecordings = new CallRecordingsApi(this.configuration);
    this.campaign = new CampaignApi(this.configuration);
    this.channelZones = new ChannelZonesApi(this.configuration);
    this.conferenceCommands = new ConferenceCommandsApi(this.configuration);
    this.connections = new ConnectionsApi(this.configuration);
    this.credentialConnections = new CredentialConnectionsApi(this.configuration);
    this.credentials = new CredentialsApi(this.configuration);
    this.customerServiceRecord = new CustomerServiceRecordApi(this.configuration);
    this.debugging = new DebuggingApi(this.configuration);
    this.default = new DefaultApi(this.configuration);
    this.detailRecords = new DetailRecordsApi(this.configuration);
    this.dialogflowIntegration = new DialogflowIntegrationApi(this.configuration);
    this.documents = new DocumentsApi(this.configuration);
    this.dynamicEmergencyAddresses = new DynamicEmergencyAddressesApi(this.configuration);
    this.dynamicEmergencyEndpoints = new DynamicEmergencyEndpointsApi(this.configuration);
    this.enum = new EnumApi(this.configuration);
    this.error = new ErrorApi(this.configuration);
    this.fQDNConnections = new FQDNConnectionsApi(this.configuration);
    this.globalIPs = new GlobalIPsApi(this.configuration);
    this.iPAddresses = new IPAddressesApi(this.configuration);
    this.iPConnections = new IPConnectionsApi(this.configuration);
    this.iPs = new IPsApi(this.configuration);
    this.inboundChannels = new InboundChannelsApi(this.configuration);
    this.inventoryLevel = new InventoryLevelApi(this.configuration);
    this.mDRDetailReports = new MDRDetailReportsApi(this.configuration);
    this.mDRUsageReports = new MDRUsageReportsApi(this.configuration);
    this.managedAccounts = new ManagedAccountsApi(this.configuration);
    this.mediaStorageAPI = new MediaStorageAPIApi(this.configuration);
    this.messages = new MessagesApi(this.configuration);
    this.messagingHostedNumber = new MessagingHostedNumberApi(this.configuration);
    this.messagingProfiles = new MessagingProfilesApi(this.configuration);
    this.messagingTollfreeVerification = new MessagingTollfreeVerificationApi(this.configuration);
    this.messagingTollfreeVerifications = new MessagingTollfreeVerificationsApi(this.configuration);
    this.messagingURLDomains = new MessagingURLDomainsApi(this.configuration);
    this.mobileOperatorNetworks = new MobileOperatorNetworksApi(this.configuration);
    this.networks = new NetworksApi(this.configuration);
    this.notifications = new NotificationsApi(this.configuration);
    this.numberBackgroundJobs = new NumberBackgroundJobsApi(this.configuration);
    this.numberBlockOrders = new NumberBlockOrdersApi(this.configuration);
    this.numberBlocksBackgroundJobs = new NumberBlocksBackgroundJobsApi(this.configuration);
    this.numberConfigurations = new NumberConfigurationsApi(this.configuration);
    this.numberLookup = new NumberLookupApi(this.configuration);
    this.numberOrderDocuments = new NumberOrderDocumentsApi(this.configuration);
    this.numberOrders = new NumberOrdersApi(this.configuration);
    this.numberPortout = new NumberPortoutApi(this.configuration);
    this.numberReservations = new NumberReservationsApi(this.configuration);
    this.numberSearch = new NumberSearchApi(this.configuration);
    this.oTAUpdates = new OTAUpdatesApi(this.configuration);
    this.object = new ObjectApi(this.configuration);
    this.outboundVoiceProfiles = new OutboundVoiceProfilesApi(this.configuration);
    this.phoneNumberCampaigns = new PhoneNumberCampaignsApi(this.configuration);
    this.phoneNumberPorting = new PhoneNumberPortingApi(this.configuration);
    this.portingOrder = new PortingOrderApi(this.configuration);
    this.privateWirelessGateways = new PrivateWirelessGatewaysApi(this.configuration);
    this.programmableFaxApplications = new ProgrammableFaxApplicationsApi(this.configuration);
    this.programmableFaxCommands = new ProgrammableFaxCommandsApi(this.configuration);
    this.publicInternetGateways = new PublicInternetGatewaysApi(this.configuration);
    this.pushCredentials = new PushCredentialsApi(this.configuration);
    this.queueCommands = new QueueCommandsApi(this.configuration);
    this.recordingsCommands = new RecordingsCommandsApi(this.configuration);
    this.regions = new RegionsApi(this.configuration);
    this.registerCall = new RegisterCallApi(this.configuration);
    this.reporting = new ReportingApi(this.configuration);
    this.reports = new ReportsApi(this.configuration);
    this.requirementTypes = new RequirementTypesApi(this.configuration);
    this.requirements = new RequirementsApi(this.configuration);
    this.roomCompositions = new RoomCompositionsApi(this.configuration);
    this.roomParticipants = new RoomParticipantsApi(this.configuration);
    this.roomRecordings = new RoomRecordingsApi(this.configuration);
    this.roomSessions = new RoomSessionsApi(this.configuration);
    this.rooms = new RoomsApi(this.configuration);
    this.roomsClientTokens = new RoomsClientTokensApi(this.configuration);
    this.sIMCardActions = new SIMCardActionsApi(this.configuration);
    this.sIMCardGroupActions = new SIMCardGroupActionsApi(this.configuration);
    this.sIMCardGroups = new SIMCardGroupsApi(this.configuration);
    this.sIMCardOrders = new SIMCardOrdersApi(this.configuration);
    this.sIMCards = new SIMCardsApi(this.configuration);
    this.sharedCampaigns = new SharedCampaignsApi(this.configuration);
    this.shortCodes = new ShortCodesApi(this.configuration);
    this.teXMLApplications = new TeXMLApplicationsApi(this.configuration);
    this.teXMLRESTCommands = new TeXMLRESTCommandsApi(this.configuration);
    this.v2 = new V2Api(this.configuration);
    this.verifiedCallsDisplayProfile = new VerifiedCallsDisplayProfileApi(this.configuration);
    this.verifiedNumbers = new VerifiedNumbersApi(this.configuration);
    this.verify = new VerifyApi(this.configuration);
    this.virtualCrossConnects = new VirtualCrossConnectsApi(this.configuration);
    this.wDRDetailReports = new WDRDetailReportsApi(this.configuration);
    this.webhooks = new WebhooksApi(this.configuration);
  }
}
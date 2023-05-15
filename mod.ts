import {
  Configuration,
  CallCommandsApi,
  CallInformationApi,
  CallRecordingsApi,
  ConferenceCommandsApi,
  DebuggingApi,
  MediaStorageAPIApi,
  ProgrammableFaxCommandsApi,
  QueueCommandsApi,
  RecordingsCommandsApi,
  RegisterCallApi
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
  public callInformation: CallInformationApi;
  public callRecordings: CallRecordingsApi;
  public conferenceCommands: ConferenceCommandsApi;
  public debugging: DebuggingApi;
  public mediaStorageAPI: MediaStorageAPIApi;
  public programmableFaxCommands: ProgrammableFaxCommandsApi;
  public queueCommands: QueueCommandsApi;
  public recordingsCommands: RecordingsCommandsApi;
  public registerCall: RegisterCallApi;

  constructor(bearerToken: string) {
    const fixedTokenProvider = new FixedTokenProvider(bearerToken);
    const authMethodsConfiguration: AuthMethodsConfiguration = {
      bearerAuth: { tokenProvider: fixedTokenProvider },
    };
    this.authMethods = configureAuthMethods(authMethodsConfiguration);
    this.configuration = createConfiguration({ authMethods: authMethodsConfiguration });

    this.callCommands = new CallCommandsApi(this.configuration);
    this.callInformation = new CallInformationApi(this.configuration);
    this.callRecordings = new CallRecordingsApi(this.configuration);
    this.conferenceCommands = new ConferenceCommandsApi(this.configuration);
    this.debugging = new DebuggingApi(this.configuration);
    this.mediaStorageAPI = new MediaStorageAPIApi(this.configuration);
    this.programmableFaxCommands = new ProgrammableFaxCommandsApi(this.configuration);
    this.queueCommands = new QueueCommandsApi(this.configuration);
    this.recordingsCommands = new RecordingsCommandsApi(this.configuration);
    this.registerCall = new RegisterCallApi(this.configuration);
  }
}
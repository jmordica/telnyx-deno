// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ConferenceCallRequest } from '../models/ConferenceCallRequest.ts';
import { ConferenceCommandResponse } from '../models/ConferenceCommandResponse.ts';
import { ConferenceHoldRequest } from '../models/ConferenceHoldRequest.ts';
import { ConferenceMuteRequest } from '../models/ConferenceMuteRequest.ts';
import { ConferencePlayRequest } from '../models/ConferencePlayRequest.ts';
import { ConferenceResponse } from '../models/ConferenceResponse.ts';
import { ConferenceSpeakRequest } from '../models/ConferenceSpeakRequest.ts';
import { ConferenceStopRequest } from '../models/ConferenceStopRequest.ts';
import { ConferenceUnholdRequest } from '../models/ConferenceUnholdRequest.ts';
import { ConferenceUnmuteRequest } from '../models/ConferenceUnmuteRequest.ts';
import { CreateConferenceRequest } from '../models/CreateConferenceRequest.ts';
import { JoinConferenceRequest } from '../models/JoinConferenceRequest.ts';
import { LeaveConferenceRequest } from '../models/LeaveConferenceRequest.ts';
import { ListConferencesResponse } from '../models/ListConferencesResponse.ts';
import { ListParticipantsResponse } from '../models/ListParticipantsResponse.ts';
import { PauseConferenceRecordingRequest } from '../models/PauseConferenceRecordingRequest.ts';
import { ResumeConferenceRecordingRequest } from '../models/ResumeConferenceRecordingRequest.ts';
import { StartConferenceRecordingRequest } from '../models/StartConferenceRecordingRequest.ts';
import { StopRecordingRequest } from '../models/StopRecordingRequest.ts';
import { UpdateConferenceRequest } from '../models/UpdateConferenceRequest.ts';

/**
 * no description
 */
export class ConferenceCommandsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Dials a phone number and, when the call is answered, automatically joins them into the specified conference.  **Expected Webhooks:**  - `call.hangup` - `call.answered` - `conference.participant.joined` - `conference.participant.left` 
     * Dial a new participant into a conference
     * @param id Uniquely identifies the conference by id or name
     * @param conferenceCallRequest Dial Into Conference request object
     */
    public async conferenceDialParticipantIn(id: string, conferenceCallRequest: ConferenceCallRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceDialParticipantIn", "id");
        }


        // verify required parameter 'conferenceCallRequest' is not null or undefined
        if (conferenceCallRequest === null || conferenceCallRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceDialParticipantIn", "conferenceCallRequest");
        }


        // Path Params
        const localVarPath = '/conferences/{id}/actions/dial_participant'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(conferenceCallRequest, "ConferenceCallRequest", ""),
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
     * Hold a list of participants in a conference call
     * Hold conference participants
     * @param id Uniquely identifies the conference by id or name
     * @param conferenceHoldRequest 
     */
    public async conferenceHoldParticipants(id: string, conferenceHoldRequest: ConferenceHoldRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceHoldParticipants", "id");
        }


        // verify required parameter 'conferenceHoldRequest' is not null or undefined
        if (conferenceHoldRequest === null || conferenceHoldRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceHoldParticipants", "conferenceHoldRequest");
        }


        // Path Params
        const localVarPath = '/conferences/{id}/actions/hold'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(conferenceHoldRequest, "ConferenceHoldRequest", ""),
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
     * Join an existing call leg to a conference. Issue the Join Conference command with the conference ID in the path and the `call_control_id` of the leg you wish to join to the conference as an attribute. The conference can have up to a certain amount of active participants, as set by the `max_participants` parameter in conference creation request.   **Expected Webhooks:**  - `conference.participant.joined` - `conference.participant.left` 
     * Join a conference
     * @param id Uniquely identifies the conference by id or name
     * @param joinConferenceRequest Join Conference request object
     */
    public async conferenceJoin(id: string, joinConferenceRequest: JoinConferenceRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceJoin", "id");
        }


        // verify required parameter 'joinConferenceRequest' is not null or undefined
        if (joinConferenceRequest === null || joinConferenceRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceJoin", "joinConferenceRequest");
        }


        // Path Params
        const localVarPath = '/conferences/{id}/actions/join'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(joinConferenceRequest, "JoinConferenceRequest", ""),
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
     * Removes a call leg from a conference and moves it back to parked state. **Expected Webhooks:**  - `conference.participant.left` 
     * Leave a conference
     * @param id Uniquely identifies the conference by id or name
     * @param leaveConferenceRequest Leave Conference request object
     */
    public async conferenceLeave(id: string, leaveConferenceRequest: LeaveConferenceRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceLeave", "id");
        }


        // verify required parameter 'leaveConferenceRequest' is not null or undefined
        if (leaveConferenceRequest === null || leaveConferenceRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceLeave", "leaveConferenceRequest");
        }


        // Path Params
        const localVarPath = '/conferences/{id}/actions/leave'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(leaveConferenceRequest, "LeaveConferenceRequest", ""),
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
     * Mute a list of participants in a conference call
     * Mute conference participants
     * @param id Uniquely identifies the conference by id or name
     * @param conferenceMuteRequest 
     */
    public async conferenceMuteParticipants(id: string, conferenceMuteRequest: ConferenceMuteRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceMuteParticipants", "id");
        }


        // verify required parameter 'conferenceMuteRequest' is not null or undefined
        if (conferenceMuteRequest === null || conferenceMuteRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceMuteParticipants", "conferenceMuteRequest");
        }


        // Path Params
        const localVarPath = '/conferences/{id}/actions/mute'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(conferenceMuteRequest, "ConferenceMuteRequest", ""),
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
     * Pause conference recording.
     * Conference recording pause
     * @param id Specifies the conference by id or name
     * @param pauseConferenceRecordingRequest 
     */
    public async conferencePauseRecording(id: string, pauseConferenceRecordingRequest: PauseConferenceRecordingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferencePauseRecording", "id");
        }


        // verify required parameter 'pauseConferenceRecordingRequest' is not null or undefined
        if (pauseConferenceRecordingRequest === null || pauseConferenceRecordingRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferencePauseRecording", "pauseConferenceRecordingRequest");
        }


        // Path Params
        const localVarPath = '/conferences/{id}/actions/record_pause'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(pauseConferenceRecordingRequest, "PauseConferenceRecordingRequest", ""),
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
     * Play audio to all or some participants on a conference call.
     * Play audio to conference participants
     * @param id Uniquely identifies the conference by id or name
     * @param conferencePlayRequest 
     */
    public async conferencePlayAudio(id: string, conferencePlayRequest: ConferencePlayRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferencePlayAudio", "id");
        }


        // verify required parameter 'conferencePlayRequest' is not null or undefined
        if (conferencePlayRequest === null || conferencePlayRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferencePlayAudio", "conferencePlayRequest");
        }


        // Path Params
        const localVarPath = '/conferences/{id}/actions/play'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(conferencePlayRequest, "ConferencePlayRequest", ""),
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
     * Resume conference recording.
     * Conference recording resume
     * @param id Specifies the conference by id or name
     * @param resumeConferenceRecordingRequest 
     */
    public async conferenceResumeRecording(id: string, resumeConferenceRecordingRequest: ResumeConferenceRecordingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceResumeRecording", "id");
        }


        // verify required parameter 'resumeConferenceRecordingRequest' is not null or undefined
        if (resumeConferenceRecordingRequest === null || resumeConferenceRecordingRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceResumeRecording", "resumeConferenceRecordingRequest");
        }


        // Path Params
        const localVarPath = '/conferences/{id}/actions/record_resume'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(resumeConferenceRecordingRequest, "ResumeConferenceRecordingRequest", ""),
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
     * Convert text to speech and play it to all or some participants.
     * Speak text to conference participants
     * @param id Specifies the conference by id or name
     * @param conferenceSpeakRequest 
     */
    public async conferenceSpeakText(id: string, conferenceSpeakRequest: ConferenceSpeakRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceSpeakText", "id");
        }


        // verify required parameter 'conferenceSpeakRequest' is not null or undefined
        if (conferenceSpeakRequest === null || conferenceSpeakRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceSpeakText", "conferenceSpeakRequest");
        }


        // Path Params
        const localVarPath = '/conferences/{id}/actions/speak'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(conferenceSpeakRequest, "ConferenceSpeakRequest", ""),
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
     * Start recording the conference. Recording will stop on conference end, or via the Stop Recording command.  **Expected Webhooks:**  - `conference.recording.saved`
     * Conference recording start
     * @param id Specifies the conference to record by id or name
     * @param startConferenceRecordingRequest 
     */
    public async conferenceStartRecording(id: string, startConferenceRecordingRequest: StartConferenceRecordingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceStartRecording", "id");
        }


        // verify required parameter 'startConferenceRecordingRequest' is not null or undefined
        if (startConferenceRecordingRequest === null || startConferenceRecordingRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceStartRecording", "startConferenceRecordingRequest");
        }


        // Path Params
        const localVarPath = '/conferences/{id}/actions/record_start'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(startConferenceRecordingRequest, "StartConferenceRecordingRequest", ""),
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
     * Stop audio being played to all or some participants on a conference call.
     * Stop audio being played on the conference
     * @param id Uniquely identifies the conference by id or name
     * @param conferenceStopRequest 
     */
    public async conferenceStopAudio(id: string, conferenceStopRequest: ConferenceStopRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceStopAudio", "id");
        }


        // verify required parameter 'conferenceStopRequest' is not null or undefined
        if (conferenceStopRequest === null || conferenceStopRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceStopAudio", "conferenceStopRequest");
        }


        // Path Params
        const localVarPath = '/conferences/{id}/actions/stop'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(conferenceStopRequest, "ConferenceStopRequest", ""),
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
     * Stop recording the conference.  **Expected Webhooks:**  - `conference.recording.saved` 
     * Conference recording stop
     * @param id Specifies the conference to stop the recording for by id or name
     * @param stopRecordingRequest Stop recording conference request
     */
    public async conferenceStopRecording(id: string, stopRecordingRequest: StopRecordingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceStopRecording", "id");
        }


        // verify required parameter 'stopRecordingRequest' is not null or undefined
        if (stopRecordingRequest === null || stopRecordingRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceStopRecording", "stopRecordingRequest");
        }


        // Path Params
        const localVarPath = '/conferences/{id}/actions/record_stop'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * Unhold a list of participants in a conference call
     * Unhold conference participants
     * @param id Uniquely identifies the conference by id or name
     * @param conferenceUnholdRequest 
     */
    public async conferenceUnholdParticipants(id: string, conferenceUnholdRequest: ConferenceUnholdRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceUnholdParticipants", "id");
        }


        // verify required parameter 'conferenceUnholdRequest' is not null or undefined
        if (conferenceUnholdRequest === null || conferenceUnholdRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceUnholdParticipants", "conferenceUnholdRequest");
        }


        // Path Params
        const localVarPath = '/conferences/{id}/actions/unhold'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(conferenceUnholdRequest, "ConferenceUnholdRequest", ""),
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
     * Unmute a list of participants in a conference call
     * Unmute conference participants
     * @param id Uniquely identifies the conference by id or name
     * @param conferenceUnmuteRequest 
     */
    public async conferenceUnmuteParticipants(id: string, conferenceUnmuteRequest: ConferenceUnmuteRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceUnmuteParticipants", "id");
        }


        // verify required parameter 'conferenceUnmuteRequest' is not null or undefined
        if (conferenceUnmuteRequest === null || conferenceUnmuteRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceUnmuteParticipants", "conferenceUnmuteRequest");
        }


        // Path Params
        const localVarPath = '/conferences/{id}/actions/unmute'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(conferenceUnmuteRequest, "ConferenceUnmuteRequest", ""),
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
     * Update conference participant supervisor_role
     * Update conference participant
     * @param id Uniquely identifies the conference by id or name
     * @param updateConferenceRequest Update Conference request object
     */
    public async conferenceUpdate(id: string, updateConferenceRequest: UpdateConferenceRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceUpdate", "id");
        }


        // verify required parameter 'updateConferenceRequest' is not null or undefined
        if (updateConferenceRequest === null || updateConferenceRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "conferenceUpdate", "updateConferenceRequest");
        }


        // Path Params
        const localVarPath = '/conferences/{id}/actions/update'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateConferenceRequest, "UpdateConferenceRequest", ""),
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
     * Create a conference from an existing call leg using a `call_control_id` and a conference name. Upon creating the conference, the call will be automatically bridged to the conference. Conferences will expire after all participants have left the conference or after 4 hours regardless of the number of active participants.  **Expected Webhooks:**  - `conference.created` - `conference.participant.joined` - `conference.participant.left` - `conference.ended` - `conference.recording.saved` - `conference.floor.changed` 
     * Create conference
     * @param createConferenceRequest Create a conference
     */
    public async createConference(createConferenceRequest: CreateConferenceRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createConferenceRequest' is not null or undefined
        if (createConferenceRequest === null || createConferenceRequest === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "createConference", "createConferenceRequest");
        }


        // Path Params
        const localVarPath = '/conferences';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createConferenceRequest, "CreateConferenceRequest", ""),
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
     * Lists conference participants
     * List conference participants
     * @param conferenceId Uniquely identifies the conference by id
     * @param filterMuted If present, participants will be filtered to those who are/are not muted
     * @param filterOnHold If present, participants will be filtered to those who are/are not put on hold
     * @param filterWhispering If present, participants will be filtered to those who are whispering or are not
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async listConferenceParticipants(conferenceId: string, filterMuted?: boolean, filterOnHold?: boolean, filterWhispering?: boolean, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'conferenceId' is not null or undefined
        if (conferenceId === null || conferenceId === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "listConferenceParticipants", "conferenceId");
        }







        // Path Params
        const localVarPath = '/conferences/{conference_id}/participants'
            .replace('{' + 'conference_id' + '}', encodeURIComponent(String(conferenceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterMuted !== undefined) {
            requestContext.setQueryParam("filter[muted]", ObjectSerializer.serialize(filterMuted, "boolean", ""));
        }

        // Query Params
        if (filterOnHold !== undefined) {
            requestContext.setQueryParam("filter[on_hold]", ObjectSerializer.serialize(filterOnHold, "boolean", ""));
        }

        // Query Params
        if (filterWhispering !== undefined) {
            requestContext.setQueryParam("filter[whispering]", ObjectSerializer.serialize(filterWhispering, "boolean", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("page[number]", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page[size]", ObjectSerializer.serialize(pageSize, "number", ""));
        }


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
     * Lists conferences. Conferences are created on demand, and will expire after all participants have left the conference or after 4 hours regardless of the number of active participants. Conferences are listed in descending order by `expires_at`.
     * List conferences
     * @param filterName If present, conferences will be filtered to those with a matching &#x60;name&#x60; attribute. Matching is case-sensitive
     * @param filterStatus If present, conferences will be filtered by status.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async listConferences(filterName?: string, filterStatus?: 'init' | 'in_progress' | 'completed', pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/conferences';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterName !== undefined) {
            requestContext.setQueryParam("filter[name]", ObjectSerializer.serialize(filterName, "string", ""));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "'init' | 'in_progress' | 'completed'", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("page[number]", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page[size]", ObjectSerializer.serialize(pageSize, "number", ""));
        }


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
     * Retrieve an existing conference
     * Retrieve a conference
     * @param id Uniquely identifies the conference by id
     */
    public async retrieveConference(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ConferenceCommandsApi", "retrieveConference", "id");
        }


        // Path Params
        const localVarPath = '/conferences/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

export class ConferenceCommandsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to conferenceDialParticipantIn
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async conferenceDialParticipantIn(response: ResponseContext): Promise<ConferenceCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to conferenceHoldParticipants
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async conferenceHoldParticipants(response: ResponseContext): Promise<ConferenceCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to conferenceJoin
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async conferenceJoin(response: ResponseContext): Promise<ConferenceCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to conferenceLeave
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async conferenceLeave(response: ResponseContext): Promise<ConferenceCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to conferenceMuteParticipants
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async conferenceMuteParticipants(response: ResponseContext): Promise<ConferenceCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to conferencePauseRecording
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async conferencePauseRecording(response: ResponseContext): Promise<ConferenceCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to conferencePlayAudio
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async conferencePlayAudio(response: ResponseContext): Promise<ConferenceCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to conferenceResumeRecording
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async conferenceResumeRecording(response: ResponseContext): Promise<ConferenceCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to conferenceSpeakText
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async conferenceSpeakText(response: ResponseContext): Promise<ConferenceCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to conferenceStartRecording
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async conferenceStartRecording(response: ResponseContext): Promise<ConferenceCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to conferenceStopAudio
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async conferenceStopAudio(response: ResponseContext): Promise<ConferenceCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to conferenceStopRecording
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async conferenceStopRecording(response: ResponseContext): Promise<ConferenceCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to conferenceUnholdParticipants
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async conferenceUnholdParticipants(response: ResponseContext): Promise<ConferenceCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to conferenceUnmuteParticipants
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async conferenceUnmuteParticipants(response: ResponseContext): Promise<ConferenceCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to conferenceUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async conferenceUpdate(response: ResponseContext): Promise<ConferenceCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceCommandResponse", ""
            ) as ConferenceCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createConference
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createConference(response: ResponseContext): Promise<ConferenceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceResponse", ""
            ) as ConferenceResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceResponse", ""
            ) as ConferenceResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listConferenceParticipants
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listConferenceParticipants(response: ResponseContext): Promise<ListParticipantsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListParticipantsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListParticipantsResponse", ""
            ) as ListParticipantsResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListParticipantsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListParticipantsResponse", ""
            ) as ListParticipantsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listConferences
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listConferences(response: ResponseContext): Promise<ListConferencesResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListConferencesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListConferencesResponse", ""
            ) as ListConferencesResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListConferencesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListConferencesResponse", ""
            ) as ListConferencesResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveConference
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveConference(response: ResponseContext): Promise<ConferenceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConferenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceResponse", ""
            ) as ConferenceResponse;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConferenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConferenceResponse", ""
            ) as ConferenceResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

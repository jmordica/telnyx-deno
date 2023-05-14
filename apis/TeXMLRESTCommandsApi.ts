// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreateTeXMLSecretRequest } from '../models/CreateTeXMLSecretRequest.ts';
import { InitiateCallRequest } from '../models/InitiateCallRequest.ts';
import { InitiateTeXMLCallResponse } from '../models/InitiateTeXMLCallResponse.ts';
import { TeXMLRESTCommandResponse } from '../models/TeXMLRESTCommandResponse.ts';
import { UpdateCallRequest } from '../models/UpdateCallRequest.ts';

/**
 * no description
 */
export class TeXMLRESTCommandsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a TeXML secret which can be later used as a Dynamic Parameter for TeXML when using Mustache Templates in your TeXML. In your TeXML you will be able to use your secret name, and this name will be replaced by the actual secret value when processing the TeXML on Telnyx side.  The secrets are not visible in any logs.
     * Create a TeXML secret
     * @param createTeXMLSecretRequest Create TeXML secret request object
     */
    public async createTeXMLSecret(createTeXMLSecretRequest: CreateTeXMLSecretRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createTeXMLSecretRequest' is not null or undefined
        if (createTeXMLSecretRequest === null || createTeXMLSecretRequest === undefined) {
            throw new RequiredError("TeXMLRESTCommandsApi", "createTeXMLSecret", "createTeXMLSecretRequest");
        }


        // Path Params
        const localVarPath = '/texml/secrets';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createTeXMLSecretRequest, "CreateTeXMLSecretRequest", ""),
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
     * Initiate an outbound TeXML call. Telnyx will request TeXML from the XML Request URL configured for the connection in the Mission Control Portal.
     * Initiate an outbound call
     * @param applicationId The ID of the TeXML application used for the call.
     * @param initiateCallRequest Iniatiate Call request object
     */
    public async initiateTeXMLCall(applicationId: string, initiateCallRequest: InitiateCallRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("TeXMLRESTCommandsApi", "initiateTeXMLCall", "applicationId");
        }


        // verify required parameter 'initiateCallRequest' is not null or undefined
        if (initiateCallRequest === null || initiateCallRequest === undefined) {
            throw new RequiredError("TeXMLRESTCommandsApi", "initiateTeXMLCall", "initiateCallRequest");
        }


        // Path Params
        const localVarPath = '/texml/calls/{application_id}'
            .replace('{' + 'application_id' + '}', encodeURIComponent(String(applicationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(initiateCallRequest, "InitiateCallRequest", ""),
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
     * Update TeXML call. Please note that the keys present in the payload MUST BE formatted in CamelCase as specified in the example.
     * Update call
     * @param callSid The CallSid that identifies the call to update.
     * @param updateCallRequest Update Call request object
     */
    public async updateTeXMLCall(callSid: string, updateCallRequest: UpdateCallRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callSid' is not null or undefined
        if (callSid === null || callSid === undefined) {
            throw new RequiredError("TeXMLRESTCommandsApi", "updateTeXMLCall", "callSid");
        }


        // verify required parameter 'updateCallRequest' is not null or undefined
        if (updateCallRequest === null || updateCallRequest === undefined) {
            throw new RequiredError("TeXMLRESTCommandsApi", "updateTeXMLCall", "updateCallRequest");
        }


        // Path Params
        const localVarPath = '/texml/calls/{call_sid}/update'
            .replace('{' + 'call_sid' + '}', encodeURIComponent(String(callSid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateCallRequest, "UpdateCallRequest", ""),
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

export class TeXMLRESTCommandsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTeXMLSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTeXMLSecret(response: ResponseContext): Promise<CreateTeXMLSecretRequest > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateTeXMLSecretRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateTeXMLSecretRequest", ""
            ) as CreateTeXMLSecretRequest;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateTeXMLSecretRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateTeXMLSecretRequest", ""
            ) as CreateTeXMLSecretRequest;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to initiateTeXMLCall
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async initiateTeXMLCall(response: ResponseContext): Promise<InitiateTeXMLCallResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InitiateTeXMLCallResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InitiateTeXMLCallResponse", ""
            ) as InitiateTeXMLCallResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InitiateTeXMLCallResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InitiateTeXMLCallResponse", ""
            ) as InitiateTeXMLCallResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTeXMLCall
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateTeXMLCall(response: ResponseContext): Promise<TeXMLRESTCommandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TeXMLRESTCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TeXMLRESTCommandResponse", ""
            ) as TeXMLRESTCommandResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TeXMLRESTCommandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TeXMLRESTCommandResponse", ""
            ) as TeXMLRESTCommandResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

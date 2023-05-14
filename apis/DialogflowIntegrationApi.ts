// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { DialogflowConnection } from '../models/DialogflowConnection.ts';
import { DialogflowConnectionResponse } from '../models/DialogflowConnectionResponse.ts';
import { Errors } from '../models/Errors.ts';

/**
 * no description
 */
export class DialogflowIntegrationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Save Dialogflow Credentiails to Telnyx, so it can be used with other Telnyx services.
     * Create a Dialogflow Connection
     * @param connectionId Telnyx connection id
     * @param dialogflowConnection The params expected to create/update a Dialogflow Connection for given connection_id.
     */
    public async createDialogflowConnection(connectionId: string, dialogflowConnection: DialogflowConnection, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError("DialogflowIntegrationApi", "createDialogflowConnection", "connectionId");
        }


        // verify required parameter 'dialogflowConnection' is not null or undefined
        if (dialogflowConnection === null || dialogflowConnection === undefined) {
            throw new RequiredError("DialogflowIntegrationApi", "createDialogflowConnection", "dialogflowConnection");
        }


        // Path Params
        const localVarPath = '/dialogflow_connections/{connection_id}'
            .replace('{' + 'connection_id' + '}', encodeURIComponent(String(connectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(dialogflowConnection, "DialogflowConnection", ""),
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
     * Deletes a stored Dialogflow Connection.
     * Delete stored Dialogflow Connection
     * @param connectionId Telnyx connection id
     */
    public async deleteDialogflowConnection(connectionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError("DialogflowIntegrationApi", "deleteDialogflowConnection", "connectionId");
        }


        // Path Params
        const localVarPath = '/dialogflow_connections/{connection_id}'
            .replace('{' + 'connection_id' + '}', encodeURIComponent(String(connectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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

    /**
     * Return details of the Dialogflow connection associated with the given CallControl connection.
     * Retrieve stored Dialogflow Connection
     * @param connectionId Telnyx connection id
     */
    public async getDialogflowConnection(connectionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError("DialogflowIntegrationApi", "getDialogflowConnection", "connectionId");
        }


        // Path Params
        const localVarPath = '/dialogflow_connections/{connection_id}'
            .replace('{' + 'connection_id' + '}', encodeURIComponent(String(connectionId)));

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

    /**
     * Updates a stored Dialogflow Connection.
     * Update stored Dialogflow Connection
     * @param connectionId Telnyx connection id
     * @param dialogflowConnection The params expected to create/update a Dialogflow Connection for given connection_id.
     */
    public async updateDialogflowConnection(connectionId: string, dialogflowConnection: DialogflowConnection, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError("DialogflowIntegrationApi", "updateDialogflowConnection", "connectionId");
        }


        // verify required parameter 'dialogflowConnection' is not null or undefined
        if (dialogflowConnection === null || dialogflowConnection === undefined) {
            throw new RequiredError("DialogflowIntegrationApi", "updateDialogflowConnection", "dialogflowConnection");
        }


        // Path Params
        const localVarPath = '/dialogflow_connections/{connection_id}'
            .replace('{' + 'connection_id' + '}', encodeURIComponent(String(connectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(dialogflowConnection, "DialogflowConnection", ""),
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

export class DialogflowIntegrationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDialogflowConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDialogflowConnection(response: ResponseContext): Promise<DialogflowConnectionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: DialogflowConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DialogflowConnectionResponse", ""
            ) as DialogflowConnectionResponse;
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
            const body: DialogflowConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DialogflowConnectionResponse", ""
            ) as DialogflowConnectionResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDialogflowConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDialogflowConnection(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDialogflowConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDialogflowConnection(response: ResponseContext): Promise<DialogflowConnectionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DialogflowConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DialogflowConnectionResponse", ""
            ) as DialogflowConnectionResponse;
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
            const body: DialogflowConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DialogflowConnectionResponse", ""
            ) as DialogflowConnectionResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDialogflowConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDialogflowConnection(response: ResponseContext): Promise<DialogflowConnectionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DialogflowConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DialogflowConnectionResponse", ""
            ) as DialogflowConnectionResponse;
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
            const body: DialogflowConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DialogflowConnectionResponse", ""
            ) as DialogflowConnectionResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

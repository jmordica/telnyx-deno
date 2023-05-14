// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CallControlApplicationResponse } from '../models/CallControlApplicationResponse.ts';
import { CreateCallControlApplicationRequest } from '../models/CreateCallControlApplicationRequest.ts';
import { ListCallControlApplicationsResponse } from '../models/ListCallControlApplicationsResponse.ts';
import { UpdateCallControlApplicationRequest } from '../models/UpdateCallControlApplicationRequest.ts';

/**
 * no description
 */
export class CallControlApplicationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a call control application.
     * Create a call control application
     * @param createCallControlApplicationRequest Create call control application request.
     */
    public async createCallControlApplication(createCallControlApplicationRequest: CreateCallControlApplicationRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createCallControlApplicationRequest' is not null or undefined
        if (createCallControlApplicationRequest === null || createCallControlApplicationRequest === undefined) {
            throw new RequiredError("CallControlApplicationsApi", "createCallControlApplication", "createCallControlApplicationRequest");
        }


        // Path Params
        const localVarPath = '/call_control_applications';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createCallControlApplicationRequest, "CreateCallControlApplicationRequest", ""),
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
     * Deletes a call control application.
     * Delete a call control application
     * @param id Identifies the resource.
     */
    public async deleteCallControlApplication(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CallControlApplicationsApi", "deleteCallControlApplication", "id");
        }


        // Path Params
        const localVarPath = '/call_control_applications/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * Return a list of call control applications.
     * List call control applications
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterApplicationNameContains If present, applications with &lt;code&gt;application_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @param filterOutboundVoiceProfileId Identifies the associated outbound voice profile.
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     */
    public async listCallControlApplications(pageNumber?: number, pageSize?: number, filterApplicationNameContains?: string, filterOutboundVoiceProfileId?: string, sort?: 'created_at' | 'connection_name' | 'active', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/call_control_applications';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("page[number]", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page[size]", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (filterApplicationNameContains !== undefined) {
            requestContext.setQueryParam("filter[application_name][contains]", ObjectSerializer.serialize(filterApplicationNameContains, "string", ""));
        }

        // Query Params
        if (filterOutboundVoiceProfileId !== undefined) {
            requestContext.setQueryParam("filter[outbound_voice_profile_id]", ObjectSerializer.serialize(filterOutboundVoiceProfileId, "string", "int64"));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'created_at' | 'connection_name' | 'active'", ""));
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
     * Retrieves the details of an existing call control application.
     * Retrieve a call control application
     * @param id Identifies the resource.
     */
    public async retrieveCallControlApplication(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CallControlApplicationsApi", "retrieveCallControlApplication", "id");
        }


        // Path Params
        const localVarPath = '/call_control_applications/{id}'
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

    /**
     * Updates settings of an existing call control application.
     * Update a call control application
     * @param id Identifies the resource.
     * @param updateCallControlApplicationRequest Update call control application request.
     */
    public async updateCallControlApplication(id: string, updateCallControlApplicationRequest: UpdateCallControlApplicationRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CallControlApplicationsApi", "updateCallControlApplication", "id");
        }


        // verify required parameter 'updateCallControlApplicationRequest' is not null or undefined
        if (updateCallControlApplicationRequest === null || updateCallControlApplicationRequest === undefined) {
            throw new RequiredError("CallControlApplicationsApi", "updateCallControlApplication", "updateCallControlApplicationRequest");
        }


        // Path Params
        const localVarPath = '/call_control_applications/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateCallControlApplicationRequest, "UpdateCallControlApplicationRequest", ""),
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

export class CallControlApplicationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCallControlApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createCallControlApplication(response: ResponseContext): Promise<CallControlApplicationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CallControlApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlApplicationResponse", ""
            ) as CallControlApplicationResponse;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlApplicationResponse", ""
            ) as CallControlApplicationResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCallControlApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCallControlApplication(response: ResponseContext): Promise<CallControlApplicationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlApplicationResponse", ""
            ) as CallControlApplicationResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Resource not found", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlApplicationResponse", ""
            ) as CallControlApplicationResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCallControlApplications
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listCallControlApplications(response: ResponseContext): Promise<ListCallControlApplicationsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListCallControlApplicationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListCallControlApplicationsResponse", ""
            ) as ListCallControlApplicationsResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Resource not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListCallControlApplicationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListCallControlApplicationsResponse", ""
            ) as ListCallControlApplicationsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveCallControlApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveCallControlApplication(response: ResponseContext): Promise<CallControlApplicationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlApplicationResponse", ""
            ) as CallControlApplicationResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Resource not found", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlApplicationResponse", ""
            ) as CallControlApplicationResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCallControlApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCallControlApplication(response: ResponseContext): Promise<CallControlApplicationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CallControlApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlApplicationResponse", ""
            ) as CallControlApplicationResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Resource not found", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CallControlApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CallControlApplicationResponse", ""
            ) as CallControlApplicationResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

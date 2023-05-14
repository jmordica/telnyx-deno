// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreateFqdnConnectionRequest } from '../models/CreateFqdnConnectionRequest.ts';
import { FQDNConnectionResponse } from '../models/FQDNConnectionResponse.ts';
import { ListFQDNConnectionsResponse } from '../models/ListFQDNConnectionsResponse.ts';
import { UpdateFqdnConnectionRequest } from '../models/UpdateFqdnConnectionRequest.ts';

/**
 * no description
 */
export class FQDNConnectionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a FQDN connection.
     * Create an FQDN connection
     * @param createFqdnConnectionRequest Parameters that can be defined during FQDN connection creation
     */
    public async createFqdnConnection(createFqdnConnectionRequest: CreateFqdnConnectionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createFqdnConnectionRequest' is not null or undefined
        if (createFqdnConnectionRequest === null || createFqdnConnectionRequest === undefined) {
            throw new RequiredError("FQDNConnectionsApi", "createFqdnConnection", "createFqdnConnectionRequest");
        }


        // Path Params
        const localVarPath = '/fqdn_connections';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createFqdnConnectionRequest, "CreateFqdnConnectionRequest", ""),
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
     * Deletes an FQDN connection.
     * Delete an FQDN connection
     * @param id FQDN Connection ID
     */
    public async deleteFqdnConnection(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FQDNConnectionsApi", "deleteFqdnConnection", "id");
        }


        // Path Params
        const localVarPath = '/fqdn_connections/{id}'
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
     * Returns a list of your FQDN connections.
     * List FQDN connections
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterConnectionNameContains If present, connections with &lt;code&gt;connection_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
     * @param sort Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order.
     */
    public async listFqdnConnections(pageNumber?: number, pageSize?: number, filterConnectionNameContains?: string, sort?: 'created_at' | 'connection_name' | 'active', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/fqdn_connections';

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
        if (filterConnectionNameContains !== undefined) {
            requestContext.setQueryParam("filter[connection_name][contains]", ObjectSerializer.serialize(filterConnectionNameContains, "string", ""));
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
     * Retrieves the details of an existing FQDN connection.
     * Retrieve an FQDN connection
     * @param id FQDN Connection ID
     */
    public async retrieveFqdnConnection(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FQDNConnectionsApi", "retrieveFqdnConnection", "id");
        }


        // Path Params
        const localVarPath = '/fqdn_connections/{id}'
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
     * Updates settings of an existing FQDN connection.
     * Update an FQDN connection
     * @param id FQDN Connection ID
     * @param updateFqdnConnectionRequest Parameters that can be updated in a FQDN connection
     */
    public async updateFqdnConnection(id: string, updateFqdnConnectionRequest: UpdateFqdnConnectionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FQDNConnectionsApi", "updateFqdnConnection", "id");
        }


        // verify required parameter 'updateFqdnConnectionRequest' is not null or undefined
        if (updateFqdnConnectionRequest === null || updateFqdnConnectionRequest === undefined) {
            throw new RequiredError("FQDNConnectionsApi", "updateFqdnConnection", "updateFqdnConnectionRequest");
        }


        // Path Params
        const localVarPath = '/fqdn_connections/{id}'
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
            ObjectSerializer.serialize(updateFqdnConnectionRequest, "UpdateFqdnConnectionRequest", ""),
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

export class FQDNConnectionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFqdnConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createFqdnConnection(response: ResponseContext): Promise<FQDNConnectionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: FQDNConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FQDNConnectionResponse", ""
            ) as FQDNConnectionResponse;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: FQDNConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FQDNConnectionResponse", ""
            ) as FQDNConnectionResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteFqdnConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteFqdnConnection(response: ResponseContext): Promise<FQDNConnectionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FQDNConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FQDNConnectionResponse", ""
            ) as FQDNConnectionResponse;
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
            const body: FQDNConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FQDNConnectionResponse", ""
            ) as FQDNConnectionResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFqdnConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listFqdnConnections(response: ResponseContext): Promise<ListFQDNConnectionsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListFQDNConnectionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListFQDNConnectionsResponse", ""
            ) as ListFQDNConnectionsResponse;
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
            const body: ListFQDNConnectionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListFQDNConnectionsResponse", ""
            ) as ListFQDNConnectionsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveFqdnConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveFqdnConnection(response: ResponseContext): Promise<FQDNConnectionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FQDNConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FQDNConnectionResponse", ""
            ) as FQDNConnectionResponse;
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
            const body: FQDNConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FQDNConnectionResponse", ""
            ) as FQDNConnectionResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateFqdnConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateFqdnConnection(response: ResponseContext): Promise<FQDNConnectionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FQDNConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FQDNConnectionResponse", ""
            ) as FQDNConnectionResponse;
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
            const body: FQDNConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FQDNConnectionResponse", ""
            ) as FQDNConnectionResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

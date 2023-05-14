// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreateManagedAccount200Response } from '../models/CreateManagedAccount200Response.ts';
import { CreateManagedAccount422Response } from '../models/CreateManagedAccount422Response.ts';
import { CreateManagedAccountRequest } from '../models/CreateManagedAccountRequest.ts';
import { ListManagedAccounts200Response } from '../models/ListManagedAccounts200Response.ts';
import { UpdateManagedAccountRequest } from '../models/UpdateManagedAccountRequest.ts';

/**
 * no description
 */
export class ManagedAccountsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new managed account owned by the authenticated user. You need to be explictly approved by Telnyx in order to become a manager account.
     * Create a new managed account.
     * @param createManagedAccountRequest Parameters that define the managed account to be created
     */
    public async createManagedAccount(createManagedAccountRequest: CreateManagedAccountRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createManagedAccountRequest' is not null or undefined
        if (createManagedAccountRequest === null || createManagedAccountRequest === undefined) {
            throw new RequiredError("ManagedAccountsApi", "createManagedAccount", "createManagedAccountRequest");
        }


        // Path Params
        const localVarPath = '/managed_accounts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createManagedAccountRequest, "CreateManagedAccountRequest", ""),
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
     * Disables a managed account, forbidding it to use Telnyx services, including sending or receiving phone calls and SMS messages. Ongoing phone calls will not be affected. The managed account and its sub-users will still be able to log in via the mission control portal.
     * Disables a managed account
     * @param id Managed Account User ID
     */
    public async disableManagedAccount(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ManagedAccountsApi", "disableManagedAccount", "id");
        }


        // Path Params
        const localVarPath = '/managed_accounts/{id}/actions/disable'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Enables a managed account and its sub-users to use Telnyx services.
     * Enables a managed account
     * @param id Managed Account User ID
     */
    public async enableManagedAccount(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ManagedAccountsApi", "enableManagedAccount", "id");
        }


        // Path Params
        const localVarPath = '/managed_accounts/{id}/actions/enable'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
    public async listManagedAccounts(pageNumber?: number, pageSize?: number, filterEmailContains?: string, filterEmailEq?: string, filterOrganizationNameContains?: string, filterOrganizationNameEq?: string, sort?: 'created_at' | 'email', includeCancelledAccounts?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/managed_accounts';

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
        if (filterEmailContains !== undefined) {
            requestContext.setQueryParam("filter[email][contains]", ObjectSerializer.serialize(filterEmailContains, "string", ""));
        }

        // Query Params
        if (filterEmailEq !== undefined) {
            requestContext.setQueryParam("filter[email][eq]", ObjectSerializer.serialize(filterEmailEq, "string", ""));
        }

        // Query Params
        if (filterOrganizationNameContains !== undefined) {
            requestContext.setQueryParam("filter[organization_name][contains]", ObjectSerializer.serialize(filterOrganizationNameContains, "string", ""));
        }

        // Query Params
        if (filterOrganizationNameEq !== undefined) {
            requestContext.setQueryParam("filter[organization_name][eq]", ObjectSerializer.serialize(filterOrganizationNameEq, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'created_at' | 'email'", ""));
        }

        // Query Params
        if (includeCancelledAccounts !== undefined) {
            requestContext.setQueryParam("include_cancelled_accounts", ObjectSerializer.serialize(includeCancelledAccounts, "boolean", ""));
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
     * Retrieves the details of a single managed account.
     * Retrieve a managed account
     * @param id Managed Account User ID
     */
    public async retrieveManagedAccount(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ManagedAccountsApi", "retrieveManagedAccount", "id");
        }


        // Path Params
        const localVarPath = '/managed_accounts/{id}'
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
     * Update a single managed account.
     * Update a managed account
     * @param id Managed Account User ID
     * @param updateManagedAccountRequest Parameters that define the updates to the managed account
     */
    public async updateManagedAccount(id: string, updateManagedAccountRequest: UpdateManagedAccountRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ManagedAccountsApi", "updateManagedAccount", "id");
        }


        // verify required parameter 'updateManagedAccountRequest' is not null or undefined
        if (updateManagedAccountRequest === null || updateManagedAccountRequest === undefined) {
            throw new RequiredError("ManagedAccountsApi", "updateManagedAccount", "updateManagedAccountRequest");
        }


        // Path Params
        const localVarPath = '/managed_accounts/{id}'
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
            ObjectSerializer.serialize(updateManagedAccountRequest, "UpdateManagedAccountRequest", ""),
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

export class ManagedAccountsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createManagedAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createManagedAccount(response: ResponseContext): Promise<CreateManagedAccount200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateManagedAccount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManagedAccount200Response", ""
            ) as CreateManagedAccount200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: CreateManagedAccount422Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManagedAccount422Response", ""
            ) as CreateManagedAccount422Response;
            throw new ApiException<CreateManagedAccount422Response>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateManagedAccount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManagedAccount200Response", ""
            ) as CreateManagedAccount200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to disableManagedAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async disableManagedAccount(response: ResponseContext): Promise<CreateManagedAccount200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateManagedAccount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManagedAccount200Response", ""
            ) as CreateManagedAccount200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Resource not found", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: CreateManagedAccount422Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManagedAccount422Response", ""
            ) as CreateManagedAccount422Response;
            throw new ApiException<CreateManagedAccount422Response>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateManagedAccount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManagedAccount200Response", ""
            ) as CreateManagedAccount200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to enableManagedAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async enableManagedAccount(response: ResponseContext): Promise<CreateManagedAccount200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateManagedAccount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManagedAccount200Response", ""
            ) as CreateManagedAccount200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Resource not found", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: CreateManagedAccount422Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManagedAccount422Response", ""
            ) as CreateManagedAccount422Response;
            throw new ApiException<CreateManagedAccount422Response>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateManagedAccount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManagedAccount200Response", ""
            ) as CreateManagedAccount200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listManagedAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listManagedAccounts(response: ResponseContext): Promise<ListManagedAccounts200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListManagedAccounts200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListManagedAccounts200Response", ""
            ) as ListManagedAccounts200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListManagedAccounts200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListManagedAccounts200Response", ""
            ) as ListManagedAccounts200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveManagedAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveManagedAccount(response: ResponseContext): Promise<CreateManagedAccount200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateManagedAccount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManagedAccount200Response", ""
            ) as CreateManagedAccount200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Resource not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateManagedAccount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManagedAccount200Response", ""
            ) as CreateManagedAccount200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateManagedAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateManagedAccount(response: ResponseContext): Promise<CreateManagedAccount200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateManagedAccount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManagedAccount200Response", ""
            ) as CreateManagedAccount200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Resource not found", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: CreateManagedAccount422Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManagedAccount422Response", ""
            ) as CreateManagedAccount422Response;
            throw new ApiException<CreateManagedAccount422Response>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateManagedAccount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManagedAccount200Response", ""
            ) as CreateManagedAccount200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

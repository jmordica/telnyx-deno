// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { BulkCredentialRequest } from '../models/BulkCredentialRequest.ts';
import { BulkCredentialResponse } from '../models/BulkCredentialResponse.ts';

/**
 * no description
 */
export class BulkCredentialsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Perform activate or deactivate action on all credentials filtered by the provided tag. Activate action will change the status to active, making it possible to connect calls with the credential. Deactivate action will change the status to inactive, making it impossible to connect calls with the credential.
     * Perform activate or deactivate action on all credentials filtered by the provided tag.
     * @param action Identifies the action to be taken. Activate will change the status to active. Deactivate will change the status to inactive.
     * @param filterTag Filter by tag, required by bulk operations.
     */
    public async bulkCredentialAction(action: 'activate' | 'deactivate', filterTag: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'action' is not null or undefined
        if (action === null || action === undefined) {
            throw new RequiredError("BulkCredentialsApi", "bulkCredentialAction", "action");
        }


        // verify required parameter 'filterTag' is not null or undefined
        if (filterTag === null || filterTag === undefined) {
            throw new RequiredError("BulkCredentialsApi", "bulkCredentialAction", "filterTag");
        }


        // Path Params
        const localVarPath = '/actions/{action}/telephony_credentials'
            .replace('{' + 'action' + '}', encodeURIComponent(String(action)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterTag !== undefined) {
            requestContext.setQueryParam("filter[tag]", ObjectSerializer.serialize(filterTag, "string", ""));
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
     * Creates several credentials in bulk.
     * Creates several credentials
     * @param bulkCredentialRequest Requested parameters to create credentials on bulk
     */
    public async createBulkTelephonyCredential(bulkCredentialRequest: BulkCredentialRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bulkCredentialRequest' is not null or undefined
        if (bulkCredentialRequest === null || bulkCredentialRequest === undefined) {
            throw new RequiredError("BulkCredentialsApi", "createBulkTelephonyCredential", "bulkCredentialRequest");
        }


        // Path Params
        const localVarPath = '/actions/bulk/telephony_credentials';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bulkCredentialRequest, "BulkCredentialRequest", ""),
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
     * Delete several credentials in bulk.
     * Delete several credentials
     * @param filterTag Filter by tag, required by bulk operations.
     */
    public async deleteBulkTelephonyCredential(filterTag: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'filterTag' is not null or undefined
        if (filterTag === null || filterTag === undefined) {
            throw new RequiredError("BulkCredentialsApi", "deleteBulkTelephonyCredential", "filterTag");
        }


        // Path Params
        const localVarPath = '/actions/bulk/telephony_credentials';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterTag !== undefined) {
            requestContext.setQueryParam("filter[tag]", ObjectSerializer.serialize(filterTag, "string", ""));
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
     * Update several credentials in bulk.
     * Update several credentials
     * @param filterTag Filter by tag, required by bulk operations.
     * @param bulkCredentialRequest Parameters to update credentials on bulk
     */
    public async updateBulkTelephonyCredential(filterTag: string, bulkCredentialRequest: BulkCredentialRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'filterTag' is not null or undefined
        if (filterTag === null || filterTag === undefined) {
            throw new RequiredError("BulkCredentialsApi", "updateBulkTelephonyCredential", "filterTag");
        }


        // verify required parameter 'bulkCredentialRequest' is not null or undefined
        if (bulkCredentialRequest === null || bulkCredentialRequest === undefined) {
            throw new RequiredError("BulkCredentialsApi", "updateBulkTelephonyCredential", "bulkCredentialRequest");
        }


        // Path Params
        const localVarPath = '/actions/bulk/telephony_credentials';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterTag !== undefined) {
            requestContext.setQueryParam("filter[tag]", ObjectSerializer.serialize(filterTag, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bulkCredentialRequest, "BulkCredentialRequest", ""),
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

export class BulkCredentialsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bulkCredentialAction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bulkCredentialAction(response: ResponseContext): Promise<BulkCredentialResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BulkCredentialResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCredentialResponse", ""
            ) as BulkCredentialResponse;
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
            const body: BulkCredentialResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCredentialResponse", ""
            ) as BulkCredentialResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBulkTelephonyCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBulkTelephonyCredential(response: ResponseContext): Promise<BulkCredentialResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BulkCredentialResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCredentialResponse", ""
            ) as BulkCredentialResponse;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BulkCredentialResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCredentialResponse", ""
            ) as BulkCredentialResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteBulkTelephonyCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteBulkTelephonyCredential(response: ResponseContext): Promise<BulkCredentialResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BulkCredentialResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCredentialResponse", ""
            ) as BulkCredentialResponse;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BulkCredentialResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCredentialResponse", ""
            ) as BulkCredentialResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBulkTelephonyCredential
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBulkTelephonyCredential(response: ResponseContext): Promise<BulkCredentialResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BulkCredentialResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCredentialResponse", ""
            ) as BulkCredentialResponse;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BulkCredentialResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCredentialResponse", ""
            ) as BulkCredentialResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

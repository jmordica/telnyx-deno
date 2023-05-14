// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { BulkCreationDetailedStatusResponse } from '../models/BulkCreationDetailedStatusResponse.ts';
import { BulkCreationRequest } from '../models/BulkCreationRequest.ts';
import { BulkCreationResponse } from '../models/BulkCreationResponse.ts';
import { BulkCreationStatusResponse } from '../models/BulkCreationStatusResponse.ts';
import { BulkCreationTasksResponse } from '../models/BulkCreationTasksResponse.ts';
import { HTTPValidationError } from '../models/HTTPValidationError.ts';

/**
 * no description
 */
export class BulkSoleProprietorCreationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Submit sets of data about brands, campaigns, and phone numbers to create and assign. Please note that sub-usecases, phone numbers, and sample messages are each limited to 5 per campaign.
     * Bulk Creation
     * @param bulkCreationRequest 
     */
    public async bulkCreationBulkCreationPost(bulkCreationRequest: BulkCreationRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bulkCreationRequest' is not null or undefined
        if (bulkCreationRequest === null || bulkCreationRequest === undefined) {
            throw new RequiredError("BulkSoleProprietorCreationApi", "bulkCreationBulkCreationPost", "bulkCreationRequest");
        }


        // Path Params
        const localVarPath = '/bulkCreation';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bulkCreationRequest, "BulkCreationRequest", ""),
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
     * Get a list of all tasks ever submitted by your organization.
     * Get All Tasks
     * @param recordsPerPage 
     * @param page 
     */
    public async getAllTasksBulkCreationGet(recordsPerPage?: any, page?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/bulkCreation';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (recordsPerPage !== undefined) {
            requestContext.setQueryParam("recordsPerPage", ObjectSerializer.serialize(recordsPerPage, "any", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "any", ""));
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
     * Get detailed information about the status of a bulk creation task.
     * Get Detailed Task Status
     * @param taskId 
     * @param recordsPerPage 
     * @param page 
     */
    public async getDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet(taskId: string, recordsPerPage?: any, page?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'taskId' is not null or undefined
        if (taskId === null || taskId === undefined) {
            throw new RequiredError("BulkSoleProprietorCreationApi", "getDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet", "taskId");
        }




        // Path Params
        const localVarPath = '/bulkCreation/{taskId}/detailedStatus'
            .replace('{' + 'taskId' + '}', encodeURIComponent(String(taskId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (recordsPerPage !== undefined) {
            requestContext.setQueryParam("recordsPerPage", ObjectSerializer.serialize(recordsPerPage, "any", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "any", ""));
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
     * Get a simple overview of the status of a bulk creation task.
     * Get Task Status
     * @param taskId 
     */
    public async getTaskStatusBulkCreationTaskIdGet(taskId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'taskId' is not null or undefined
        if (taskId === null || taskId === undefined) {
            throw new RequiredError("BulkSoleProprietorCreationApi", "getTaskStatusBulkCreationTaskIdGet", "taskId");
        }


        // Path Params
        const localVarPath = '/bulkCreation/{taskId}'
            .replace('{' + 'taskId' + '}', encodeURIComponent(String(taskId)));

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

export class BulkSoleProprietorCreationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bulkCreationBulkCreationPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bulkCreationBulkCreationPost(response: ResponseContext): Promise<BulkCreationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: BulkCreationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCreationResponse", ""
            ) as BulkCreationResponse;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BulkCreationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCreationResponse", ""
            ) as BulkCreationResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllTasksBulkCreationGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllTasksBulkCreationGet(response: ResponseContext): Promise<BulkCreationTasksResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BulkCreationTasksResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCreationTasksResponse", ""
            ) as BulkCreationTasksResponse;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BulkCreationTasksResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCreationTasksResponse", ""
            ) as BulkCreationTasksResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet(response: ResponseContext): Promise<BulkCreationDetailedStatusResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BulkCreationDetailedStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCreationDetailedStatusResponse", ""
            ) as BulkCreationDetailedStatusResponse;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BulkCreationDetailedStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCreationDetailedStatusResponse", ""
            ) as BulkCreationDetailedStatusResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTaskStatusBulkCreationTaskIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTaskStatusBulkCreationTaskIdGet(response: ResponseContext): Promise<BulkCreationStatusResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BulkCreationStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCreationStatusResponse", ""
            ) as BulkCreationStatusResponse;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BulkCreationStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkCreationStatusResponse", ""
            ) as BulkCreationStatusResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

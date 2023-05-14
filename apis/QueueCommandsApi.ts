// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ListQueueCallsResponse } from '../models/ListQueueCallsResponse.ts';
import { QueueCallResponse } from '../models/QueueCallResponse.ts';
import { QueueResponse } from '../models/QueueResponse.ts';

/**
 * no description
 */
export class QueueCommandsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieve the list of calls in an existing queue
     * Retrieve calls from a queue
     * @param queueName Uniquely identifies the queue by name
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async listQueueCalls(queueName: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'queueName' is not null or undefined
        if (queueName === null || queueName === undefined) {
            throw new RequiredError("QueueCommandsApi", "listQueueCalls", "queueName");
        }




        // Path Params
        const localVarPath = '/queues/{queue_name}/calls'
            .replace('{' + 'queue_name' + '}', encodeURIComponent(String(queueName)));

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
     * Retrieve an existing call from an existing queue
     * Retrieve a call from a queue
     * @param queueName Uniquely identifies the queue by name
     * @param callControlId Unique identifier and token for controlling the call
     */
    public async retrieveCallFromQueue(queueName: string, callControlId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'queueName' is not null or undefined
        if (queueName === null || queueName === undefined) {
            throw new RequiredError("QueueCommandsApi", "retrieveCallFromQueue", "queueName");
        }


        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("QueueCommandsApi", "retrieveCallFromQueue", "callControlId");
        }


        // Path Params
        const localVarPath = '/queues/{queue_name}/calls/{call_control_id}'
            .replace('{' + 'queue_name' + '}', encodeURIComponent(String(queueName)))
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

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
     * Retrieve an existing call queue
     * Retrieve a call queue
     * @param queueName Uniquely identifies the queue by name
     */
    public async retrieveCallQueue(queueName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'queueName' is not null or undefined
        if (queueName === null || queueName === undefined) {
            throw new RequiredError("QueueCommandsApi", "retrieveCallQueue", "queueName");
        }


        // Path Params
        const localVarPath = '/queues/{queue_name}'
            .replace('{' + 'queue_name' + '}', encodeURIComponent(String(queueName)));

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

export class QueueCommandsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listQueueCalls
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listQueueCalls(response: ResponseContext): Promise<ListQueueCallsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListQueueCallsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListQueueCallsResponse", ""
            ) as ListQueueCallsResponse;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListQueueCallsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListQueueCallsResponse", ""
            ) as ListQueueCallsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveCallFromQueue
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveCallFromQueue(response: ResponseContext): Promise<QueueCallResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: QueueCallResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "QueueCallResponse", ""
            ) as QueueCallResponse;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: QueueCallResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "QueueCallResponse", ""
            ) as QueueCallResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveCallQueue
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveCallQueue(response: ResponseContext): Promise<QueueResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: QueueResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "QueueResponse", ""
            ) as QueueResponse;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: QueueResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "QueueResponse", ""
            ) as QueueResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Errors } from '../models/Errors.ts';
import { ListPhoneNumberBlocksBackgroundJobsResponse } from '../models/ListPhoneNumberBlocksBackgroundJobsResponse.ts';
import { PhoneNumberBlocksJob } from '../models/PhoneNumberBlocksJob.ts';
import { PhoneNumberBlocksJobDeletePhoneNumberBlock } from '../models/PhoneNumberBlocksJobDeletePhoneNumberBlock.ts';
import { PhoneNumberBlocksJobDeletePhoneNumberBlockRequest } from '../models/PhoneNumberBlocksJobDeletePhoneNumberBlockRequest.ts';

/**
 * no description
 */
export class NumberBlocksBackgroundJobsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a new background job to delete all the phone numbers associated with the given block. We will only consider the phone number block as deleted after all phone numbers associated with it are removed, so multiple executions of this job may be necessary in case some of the phone numbers present errors during the deletion process.
     * Deletes all numbers associated with a phone number block
     * @param phoneNumberBlocksJobDeletePhoneNumberBlockRequest 
     */
    public async createPhoneNumberBlocksJobDeletePhoneNumberBlock(phoneNumberBlocksJobDeletePhoneNumberBlockRequest: PhoneNumberBlocksJobDeletePhoneNumberBlockRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumberBlocksJobDeletePhoneNumberBlockRequest' is not null or undefined
        if (phoneNumberBlocksJobDeletePhoneNumberBlockRequest === null || phoneNumberBlocksJobDeletePhoneNumberBlockRequest === undefined) {
            throw new RequiredError("NumberBlocksBackgroundJobsApi", "createPhoneNumberBlocksJobDeletePhoneNumberBlock", "phoneNumberBlocksJobDeletePhoneNumberBlockRequest");
        }


        // Path Params
        const localVarPath = '/phone_number_blocks/jobs/delete_phone_number_block';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(phoneNumberBlocksJobDeletePhoneNumberBlockRequest, "PhoneNumberBlocksJobDeletePhoneNumberBlockRequest", ""),
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
     * Lists the phone number blocks jobs
     * @param filterType Filter the phone number blocks jobs by type.
     * @param filterStatus Filter the phone number blocks jobs by status.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param sort Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     */
    public async listPhoneNumberBlocksJobs(filterType?: 'delete_phone_number_block', filterStatus?: 'pending' | 'in_progress' | 'completed' | 'failed', pageNumber?: number, pageSize?: number, sort?: 'created_at', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/phone_number_blocks/jobs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterType !== undefined) {
            requestContext.setQueryParam("filter[type]", ObjectSerializer.serialize(filterType, "'delete_phone_number_block'", ""));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "'pending' | 'in_progress' | 'completed' | 'failed'", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("page[number]", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page[size]", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'created_at'", ""));
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
     * Retrieves a phone number blocks job
     * @param id Identifies the Phone Number Blocks Job.
     */
    public async retrievePhoneNumberBlocksJob(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NumberBlocksBackgroundJobsApi", "retrievePhoneNumberBlocksJob", "id");
        }


        // Path Params
        const localVarPath = '/phone_number_blocks/jobs/{id}'
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

export class NumberBlocksBackgroundJobsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPhoneNumberBlocksJobDeletePhoneNumberBlock
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPhoneNumberBlocksJobDeletePhoneNumberBlock(response: ResponseContext): Promise<PhoneNumberBlocksJobDeletePhoneNumberBlock > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: PhoneNumberBlocksJobDeletePhoneNumberBlock = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberBlocksJobDeletePhoneNumberBlock", ""
            ) as PhoneNumberBlocksJobDeletePhoneNumberBlock;
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
            const body: PhoneNumberBlocksJobDeletePhoneNumberBlock = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberBlocksJobDeletePhoneNumberBlock", ""
            ) as PhoneNumberBlocksJobDeletePhoneNumberBlock;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPhoneNumberBlocksJobs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPhoneNumberBlocksJobs(response: ResponseContext): Promise<ListPhoneNumberBlocksBackgroundJobsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListPhoneNumberBlocksBackgroundJobsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPhoneNumberBlocksBackgroundJobsResponse", ""
            ) as ListPhoneNumberBlocksBackgroundJobsResponse;
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
            const body: ListPhoneNumberBlocksBackgroundJobsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPhoneNumberBlocksBackgroundJobsResponse", ""
            ) as ListPhoneNumberBlocksBackgroundJobsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrievePhoneNumberBlocksJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrievePhoneNumberBlocksJob(response: ResponseContext): Promise<PhoneNumberBlocksJob > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberBlocksJob = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberBlocksJob", ""
            ) as PhoneNumberBlocksJob;
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
            const body: PhoneNumberBlocksJob = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberBlocksJob", ""
            ) as PhoneNumberBlocksJob;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

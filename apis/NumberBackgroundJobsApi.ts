// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Errors } from '../models/Errors.ts';
import { ListPhoneNumbersBackgroundJobsResponse } from '../models/ListPhoneNumbersBackgroundJobsResponse.ts';
import { PhoneNumbersEnableEmergency } from '../models/PhoneNumbersEnableEmergency.ts';
import { PhoneNumbersJob } from '../models/PhoneNumbersJob.ts';
import { PhoneNumbersJobDeletePhoneNumbers } from '../models/PhoneNumbersJobDeletePhoneNumbers.ts';
import { PhoneNumbersJobDeletePhoneNumbersRequest } from '../models/PhoneNumbersJobDeletePhoneNumbersRequest.ts';
import { PhoneNumbersJobUpdateEmergencySettingsRequest } from '../models/PhoneNumbersJobUpdateEmergencySettingsRequest.ts';
import { PhoneNumbersJobUpdatePhoneNumbers } from '../models/PhoneNumbersJobUpdatePhoneNumbers.ts';
import { PhoneNumbersJobUpdatePhoneNumbersRequest } from '../models/PhoneNumbersJobUpdatePhoneNumbersRequest.ts';

/**
 * no description
 */
export class NumberBackgroundJobsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a new background job to delete a batch of numbers. At most one thousand numbers can be updated per API call.
     * Delete a batch of numbers
     * @param phoneNumbersJobDeletePhoneNumbersRequest 
     */
    public async createPhoneNumbersJobDeletePhoneNumbers(phoneNumbersJobDeletePhoneNumbersRequest: PhoneNumbersJobDeletePhoneNumbersRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumbersJobDeletePhoneNumbersRequest' is not null or undefined
        if (phoneNumbersJobDeletePhoneNumbersRequest === null || phoneNumbersJobDeletePhoneNumbersRequest === undefined) {
            throw new RequiredError("NumberBackgroundJobsApi", "createPhoneNumbersJobDeletePhoneNumbers", "phoneNumbersJobDeletePhoneNumbersRequest");
        }


        // Path Params
        const localVarPath = '/phone_numbers/jobs/delete_phone_numbers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(phoneNumbersJobDeletePhoneNumbersRequest, "PhoneNumbersJobDeletePhoneNumbersRequest", ""),
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
     * Creates a background job to update the emergency settings of a collection of phone numbers. At most one thousand numbers can be updated per API call.
     * Update the emergency settings from a batch of numbers
     * @param phoneNumbersJobUpdateEmergencySettingsRequest 
     */
    public async createPhoneNumbersJobUpdateEmergencySettings(phoneNumbersJobUpdateEmergencySettingsRequest: PhoneNumbersJobUpdateEmergencySettingsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumbersJobUpdateEmergencySettingsRequest' is not null or undefined
        if (phoneNumbersJobUpdateEmergencySettingsRequest === null || phoneNumbersJobUpdateEmergencySettingsRequest === undefined) {
            throw new RequiredError("NumberBackgroundJobsApi", "createPhoneNumbersJobUpdateEmergencySettings", "phoneNumbersJobUpdateEmergencySettingsRequest");
        }


        // Path Params
        const localVarPath = '/phone_numbers/jobs/update_emergency_settings';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(phoneNumbersJobUpdateEmergencySettingsRequest, "PhoneNumbersJobUpdateEmergencySettingsRequest", ""),
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
     * Creates a new background job to update a batch of numbers. At most one thousand numbers can be updated per API call. At least one of the updateable fields must be submitted.
     * Update a batch of numbers
     * @param phoneNumbersJobUpdatePhoneNumbersRequest 
     */
    public async createPhoneNumbersJobUpdatePhoneNumber(phoneNumbersJobUpdatePhoneNumbersRequest: PhoneNumbersJobUpdatePhoneNumbersRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumbersJobUpdatePhoneNumbersRequest' is not null or undefined
        if (phoneNumbersJobUpdatePhoneNumbersRequest === null || phoneNumbersJobUpdatePhoneNumbersRequest === undefined) {
            throw new RequiredError("NumberBackgroundJobsApi", "createPhoneNumbersJobUpdatePhoneNumber", "phoneNumbersJobUpdatePhoneNumbersRequest");
        }


        // Path Params
        const localVarPath = '/phone_numbers/jobs/update_phone_numbers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(phoneNumbersJobUpdatePhoneNumbersRequest, "PhoneNumbersJobUpdatePhoneNumbersRequest", ""),
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
     * Lists the phone numbers jobs
     * @param filterType Filter the phone number jobs by type.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param sort Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     */
    public async listPhoneNumbersJobs(filterType?: 'update_emergency_settings' | 'delete_phone_numbers' | 'update_phone_numbers', pageNumber?: number, pageSize?: number, sort?: 'created_at', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/phone_numbers/jobs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterType !== undefined) {
            requestContext.setQueryParam("filter[type]", ObjectSerializer.serialize(filterType, "'update_emergency_settings' | 'delete_phone_numbers' | 'update_phone_numbers'", ""));
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
     * Retrieve a phone numbers job
     * @param id Identifies the Phone Numbers Job.
     */
    public async retrievePhoneNumbersJob(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NumberBackgroundJobsApi", "retrievePhoneNumbersJob", "id");
        }


        // Path Params
        const localVarPath = '/phone_numbers/jobs/{id}'
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

export class NumberBackgroundJobsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPhoneNumbersJobDeletePhoneNumbers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPhoneNumbersJobDeletePhoneNumbers(response: ResponseContext): Promise<PhoneNumbersJobDeletePhoneNumbers > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: PhoneNumbersJobDeletePhoneNumbers = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumbersJobDeletePhoneNumbers", ""
            ) as PhoneNumbersJobDeletePhoneNumbers;
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
            const body: PhoneNumbersJobDeletePhoneNumbers = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumbersJobDeletePhoneNumbers", ""
            ) as PhoneNumbersJobDeletePhoneNumbers;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPhoneNumbersJobUpdateEmergencySettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPhoneNumbersJobUpdateEmergencySettings(response: ResponseContext): Promise<PhoneNumbersEnableEmergency > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: PhoneNumbersEnableEmergency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumbersEnableEmergency", ""
            ) as PhoneNumbersEnableEmergency;
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
            const body: PhoneNumbersEnableEmergency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumbersEnableEmergency", ""
            ) as PhoneNumbersEnableEmergency;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPhoneNumbersJobUpdatePhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPhoneNumbersJobUpdatePhoneNumber(response: ResponseContext): Promise<PhoneNumbersJobUpdatePhoneNumbers > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: PhoneNumbersJobUpdatePhoneNumbers = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumbersJobUpdatePhoneNumbers", ""
            ) as PhoneNumbersJobUpdatePhoneNumbers;
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
            const body: PhoneNumbersJobUpdatePhoneNumbers = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumbersJobUpdatePhoneNumbers", ""
            ) as PhoneNumbersJobUpdatePhoneNumbers;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPhoneNumbersJobs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPhoneNumbersJobs(response: ResponseContext): Promise<ListPhoneNumbersBackgroundJobsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListPhoneNumbersBackgroundJobsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPhoneNumbersBackgroundJobsResponse", ""
            ) as ListPhoneNumbersBackgroundJobsResponse;
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
            const body: ListPhoneNumbersBackgroundJobsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPhoneNumbersBackgroundJobsResponse", ""
            ) as ListPhoneNumbersBackgroundJobsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrievePhoneNumbersJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrievePhoneNumbersJob(response: ResponseContext): Promise<PhoneNumbersJob > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumbersJob = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumbersJob", ""
            ) as PhoneNumbersJob;
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
            const body: PhoneNumbersJob = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumbersJob", ""
            ) as PhoneNumbersJob;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

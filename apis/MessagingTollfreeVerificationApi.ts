// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Errors } from '../models/Errors.ts';
import { PaginatedVerificationRequestStatus } from '../models/PaginatedVerificationRequestStatus.ts';
import { TFVerificationRequest } from '../models/TFVerificationRequest.ts';
import { TFVerificationStatus } from '../models/TFVerificationStatus.ts';
import { VerificationRequestEgress } from '../models/VerificationRequestEgress.ts';
import { VerificationRequestStatus } from '../models/VerificationRequestStatus.ts';

/**
 * no description
 */
export class MessagingTollfreeVerificationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get a single verification request by its ID.
     * Get Verification Request
     * @param id 
     */
    public async getVerificationRequest(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MessagingTollfreeVerificationApi", "getVerificationRequest", "id");
        }


        // Path Params
        const localVarPath = '/messaging_tollfree/verification/requests/{id}'
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
     * Get a list of previously-submitted tollfree verification requests
     * List Verification Requests
     * @param page 
     * @param pageSize          Request this many records per page          This value is automatically clamped if the provided value is too large.         
     * @param dateStart 
     * @param dateEnd 
     * @param status 
     * @param phoneNumber 
     */
    public async listVerificationRequests(page: number, pageSize: number, dateStart?: Date, dateEnd?: Date, status?: TFVerificationStatus, phoneNumber?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'page' is not null or undefined
        if (page === null || page === undefined) {
            throw new RequiredError("MessagingTollfreeVerificationApi", "listVerificationRequests", "page");
        }


        // verify required parameter 'pageSize' is not null or undefined
        if (pageSize === null || pageSize === undefined) {
            throw new RequiredError("MessagingTollfreeVerificationApi", "listVerificationRequests", "pageSize");
        }






        // Path Params
        const localVarPath = '/messaging_tollfree/verification/requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (dateStart !== undefined) {
            requestContext.setQueryParam("date_start", ObjectSerializer.serialize(dateStart, "Date", "date-time"));
        }

        // Query Params
        if (dateEnd !== undefined) {
            requestContext.setQueryParam("date_end", ObjectSerializer.serialize(dateEnd, "Date", "date-time"));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "TFVerificationStatus", ""));
        }

        // Query Params
        if (phoneNumber !== undefined) {
            requestContext.setQueryParam("phone_number", ObjectSerializer.serialize(phoneNumber, "string", ""));
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
     * Submit a new tollfree verification request
     * Submit Verification Request
     * @param tFVerificationRequest 
     */
    public async submitVerificationRequest(tFVerificationRequest: TFVerificationRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tFVerificationRequest' is not null or undefined
        if (tFVerificationRequest === null || tFVerificationRequest === undefined) {
            throw new RequiredError("MessagingTollfreeVerificationApi", "submitVerificationRequest", "tFVerificationRequest");
        }


        // Path Params
        const localVarPath = '/messaging_tollfree/verification/requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(tFVerificationRequest, "TFVerificationRequest", ""),
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
     * Update an existing tollfree verification request. This is particularly useful when there are pending customer actions to be taken.
     * Update Verification Request
     * @param id 
     * @param tFVerificationRequest 
     */
    public async updateVerificationRequest(id: string, tFVerificationRequest: TFVerificationRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MessagingTollfreeVerificationApi", "updateVerificationRequest", "id");
        }


        // verify required parameter 'tFVerificationRequest' is not null or undefined
        if (tFVerificationRequest === null || tFVerificationRequest === undefined) {
            throw new RequiredError("MessagingTollfreeVerificationApi", "updateVerificationRequest", "tFVerificationRequest");
        }


        // Path Params
        const localVarPath = '/messaging_tollfree/verification/requests/{id}'
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
            ObjectSerializer.serialize(tFVerificationRequest, "TFVerificationRequest", ""),
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

export class MessagingTollfreeVerificationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVerificationRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVerificationRequest(response: ResponseContext): Promise<VerificationRequestStatus > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerificationRequestStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationRequestStatus", ""
            ) as VerificationRequestStatus;
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
            const body: VerificationRequestStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationRequestStatus", ""
            ) as VerificationRequestStatus;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVerificationRequests
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listVerificationRequests(response: ResponseContext): Promise<PaginatedVerificationRequestStatus > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaginatedVerificationRequestStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedVerificationRequestStatus", ""
            ) as PaginatedVerificationRequestStatus;
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
            const body: PaginatedVerificationRequestStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedVerificationRequestStatus", ""
            ) as PaginatedVerificationRequestStatus;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitVerificationRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async submitVerificationRequest(response: ResponseContext): Promise<VerificationRequestEgress > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerificationRequestEgress = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationRequestEgress", ""
            ) as VerificationRequestEgress;
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
            const body: VerificationRequestEgress = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationRequestEgress", ""
            ) as VerificationRequestEgress;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateVerificationRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateVerificationRequest(response: ResponseContext): Promise<VerificationRequestEgress > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerificationRequestEgress = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationRequestEgress", ""
            ) as VerificationRequestEgress;
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
            const body: VerificationRequestEgress = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationRequestEgress", ""
            ) as VerificationRequestEgress;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

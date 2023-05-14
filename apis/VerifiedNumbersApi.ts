// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreateVerifiedNumberRequest } from '../models/CreateVerifiedNumberRequest.ts';
import { CreateVerifiedNumberResponse } from '../models/CreateVerifiedNumberResponse.ts';
import { Errors } from '../models/Errors.ts';
import { ListVerifiedNumbersResponse } from '../models/ListVerifiedNumbersResponse.ts';
import { VerifiedNumberResponseDataWrapper } from '../models/VerifiedNumberResponseDataWrapper.ts';
import { VerifyPhoneNumberCoverage422Response } from '../models/VerifyPhoneNumberCoverage422Response.ts';
import { VerifyVerificationCodeRequest } from '../models/VerifyVerificationCodeRequest.ts';

/**
 * no description
 */
export class VerifiedNumbersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Initiates phone number verification procedure.
     * Request phone number verification
     * @param createVerifiedNumberRequest 
     */
    public async createVerifiedNumber(createVerifiedNumberRequest: CreateVerifiedNumberRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createVerifiedNumberRequest' is not null or undefined
        if (createVerifiedNumberRequest === null || createVerifiedNumberRequest === undefined) {
            throw new RequiredError("VerifiedNumbersApi", "createVerifiedNumber", "createVerifiedNumberRequest");
        }


        // Path Params
        const localVarPath = '/verified_numbers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createVerifiedNumberRequest, "CreateVerifiedNumberRequest", ""),
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
     * Delete a verified number
     * @param phoneNumber The phone number being deleted.
     */
    public async deleteVerifiedNumber(phoneNumber: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumber' is not null or undefined
        if (phoneNumber === null || phoneNumber === undefined) {
            throw new RequiredError("VerifiedNumbersApi", "deleteVerifiedNumber", "phoneNumber");
        }


        // Path Params
        const localVarPath = '/verified_numbers/{phone_number}'
            .replace('{' + 'phone_number' + '}', encodeURIComponent(String(phoneNumber)));

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
     * Gets a paginated list of Verified Numbers.
     * List all Verified Numbers
     * @param pageSize 
     * @param pageNumber 
     */
    public async listVerifiedNumbers(pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/verified_numbers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page[size]", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("page[number]", ObjectSerializer.serialize(pageNumber, "number", ""));
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
     * Retrieve a verified number
     * @param phoneNumber The phone number being requested.
     */
    public async retrieveVerifiedNumber(phoneNumber: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumber' is not null or undefined
        if (phoneNumber === null || phoneNumber === undefined) {
            throw new RequiredError("VerifiedNumbersApi", "retrieveVerifiedNumber", "phoneNumber");
        }


        // Path Params
        const localVarPath = '/verified_numbers/{phone_number}'
            .replace('{' + 'phone_number' + '}', encodeURIComponent(String(phoneNumber)));

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
     * Submit verification code
     * @param phoneNumber The phone number being verified.
     * @param verifyVerificationCodeRequest 
     */
    public async verifiedNumbersPhoneNumberActionsVerifyPost(phoneNumber: string, verifyVerificationCodeRequest: VerifyVerificationCodeRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumber' is not null or undefined
        if (phoneNumber === null || phoneNumber === undefined) {
            throw new RequiredError("VerifiedNumbersApi", "verifiedNumbersPhoneNumberActionsVerifyPost", "phoneNumber");
        }


        // verify required parameter 'verifyVerificationCodeRequest' is not null or undefined
        if (verifyVerificationCodeRequest === null || verifyVerificationCodeRequest === undefined) {
            throw new RequiredError("VerifiedNumbersApi", "verifiedNumbersPhoneNumberActionsVerifyPost", "verifyVerificationCodeRequest");
        }


        // Path Params
        const localVarPath = '/verified_numbers/{phone_number}/actions/verify'
            .replace('{' + 'phone_number' + '}', encodeURIComponent(String(phoneNumber)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(verifyVerificationCodeRequest, "VerifyVerificationCodeRequest", ""),
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

export class VerifiedNumbersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVerifiedNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVerifiedNumber(response: ResponseContext): Promise<CreateVerifiedNumberResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateVerifiedNumberResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateVerifiedNumberResponse", ""
            ) as CreateVerifiedNumberResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unauthorized Request", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: VerifyPhoneNumberCoverage422Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage422Response", ""
            ) as VerifyPhoneNumberCoverage422Response;
            throw new ApiException<VerifyPhoneNumberCoverage422Response>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateVerifiedNumberResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateVerifiedNumberResponse", ""
            ) as CreateVerifiedNumberResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteVerifiedNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteVerifiedNumber(response: ResponseContext): Promise<VerifiedNumberResponseDataWrapper > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerifiedNumberResponseDataWrapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifiedNumberResponseDataWrapper", ""
            ) as VerifiedNumberResponseDataWrapper;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unauthorized Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Resource Not Found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VerifiedNumberResponseDataWrapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifiedNumberResponseDataWrapper", ""
            ) as VerifiedNumberResponseDataWrapper;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVerifiedNumbers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listVerifiedNumbers(response: ResponseContext): Promise<ListVerifiedNumbersResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListVerifiedNumbersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListVerifiedNumbersResponse", ""
            ) as ListVerifiedNumbersResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unauthorized Request", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: VerifyPhoneNumberCoverage422Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage422Response", ""
            ) as VerifyPhoneNumberCoverage422Response;
            throw new ApiException<VerifyPhoneNumberCoverage422Response>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListVerifiedNumbersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListVerifiedNumbersResponse", ""
            ) as ListVerifiedNumbersResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveVerifiedNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveVerifiedNumber(response: ResponseContext): Promise<VerifiedNumberResponseDataWrapper > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerifiedNumberResponseDataWrapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifiedNumberResponseDataWrapper", ""
            ) as VerifiedNumberResponseDataWrapper;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unauthorized Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Resource Not Found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VerifiedNumberResponseDataWrapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifiedNumberResponseDataWrapper", ""
            ) as VerifiedNumberResponseDataWrapper;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifiedNumbersPhoneNumberActionsVerifyPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async verifiedNumbersPhoneNumberActionsVerifyPost(response: ResponseContext): Promise<VerifiedNumberResponseDataWrapper > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerifiedNumberResponseDataWrapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifiedNumberResponseDataWrapper", ""
            ) as VerifiedNumberResponseDataWrapper;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unauthorized Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Resource Not Found", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: VerifyPhoneNumberCoverage422Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage422Response", ""
            ) as VerifyPhoneNumberCoverage422Response;
            throw new ApiException<VerifyPhoneNumberCoverage422Response>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VerifiedNumberResponseDataWrapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifiedNumberResponseDataWrapper", ""
            ) as VerifiedNumberResponseDataWrapper;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

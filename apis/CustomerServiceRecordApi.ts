// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CustomerServiceRecord } from '../models/CustomerServiceRecord.ts';
import { CustomerServiceRecordAdditionalData } from '../models/CustomerServiceRecordAdditionalData.ts';
import { GetCustomerServiceRecord201Response } from '../models/GetCustomerServiceRecord201Response.ts';
import { GetCustomerServiceRecord404Response } from '../models/GetCustomerServiceRecord404Response.ts';
//import { UNKNOWN_BASE_TYPE } from '../models/UNKNOWNBASETYPE.ts';
import { VerifyPhoneNumberCoverage201Response } from '../models/VerifyPhoneNumberCoverage201Response.ts';
import { VerifyPhoneNumberCoverage401Response } from '../models/VerifyPhoneNumberCoverage401Response.ts';
import { VerifyPhoneNumberCoverage403Response } from '../models/VerifyPhoneNumberCoverage403Response.ts';
import { VerifyPhoneNumberCoverage422Response } from '../models/VerifyPhoneNumberCoverage422Response.ts';
import { VerifyPhoneNumberCoverage500Response } from '../models/VerifyPhoneNumberCoverage500Response.ts';
import { VerifyPhoneNumberCoverageRequest } from '../models/VerifyPhoneNumberCoverageRequest.ts';

/**
 * no description
 */
export class CustomerServiceRecordApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new customer service record for the provided phone number.
     * Create a customer service record
     * @param "UNKNOWN_BASE_TYPE" 
     */
    public async createCustomerServiceRecord(UNKNOWN_BASE_TYPE: "UNKNOWN_BASE_TYPE", _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'UNKNOWN_BASE_TYPE' is not null or undefined
        if (UNKNOWN_BASE_TYPE === null || UNKNOWN_BASE_TYPE === undefined) {
            throw new RequiredError("CustomerServiceRecordApi", "createCustomerServiceRecord", "UNKNOWN_BASE_TYPE");
        }


        // Path Params
        const localVarPath = '/customer_service_records';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize("UNKNOWN_BASE_TYPE", "UNKNOWN_BASE_TYPE", ""),
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
     * Get a specific customer service record.
     * Get a customer service record
     * @param customerServiceRecordId The ID of the customer service record
     */
    public async getCustomerServiceRecord(customerServiceRecordId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'customerServiceRecordId' is not null or undefined
        if (customerServiceRecordId === null || customerServiceRecordId === undefined) {
            throw new RequiredError("CustomerServiceRecordApi", "getCustomerServiceRecord", "customerServiceRecordId");
        }


        // Path Params
        const localVarPath = '/customer_service_records/{customer_service_record_id}'
            .replace('{' + 'customer_service_record_id' + '}', encodeURIComponent(String(customerServiceRecordId)));

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
     * Verify the coverage for a list of phone numbers.
     * Verify CSR phone number coverage
     * @param verifyPhoneNumberCoverageRequest 
     */
    public async verifyPhoneNumberCoverage(verifyPhoneNumberCoverageRequest: VerifyPhoneNumberCoverageRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'verifyPhoneNumberCoverageRequest' is not null or undefined
        if (verifyPhoneNumberCoverageRequest === null || verifyPhoneNumberCoverageRequest === undefined) {
            throw new RequiredError("CustomerServiceRecordApi", "verifyPhoneNumberCoverage", "verifyPhoneNumberCoverageRequest");
        }


        // Path Params
        const localVarPath = '/customer_service_records/phone_number_coverages';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(verifyPhoneNumberCoverageRequest, "VerifyPhoneNumberCoverageRequest", ""),
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

export class CustomerServiceRecordApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCustomerServiceRecord
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createCustomerServiceRecord(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: VerifyPhoneNumberCoverage401Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage401Response", ""
            ) as VerifyPhoneNumberCoverage401Response;
            throw new ApiException<VerifyPhoneNumberCoverage401Response>(response.httpStatusCode, "The required authentication headers were either invalid or not included in the request.", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: VerifyPhoneNumberCoverage403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage403Response", ""
            ) as VerifyPhoneNumberCoverage403Response;
            throw new ApiException<VerifyPhoneNumberCoverage403Response>(response.httpStatusCode, "You do not have permission to perform the requested action on the specified resource or resources.", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: VerifyPhoneNumberCoverage422Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage422Response", ""
            ) as VerifyPhoneNumberCoverage422Response;
            throw new ApiException<VerifyPhoneNumberCoverage422Response>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: VerifyPhoneNumberCoverage500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage500Response", ""
            ) as VerifyPhoneNumberCoverage500Response;
            throw new ApiException<VerifyPhoneNumberCoverage500Response>(response.httpStatusCode, "An unexpected error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomerServiceRecord
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCustomerServiceRecord(response: ResponseContext): Promise<GetCustomerServiceRecord201Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: GetCustomerServiceRecord201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerServiceRecord201Response", ""
            ) as GetCustomerServiceRecord201Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: VerifyPhoneNumberCoverage401Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage401Response", ""
            ) as VerifyPhoneNumberCoverage401Response;
            throw new ApiException<VerifyPhoneNumberCoverage401Response>(response.httpStatusCode, "The required authentication headers were either invalid or not included in the request.", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: VerifyPhoneNumberCoverage403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage403Response", ""
            ) as VerifyPhoneNumberCoverage403Response;
            throw new ApiException<VerifyPhoneNumberCoverage403Response>(response.httpStatusCode, "You do not have permission to perform the requested action on the specified resource or resources.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: GetCustomerServiceRecord404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerServiceRecord404Response", ""
            ) as GetCustomerServiceRecord404Response;
            throw new ApiException<GetCustomerServiceRecord404Response>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: VerifyPhoneNumberCoverage500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage500Response", ""
            ) as VerifyPhoneNumberCoverage500Response;
            throw new ApiException<VerifyPhoneNumberCoverage500Response>(response.httpStatusCode, "An unexpected error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCustomerServiceRecord201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCustomerServiceRecord201Response", ""
            ) as GetCustomerServiceRecord201Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyPhoneNumberCoverage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async verifyPhoneNumberCoverage(response: ResponseContext): Promise<VerifyPhoneNumberCoverage201Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: VerifyPhoneNumberCoverage201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage201Response", ""
            ) as VerifyPhoneNumberCoverage201Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: VerifyPhoneNumberCoverage401Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage401Response", ""
            ) as VerifyPhoneNumberCoverage401Response;
            throw new ApiException<VerifyPhoneNumberCoverage401Response>(response.httpStatusCode, "The required authentication headers were either invalid or not included in the request.", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: VerifyPhoneNumberCoverage403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage403Response", ""
            ) as VerifyPhoneNumberCoverage403Response;
            throw new ApiException<VerifyPhoneNumberCoverage403Response>(response.httpStatusCode, "You do not have permission to perform the requested action on the specified resource or resources.", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: VerifyPhoneNumberCoverage422Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage422Response", ""
            ) as VerifyPhoneNumberCoverage422Response;
            throw new ApiException<VerifyPhoneNumberCoverage422Response>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: VerifyPhoneNumberCoverage500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage500Response", ""
            ) as VerifyPhoneNumberCoverage500Response;
            throw new ApiException<VerifyPhoneNumberCoverage500Response>(response.httpStatusCode, "An unexpected error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VerifyPhoneNumberCoverage201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyPhoneNumberCoverage201Response", ""
            ) as VerifyPhoneNumberCoverage201Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

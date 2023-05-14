// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { HTTPValidationError } from '../models/HTTPValidationError.ts';
import { PhoneNumberCampaign } from '../models/PhoneNumberCampaign.ts';
import { PhoneNumberCampaignCreate } from '../models/PhoneNumberCampaignCreate.ts';
import { PhoneNumberCampaignPaginated } from '../models/PhoneNumberCampaignPaginated.ts';
import { ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPhonenumberPut } from '../models/ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPhonenumberPut.ts';
import { ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPost } from '../models/ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPost.ts';

/**
 * no description
 */
export class PhoneNumberCampaignsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This endpoint allows you to assign a different campaign to a supplied `phoneNumber`.
     * Create New Phone Number Campaign
     * @param phoneNumber 
     * @param phoneNumberCampaignCreate 
     */
    public async createNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut(phoneNumber: string, phoneNumberCampaignCreate: PhoneNumberCampaignCreate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumber' is not null or undefined
        if (phoneNumber === null || phoneNumber === undefined) {
            throw new RequiredError("PhoneNumberCampaignsApi", "createNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut", "phoneNumber");
        }


        // verify required parameter 'phoneNumberCampaignCreate' is not null or undefined
        if (phoneNumberCampaignCreate === null || phoneNumberCampaignCreate === undefined) {
            throw new RequiredError("PhoneNumberCampaignsApi", "createNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut", "phoneNumberCampaignCreate");
        }


        // Path Params
        const localVarPath = '/phoneNumberCampaign/{phoneNumber}'
            .replace('{' + 'phoneNumber' + '}', encodeURIComponent(String(phoneNumber)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(phoneNumberCampaignCreate, "PhoneNumberCampaignCreate", ""),
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
     * Assign an individual phone number to campaign.
     * Create New Phone Number Campaign
     * @param phoneNumberCampaignCreate 
     */
    public async createNewPhoneNumberCampaignPhoneNumberCampaignPost(phoneNumberCampaignCreate: PhoneNumberCampaignCreate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumberCampaignCreate' is not null or undefined
        if (phoneNumberCampaignCreate === null || phoneNumberCampaignCreate === undefined) {
            throw new RequiredError("PhoneNumberCampaignsApi", "createNewPhoneNumberCampaignPhoneNumberCampaignPost", "phoneNumberCampaignCreate");
        }


        // Path Params
        const localVarPath = '/phoneNumberCampaign';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(phoneNumberCampaignCreate, "PhoneNumberCampaignCreate", ""),
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
     * Create New Phone Number Campaign
     * @param phoneNumber 
     * @param phoneNumberCampaignCreate 
     */
    public async createNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut(phoneNumber: string, phoneNumberCampaignCreate: PhoneNumberCampaignCreate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumber' is not null or undefined
        if (phoneNumber === null || phoneNumber === undefined) {
            throw new RequiredError("PhoneNumberCampaignsApi", "createNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut", "phoneNumber");
        }


        // verify required parameter 'phoneNumberCampaignCreate' is not null or undefined
        if (phoneNumberCampaignCreate === null || phoneNumberCampaignCreate === undefined) {
            throw new RequiredError("PhoneNumberCampaignsApi", "createNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut", "phoneNumberCampaignCreate");
        }


        // Path Params
        const localVarPath = '/phone_number_campaigns/{phoneNumber}'
            .replace('{' + 'phoneNumber' + '}', encodeURIComponent(String(phoneNumber)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(phoneNumberCampaignCreate, "PhoneNumberCampaignCreate", ""),
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
     * Create New Phone Number Campaign
     * @param phoneNumberCampaignCreate 
     */
    public async createNewPhoneNumberCampaignPhoneNumberCampaignsPost(phoneNumberCampaignCreate: PhoneNumberCampaignCreate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumberCampaignCreate' is not null or undefined
        if (phoneNumberCampaignCreate === null || phoneNumberCampaignCreate === undefined) {
            throw new RequiredError("PhoneNumberCampaignsApi", "createNewPhoneNumberCampaignPhoneNumberCampaignsPost", "phoneNumberCampaignCreate");
        }


        // Path Params
        const localVarPath = '/phone_number_campaigns';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(phoneNumberCampaignCreate, "PhoneNumberCampaignCreate", ""),
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
     * This endpoint allows you to remove a campaign assignment from the supplied `phoneNumber`.
     * Delete Phone Number Campaign
     * @param phoneNumber 
     */
    public async deletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDelete(phoneNumber: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumber' is not null or undefined
        if (phoneNumber === null || phoneNumber === undefined) {
            throw new RequiredError("PhoneNumberCampaignsApi", "deletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDelete", "phoneNumber");
        }


        // Path Params
        const localVarPath = '/phoneNumberCampaign/{phoneNumber}'
            .replace('{' + 'phoneNumber' + '}', encodeURIComponent(String(phoneNumber)));

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
     * Delete Phone Number Campaign
     * @param phoneNumber 
     */
    public async deletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDelete(phoneNumber: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumber' is not null or undefined
        if (phoneNumber === null || phoneNumber === undefined) {
            throw new RequiredError("PhoneNumberCampaignsApi", "deletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDelete", "phoneNumber");
        }


        // Path Params
        const localVarPath = '/phone_number_campaigns/{phoneNumber}'
            .replace('{' + 'phoneNumber' + '}', encodeURIComponent(String(phoneNumber)));

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
     * Retrieve an individual phone number/campaign assignment by `phoneNumber`.
     * Get Single Phone Number Campaign
     * @param phoneNumber 
     */
    public async getSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGet(phoneNumber: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumber' is not null or undefined
        if (phoneNumber === null || phoneNumber === undefined) {
            throw new RequiredError("PhoneNumberCampaignsApi", "getSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGet", "phoneNumber");
        }


        // Path Params
        const localVarPath = '/phoneNumberCampaign/{phoneNumber}'
            .replace('{' + 'phoneNumber' + '}', encodeURIComponent(String(phoneNumber)));

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
     * Get Single Phone Number Campaign
     * @param phoneNumber 
     */
    public async getSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGet(phoneNumber: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumber' is not null or undefined
        if (phoneNumber === null || phoneNumber === undefined) {
            throw new RequiredError("PhoneNumberCampaignsApi", "getSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGet", "phoneNumber");
        }


        // Path Params
        const localVarPath = '/phone_number_campaigns/{phoneNumber}'
            .replace('{' + 'phoneNumber' + '}', encodeURIComponent(String(phoneNumber)));

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
     * Retrieve all of your organization\'s phone number/campaign assignments.
     * Retrieve All Phone Number Campaigns
     * @param recordsPerPage 
     * @param page 
     */
    public async retrieveAllPhoneNumberCampaignsPhoneNumberCampaignGet(recordsPerPage?: any, page?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/phoneNumberCampaign';

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
     * Retrieve All Phone Number Campaigns
     * @param recordsPerPage 
     * @param page 
     */
    public async retrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGet(recordsPerPage?: any, page?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/phone_number_campaigns';

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

}

export class PhoneNumberCampaignsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut(response: ResponseContext): Promise<ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPhonenumberPut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPhonenumberPut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPhonenumberPut", ""
            ) as ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPhonenumberPut;
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
            const body: ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPhonenumberPut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPhonenumberPut", ""
            ) as ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPhonenumberPut;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNewPhoneNumberCampaignPhoneNumberCampaignPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNewPhoneNumberCampaignPhoneNumberCampaignPost(response: ResponseContext): Promise<ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPost > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPost = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPost", ""
            ) as ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPost;
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
            const body: ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPost = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPost", ""
            ) as ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPost;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
     * @params response Response returned by the server for a request to createNewPhoneNumberCampaignPhoneNumberCampaignsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNewPhoneNumberCampaignPhoneNumberCampaignsPost(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
     * @params response Response returned by the server for a request to deletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDelete(response: ResponseContext): Promise<PhoneNumberCampaign > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberCampaign = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberCampaign", ""
            ) as PhoneNumberCampaign;
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
            const body: PhoneNumberCampaign = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberCampaign", ""
            ) as PhoneNumberCampaign;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDelete(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
     * @params response Response returned by the server for a request to getSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGet(response: ResponseContext): Promise<PhoneNumberCampaign > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberCampaign = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberCampaign", ""
            ) as PhoneNumberCampaign;
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
            const body: PhoneNumberCampaign = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberCampaign", ""
            ) as PhoneNumberCampaign;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGet(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
     * @params response Response returned by the server for a request to retrieveAllPhoneNumberCampaignsPhoneNumberCampaignGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveAllPhoneNumberCampaignsPhoneNumberCampaignGet(response: ResponseContext): Promise<PhoneNumberCampaignPaginated > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberCampaignPaginated = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberCampaignPaginated", ""
            ) as PhoneNumberCampaignPaginated;
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
            const body: PhoneNumberCampaignPaginated = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberCampaignPaginated", ""
            ) as PhoneNumberCampaignPaginated;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGet(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

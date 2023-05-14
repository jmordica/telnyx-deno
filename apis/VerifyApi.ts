// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreateVerificationRequestCall } from '../models/CreateVerificationRequestCall.ts';
import { CreateVerificationRequestFlashcall } from '../models/CreateVerificationRequestFlashcall.ts';
import { CreateVerificationRequestPSD2 } from '../models/CreateVerificationRequestPSD2.ts';
import { CreateVerificationRequestSMS } from '../models/CreateVerificationRequestSMS.ts';
import { CreateVerificationRequestWhatsapp } from '../models/CreateVerificationRequestWhatsapp.ts';
import { CreateVerificationResponse } from '../models/CreateVerificationResponse.ts';
import { CreateVerifyProfileRequest } from '../models/CreateVerifyProfileRequest.ts';
import { Errors } from '../models/Errors.ts';
import { ListVerificationsResponse } from '../models/ListVerificationsResponse.ts';
import { ListVerifyProfilesResponse } from '../models/ListVerifyProfilesResponse.ts';
import { RetrieveVerificationResponse } from '../models/RetrieveVerificationResponse.ts';
import { UpdateVerifyProfileRequest } from '../models/UpdateVerifyProfileRequest.ts';
import { VerifyProfileResponseDataWrapper } from '../models/VerifyProfileResponseDataWrapper.ts';
import { VerifyVerificationCodeRequest } from '../models/VerifyVerificationCodeRequest.ts';
import { VerifyVerificationCodeResponse } from '../models/VerifyVerificationCodeResponse.ts';

/**
 * no description
 */
export class VerifyApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Trigger a Call verification
     * @param createVerificationRequestCall 
     */
    public async createVerificationCall(createVerificationRequestCall: CreateVerificationRequestCall, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createVerificationRequestCall' is not null or undefined
        if (createVerificationRequestCall === null || createVerificationRequestCall === undefined) {
            throw new RequiredError("VerifyApi", "createVerificationCall", "createVerificationRequestCall");
        }


        // Path Params
        const localVarPath = '/verifications/call';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createVerificationRequestCall, "CreateVerificationRequestCall", ""),
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
     * Trigger a Flash call verification
     * @param createVerificationRequestFlashcall 
     */
    public async createVerificationFlashcall(createVerificationRequestFlashcall: CreateVerificationRequestFlashcall, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createVerificationRequestFlashcall' is not null or undefined
        if (createVerificationRequestFlashcall === null || createVerificationRequestFlashcall === undefined) {
            throw new RequiredError("VerifyApi", "createVerificationFlashcall", "createVerificationRequestFlashcall");
        }


        // Path Params
        const localVarPath = '/verifications/flashcall';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createVerificationRequestFlashcall, "CreateVerificationRequestFlashcall", ""),
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
     * Trigger a PSD2 verification
     * @param createVerificationRequestPSD2 
     */
    public async createVerificationPSD2(createVerificationRequestPSD2: CreateVerificationRequestPSD2, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createVerificationRequestPSD2' is not null or undefined
        if (createVerificationRequestPSD2 === null || createVerificationRequestPSD2 === undefined) {
            throw new RequiredError("VerifyApi", "createVerificationPSD2", "createVerificationRequestPSD2");
        }


        // Path Params
        const localVarPath = '/verifications/psd2';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createVerificationRequestPSD2, "CreateVerificationRequestPSD2", ""),
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
     * Trigger a SMS verification
     * @param createVerificationRequestSMS 
     */
    public async createVerificationSMS(createVerificationRequestSMS: CreateVerificationRequestSMS, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createVerificationRequestSMS' is not null or undefined
        if (createVerificationRequestSMS === null || createVerificationRequestSMS === undefined) {
            throw new RequiredError("VerifyApi", "createVerificationSMS", "createVerificationRequestSMS");
        }


        // Path Params
        const localVarPath = '/verifications/sms';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createVerificationRequestSMS, "CreateVerificationRequestSMS", ""),
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
     * Trigger a Whatsapp verification
     * @param createVerificationRequestWhatsapp 
     */
    public async createVerificationWhatsapp(createVerificationRequestWhatsapp: CreateVerificationRequestWhatsapp, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createVerificationRequestWhatsapp' is not null or undefined
        if (createVerificationRequestWhatsapp === null || createVerificationRequestWhatsapp === undefined) {
            throw new RequiredError("VerifyApi", "createVerificationWhatsapp", "createVerificationRequestWhatsapp");
        }


        // Path Params
        const localVarPath = '/verifications/whatsapp';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createVerificationRequestWhatsapp, "CreateVerificationRequestWhatsapp", ""),
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
     * Creates a new Verify profile to associate verifications with.
     * Create a Verify profile
     * @param createVerifyProfileRequest 
     */
    public async createVerifyProfile(createVerifyProfileRequest: CreateVerifyProfileRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createVerifyProfileRequest' is not null or undefined
        if (createVerifyProfileRequest === null || createVerifyProfileRequest === undefined) {
            throw new RequiredError("VerifyApi", "createVerifyProfile", "createVerifyProfileRequest");
        }


        // Path Params
        const localVarPath = '/verify_profiles';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createVerifyProfileRequest, "CreateVerifyProfileRequest", ""),
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
     * Delete a Verify profile
     * @param verifyProfileId The identifier of the Verify profile to delete.
     */
    public async deleteVerifyProfile(verifyProfileId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'verifyProfileId' is not null or undefined
        if (verifyProfileId === null || verifyProfileId === undefined) {
            throw new RequiredError("VerifyApi", "deleteVerifyProfile", "verifyProfileId");
        }


        // Path Params
        const localVarPath = '/verify_profiles/{verify_profile_id}'
            .replace('{' + 'verify_profile_id' + '}', encodeURIComponent(String(verifyProfileId)));

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
     * List verifications by phone number
     * @param phoneNumber The phone number associated with the verifications to retrieve.
     */
    public async listVerifications(phoneNumber: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumber' is not null or undefined
        if (phoneNumber === null || phoneNumber === undefined) {
            throw new RequiredError("VerifyApi", "listVerifications", "phoneNumber");
        }


        // Path Params
        const localVarPath = '/verifications/by_phone_number/{phone_number}'
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
     * Gets a paginated list of Verify profiles.
     * List all Verify profiles
     * @param filterName 
     * @param pageSize 
     * @param pageNumber 
     */
    public async listVerifyProfiles(filterName?: string, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/verify_profiles';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterName !== undefined) {
            requestContext.setQueryParam("filter[name]", ObjectSerializer.serialize(filterName, "string", ""));
        }

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
     * Retrieve a verification
     * @param verificationId The identifier of the verification to retrieve.
     */
    public async retrieveVerification(verificationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'verificationId' is not null or undefined
        if (verificationId === null || verificationId === undefined) {
            throw new RequiredError("VerifyApi", "retrieveVerification", "verificationId");
        }


        // Path Params
        const localVarPath = '/verifications/{verification_id}'
            .replace('{' + 'verification_id' + '}', encodeURIComponent(String(verificationId)));

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
     * Gets a single Verify profile.
     * Retrieve a Verify profile
     * @param verifyProfileId The identifier of the Verify profile to retrieve.
     */
    public async retrieveVerifyProfile(verifyProfileId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'verifyProfileId' is not null or undefined
        if (verifyProfileId === null || verifyProfileId === undefined) {
            throw new RequiredError("VerifyApi", "retrieveVerifyProfile", "verifyProfileId");
        }


        // Path Params
        const localVarPath = '/verify_profiles/{verify_profile_id}'
            .replace('{' + 'verify_profile_id' + '}', encodeURIComponent(String(verifyProfileId)));

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
     * Update a Verify profile
     * @param verifyProfileId The identifier of the Verify profile to update.
     * @param updateVerifyProfileRequest 
     */
    public async updateVerifyProfile(verifyProfileId: string, updateVerifyProfileRequest: UpdateVerifyProfileRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'verifyProfileId' is not null or undefined
        if (verifyProfileId === null || verifyProfileId === undefined) {
            throw new RequiredError("VerifyApi", "updateVerifyProfile", "verifyProfileId");
        }


        // verify required parameter 'updateVerifyProfileRequest' is not null or undefined
        if (updateVerifyProfileRequest === null || updateVerifyProfileRequest === undefined) {
            throw new RequiredError("VerifyApi", "updateVerifyProfile", "updateVerifyProfileRequest");
        }


        // Path Params
        const localVarPath = '/verify_profiles/{verify_profile_id}'
            .replace('{' + 'verify_profile_id' + '}', encodeURIComponent(String(verifyProfileId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateVerifyProfileRequest, "UpdateVerifyProfileRequest", ""),
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
     * Submit a verification code. Deprecation notice: `verify_profile_id\' is now a mandatory field. The sunset date for this change is 2022-04-02 00:00:00.
     * @param phoneNumber The phone number associated with the verification code being verified.
     * @param verifyVerificationCodeRequest 
     */
    public async verifyVerificationCode(phoneNumber: string, verifyVerificationCodeRequest: VerifyVerificationCodeRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneNumber' is not null or undefined
        if (phoneNumber === null || phoneNumber === undefined) {
            throw new RequiredError("VerifyApi", "verifyVerificationCode", "phoneNumber");
        }


        // verify required parameter 'verifyVerificationCodeRequest' is not null or undefined
        if (verifyVerificationCodeRequest === null || verifyVerificationCodeRequest === undefined) {
            throw new RequiredError("VerifyApi", "verifyVerificationCode", "verifyVerificationCodeRequest");
        }


        // Path Params
        const localVarPath = '/verifications/by_phone_number/{phone_number}/actions/verify'
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

export class VerifyApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVerificationCall
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVerificationCall(response: ResponseContext): Promise<CreateVerificationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateVerificationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateVerificationResponse", ""
            ) as CreateVerificationResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateVerificationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateVerificationResponse", ""
            ) as CreateVerificationResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVerificationFlashcall
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVerificationFlashcall(response: ResponseContext): Promise<CreateVerificationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateVerificationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateVerificationResponse", ""
            ) as CreateVerificationResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateVerificationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateVerificationResponse", ""
            ) as CreateVerificationResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVerificationPSD2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVerificationPSD2(response: ResponseContext): Promise<CreateVerificationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateVerificationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateVerificationResponse", ""
            ) as CreateVerificationResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateVerificationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateVerificationResponse", ""
            ) as CreateVerificationResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVerificationSMS
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVerificationSMS(response: ResponseContext): Promise<CreateVerificationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateVerificationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateVerificationResponse", ""
            ) as CreateVerificationResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateVerificationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateVerificationResponse", ""
            ) as CreateVerificationResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVerificationWhatsapp
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVerificationWhatsapp(response: ResponseContext): Promise<CreateVerificationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateVerificationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateVerificationResponse", ""
            ) as CreateVerificationResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateVerificationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateVerificationResponse", ""
            ) as CreateVerificationResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVerifyProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVerifyProfile(response: ResponseContext): Promise<VerifyProfileResponseDataWrapper > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerifyProfileResponseDataWrapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyProfileResponseDataWrapper", ""
            ) as VerifyProfileResponseDataWrapper;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VerifyProfileResponseDataWrapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyProfileResponseDataWrapper", ""
            ) as VerifyProfileResponseDataWrapper;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteVerifyProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteVerifyProfile(response: ResponseContext): Promise<VerifyProfileResponseDataWrapper > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerifyProfileResponseDataWrapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyProfileResponseDataWrapper", ""
            ) as VerifyProfileResponseDataWrapper;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VerifyProfileResponseDataWrapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyProfileResponseDataWrapper", ""
            ) as VerifyProfileResponseDataWrapper;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVerifications
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listVerifications(response: ResponseContext): Promise<ListVerificationsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListVerificationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListVerificationsResponse", ""
            ) as ListVerificationsResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListVerificationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListVerificationsResponse", ""
            ) as ListVerificationsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVerifyProfiles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listVerifyProfiles(response: ResponseContext): Promise<ListVerifyProfilesResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListVerifyProfilesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListVerifyProfilesResponse", ""
            ) as ListVerifyProfilesResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListVerifyProfilesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListVerifyProfilesResponse", ""
            ) as ListVerifyProfilesResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveVerification
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveVerification(response: ResponseContext): Promise<RetrieveVerificationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetrieveVerificationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveVerificationResponse", ""
            ) as RetrieveVerificationResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetrieveVerificationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveVerificationResponse", ""
            ) as RetrieveVerificationResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveVerifyProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveVerifyProfile(response: ResponseContext): Promise<VerifyProfileResponseDataWrapper > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerifyProfileResponseDataWrapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyProfileResponseDataWrapper", ""
            ) as VerifyProfileResponseDataWrapper;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VerifyProfileResponseDataWrapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyProfileResponseDataWrapper", ""
            ) as VerifyProfileResponseDataWrapper;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateVerifyProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateVerifyProfile(response: ResponseContext): Promise<VerifyProfileResponseDataWrapper > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerifyProfileResponseDataWrapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyProfileResponseDataWrapper", ""
            ) as VerifyProfileResponseDataWrapper;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VerifyProfileResponseDataWrapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyProfileResponseDataWrapper", ""
            ) as VerifyProfileResponseDataWrapper;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyVerificationCode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async verifyVerificationCode(response: ResponseContext): Promise<VerifyVerificationCodeResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerifyVerificationCodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyVerificationCodeResponse", ""
            ) as VerifyVerificationCodeResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VerifyVerificationCodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyVerificationCodeResponse", ""
            ) as VerifyVerificationCodeResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AutoRespConfigCreateSchema } from '../models/AutoRespConfigCreateSchema.ts';
import { AutorespConfigResponseSchema } from '../models/AutorespConfigResponseSchema.ts';
import { Errors } from '../models/Errors.ts';

/**
 * no description
 */
export class AutoresponseConfigsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create Auto-Reponse Setting
     * @param profileId 
     * @param autoRespConfigCreateSchema 
     */
    public async createAutorespConfigApiV2AutorespConfigsProfileIdPost(profileId: string, autoRespConfigCreateSchema: AutoRespConfigCreateSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'profileId' is not null or undefined
        if (profileId === null || profileId === undefined) {
            throw new RequiredError("AutoresponseConfigsApi", "createAutorespConfigApiV2AutorespConfigsProfileIdPost", "profileId");
        }


        // verify required parameter 'autoRespConfigCreateSchema' is not null or undefined
        if (autoRespConfigCreateSchema === null || autoRespConfigCreateSchema === undefined) {
            throw new RequiredError("AutoresponseConfigsApi", "createAutorespConfigApiV2AutorespConfigsProfileIdPost", "autoRespConfigCreateSchema");
        }


        // Path Params
        const localVarPath = '/messaging_profiles/{profile_id}/autoresp_configs'
            .replace('{' + 'profile_id' + '}', encodeURIComponent(String(profileId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(autoRespConfigCreateSchema, "AutoRespConfigCreateSchema", ""),
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
     * Delete Auto-Response Setting
     * @param profileId 
     * @param autorespCfgId 
     */
    public async deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(profileId: string, autorespCfgId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'profileId' is not null or undefined
        if (profileId === null || profileId === undefined) {
            throw new RequiredError("AutoresponseConfigsApi", "deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete", "profileId");
        }


        // verify required parameter 'autorespCfgId' is not null or undefined
        if (autorespCfgId === null || autorespCfgId === undefined) {
            throw new RequiredError("AutoresponseConfigsApi", "deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete", "autorespCfgId");
        }


        // Path Params
        const localVarPath = '/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}'
            .replace('{' + 'profile_id' + '}', encodeURIComponent(String(profileId)))
            .replace('{' + 'autoresp_cfg_id' + '}', encodeURIComponent(String(autorespCfgId)));

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
     * Get Auto-Response Setting
     * @param profileId 
     * @param autorespCfgId 
     */
    public async getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(profileId: string, autorespCfgId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'profileId' is not null or undefined
        if (profileId === null || profileId === undefined) {
            throw new RequiredError("AutoresponseConfigsApi", "getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet", "profileId");
        }


        // verify required parameter 'autorespCfgId' is not null or undefined
        if (autorespCfgId === null || autorespCfgId === undefined) {
            throw new RequiredError("AutoresponseConfigsApi", "getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet", "autorespCfgId");
        }


        // Path Params
        const localVarPath = '/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}'
            .replace('{' + 'profile_id' + '}', encodeURIComponent(String(profileId)))
            .replace('{' + 'autoresp_cfg_id' + '}', encodeURIComponent(String(autorespCfgId)));

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
     * Update Auto-Response Setting
     * @param profileId 
     * @param autorespCfgId 
     * @param autoRespConfigCreateSchema 
     */
    public async updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(profileId: string, autorespCfgId: string, autoRespConfigCreateSchema: AutoRespConfigCreateSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'profileId' is not null or undefined
        if (profileId === null || profileId === undefined) {
            throw new RequiredError("AutoresponseConfigsApi", "updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut", "profileId");
        }


        // verify required parameter 'autorespCfgId' is not null or undefined
        if (autorespCfgId === null || autorespCfgId === undefined) {
            throw new RequiredError("AutoresponseConfigsApi", "updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut", "autorespCfgId");
        }


        // verify required parameter 'autoRespConfigCreateSchema' is not null or undefined
        if (autoRespConfigCreateSchema === null || autoRespConfigCreateSchema === undefined) {
            throw new RequiredError("AutoresponseConfigsApi", "updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut", "autoRespConfigCreateSchema");
        }


        // Path Params
        const localVarPath = '/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}'
            .replace('{' + 'profile_id' + '}', encodeURIComponent(String(profileId)))
            .replace('{' + 'autoresp_cfg_id' + '}', encodeURIComponent(String(autorespCfgId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(autoRespConfigCreateSchema, "AutoRespConfigCreateSchema", ""),
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

export class AutoresponseConfigsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAutorespConfigApiV2AutorespConfigsProfileIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAutorespConfigApiV2AutorespConfigsProfileIdPost(response: ResponseContext): Promise<AutorespConfigResponseSchema > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutorespConfigResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutorespConfigResponseSchema", ""
            ) as AutorespConfigResponseSchema;
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
            const body: AutorespConfigResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutorespConfigResponseSchema", ""
            ) as AutorespConfigResponseSchema;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
     * @params response Response returned by the server for a request to getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(response: ResponseContext): Promise<AutorespConfigResponseSchema > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutorespConfigResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutorespConfigResponseSchema", ""
            ) as AutorespConfigResponseSchema;
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
            const body: AutorespConfigResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutorespConfigResponseSchema", ""
            ) as AutorespConfigResponseSchema;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(response: ResponseContext): Promise<AutorespConfigResponseSchema > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutorespConfigResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutorespConfigResponseSchema", ""
            ) as AutorespConfigResponseSchema;
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
            const body: AutorespConfigResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutorespConfigResponseSchema", ""
            ) as AutorespConfigResponseSchema;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

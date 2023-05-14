// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AutorespConfigsResponseSchema } from '../models/AutorespConfigsResponseSchema.ts';
import { Errors } from '../models/Errors.ts';

/**
 * no description
 */
export class AutoResponseSettingsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List Auto-Response Settings
     * @param profileId 
     * @param countryCode 
     * @param createdAtGte 
     * @param createdAtLte 
     * @param updatedAtGte 
     * @param updatedAtLte 
     */
    public async getAutorespConfigsApiV2AutorespConfigsProfileIdGet(profileId: string, countryCode?: string, createdAtGte?: string, createdAtLte?: string, updatedAtGte?: string, updatedAtLte?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'profileId' is not null or undefined
        if (profileId === null || profileId === undefined) {
            throw new RequiredError("AutoResponseSettingsApi", "getAutorespConfigsApiV2AutorespConfigsProfileIdGet", "profileId");
        }







        // Path Params
        const localVarPath = '/messaging_profiles/{profile_id}/autoresp_configs'
            .replace('{' + 'profile_id' + '}', encodeURIComponent(String(profileId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (countryCode !== undefined) {
            requestContext.setQueryParam("country_code", ObjectSerializer.serialize(countryCode, "string", ""));
        }

        // Query Params
        if (createdAtGte !== undefined) {
            requestContext.setQueryParam("created_at[gte]", ObjectSerializer.serialize(createdAtGte, "string", ""));
        }

        // Query Params
        if (createdAtLte !== undefined) {
            requestContext.setQueryParam("created_at[lte]", ObjectSerializer.serialize(createdAtLte, "string", ""));
        }

        // Query Params
        if (updatedAtGte !== undefined) {
            requestContext.setQueryParam("updated_at[gte]", ObjectSerializer.serialize(updatedAtGte, "string", ""));
        }

        // Query Params
        if (updatedAtLte !== undefined) {
            requestContext.setQueryParam("updated_at[lte]", ObjectSerializer.serialize(updatedAtLte, "string", ""));
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

export class AutoResponseSettingsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAutorespConfigsApiV2AutorespConfigsProfileIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAutorespConfigsApiV2AutorespConfigsProfileIdGet(response: ResponseContext): Promise<AutorespConfigsResponseSchema > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutorespConfigsResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutorespConfigsResponseSchema", ""
            ) as AutorespConfigsResponseSchema;
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
            const body: AutorespConfigsResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutorespConfigsResponseSchema", ""
            ) as AutorespConfigsResponseSchema;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

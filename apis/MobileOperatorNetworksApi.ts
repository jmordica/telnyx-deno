// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Errors } from '../models/Errors.ts';
import { MobileOperatorNetworksGet200Response } from '../models/MobileOperatorNetworksGet200Response.ts';

/**
 * no description
 */
export class MobileOperatorNetworksApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Telnyx has a set of GSM mobile operators partners that are available through our mobile network roaming. This resource is entirely managed by Telnyx and may change over time. That means that this resource won\'t allow any write operations for it. Still, it\'s available so it can be used as a support resource that can be related to other resources or become a configuration option.
     * List mobile operator networks
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterNameStartsWith Filter by name starting with.
     * @param filterNameContains Filter by name containing match.
     * @param filterNameEndsWith Filter by name ending with.
     * @param filterCountryCode Filter by exact country_code.
     * @param filterMcc Filter by exact MCC.
     * @param filterMnc Filter by exact MNC.
     * @param filterTadig Filter by exact TADIG.
     */
    public async mobileOperatorNetworksGet(pageNumber?: number, pageSize?: number, filterNameStartsWith?: string, filterNameContains?: string, filterNameEndsWith?: string, filterCountryCode?: string, filterMcc?: string, filterMnc?: string, filterTadig?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;










        // Path Params
        const localVarPath = '/mobile_operator_networks';

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

        // Query Params
        if (filterNameStartsWith !== undefined) {
            requestContext.setQueryParam("filter[name][starts_with]", ObjectSerializer.serialize(filterNameStartsWith, "string", ""));
        }

        // Query Params
        if (filterNameContains !== undefined) {
            requestContext.setQueryParam("filter[name][contains]", ObjectSerializer.serialize(filterNameContains, "string", ""));
        }

        // Query Params
        if (filterNameEndsWith !== undefined) {
            requestContext.setQueryParam("filter[name][ends_with]", ObjectSerializer.serialize(filterNameEndsWith, "string", ""));
        }

        // Query Params
        if (filterCountryCode !== undefined) {
            requestContext.setQueryParam("filter[country_code]", ObjectSerializer.serialize(filterCountryCode, "string", ""));
        }

        // Query Params
        if (filterMcc !== undefined) {
            requestContext.setQueryParam("filter[mcc]", ObjectSerializer.serialize(filterMcc, "string", ""));
        }

        // Query Params
        if (filterMnc !== undefined) {
            requestContext.setQueryParam("filter[mnc]", ObjectSerializer.serialize(filterMnc, "string", ""));
        }

        // Query Params
        if (filterTadig !== undefined) {
            requestContext.setQueryParam("filter[tadig]", ObjectSerializer.serialize(filterTadig, "string", ""));
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

export class MobileOperatorNetworksApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to mobileOperatorNetworksGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async mobileOperatorNetworksGet(response: ResponseContext): Promise<MobileOperatorNetworksGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MobileOperatorNetworksGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MobileOperatorNetworksGet200Response", ""
            ) as MobileOperatorNetworksGet200Response;
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
            const body: MobileOperatorNetworksGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MobileOperatorNetworksGet200Response", ""
            ) as MobileOperatorNetworksGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

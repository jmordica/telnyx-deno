// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Errors } from '../models/Errors.ts';
import { SimCardGroupActionGet200Response } from '../models/SimCardGroupActionGet200Response.ts';
import { SimCardGroupActionsGet200Response } from '../models/SimCardGroupActionsGet200Response.ts';

/**
 * no description
 */
export class SIMCardGroupActionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API allows fetching detailed information about a SIM card group action resource to make follow-ups in an existing asynchronous operation.
     * Get SIM card group action details
     * @param id Identifies the resource.
     */
    public async simCardGroupActionGet(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardGroupActionsApi", "simCardGroupActionGet", "id");
        }


        // Path Params
        const localVarPath = '/sim_card_group_actions/{id}'
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
     * This API allows listing a paginated collection a SIM card group actions. It allows to explore a collection of existing asynchronous operation using specific filters.
     * List SIM card group actions
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterSimCardGroupId A valid SIM card group ID.
     * @param filterStatus Filter by a specific status of the resource\&#39;s lifecycle.
     * @param filterType Filter by action type.
     */
    public async simCardGroupActionsGet(pageNumber?: number, pageSize?: number, filterSimCardGroupId?: string, filterStatus?: 'in-progress' | 'completed' | 'failed', filterType?: 'set_private_wireless_gateway' | 'remove_private_wireless_gateway', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/sim_card_group_actions';

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
        if (filterSimCardGroupId !== undefined) {
            requestContext.setQueryParam("filter[sim_card_group_id]", ObjectSerializer.serialize(filterSimCardGroupId, "string", "uuid"));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "'in-progress' | 'completed' | 'failed'", ""));
        }

        // Query Params
        if (filterType !== undefined) {
            requestContext.setQueryParam("filter[type]", ObjectSerializer.serialize(filterType, "'set_private_wireless_gateway' | 'remove_private_wireless_gateway'", ""));
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

export class SIMCardGroupActionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardGroupActionGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardGroupActionGet(response: ResponseContext): Promise<SimCardGroupActionGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SimCardGroupActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardGroupActionGet200Response", ""
            ) as SimCardGroupActionGet200Response;
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
            const body: SimCardGroupActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardGroupActionGet200Response", ""
            ) as SimCardGroupActionGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardGroupActionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardGroupActionsGet(response: ResponseContext): Promise<SimCardGroupActionsGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SimCardGroupActionsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardGroupActionsGet200Response", ""
            ) as SimCardGroupActionsGet200Response;
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
            const body: SimCardGroupActionsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardGroupActionsGet200Response", ""
            ) as SimCardGroupActionsGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

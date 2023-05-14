// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { BulkSimCardActionGet200Response } from '../models/BulkSimCardActionGet200Response.ts';
import { Errors } from '../models/Errors.ts';
import { ListBulkSIMCardActions200Response } from '../models/ListBulkSIMCardActions200Response.ts';
import { ListSIMCardActions200Response } from '../models/ListSIMCardActions200Response.ts';
import { SimCardActionGet200Response } from '../models/SimCardActionGet200Response.ts';

/**
 * no description
 */
export class SIMCardActionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API fetches information about a bulk SIM card action. A bulk SIM card action contains details about a collection of individual SIM card actions.
     * Get bulk SIM card action details
     * @param id Identifies the resource.
     */
    public async bulkSimCardActionGet(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardActionsApi", "bulkSimCardActionGet", "id");
        }


        // Path Params
        const localVarPath = '/bulk_sim_card_actions/{id}'
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
     * This API lists a paginated collection of bulk SIM card actions. A bulk SIM card action contains details about a collection of individual SIM card actions.
     * List bulk SIM card actions
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterActionType Filter by action type.
     */
    public async listBulkSIMCardActions(pageNumber?: number, pageSize?: number, filterActionType?: 'bulk_set_public_ips', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/bulk_sim_card_actions';

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
        if (filterActionType !== undefined) {
            requestContext.setQueryParam("filter[action_type]", ObjectSerializer.serialize(filterActionType, "'bulk_set_public_ips'", ""));
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
     * This API lists a paginated collection of SIM card actions. It enables exploring a collection of existing asynchronous operations using specific filters.
     * List SIM card actions
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterSimCardId A valid SIM card ID.
     * @param filterStatus Filter by a specific status of the resource\&#39;s lifecycle.
     * @param filterBulkSimCardActionId Filter by a bulk SIM card action ID.
     * @param filterActionType Filter by action type.
     */
    public async listSIMCardActions(pageNumber?: number, pageSize?: number, filterSimCardId?: string, filterStatus?: 'in-progress' | 'completed' | 'failed', filterBulkSimCardActionId?: string, filterActionType?: 'enable' | 'enable_standby_sim_card' | 'disable' | 'set_standby' | 'remove_public_ip' | 'set_public_ip', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/sim_card_actions';

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
        if (filterSimCardId !== undefined) {
            requestContext.setQueryParam("filter[sim_card_id]", ObjectSerializer.serialize(filterSimCardId, "string", "uuid"));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "'in-progress' | 'completed' | 'failed'", ""));
        }

        // Query Params
        if (filterBulkSimCardActionId !== undefined) {
            requestContext.setQueryParam("filter[bulk_sim_card_action_id]", ObjectSerializer.serialize(filterBulkSimCardActionId, "string", "uuid"));
        }

        // Query Params
        if (filterActionType !== undefined) {
            requestContext.setQueryParam("filter[action_type]", ObjectSerializer.serialize(filterActionType, "'enable' | 'enable_standby_sim_card' | 'disable' | 'set_standby' | 'remove_public_ip' | 'set_public_ip'", ""));
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
     * This API fetches detailed information about a SIM card action to follow-up on an existing asynchronous operation.
     * Get SIM card action details
     * @param id Identifies the resource.
     */
    public async simCardActionGet(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardActionsApi", "simCardActionGet", "id");
        }


        // Path Params
        const localVarPath = '/sim_card_actions/{id}'
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

export class SIMCardActionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bulkSimCardActionGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bulkSimCardActionGet(response: ResponseContext): Promise<BulkSimCardActionGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BulkSimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkSimCardActionGet200Response", ""
            ) as BulkSimCardActionGet200Response;
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
            const body: BulkSimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkSimCardActionGet200Response", ""
            ) as BulkSimCardActionGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBulkSIMCardActions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listBulkSIMCardActions(response: ResponseContext): Promise<ListBulkSIMCardActions200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListBulkSIMCardActions200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListBulkSIMCardActions200Response", ""
            ) as ListBulkSIMCardActions200Response;
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
            const body: ListBulkSIMCardActions200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListBulkSIMCardActions200Response", ""
            ) as ListBulkSIMCardActions200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSIMCardActions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listSIMCardActions(response: ResponseContext): Promise<ListSIMCardActions200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListSIMCardActions200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSIMCardActions200Response", ""
            ) as ListSIMCardActions200Response;
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
            const body: ListSIMCardActions200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSIMCardActions200Response", ""
            ) as ListSIMCardActions200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardActionGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardActionGet(response: ResponseContext): Promise<SimCardActionGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
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
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

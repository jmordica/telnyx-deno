// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { GetWebhookDeliveries200Response } from '../models/GetWebhookDeliveries200Response.ts';
import { GetWebhookDelivery200Response } from '../models/GetWebhookDelivery200Response.ts';

/**
 * no description
 */
export class WebhooksApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Lists webhook_deliveries for the authenticated user
     * List webhook deliveries
     * @param filterStatusEq Return only webhook_deliveries matching the given &#x60;status&#x60;
     * @param filterEventType Return only webhook_deliveries matching the given value of &#x60;event_type&#x60;. Accepts multiple values separated by a &#x60;,&#x60;.
     * @param filterWebhookContains Return only webhook deliveries whose &#x60;webhook&#x60; component contains the given text
     * @param filterAttemptsContains Return only webhook_deliveries whose &#x60;attempts&#x60; component contains the given text
     * @param filterStartedAtGte Return only webhook_deliveries whose delivery started later than or at given ISO 8601 datetime
     * @param filterStartedAtLte Return only webhook_deliveries whose delivery started earlier than or at given ISO 8601 datetime
     * @param filterFinishedAtGte Return only webhook_deliveries whose delivery finished later than or at given ISO 8601 datetime
     * @param filterFinishedAtLte Return only webhook_deliveries whose delivery finished earlier than or at given ISO 8601 datetime
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async getWebhookDeliveries(filterStatusEq?: 'delivered' | 'failed', filterEventType?: string, filterWebhookContains?: string, filterAttemptsContains?: string, filterStartedAtGte?: string, filterStartedAtLte?: string, filterFinishedAtGte?: string, filterFinishedAtLte?: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











        // Path Params
        const localVarPath = '/webhook_deliveries';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterStatusEq !== undefined) {
            requestContext.setQueryParam("filter[status][eq]", ObjectSerializer.serialize(filterStatusEq, "'delivered' | 'failed'", ""));
        }

        // Query Params
        if (filterEventType !== undefined) {
            requestContext.setQueryParam("filter[event_type]", ObjectSerializer.serialize(filterEventType, "string", ""));
        }

        // Query Params
        if (filterWebhookContains !== undefined) {
            requestContext.setQueryParam("filter[webhook][contains]", ObjectSerializer.serialize(filterWebhookContains, "string", ""));
        }

        // Query Params
        if (filterAttemptsContains !== undefined) {
            requestContext.setQueryParam("filter[attempts][contains]", ObjectSerializer.serialize(filterAttemptsContains, "string", ""));
        }

        // Query Params
        if (filterStartedAtGte !== undefined) {
            requestContext.setQueryParam("filter[started_at][gte]", ObjectSerializer.serialize(filterStartedAtGte, "string", ""));
        }

        // Query Params
        if (filterStartedAtLte !== undefined) {
            requestContext.setQueryParam("filter[started_at][lte]", ObjectSerializer.serialize(filterStartedAtLte, "string", ""));
        }

        // Query Params
        if (filterFinishedAtGte !== undefined) {
            requestContext.setQueryParam("filter[finished_at][gte]", ObjectSerializer.serialize(filterFinishedAtGte, "string", ""));
        }

        // Query Params
        if (filterFinishedAtLte !== undefined) {
            requestContext.setQueryParam("filter[finished_at][lte]", ObjectSerializer.serialize(filterFinishedAtLte, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("page[number]", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page[size]", ObjectSerializer.serialize(pageSize, "number", ""));
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
     * Provides webhook_delivery debug data, such as timestamps, delivery status and attempts.
     * Find webhook_delivery details by ID
     * @param id Uniquely identifies the webhook_delivery.
     */
    public async getWebhookDelivery(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WebhooksApi", "getWebhookDelivery", "id");
        }


        // Path Params
        const localVarPath = '/webhook_deliveries/{id}'
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

export class WebhooksApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWebhookDeliveries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWebhookDeliveries(response: ResponseContext): Promise<GetWebhookDeliveries200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetWebhookDeliveries200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetWebhookDeliveries200Response", ""
            ) as GetWebhookDeliveries200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetWebhookDeliveries200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetWebhookDeliveries200Response", ""
            ) as GetWebhookDeliveries200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWebhookDelivery
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWebhookDelivery(response: ResponseContext): Promise<GetWebhookDelivery200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetWebhookDelivery200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetWebhookDelivery200Response", ""
            ) as GetWebhookDelivery200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "WebhookDelivery not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetWebhookDelivery200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetWebhookDelivery200Response", ""
            ) as GetWebhookDelivery200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

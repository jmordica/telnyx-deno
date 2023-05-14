// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Errors } from '../models/Errors.ts';
import { ListCallEventsResponse } from '../models/ListCallEventsResponse.ts';

/**
 * no description
 */
export class DebuggingApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Filters call events by given filter parameters. Events are ordered by `event_timestamp`. If filter for `call_leg_id` or `call_session_id` is not present, it only filters events from the last 24 hours.  **Note**: Only one `filter[event_timestamp]` can be passed. 
     * List call events
     * @param filterCallLegId The unique identifier of an individual call leg.
     * @param filterCallSessionId The unique identifier of the call control session. A session may include multiple call leg events.
     * @param filterStatus Event status
     * @param filterType Event type
     * @param filterEventTimestampGt Event timestamp: greater than
     * @param filterEventTimestampGte Event timestamp: greater than or equal
     * @param filterEventTimestampLt Event timestamp: lower than
     * @param filterEventTimestampLte Event timestamp: lower than or equal
     * @param filterEventTimestampEq Event timestamp: equal
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async listCallEvents(filterCallLegId?: string, filterCallSessionId?: string, filterStatus?: 'delivered' | 'failed', filterType?: 'command' | 'webhook', filterEventTimestampGt?: string, filterEventTimestampGte?: string, filterEventTimestampLt?: string, filterEventTimestampLte?: string, filterEventTimestampEq?: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;












        // Path Params
        const localVarPath = '/call_events';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterCallLegId !== undefined) {
            requestContext.setQueryParam("filter[call_leg_id]", ObjectSerializer.serialize(filterCallLegId, "string", "uuid"));
        }

        // Query Params
        if (filterCallSessionId !== undefined) {
            requestContext.setQueryParam("filter[call_session_id]", ObjectSerializer.serialize(filterCallSessionId, "string", "uuid"));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "'delivered' | 'failed'", ""));
        }

        // Query Params
        if (filterType !== undefined) {
            requestContext.setQueryParam("filter[type]", ObjectSerializer.serialize(filterType, "'command' | 'webhook'", ""));
        }

        // Query Params
        if (filterEventTimestampGt !== undefined) {
            requestContext.setQueryParam("filter[event_timestamp][gt]", ObjectSerializer.serialize(filterEventTimestampGt, "string", ""));
        }

        // Query Params
        if (filterEventTimestampGte !== undefined) {
            requestContext.setQueryParam("filter[event_timestamp][gte]", ObjectSerializer.serialize(filterEventTimestampGte, "string", ""));
        }

        // Query Params
        if (filterEventTimestampLt !== undefined) {
            requestContext.setQueryParam("filter[event_timestamp][lt]", ObjectSerializer.serialize(filterEventTimestampLt, "string", ""));
        }

        // Query Params
        if (filterEventTimestampLte !== undefined) {
            requestContext.setQueryParam("filter[event_timestamp][lte]", ObjectSerializer.serialize(filterEventTimestampLte, "string", ""));
        }

        // Query Params
        if (filterEventTimestampEq !== undefined) {
            requestContext.setQueryParam("filter[event_timestamp][eq]", ObjectSerializer.serialize(filterEventTimestampEq, "string", ""));
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

}

export class DebuggingApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCallEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listCallEvents(response: ResponseContext): Promise<ListCallEventsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListCallEventsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListCallEventsResponse", ""
            ) as ListCallEventsResponse;
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
            const body: ListCallEventsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListCallEventsResponse", ""
            ) as ListCallEventsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

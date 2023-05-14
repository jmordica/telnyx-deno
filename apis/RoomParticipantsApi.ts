// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ListRoomParticipants200Response } from '../models/ListRoomParticipants200Response.ts';
import { ViewRoomParticipant200Response } from '../models/ViewRoomParticipant200Response.ts';

/**
 * no description
 */
export class RoomParticipantsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * 
     * View a list of room participants.
     * @param filterDateJoinedAtEq ISO 8601 date for filtering room participants that joined on that date.
     * @param filterDateJoinedAtGte ISO 8601 date for filtering room participants that joined after that date.
     * @param filterDateJoinedAtLte ISO 8601 date for filtering room participants that joined before that date.
     * @param filterDateUpdatedAtEq ISO 8601 date for filtering room participants updated on that date.
     * @param filterDateUpdatedAtGte ISO 8601 date for filtering room participants updated after that date.
     * @param filterDateUpdatedAtLte ISO 8601 date for filtering room participants updated before that date.
     * @param filterDateLeftAtEq ISO 8601 date for filtering room participants that left on that date.
     * @param filterDateLeftAtGte ISO 8601 date for filtering room participants that left after that date.
     * @param filterDateLeftAtLte ISO 8601 date for filtering room participants that left before that date.
     * @param filterContext Filter room participants based on the context.
     * @param filterSessionId Session_id for filtering room participants.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public async listRoomParticipants(filterDateJoinedAtEq?: string, filterDateJoinedAtGte?: string, filterDateJoinedAtLte?: string, filterDateUpdatedAtEq?: string, filterDateUpdatedAtGte?: string, filterDateUpdatedAtLte?: string, filterDateLeftAtEq?: string, filterDateLeftAtGte?: string, filterDateLeftAtLte?: string, filterContext?: string, filterSessionId?: string, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;














        // Path Params
        const localVarPath = '/room_participants';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterDateJoinedAtEq !== undefined) {
            requestContext.setQueryParam("filter[date_joined_at][eq]", ObjectSerializer.serialize(filterDateJoinedAtEq, "string", "date"));
        }

        // Query Params
        if (filterDateJoinedAtGte !== undefined) {
            requestContext.setQueryParam("filter[date_joined_at][gte]", ObjectSerializer.serialize(filterDateJoinedAtGte, "string", "date"));
        }

        // Query Params
        if (filterDateJoinedAtLte !== undefined) {
            requestContext.setQueryParam("filter[date_joined_at][lte]", ObjectSerializer.serialize(filterDateJoinedAtLte, "string", "date"));
        }

        // Query Params
        if (filterDateUpdatedAtEq !== undefined) {
            requestContext.setQueryParam("filter[date_updated_at][eq]", ObjectSerializer.serialize(filterDateUpdatedAtEq, "string", "date"));
        }

        // Query Params
        if (filterDateUpdatedAtGte !== undefined) {
            requestContext.setQueryParam("filter[date_updated_at][gte]", ObjectSerializer.serialize(filterDateUpdatedAtGte, "string", "date"));
        }

        // Query Params
        if (filterDateUpdatedAtLte !== undefined) {
            requestContext.setQueryParam("filter[date_updated_at][lte]", ObjectSerializer.serialize(filterDateUpdatedAtLte, "string", "date"));
        }

        // Query Params
        if (filterDateLeftAtEq !== undefined) {
            requestContext.setQueryParam("filter[date_left_at][eq]", ObjectSerializer.serialize(filterDateLeftAtEq, "string", "date"));
        }

        // Query Params
        if (filterDateLeftAtGte !== undefined) {
            requestContext.setQueryParam("filter[date_left_at][gte]", ObjectSerializer.serialize(filterDateLeftAtGte, "string", "date"));
        }

        // Query Params
        if (filterDateLeftAtLte !== undefined) {
            requestContext.setQueryParam("filter[date_left_at][lte]", ObjectSerializer.serialize(filterDateLeftAtLte, "string", "date"));
        }

        // Query Params
        if (filterContext !== undefined) {
            requestContext.setQueryParam("filter[context]", ObjectSerializer.serialize(filterContext, "string", ""));
        }

        // Query Params
        if (filterSessionId !== undefined) {
            requestContext.setQueryParam("filter[session_id]", ObjectSerializer.serialize(filterSessionId, "string", ""));
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
     * View a room participant.
     * @param roomParticipantId The unique identifier of a room participant.
     */
    public async viewRoomParticipant(roomParticipantId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomParticipantId' is not null or undefined
        if (roomParticipantId === null || roomParticipantId === undefined) {
            throw new RequiredError("RoomParticipantsApi", "viewRoomParticipant", "roomParticipantId");
        }


        // Path Params
        const localVarPath = '/room_participants/{room_participant_id}'
            .replace('{' + 'room_participant_id' + '}', encodeURIComponent(String(roomParticipantId)));

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

export class RoomParticipantsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoomParticipants
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRoomParticipants(response: ResponseContext): Promise<ListRoomParticipants200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListRoomParticipants200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRoomParticipants200Response", ""
            ) as ListRoomParticipants200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListRoomParticipants200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRoomParticipants200Response", ""
            ) as ListRoomParticipants200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewRoomParticipant
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewRoomParticipant(response: ResponseContext): Promise<ViewRoomParticipant200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewRoomParticipant200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewRoomParticipant200Response", ""
            ) as ViewRoomParticipant200Response;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Resource not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewRoomParticipant200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewRoomParticipant200Response", ""
            ) as ViewRoomParticipant200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

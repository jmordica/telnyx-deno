// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ActionsParticipantsRequest } from '../models/ActionsParticipantsRequest.ts';
import { EndSession200Response } from '../models/EndSession200Response.ts';
import { ListRoomParticipants200Response } from '../models/ListRoomParticipants200Response.ts';
import { ListRoomSessions200Response } from '../models/ListRoomSessions200Response.ts';
import { ViewRoomSession200Response } from '../models/ViewRoomSession200Response.ts';

/**
 * no description
 */
export class RoomSessionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Note: this will also kick all participants currently present in the room
     * End a room session.
     * @param roomSessionId The unique identifier of a room session.
     */
    public async endSession(roomSessionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomSessionId' is not null or undefined
        if (roomSessionId === null || roomSessionId === undefined) {
            throw new RequiredError("RoomSessionsApi", "endSession", "roomSessionId");
        }


        // Path Params
        const localVarPath = '/room_sessions/{room_session_id}/actions/end'
            .replace('{' + 'room_session_id' + '}', encodeURIComponent(String(roomSessionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * Kick participants from a room session.
     * @param roomSessionId The unique identifier of a room session.
     * @param actionsParticipantsRequest Parameters that can be defined during Kick action.
     */
    public async kickParticipantInSession(roomSessionId: string, actionsParticipantsRequest: ActionsParticipantsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomSessionId' is not null or undefined
        if (roomSessionId === null || roomSessionId === undefined) {
            throw new RequiredError("RoomSessionsApi", "kickParticipantInSession", "roomSessionId");
        }


        // verify required parameter 'actionsParticipantsRequest' is not null or undefined
        if (actionsParticipantsRequest === null || actionsParticipantsRequest === undefined) {
            throw new RequiredError("RoomSessionsApi", "kickParticipantInSession", "actionsParticipantsRequest");
        }


        // Path Params
        const localVarPath = '/room_sessions/{room_session_id}/actions/kick'
            .replace('{' + 'room_session_id' + '}', encodeURIComponent(String(roomSessionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(actionsParticipantsRequest, "ActionsParticipantsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * View a list of room sessions.
     * @param filterDateCreatedAtEq ISO 8601 date for filtering room sessions created on that date.
     * @param filterDateCreatedAtGte ISO 8601 date for filtering room sessions created after that date.
     * @param filterDateCreatedAtLte ISO 8601 date for filtering room sessions created before that date.
     * @param filterDateUpdatedAtEq ISO 8601 date for filtering room sessions updated on that date.
     * @param filterDateUpdatedAtGte ISO 8601 date for filtering room sessions updated after that date.
     * @param filterDateUpdatedAtLte ISO 8601 date for filtering room sessions updated before that date.
     * @param filterDateEndedAtEq ISO 8601 date for filtering room sessions ended on that date.
     * @param filterDateEndedAtGte ISO 8601 date for filtering room sessions ended after that date.
     * @param filterDateEndedAtLte ISO 8601 date for filtering room sessions ended before that date.
     * @param filterRoomId Room_id for filtering room sessions.
     * @param filterActive Filter active or inactive room sessions.
     * @param includeParticipants To decide if room participants should be included in the response.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public async listRoomSessions(filterDateCreatedAtEq?: string, filterDateCreatedAtGte?: string, filterDateCreatedAtLte?: string, filterDateUpdatedAtEq?: string, filterDateUpdatedAtGte?: string, filterDateUpdatedAtLte?: string, filterDateEndedAtEq?: string, filterDateEndedAtGte?: string, filterDateEndedAtLte?: string, filterRoomId?: string, filterActive?: boolean, includeParticipants?: boolean, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;















        // Path Params
        const localVarPath = '/room_sessions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterDateCreatedAtEq !== undefined) {
            requestContext.setQueryParam("filter[date_created_at][eq]", ObjectSerializer.serialize(filterDateCreatedAtEq, "string", "date"));
        }

        // Query Params
        if (filterDateCreatedAtGte !== undefined) {
            requestContext.setQueryParam("filter[date_created_at][gte]", ObjectSerializer.serialize(filterDateCreatedAtGte, "string", "date"));
        }

        // Query Params
        if (filterDateCreatedAtLte !== undefined) {
            requestContext.setQueryParam("filter[date_created_at][lte]", ObjectSerializer.serialize(filterDateCreatedAtLte, "string", "date"));
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
        if (filterDateEndedAtEq !== undefined) {
            requestContext.setQueryParam("filter[date_ended_at][eq]", ObjectSerializer.serialize(filterDateEndedAtEq, "string", "date"));
        }

        // Query Params
        if (filterDateEndedAtGte !== undefined) {
            requestContext.setQueryParam("filter[date_ended_at][gte]", ObjectSerializer.serialize(filterDateEndedAtGte, "string", "date"));
        }

        // Query Params
        if (filterDateEndedAtLte !== undefined) {
            requestContext.setQueryParam("filter[date_ended_at][lte]", ObjectSerializer.serialize(filterDateEndedAtLte, "string", "date"));
        }

        // Query Params
        if (filterRoomId !== undefined) {
            requestContext.setQueryParam("filter[room_id]", ObjectSerializer.serialize(filterRoomId, "string", ""));
        }

        // Query Params
        if (filterActive !== undefined) {
            requestContext.setQueryParam("filter[active]", ObjectSerializer.serialize(filterActive, "boolean", ""));
        }

        // Query Params
        if (includeParticipants !== undefined) {
            requestContext.setQueryParam("include_participants", ObjectSerializer.serialize(includeParticipants, "boolean", ""));
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
     * 
     * Mute participants in room session.
     * @param roomSessionId The unique identifier of a room session.
     * @param actionsParticipantsRequest Parameters that can be defined during Mute action.
     */
    public async muteParticipantInSession(roomSessionId: string, actionsParticipantsRequest: ActionsParticipantsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomSessionId' is not null or undefined
        if (roomSessionId === null || roomSessionId === undefined) {
            throw new RequiredError("RoomSessionsApi", "muteParticipantInSession", "roomSessionId");
        }


        // verify required parameter 'actionsParticipantsRequest' is not null or undefined
        if (actionsParticipantsRequest === null || actionsParticipantsRequest === undefined) {
            throw new RequiredError("RoomSessionsApi", "muteParticipantInSession", "actionsParticipantsRequest");
        }


        // Path Params
        const localVarPath = '/room_sessions/{room_session_id}/actions/mute'
            .replace('{' + 'room_session_id' + '}', encodeURIComponent(String(roomSessionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(actionsParticipantsRequest, "ActionsParticipantsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * View a list of room participants.
     * @param roomSessionId The unique identifier of a room session.
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
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public async nestedListRoomParticipants(roomSessionId: string, filterDateJoinedAtEq?: string, filterDateJoinedAtGte?: string, filterDateJoinedAtLte?: string, filterDateUpdatedAtEq?: string, filterDateUpdatedAtGte?: string, filterDateUpdatedAtLte?: string, filterDateLeftAtEq?: string, filterDateLeftAtGte?: string, filterDateLeftAtLte?: string, filterContext?: string, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomSessionId' is not null or undefined
        if (roomSessionId === null || roomSessionId === undefined) {
            throw new RequiredError("RoomSessionsApi", "nestedListRoomParticipants", "roomSessionId");
        }














        // Path Params
        const localVarPath = '/room_sessions/{room_session_id}/participants'
            .replace('{' + 'room_session_id' + '}', encodeURIComponent(String(roomSessionId)));

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
     * 
     * Unmute participants in room session.
     * @param roomSessionId The unique identifier of a room session.
     * @param actionsParticipantsRequest Parameters that can be defined during Unmute action.
     */
    public async unmuteParticipantInSession(roomSessionId: string, actionsParticipantsRequest: ActionsParticipantsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomSessionId' is not null or undefined
        if (roomSessionId === null || roomSessionId === undefined) {
            throw new RequiredError("RoomSessionsApi", "unmuteParticipantInSession", "roomSessionId");
        }


        // verify required parameter 'actionsParticipantsRequest' is not null or undefined
        if (actionsParticipantsRequest === null || actionsParticipantsRequest === undefined) {
            throw new RequiredError("RoomSessionsApi", "unmuteParticipantInSession", "actionsParticipantsRequest");
        }


        // Path Params
        const localVarPath = '/room_sessions/{room_session_id}/actions/unmute'
            .replace('{' + 'room_session_id' + '}', encodeURIComponent(String(roomSessionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(actionsParticipantsRequest, "ActionsParticipantsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * View a room session.
     * @param roomSessionId The unique identifier of a room session.
     * @param includeParticipants To decide if room participants should be included in the response.
     */
    public async viewRoomSession(roomSessionId: string, includeParticipants?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomSessionId' is not null or undefined
        if (roomSessionId === null || roomSessionId === undefined) {
            throw new RequiredError("RoomSessionsApi", "viewRoomSession", "roomSessionId");
        }



        // Path Params
        const localVarPath = '/room_sessions/{room_session_id}'
            .replace('{' + 'room_session_id' + '}', encodeURIComponent(String(roomSessionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeParticipants !== undefined) {
            requestContext.setQueryParam("include_participants", ObjectSerializer.serialize(includeParticipants, "boolean", ""));
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

export class RoomSessionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to endSession
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async endSession(response: ResponseContext): Promise<EndSession200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EndSession200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EndSession200Response", ""
            ) as EndSession200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EndSession200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EndSession200Response", ""
            ) as EndSession200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to kickParticipantInSession
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async kickParticipantInSession(response: ResponseContext): Promise<EndSession200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EndSession200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EndSession200Response", ""
            ) as EndSession200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EndSession200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EndSession200Response", ""
            ) as EndSession200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoomSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRoomSessions(response: ResponseContext): Promise<ListRoomSessions200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListRoomSessions200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRoomSessions200Response", ""
            ) as ListRoomSessions200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListRoomSessions200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRoomSessions200Response", ""
            ) as ListRoomSessions200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to muteParticipantInSession
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async muteParticipantInSession(response: ResponseContext): Promise<EndSession200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EndSession200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EndSession200Response", ""
            ) as EndSession200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EndSession200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EndSession200Response", ""
            ) as EndSession200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to nestedListRoomParticipants
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async nestedListRoomParticipants(response: ResponseContext): Promise<ListRoomParticipants200Response > {
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
     * @params response Response returned by the server for a request to unmuteParticipantInSession
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async unmuteParticipantInSession(response: ResponseContext): Promise<EndSession200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EndSession200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EndSession200Response", ""
            ) as EndSession200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EndSession200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EndSession200Response", ""
            ) as EndSession200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewRoomSession
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewRoomSession(response: ResponseContext): Promise<ViewRoomSession200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewRoomSession200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewRoomSession200Response", ""
            ) as ViewRoomSession200Response;
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
            const body: ViewRoomSession200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewRoomSession200Response", ""
            ) as ViewRoomSession200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

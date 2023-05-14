// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreateRoom201Response } from '../models/CreateRoom201Response.ts';
import { CreateRoomRequest } from '../models/CreateRoomRequest.ts';
import { Errors } from '../models/Errors.ts';
import { ListRoomSessions200Response } from '../models/ListRoomSessions200Response.ts';
import { ListRooms200Response } from '../models/ListRooms200Response.ts';
import { PatchRoomRequest } from '../models/PatchRoomRequest.ts';

/**
 * no description
 */
export class RoomsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Synchronously create a Room.
     * Create a room.
     * @param createRoomRequest Parameters that can be defined during room creation.
     */
    public async createRoom(createRoomRequest: CreateRoomRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createRoomRequest' is not null or undefined
        if (createRoomRequest === null || createRoomRequest === undefined) {
            throw new RequiredError("RoomsApi", "createRoom", "createRoomRequest");
        }


        // Path Params
        const localVarPath = '/rooms';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createRoomRequest, "CreateRoomRequest", ""),
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
     * Synchronously delete a Room. Participants from that room will be kicked out, they won\'t be able to join that room anymore, and you won\'t be charged anymore for that room.
     * Delete a room.
     * @param roomId The unique identifier of a room.
     */
    public async deleteRoom(roomId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomId' is not null or undefined
        if (roomId === null || roomId === undefined) {
            throw new RequiredError("RoomsApi", "deleteRoom", "roomId");
        }


        // Path Params
        const localVarPath = '/rooms/{room_id}'
            .replace('{' + 'room_id' + '}', encodeURIComponent(String(roomId)));

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
     * 
     * View a list of rooms.
     * @param filterDateCreatedAtEq ISO 8601 date for filtering rooms created on that date.
     * @param filterDateCreatedAtGte ISO 8601 date for filtering rooms created after that date.
     * @param filterDateCreatedAtLte ISO 8601 date for filtering rooms created before that date.
     * @param filterDateUpdatedAtEq ISO 8601 date for filtering rooms updated on that date.
     * @param filterDateUpdatedAtGte ISO 8601 date for filtering rooms updated after that date.
     * @param filterDateUpdatedAtLte ISO 8601 date for filtering rooms updated before that date.
     * @param filterUniqueName Unique_name for filtering rooms.
     * @param includeSessions To decide if room sessions should be included in the response.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public async listRooms(filterDateCreatedAtEq?: string, filterDateCreatedAtGte?: string, filterDateCreatedAtLte?: string, filterDateUpdatedAtEq?: string, filterDateUpdatedAtGte?: string, filterDateUpdatedAtLte?: string, filterUniqueName?: string, includeSessions?: boolean, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











        // Path Params
        const localVarPath = '/rooms';

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
        if (filterUniqueName !== undefined) {
            requestContext.setQueryParam("filter[unique_name]", ObjectSerializer.serialize(filterUniqueName, "string", ""));
        }

        // Query Params
        if (includeSessions !== undefined) {
            requestContext.setQueryParam("include_sessions", ObjectSerializer.serialize(includeSessions, "boolean", ""));
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
     * View a list of room sessions.
     * @param roomId The unique identifier of a room.
     * @param filterDateCreatedAtEq ISO 8601 date for filtering room sessions created on that date.
     * @param filterDateCreatedAtGte ISO 8601 date for filtering room sessions created after that date.
     * @param filterDateCreatedAtLte ISO 8601 date for filtering room sessions created before that date.
     * @param filterDateUpdatedAtEq ISO 8601 date for filtering room sessions updated on that date.
     * @param filterDateUpdatedAtGte ISO 8601 date for filtering room sessions updated after that date.
     * @param filterDateUpdatedAtLte ISO 8601 date for filtering room sessions updated before that date.
     * @param filterDateEndedAtEq ISO 8601 date for filtering room sessions ended on that date.
     * @param filterDateEndedAtGte ISO 8601 date for filtering room sessions ended after that date.
     * @param filterDateEndedAtLte ISO 8601 date for filtering room sessions ended before that date.
     * @param filterActive Filter active or inactive room sessions.
     * @param includeParticipants To decide if room participants should be included in the response.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public async nestedListRoomSessions(roomId: string, filterDateCreatedAtEq?: string, filterDateCreatedAtGte?: string, filterDateCreatedAtLte?: string, filterDateUpdatedAtEq?: string, filterDateUpdatedAtGte?: string, filterDateUpdatedAtLte?: string, filterDateEndedAtEq?: string, filterDateEndedAtGte?: string, filterDateEndedAtLte?: string, filterActive?: boolean, includeParticipants?: boolean, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomId' is not null or undefined
        if (roomId === null || roomId === undefined) {
            throw new RequiredError("RoomsApi", "nestedListRoomSessions", "roomId");
        }















        // Path Params
        const localVarPath = '/rooms/{room_id}/sessions'
            .replace('{' + 'room_id' + '}', encodeURIComponent(String(roomId)));

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
     * Synchronously update a Room.
     * Update a room.
     * @param roomId The unique identifier of a room.
     * @param patchRoomRequest Parameters that can be defined during room update.
     */
    public async patchRoom(roomId: string, patchRoomRequest: PatchRoomRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomId' is not null or undefined
        if (roomId === null || roomId === undefined) {
            throw new RequiredError("RoomsApi", "patchRoom", "roomId");
        }


        // verify required parameter 'patchRoomRequest' is not null or undefined
        if (patchRoomRequest === null || patchRoomRequest === undefined) {
            throw new RequiredError("RoomsApi", "patchRoom", "patchRoomRequest");
        }


        // Path Params
        const localVarPath = '/rooms/{room_id}'
            .replace('{' + 'room_id' + '}', encodeURIComponent(String(roomId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(patchRoomRequest, "PatchRoomRequest", ""),
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
     * View a room.
     * @param roomId The unique identifier of a room.
     * @param includeSessions To decide if room sessions should be included in the response.
     */
    public async viewRoom(roomId: string, includeSessions?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomId' is not null or undefined
        if (roomId === null || roomId === undefined) {
            throw new RequiredError("RoomsApi", "viewRoom", "roomId");
        }



        // Path Params
        const localVarPath = '/rooms/{room_id}'
            .replace('{' + 'room_id' + '}', encodeURIComponent(String(roomId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeSessions !== undefined) {
            requestContext.setQueryParam("include_sessions", ObjectSerializer.serialize(includeSessions, "boolean", ""));
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

export class RoomsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRoom
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createRoom(response: ResponseContext): Promise<CreateRoom201Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateRoom201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateRoom201Response", ""
            ) as CreateRoom201Response;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateRoom201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateRoom201Response", ""
            ) as CreateRoom201Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRoom
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteRoom(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRooms
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRooms(response: ResponseContext): Promise<ListRooms200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListRooms200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRooms200Response", ""
            ) as ListRooms200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListRooms200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRooms200Response", ""
            ) as ListRooms200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to nestedListRoomSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async nestedListRoomSessions(response: ResponseContext): Promise<ListRoomSessions200Response > {
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
     * @params response Response returned by the server for a request to patchRoom
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchRoom(response: ResponseContext): Promise<CreateRoom201Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateRoom201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateRoom201Response", ""
            ) as CreateRoom201Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateRoom201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateRoom201Response", ""
            ) as CreateRoom201Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewRoom
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewRoom(response: ResponseContext): Promise<CreateRoom201Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateRoom201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateRoom201Response", ""
            ) as CreateRoom201Response;
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
            const body: CreateRoom201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateRoom201Response", ""
            ) as CreateRoom201Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

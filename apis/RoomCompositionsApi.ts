// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreateRoomComposition202Response } from '../models/CreateRoomComposition202Response.ts';
import { CreateRoomCompositionRequest } from '../models/CreateRoomCompositionRequest.ts';
import { Errors } from '../models/Errors.ts';
import { ListRoomCompositions200Response } from '../models/ListRoomCompositions200Response.ts';

/**
 * no description
 */
export class RoomCompositionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Asynchronously create a room composition.
     * Create a room composition.
     * @param createRoomCompositionRequest Parameters that can be defined during room composition creation.
     */
    public async createRoomComposition(createRoomCompositionRequest: CreateRoomCompositionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createRoomCompositionRequest' is not null or undefined
        if (createRoomCompositionRequest === null || createRoomCompositionRequest === undefined) {
            throw new RequiredError("RoomCompositionsApi", "createRoomComposition", "createRoomCompositionRequest");
        }


        // Path Params
        const localVarPath = '/room_compositions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createRoomCompositionRequest, "CreateRoomCompositionRequest", ""),
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
     * Synchronously delete a room composition.
     * Delete a room composition.
     * @param roomCompositionId The unique identifier of a room composition.
     */
    public async deleteRoomComposition(roomCompositionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomCompositionId' is not null or undefined
        if (roomCompositionId === null || roomCompositionId === undefined) {
            throw new RequiredError("RoomCompositionsApi", "deleteRoomComposition", "roomCompositionId");
        }


        // Path Params
        const localVarPath = '/room_compositions/{room_composition_id}'
            .replace('{' + 'room_composition_id' + '}', encodeURIComponent(String(roomCompositionId)));

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
     * View a list of room compositions.
     * @param filterDateCreatedAtEq ISO 8601 date for filtering room compositions created on that date.
     * @param filterDateCreatedAtGte ISO 8601 date for filtering room compositions created after that date.
     * @param filterDateCreatedAtLte ISO 8601 date for filtering room compositions created before that date.
     * @param filterSessionId The session_id for filtering room compositions.
     * @param filterStatus The status for filtering room compositions.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public async listRoomCompositions(filterDateCreatedAtEq?: string, filterDateCreatedAtGte?: string, filterDateCreatedAtLte?: string, filterSessionId?: string, filterStatus?: 'completed' | 'processing' | 'enqueued', pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/room_compositions';

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
        if (filterSessionId !== undefined) {
            requestContext.setQueryParam("filter[session_id]", ObjectSerializer.serialize(filterSessionId, "string", "uuid"));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "'completed' | 'processing' | 'enqueued'", ""));
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
     * View a room composition.
     * @param roomCompositionId The unique identifier of a room composition.
     */
    public async viewRoomComposition(roomCompositionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomCompositionId' is not null or undefined
        if (roomCompositionId === null || roomCompositionId === undefined) {
            throw new RequiredError("RoomCompositionsApi", "viewRoomComposition", "roomCompositionId");
        }


        // Path Params
        const localVarPath = '/room_compositions/{room_composition_id}'
            .replace('{' + 'room_composition_id' + '}', encodeURIComponent(String(roomCompositionId)));

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

export class RoomCompositionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRoomComposition
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createRoomComposition(response: ResponseContext): Promise<CreateRoomComposition202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: CreateRoomComposition202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateRoomComposition202Response", ""
            ) as CreateRoomComposition202Response;
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
            const body: CreateRoomComposition202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateRoomComposition202Response", ""
            ) as CreateRoomComposition202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRoomComposition
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteRoomComposition(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to listRoomCompositions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRoomCompositions(response: ResponseContext): Promise<ListRoomCompositions200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListRoomCompositions200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRoomCompositions200Response", ""
            ) as ListRoomCompositions200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListRoomCompositions200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRoomCompositions200Response", ""
            ) as ListRoomCompositions200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewRoomComposition
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewRoomComposition(response: ResponseContext): Promise<CreateRoomComposition202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateRoomComposition202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateRoomComposition202Response", ""
            ) as CreateRoomComposition202Response;
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
            const body: CreateRoomComposition202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateRoomComposition202Response", ""
            ) as CreateRoomComposition202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

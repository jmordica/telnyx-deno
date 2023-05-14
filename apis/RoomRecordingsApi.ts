// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { BulkRoomRecordingsDeleteResponse } from '../models/BulkRoomRecordingsDeleteResponse.ts';
import { Errors } from '../models/Errors.ts';
import { ListRoomRecordings200Response } from '../models/ListRoomRecordings200Response.ts';
import { ViewRoomRecording200Response } from '../models/ViewRoomRecording200Response.ts';

/**
 * no description
 */
export class RoomRecordingsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Synchronously delete a Room Recording.
     * Delete a room recording.
     * @param roomRecordingId The unique identifier of a room recording.
     */
    public async deleteRoomRecording(roomRecordingId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomRecordingId' is not null or undefined
        if (roomRecordingId === null || roomRecordingId === undefined) {
            throw new RequiredError("RoomRecordingsApi", "deleteRoomRecording", "roomRecordingId");
        }


        // Path Params
        const localVarPath = '/room_recordings/{room_recording_id}'
            .replace('{' + 'room_recording_id' + '}', encodeURIComponent(String(roomRecordingId)));

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
     * Delete several room recordings in a bulk.
     * @param filterDateEndedAtEq ISO 8601 date for filtering room recordings ended on that date.
     * @param filterDateEndedAtGte ISO 8601 date for filtering room recordings ended after that date.
     * @param filterDateEndedAtLte ISO 8601 date for filtering room recordings ended before that date.
     * @param filterDateStartedAtEq ISO 8601 date for filtering room recordings started on that date.
     * @param filterDateStartedAtGte ISO 8601 date for filtering room recordings started after that date.
     * @param filterDateStartedAtLte ISO 8601 date for filtering room recordings started before that date.
     * @param filterRoomId room_id for filtering room recordings.
     * @param filterParticipantId participant_id for filtering room recordings.
     * @param filterSessionId session_id for filtering room recordings.
     * @param filterStatus status for filtering room recordings.
     * @param filterType type for filtering room recordings.
     * @param filterDurationSecsEq duration_secs equal for filtering room recordings.
     * @param filterDurationSecsLte duration_secs less or equal for filtering room recordings.
     * @param filterDurationSecsGte duration_secs greater or equal for filtering room recordings.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public async deleteRoomRecordings(filterDateEndedAtEq?: string, filterDateEndedAtGte?: string, filterDateEndedAtLte?: string, filterDateStartedAtEq?: string, filterDateStartedAtGte?: string, filterDateStartedAtLte?: string, filterRoomId?: string, filterParticipantId?: string, filterSessionId?: string, filterStatus?: string, filterType?: string, filterDurationSecsEq?: number, filterDurationSecsLte?: number, filterDurationSecsGte?: number, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

















        // Path Params
        const localVarPath = '/room_recordings';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
        if (filterDateStartedAtEq !== undefined) {
            requestContext.setQueryParam("filter[date_started_at][eq]", ObjectSerializer.serialize(filterDateStartedAtEq, "string", "date"));
        }

        // Query Params
        if (filterDateStartedAtGte !== undefined) {
            requestContext.setQueryParam("filter[date_started_at][gte]", ObjectSerializer.serialize(filterDateStartedAtGte, "string", "date"));
        }

        // Query Params
        if (filterDateStartedAtLte !== undefined) {
            requestContext.setQueryParam("filter[date_started_at][lte]", ObjectSerializer.serialize(filterDateStartedAtLte, "string", "date"));
        }

        // Query Params
        if (filterRoomId !== undefined) {
            requestContext.setQueryParam("filter[room_id]", ObjectSerializer.serialize(filterRoomId, "string", "uuid"));
        }

        // Query Params
        if (filterParticipantId !== undefined) {
            requestContext.setQueryParam("filter[participant_id]", ObjectSerializer.serialize(filterParticipantId, "string", "uuid"));
        }

        // Query Params
        if (filterSessionId !== undefined) {
            requestContext.setQueryParam("filter[session_id]", ObjectSerializer.serialize(filterSessionId, "string", "uuid"));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "string", ""));
        }

        // Query Params
        if (filterType !== undefined) {
            requestContext.setQueryParam("filter[type]", ObjectSerializer.serialize(filterType, "string", ""));
        }

        // Query Params
        if (filterDurationSecsEq !== undefined) {
            requestContext.setQueryParam("filter[duration_secs][eq]", ObjectSerializer.serialize(filterDurationSecsEq, "number", ""));
        }

        // Query Params
        if (filterDurationSecsLte !== undefined) {
            requestContext.setQueryParam("filter[duration_secs][lte]", ObjectSerializer.serialize(filterDurationSecsLte, "number", ""));
        }

        // Query Params
        if (filterDurationSecsGte !== undefined) {
            requestContext.setQueryParam("filter[duration_secs][gte]", ObjectSerializer.serialize(filterDurationSecsGte, "number", ""));
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
     * View a list of room recordings.
     * @param filterDateEndedAtEq ISO 8601 date for filtering room recordings ended on that date.
     * @param filterDateEndedAtGte ISO 8601 date for filtering room recordings ended after that date.
     * @param filterDateEndedAtLte ISO 8601 date for filtering room recordings ended before that date.
     * @param filterDateStartedAtEq ISO 8601 date for filtering room recordings started on that date.
     * @param filterDateStartedAtGte ISO 8601 date for filtering room recordings started after that date.
     * @param filterDateStartedAtLte ISO 8601 date for filtering room recordings started before that date.
     * @param filterRoomId room_id for filtering room recordings.
     * @param filterParticipantId participant_id for filtering room recordings.
     * @param filterSessionId session_id for filtering room recordings.
     * @param filterStatus status for filtering room recordings.
     * @param filterType type for filtering room recordings.
     * @param filterDurationSecsEq duration_secs equal for filtering room recordings.
     * @param filterDurationSecsLte duration_secs less or equal for filtering room recordings.
     * @param filterDurationSecsGte duration_secs greater or equal for filtering room recordings.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     */
    public async listRoomRecordings(filterDateEndedAtEq?: string, filterDateEndedAtGte?: string, filterDateEndedAtLte?: string, filterDateStartedAtEq?: string, filterDateStartedAtGte?: string, filterDateStartedAtLte?: string, filterRoomId?: string, filterParticipantId?: string, filterSessionId?: string, filterStatus?: string, filterType?: string, filterDurationSecsEq?: number, filterDurationSecsLte?: number, filterDurationSecsGte?: number, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

















        // Path Params
        const localVarPath = '/room_recordings';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
        if (filterDateStartedAtEq !== undefined) {
            requestContext.setQueryParam("filter[date_started_at][eq]", ObjectSerializer.serialize(filterDateStartedAtEq, "string", "date"));
        }

        // Query Params
        if (filterDateStartedAtGte !== undefined) {
            requestContext.setQueryParam("filter[date_started_at][gte]", ObjectSerializer.serialize(filterDateStartedAtGte, "string", "date"));
        }

        // Query Params
        if (filterDateStartedAtLte !== undefined) {
            requestContext.setQueryParam("filter[date_started_at][lte]", ObjectSerializer.serialize(filterDateStartedAtLte, "string", "date"));
        }

        // Query Params
        if (filterRoomId !== undefined) {
            requestContext.setQueryParam("filter[room_id]", ObjectSerializer.serialize(filterRoomId, "string", "uuid"));
        }

        // Query Params
        if (filterParticipantId !== undefined) {
            requestContext.setQueryParam("filter[participant_id]", ObjectSerializer.serialize(filterParticipantId, "string", "uuid"));
        }

        // Query Params
        if (filterSessionId !== undefined) {
            requestContext.setQueryParam("filter[session_id]", ObjectSerializer.serialize(filterSessionId, "string", "uuid"));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "string", ""));
        }

        // Query Params
        if (filterType !== undefined) {
            requestContext.setQueryParam("filter[type]", ObjectSerializer.serialize(filterType, "string", ""));
        }

        // Query Params
        if (filterDurationSecsEq !== undefined) {
            requestContext.setQueryParam("filter[duration_secs][eq]", ObjectSerializer.serialize(filterDurationSecsEq, "number", ""));
        }

        // Query Params
        if (filterDurationSecsLte !== undefined) {
            requestContext.setQueryParam("filter[duration_secs][lte]", ObjectSerializer.serialize(filterDurationSecsLte, "number", ""));
        }

        // Query Params
        if (filterDurationSecsGte !== undefined) {
            requestContext.setQueryParam("filter[duration_secs][gte]", ObjectSerializer.serialize(filterDurationSecsGte, "number", ""));
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
     * View a room recording.
     * @param roomRecordingId The unique identifier of a room recording.
     */
    public async viewRoomRecording(roomRecordingId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomRecordingId' is not null or undefined
        if (roomRecordingId === null || roomRecordingId === undefined) {
            throw new RequiredError("RoomRecordingsApi", "viewRoomRecording", "roomRecordingId");
        }


        // Path Params
        const localVarPath = '/room_recordings/{room_recording_id}'
            .replace('{' + 'room_recording_id' + '}', encodeURIComponent(String(roomRecordingId)));

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

export class RoomRecordingsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRoomRecording
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteRoomRecording(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteRoomRecordings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteRoomRecordings(response: ResponseContext): Promise<BulkRoomRecordingsDeleteResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BulkRoomRecordingsDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkRoomRecordingsDeleteResponse", ""
            ) as BulkRoomRecordingsDeleteResponse;
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
            const body: BulkRoomRecordingsDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkRoomRecordingsDeleteResponse", ""
            ) as BulkRoomRecordingsDeleteResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoomRecordings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRoomRecordings(response: ResponseContext): Promise<ListRoomRecordings200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListRoomRecordings200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRoomRecordings200Response", ""
            ) as ListRoomRecordings200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListRoomRecordings200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRoomRecordings200Response", ""
            ) as ListRoomRecordings200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewRoomRecording
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewRoomRecording(response: ResponseContext): Promise<ViewRoomRecording200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewRoomRecording200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewRoomRecording200Response", ""
            ) as ViewRoomRecording200Response;
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
            const body: ViewRoomRecording200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewRoomRecording200Response", ""
            ) as ViewRoomRecording200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

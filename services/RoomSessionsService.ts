/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsParticipantsRequest } from '../models/ActionsParticipantsRequest.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { RoomParticipant } from '../models/RoomParticipant.ts';
import type { RoomSession } from '../models/RoomSession.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class RoomSessionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
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
     * @returns any List room sessions response.
     * @throws ApiError
     */
    public listRoomSessions(
        filterDateCreatedAtEq?: string,
        filterDateCreatedAtGte?: string,
        filterDateCreatedAtLte?: string,
        filterDateUpdatedAtEq?: string,
        filterDateUpdatedAtGte?: string,
        filterDateUpdatedAtLte?: string,
        filterDateEndedAtEq?: string,
        filterDateEndedAtGte?: string,
        filterDateEndedAtLte?: string,
        filterRoomId?: string,
        filterActive?: boolean,
        includeParticipants?: boolean,
        pageSize: number = 20,
        pageNumber: number = 1,
    ): CancelablePromise<{
        data?: Array<RoomSession>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/room_sessions',
            query: {
                'filter[date_created_at][eq]': filterDateCreatedAtEq,
                'filter[date_created_at][gte]': filterDateCreatedAtGte,
                'filter[date_created_at][lte]': filterDateCreatedAtLte,
                'filter[date_updated_at][eq]': filterDateUpdatedAtEq,
                'filter[date_updated_at][gte]': filterDateUpdatedAtGte,
                'filter[date_updated_at][lte]': filterDateUpdatedAtLte,
                'filter[date_ended_at][eq]': filterDateEndedAtEq,
                'filter[date_ended_at][gte]': filterDateEndedAtGte,
                'filter[date_ended_at][lte]': filterDateEndedAtLte,
                'filter[room_id]': filterRoomId,
                'filter[active]': filterActive,
                'include_participants': includeParticipants,
                'page[size]': pageSize,
                'page[number]': pageNumber,
            },
        });
    }

    /**
     * View a room session.
     * @param roomSessionId The unique identifier of a room session.
     * @param includeParticipants To decide if room participants should be included in the response.
     * @returns any Get room session response.
     * @throws ApiError
     */
    public viewRoomSession(
        roomSessionId: string,
        includeParticipants?: boolean,
    ): CancelablePromise<{
        data?: RoomSession;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/room_sessions/{room_session_id}',
            path: {
                'room_session_id': roomSessionId,
            },
            query: {
                'include_participants': includeParticipants,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * End a room session.
     * Note: this will also kick all participants currently present in the room
     * @param roomSessionId The unique identifier of a room session.
     * @returns any Success Action Response
     * @throws ApiError
     */
    public endSession(
        roomSessionId: string,
    ): CancelablePromise<{
        data?: {
            result?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/room_sessions/{room_session_id}/actions/end',
            path: {
                'room_session_id': roomSessionId,
            },
        });
    }

    /**
     * Kick participants from a room session.
     * @param roomSessionId The unique identifier of a room session.
     * @param requestBody Parameters that can be defined during Kick action.
     * @returns any Success Action Response
     * @throws ApiError
     */
    public kickParticipantInSession(
        roomSessionId: string,
        requestBody: ActionsParticipantsRequest,
    ): CancelablePromise<{
        data?: {
            result?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/room_sessions/{room_session_id}/actions/kick',
            path: {
                'room_session_id': roomSessionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Mute participants in room session.
     * @param roomSessionId The unique identifier of a room session.
     * @param requestBody Parameters that can be defined during Mute action.
     * @returns any Success Action Response
     * @throws ApiError
     */
    public muteParticipantInSession(
        roomSessionId: string,
        requestBody: ActionsParticipantsRequest,
    ): CancelablePromise<{
        data?: {
            result?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/room_sessions/{room_session_id}/actions/mute',
            path: {
                'room_session_id': roomSessionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Unmute participants in room session.
     * @param roomSessionId The unique identifier of a room session.
     * @param requestBody Parameters that can be defined during Unmute action.
     * @returns any Success Action Response
     * @throws ApiError
     */
    public unmuteParticipantInSession(
        roomSessionId: string,
        requestBody: ActionsParticipantsRequest,
    ): CancelablePromise<{
        data?: {
            result?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/room_sessions/{room_session_id}/actions/unmute',
            path: {
                'room_session_id': roomSessionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
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
     * @returns any List room participants response.
     * @throws ApiError
     */
    public nestedListRoomParticipants(
        roomSessionId: string,
        filterDateJoinedAtEq?: string,
        filterDateJoinedAtGte?: string,
        filterDateJoinedAtLte?: string,
        filterDateUpdatedAtEq?: string,
        filterDateUpdatedAtGte?: string,
        filterDateUpdatedAtLte?: string,
        filterDateLeftAtEq?: string,
        filterDateLeftAtGte?: string,
        filterDateLeftAtLte?: string,
        filterContext?: string,
        pageSize: number = 20,
        pageNumber: number = 1,
    ): CancelablePromise<{
        data?: Array<RoomParticipant>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/room_sessions/{room_session_id}/participants',
            path: {
                'room_session_id': roomSessionId,
            },
            query: {
                'filter[date_joined_at][eq]': filterDateJoinedAtEq,
                'filter[date_joined_at][gte]': filterDateJoinedAtGte,
                'filter[date_joined_at][lte]': filterDateJoinedAtLte,
                'filter[date_updated_at][eq]': filterDateUpdatedAtEq,
                'filter[date_updated_at][gte]': filterDateUpdatedAtGte,
                'filter[date_updated_at][lte]': filterDateUpdatedAtLte,
                'filter[date_left_at][eq]': filterDateLeftAtEq,
                'filter[date_left_at][gte]': filterDateLeftAtGte,
                'filter[date_left_at][lte]': filterDateLeftAtLte,
                'filter[context]': filterContext,
                'page[size]': pageSize,
                'page[number]': pageNumber,
            },
        });
    }

}

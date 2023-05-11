/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRoomRequest } from '../models/CreateRoomRequest.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { PatchRoomRequest } from '../models/PatchRoomRequest.ts';
import type { Room } from '../models/Room.ts';
import type { RoomSession } from '../models/RoomSession.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class RoomsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
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
     * @returns any List rooms response.
     * @throws ApiError
     */
    public listRooms(
        filterDateCreatedAtEq?: string,
        filterDateCreatedAtGte?: string,
        filterDateCreatedAtLte?: string,
        filterDateUpdatedAtEq?: string,
        filterDateUpdatedAtGte?: string,
        filterDateUpdatedAtLte?: string,
        filterUniqueName?: string,
        includeSessions?: boolean,
        pageSize: number = 20,
        pageNumber: number = 1,
    ): CancelablePromise<{
        data?: Array<Room>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rooms',
            query: {
                'filter[date_created_at][eq]': filterDateCreatedAtEq,
                'filter[date_created_at][gte]': filterDateCreatedAtGte,
                'filter[date_created_at][lte]': filterDateCreatedAtLte,
                'filter[date_updated_at][eq]': filterDateUpdatedAtEq,
                'filter[date_updated_at][gte]': filterDateUpdatedAtGte,
                'filter[date_updated_at][lte]': filterDateUpdatedAtLte,
                'filter[unique_name]': filterUniqueName,
                'include_sessions': includeSessions,
                'page[size]': pageSize,
                'page[number]': pageNumber,
            },
        });
    }

    /**
     * Create a room.
     * Synchronously create a Room.
     * @param requestBody Parameters that can be defined during room creation.
     * @returns any Create room response.
     * @throws ApiError
     */
    public createRoom(
        requestBody: CreateRoomRequest,
    ): CancelablePromise<{
        data?: Room;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rooms',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Delete a room.
     * Synchronously delete a Room. Participants from that room will be kicked out, they won't be able to join that room anymore, and you won't be charged anymore for that room.
     * @param roomId The unique identifier of a room.
     * @returns void
     * @throws ApiError
     */
    public deleteRoom(
        roomId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rooms/{room_id}',
            path: {
                'room_id': roomId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * View a room.
     * @param roomId The unique identifier of a room.
     * @param includeSessions To decide if room sessions should be included in the response.
     * @returns any Get room response.
     * @throws ApiError
     */
    public viewRoom(
        roomId: string,
        includeSessions?: boolean,
    ): CancelablePromise<{
        data?: Room;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rooms/{room_id}',
            path: {
                'room_id': roomId,
            },
            query: {
                'include_sessions': includeSessions,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Update a room.
     * Synchronously update a Room.
     * @param roomId The unique identifier of a room.
     * @param requestBody Parameters that can be defined during room update.
     * @returns any Update room response.
     * @throws ApiError
     */
    public patchRoom(
        roomId: string,
        requestBody: PatchRoomRequest,
    ): CancelablePromise<{
        data?: Room;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/rooms/{room_id}',
            path: {
                'room_id': roomId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Bad request`,
            },
        });
    }

    /**
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
     * @returns any List room sessions response.
     * @throws ApiError
     */
    public nestedListRoomSessions(
        roomId: string,
        filterDateCreatedAtEq?: string,
        filterDateCreatedAtGte?: string,
        filterDateCreatedAtLte?: string,
        filterDateUpdatedAtEq?: string,
        filterDateUpdatedAtGte?: string,
        filterDateUpdatedAtLte?: string,
        filterDateEndedAtEq?: string,
        filterDateEndedAtGte?: string,
        filterDateEndedAtLte?: string,
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
            url: '/rooms/{room_id}/sessions',
            path: {
                'room_id': roomId,
            },
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
                'filter[active]': filterActive,
                'include_participants': includeParticipants,
                'page[size]': pageSize,
                'page[number]': pageNumber,
            },
        });
    }

}

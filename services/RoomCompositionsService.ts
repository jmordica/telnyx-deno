/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRoomCompositionRequest } from '../models/CreateRoomCompositionRequest.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { RoomComposition } from '../models/RoomComposition.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class RoomCompositionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * View a list of room compositions.
     * @param filterDateCreatedAtEq ISO 8601 date for filtering room compositions created on that date.
     * @param filterDateCreatedAtGte ISO 8601 date for filtering room compositions created after that date.
     * @param filterDateCreatedAtLte ISO 8601 date for filtering room compositions created before that date.
     * @param filterSessionId The session_id for filtering room compositions.
     * @param filterStatus The status for filtering room compositions.
     * @param pageSize The size of the page
     * @param pageNumber The page number to load
     * @returns any List room compositions response.
     * @throws ApiError
     */
    public listRoomCompositions(
        filterDateCreatedAtEq?: string,
        filterDateCreatedAtGte?: string,
        filterDateCreatedAtLte?: string,
        filterSessionId?: string,
        filterStatus?: 'completed' | 'processing' | 'enqueued',
        pageSize: number = 20,
        pageNumber: number = 1,
    ): CancelablePromise<{
        data?: Array<RoomComposition>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/room_compositions',
            query: {
                'filter[date_created_at][eq]': filterDateCreatedAtEq,
                'filter[date_created_at][gte]': filterDateCreatedAtGte,
                'filter[date_created_at][lte]': filterDateCreatedAtLte,
                'filter[session_id]': filterSessionId,
                'filter[status]': filterStatus,
                'page[size]': pageSize,
                'page[number]': pageNumber,
            },
        });
    }

    /**
     * Create a room composition.
     * Asynchronously create a room composition.
     * @param requestBody Parameters that can be defined during room composition creation.
     * @returns any Create room composition response.
     * @throws ApiError
     */
    public createRoomComposition(
        requestBody: CreateRoomCompositionRequest,
    ): CancelablePromise<{
        data?: RoomComposition;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/room_compositions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Delete a room composition.
     * Synchronously delete a room composition.
     * @param roomCompositionId The unique identifier of a room composition.
     * @returns void
     * @throws ApiError
     */
    public deleteRoomComposition(
        roomCompositionId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/room_compositions/{room_composition_id}',
            path: {
                'room_composition_id': roomCompositionId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * View a room composition.
     * @param roomCompositionId The unique identifier of a room composition.
     * @returns any Get room composition response.
     * @throws ApiError
     */
    public viewRoomComposition(
        roomCompositionId: string,
    ): CancelablePromise<{
        data?: RoomComposition;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/room_compositions/{room_composition_id}',
            path: {
                'room_composition_id': roomCompositionId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

}

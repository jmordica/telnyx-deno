/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { RoomParticipant } from '../models/RoomParticipant.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class RoomParticipantsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
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
     * @returns any List room participants response.
     * @throws ApiError
     */
    public listRoomParticipants(
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
        filterSessionId?: string,
        pageSize: number = 20,
        pageNumber: number = 1,
    ): CancelablePromise<{
        data?: Array<RoomParticipant>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/room_participants',
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
                'filter[session_id]': filterSessionId,
                'page[size]': pageSize,
                'page[number]': pageNumber,
            },
        });
    }

    /**
     * View a room participant.
     * @param roomParticipantId The unique identifier of a room participant.
     * @returns any Get room participant response.
     * @throws ApiError
     */
    public viewRoomParticipant(
        roomParticipantId: string,
    ): CancelablePromise<{
        data?: RoomParticipant;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/room_participants/{room_participant_id}',
            path: {
                'room_participant_id': roomParticipantId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

}

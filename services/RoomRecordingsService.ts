/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { RoomRecording } from '../models/RoomRecording.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class RoomRecordingsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
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
     * @returns any Successful response for Bulk Delete Room recordings requests
     * @throws ApiError
     */
    public deleteRoomRecordings(
        filterDateEndedAtEq?: string,
        filterDateEndedAtGte?: string,
        filterDateEndedAtLte?: string,
        filterDateStartedAtEq?: string,
        filterDateStartedAtGte?: string,
        filterDateStartedAtLte?: string,
        filterRoomId?: string,
        filterParticipantId?: string,
        filterSessionId?: string,
        filterStatus?: string,
        filterType?: string,
        filterDurationSecsEq?: number,
        filterDurationSecsLte?: number,
        filterDurationSecsGte?: number,
        pageSize: number = 20,
        pageNumber: number = 1,
    ): CancelablePromise<{
        data?: {
            /**
             * Amount of room recordings affected
             */
            room_recordings?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/room_recordings',
            query: {
                'filter[date_ended_at][eq]': filterDateEndedAtEq,
                'filter[date_ended_at][gte]': filterDateEndedAtGte,
                'filter[date_ended_at][lte]': filterDateEndedAtLte,
                'filter[date_started_at][eq]': filterDateStartedAtEq,
                'filter[date_started_at][gte]': filterDateStartedAtGte,
                'filter[date_started_at][lte]': filterDateStartedAtLte,
                'filter[room_id]': filterRoomId,
                'filter[participant_id]': filterParticipantId,
                'filter[session_id]': filterSessionId,
                'filter[status]': filterStatus,
                'filter[type]': filterType,
                'filter[duration_secs][eq]': filterDurationSecsEq,
                'filter[duration_secs][lte]': filterDurationSecsLte,
                'filter[duration_secs][gte]': filterDurationSecsGte,
                'page[size]': pageSize,
                'page[number]': pageNumber,
            },
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
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
     * @returns any List room recordings response.
     * @throws ApiError
     */
    public listRoomRecordings(
        filterDateEndedAtEq?: string,
        filterDateEndedAtGte?: string,
        filterDateEndedAtLte?: string,
        filterDateStartedAtEq?: string,
        filterDateStartedAtGte?: string,
        filterDateStartedAtLte?: string,
        filterRoomId?: string,
        filterParticipantId?: string,
        filterSessionId?: string,
        filterStatus?: string,
        filterType?: string,
        filterDurationSecsEq?: number,
        filterDurationSecsLte?: number,
        filterDurationSecsGte?: number,
        pageSize: number = 20,
        pageNumber: number = 1,
    ): CancelablePromise<{
        data?: Array<RoomRecording>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/room_recordings',
            query: {
                'filter[date_ended_at][eq]': filterDateEndedAtEq,
                'filter[date_ended_at][gte]': filterDateEndedAtGte,
                'filter[date_ended_at][lte]': filterDateEndedAtLte,
                'filter[date_started_at][eq]': filterDateStartedAtEq,
                'filter[date_started_at][gte]': filterDateStartedAtGte,
                'filter[date_started_at][lte]': filterDateStartedAtLte,
                'filter[room_id]': filterRoomId,
                'filter[participant_id]': filterParticipantId,
                'filter[session_id]': filterSessionId,
                'filter[status]': filterStatus,
                'filter[type]': filterType,
                'filter[duration_secs][eq]': filterDurationSecsEq,
                'filter[duration_secs][lte]': filterDurationSecsLte,
                'filter[duration_secs][gte]': filterDurationSecsGte,
                'page[size]': pageSize,
                'page[number]': pageNumber,
            },
        });
    }

    /**
     * Delete a room recording.
     * Synchronously delete a Room Recording.
     * @param roomRecordingId The unique identifier of a room recording.
     * @returns void
     * @throws ApiError
     */
    public deleteRoomRecording(
        roomRecordingId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/room_recordings/{room_recording_id}',
            path: {
                'room_recording_id': roomRecordingId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * View a room recording.
     * @param roomRecordingId The unique identifier of a room recording.
     * @returns any Get room recording response.
     * @throws ApiError
     */
    public viewRoomRecording(
        roomRecordingId: string,
    ): CancelablePromise<{
        data?: RoomRecording;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/room_recordings/{room_recording_id}',
            path: {
                'room_recording_id': roomRecordingId,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

}

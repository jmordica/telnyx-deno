/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Conference } from '../models/Conference.ts';
import type { ConferenceCallRequest } from '../models/ConferenceCallRequest.ts';
import type { ConferenceCommandResult } from '../models/ConferenceCommandResult.ts';
import type { ConferenceHoldRequest } from '../models/ConferenceHoldRequest.ts';
import type { ConferenceMuteRequest } from '../models/ConferenceMuteRequest.ts';
import type { ConferencePlayRequest } from '../models/ConferencePlayRequest.ts';
import type { ConferenceSpeakRequest } from '../models/ConferenceSpeakRequest.ts';
import type { ConferenceStopRequest } from '../models/ConferenceStopRequest.ts';
import type { ConferenceUnholdRequest } from '../models/ConferenceUnholdRequest.ts';
import type { ConferenceUnmuteRequest } from '../models/ConferenceUnmuteRequest.ts';
import type { CreateConferenceRequest } from '../models/CreateConferenceRequest.ts';
import type { JoinConferenceRequest } from '../models/JoinConferenceRequest.ts';
import type { LeaveConferenceRequest } from '../models/LeaveConferenceRequest.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { Participant } from '../models/Participant.ts';
import type { PauseConferenceRecordingRequest } from '../models/PauseConferenceRecordingRequest.ts';
import type { ResumeConferenceRecordingRequest } from '../models/ResumeConferenceRecordingRequest.ts';
import type { StartConferenceRecordingRequest } from '../models/StartConferenceRecordingRequest.ts';
import type { StopRecordingRequest } from '../models/StopRecordingRequest.ts';
import type { UpdateConferenceRequest } from '../models/UpdateConferenceRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class ConferenceCommandsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List conferences
     * Lists conferences. Conferences are created on demand, and will expire after all participants have left the conference or after 4 hours regardless of the number of active participants. Conferences are listed in descending order by `expires_at`.
     * @param filterName If present, conferences will be filtered to those with a matching `name` attribute. Matching is case-sensitive
     * @param filterStatus If present, conferences will be filtered by status.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of conferences.
     * @throws ApiError
     */
    public listConferences(
        filterName?: string,
        filterStatus?: 'init' | 'in_progress' | 'completed',
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<Conference>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/conferences',
            query: {
                'filter[name]': filterName,
                'filter[status]': filterStatus,
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Create conference
     * Create a conference from an existing call leg using a `call_control_id` and a conference name. Upon creating the conference, the call will be automatically bridged to the conference. Conferences will expire after all participants have left the conference or after 4 hours regardless of the number of active participants.
     *
     * **Expected Webhooks:**
     *
     * - `conference.created`
     * - `conference.participant.joined`
     * - `conference.participant.left`
     * - `conference.ended`
     * - `conference.recording.saved`
     * - `conference.floor.changed`
     *
     * @param requestBody Create a conference
     * @returns any Successful response with details about a conference.
     * @throws ApiError
     */
    public createConference(
        requestBody: CreateConferenceRequest,
    ): CancelablePromise<{
        data?: Conference;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * List conference participants
     * Lists conference participants
     * @param conferenceId Uniquely identifies the conference by id
     * @param filterMuted If present, participants will be filtered to those who are/are not muted
     * @param filterOnHold If present, participants will be filtered to those who are/are not put on hold
     * @param filterWhispering If present, participants will be filtered to those who are whispering or are not
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of conference participants.
     * @throws ApiError
     */
    public listConferenceParticipants(
        conferenceId: string,
        filterMuted?: boolean,
        filterOnHold?: boolean,
        filterWhispering?: boolean,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<Participant>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/conferences/{conference_id}/participants',
            path: {
                'conference_id': conferenceId,
            },
            query: {
                'filter[muted]': filterMuted,
                'filter[on_hold]': filterOnHold,
                'filter[whispering]': filterWhispering,
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                404: `Conference does not exist`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Retrieve a conference
     * Retrieve an existing conference
     * @param id Uniquely identifies the conference by id
     * @returns any Successful response with details about a conference.
     * @throws ApiError
     */
    public retrieveConference(
        id: string,
    ): CancelablePromise<{
        data?: Conference;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/conferences/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Conference does not exist`,
            },
        });
    }

    /**
     * Dial a new participant into a conference
     * Dials a phone number and, when the call is answered, automatically joins them into the specified conference.
     *
     * **Expected Webhooks:**
     *
     * - `call.hangup`
     * - `call.answered`
     * - `conference.participant.joined`
     * - `conference.participant.left`
     *
     * @param id Uniquely identifies the conference by id or name
     * @param requestBody Dial Into Conference request object
     * @returns any Successful response upon making a conference command.
     * @throws ApiError
     */
    public conferenceDialParticipantIn(
        id: string,
        requestBody: ConferenceCallRequest,
    ): CancelablePromise<{
        data?: ConferenceCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences/{id}/actions/dial_participant',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Conference does not exist`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Hold conference participants
     * Hold a list of participants in a conference call
     * @param id Uniquely identifies the conference by id or name
     * @param requestBody
     * @returns any Successful response upon making a conference command.
     * @throws ApiError
     */
    public conferenceHoldParticipants(
        id: string,
        requestBody: ConferenceHoldRequest,
    ): CancelablePromise<{
        data?: ConferenceCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences/{id}/actions/hold',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Conference does not exist`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Join a conference
     * Join an existing call leg to a conference. Issue the Join Conference command with the conference ID in the path and the `call_control_id` of the leg you wish to join to the conference as an attribute. The conference can have up to a certain amount of active participants, as set by the `max_participants` parameter in conference creation request.
     *
     * **Expected Webhooks:**
     *
     * - `conference.participant.joined`
     * - `conference.participant.left`
     *
     * @param id Uniquely identifies the conference by id or name
     * @param requestBody Join Conference request object
     * @returns any Successful response upon making a conference command.
     * @throws ApiError
     */
    public conferenceJoin(
        id: string,
        requestBody: JoinConferenceRequest,
    ): CancelablePromise<{
        data?: ConferenceCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences/{id}/actions/join',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Leave a conference
     * Removes a call leg from a conference and moves it back to parked state. **Expected Webhooks:**
     *
     * - `conference.participant.left`
     *
     * @param id Uniquely identifies the conference by id or name
     * @param requestBody Leave Conference request object
     * @returns any Successful response upon making a conference command.
     * @throws ApiError
     */
    public conferenceLeave(
        id: string,
        requestBody: LeaveConferenceRequest,
    ): CancelablePromise<{
        data?: ConferenceCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences/{id}/actions/leave',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Mute conference participants
     * Mute a list of participants in a conference call
     * @param id Uniquely identifies the conference by id or name
     * @param requestBody
     * @returns any Successful response upon making a conference command.
     * @throws ApiError
     */
    public conferenceMuteParticipants(
        id: string,
        requestBody: ConferenceMuteRequest,
    ): CancelablePromise<{
        data?: ConferenceCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences/{id}/actions/mute',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Conference does not exist`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Play audio to conference participants
     * Play audio to all or some participants on a conference call.
     * @param id Uniquely identifies the conference by id or name
     * @param requestBody
     * @returns any Successful response upon making a conference command.
     * @throws ApiError
     */
    public conferencePlayAudio(
        id: string,
        requestBody: ConferencePlayRequest,
    ): CancelablePromise<{
        data?: ConferenceCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences/{id}/actions/play',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Conference does not exist`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Conference recording pause
     * Pause conference recording.
     * @param id Specifies the conference by id or name
     * @param requestBody
     * @returns any Successful response upon making a conference command.
     * @throws ApiError
     */
    public conferencePauseRecording(
        id: string,
        requestBody: PauseConferenceRecordingRequest,
    ): CancelablePromise<{
        data?: ConferenceCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences/{id}/actions/record_pause',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Conference does not exist`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Conference recording resume
     * Resume conference recording.
     * @param id Specifies the conference by id or name
     * @param requestBody
     * @returns any Successful response upon making a conference command.
     * @throws ApiError
     */
    public conferenceResumeRecording(
        id: string,
        requestBody: ResumeConferenceRecordingRequest,
    ): CancelablePromise<{
        data?: ConferenceCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences/{id}/actions/record_resume',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Conference does not exist`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Conference recording start
     * Start recording the conference. Recording will stop on conference end, or via the Stop Recording command.
     *
     * **Expected Webhooks:**
     *
     * - `conference.recording.saved`
     * @param id Specifies the conference to record by id or name
     * @param requestBody
     * @returns any Successful response upon making a conference command.
     * @throws ApiError
     */
    public conferenceStartRecording(
        id: string,
        requestBody: StartConferenceRecordingRequest,
    ): CancelablePromise<{
        data?: ConferenceCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences/{id}/actions/record_start',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Conference does not exist`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Conference recording stop
     * Stop recording the conference.
     *
     * **Expected Webhooks:**
     *
     * - `conference.recording.saved`
     *
     * @param id Specifies the conference to stop the recording for by id or name
     * @param requestBody Stop recording conference request
     * @returns any Successful response upon making a conference command.
     * @throws ApiError
     */
    public conferenceStopRecording(
        id: string,
        requestBody: StopRecordingRequest,
    ): CancelablePromise<{
        data?: ConferenceCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences/{id}/actions/record_stop',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Conference does not exist`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Speak text to conference participants
     * Convert text to speech and play it to all or some participants.
     * @param id Specifies the conference by id or name
     * @param requestBody
     * @returns any Successful response upon making a conference command.
     * @throws ApiError
     */
    public conferenceSpeakText(
        id: string,
        requestBody: ConferenceSpeakRequest,
    ): CancelablePromise<{
        data?: ConferenceCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences/{id}/actions/speak',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Conference does not exist`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Stop audio being played on the conference
     * Stop audio being played to all or some participants on a conference call.
     * @param id Uniquely identifies the conference by id or name
     * @param requestBody
     * @returns any Successful response upon making a conference command.
     * @throws ApiError
     */
    public conferenceStopAudio(
        id: string,
        requestBody: ConferenceStopRequest,
    ): CancelablePromise<{
        data?: ConferenceCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences/{id}/actions/stop',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Conference does not exist`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Unhold conference participants
     * Unhold a list of participants in a conference call
     * @param id Uniquely identifies the conference by id or name
     * @param requestBody
     * @returns any Successful response upon making a conference command.
     * @throws ApiError
     */
    public conferenceUnholdParticipants(
        id: string,
        requestBody: ConferenceUnholdRequest,
    ): CancelablePromise<{
        data?: ConferenceCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences/{id}/actions/unhold',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Conference does not exist`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Unmute conference participants
     * Unmute a list of participants in a conference call
     * @param id Uniquely identifies the conference by id or name
     * @param requestBody
     * @returns any Successful response upon making a conference command.
     * @throws ApiError
     */
    public conferenceUnmuteParticipants(
        id: string,
        requestBody: ConferenceUnmuteRequest,
    ): CancelablePromise<{
        data?: ConferenceCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences/{id}/actions/unmute',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Conference does not exist`,
                422: `Unprocessable entity`,
            },
        });
    }

    /**
     * Update conference participant
     * Update conference participant supervisor_role
     * @param id Uniquely identifies the conference by id or name
     * @param requestBody Update Conference request object
     * @returns any Successful response upon making a conference command.
     * @throws ApiError
     */
    public conferenceUpdate(
        id: string,
        requestBody: UpdateConferenceRequest,
    ): CancelablePromise<{
        data?: ConferenceCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/conferences/{id}/actions/update',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity`,
            },
        });
    }

}

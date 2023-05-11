/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CredentialsResponse } from '../models/CredentialsResponse.ts';
import type { CustomStorageConfiguration } from '../models/CustomStorageConfiguration.ts';
import type { Errors } from '../models/Errors.ts';
import type { RecordingResponse } from '../models/RecordingResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class CallRecordingsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete stored credentials
     * Deletes a stored custom credentials configuration.
     * @param connectionId Telnyx connection id
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteCustomStorageCredentials(
        connectionId: string,
    ): CancelablePromise<Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/custom_storage_credentials/{connection_id}',
            path: {
                'connection_id': connectionId,
            },
        });
    }

    /**
     * Retrieve stored credentials
     * Returns the information about custom storage credentials.
     * @param connectionId Telnyx connection id
     * @returns CredentialsResponse A response with credentials resource.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public getCustomStorageCredentials(
        connectionId: string,
    ): CancelablePromise<CredentialsResponse | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/custom_storage_credentials/{connection_id}',
            path: {
                'connection_id': connectionId,
            },
        });
    }

    /**
     * Create custom storage credentials
     * Creates custom storage credentials configuration.
     * @param connectionId Telnyx connection id
     * @param requestBody Creates new credentials resource for given connection_id.
     * @returns CredentialsResponse A response with credentials resource.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createCustomStorageCredentials(
        connectionId: string,
        requestBody: CustomStorageConfiguration,
    ): CancelablePromise<CredentialsResponse | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/custom_storage_credentials/{connection_id}',
            path: {
                'connection_id': connectionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update stored credentials
     * Updates a stored custom credentials configuration.
     * @param connectionId Telnyx connection id
     * @param requestBody Creates new credentials resource for given connection_id.
     * @returns CredentialsResponse A response with credentials resource.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateCustomStorageCredentials(
        connectionId: string,
        requestBody: CustomStorageConfiguration,
    ): CancelablePromise<CredentialsResponse | Errors> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/custom_storage_credentials/{connection_id}',
            path: {
                'connection_id': connectionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a call recording
     * Permanently deletes a call recording.
     * @param recordingId Uniquely identifies the recording by id.
     * @returns RecordingResponse A response with recording resource.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteRecording(
        recordingId: string,
    ): CancelablePromise<RecordingResponse | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/recordings/{recording_id}',
            path: {
                'recording_id': recordingId,
            },
        });
    }

    /**
     * Retrieve call recording
     * Retrieves the details of an existing call recording.
     * @param recordingId Uniquely identifies the recording by id.
     * @returns RecordingResponse A response with recording resource.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public getRecording(
        recordingId: string,
    ): CancelablePromise<RecordingResponse | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/recordings/{recording_id}',
            path: {
                'recording_id': recordingId,
            },
        });
    }

}

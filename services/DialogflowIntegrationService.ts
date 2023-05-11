/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DialogflowConnection } from '../models/DialogflowConnection.ts';
import type { DialogflowConnectionResponse } from '../models/DialogflowConnectionResponse.ts';
import type { Errors } from '../models/Errors.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class DialogflowIntegrationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete stored Dialogflow Connection
     * Deletes a stored Dialogflow Connection.
     * @param connectionId Telnyx connection id
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteDialogflowConnection(
        connectionId: string,
    ): CancelablePromise<Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/dialogflow_connections/{connection_id}',
            path: {
                'connection_id': connectionId,
            },
        });
    }

    /**
     * Retrieve stored Dialogflow Connection
     * Return details of the Dialogflow connection associated with the given CallControl connection.
     * @param connectionId Telnyx connection id
     * @returns DialogflowConnectionResponse Return details of the Dialogflow connection associated with the given CallControl connection.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public getDialogflowConnection(
        connectionId: string,
    ): CancelablePromise<DialogflowConnectionResponse | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dialogflow_connections/{connection_id}',
            path: {
                'connection_id': connectionId,
            },
        });
    }

    /**
     * Create a Dialogflow Connection
     * Save Dialogflow Credentiails to Telnyx, so it can be used with other Telnyx services.
     * @param connectionId Telnyx connection id
     * @param requestBody The params expected to create/update a Dialogflow Connection for given connection_id.
     * @returns Errors Unexpected error
     * @returns DialogflowConnectionResponse Return details of the Dialogflow connection associated with the given CallControl connection.
     * @throws ApiError
     */
    public createDialogflowConnection(
        connectionId: string,
        requestBody: DialogflowConnection,
    ): CancelablePromise<Errors | DialogflowConnectionResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dialogflow_connections/{connection_id}',
            path: {
                'connection_id': connectionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update stored Dialogflow Connection
     * Updates a stored Dialogflow Connection.
     * @param connectionId Telnyx connection id
     * @param requestBody The params expected to create/update a Dialogflow Connection for given connection_id.
     * @returns DialogflowConnectionResponse Return details of the Dialogflow connection associated with the given CallControl connection.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateDialogflowConnection(
        connectionId: string,
        requestBody: DialogflowConnection,
    ): CancelablePromise<DialogflowConnectionResponse | Errors> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/dialogflow_connections/{connection_id}',
            path: {
                'connection_id': connectionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}

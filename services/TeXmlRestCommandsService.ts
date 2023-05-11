/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTeXMLSecretRequest } from '../models/CreateTeXMLSecretRequest.ts';
import type { CreateTeXMLSecretResult } from '../models/CreateTeXMLSecretResult.ts';
import type { InitiateCallRequest } from '../models/InitiateCallRequest.ts';
import type { InitiateCallResult } from '../models/InitiateCallResult.ts';
import type { UpdateCallRequest } from '../models/UpdateCallRequest.ts';
import type { UpdateCommandResult } from '../models/UpdateCommandResult.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class TeXmlRestCommandsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Initiate an outbound call
     * Initiate an outbound TeXML call. Telnyx will request TeXML from the XML Request URL configured for the connection in the Mission Control Portal.
     * @param applicationId The ID of the TeXML application used for the call.
     * @param requestBody Iniatiate Call request object
     * @returns any Successful response upon initiating a TeXML call.
     * @throws ApiError
     */
    public initiateTeXmlCall(
        applicationId: string,
        requestBody: InitiateCallRequest,
    ): CancelablePromise<{
        data?: InitiateCallResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/texml/calls/{application_id}',
            path: {
                'application_id': applicationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update call
     * Update TeXML call. Please note that the keys present in the payload MUST BE formatted in CamelCase as specified in the example.
     * @param callSid The CallSid that identifies the call to update.
     * @param requestBody Update Call request object
     * @returns any Successful response upon updating a TeXML call.
     * @throws ApiError
     */
    public updateTeXmlCall(
        callSid: string,
        requestBody: UpdateCallRequest,
    ): CancelablePromise<{
        data?: UpdateCommandResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/texml/calls/{call_sid}/update',
            path: {
                'call_sid': callSid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create a TeXML secret
     * Create a TeXML secret which can be later used as a Dynamic Parameter for TeXML when using Mustache Templates in your TeXML. In your TeXML you will be able to use your secret name, and this name will be replaced by the actual secret value when processing the TeXML on Telnyx side.  The secrets are not visible in any logs.
     * @param requestBody Create TeXML secret request object
     * @returns any Successful response upon creating a TeXML secret.
     * @throws ApiError
     */
    public createTeXmlSecret(
        requestBody: CreateTeXMLSecretRequest,
    ): CancelablePromise<{
        data?: CreateTeXMLSecretResult;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/texml/secrets',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity`,
            },
        });
    }

}

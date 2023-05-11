/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class InboundChannelsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve your inbound channels
     * Returns the inbound channels for your account. Inbound channels allows you to use Channel Billing for calls to your Telnyx phone numbers. Please check the Telnyx Support Articles section for full information and examples of how to utilize Channel Billing.
     * @returns any Inbound Channels Response
     * @throws ApiError
     */
    public listOutboundChannels(): CancelablePromise<{
        data?: {
            /**
             * The current number of concurrent channels set for the account
             */
            channels?: number;
            /**
             * Identifies the type of the response
             */
            record_type?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/phone_numbers/inbound_channels',
            errors: {
                401: `Unauthorized`,
                404: `Resource not found`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Update inbound channels
     * Update the inbound channels for the account
     * @param requestBody Inbound channels update
     * @returns any Expected Update response
     * @throws ApiError
     */
    public updateOutboundChannels(
        requestBody: {
            /**
             * The new number of concurrent channels for the account
             */
            channels: number;
        },
    ): CancelablePromise<{
        data?: {
            /**
             * The number of channels set for the account
             */
            channels?: number;
            /**
             * Identifies the type of the response
             */
            record_type?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/phone_numbers/inbound_channels',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}

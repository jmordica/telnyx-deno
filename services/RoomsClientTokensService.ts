/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRoomClientTokenRequest } from '../models/CreateRoomClientTokenRequest.ts';
import type { RefreshRoomClientTokenRequest } from '../models/RefreshRoomClientTokenRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class RoomsClientTokensService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create Client Token to join a room.
     * Synchronously create an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`, a Refresh Token is also provided to refresh a Client Token, the Refresh Token expires after `refresh_token_ttl_secs`.
     * @param roomId The unique identifier of a room.
     * @param requestBody Parameters that can be defined during Room Client Token creation.
     * @returns any Create room client token response.
     * @throws ApiError
     */
    public createRoomClientToken(
        roomId: string,
        requestBody: CreateRoomClientTokenRequest,
    ): CancelablePromise<{
        data?: {
            token?: string;
            /**
             * ISO 8601 timestamp when the token expires.
             */
            token_expires_at?: string;
            refresh_token?: string;
            /**
             * ISO 8601 timestamp when the refresh token expires.
             */
            refresh_token_expires_at?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rooms/{room_id}/actions/generate_join_client_token',
            path: {
                'room_id': roomId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
            },
        });
    }

    /**
     * Refresh Client Token to join a room.
     * Synchronously refresh an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`.
     * @param roomId The unique identifier of a room.
     * @param requestBody Parameters that can be defined during Room Client Token refresh.
     * @returns any Refresh room client token response.
     * @throws ApiError
     */
    public refreshRoomClientToken(
        roomId: string,
        requestBody: RefreshRoomClientTokenRequest,
    ): CancelablePromise<{
        data?: {
            token?: string;
            /**
             * ISO 8601 timestamp when the token expires.
             */
            token_expires_at?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rooms/{room_id}/actions/refresh_client_token',
            path: {
                'room_id': roomId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
            },
        });
    }

}

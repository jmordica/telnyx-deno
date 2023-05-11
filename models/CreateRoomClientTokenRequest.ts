/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateRoomClientTokenRequest = {
    /**
     * The time to live in seconds of the Client Token, after that time the Client Token is invalid and can't be used to join a Room.
     */
    token_ttl_secs?: number;
    /**
     * The time to live in seconds of the Refresh Token, after that time the Refresh Token is invalid and can't be used to refresh Client Token.
     */
    refresh_token_ttl_secs?: number;
};


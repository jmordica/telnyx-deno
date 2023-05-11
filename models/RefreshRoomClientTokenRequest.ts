/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RefreshRoomClientTokenRequest = {
    /**
     * The time to live in seconds of the Client Token, after that time the Client Token is invalid and can't be used to join a Room.
     */
    token_ttl_secs?: number;
    refresh_token: string;
};


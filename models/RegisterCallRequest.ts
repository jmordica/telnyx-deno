/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RegisterCallRequest = {
    /**
     * The DID that you will dial out from.
     */
    from: string;
    /**
     * The DID that you will dial out to.
     */
    to: string;
    /**
     * The reason for call (this will be displayed on call recipient's device).
     */
    reason: string;
};


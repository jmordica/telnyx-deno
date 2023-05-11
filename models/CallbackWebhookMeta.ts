/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CallbackWebhookMeta = {
    /**
     * The number of times the callback webhook has been attempted.
     */
    attempt?: number;
    /**
     * The URL that the callback webhook was delivered to.
     */
    delivered_to?: string;
};


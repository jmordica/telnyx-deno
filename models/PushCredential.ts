/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PushCredential = {
    /**
     * Unique identifier of a push credential
     */
    id: string;
    /**
     * Apple certificate for sending push notifications. For iOS only
     */
    certificate: string;
    /**
     * Apple private key for a given certificate for sending push notifications. For iOS only
     */
    private_key: string;
    /**
     * Google server key for sending push notifications. For Android only
     */
    server_key: string;
    /**
     * Alias to uniquely identify a credential
     */
    alias: string;
    /**
     * Type of mobile push credential. Either <code>ios</code> or <code>android</code>
     */
    type: string;
    readonly record_type: string;
    /**
     * ISO 8601 timestamp when the room was created
     */
    created_at: string;
    /**
     * ISO 8601 timestamp when the room was updated.
     */
    updated_at: string;
};


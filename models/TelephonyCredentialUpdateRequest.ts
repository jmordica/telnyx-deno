/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TelephonyCredentialUpdateRequest = {
    name?: string;
    /**
     * Tags a credential to filter for bulk operations. A single tag can hold at maximum 1000 credentials.
     */
    tag?: string;
    /**
     * Identifies the Credential Connection this credential is associated with.
     */
    connection_id?: string;
    /**
     * ISO-8601 formatted date indicating when the credential will expire.
     */
    expires_at?: string;
};


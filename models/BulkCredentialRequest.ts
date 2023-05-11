/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BulkCredentialRequest = {
    /**
     * A default name for all credentials.
     */
    name?: string;
    /**
     * Tags a credential for bulk operations. A single tag can hold at maximum 1000 credentials.
     */
    tag: string;
    /**
     * Amount of credentials to be created. A single tag can hold at maximum 1000 credentials
     */
    amount?: number;
    /**
     * Identifies the connection this credential is associated with.
     */
    connection_id: string;
};


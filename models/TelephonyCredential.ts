/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TelephonyCredential = {
    /**
     * Identifies the resource.
     */
    id?: string;
    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
    name?: string;
    /**
     * Identifies the resource this credential is associated with.
     */
    resource_id?: string;
    /**
     * Defaults to false
     */
    expired?: boolean;
    /**
     * The randomly generated SIP username for the credential.
     */
    sip_username?: string;
    /**
     * The randomly generated SIP password for the credential.
     */
    sip_password?: string;
    /**
     * ISO-8601 formatted date indicating when the resource was created.
     */
    created_at?: string;
    /**
     * ISO-8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
    /**
     * ISO-8601 formatted date indicating when the resource will expire.
     */
    expires_at?: string;
};


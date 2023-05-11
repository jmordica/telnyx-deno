/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateAndroidPushCredentialRequest = {
    /**
     * Type of mobile push credential. Should be <code>android</code> here
     */
    type: CreateAndroidPushCredentialRequest.type;
    /**
     * Server key as received from Google firebase
     */
    server_key: string;
    /**
     * Alias to uniquely identify the credential
     */
    alias: string;
};

export namespace CreateAndroidPushCredentialRequest {

    /**
     * Type of mobile push credential. Should be <code>android</code> here
     */
    export enum type {
        ANDROID = 'android',
    }


}


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateIosPushCredentialRequest = {
    /**
     * Type of mobile push credential. Should be <code>ios</code> here
     */
    type: CreateIosPushCredentialRequest.type;
    /**
     * Certificate as received from APNs
     */
    certificate: string;
    /**
     * Corresponding private key to the certificate as received from APNs
     */
    private_key: string;
    /**
     * Alias to uniquely identify the credential
     */
    alias: string;
};

export namespace CreateIosPushCredentialRequest {

    /**
     * Type of mobile push credential. Should be <code>ios</code> here
     */
    export enum type {
        IOS = 'ios',
    }


}


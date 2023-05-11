/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The settings associated with the authentication provider.
 */
export type settings = {
    /**
     * The Entity ID for the identity provider (IdP).
     */
    idp_entity_id: string;
    /**
     * The SSO target url for the identity provider (IdP).
     */
    idp_sso_target_url: string;
    /**
     * The certificate fingerprint for the identity provider (IdP)
     */
    idp_cert_fingerprint: string;
    /**
     * The algorithm used to generate the identity provider's (IdP) certificate fingerprint
     */
    idp_cert_fingerprint_algorithm?: settings.idp_cert_fingerprint_algorithm;
};

export namespace settings {

    /**
     * The algorithm used to generate the identity provider's (IdP) certificate fingerprint
     */
    export enum idp_cert_fingerprint_algorithm {
        SHA1 = 'sha1',
        SHA256 = 'sha256',
        SHA384 = 'sha384',
        SHA512 = 'sha512',
    }


}


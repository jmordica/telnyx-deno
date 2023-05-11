/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { active } from './active.ts';
import type { name } from './name.ts';
import type { organization_id } from './organization_id.ts';
import type { short_name } from './short_name.ts';

export type AuthenticationProvider = {
    /**
     * Uniquely identifies the authentication provider.
     */
    id?: string;
    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
    name?: name;
    short_name?: short_name;
    organization_id?: organization_id;
    active?: active;
    /**
     * The settings associated with the authentication provider.
     */
    settings?: {
        /**
         * The Assertion Consumer Service URL for the service provider (Telnyx).
         */
        assertion_consumer_service_url?: string;
        /**
         * The Entity ID for the service provider (Telnyx).
         */
        service_provider_entity_id?: string;
        /**
         * The Entity ID for the identity provider (IdP).
         */
        idp_entity_id?: string;
        /**
         * The SSO target url for the identity provider (IdP).
         */
        idp_sso_target_url?: string;
        /**
         * The certificate fingerprint for the identity provider (IdP)
         */
        idp_cert_fingerprint?: string;
        /**
         * The algorithm used to generate the identity provider's (IdP) certificate fingerprint
         */
        idp_cert_fingerprint_algorithm?: AuthenticationProvider.idp_cert_fingerprint_algorithm;
        /**
         * The name identifier format associated with the authentication provider. This must be the same for both the Identity Provider (IdP) and the service provider (Telnyx).
         */
        name_identifier_format?: string;
    };
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
};

export namespace AuthenticationProvider {

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


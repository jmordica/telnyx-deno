/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NumberPoolSettings } from './NumberPoolSettings.ts';
import type { UrlShortenerSettings } from './UrlShortenerSettings.ts';

export type MessagingProfile = {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: MessagingProfile.record_type;
    /**
     * Identifies the type of resource.
     */
    readonly id?: string;
    /**
     * A user friendly name for the messaging profile.
     */
    name?: string;
    /**
     * Specifies whether the messaging profile is enabled or not.
     */
    enabled?: boolean;
    /**
     * The URL where webhooks related to this messaging profile will be sent.
     */
    webhook_url?: string | null;
    /**
     * The failover URL where webhooks related to this messaging profile will be sent if sending to the primary URL fails.
     */
    webhook_failover_url?: string | null;
    /**
     * Determines which webhook format will be used, Telnyx API v1, v2, or a legacy 2010-04-01 format.
     */
    webhook_api_version?: MessagingProfile.webhook_api_version;
    /**
     * Destinations to which the messaging profile is allowed to send. If set to `null`, all destinations will be allowed. Setting a value of `["*"]` has the equivalent effect. The elements in the list must be valid ISO 3166-1 alpha-2 country codes.
     */
    whitelisted_destinations?: Array<string> | null;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    readonly updated_at?: string;
    /**
     * Secret used to authenticate with v1 endpoints.
     */
    v1_secret?: string;
    number_pool_settings?: NumberPoolSettings;
    url_shortener_settings?: UrlShortenerSettings;
};

export namespace MessagingProfile {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        MESSAGING_PROFILE = 'messaging_profile',
    }

    /**
     * Determines which webhook format will be used, Telnyx API v1, v2, or a legacy 2010-04-01 format.
     */
    export enum webhook_api_version {
        _1 = '1',
        _2 = '2',
        _2010_04_01 = '2010-04-01',
    }


}


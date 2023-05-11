/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NumberPoolSettings } from './NumberPoolSettings.ts';
import type { UrlShortenerSettings } from './UrlShortenerSettings.ts';

export type CreateMessagingProfileRequest = {
    /**
     * A user friendly name for the messaging profile.
     */
    name: string;
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
    webhook_api_version?: CreateMessagingProfileRequest.webhook_api_version;
    number_pool_settings?: NumberPoolSettings;
    url_shortener_settings?: UrlShortenerSettings;
};

export namespace CreateMessagingProfileRequest {

    /**
     * Determines which webhook format will be used, Telnyx API v1, v2, or a legacy 2010-04-01 format.
     */
    export enum webhook_api_version {
        _1 = '1',
        _2 = '2',
        _2010_04_01 = '2010-04-01',
    }


}


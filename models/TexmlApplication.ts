/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AnchorsiteOverride } from './AnchorsiteOverride.ts';
import type { ApplicationName } from './ApplicationName.ts';
import type { ConnectionActive } from './ConnectionActive.ts';
import type { CreatedAt } from './CreatedAt.ts';
import type { DtmfType } from './DtmfType.ts';
import type { FirstCommandTimeout } from './FirstCommandTimeout.ts';
import type { FirstCommandTimeoutSecs } from './FirstCommandTimeoutSecs.ts';
import type { IntId } from './IntId.ts';
import type { OutboundVoiceProfileId } from './OutboundVoiceProfileId.ts';
import type { UpdatedAt } from './UpdatedAt.ts';

export type TexmlApplication = {
    id?: IntId;
    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
    friendly_name?: ApplicationName;
    active?: ConnectionActive;
    anchorsite_override?: AnchorsiteOverride;
    dtmf_type?: DtmfType;
    first_command_timeout?: FirstCommandTimeout;
    first_command_timeout_secs?: FirstCommandTimeoutSecs;
    /**
     * URL to which Telnyx will deliver your XML Translator webhooks.
     */
    voice_url?: string;
    /**
     * URL to which Telnyx will deliver your XML Translator webhooks if we get an error response from your voice_url.
     */
    voice_fallback_url?: string;
    /**
     * HTTP request method Telnyx will use to interact with your XML Translator webhooks. Either 'get' or 'post'.
     */
    voice_method?: TexmlApplication.voice_method;
    /**
     * URL for Telnyx to send requests to containing information about call progress events.
     */
    status_callback?: string;
    /**
     * HTTP request method Telnyx should use when requesting the status_callback URL.
     */
    status_callback_method?: TexmlApplication.status_callback_method;
    inbound?: {
        /**
         * When set, this will limit the total number of inbound calls to phone numbers associated with this connection.
         */
        channel_limit?: number;
        /**
         * Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.
         */
        sip_subdomain?: string;
        /**
         * This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
         */
        sip_subdomain_receive_settings?: TexmlApplication.sip_subdomain_receive_settings;
    };
    outbound?: {
        /**
         * When set, this will limit the total number of outbound calls to phone numbers associated with this connection.
         */
        channel_limit?: number;
        outbound_voice_profile_id?: OutboundVoiceProfileId;
    };
    created_at?: CreatedAt;
    updated_at?: UpdatedAt;
};

export namespace TexmlApplication {

    /**
     * HTTP request method Telnyx will use to interact with your XML Translator webhooks. Either 'get' or 'post'.
     */
    export enum voice_method {
        GET = 'get',
        POST = 'post',
    }

    /**
     * HTTP request method Telnyx should use when requesting the status_callback URL.
     */
    export enum status_callback_method {
        GET = 'get',
        POST = 'post',
    }

    /**
     * This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
     */
    export enum sip_subdomain_receive_settings {
        ONLY_MY_CONNECTIONS = 'only_my_connections',
        FROM_ANYONE = 'from_anyone',
    }


}


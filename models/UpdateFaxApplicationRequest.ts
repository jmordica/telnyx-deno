/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AnchorsiteOverride } from './AnchorsiteOverride.ts';
import type { ApplicationName } from './ApplicationName.ts';
import type { ConnectionActive } from './ConnectionActive.ts';
import type { FaxEmailRecipient } from './FaxEmailRecipient.ts';
import type { OutboundVoiceProfileId } from './OutboundVoiceProfileId.ts';
import type { WebhookEventFailoverUrl } from './WebhookEventFailoverUrl.ts';
import type { WebhookEventUrl } from './WebhookEventUrl.ts';
import type { WebhookTimeoutSecs } from './WebhookTimeoutSecs.ts';

export type UpdateFaxApplicationRequest = {
    application_name: ApplicationName;
    active?: ConnectionActive;
    anchorsite_override?: AnchorsiteOverride;
    webhook_event_url: WebhookEventUrl;
    webhook_event_failover_url?: WebhookEventFailoverUrl;
    webhook_timeout_secs?: WebhookTimeoutSecs;
    fax_email_recipient?: FaxEmailRecipient;
    inbound?: {
        /**
         * When set, this will limit the number of concurrent inbound calls to phone numbers associated with this connection.
         */
        channel_limit?: number;
        /**
         * Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.
         */
        sip_subdomain?: string;
        /**
         * This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
         */
        sip_subdomain_receive_settings?: UpdateFaxApplicationRequest.sip_subdomain_receive_settings;
    };
    outbound?: {
        /**
         * When set, this will limit the number of concurrent outbound calls to phone numbers associated with this connection.
         */
        channel_limit?: number;
        outbound_voice_profile_id?: OutboundVoiceProfileId;
    };
};

export namespace UpdateFaxApplicationRequest {

    /**
     * This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
     */
    export enum sip_subdomain_receive_settings {
        ONLY_MY_CONNECTIONS = 'only_my_connections',
        FROM_ANYONE = 'from_anyone',
    }


}


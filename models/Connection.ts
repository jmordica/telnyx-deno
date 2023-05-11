/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AnchorsiteOverride } from './AnchorsiteOverride.ts';
import type { OutboundVoiceProfileId } from './OutboundVoiceProfileId.ts';

export type Connection = {
    /**
     * Identifies the specific resource.
     */
    id?: string;
    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
    /**
     * Defaults to true
     */
    active?: boolean;
    anchorsite_override?: AnchorsiteOverride;
    connection_name?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
    /**
     * The URL where webhooks related to this connection will be sent.
     */
    webhook_event_url?: string | null;
    /**
     * The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails.
     */
    webhook_event_failover_url?: string | null;
    /**
     * Determines which webhook format will be used, Telnyx API v1 or v2.
     */
    webhook_api_version?: Connection.webhook_api_version;
    outbound_voice_profile_id?: OutboundVoiceProfileId;
};

export namespace Connection {

    /**
     * Determines which webhook format will be used, Telnyx API v1 or v2.
     */
    export enum webhook_api_version {
        _1 = '1',
        _2 = '2',
    }


}


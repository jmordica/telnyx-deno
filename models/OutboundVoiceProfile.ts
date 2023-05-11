/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OutboundCallRecording } from './OutboundCallRecording.ts';
import type { ServicePlan } from './ServicePlan.ts';
import type { TrafficType } from './TrafficType.ts';
import type { UsagePaymentMethod } from './UsagePaymentMethod.ts';

export type OutboundVoiceProfile = {
    /**
     * Identifies the resource.
     */
    id?: string;
    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
    /**
     * A user-supplied name to help with organization.
     */
    name: string;
    /**
     * Amount of connections associated with this outbound voice profile.
     */
    connections_count?: number;
    traffic_type?: TrafficType;
    service_plan?: ServicePlan;
    /**
     * Must be no more than your global concurrent call limit. Null means no limit.
     */
    concurrent_call_limit?: number | null;
    /**
     * Specifies whether the outbound voice profile can be used. Disabled profiles will result in outbound calls being blocked for the associated Connections.
     */
    enabled?: boolean;
    tags?: Array<string>;
    usage_payment_method?: UsagePaymentMethod;
    /**
     * The list of destinations you want to be able to call using this outbound voice profile formatted in alpha2.
     */
    whitelisted_destinations?: Array<string>;
    /**
     * Maximum rate (price per minute) for a Destination to be allowed when making outbound calls.
     */
    max_destination_rate?: number;
    /**
     * The maximum amount of usage charges, in USD, you want Telnyx to allow on this outbound voice profile in a day before disallowing new calls.
     */
    daily_spend_limit?: string;
    /**
     * Specifies whether to enforce the daily_spend_limit on this outbound voice profile.
     */
    daily_spend_limit_enabled?: boolean;
    call_recording?: OutboundCallRecording;
    /**
     * The ID of the billing group associated with the outbound proflile. Defaults to null (for no group assigned).
     */
    billing_group_id?: string | null;
    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    created_at?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    updated_at?: string;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IntId } from './IntId.ts';

export type PhoneNumberDeletedDetailed = {
    id?: IntId;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * The +E.164-formatted phone number associated with this record.
     */
    readonly phone_number?: string;
    /**
     * The phone number's current status.
     */
    readonly status?: PhoneNumberDeletedDetailed.status;
    /**
     * A list of user-assigned tags to help manage the phone number.
     */
    tags?: Array<string>;
    /**
     * If someone attempts to port your phone number away from Telnyx and your phone number has an external PIN set, Telnyx will attempt to verify that you provided the correct external PIN to the winning carrier. Note that not all carriers cooperate with this security mechanism.
     */
    external_pin?: string;
    /**
     * The user-assigned name of the connection to be associated with this phone number.
     */
    readonly connection_name?: string;
    /**
     * Identifies the connection associated with the phone number.
     */
    connection_id?: string;
    /**
     * A customer reference string for customer look ups.
     */
    customer_reference?: string;
    /**
     * Identifies the messaging profile associated with the phone number.
     */
    messaging_profile_id?: string;
    /**
     * The name of the messaging profile associated with the phone number.
     */
    messaging_profile_name?: string;
    /**
     * Identifies the billing group associated with the phone number.
     */
    billing_group_id?: string;
    /**
     * Indicates whether emergency services are enabled for this number.
     */
    readonly emergency_enabled?: boolean;
    /**
     * Identifies the emergency address associated with the phone number.
     */
    readonly emergency_address_id?: string;
    /**
     * Indicates if call forwarding will be enabled for this number if forwards_to and forwarding_type are filled in. Defaults to true for backwards compatibility with APIV1 use of numbers endpoints.
     */
    readonly call_forwarding_enabled?: boolean;
    /**
     * Indicates whether a CNAM listing is enabled for this number.
     */
    readonly cnam_listing_enabled?: boolean;
    /**
     * Indicates whether caller ID is enabled for this number.
     */
    readonly caller_id_name_enabled?: boolean;
    /**
     * Indicates whether call recording is enabled for this number.
     */
    readonly call_recording_enabled?: boolean;
    /**
     * Indicates whether T38 Fax Gateway for inbound calls to this number.
     */
    readonly t38_fax_gateway_enabled?: boolean;
    /**
     * ISO 8601 formatted date indicating the time the request was made to purchase the number.
     */
    readonly purchased_at?: string;
    /**
     * ISO 8601 formatted date indicating when the time it took to activate after the purchase.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    readonly updated_at?: string;
    /**
     * Specifies whether the number can have overrides to the routing settings on itself (enabled) or if it uses the associated connection for all routing settings (disabled). Defaults to disabled or the value set on your user profile in default_number_routing_setting. There are performance advantages to using disabled and setting all routing information at the connection level.
     */
    number_level_routing?: PhoneNumberDeletedDetailed.number_level_routing;
    /**
     * The phone number's type.
     */
    readonly phone_number_type?: PhoneNumberDeletedDetailed.phone_number_type;
};

export namespace PhoneNumberDeletedDetailed {

    /**
     * The phone number's current status.
     */
    export enum status {
        PURCHASE_PENDING = 'purchase-pending',
        PURCHASE_FAILED = 'purchase-failed',
        PORT_PENDING = 'port-pending',
        PORT_FAILED = 'port-failed',
        ACTIVE = 'active',
        DELETED = 'deleted',
        EMERGENCY_ONLY = 'emergency-only',
        PORTED_OUT = 'ported-out',
        PORT_OUT_PENDING = 'port-out-pending',
    }

    /**
     * Specifies whether the number can have overrides to the routing settings on itself (enabled) or if it uses the associated connection for all routing settings (disabled). Defaults to disabled or the value set on your user profile in default_number_routing_setting. There are performance advantages to using disabled and setting all routing information at the connection level.
     */
    export enum number_level_routing {
        ENABLED = 'enabled',
        DISABLED = 'disabled',
    }

    /**
     * The phone number's type.
     */
    export enum phone_number_type {
        LOCAL = 'local',
        TOLL_FREE = 'toll_free',
        MOBILE = 'mobile',
        NATIONAL = 'national',
        SHARED_COST = 'shared_cost',
        LANDLINE = 'landline',
    }


}


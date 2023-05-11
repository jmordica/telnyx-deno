/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessagingFeatureSet } from './MessagingFeatureSet.ts';
import type { NumberHealthMetrics } from './NumberHealthMetrics.ts';

export type PhoneNumberWithMessagingSettings = {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: PhoneNumberWithMessagingSettings.record_type;
    /**
     * Identifies the type of resource.
     */
    readonly id?: string;
    /**
     * +E.164 formatted phone number.
     */
    readonly phone_number?: string;
    /**
     * Unique identifier for a messaging profile.
     */
    messaging_profile_id?: string | null;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    readonly updated_at?: string;
    /**
     * ISO 3166-1 alpha-2 country code.
     */
    readonly country_code?: string;
    /**
     * The type of the phone number
     */
    readonly type?: PhoneNumberWithMessagingSettings.type;
    health?: NumberHealthMetrics;
    /**
     * The messaging products that this number can be registered to use
     */
    readonly eligible_messaging_products?: Array<string>;
    /**
     * The messaging traffic or use case for which the number is currently configured.
     */
    readonly traffic_type?: string;
    /**
     * The messaging product that the number is registered to use
     */
    messaging_product?: string;
    readonly features?: {
        sms?: MessagingFeatureSet;
        mms?: MessagingFeatureSet;
    };
};

export namespace PhoneNumberWithMessagingSettings {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        MESSAGING_PHONE_NUMBER = 'messaging_phone_number',
        MESSAGING_SETTINGS = 'messaging_settings',
    }

    /**
     * The type of the phone number
     */
    export enum type {
        LONG_CODE = 'long-code',
        TOLL_FREE = 'toll-free',
        SHORT_CODE = 'short-code',
        LONGCODE = 'longcode',
        TOLLFREE = 'tollfree',
        SHORTCODE = 'shortcode',
    }


}


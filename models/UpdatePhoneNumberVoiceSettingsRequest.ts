/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CallForwarding } from './CallForwarding.ts';
import type { CallRecording } from './CallRecording.ts';
import type { CnamListing } from './CnamListing.ts';
import type { MediaFeatures } from './MediaFeatures.ts';

export type UpdatePhoneNumberVoiceSettingsRequest = {
    /**
     * Controls whether a tech prefix is enabled for this phone number.
     */
    tech_prefix_enabled?: boolean;
    /**
     * This field allows you to rewrite the destination number of an inbound call before the call is routed to you. The value of this field may be any alphanumeric value, and the value will replace the number originally dialed.
     */
    translated_number?: string;
    call_forwarding?: CallForwarding;
    cnam_listing?: CnamListing;
    /**
     * Controls whether a number is billed per minute or uses your concurrent channels.
     */
    usage_payment_method?: UpdatePhoneNumberVoiceSettingsRequest.usage_payment_method;
    media_features?: MediaFeatures;
    call_recording?: CallRecording;
};

export namespace UpdatePhoneNumberVoiceSettingsRequest {

    /**
     * Controls whether a number is billed per minute or uses your concurrent channels.
     */
    export enum usage_payment_method {
        PAY_PER_MINUTE = 'pay-per-minute',
        CHANNEL = 'channel',
    }


}


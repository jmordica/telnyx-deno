/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OutboundVoiceProfileId } from './OutboundVoiceProfileId.ts';

export type CredentialOutbound = {
    /**
     * Forces all SIP calls originated on this connection to be "parked" instead of "bridged" to the destination specified on the URI. Parked calls will return ringback to the caller and will await for a Call Control command to define which action will be taken next.
     */
    call_parking_enabled?: boolean;
    /**
     * Set a phone number as the ani_override value to override caller id number on outbound calls.
     */
    ani_override?: string;
    /**
     * Specifies when we apply your ani_override setting. Only applies when ani_override is not blank.
     */
    ani_override_type?: CredentialOutbound.ani_override_type;
    /**
     * When set, this will limit the total number of outbound calls to phone numbers associated with this connection.
     */
    channel_limit?: number;
    /**
     * When set, ringback will not wait for indication before sending ringback tone to calling party.
     */
    instant_ringback_enabled?: boolean;
    /**
     * Generate ringback tone through 183 session progress message with early media.
     */
    generate_ringback_tone?: boolean;
    /**
     * A 2-character country code specifying the country whose national dialing rules should be used. For example, if set to `US` then any US number can be dialed without preprending +1 to the number. When left blank, Telnyx will try US and GB dialing rules, in that order, by default.
     */
    localization?: string;
    /**
     * This setting only affects connections with Fax-type Outbound Voice Profiles. The setting dictates whether or not Telnyx sends a t.38 reinvite.<br/><br/> By default, Telnyx will send the re-invite. If set to `customer`, the caller is expected to send the t.38 reinvite.
     */
    t38_reinvite_source?: CredentialOutbound.t38_reinvite_source;
    outbound_voice_profile_id?: OutboundVoiceProfileId;
};

export namespace CredentialOutbound {

    /**
     * Specifies when we apply your ani_override setting. Only applies when ani_override is not blank.
     */
    export enum ani_override_type {
        ALWAYS = 'always',
        NORMAL = 'normal',
        EMERGENCY = 'emergency',
    }

    /**
     * This setting only affects connections with Fax-type Outbound Voice Profiles. The setting dictates whether or not Telnyx sends a t.38 reinvite.<br/><br/> By default, Telnyx will send the re-invite. If set to `customer`, the caller is expected to send the t.38 reinvite.
     */
    export enum t38_reinvite_source {
        TELNYX = 'telnyx',
        CUSTOMER = 'customer',
        DISABLED = 'disabled',
        PASSTHRU = 'passthru',
        CALLER_PASSTHRU = 'caller-passthru',
        CALLEE_PASSTHRU = 'callee-passthru',
    }


}


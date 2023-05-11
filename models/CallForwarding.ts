/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The call forwarding settings for a phone number.
 */
export type CallForwarding = {
    /**
     * Indicates if call forwarding will be enabled for this number if forwards_to and forwarding_type are filled in. Defaults to true for backwards compatibility with APIV1 use of numbers endpoints.
     */
    call_forwarding_enabled?: boolean;
    /**
     * The phone number to which inbound calls to this number are forwarded. Inbound calls will not be forwarded if this field is left blank. If set, must be a +E.164-formatted phone number.
     */
    forwards_to?: string;
    /**
     * Call forwarding type. 'forwards_to' must be set for this to have an effect.
     */
    forwarding_type?: CallForwarding.forwarding_type;
};

export namespace CallForwarding {

    /**
     * Call forwarding type. 'forwards_to' must be set for this to have an effect.
     */
    export enum forwarding_type {
        ALWAYS = 'always',
        ON_FAILURE = 'on_failure',
    }


}


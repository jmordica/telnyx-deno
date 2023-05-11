/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomSipHeader } from './CustomSipHeader.ts';
import type { SipHeader } from './SipHeader.ts';

export type ReferRequest = {
    /**
     * The SIP URI to which the call will be referred to.
     */
    sip_address: string;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.
     */
    command_id?: string;
    /**
     * Custom headers to be added to the SIP INVITE.
     */
    custom_headers?: Array<CustomSipHeader>;
    /**
     * SIP Authentication username used for SIP challenges.
     */
    sip_auth_username?: string;
    /**
     * SIP Authentication password used for SIP challenges.
     */
    sip_auth_password?: string;
    /**
     * SIP headers to be added to the request. Currently only User-to-User header is supported.
     */
    sip_headers?: Array<SipHeader>;
};


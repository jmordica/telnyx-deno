/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MdrDetailResponse = {
    /**
     * Message sent time
     */
    created_at?: string;
    /**
     * Configured profile name. New profiles can be created and configured on Telnyx portal
     */
    profile_name?: string;
    /**
     * Direction of message - inbound or outbound.
     */
    direction?: string;
    /**
     * Number of parts this message has. Max number of character is 160. If message contains more characters then that it will be broken down in multiple parts
     */
    parts?: number;
    /**
     * Message status
     */
    status?: MdrDetailResponse.status;
    /**
     * The destination number for a call, or the callee
     */
    cld?: string;
    /**
     * The number associated with the person initiating the call, or the caller
     */
    cli?: string;
    /**
     * Rate applied to the message
     */
    rate?: string;
    /**
     * Final cost. Cost is calculated as rate * parts
     */
    cost?: string;
    /**
     * Currency of the rate and cost
     */
    currency?: MdrDetailResponse.currency;
    /**
     * Id of message detail record
     */
    id?: string;
    /**
     * Type of message
     */
    message_type?: MdrDetailResponse.message_type;
    record_type?: string;
};

export namespace MdrDetailResponse {

    /**
     * Message status
     */
    export enum status {
        GW_TIMEOUT = 'GW_TIMEOUT',
        DELIVERED = 'DELIVERED',
        DLR_UNCONFIRMED = 'DLR_UNCONFIRMED',
        DLR_TIMEOUT = 'DLR_TIMEOUT',
        RECEIVED = 'RECEIVED',
        GW_REJECT = 'GW_REJECT',
        FAILED = 'FAILED',
    }

    /**
     * Currency of the rate and cost
     */
    export enum currency {
        AUD = 'AUD',
        CAD = 'CAD',
        EUR = 'EUR',
        GBP = 'GBP',
        USD = 'USD',
    }

    /**
     * Type of message
     */
    export enum message_type {
        SMS = 'SMS',
        MMS = 'MMS',
    }


}

